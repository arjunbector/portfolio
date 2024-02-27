import weather from "/public/projects/weather.png";
import tripPlanner from "/public/projects/tripPlanner.png";
import news4You from "/public/projects/news4You.png";
import moviesPulse from "/public/projects/moviesPulse.png";

const projects = [
  {
    id: 1,
    name: "Trip Planner",
    src: tripPlanner,
    description:
      "A web application that allows users to explore different trip destinations across the globe. It provides a simple and intuitive interface built with HTML, vanilla CSS and JavaScript.",
    githubLink: "https://github.com/arjunbector/trip-planner",
    websiteLink: "https://arjunbector.github.io/Trip-Planner/",
  },
  {
    id: 2,
    name: "Weather App",
    src: weather,
    description:
      "A simple weather app built using React to display weather information. It uses the OpenWeatherMap API to fetch weather data and display it to the user.",
    githubLink: "https://github.com/arjunbector/Weather-app",
    websiteLink: "https://arjun-weather-app.netlify.app/",
  },
  {
    id: 3,
    name: "New4You",
    src: news4You,
    description:
      "A web application that aggregates news from around the world, offering users a convenient and feature-rich platform to stay updated with current events.",
    githubLink: "https://github.com/arjunbector/News4You",
    websiteLink: null,
  },
  {
    id: 4,
    name: "Movies Pulse",
    src: moviesPulse,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis nisi delectus enim atque doloremque, beatae maxime! Veniam, ipsa sapiente?",
    githubLink: "https://github.com",
    websiteLink: "https://github.com",
  },
];

export default projects;
