import axios from 'axios';
import { async } from 'q';

const BASE_URL = 'https://article-reviews.herokuapp.com';

export const getEndpoints = async () => {
  const { data } = await axios.get(`${BASE_URL}/api`);
  return data;
};

export const getTopics = async () => {
  console.log('in getTopics');
  const { data } = await axios.get(`${BASE_URL}/api/topics`);
  return data;
};

//  export const getArticles = async () => {
//   const { data } = await axios.get(`${BASE_URL}/api/articles`);
//   return data;
// };

export const getArticles = async (cursor = 1, retInfo = []) => {
  const apiUrl = BASE_URL + '/api/articles?p=' + cursor;
  const articles = await axios
    .get(apiUrl)
    .then(response => response)
    .then(res => {
      if (res.data.articles.length < 1) {
        // console.log(retInfo);
        return retInfo;
      }
      console.log(`loading page ${cursor}`);
      retInfo.push(...res.data.articles);
      //  console.log(retInfo);
      return getArticles(cursor + 1, retInfo);
    });
  return articles;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/users`);
  return data;
};

// export const postDinosaur = async newDinosaur => {
//   const { data } = await axios.post(`${BASE_URL}/dinosaurs`, newDinosaur);
//   return data;
// };

// export const deleteDinosaurById = id => {
//   return axios.delete(`${BASE_URL}/dinosaurs/${id}`);
// };
