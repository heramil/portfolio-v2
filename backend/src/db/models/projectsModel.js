import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
    category: { type: String, required: true},
    companies: {
      ibm: { type: String, required: true },
      bgc: { type: String, required: true }
    },
    title: { type: String, required: true },
    period_begin: { type: String, required: true },
    period_end: { type: String, required: true },
    duration: { type: String, required: true },
    description: {
      context: { type: String, required: true },
      credits: {
        design: {
          lead_designer: { type: String, required: true },
          designer: { type: String, required: true }
        },
        management: {
          counsel: { type: String, required: true },
          project_manager: { type: String, required: true }
        },
        development: {
          frontend: { type: String, required: true },
          backend: { type: String, required: true }
        }
      },
      tools_technologies: {
        tools: {
          figma: { type: String, required: true },
          adobe: { type: String, required: true },
          affinity: { type: String, required: true }
        },
      }
    },
    goal: { type: String, required: true },
    challenges: { type: String, required: true },
    process: {
      phase01: { type: String, required: true },
      phase02: { type: String, required: true },
      phase03: { type: String, required: true },
      phase04: { type: String, required: true }
    },
    outcome: {
      point01: { type: String, required: true },
      point02: { type: String, required: true },
      point03: { type: String, required: true }
    },
    images: {
      image01: { type: String, required: true },
      image02: { type: String, required: true },
      image03: { type: String, required: true },
      image04: { type: String, required: true }
    },
    background_color: { type: String, required: true },
    color: { type: String, required: true }
}, {
  timestamp: true
});

const Projects = mongoose.model("Projects", projectsSchema);

export default Projects;
