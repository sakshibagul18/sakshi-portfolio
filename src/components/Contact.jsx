import { useState } from "react";

const FORM_URL = "https://formspree.io/f/xbgggdag";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section-title">Let's work together</h2>
        <p>
          Have an AI project in mind? Send me a message and I'll get back to
          you immediately.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="tel" name="phone" placeholder="Phone number (optional)" />
          <textarea name="message" rows="5" placeholder="Tell me about your project" required />
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="form-msg ok">Thanks! Your message was sent.</p>
          )}
          {status === "error" && (
            <p className="form-msg err">Something went wrong. Please email me directly.</p>
          )}
        </form>

        <div className="hero-buttons">
          <a href="mailto:bagulsakshi74@gmail.com" className="btn btn-outline">
            bagulsakshi74@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sakshi-bagul-a5a907253"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;