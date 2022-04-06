import html from "html-literal";
export default st => html`
  <div class="resultDeku">
    <h1>${st.Character.deku.finishing}</h1>
    <p>${st.Character.deku.description}</p>
    <img src="${st.Character.deku.profileImg}" />
  </div>
  <div>
    <div class="resultBakugo">
      <h1>${st.Character.bakugo.finishing}</h1>
      <p>${st.Character.bakugo.description}</p>
      <img src="${st.Character.bakugo.profileImg}" />
    </div>
  </div>
`;
