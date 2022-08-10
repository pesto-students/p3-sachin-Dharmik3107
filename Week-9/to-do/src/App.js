import "./App.css";
import Sidebar from "./Components/Sidebar";
import AddTask from "./Components/AddTask";
import TaskCard from "./Components/TaskCard";
import EditTask from "./Components/EditTask";
import Search from "./Components/Search";

function App() {
  return (
    <body>
      <Sidebar />
      <AddTask />
      <EditTask />
      <div className="task-list">
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
        <TaskCard
          title="Task 1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur, totam "
        />
      </div>
      <Search></Search>
    </body>
  );
}

export default App;
