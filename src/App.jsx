import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tasks from "./components/Tasks/Tasks";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/task/:id" element={<Tasks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
