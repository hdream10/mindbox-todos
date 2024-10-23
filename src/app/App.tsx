import { Todos } from "@/widgets/todos";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <h1 className="app-title">todos</h1>
      <Todos/>
    </div>
  );
}

export default App;
