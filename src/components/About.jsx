const strengths = [
  {
    title: "Agents that reason and act",
    text: "LLM agents with tool use, memory and human-in-the-loop control, built to recover from failures instead of breaking.",
  },
  {
    title: "Understanding documents, images and video",
    text: "Layout-aware document parsing and vision-language models that read tables, screens and video frames accurately.",
  },
  {
    title: "Search and knowledge systems",
    text: "Retrieval pipelines tuned through parsing, chunking and embeddings, taking accuracy from around 50% to over 90%.",
  },
  {
    title: "Solid engineering underneath",
    text: "Clean Python backends with FastAPI, async processing with Kafka, and cost and speed tuning so systems stay fast and affordable.",
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-layout">
          <div className="about-story">
            <p>
                I am an AI Engineer with two years of experience designing and
                deploying LLM-powered systems in production environments.
            </p>
            <p>
                My work covers the full AI stack: document parsing and retrieval
                pipelines, agentic workflows with tool calling and human oversight,
                and multimodal analysis of images and video. I build these on FastAPI
                services with asynchronous processing and observability, so they stay
                accurate, fast and cost-efficient under real usage.
            </p>
            <p>
                I have raised retrieval accuracy from roughly 50% to over 90% and cut
                workflow execution time by 70%. I work with teams and clients from
                requirements through deployment, with a focus on reliability,
                measurable results and clear communication.
            </p>
          </div>
          <div className="about-points">
            {strengths.map((s) => (
              <div className="about-point" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;