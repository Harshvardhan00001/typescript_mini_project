import { useState } from "react";

interface TaskProps {
  index: number;
  taskdata: string;
  onDelete: (index: number) => void;
  handleEdit: (index: number, newText: string) => void;
}

export const Task = ({ index, taskdata, onDelete, handleEdit }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(taskdata);
  const [isCompleted, setIsCompleted] = useState(false);

  // Toggle completion state
  const checkFun = () => {
    setIsCompleted(!isCompleted);
  };

  // Run the save functionality
  const handleSave = () => {
    if (editText.trim() !== "") {
      handleEdit(index, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-xl transition-all group gap-3">
      
      {/* Checkbox */}
      <input 
        type="checkbox" 
        checked={isCompleted}
        onChange={checkFun}
        className="w-4 h-4 text-orange-500 border-slate-300 rounded focus:ring-orange-500"
      />
      
      {isEditing ? (
        /* EDITING MODE: Show input field */
        <input
          type="text"
          className="flex-1 px-2 py-1 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-slate-700 mr-4"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        /* NORMAL MODE: Show static text with conditional line-through styling */
        <span className={`flex-1 text-slate-700 font-medium break-all ${isCompleted ? "line-through text-slate-400" : ""}`}>
          {taskdata}
        </span>
      )}

      {/* Action Buttons Container */}
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button 
            onClick={handleSave} 
            className="text-green-600 font-medium px-2 py-1 hover:bg-green-50 rounded-lg transition-colors"
          >
            SAVE
          </button>
        ) : (
          <button 
            onClick={() => setIsEditing(true)} 
            className="text-slate-500 hover:text-orange-500 font-medium px-2 py-1 hover:bg-orange-50 rounded-lg transition-colors"
          >
            EDIT
          </button>
        )}

        <button
          onClick={() => onDelete(index)}
          className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors md:opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>

    </div>
  );
};