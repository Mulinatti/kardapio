import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Restaurants from "./pages/Restaurants";
import RestaurantPage from "./pages/RestaurantPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<Home/>} />
          <Route path="/restaurants" element={<Restaurants/>}/>
          <Route path="/restaurants/:id" element={<RestaurantPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
