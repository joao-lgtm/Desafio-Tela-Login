import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Home /> : <Login />;
};

export default App;
