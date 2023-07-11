import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage, TaskForm, TaskEditForm, TaskDetails, NotFound} from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<TaskForm/>}/>
        <Route path="/task/:id/edit" element={<TaskEditForm/>}/>
        <Route path="/task/:id" element={<TaskDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
