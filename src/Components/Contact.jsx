import { useRef } from "react";
import "./Contact.css";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    
    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    alert(
      "Thank you " +
        name +
        "! Your feedback has been submitted successfully."
    );

   
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <div className="contact-container">
      <h1>📧 Contact / Feedback</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <input
          type="email"
          placeholder="Enter your email"
          ref={emailRef}
        />

        <textarea
          placeholder="Enter your feedback"
          ref={messageRef}
        />

        <button type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Contact;