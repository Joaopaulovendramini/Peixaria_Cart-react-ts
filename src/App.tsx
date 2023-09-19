import Home from "./Componets/Estrutura-Site/Home";
import Carinho from "./Componets/CarinhoDeCompras/Carinho";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/carinho", element: <Carinho /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
