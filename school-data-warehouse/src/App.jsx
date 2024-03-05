import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousePage from "./pages/warehouse.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousePage></WarehousePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
