import Home from "./Componets/Home";
import Carinho from "./Componets/Carinho";
import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  return (
    <>
   

<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/carinho" element={<Carinho/>} />

</Routes>

</BrowserRouter>
</>
    
  );
}

export default App;
