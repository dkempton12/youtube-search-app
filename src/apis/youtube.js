import axios from 'axios';

const KEY = 'AIzaSyCULdujX6qmvNDwZFs6ogR7DbI7dr2ZjdY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // we'll include part, maxResults and q
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
