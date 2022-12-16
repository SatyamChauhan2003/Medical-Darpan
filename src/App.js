import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Sidebar />
    </>
  );
}

export default App;
