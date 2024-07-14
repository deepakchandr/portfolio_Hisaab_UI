import { useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./Comonents/NavBar";
import Home from "./Comonents/Home";
import About from "./Comonents/About";
import Contact from "./Comonents/Contact";
import AddStock from "./Comonents/AddStock";
import AddCategory from "./Comonents/AddCategory";

function App() {
  let routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addStock",
      element: <AddStock />,
    },
    {
      path: "/addCategory",
      element: <AddCategory />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: 64 }}>{routeElements}</div>
    </div>
  );
}

export default App;
