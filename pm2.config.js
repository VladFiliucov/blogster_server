module.exports = {
  apps: [
    {
      name: 'blog server',
      script: './index.js',
      env: {
        'NODE_ENV': 'development'
      },
      env_production: {
        'NODE_ENV': 'production'
      }
    }
  ]
};
