import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TaskForm from "./pages/TaskForm/TaskForm";
import TaskEditForm from "./pages/TaskEditForm/TaskEditForm";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskEditForm />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
