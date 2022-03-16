import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { doesNotMatch } from "assert";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;

  router.updatePageLinks();
  addEventListeners(st);
  if (st.view === "Facts") {
    addFacts(st);
  }
}

function addFacts(st) {
  st.facts.map(fact => {
    let content = document.createElement("div");
    content.innerText = fact.fact;
    document.getElementById("factRoot").appendChild(content);
  });

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(st[event.target.title]);
    })
  );
}
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Facts";
    if (view === "Facts") {
      axios
        .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`)
        .then(response => {
          state.Facts.facts = response.data.data;
          done();
        });
    }
  }
});

router
  .on({
    "/": () => {
      console.log("render state", state.Home);
      render(state.Home);
    },
    ":view": params => {
      let view = capitalize(params.data.view);
      console.log("render state", state[view]);

      render(state[view]);
    }
  })
  .resolve();
