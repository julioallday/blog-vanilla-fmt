import { comentsService } from "../services/comentsService.js";

export const createModal = (element) => {
  const modal = document.getElementById("modal");
  const main = document.getElementById("posts");
  const section = document.getElementById("fetch-posts");

  modal.style.display = "flex";
  main.style.opacity = 0.2;

  modal.innerHTML = `
          <button id="close-modal"}">X</button>
        <div class="title">
              <h4>${element.title}</h4>
          </div>
          <div class="content">
              <p>${element.body}</p>
          </div>
        `;
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  div.classList.add("coments");
  ul.classList.add("coments-list");
  ul.innerHTML = ` <em><b> Coments:</b></em>
      <br>`;
  element.coments.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("coment-item");
    li.innerHTML = `${el.body}<br><hr>`;
    ul.appendChild(li);
    div.appendChild(ul);
    modal.appendChild(div);
    modal.addEventListener("mouseleave", () => {
      modal.style.display = "none";
      main.style.opacity = 1;

    });
  });

  let closeModalButton = document.getElementById("close-modal");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
export const openModalListener = (element) => {
  document
    .getElementById(`post-${element.id}`)
    .addEventListener("click", async () => {
      const coments = await comentsService(element.id);
      let obj = { ...element, coments: coments };
      currentPost.shift();
      currentPost.push(obj);
      console.log(currentPost[0]);
      createModal(currentPost[0]);
    });
};
