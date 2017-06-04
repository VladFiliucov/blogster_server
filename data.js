var moment = require('moment');

module.exports = {
  posts: [
    {
      id: 1,
      text: 'This is an awesome blogpost 1',
      details: {
        author: 'Avdi Grimm',
        createdAt: moment('20150620', 'YYYYMMDD')
        .fromNow(),
        updatedAt: moment().startOf('day')
        .fromNow(),
        likes: 12
      },
      image: {
        src: '/pictures/picture1.jpg',
        alt: 'Who cares',
        style: {width: 200, height: 200}
      }
    },

    {
      id: 2,
      text: 'This is an awesome blogpost 2',
      details: {
        author: 'Gary Bernhardt',
        createdAt: moment('20140620', 'YYYYMMDD')
        .fromNow(),
        updatedAt: moment().startOf('day')
        .fromNow(),
        likes: 34
      },
      image: {
        src: '/pictures/picture2.jpg',
        alt: 'Who cares',
        style: {width: 200, height: 200}
      }
    },

    {
      id: 3,
      text: 'This is an awesome blogpost 3',
      details: {
        author: 'Ryan Bates',
        createdAt: moment('20160620', 'YYYYMMDD')
        .fromNow(),
        updatedAt: moment().startOf('day')
        .fromNow(),
        likes: 99
      },
      image: {
        src: '/pictures/picture3.jpg',
        alt: 'Who cares',
        style: {width: 200, height: 200}
      }
    }
  ]
};
