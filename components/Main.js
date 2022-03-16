import * as views from "./views";
import html from "html-literal";

export default st => html`
  ${console.log("MAIN STATE", st)} ${views[st.view](st)}
`;
