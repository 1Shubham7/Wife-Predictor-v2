import React from 'react'
import './My.css'

export default function Wife() {
  const wifestyle = {
    margin: '0',
    color: 'white',
    background:'green',
    position:'relative',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: "100px 20vw",
    // fontFamily:
  }


  return (
    <>
    <section style={wifestyle}>
      <h1 style={{textDecoration: 'underline'}}>Predict your Future Wife</h1>
      <p>With thousands of success stories in our portfolio, the Future Wife Predictor is here to predict your future wife with 100% accuracy. From our database of thousands of beautiful women we find you your right match.</p>
      <p>Note: only bachelors are advised to use this service</p>
    </section>



</>
  )
}
