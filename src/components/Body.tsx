import { useState } from "react";
import { Task } from "./Task";

export const Body = () => {
  const [data, setdata] = useState<string>("");
  const [tasks, settasks] = useState<string[]>([]);

  const handletask = () => {
    if (data.trim() !== "") {
      settasks([...tasks, data]);
      setdata("");
    }
  };


  const handleDelete = (indexToDelete: number) => {
    const remainingTasks = tasks.filter((_, index) => index !== indexToDelete);
    settasks(remainingTasks);
  };

  return (
    <>
      <div className="flex justify-around m-4 ">
        <input type="text" className="w-3/4 border p-2" value={data} onChange={(e) => setdata(e.target.value)} />
        <button className='bg-orange-200 p-2 rounded-xl' onClick={handletask}>GO</button>
      </div>
      
      <div className="m-4">
        {tasks.map((task, index) => (
         
          <Task key={index} index={index} taskdata={task} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};