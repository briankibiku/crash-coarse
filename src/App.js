import "./index.css";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "hello lunch", day: "5th April", reminder: true },
    { id: 2, text: "Eat supper", day: "6th April", reminder: true },
    { id: 3, text: "smash bfast", day: "7th April", reminder: false },
  ]);
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:
        !task.reminder
    } : task))
  }
  return (
    <>
      <div className="container">
        <Header title="Task tracker" />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing to show'}
      </div>
    </>
  );
};

export default App;
