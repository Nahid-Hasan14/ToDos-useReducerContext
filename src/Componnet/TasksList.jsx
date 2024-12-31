import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";


export default function TasksList() {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  const [isEditing, setIsEditing] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Track new text for the task being edited

  const handleEdit = (task) => {
    setIsEditing(task.id);
    setEditText(task.title);
  };

  const handleSave = (id) => {
    dispatch({ type: "edited", id, title: editText });
    setIsEditing(null);
    setEditText("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "deleted", id });
  };

  return (
    <div>
      <div className="mt-5 py-3">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex gap-4 items-center my-2">
              {isEditing === task.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  <button
                    onClick={() => handleSave(task.id)}
                    className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className="px-4 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p className="pr-4 mr-2 truncate">{task.title}</p>
                  <button
                    onClick={() => handleEdit(task)}
                    className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
