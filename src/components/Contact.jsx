import React from "react";

const Contact = () => {
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "#fff";
    event.target.style.border = "1px solid #007BFF";
    event.target.style.color = "#007BFF";
    event.target.style.transform = "translateY(-5px)";
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = "#007BFF";
    event.target.style.border = "none";
    event.target.style.color = "#fff";
    event.target.style.transform = "translateY(0)";
  };

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.commonHeading}>Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.29383599345!2d77.39502834999999!3d28.69965315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715780060853!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div style={styles.container}>
        <div style={styles.contactForm}>
          <form
            action="https://formspree.io/f/mrgndrgj"
            method="POST"
            style={styles.contactInputs}>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
              style={styles.input}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              style={styles.input}
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
              placeholder="Enter your suggestions, issues here,"
              style={styles.textarea}>
            </textarea>


            <input
              type="submit"
              value="send"
              style={styles.submit}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "9rem 0 5rem 0"
  },
  commonHeading: {
    textAlign: "center"
  },
  iframe: {
    border: 0
  },
  container: {
    marginTop: "6rem",
    textAlign: "center"
  },
  contactForm: {
    maxWidth: "50rem",
    margin: "auto"
  },
  contactInputs: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
  },
  input: {
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  submit: {
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    backgroundColor: "#007BFF",
    color: "#fff",
    textTransform: "uppercase",
    alignSelf: "center" // Center horizontally
  }
};

export default Contact;

// Created by https://github.com/Suvam3456
