const skills = [
  {
    title: "LLMs & Generative AI",
    items: ["OpenAI GPT-4o / 4.1", "Anthropic Claude", "Google Gemini", "Meta Llama 3", "Prompt engineering", "Function calling", "Structured outputs", "Vision-language models"],
  },
  {
    title: "Agentic AI",
    items: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "MCP", "A2A", "Mem0", "Human-in-the-loop"],
  },
  {
    title: "RAG & Vector Search",
    items: ["LlamaIndex", "Qdrant", "Pinecone", "OpenSearch", "FAISS", "ChromaDB", "Hybrid search", "Re-ranking"],
  },
  {
    title: "Document Intelligence & Vision",
    items: ["Docling", "Unstructured.io", "AWS Textract", "Tesseract", "OmniParser", "Computer vision", "FFmpeg"],
  },
  {
    title: "Machine Learning & NLP",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "Transformers", "NumPy", "Pandas"],
  },
  {
    title: "Evaluation & Observability",
    items: ["RAGAS", "DeepEval", "Promptfoo", "LangSmith", "LLM-as-a-judge", "MLflow", "Weights & Biases"],
  },
  {
    title: "Backend & APIs",
    items: ["Python", "FastAPI", "Pydantic", "asyncio", "Flask", "REST APIs", "WebSockets", "Microservices"],
  },
  {
    title: "Data & Integrations",
    items: ["Kafka", "Redis", "MongoDB", "MySQL", "Amazon S3", "ServiceNow", "Slack", "Jira", "Salesforce"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-list">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;