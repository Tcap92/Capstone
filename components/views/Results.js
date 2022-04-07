import html from "html-literal";
import Quiz from "../../store/Quiz";
export default st => {
  console.log(Quiz.deku > Quiz.bakugo);
  if (Quiz.deku > Quiz.bakugo) {
    return html`
      <div class="resultDeku">
        <div class="dekuBox">
          <img src="${st.deku.profileImg}" class="deku" />
        </div>
        <div class="dekuResult">
          <h1 class="dekuDescription">${st.deku.description}</h1>
          <h2 class="dekuFinish">${st.deku.finishing}</h2>
        </div>
      </div>
    `;
  }
  return html`
    <div>
      <div class="resultBakugo">
        <div class="bakugoBox">
          <img src="${st.bakugo.profileImg}" class="bakugo" />
        </div>
        <div class="bakugoResult">
          <h1 class="bakugoDescription">${st.bakugo.description}</h1>
          <h2 class="bakugoFinish">${st.bakugo.finishing}</h2>
        </div>
      </div>
    </div>
  `;
};
