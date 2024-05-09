import React from 'react'

export default function HowCanYouHelp() {


  const wifestyle2 = {
    margin: '0',
    color: 'white',
    background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(154,190,112,1) 69%, rgba(253,187,45,1) 100%)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "100px 20vw",
    minHeight: '400px',
    // fontFamily:
  }

  return (
    <div>
      <section style={wifestyle2} >
        <h1 style={{ textDecoration: 'none' }}>How can you help?</h1>
        <br></br>
        <p>To expand the database, we need more images. I will be more than happy to add suggested images to the database. Kindly send me the images or their corresponding links to my <a style={{ color: 'yellow' }} href='shubhammahar1306@gmail.com' target='_blank'>email</a> or <a style={{ color: 'yellow' }} href="https://www.linkedin.com/in/1shubham7/" target='_blank'>LinkedIn</a>. The codebase of this project is also open-source (on GitHub and GitLab), so you can add modifications as you wish.</p>
      </section>
    </div>
  )
}
