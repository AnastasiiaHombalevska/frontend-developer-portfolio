import React from 'react';

export default function FormMessage({ state }) {
  const success = 'Your message has been successfully sent!';
  const err = 'Have you filled all the fields?';

  return state ? (
    <div className="formMessage success">
      <h4 className="formMessage--title">Well done!</h4>
      <p className="formMessage--msg">{success}</p>
    </div>
  ) : (
    <div className="formMessage err">
      <h4 className="formMessage--title">Oops!</h4>
      <p className="formMessage--msg">{err}</p>
    </div>
  );
}
