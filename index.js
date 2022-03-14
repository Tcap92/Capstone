import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { doesNotMatch } from "assert";

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
}

function addEventListeners(st) {
  console.log("Event listener state", st);
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      console.log("this is the event", event);
      event.preventDefault();
      render(st[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

axios
  .get("https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer")

  .then(response => {
    state.Facts.facts = {};
    state.Facts.facts.title = response.data.fact_id;
    state.Facts.facts.img = response.img;
  });

router
  .on({
    "/": () => render(state.Home),
    ":view": params => {
      console.log("render state", state);
      console.log("render prams", params); //remove
      let view = capitalize(params.data.view);
      render(state[view]);
    }
  })
  .resolve();
