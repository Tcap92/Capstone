import html from "html-literal";
import foot from "../assets/images/logo4.png";

let year = new Date().getFullYear();

export default () => html`
  <footer>
    <div class="footer1">
      &copy; ${year} <img src=${foot} height="300%" class="pfpFoot" />
    </div>
  </footer>
`;
