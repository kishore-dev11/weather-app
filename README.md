# 🌤️ Weather Report Application

## 📌 Objective
To build a responsive Weather Report Application using React that fetches real-time weather data from an API and displays it in a clean and user-friendly UI.

---

## 🚀 Project Overview
This project is a weather application built using React JS and Tailwind CSS.  
Users can search for any city and view live weather details like temperature, humidity, wind speed, sunrise, and sunset.

---

## 🛠️ Technologies Used
- React JS (Create React App)
- Axios
- Tailwind CSS
- OpenWeatherMap API

---

## ⚙️ Features
- 🔍 Search weather by city name
- 🌡 Real-time temperature display
- 💧 Humidity, wind speed, pressure
- 🌅 Sunrise and 🌇 Sunset time
- ⚠️ Input validation (empty field warning)
- ❌ Error handling (invalid city)
- 🌍 Country flag display
- 🌓 Day/Night indicator
- 🎨 Weather-based dynamic color
- 📱 Responsive design (Mobile + Desktop)
- ☰ Mobile menu support

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Weather.jsx
│
├── App.js
├── index.js
└── index.css
```

---

## 🔧 Installation & Setup

### 1. Create React App
```
npx create-react-app weather-app
cd weather-app
```

### 2. Install Axios
```
npm install axios
```

### 3. Install Tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Run Project
```
npm start
```

---

## 🔑 API Setup

1. Go to OpenWeatherMap website  
2. Create an account  
3. Generate API key  
4. Replace in your code:

```
const API_KEY = "YOUR_API_KEY";
```

---

## 🔗 API URL
```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
```

---

## 📱 Responsive Design
- Flexbox and Grid used  
- Tailwind responsive classes used (sm, md, lg)  

---

## ⚠️ Error Handling
- Empty input → shows warning message  
- Invalid city → shows error message  

---

## 🎯 Outcome
A responsive Weather Report Application that:
- Fetches real-time weather data  
- Displays it in a modern UI  
- Works on mobile and desktop  

---

## 💡 Future Enhancements
- 🌈 Dynamic background based on weather  
- 📊 Hourly forecast chart  
- 📍 Location-based weather detection  
- 🌬 Weather animations  

---

## 🙌 Conclusion
This project demonstrates API integration in React, state management using hooks, responsive UI design, and proper error handling.
