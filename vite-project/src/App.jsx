import "./App.css";

import Header from "./components/Header";
import HomePage from "./page/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Toaster />
    </>
  );
}

export default App;
