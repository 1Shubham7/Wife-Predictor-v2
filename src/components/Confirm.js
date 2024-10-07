import React, { useState, useEffect } from "react";
import "./bestbutton.css";
import wives from '../database/wives';
import { TwitterShareButton, TwitterFollowButton } from "react-twitter-embed";
import { Confetti } from "./Confetti";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmationCheckbox() {
  const buttonStyle = {
    backgroundColor: "#132a13",
    color: "yellowgreen",
    border: "3px solid currentcolor",
    boxShadow: "0 0 3px currentcolor",
    borderRadius: "20px",
  };

  const [person, setPerson] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [buttonPlayed, setButtonPlayed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [click, setClick] = useState(false);
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setInputValue(storedName);
    }
  }, []);
  const storeInput = (input) => {
    localStorage.setItem("userName", input);
  };

  function handleClick() {
    if (inputValue === "") {
      toast.error("You didn't enter your name!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else if (!click) {
      toast.error("You didn't tick the checkbox!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setIsChecked(oldIsChecked => !oldIsChecked);
    }
  }

  function checkboxon(e) {
    setClick(true);
    if (e.target.checked) {
      if (inputValue === "") {
        toast.error("You didn't enter your name!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      setIsActive(true);
    } else {
      setIsActive(false);
      toast.error("You didn't click the Checkbox", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  function generatorRandomNumber() {
    return Math.floor(Math.random() * wives.length);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    storeInput(event.target.value);
  }

  const playGame = () => {
    setButtonPlayed(true);
    const randomNum = generatorRandomNumber();
    setPerson(wives[randomNum]);
  };

  const regenerateResponse = () => {
      setPerson(null);
      setInputValue("");
      setClick(false);
      setIsChecked(false);
      setIsActive(false);
      setButtonPlayed(false);
      localStorage.removeItem("userName");
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
                type="text" 
                style={{
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "375px",
                  height: "40px",
                  margin: "0 auto",
                }}
                className="form-control"
                id="nameid"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <input className="mycheckbox" type="checkbox" id="input" onChange={checkboxon} />
          &nbsp; Whichever wife I get, I will accept for the rest of my life.
          <p></p>
          <button
            disabled={!isActive}
            style={buttonStyle}
            onClick={handleClick}
            type="button"
            className="btn letsgo btn-success"
          >
            Wife Me Up
          </button>
          <ToastContainer />
        </div>
      )}

      {isChecked && !buttonPlayed && (
        <section style={wifestyle2}>
          <h1 className="ready" style={{ textDecoration: "underline" }}>
            Ready!
          </h1>
          <p style={{ color: "green" }}>
            I, <b>{inputValue}</b>, solemnly pledge to marry the woman revealed as my future wife.
            To break this vow would be to question my honor and integrity as a man.
          </p>
          <div
            className="bestbutton"
            style={{ "--clr": "#6eff3e" }}
            onClick={playGame}
          >
            <span>Reveal My Wife</span>
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
          <Confetti />
          <h2 style={{ color: "darkgreen", padding: "10px" }}><b>{inputValue}</b>,your life’s greatest chapter is </h2>
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
                  height: "400px",
                  border: "1px solid #386641",
                }}
              />
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ccff33",
                  border: "1px solid #386641",
                  borderRadius: "5px"
                }}
              >
                <h5
                  className="card-title"
                  style={{ textDecoration: "underline green 5px" }}
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

          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#132a13",
              color: "yellowgreen",
              border: "3px solid currentcolor",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "background-color 0.3s ease"
            }}
            onClick={regenerateResponse}
          >
            Regenerate Response
          </button>
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
        </div>
      )}
    </>
  );
}

export default ConfirmationCheckbox;
