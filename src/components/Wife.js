import React from 'react'
import './My.css'

export default function Wife() {
  const wifestyle = {
    margin: '0',
    color: 'white',
    background: 'linear-gradient(61deg, rgba(34,193,195,1) 0%, rgba(149,112,190,1) 50%, rgba(253,187,45,1) 100%)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "100px 20vw",
    // fontFamily:
  }


  return (
    <>
      <section style={wifestyle}>
        <h1 style={{ textDecoration: 'none'}}>Predict your Future Wife</h1>
        <br></br>
        <p>With thousands of success stories in our portfolio, Future Wife Predictor is here to predict your future wife with 100% accuracy. Using our database that contains thousands of beautiful women, we will find you your right match.</p>
        <p style={{color:"red"}}>Note: Only bachelors are advised to use this service.</p>
      </section>
    </>
  )
}
