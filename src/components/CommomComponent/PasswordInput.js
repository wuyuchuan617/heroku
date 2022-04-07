import React, { useState } from "react";

function PasswordInput() {
  const [text, setText] = useState("");
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [hasLonger, setHasLonger] = useState(false);

  const checkPassword = (value) => {
    setText(value);
    console.log("value", value);
    const regex1 = /(?=.*\d)/g;
    const regex2 = /(?=.*[a-z])/g;
    const regex3 = /(?=.*[A-Z])/g;
    const regex4 = /(?=.*\W)/g;

    setHasNumber(regex1.test(value));
    setHasLower(regex2.test(value));
    setHasUpper(regex3.test(value));
    setHasSpecial(regex4.test(value));
    setHasLonger(value.length >= 8);

    // let isPasswordPass = regex.test(value);
    // console.log("isPasswordPass", isPasswordPass);
  };
  return (
    <>
      <input
        type="text"
        style={{
          color: "black",
          fontSize: "14px",
          height: "32px",
          border: "none",
          padding: "4px",
        }}
        value={text}
        onChange={(e) => {
          checkPassword(e.target.value);
        }}
      />
      <div>hasUpper:{hasUpper + ""}</div>
      <div>hasLower:{hasLower + ""}</div>
      <div>hasNumber:{hasNumber + ""}</div>
      <div>hasSpecial:{hasSpecial + ""}</div>
      <div>hasLonger:{hasLonger + ""}</div>
    </>
  );
}

export default PasswordInput;
