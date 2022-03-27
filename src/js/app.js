import "./plugins";
import "../styles/index.scss";
import api from "./config/api.config";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  await fetchedUsers();
}
const fetchedUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  render(data);
};

const render = (users) => {
  const container = document.querySelector(".container");

  let fragment = "";

  users.forEach((user) => {
    fragment += template(user);
  });

  container.insertAdjacentHTML("afterbegin", fragment);
};

const template = (user) => {
  return `
    <div>
    Name: ${user.name}
    </div>
    `;
};
// "start": "cross-env NODE_ENV=development webpack serve --open",
// "dev": "cross-env NODE_ENV=development webpack",
// "build": "cross-env NODE_ENV=production webpack"
