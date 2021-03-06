import html from "html-literal";

export default () => html`
  <div id="mainID">
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/xrgjqjzr"
      method="POST"
    >
      <fieldset id="fs-frm-inputs">
        <div id="nameField">
          <label for="full-name" id="nameBox">Full Name:</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
        </div>
        <div id="emailField">
          <label for="email-address" id="emailBox">Email Address:</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
        </div>
        <div id="messageField">
          <label for="message" id="messageBox">Message:</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Input your feedback here, it's greatly appreciated!"
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </div>
      </fieldset>
      <input type="submit" value="Submit" class="contactSubmit" />
    </form>
  </div>
`;
