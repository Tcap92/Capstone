import html from "html-literal";
import me from "../../assets/images/about.jpg";
export default () => html`
  <h1 class="aboutMe2">About</h1>
  <div class="aboutContainer">
    <div class="aboutPic">
      <img src=${me} class="aboutME" />
    </div>
    <div class="aboutBox">
      <div class="aboutIntro">
        Hello! My name is Tyler Capstick. I have a background in the service,
        factory and glasswork industries. I started working when I was 17 at a
        local pizza delivery company. After I graduated highschool I attended
        SCC and got my associates degree. I could not figure out what to major
        in so decided to follow in the footsteps of my friends who were all
        going the business route. I had plans of attending a university but life
        happened so it unfortunately had to be delayed. Looking back on that
        now, that possibly could have been a positive because I was not too
        excited about the business world. I have had a passion for technology
        ever since I was a child, and a friend of mine told me about coding
        bootcamps. Instantly I was intrigued, and I decided to attend the Savvy
        Coders preview night and I knew right away this was the career path that
        truly peaked my interest.
      </div>
    </div>
  </div>
`;
