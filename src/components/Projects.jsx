const projects = [
  {
    category: "Agentic RAG · LLM Application",
    title: "Agentic RAG Chatbot for Test Case Generation",
    summary:
      "A chatbot that reads application documents and generates accurate manual test cases from the user's question.",
    challenge:
      "Basic retrieval pulled the wrong context from complex documents, so generated test cases were incomplete.",
    stepsTitle: "How it works",
    steps: [
      "Documents are parsed, chunked and converted into vectors with the MPNet embedding model from Hugging Face.",
      "Vectors and metadata are stored in Qdrant, which indexes them with HNSW for fast search.",
      "The user's question is matched against stored data using cosine similarity to retrieve the most relevant context.",
      "An agent built with LangChain and LangGraph decides what to retrieve and orchestrates the workflow.",
      "The retrieved context is sent to an LLM on Groq, which generates the test cases.",
    ],
    impact: "40–50% → 90–95%",
    impactLabel: "retrieval accuracy",
    tools: ["Python", "LangChain", "LangGraph", "MPNet", "Hugging Face", "Qdrant", "HNSW", "Groq"],
  },
  {
    category: "Computer Vision · Multimodal",
    title: "Video Understanding Pipeline",
    summary:
      "Understands long videos with vision-language models, even though an LLM cannot take a video directly or thousands of images at once.",
    challenge:
      "LLMs cannot accept a video, and they cannot take thousands of images in one request. The video must be converted to images and sent in controlled batches.",
    stepsTitle: "Pipeline",
    steps: [
      "The video is converted into frames and encoded as Base64 images.",
      "NumPy blank-frame detection checks each frame. If the standard deviation is below 3, the frame is invalid and the process stops.",
      "Valid frames are split into batches (images 1–500, 501–1000, and so on up to N).",
      "Each batch is sent to a vision-language model and processed by analysis modules.",
      "Results from all batches are combined, and an LLM produces the end-to-end understanding of the video.",
      "The output is stored in the Qdrant vector database for retrieval.",
    ],
    impact: "Thousands of frames",
    impactLabel: "handled reliably through batching",
    tools: ["Python", "FFmpeg", "NumPy", "Vision-LLM", "Qdrant", "FastAPI"],
  },
  {
    category: "MCP · Multimodal · Knowledge Search",
    title: "Figma Design Understanding Pipeline",
    summary:
      "Reads a Figma design and turns it into searchable knowledge about screens, user flows and interactions such as hover dropdowns.",
    challenge:
      "Design files are visual and complex, so teams could not easily search them or get clear answers about how a screen behaves.",
    stepsTitle: "How it works",
    steps: [
      "MCP extracts the design data and images from Figma.",
      "The images go to a Qwen vision model on Groq to understand the screens.",
      "A GPT OSS 120B model parses the data into structured JSON, focusing on user flow and hover dropdown behaviour.",
      "The structured output is converted into embeddings and stored in a vector database for semantic search.",
    ],
    impact: "Design → searchable knowledge",
    impactLabel: "flows and interactions answered in plain language",
    tools: ["Python", "Figma", "MCP", "Qwen (vision)", "GPT OSS 120B", "Groq", "Vector DB"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="pj-list">
          {projects.map((p, i) => (
            <article className="pj-card" key={p.title}>
              <div className="pj-top">
                <span className="pj-num">0{i + 1}</span>
                <span className="pj-cat">{p.category}</span>
              </div>
              <h3 className="pj-title">{p.title}</h3>
              <p className="pj-summary">{p.summary}</p>
              <div className="tags">
                {p.tools.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="pj-body">
                <div>
                  <h4 className="pj-label">The challenge</h4>
                  <p className="pj-challenge">{p.challenge}</p>
                  <div className="pj-impact">
                    <strong>{p.impact}</strong>
                    <span>{p.impactLabel}</span>
                  </div>
                </div>
                <div>
                  <h4 className="pj-label">{p.stepsTitle}</h4>
                  <ol className="pj-steps">
                    {p.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;