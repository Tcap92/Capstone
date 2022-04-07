import html from "html-literal";

export default st => html`
  ${console.log(st.facts)}
  <h1>Facts</h1>
  <div id="factPage">
    <div id="demonFact" class="factStyle">
      <h3>Random Anime Facts</h3>
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[0].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">${name.facts[1].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[2].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[3].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[4].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[5].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[6].fact}</div>`;
      })}
      ${st.facts.map(name => {
        return `<div class="demonFacts">-${name.facts[7].fact}</div>`;
      })}
    </div>
  </div>
`;
// <!-- <div id="brotherFact" class="factStyle">
//       <h3>FMA Brotherhood Facts</h3>
//       ${st.brotherhood.map(
//       element => `<div class="brotherFacts">-${element.fact}</div>`
//     )}
//     </div>
//     <div id="heroFact" class="factStyle">
//       <h3>My Hero Academia</h3>
//       ${st.hero.map(element => `<div class="heroFacts">-${element.fact}</div>`)}
//     </div>
//     <div id="titanFact" class="factStyle">
//       <h3>Attack On Titan</h3>
//       ${st.titan.map(
//       element => `<div class="titanFacts">-${element.fact}</div>`
//     )}
//     </div> -->
