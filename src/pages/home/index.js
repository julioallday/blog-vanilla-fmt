const page = 1;
const limit = 20;


const fetchPosts = async (page, limit) => await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then((res) => res.json());

const mostraHome = async () => {
  const main = document.getElementById("posts");
  const posts = await fetchPosts(page, limit)
  posts.forEach((element) => {
    const post = document.createElement("div");
    post.setAttribute("class", "blog-post");
    main.appendChild(post);
    post.innerHTML = `
    <a id="post-${element.id}">
        <h4>${element.title}</h4>
        <p>${element.body}</p>
    </a>`;
    console.log(element);
  });
};
mostraHome();
