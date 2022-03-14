import html from "html-literal";
export default st => html`
  <h1>Facts</h1>
  <h3>
    ${st.facts.img} facts are ${st.facts.title};
  </h3>
`;
