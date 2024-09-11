import React from "react";
import Form from "./Form";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
          <div className="contacts--container">
            <h2 className="contscts--title">Let's connect</h2>
            <p className="contscts--descr">If you ever want to grab a coffee <span class="smallerTextContact">(virtually)</span> or just want a quick chat - you can find me on social media or you can send me a message here!</p>

            <div className="contacts--socials">
              <a href="https://www.linkedin.com/in/anastasiia-hombalevska/" className="logo logo-linkedin"></a>
              <a href="https://github.com/AnastasiiaHombalevska" className="logo logo-github"></a>
            </div>
          </div>

          <Form />
    </section>
  )
}