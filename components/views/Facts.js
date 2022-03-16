import html from "html-literal";

export default st => html`
  <h1>Facts</h1>
  <div id="factRoot">
    ${st.facts.map(element => `<div class="demonFact">${element.fact}</div>`)}
  </div>
`;
