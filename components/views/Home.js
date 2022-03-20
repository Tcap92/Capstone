import html from "html-literal";
import flameHashira from "../../assets/images/Anime.jpg";
import Yami from "../../assets/images/Anime2.jpg";
export default st => html`
  <div>
    <div class="mainContent">
      <div class="pageLeft">
        <div id="demonSlayer">
          <img src=${flameHashira} alt="Flame Hashira" />
          <div class="mainP">
            <p id="questions1">
              -----I want to have pictures in a rectangle with a random Anime
              picture inside of the rectangle and I want the rectangle a little
              off center to the left, underneath the pictures i want another box
              the same width as the picture with a QUESTION/4-ANSWERS. On the
              far Right i want to embed 2 random Anime videos(working on this.)
              Also im having some trouble to get my footer to just stick to the
              very bottom of the page which I have been messing around with.
            </p>
          </div>
          <img src=${Yami} alt="Captain Yami" />
          <p id="questions2">
            -----I want to have pictures in a rectangle with a random Anime
            picture inside of the rectangle and I want the rectangle a little
            off center to the left, underneath the pictures i want another box
            the same width as the picture with a QUESTION/4-ANSWERS. On the far
            Right i want to embed 2 random Anime videos(working on this.) Also
            im having some trouble to get my footer to just stick to the very
            bottom of the page which I have been messing around with.
          </p>
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
