import React from "react";

export default function Form() {
  return (
    <form className="contacts--form form">
      <label htmlFor="">
        <input type="text" placeholder="Name" className="form--field form--input"/>
      </label>

      <label htmlFor="">
        <input type="email" placeholder="Email" className="form--field form--input"/>
      </label>

      <label htmlFor="">
        <textarea name="" id="" cols="30" rows="10" className="form--field form--textarea">Message</textarea>
      </label>

      <button type="submit" className="form--btn">Send message</button>
    </form>
  )
}