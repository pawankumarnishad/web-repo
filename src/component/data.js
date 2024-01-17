var data={
    "location": {
      "city": "Sunnyvale",
      "woeid": 2502265,
      "country": "United States",
      "lat": 37.371609,
      "long": -122.038254,
      "timezone_id": "America/Los_Angeles"
    },
    "current_observation": {
      "pubDate": 1703359716,
      "wind": {
        "chill": 63,
        "direction": "North",
        "speed": 3
      },
      "atmosphere": {
        "humidity": 59,
        "visibility": 10,
        "pressure": 1019.3
      },
      "astronomy": {
        "sunrise": "7:20 AM",
        "sunset": "4:55 PM"
      },
      "condition": {
        "temperature": 57,
        "text": "Sunny",
        "code": 32
      }
    },
    "forecasts": [
      {
        "day": "Sat",
        "date": 1703347200,
        "high": 61,
        "low": 40,
        "text": "Sunny",
        "code": 32
      },
      {
        "day": "Sun",
        "date": 1703433600,
        "high": 59,
        "low": 40,
        "text": "Partly Cloudy",
        "code": 30
      },
      {
        "day": "Mon",
        "date": 1703520000,
        "high": 61,
        "low": 42,
        "text": "Partly Cloudy",
        "code": 30
      },
      {
        "day": "Tue",
        "date": 1703606400,
        "high": 62,
        "low": 47,
        "text": "Mostly Cloudy",
        "code": 28
      },
      {
        "day": "Wed",
        "date": 1703692800,
        "high": 60,
        "low": 45,
        "text": "Showers",
        "code": 11
      },
      {
        "day": "Thu",
        "date": 1703779200,
        "high": 60,
        "low": 43,
        "text": "Mostly Cloudy",
        "code": 28
      },
      {
        "day": "Fri",
        "date": 1703865600,
        "high": 61,
        "low": 46,
        "text": "Showers",
        "code": 11
      },
      {
        "day": "Sat",
        "date": 1703952000,
        "high": 62,
        "low": 45,
        "text": "Scattered Showers",
        "code": 45
      },
      {
        "day": "Sun",
        "date": 1704038400,
        "high": 58,
        "low": 44,
        "text": "Partly Cloudy",
        "code": 30
      },
      {
        "day": "Mon",
        "date": 1704124800,
        "high": 58,
        "low": 44,
        "text": "Rain",
        "code": 12
      },
      {
        "day": "Tue",
        "date": 1704211200,
        "high": 59,
        "low": 43,
        "text": "Partly Cloudy",
        "code": 30
      }
    ]
  }

  console.log(data.current_observation.condition.temperature);