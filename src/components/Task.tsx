interface TaskProps {
  taskdata: string;
  index: number;
  onDelete: (index: number) => void;
}

export const Task = ({ taskdata, index, onDelete }: TaskProps) => {
  return (
    <div className="flex justify-between items-center h-10 w-64 border-2 border-black p-2 m-1">
      <p>{taskdata}</p>
    
      <button className="text-red-500 font-bold px-1" onClick={() => onDelete(index)}>
        X
      </button>
    </div>
  );
};