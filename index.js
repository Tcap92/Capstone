import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import { doesNotMatch } from "assert";
import dotenv from "dotenv";
import * as Quiz from "/Quiz.js";
dotenv.config();

const router = new Navigo("/");

function render(st = state.home) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;

  router.updatePageLinks();
  addEventListeners(st);
}

// function addFacts(st) {
//   st.facts.map(fact => {
//     let content = document.createElement("div");
//     content.innerText = fact.fact;
//     document.getElementById("factRoot").appendChild(content);
//   });
// }

function addEventListeners(st) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    // Quiz.test();
    // Quiz.btn();
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  //Quiz return
  if (st.view === "Home") {
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (document.getElementById("question1A1").checked === true) {
        state.Quiz.deku += 1;
        console.log(state.Quiz.deku);
      }
      if (document.getElementById("question1A2").checked === true) {
        state.Quiz.bakugo += 1;
      }
      if (document.getElementById("question2A1").checked === true) {
        state.Quiz.bakugo += 1;
      }
      if (document.getElementById("question2A2").checked === true) {
        state.Quiz.deku += 1;
      }
      if (document.getElementById("question1A1").checked === true) {
        state.Quiz.bakugo += 1;
      }
      if (document.getElementById("question1A2").checked === true) {
        state.Quiz.deku += 1;
      }
      console.log("QUIZ RESULTS", state.Quiz);
      router.navigate("Results");
      render(state.Results);
    });
  }
}
// if (st.view === "Facts") {
//   addFacts(st);
// }

// API incase it starts to work
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Facts";
    if (view === "Facts") {
      //       axios
      //         .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`)
      //         .then(response => {
      //           state.Facts.demon = response.data.data;
      //           done();
      //         });
      //       const slayer = axios.get(
      //         `https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`
      //       );
      //       const brother = axios.get(
      //         `https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood`
      //       );
      //       const hero = axios.get(
      //         `https://anime-facts-rest-api.herokuapp.com/api/v1/boku_no_hero_academia`
      //       );
      //       const titan = axios.get(
      //         `https://anime-facts-rest-api.herokuapp.com/api/v1/attack_on_titan`
      //       );
      //       axios.all([slayer, brother, hero, titan]).then(
      //         axios.spread((...responses) => {
      //           console.log("Slayer", responses[0]);
      //           state.Facts.demon = responses[0].data.data;
      //           console.log("brother", responses[1]);
      //           state.Facts.brotherhood = responses[1].data.data;
      //           console.log("hero", responses[2]);
      //           state.Facts.hero = responses[2].data.data;
      //           console.log("titan", responses[3]);
      //           state.Facts.titan = responses[3].data.data;

      //           done();
      //         })
      //       );
      //     } else {
      //       done();
      //     }
      //   }
      // });
      axios
        .get(`${process.env.ANIME_FACTS_API_URL}`)
        .then(response => {
          console.log(response.data);
          state.Facts.facts = response.data;
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
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
