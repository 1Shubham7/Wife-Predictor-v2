import React from "react";
import "./My.css";

export default function Wife() {
  const wifestyle = {
    margin: "0",
    color: "white",
    background: "rgb(248, 122, 143)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px 20vw",
    // fontFamily:
  };
  const wifestyle1 = {
    marginTop: "20px",
    color: "white",
    background: "rgb(248, 122, 143)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px 20vw",
  };

  return (
    <>
      <section style={window.innerWidth <= 500 ? wifestyle1 : wifestyle}>
        <h1 style={{ textDecoration: "underline" }}>
          Predict your Future Wife
        </h1>
        <p>
          With thousands of success stories in our portfolio, Future Wife
          Predictor is here to predict your future wife with 100% accuracy.
          Using our database that contains thousands of beautiful women, we will
          find you your right match.
        </p>
        <p>Note: Only bachelors are advised to use this service.</p>
      </section>
    </>
  );
}
