import React, { useState, useEffect } from "react";

function WeatherWidget() {
  const [temperature, setTemperature] = useState(null); // เก็บค่าอุณหภูมิ
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูล
  const [error, setError] = useState(null); // เก็บข้อความแสดงข้อผิดพลาด (ถ้ามี)

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = ""; // ใส่ API Key ของคุณ
      const city = "Bangkok"; // เมืองที่ต้องการดึงข้อมูล
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setTemperature(data.main.temp); // ดึงเฉพาะค่า temperature
        } else {
          setError(data.message); // กรณีมีข้อผิดพลาด
        }
      } catch (err) {
        setError("Error fetching weather data.");
      } finally {
        setLoading(false); // โหลดเสร็จแล้ว
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white p-3 sm:p-4 rounded-lg shadow-lg flex items-center justify-center">
      {loading ? (
        <p className="text-sm">Loading...</p>
      ) : error ? (
        <p className="text-sm">Error: {error}</p>
      ) : (
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-bold">
          <span className="block sm:inline">
            {/* แสดงเฉพาะค่าองศาในมือถือ */}
            <span className="block sm:hidden">{temperature}°C</span>
            {/* แสดงข้อความเต็มในหน้าจอที่ใหญ่กว่า */}
            <span className="hidden sm:inline">
              Temperature: {temperature}°C
            </span>
          </span>
        </p>
      )}
    </div>
  );
}

export default WeatherWidget;
