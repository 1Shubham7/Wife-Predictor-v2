import React from 'react'

export default function HowCanYouHelp() {


  const wifestyle2 = {
    margin: '0',
    color: 'white',
    background: 'linear-gradient(to right,green,blue)',
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
        <h1 style={{ textDecoration: 'underline' }}>How can you help?</h1>
        <p>To expand the database, we need more images. I will be more than happy to add suggested images to the database. Kindly send me the images or their corresponding links to my <a style={{ color: 'yellow' }} href='shubhammahar1306@gmail.com'>email</a> or <a style={{ color: 'yellow' }} href="https://www.linkedin.com/in/shubham-singh-mahar-5a002b20b/">LinkedIn</a>. The codebase of this project is also open-source (on GitHub and GitLab), so you can add modifications as you wish.</p>
      </section>
    </div>
  )
}
