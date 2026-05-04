# CampusConnect - Smart Notification Hub

An intelligent campus communication platform engineered for modern educational institutions. This comprehensive system delivers real-time alerts, intelligent message prioritization, and optimized resource management through advanced algorithms and responsive web technologies.

**Student Information:**
- **Name**: Nishchay Chaurasia
- **Roll Number**: 18125
- **GitHub**: DeathSquat

---

## 🌟 System Architecture

This modular platform consists of four interconnected modules:

1.  **`logging_middleware/`**: Enterprise-grade logging framework with structured output, remote monitoring capabilities, and Express.js request tracing
2.  **`notification_app_be/`**: High-performance Node.js backend with PostgreSQL persistence, WebSocket real-time delivery, and RESTful API endpoints
3.  **`notification_app_fe/`**: Modern Next.js 14 application featuring responsive design, real-time updates, and intuitive user experience
4.  **`vehicle_maintence_scheduler/`**: Advanced optimization engine implementing custom algorithms for efficient resource allocation

---

## 📂 Project Layout

```
campus-connect/
├── logging_middleware/           # Centralized logging utilities
├── notification_app_be/          # API server and business logic
├── notification_app_fe/          # User interface and client-side logic  
├── vehicle_maintence_scheduler/  # Resource optimization algorithms
├── notification_system_design.md # Technical specifications
├── README.md                     # Project documentation
└── .gitignore                    # Version control exclusions
```

---

## 🛠 Core Technologies

### Intelligent Message Prioritization
Our smart inbox employs a sophisticated scoring mechanism:
- **Algorithm**: `Score = CategoryWeight + TimeDecayFactor`
- **Category Priority**: Academic (3), Administrative (2), General (1)
- **Time Decay**: `1 / (elapsed_hours + 1)` for freshness
- **Data Structure**: Optimized Min-Heap for O(log K) top-K operations

### Resource Management Engine
- Custom **Knapsack Dynamic Programming** implementation
- Maximizes operational efficiency within resource constraints
- Pure algorithmic approach without external dependencies

### Live Communication System
- **WebSocket Integration**: Instant bidirectional messaging via Socket.io
- **Graceful Degradation**: Automatic fallback to HTTP polling
- **Scalable Architecture**: Supports concurrent user connections

---

## 🚀 Quick Start Guide

### System Requirements
- Node.js runtime (version 18 or higher)
- PostgreSQL database server (port 5432)
- Modern web browser with WebSocket support

### Backend Configuration
```bash
cd notification_app_be
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run db:setup     # Create database tables
npm run start        # Launch API server (localhost:4000)
```

### Frontend Installation
```bash
cd notification_app_fe
npm install
cp .env.example .env.local
# Configure API endpoint if needed
npm run dev          # Start development server (localhost:3000)
```

### Logging Framework Setup
```bash
cd logging_middleware
npm install
npm run compile      # Build TypeScript modules
```

---

## 📝 Technical Documentation

Comprehensive technical specifications, database schemas, API documentation, and algorithm implementations are detailed in our [technical design document](notification_system_design.md).

---

## 📜 Project Information

Developed as part of the CampusConnect initiative for modern educational communication systems.
