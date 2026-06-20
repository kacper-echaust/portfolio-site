import formBuilderImg from "../assets/images/form-builder.png";
import fischkAppImg from "../assets/images/fischkapp.png";
import TodoImg from "../assets/images/todo.png";
import ViceCityBarber from "../assets/images/vice-city-barber.png";
import WeatherApp from "../assets/images/weather-app.png";
import LoginApp from "../assets/images/Login-app.png";
import SafeFuture from "../assets/images/safe-future.png";
import Szczesliwsi from "../assets/images/szesliwsi.png";

export const projects = [
  {
    id: 1,
    title: "Form builder",
    photo: formBuilderImg,
    stack: [
      "React",
      "Typescript",
      "React-Testing-Library",
      "Vitest",
      "ChakraUI",
    ],
    description:
      "Tworzenie formularzy przy użyciu drag-n-drop. Możliwość podglądu tworzonego formularza. Walidacja pól. Ustawione pod desktop jak i mobile.",
    live: "https://form-builder-kacper.netlify.app/",
    github: "https://github.com/kacper-echaust/form-builder",
  },
  {
    id: 2,
    title: "Fishk App",
    photo: fischkAppImg,
    stack: [
      "React",
      "Typescript",
      "React-Testing-Library",
      "Vitest",
      "ChakraUI",
    ],
    description:
      "Tworzenie fiszek. Aplikacja CRUD z połączonym backendem. Walidacja formularza oraz licznik kart.",
    live: "https://github.com/kacper-echaust/fischkapp",
    github: "https://kacper-echaust.github.io/fischkapp/",
  },
  {
    id: 3,
    title: "Barber Shop Vice City",
    photo: ViceCityBarber,
    stack: ["React", "Typescript", "React-Router"],
    description:
      "Wizytówka BarberShopu na styl Vice City. Wykorzystana karuzela, google maps oraz routing.",
    live: "https://kacper-echaust.github.io/barber-shop/#/",
    github: "https://github.com/kacper-echaust/barber-shop",
  },
  {
    id: 4,
    title: "Weather App",
    photo: WeatherApp,
    stack: ["React", "Typescript", "Dark Mode", "API", "ChakraUI"],
    description:
      "Sprawdzanie pogody w czasie rzeczywistym. Dark mode. Połączenie z API pogodowym.",
    live: "https://kacper-echaust.github.io/weather-app/",
    github: "https://github.com/kacper-echaust/weather-app",
  },
  {
    id: 5,
    title: "Login App",
    photo: LoginApp,
    stack: ["React", "Typescript", "firebase", "Zod", "React-hook-form"],
    description:
      "Logowanie oraz rejestracja. Wykorzystuję bazę danych firebase. Walidacja formularza.",
    live: "https://login-app-kacper.netlify.app/",
    github: "https://github.com/kacper-echaust/Login-app",
  },
  {
    id: 6,
    title: "Safe Future",
    photo: SafeFuture,
    stack: ["REACT", "TypeScript", "Motion"],
    description: "Portfolio firmy Safe Future",
    live: "https://safe-future.pl/",
    github: "https://github.com/kacper-echaust/safe-future",
  },
  {
    id: 7,
    title: "Fundacja Szczęśliwsi",
    photo: Szczesliwsi,
    stack: ["REACT", "TypeScript"],
    description:
      "Strona fundacji szczęśliwsi wykonana w zespole kilkuosobowym.",
    live: "https://www.szczesliwsi.com/",
    github: "https://github.com/kacper-echaust/Happier",
  },
  {
    id: 8,
    title: "To do",
    photo: TodoImg,
    stack: ["REACT", "TypeScript", "Redux"],
    description:
      "Prosta aplikacja do zarządzania zadaniami (TODO), zbudowana w React + TypeScript i oparta na Redux do zarządzania stanem. Umożliwia dodawanie, edytowanie, usuwanie oraz oznaczanie zadań jako ukończone. Dane są zapisywane w localStorage, dzięki czemu lista zadań pozostaje po odświeżeniu strony.",
    live: "https://kacper-echaust.github.io/task-app-redux/",
    github: "https://github.com/kacper-echaust/task-app-redux",
  },
];
export const navItems = [
  { label: "O mnie", href: "#about" },
  { label: "Projekty", href: "#projects" },
  { label: "Umiejętności", href: "#skills" },
];
