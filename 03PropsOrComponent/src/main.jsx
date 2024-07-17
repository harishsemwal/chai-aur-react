import React from "react";
import ReactDOM from "react-dom/client";
import { Garbage } from "./App.jsx";
import TailwindDeco from "./Components/TailwindDeco.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Garbage />
    <TailwindDeco />
  </>
);
