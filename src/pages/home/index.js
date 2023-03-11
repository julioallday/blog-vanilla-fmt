const fetchPosts = async (postPage, postLimit = 20) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${postPage}&_limit=${postLimit}`
  ).then((res) => res.json());

const listarPosts = async () => {
  let postPage = 1;
  const main = document.getElementById("posts");
  const posts = await fetchPosts(postPage);
  posts.forEach((element, index, array) => {
    const post = document.createElement("div");
    post.setAttribute("class", "blog-post");
    main.appendChild(post);
    post.innerHTML = `
    <a id="post-${element.id}">
        <h4>${element.title}</h4>
        <p>${element.body}</p>
    </a>`;
    let button = document.getElementById("fetch-posts");
    if (array.length < 20) {
      button.classList.remove("show");
      button.classList.add("hide");
    } else {
      button.classList.remove("hide");
      button.classList.add("show");
    }
  });
};
listarPosts();

