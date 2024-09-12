import React from "react";

function updateName(name) {
  if (!name) {
    return;
  } else {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }
}

export default function Form() {
  function sendMsg(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return;
    } else {
      alert(`${updateName(name)}, your message has been successfully sent!`);
      console.log(name, email, message);
      e.target.reset();
    }
  }

  return (
    <form className="contacts--form form" onSubmit={sendMsg}>
      <label>Name:
        <input type="text" name="name" className="form--field form--input"/>
      </label>

      <label>Email:
        <input type="email" name="email" className="form--field form--input"/>
      </label>

      <label>Message:
        <textarea name="message" cols="30" rows="10" className="form--field form--textarea"></textarea>
      </label>

      <button type="submit" className="form--btn">Send message</button>
    </form>
  )
}