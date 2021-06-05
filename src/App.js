import Header from "./components/Header";
import Timer from "./components/Timer";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-column">
        <Topic />
        <Timer />
      </main>
    </div>
  );
}

export default App;
