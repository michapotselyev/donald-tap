import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pages } from "./utils/constants/routes";
import { MainProvider } from "./components/layout/Main/MainContext";

function App() {
  return (
    <>
    <MainProvider>
      <Router>
        <Routes>
          {Object.values(pages).map((page) => (
            <Route key={page.url} path={page.url} element={<page.element />} />
          ))}
        </Routes>
      </Router>
      </MainProvider>
    </>
  );
}

export default App;
