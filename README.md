<div align="center">

🛡️ FlowLock

Next-Gen API Security: Behavior Over Identity

Secure API Abuse & Rate-Limit Bypass Detection Built by Team Vegabond for Code Craft Chase 2.0 (2026)

Demo • Features • Tech Stack • Installation

</div>

🚀 The Problem

Traditional API security relies on Static Rate Limits (e.g., "100 requests/min per IP"). This approach is fundamentally broken in the modern threat landscape:

Attackers rotate IPs using cheap proxies and VPNs to bypass blocks.

Distributed Botnets spread attacks across thousands of IPs, staying under the radar of per-IP limits.

Legitimate Users (e.g., behind a corporate NAT) often get blocked unfairly.

💡 The Solution: Behavior-Based Defense

FlowLock shifts the paradigm from Identity (Who you are) to Behavior (What you do).

Instead of blocking an IP address, we analyze the patterns of the request stream. Attackers can change their IP, User-Agent, and Tokens, but they cannot easily fake human behavior at scale. FlowLock assigns a dynamic Risk Score (0-100) to every session in real-time.

⚡ Key Features

🧠 Behavioral Fingerprinting

We detect anomalies based on how requests are made, not just the volume:

Inter-Request Timing Variance: Bots are mathematically precise; humans are messy.

Sequential Endpoint Entropy: Detects scraping patterns (e.g., predictable ID enumeration).

Burst Patterns: Identifies unnatural spikes that deviate from a user's baseline.

🚦 Adaptive Throttling

Instead of a binary "Block/Allow", we use a granular response system:

🟢 Low Risk (0-30): Normal access.

🟡 Medium Risk (31-70): Invisible Throttling. We introduce artificial latency (e.g., 500ms delay). This destroys the ROI for bots without breaking the experience for humans.

🔴 High Risk (71-100): Temporary block or challenge.

🚫 Frictionless Experience

No CAPTCHAs: We don't punish real users with puzzle solving.

Privacy First: No invasive tracking or persistent cookies required.

🛠️ Tech Stack

Backend: Python, FastAPI (High-performance async framework)

Detection Engine: Custom Middleware for Real-time Log Analysis

Storage: In-Memory (Hackathon version) / Redis (Production)

Architecture: Event-driven architecture with sliding window analysis

⚙️ How It Works

Monitor: The FlowLockMiddleware intercepts every incoming HTTP request.

Extract: It extracts metadata (timestamps, endpoints, headers) and updates the session's behavioral profile.

Score: The engine calculates a Risk Score based on weighted heuristics:

burst_score: Frequency of requests in short windows.

regularity_score: Standard deviation of time gaps between requests.

error_score: Ratio of 4xx/5xx responses (detects fuzzing/brute-force).

Act: The middleware enforces a penalty (delay or block) before passing the request to the main application.

🚀 Getting Started

Prerequisites

Python 3.9+

pip

Installation

Clone the repo

git clone [https://github.com/your-username/flowlock.git](https://github.com/your-username/flowlock.git)
cd flowlock


Install dependencies

pip install fastapi uvicorn redis


Run the server

uvicorn main:app --reload


Test the API
Open http://localhost:8000/docs to see the Swagger UI.

Simulation / Demo

To see the protection in action, run the included attack simulation script:

python scripts/attack_sim.py


This script simulates a bot rotating IPs vs. a human user, demonstrating how FlowLock blocks the bot despite the IP changes.

🔮 Future Scope

AI Integration: Move from heuristic rules to an unsupervised LSTM model for anomaly detection.

Device Fingerprinting: Incorporate canvas and audio context fingerprinting for stronger session binding.

Global Sync: Use a Redis Cluster to synchronize risk scores across distributed edge regions.

👥 Team Vegabond

Member 1 - Full Stack & Architecture

Member 2 - Security Logic & Data Science

Member 3 - Frontend & Visualization

Member 4 - DevOps & Testing

<div align="center">
<sub>Built with ❤️ at Code Craft Chase 2.0</sub>
</div>
