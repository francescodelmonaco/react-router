// importo react router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importo le pagine
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { PostsList } from "./pages/PostsList";

// importo i layout
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route Component={HomePage} path="/" />
          <Route Component={AboutUs} path="/aboutus" />
          <Route Component={PostsList} path="/postslist" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
