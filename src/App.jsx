import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Task from "./components/Task/Task";
import ErrorPage from "./components/NotFound/NotFound";
import TaskForm from "./pages/TaskForm/TaskForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
