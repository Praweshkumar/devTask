
import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const TaskList = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const { data } = await api.get("/tasks", config);
    setTasks(data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const deleteTask = async (id) => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    await api.delete(`/tasks/${id}`, config);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <ul className="mt-4 space-y-3">
      {tasks.map((t) => (
        <li
          key={t._id}
          className="flex justify-between items-center bg-white shadow-sm rounded-md px-4 py-2 hover:shadow-md transition-shadow"
        >
          <span className="text-gray-800">{t.title}</span>
          <button
            onClick={() => deleteTask(t._id)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            ❌
          </button>
        </li>
      ))}
      {tasks.length === 0 && (
        <li className="text-gray-500 text-center py-4">No tasks added yet.</li>
      )}
    </ul>
  );
};

export default TaskList;
