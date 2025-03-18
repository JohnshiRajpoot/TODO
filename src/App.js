import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash } from "lucide-react";
import "./App.css"; // Import CSS file

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>🚀 My TODO List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask} className="add-btn">
            <PlusCircle size={28} />
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((t) => (
            <motion.li
              key={t.id}
              className="task-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>{t.text}</span>
              <button onClick={() => removeTask(t.id)} className="delete-btn">
                <Trash size={20} />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
