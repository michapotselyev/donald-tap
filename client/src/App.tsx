import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pages } from "./utils/constants/routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {Object.values(pages).map((page) => (
            <Route key={page.url} path={page.url} element={<page.element />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
