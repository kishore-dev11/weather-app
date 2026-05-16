import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputError, setInputError] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const API_KEY = "60d0971bc34121eb4844a571d2ee296a";

  const searchWeather = async () => {

    if (!city.trim()) {
      setInputError("⚠ Please fill the field");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setData(res.data);
      setError("");
      setInputError("");
      setShowWelcome(false); // ✅ hide welcome after search

    } catch {
      setError("City not found ❌");
      setData(null);
    }
  };
  const formatTime = (time) => {
    return new Date(time * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 🌞 Day/Night
  const isDay =
    data && data.dt > data.sys.sunrise && data.dt < data.sys.sunset;

  // 🎨 Dynamic Color
  let bgColor = "bg-blue-500";

  if (data) {
    const weatherMain = data.weather[0].main;

    if (weatherMain === "Clear") bgColor = "bg-yellow-400";
    else if (weatherMain === "Clouds") bgColor = "bg-gray-400";
    else if (weatherMain === "Rain") bgColor = "bg-blue-700";
  }

  return (
    <div className="w-full max-w-md p-4 mx-auto">

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 text-white">

        {/* 🔹 TOP BAR */}
        <div className="flex items-center w-full mb-4">
          <h2 className="text-xl font-bold">🌤️ Weather</h2>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl ml-auto"
          >
            ☰
          </button>
        </div>

        {/* 🔹 MOBILE MENU */}
        {menuOpen && (
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-3 mb-4 sm:hidden">
            <p className="py-1">🏠 Home</p>
            <p className="py-1">📍 Location</p>
            <p className="py-1">⚙ Settings</p>
          </div>
        )}

        {/* 🔍 Search */}
        <div className="flex mb-2">
          <input
            type="text"
            placeholder="Enter city..."
            className={`flex-1 px-3 py-2 rounded-l-lg text-black outline-none transition ${inputError ? "border-2 border-red-500 animate-shake" : ""
              }`}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (e.target.value.trim()) setInputError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && searchWeather()}
          />

          <button
            onClick={searchWeather}
            className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {showWelcome && !data && (
          <div className="text-center mb-4 animate-fadeIn">
            <h1 className="text-2xl font-bold">
              👋 Welcome to my Weather App
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Search your city to get live weather 🌍
            </p>
          </div>
        )}

        {/* ⚠ INPUT ERROR */}
        {inputError && (
          <p className="text-red-400 text-sm mb-2 animate-bounce">
            {inputError}
          </p>
        )}

        {/* ❌ API Error */}
        {error && <p className="text-red-400 mb-2">{error}</p>}

        {/* 🌦 Weather Data */}
        {data && (
          <div className="mt-4 text-center">

            {/* 🔥 ICON + FLAG + DAY/NIGHT */}
            <div className="flex items-center justify-center gap-3 mb-2">

              {/* 🌍 Country Flag */}
              <img
                src={`https://flagsapi.com/${data.sys.country}/flat/64.png`}
                alt="flag"
                className="w-10 p-2 h-10 rounded-full border"
              />

              {/* 🎨 Weather Icon */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bgColor}`}>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weather"
                  className="w-10 h-10"
                />
              </div>

              {/* 🏙 City */}
              <h1 className="text-3xl font-semibold">{data.name}</h1>

              {/* 🌓 Day/Night */}
              <span className="text-xl">
                {isDay ? "🌞" : "🌙"}
              </span>

            </div>

            <h2 className="text-5xl font-bold my-2">
              {Math.round(data.main.temp)}°C
            </h2>

            <p className="text-lg">{data.weather[0].main}</p>

            {/* 🔹 BOX GRID */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                💧 Humidity
                <div className="font-bold">{data.main.humidity}%</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                💨 Wind
                <div className="font-bold">{data.wind.speed} km/h</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                🌅 Sunrise
                <div className="font-bold">{formatTime(data.sys.sunrise)}</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                🌇 Sunset
                <div className="font-bold">{formatTime(data.sys.sunset)}</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                🌡 Feels Like
                <div className="font-bold">
                  {Math.round(data.main.feels_like)}°C
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                📊 Pressure
                <div className="font-bold">{data.main.pressure} hPa</div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Weather;