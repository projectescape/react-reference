import axios from 'axios';

const KEY = 'AIzaSyC-TU9hYgS6On2POIeeYkRICuKkEH5ZjqI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
