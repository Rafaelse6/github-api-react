import "./assets/styles/custom.scss";
import "./App.css";
import Navbar from "components/Navbar";
import HomeTexts from "pages/Home/HomeTexts";
import HomeButton from "pages/Home/HomeButton";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeTexts />
      <HomeButton />
    </>
  );
}
