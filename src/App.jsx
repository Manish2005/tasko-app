import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Task from "./components/Task/Task";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
