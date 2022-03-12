const pitchfork = require('pitchfork-api');
const options = {
  genre: 'jazz',
  start: 0,
  size: 3,
  sort: 'asc',
  verbose: true
};
pitchfork.query(options, (err, res) => {
  console.log(res);
});