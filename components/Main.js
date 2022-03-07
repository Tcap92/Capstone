import html from "html-literal";
export default st => html`
  <div>
    <div class="mainContent">
      <div class="pageLeft">
        <div id="demonSlayer">
          <img src="Anime.jpg" alt="Flame Hashira" />
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
        </div>
      </div>
      <div class="pageRight">
        <div id="blackBull">
          <img src="Anime2.jpg" alt="Yami" />
        </div>
      </div>
    </div>
    <main class="mainHome">
      <div id="animeFacts" class="factsAnime">
        <div id="facts2">
          <!-- <p style="margin-left: 850px;"><a href="https://funnyjunk.com/channel/animemanga/Random+anime+facts/iwxXLvj/">Some cool ANIME FACTS!</a></p> -->
        </div>
      </div>
    </main>
  </div>
`;
