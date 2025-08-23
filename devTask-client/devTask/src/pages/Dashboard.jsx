
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#FFFDED] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Tasks</h2>
      <div className="max-w-xl mx-auto">
        <TaskForm onTaskAdded={() => window.location.reload()} />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;

