# 🎓 Didactic Labs
### The Definitive AWS Whitepaper Companion & Cloud Emulation Platform

[![Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-0052B6?style=for-the-badge&logo=docusaurus)](https://docusaurus.io)
[![Hypothes.is](https://img.shields.io/badge/Annotations-Hypothes.is-FF6C00?style=for-the-badge&logo=hypothes-is)](https://hypothes.is)
[![Ministack](https://img.shields.io/badge/Emulation-Ministack-2E8B57?style=for-the-badge)](https://ministack.io)

---

> **Didactic Labs** bridges the gap between reading AWS whitepapers and implementing robust cloud architectures. Built with **Docusaurus** and integrated with **Hypothes.is** for collaborative annotation, this platform offers a structured, four-phase pedagogical framework powered by **Ministack** for safe, local cloud emulation.

[🌐 Visit didacticlabs.cloud](https://didacticlabs.cloud) | [📚 Browse Whitepapers](#-whitepaper-index) | [💻 View Lab Repos](#-associated-lab-repositories)

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **📖 Docusaurus Engine** | Blazing fast, SEO-optimized static site generation with versioning and search. |
| **💬 Dynamic Annotations** | Real-time collaborative learning via **Hypothes.is**, allowing users to highlight, discuss, and annotate whitepapers directly. |
| **🧪 Ministack Integration** | Safe, local cloud emulation. Run AWS-like workloads locally without cloud costs or risk. |
| **🔄 4-Phase Pedagogy** | A rigorous learning structure: Pre-reading → Reading → Concept Checking → Local Lab. |
| **🔗 Modular Labs** | Each lab is isolated in its own repository, promoting modularity and focused contribution. |

---

## 🏗️ Technical Architecture

Didactic Labs is engineered for scalability, collaboration, and educational rigor.

```mermaid
graph LR
    A[User] --> B[Didactic Labs Site]
    B --> C{Learning Module}
    C --> D[Pre-reading]
    C --> E[Reading Phase]
    C --> F[Concept Checking]
    C --> G[Local Lab]
    G --> H[Ministack Emulator]
    B --> I[Hypothes.is API]
    I --> J[Annotations & Discussions]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#bbf,stroke:#333,stroke-width:2px
    style H fill:#bfb,stroke:#333,stroke-width:2px
