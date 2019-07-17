import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://article-reviews.herokuapp.com/api'
});

export const getArticles = (topic, author, sort_by, order) => {
  return instance
    .get(`/articles`, {
      params: {
        topic,
        author,
        sort_by,
        order,
        limit: 1000
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = article_id => {
  return instance.get(`/articles/${article_id}`, {}).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = article_id => {
  return instance.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postComment = (article_id, newComment) => {
  return instance
    .post(`articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = id => {
  return instance.delete(`comments/${id}`);
};

export const vote = (type, id, increment) => {
  return instance.patch(`/${type}/${id}`, {
    inc_votes: increment
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
