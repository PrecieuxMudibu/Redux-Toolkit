import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  // const tasks = useSelector((state) => console.log("STATE", state));
  const tasks = useSelector((state) => state.todos);
  console.log("tasks", tasks);
  return (
    <>
      {tasks.map((t) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  );
};

export default TasksList;
