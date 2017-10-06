async function sendRequest(url, requestParams) {
  let response = await fetch(url, requestParams);
  let result;

  try {
    result = await response.json();
  } catch (e) {
    result = { error: e };
  }
  return result;
}

class API {
  static async getTrending() {
    return sendRequest(`/api/trending`);
  }

  static async getArticle(author, permlink) {
    return sendRequest(`/api/article/${author}/${permlink}`);
  }

  static async getTags() {
    return sendRequest(`/api/tags`);
  }
}

export default API;
