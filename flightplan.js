var plan = require('flightplan');

var tmpDir = 'blogster-server-' + new Date().getTime();
var user = 'deploy';

plan.target('production', {
  host: '138.68.178.32',
  username: user,
  port: 5555,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('nvm use default');
  remote.log('Moving folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Installing dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/blogster_server/current');
  remote.exec('(cd ~/bloster_server/current && pm2 restart pm2.config.js --env production)');

  remote.log('Deploy process completed.');
});
