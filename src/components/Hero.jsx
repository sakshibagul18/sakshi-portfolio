function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero-small">Hi, I'm</p>
        <h1>Sakshi Bagul</h1>
        <h2>AI Engineer | Software Engineer</h2>
        <p className="hero-text">
          AI Engineer and Software Engineer who turns ambitious ideas into AI
          products that ship. I build intelligent agents that reason and act,
          systems that read and understand documents, images, video, Figma Designs, Jira Tickets and
          the reliable backends behind them, so your AI works in the real
          world, not just in a demo.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;