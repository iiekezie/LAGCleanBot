# LAGCleanBot 🌍🗑️  
**AI-Powered Waste Reporting & Management System for Lagos State**

---

## 🚀 Overview

**LAGCleanBot** is an AI-powered solution designed to tackle Lagos State's growing waste management challenges by enabling citizens to easily report illegal dumpsites using image recognition, geolocation, and community engagement.

This tool uses AI to detect, classify, and geo-tag waste through user-submitted photos — empowering both the public and authorities like LAWMA to take smart, data-driven action.

---

## 🎯 Problem Statement

Lagos generates over 13,000 metric tons of waste daily, with many areas suffering from:
- Unreported or poorly reported illegal dumpsites
- Delayed responses from waste authorities
- Low public engagement in environmental health

---

## 💡 Solution

LAGCleanBot enables anyone with a smartphone or internet connection to:

- 📸 Upload images of waste sites
- 🧠 Automatically detect and classify waste using AI
- 📍 Tag the location via GPS
- 🗺️ View a live heatmap of waste density
- 🧾 Submit reports directly to a centralized dashboard

---

## ⚙️ Tech Stack

| Feature                     | Stack / Tool                 |
|----------------------------|------------------------------|
| Frontend                   | ReactJS / Tailwind CSS       |
| Backend                    | Go (Golang) + Fiber          |
| Database                   | PostgreSQL                   |
| AI Model                   | Teachable Machine / TensorFlow.js |
| Maps & Geolocation         | Google Maps API              |
| Auth & Storage             | Firebase                     |
| Hosting                    | Vercel (Frontend), Render (Backend) |
| Image Upload & Analysis    | Cloudinary / Base64 Encoding |

---

## ✨ Features

- 🤖 AI-Powered Waste Detection
- 🧪 Waste Type Classification (Plastic, Organic, Hazardous)
- 📍 Geo-tagging with Interactive Map View
- 🗳️ Community Voting on Reports
- 📊 Real-time Admin Dashboard for LAWMA / NGOs
- 💬 Chatbot for Recycling Tips & Bin Locations

---

## 📷 Sample Screenshots (Coming Soon)

---

## 🛠️ How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/lagcleanbot.git
cd lagcleanbot

# Frontend Setup
cd frontend
npm install
npm run dev

# Backend Setup
cd ../backend
go run main.go
