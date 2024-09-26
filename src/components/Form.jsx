import React, { useEffect, useState } from "react";
import FormMessage from "./FormMessage";

export default function Form() {
  const [messageState, setMessageState] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    // const { name, value } = e.target;


    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  function submitForm(e) {
    const { userName, email, message } = formData;
    e.preventDefault();

    if (!userName || !email || !message) {
      setMessageState(false);
      return;
    } else {
      setMessageState(true);
      setFormData({
        userName: "",
        email: "",
        message: ""
      })
      e.target.reset();
    }
  }

  useEffect(() => {
    if (messageState !== null) {
      const timer = setTimeout(() => {
        setMessageState(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messageState]);

  return (
      <form className="contacts--form form" onSubmit={submitForm}>
          <input
            type="text"
            name="userName"
            className="form--field form--input"
            placeholder="Name:"
            autoComplete="off"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form--field form--input"
            placeholder="Email:"
            autoComplete="off"
            onChange={handleChange}
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            className="form--field form--textarea"
            placeholder="Message:"
            onChange={handleChange}
          >
          </textarea>

      <button className="form--btn">Send message</button>

      {messageState !== null &&
        <FormMessage state={messageState} userName={formData.userName} />
      }
    </form>
  )
}