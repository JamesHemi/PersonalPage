import tkinter as tk
import requests

API_KEY = "demo"  # Replace with real key from OpenWeatherMap

def get_weather():
    city = entry.get()
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    r = requests.get(url)
    data = r.json()
    if data.get("main"):
        weather_label.config(text=f"{data['name']}: {data['main']['temp']}°C, {data['weather'][0]['description']}")
    else:
        weather_label.config(text="City not found.")

root = tk.Tk()
root.title("Weather Dashboard")
entry = tk.Entry(root)
entry.pack(pady=10)
btn = tk.Button(root, text="Get Weather", command=get_weather)
btn.pack()
weather_label = tk.Label(root, text="Enter a city above")
weather_label.pack(pady=20)
root.mainloop()
