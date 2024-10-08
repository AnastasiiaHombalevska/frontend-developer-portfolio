import React from "react";


export default function FormMessage({ state, userName }) {
  function updateName(name) {
    if (!name) {
      return;
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    }
  }
  
  const success = `${updateName(userName)}, your message has been successfully sent!`;

  const err = "Have you filled in all the fields?";

  return (
    state ? (
      <div className="formMessage success">
        <h4 className="formMessage--title">Well done!</h4>
        <p className="formMessage--msg">{success}</p>
      </div>
    ) : (
      <div className="formMessage err">
        <h4 className="formMessage--title">Oops!</h4>
        <p className="formMessage--msg">{err}</p>
      </div>
    )
  )
}