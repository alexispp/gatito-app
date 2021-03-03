import axios from "axios";
// @ts-ignore
import { API_KEY } from "@env";
// import { API_KEY } from "react-native-dotenv";
import { ICard } from "components/CardList/Card.type";

// const axiosInstance = axios.create({
//   baseURL: "https://api.thecatapi.com",
//   headers: {
//     common: {
//       "x-api-key": API_KEY,
//     }
//   }
// });

axios.interceptors.response.use((res: any) => {
  res.data.map((element: any) => {
    const card: ICard = {
      breeds: element.breeds,
      id: element.id,
      url: element.url,
      width: element.width,
      height: element.height,
    };

    return card;
  });

  return res;
});
export const getCatPics = async () => {
  let res = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=25",
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  return res.data;
};
