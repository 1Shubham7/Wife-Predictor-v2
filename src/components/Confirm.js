import React, { useState } from "react";
import "./bestbutton.css";
import wives from '../database/wives';
import { TwitterShareButton, TwitterFollowButton } from "react-twitter-embed";

function ConfirmationCheckbox() {
  const buttonStyle = {
    backgroundColor: "#132a13",
    color: "yellowgreen",
    border: "3px solid currentcolor",
    boxShadow: "0 0 3px currentcolor",
    borderRadius: "20px",
  };

  const [person, setPerson] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [buttonPlayed, setButtonPlayed] = useState(false);

  function handleClick() {
    setIsChecked(prevIsChecked => !prevIsChecked); // Toggle isChecked state
  }

  function checkboxon() {
    setIsChecked(oldIsChecked => !oldIsChecked);
  }

  function generatorRandomNumber() {
    return Math.floor(Math.random() * wives.length);
  }

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const playGame = () => {
    setButtonPlayed(oldButtonPlayed => !oldButtonPlayed);
    const randomNum = generatorRandomNumber();
    setPerson(wives[randomNum]);
  };

  const goBack = () => {
    setIsChecked(false);
    setButtonPlayed(false);
  };

  const wifestyle2 = {
    margin: "0",
    color: "white",
    background: "yellow",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "200px 20vw",
    minHeight: "200px",
  };

  return (
    <>
      {!isChecked && (
        <div
          id="wifeplay"
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            paddingTop: "120px",
            paddingBottom: "120px",
          }}
        >
          <div className="form-group container">
            <label htmlFor="exampleInputEmail1">
              <h4>What's your name?</h4>
            </label>
            <br />
            <div className="name">
              <input
                onChange={handleInputChange}
                value={inputValue}
                type="email"
                style={{
                  textAlign: "center",
                  width: "350px",
                  height: "40px",
                  margin: "0 auto",
                }}
                className="form-control"
                id="nameid"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <input className="mycheckbox" type="checkbox" onChange={checkboxon} />
          &nbsp; Whichever wife I get, I will accept for the rest of my life.
          <p></p>
          <button
            disabled={!isChecked}
            style={buttonStyle}
            onClick={handleClick}
            type="button"
            className="btn letsgo btn-success "
          >
            Wife Me Up
          </button>
        </div>
      )}

      {isChecked && !buttonPlayed && (
        <section style={wifestyle2}>
          <h1 className="ready" style={{ textDecoration: "underline" }}>
            Ready!
          </h1>
          <p style={{ color: "green" }}>
            I, {inputValue}, agree to marry the woman who is about to appear as my
            future wife. Backing away from this promise would mean that I am not a man.
          </p>
          <div
            href="#"
            className="bestbutton"
            style={{ "--clr": "#6eff3e" }}
            onClick={playGame}
          >
            <span>Who's My Wife</span>
            <i></i>
          </div>
        </section>
      )}

      {buttonPlayed && (
        <div
          className="wifeShower"
          style={{
            backgroundColor: "yellow",
            color: "white",
            paddingBottom: "30px",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="card"
              style={{ border: "3px solid #386641", color: "black" }}
            >
              <img
                className="card-img-top"
                src={person.img}
                alt="Loading"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  border: "1px solid #386641",
                }}
              />
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ccff33",
                  border: "1px solid #386641",
                }}
              >
                <h5
                  className="card-title"
                  style={{ textDecoration: "underline  green 5px" }}
                >
                  {person.name}
                </h5>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{
                  backgroundColor: "#38b000",
                  border: "1px solid #386641",
                }}
              >
                <p className="card-text">{person.description}</p>
                <li
                  className="list-group-item"
                  style={{
                    backgroundColor: "#ffff3f",
                    border: "1px solid #386641",
                  }}
                >
                  Address: {person.address}
                </li>
                <li
                  className="list-group-item"
                  style={{
                    backgroundColor: "#2b9348",
                    border: "1px solid #386641",
                  }}
                >
                  Age: {person.age}
                </li>
              </ul>
            </div>
          </div>

          <div className="my-3">
            <p style={{ color: "green", textDecoration: "underline 3px" }}>
              <b>Share on Twitter</b>
            </p>

            <div className="mid-col-6">
              <TwitterShareButton
                url={"wife-predictor.netlify.app"}
                options={{
                  text: "Just found out who my future wife is. Want to find yours, too? Go here:",
                  via: "1shubham7",
                }}
              />
              <TwitterFollowButton screenName={"1Shubham7"} />
            </div>
          </div>

          <button onClick={goBack}>Back</button>

        </div>
      )}
    </>
  );
}

export default ConfirmationCheckbox;
