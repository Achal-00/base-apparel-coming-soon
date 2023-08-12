import { useState } from "react";

const Content = () => {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".error").style.display = "none";
      document.querySelector(".button-container svg").style.display = "none";
      document.querySelector(".button-container input").style.border =
        "1px solid var(--desaturated-red)";
      document.querySelector(".success").style.display = "block";
    } else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".success").style.display = "none";
      document.querySelector(".button-container svg").style.display = "block";
      document.querySelector(".button-container input").style.border =
        "1px solid var(--soft-red)";
    }
  }

  return (
    <div className="wrapper">
      <div className="main-heading">
        <h1>WE'RE</h1>
        <h1>COMING</h1>
        <h1>SOON</h1>
      </div>
      <div className="sub-section">
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
      </div>
      <div className="newsletter-section">
        <div className="button-container">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setMail(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fill-rule="evenodd">
              <circle cx="12" cy="12" r="12" fill="#F96464" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
              />
            </g>
          </svg>
          <button onClick={submitHandler}>
            <img src="images/icon-arrow.svg" alt="arrow" />
          </button>
        </div>
        <p className="error">Please provide a valid email</p>
        <p className="success">Thanks for subscribing</p>
      </div>
    </div>
  );
};

export default Content;
