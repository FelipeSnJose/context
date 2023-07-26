import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/MyContext";
import Navbar from "./components/Navbar";

import Home from "./views/Home"
import Favoritos from "./views/Favoritos";

import fotos from "./assets/fotos.json"
import { useState } from "react";

const App = () => {
console.log(fotos)

const [ data, setData ] = useState(fotos)
const sharedState = { data, setData }

    return (

      <div className="App">
        <MyContext.Provider value={sharedState}>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>

          </BrowserRouter>
        </MyContext.Provider>
      </div>
  )
}

export default App
