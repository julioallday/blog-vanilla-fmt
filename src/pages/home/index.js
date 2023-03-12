import { openModalListener } from "../../components/modal.js";
import { postsService } from "../../services/postServices.js";

let postPage = 1;
let currentPost = [];
window.currentPost = currentPost;

const listPosts = async () => {
  const main = document.getElementById("posts");
  const posts = await postsService(postPage);

  posts.forEach(async (element) => {
    const post = document.createElement("div");
    post.setAttribute("class", "blog-post");
    main.appendChild(post);
    post.id = `post-${element.id}`;

    post.innerHTML = `
        <h4>${element.title}</h4>
        <p>${element.body}</p>
    `;

    openModalListener(element);
  });
  postPage++;

  let button = document.getElementById("fetch-posts");
  if (posts.length < 20) {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
};

let button = document.getElementById("fetch-posts");
button.addEventListener("click", () => {
  listPosts();
});



listPosts();

