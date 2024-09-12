import React from "react";

function updateName(name) {
  if (!name) {
    return;
  } else {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }
}

export default function FormMessage({ state, userName }) {
  console.log('FormMessage props:', { state, userName });

  const success = `${updateName(userName)}, your message has been successfully sent!`;

  const err = "Are all the input data filled in?";

  return (
    <div className = "formMessage" >
    {
        state ? (
          <>
             <h4 className="formMessage--title">Nice!</h4>
             <p className="formMessage--msg">{success}</p>
          </>
        ) : (
          <>
            <h4 className="formMessage--title err">Something went wrong!</h4>
            <p className="formMessage--msg">{err}</p>
          </>
          )
    }
    </div>
  )
}