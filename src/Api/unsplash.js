import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
     'Client-ID 64d8a45607cde691c5842059bbd5213dc8998b5aab05ab66351e815819067045'
  }
});
