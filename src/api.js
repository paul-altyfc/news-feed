import axios from 'axios';

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

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};

// export const postDinosaur = async newDinosaur => {
//   const { data } = await axios.post(`${BASE_URL}/dinosaurs`, newDinosaur);
//   return data;
// };

// export const deleteDinosaurById = id => {
//   return axios.delete(`${BASE_URL}/dinosaurs/${id}`);
// };
