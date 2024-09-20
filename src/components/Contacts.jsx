import React from "react";
import Form from "./Form";

import linkedinLogo from "../images/logos/linkedin.svg";
import githubLogo from "../images/logos/github.svg";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts--container">
          <h3 className="contacts--title">Let's connect</h3>
          <p className="contscts--descr">If you ever want to grab a coffee <span class="smallerTextContact">(virtually)</span> or just want a quick chat - you can find me on social media or you can send me a message here!</p>

          <ul className="contacts--socials">
            <li className="contacts--list-item">
              <img src={linkedinLogo} alt="linkedin logotype" className="contacts--img" />
              <a href="https://www.linkedin.com/in/anastasiia-hombalevska/" className="contacts--link">Linkedin</a>
            </li>
            
          <li className="contacts--list-item">
              <img src={githubLogo} alt="github logotype" className="contacts--img" />
              <a href="https://github.com/AnastasiiaHombalevska" className="contacts--link">Github</a>
            </li>
          </ul>
      </div>

      <Form />
    </section>
  )
}