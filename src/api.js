import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://article-reviews.herokuapp.com/api'
});

export const getArticles = (topic, author) => {
  console.log(author);
  return instance
    .get(`/articles`, {
      params: {
        topic: topic,
        author: author
      }
    })
    .then(({ data }) => {
      // console.log(data, 'in api');
      return data;
    });
};

export const getArticleById = article_id => {
  return instance
    .get(`/articles/${article_id}`, {
      //  params: { topic: topic }
    })
    .then(({ data }) => {
      // console.log(data, 'in api');
      return data;
    });
};

// PMD 15/07/19 Recursive code that retrieves all records in a single go
// export const getArticles = async (cursor = 1, retInfo = []) => {
//   const apiUrl = BASE_URL + '/api/articles?p=' + cursor;
//   const articles = await axios
//     .get(apiUrl)
//     .then(response => response)
//     .then(res => {
//       if (res.data.articles.length < 1) {
//         return retInfo;
//       }
//       console.log(`loading page ${cursor}`);
//       retInfo.push(...res.data.articles);
//       //  console.log(retInfo);
//       return getArticles(cursor + 1, retInfo);
//     });
//   return articles;
// };

// export const getUsers = () => {
//   const { data } = instance.get(`/users`);
//   return data.users;
// };

// export const postDinosaur = async newDinosaur => {
//   const { data } = await axios.post(`${BASE_URL}/dinosaurs`, newDinosaur);
//   return data;
// };

// export const deleteDinosaurById = id => {
//   return axios.delete(`${BASE_URL}/dinosaurs/${id}`);
// };
