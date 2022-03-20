import html from "html-literal";

export default st => html`
  <h1>Facts</h1>
  <div id="factPage">
    <div id="demonFact" class="factStyle">
      ${st.demon.map(element => `<div class="demonFact">${element.fact}</div>`)}
    </div>
    <div id="brotherFact" class="factStyle">
      ${st.brotherhood.map(
        element => `<div class="brotherFacts">${element.fact}</div>`
      )}
    </div>
  </div>
`;
