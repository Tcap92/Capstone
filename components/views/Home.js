import html from "html-literal";
import flameHashira from "../../assets/images/Anime.jpg";
import Yami from "../../assets/images/Anime2.jpg";
export default st => html`
  <div>
    <div class="mainContent">
      <div class="pageLeft">
        <div id="demonSlayer">
          <img src=${flameHashira} alt="Flame Hashira" />
          <!-- <div class="mainP"> -->
          <div class="container">
            <div id="question-container" class="hide">
              <div id="question">Question</div>
              <div id="answer-buttons" class="btn-grid">
                <div id="answerOneTwo">
                  <!-- input type check box -->
                  <input
                    type="radio"
                    id="question1A1"
                    name="drone"
                    value="question1A1"
                    checked
                  />
                  <label for="huey">Question1A1</label>
                </div>
                <input
                  type="radio"
                  id="question1A2"
                  name="drone"
                  value="question1A2"
                  checked
                />
                <label for="huey">Question1A2</label>
                <div id="answerThreeFour">
                  <input
                    type="radio"
                    id="question1A3"
                    name="drone"
                    value="question1A3"
                    checked
                  />
                  <label for="huey">Question1A3</label>
                </div>
                <input
                  type="radio"
                  id="question1A4"
                  name="drone"
                  value="question1A4"
                  checked
                />
                <label for="huey">Question1A4</label>
              </div>
            </div>
            <div class="controls">
              <button id="start-btn" class="start-btn btn">Start</button>
              <button id="next-btn" class="next-btn btn hide">Next</button>
            </div>
          </div>
          <!-- </div> -->
          <img src=${Yami} alt="Captain Yami" />
          <div id="question-containerTwo">
            <div id="question2">Question2</div>
            <div id="answer-buttons" class="btn-grid">
              <div id="answerOneTwo">
                <!-- input type check box -->
                <input
                  type="radio"
                  id="question2A1"
                  name="drone"
                  value="question2A1"
                  checked
                />
                <label for="huey">Question2A1</label>
              </div>
              <input
                type="radio"
                id="question2A2"
                name="drone"
                value="question2A2"
                checked
              />
              <label for="huey">Question2A2</label>
              <div id="answerThreeFour">
                <input
                  type="radio"
                  id="question2A3"
                  name="drone"
                  value="question2A3"
                  checked
                />
                <label for="huey">Question2A3</label>
              </div>
              <input
                type="radio"
                id="question1A4"
                name="drone"
                value="question1A4"
                checked
              />
              <label for="huey">Question2A4</label>
            </div>
          </div>
        </div>
      </div>
      <div class="pageRight">
        <div id="blackBull">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kitCDvmSygM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
`;
