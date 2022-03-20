import html from "html-literal";

export default st => html`
  <h1>Facts</h1>
  <div id="factPage">
    <div id="demonFact" class="factStyle">
      <h3>Demon Slayer Facts</h3>
      ${st.demon.map(
        element => `<div class="demonFacts">-${element.fact}</div>`
      )}
    </div>
    <div id="brotherFact" class="factStyle">
      <h3>FMA Brotherhood Facts</h3>
      ${st.brotherhood.map(
        element => `<div class="brotherFacts">-${element.fact}</div>`
      )}
      <div id="heroFact" class="factStyle">
        <h3>My Hero Academia</h3>
        ${st.hero.map(
          element => `<div class="heroFacts">-${element.fact}</div>`
        )}
        <div id="titanFact" class="factStyle">
          <h3>Attack On Titan</h3>
          ${st.titan.map(
            element => `<div class="titanFacts">-${element.fact}</div>`
          )}
        </div>
      </div>
    </div>
  </div>
`;
