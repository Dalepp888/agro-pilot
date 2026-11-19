# 🌱 AgroPilot

**AI-powered agricultural management platform.**

AgroPilot is a web application designed to help farmers manage their agricultural activities and make more informed decisions through artificial intelligence and weather data.

The platform combines crop management, weather monitoring, task organization, and an AI-powered agricultural assistant to provide practical insights and recommendations for everyday farming decisions.

## ✨ Features

- **Dashboard:** Get an overview of weather conditions, active crops, pending tasks, and agricultural recommendations.
- **Plot Management:** Create and manage agricultural plots, including crop information, planting dates, varieties, and harvest details.
- **Task Management:** Organize farming activities and keep track of upcoming tasks.
- **Weather Monitoring:** Access current weather conditions and forecasts through the Open-Meteo API.
- **AI Agricultural Assistant:** Ask questions about crops, cultivation practices, and agricultural decisions using Google Gemini.
- **Smart Notifications:** Receive relevant alerts and recommendations based on weather conditions, crops, and pending tasks.
- **Conversation History:** Keep track of previous conversations with the AI assistant.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **AI Integration:** Google Gemini API
- **Weather API:** Open-Meteo

## 🚀 Getting Started

### Prerequisites

Before running AgroPilot, make sure you have:

- Node.js
- npm
- A PostgreSQL database (Neon or another PostgreSQL provider).
- A Google Gemini API key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dalepp888/agro-pilot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd agro-pilot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables by creating a `.env` file in the root directory.

5. Set up the database and apply Prisma migrations:

   ```bash
   npx prisma migrate deploy
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Environment Variables

Before running the application, create a `.env` file in the root directory and configure your own credentials:

```env
DATABASE_URL="your_postgresql_connection_string"
GEMINI_API_KEY="your_gemini_api_key"
```

- `DATABASE_URL`: Connection string for your PostgreSQL database.
- `GEMINI_API_KEY`: API key required to connect to Google Gemini.

You can obtain your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

You must provide your own database and API credentials to run AgroPilot.

**Important:** Never commit your `.env` file or expose your credentials.

## 🌦️ External Services

- [Google Gemini](https://ai.google.dev/) – AI-powered agricultural assistance.
- [Open-Meteo](https://open-meteo.com/) – Weather data and forecasts.
- [Neon](https://neon.tech/) – PostgreSQL database hosting.
