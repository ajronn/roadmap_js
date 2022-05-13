import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {UserProvider} from "./providers"

import {Home} from "./views"

export const App = () => {
  


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
