import html from "html-literal";

let year = new Date().getFullYear();

export default () => html`
  <footer>
    <div class="footer1">
      &copy; ${year} *website name*
    </div>
  </footer>
`;
