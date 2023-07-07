import React from 'react'
import './photo.css'

export default function About() {
  const wifestyle2 = {
    margin: '0',
    background:'yellow',
    position:'relative',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: "100px 20vw",
    minHeight: '200px',
    color: 'green'
    // fontFamily:
  }

  return (
    <>
    <div  className="superClass" style={{backgroundColor: 'yellow', color: 'green', paddingTop:'40px', paddingBottom:'40px'}}>
    
    <div className="circular-image" >
    <img
        src="CVmin.jpg"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid green",
          boxSizing: "border-box",
          animation: "border-pulse 2s infinite"
          
          
          
        }}
        alt="Shubham Singh"
      />

    </div >
    <div className="text" style={{textAlign: 'center', justifyContent:'center'}}>

      <section style={wifestyle2} >
        <h1 style={{textDecoration:'underline'}}>About Me</h1>
        <p>  This is Shubham Singh Mahar, I am First Year Undergrad persuing Bachelors in Technology with Computer Science Eng. major from a tier-3 college in Ghaziabad.
        I belong to Haldwani, Nanital, Uttarakhand.
        This Website is made using React 18.
        The code is available in this github reposetory: <a href="https://github.com/1Shubham7/Wife-Predictor">Wife-Predictor</a></p>
      </section>
    
    </div>
    </div>
    
    </>
  );
}
