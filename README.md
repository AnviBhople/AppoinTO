# 🏥 AppoinTO

**Smart Location-Based Appointment Booking Platform**

AppoinTO is a web-based platform that helps users **find and book appointments** with nearby healthcare providers, wellness centers, and professional counselors based on their location. It aims to simplify access to essential services by providing a **centralized, user-friendly interface**.

## Features

  * **Location-based service discovery**
  * **Multi-category support:**
      * Healthcare (Doctors, Clinics)
      * Wellness (Yoga, Fitness, Spa)
      * Counseling (Therapists)
  * **Search by location and category**
  * **Easy appointment booking**
  * **Email confirmation for bookings**
  * **Admin panel to manage providers**
  * **Ratings and featured providers**
  * **AI Assessment Module:** A specialized triage tool to help users identify the right care before booking.
  * **Dynamic Provider Profiles:** Real-time data fetching for specific provider details using unique IDs.

### AI Layer
AppoinTO distinguishes itself by moving beyond a simple directory through its AI Assessment & Triage Engine.
* Smart Screening: A dedicated module where users can initiate a "Start AI Assessment" journey.
* Intelligent Questioning: Designed to help users navigate complex symptoms before committing to a specialist.
* Data-Driven Direction: Provides a "Wow Factor" user experience by bridging the gap between uncertainty and professional consultation.
* Seamless Integration: The AI portal is strategically placed within the Hero section to act as the primary "Smart Entry" for new users.

## Tech Stack

  * **Frontend:** React.js + Bootstrap + CSS3 Animations
  * **Backend:** Node.js + Express.js
  * **Database:** MongoDB (Atlas)
  * **APIs:** REST APIs + Axios
  * **Other:** Email integration, Location filtering, Google Material Symbols



## Component Architecture & Logic

### 1\. Hero Section (`Hero.js`)

The landing page features a high-performance search engine and custom UI elements:

  * **Dynamic Navigation:** Logic to handle category-based routing (`/healthcare`, `/wellness`, etc.).
  * **Visual Enhancements:** \* `healthcareWave`: A CSS keyframe animation for floating medical indicators.
      * `rotateGlow`: A glowing, rotating "Verified Trust" badge.
  * **AI Assessment:** A prominent call-to-action button for the health screening module.

### 2\. Booking Engine (`Booking.js`)

A data-heavy component that bridges the frontend and backend:

  * **Fetch Logic:** Uses `useParams` to pull provider IDs from the URL and fetch specific data from the `/api/providers/details/:id` endpoint.
  * **Slot Management:** Allows users to select specific time windows (Morning/Afternoon/Evening/Night).

### 3\. User Dashboard

A personalized "My Details" area where users can track their medical history, profile data, and upcoming appointment schedules.

-----

## API Endpoints (Quick Reference)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/providers/:category` | Fetches a list of providers by category. |
| `GET` | `/api/providers/details/:id` | Fetches full details for a specific specialist. |
| `POST` | `/api/appointments/book` | Records a new appointment in the database. |

-----

## Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/AnviBhople/AppoinTO.git
cd AppoinTO
```

2️⃣ **Setup Frontend**

```bash
cd client
npm install
npm start
```

Runs on: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

3️⃣ **Setup Backend**

```bash
cd server
npm install
npm run dev
```

🔄 **Git Workflow**

  * **To Pull latest changes:** `git pull origin main`
  * **To Push your changes:** \`\`\`bash
    git add .
    git commit -m "Your message"
    git push origin main
    ```
    
    ```

## Unique Selling Point (USP)

A location-based smart service discovery platform integrating healthcare, wellness, and counseling into one seamless booking system.


*Developed with a focus on modern MERN stack architecture and user-centric design.*
