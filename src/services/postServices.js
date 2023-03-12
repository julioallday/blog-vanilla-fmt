export const postsService = async (postPage, postLimit = 20) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${postPage}&_limit=${postLimit}`
  ).then((res) => res.json());

