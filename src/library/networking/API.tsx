import axios from 'axios';
// @ts-ignore
import {API_KEY} from 'react-native-dotenv';


export const getCatPics = async () => {
  let res = await axios.get('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': API_KEY
    }});
  return res.data;
}

