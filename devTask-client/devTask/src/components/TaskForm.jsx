
import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty tasks
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const { data } = await api.post("/tasks", { title }, config);
    onTaskAdded(data);
    setTitle("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 p-4 bg-white shadow-md rounded-md"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
