---
sidebar_position: 1
---

# Didactic Labs

Because the best students are the ones who ***teach themselves**.*

---

## Our Covenant

In an era of LLM hallucinations and endless video tutorials, we seek **autodidactic education and mental clarity**.

To print Amazon Web Services' complete documentation across its **200+ services** would require **1,600 to 2,000 physical books**. No one learns the cloud by passively reading manuals from cover to cover.

**DidacticLabs.cloud** is your hands-on stepping stone to true cloud fluency. We combine **official AWS Whitepapers** with zero-cost, local hands-on labs built on **MiniStack**, a free, open source cloud emulator.

---

## Course Prerequisites

Before diving into the modules, ensure your local development environment has the following installed:

| Tool | Purpose |
| :--- | :--- |
| **Code Editor** | VS Code, Cursor, or your editor of choice |
| **Container Engine** | [Docker Desktop](https://www.docker.com/) or [OrbStack](https://orbstack.dev/) |
| **Version Control** | [Git](https://git-scm.com/) |
| **Browser** | Google Chrome |
| **Annotation Tool** | [Hypothes.is Chrome Extension](https://chromewebstore.google.com/detail/hypothesis-web-pdf-annota/bjfhmglciegochdpefhhlphglcehbmek) |
| **Local AWS Simulator** | **MiniStack** |

---

## Quick Setup & Environment Preparation

Clone the project repository and navigate to your workspace:


```bash

git clone [https://github.com/leviisawesome/ministack.git](https://github.com/leviisawesome/ministack.git)
```
## Navigate into the project directory
```
cd ministack
Install Core Tooling via Brew / Terminal
```
## Ensure your container environment and local AWS utilities are ready:


#### Verify container runtime setup (Docker or OrbStack)
```
docker --version
```
####  Verify MiniStack installation
```
ministack --version
```
## Collaborative Learning via Hypothes.is
We actively use Hypothes.is "The Social Annotation Platform" to read, analyze, and mark up whitepaper documentation together.

Install the Hypothes.is Web & PDF Annotation Extension in Google Chrome.

Sign in or create a free Hypothes.is account.

Activate the extension on course pages to highlight key architecture patterns, add notes, and contribute to public discussions.

## How to Navigate This Course
Each module is designed with a two-step learning loop:

Theory & Whitepaper Analysis: Read curated breakdowns of core AWS services, architectural pillars, and official AWS Whitepapers.

Local MiniStack Lab: Spin up local AWS infrastructure (VPCs, S3, IAM, DynamoDB, Lambda, and more) using MiniStack without needing an active AWS account or running up a bill.

