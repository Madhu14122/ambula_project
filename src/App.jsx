import { Link, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TodoList from "./components/TodoList";
import ShoppingCart from "./components/ShoppingCart.jsx";
import APIIntegration from "./components/APIIntegration.jsx";
import "./styles/App.css";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/todo">To-Do List</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/api">Api Integration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/api" element={<APIIntegration />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;
