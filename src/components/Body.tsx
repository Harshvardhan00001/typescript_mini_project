import { useState } from "react";
import { Task } from "./Task";

export const Body = () => {
  const [data, setdata] = useState<string>("");
  const [tasks, settasks] = useState<string[]>([]);

  // Add a new task
  const handletask = () => {
    if (data.trim() !== "") {
      settasks([...tasks, data]);
      setdata("");
    }
  };

  // Delete a task using .filter()
  const handleDelete = (indexToDelete: number) => {
    const remainingTasks = tasks.filter((_, index) => index !== indexToDelete);
    settasks(remainingTasks);
  };

  // Edit a task using .map()
  const handleedit = (indextoedit: number, newText: string) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indextoedit ? newText : task
    );
    settasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex justify-center items-start pt-20 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span>📋</span> My Tasks
        </h2>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-700 placeholder-slate-400"
            placeholder="Add a new task..."
            value={data}
            onChange={(e) => setdata(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handletask()}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm shadow-orange-500/20 transition-all duration-150"
            onClick={handletask}
          >
            Add Task
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-slate-400 py-8 text-sm">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((task, index) => (
              <Task 
                key={index} 
                index={index} 
                taskdata={task} 
                onDelete={handleDelete} 
                handleEdit={handleedit}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
};