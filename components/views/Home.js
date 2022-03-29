import html from "html-literal";
// import { Quiz } from "Quiz.js";
import flameHashira from "../../assets/images/Anime.jpg";
import Yami from "../../assets/images/Anime2.jpg";
import allMight from "../../assets/images/AllMight.jpg";
export default st => html`
  <div>
    <div class="mainContent">
      <div class="pageLeft">
        <div id="demonSlayer">
          <img src=${flameHashira} class="picOne" alt="Flame Hashira" />
          <!-- <div class="mainP"> -->
          <div class="container">
            <div id="question-container" class="hide">
              <div id="question">Which do you value more?</div>
              <div id="answer-buttons" class="btn-grid">
                <div id="answerOneTwo">
                  <!-- input type check box -->
                  <input
                    type="radio"
                    id="question1A1"
                    name="question"
                    value="question1A1"
                    checked
                  />
                  <label for="huey">Friends & Family</label>
                </div>
                <input
                  type="radio"
                  id="question1A2"
                  name="question"
                  value="deku"
                  checked
                />
                <label for="huey">Being the best</label>
                <div id="answerThreeFour">
                  <input
                    type="radio"
                    id="question1A3"
                    name="question"
                    value="bakugo"
                    checked
                  />
                  <label for="huey">Question1A3</label>
                </div>
                <input
                  type="radio"
                  id="question1A4"
                  name="question"
                  value="question1A4"
                  checked
                />
                <label for="huey">Question1A4</label>
              </div>
            </div>
          </div>
          <!-- </div> -->
          <img src=${Yami} class="picTwo" alt="Captain Yami" />
          <div id="question-containerTwo">
            <div id="question2">Which temperament best describes yourself?</div>
            <div id="answer-buttons" class="btn-grid">
              <div id="answerOneTwo">
                <!-- input type check box -->
                <input
                  type="radio"
                  id="question2A1"
                  name="question"
                  value="bakugo"
                  checked
                />
                <label for="huey">Short-Tempered</label>
              </div>
              <input
                type="radio"
                id="question2A2"
                name="question"
                value="deku"
                checked
              />
              <label for="huey">Reserved</label>
              <div id="answerThreeFour">
                <input
                  type="radio"
                  id="question2A3"
                  name="question"
                  value="question2A3"
                  checked
                />
                <label for="huey">Question2A3</label>
              </div>
              <input
                type="radio"
                id="question1A4"
                name="question"
                value="question1A4"
                checked
              />
              <label for="huey">Question2A4</label>
            </div>
          </div>
          <img src=${allMight} class="picThree" alt="All Might" />
          <div id="question-containerTwo">
            <div id="question2">What would you rather fight with?</div>
            <div id="answer-buttons" class="btn-grid">
              <div id="answerOneTwo">
                <!-- input type check box -->
                <input
                  type="radio"
                  id="question2A1"
                  name="question"
                  value="bakugo"
                  checked
                />
                <label for="huey">Hands</label>
              </div>
              <input
                type="radio"
                id="question2A2"
                name="question"
                value="deku"
                checked
              />
              <label for="huey">Feet</label>
              <div id="answerThreeFour">
                <input
                  type="radio"
                  id="question2A3"
                  name="question"
                  value="question2A3"
                  checked
                />
                <label for="huey">Question2A3</label>
              </div>
              <input
                type="radio"
                id="question1A4"
                name="question"
                value="question1A4"
                checked
              />
              <label for="huey">Question2A4</label>
            </div>
          </div>
          <div class="controls">
            <button id="submit-btn" class="start-btn btn">Submit</button>
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
