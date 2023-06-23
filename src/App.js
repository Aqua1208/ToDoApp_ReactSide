import Task from "./component/Task";

const App = () => {
  return (
    <>
      <h1>Task List</h1>
      <Task name="Shopping" />
      <Task name="Running" />
      <Task name="Programming" />
    </>
  );
}

export default App;