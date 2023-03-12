export const comentsService = async (postId) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((res) => res.json());