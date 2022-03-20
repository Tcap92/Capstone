import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import { doesNotMatch } from "assert";
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
}

function addFacts(st) {
  st.facts.map(fact => {
    let content = document.createElement("div");
    content.innerText = fact.fact;
    document.getElementById("factRoot").appendChild(content);
  });
}

function addEventListeners(st) {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // if (st.view === "Facts") {
  //   addFacts(st);
  // }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Facts";
    if (view === "Facts") {
      // axios
      //   .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`)
      //   .then(response => {
      //     state.Facts.demon = response.data.data;
      //     done();
      //   });
      let slayer = axios.get(
        `https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`
      );
      let brother = axios.get(
        `https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood`
      );
      axios.all([slayer, brother]).then(
        axios.spread((...responses) => {
          console.log("Slayer", responses[0]);
          state.Facts.demon = responses[0].data.data;
          console.log("brother", responses[1]);
          state.Facts.brotherhood = responses[1].data.data;

          done();
        })
      );
    } else {
      done();
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
