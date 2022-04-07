import html from "html-literal";
import Quiz from "../../store/Quiz";
export default st => {
  console.log(Quiz.deku > Quiz.bakugo);
  if (Quiz.deku > Quiz.bakugo) {
    return html`
      <div class="resultDeku">
        <h1>${st.deku.finishing}</h1>
        <p>${st.deku.description}</p>
        <img src="${st.deku.profileImg}" />
      </div>
    `;
  }
  return html`
    <div>
      <div class="resultBakugo">
        <h1>${st.bakugo.finishing}</h1>
        <p>${st.bakugo.description}</p>
        <img src="${st.bakugo.profileImg}" />
      </div>
    </div>
  `;
};
