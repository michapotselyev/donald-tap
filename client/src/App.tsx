import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { pages } from "./utils/constants/routes";
import { MainProvider } from "./components/layout/Main/MainContext";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Соответствие пути URL индексу страницы
  const getIndexFromPath = (path: string) => {
    const pageEntries = Object.entries(pages);
    const matchedPage = pageEntries.find(([, page]) => page.url === path);
    return matchedPage ? pageEntries.indexOf(matchedPage) : 0;
  };

  // Обновление индекса при смене пути (например, при нажатии на меню)
  useEffect(() => {
    const currentIndex = getIndexFromPath(location.pathname);
    setIndex(currentIndex);
  }, [location.pathname]);

  // Изменение страницы при свайпе
  const handleChangeIndex = (newIndex: number) => {
    const pageEntries = Object.values(pages);
    if (pageEntries[newIndex]) {
      navigate(pageEntries[newIndex].url);
    }
    setIndex(newIndex);
  };

  return (
    <MainProvider>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flexGrow: 1 }}>
          <SwipeableViews
            index={index}
            onChangeIndex={handleChangeIndex}
            animateTransitions={true} // Включаем анимацию переходов
            resistance={true} // Добавляем сопротивление для более плавного свайпа
            style={{ height: "100%" }} // Задать высоту для SwipeableViews
            containerStyle={{ height: "100%" }} // Контейнер для страниц
          >
            {Object.values(pages).map((page) => (
              <div
                key={page.url}
                style={{
                  height: "100%",
                  overflow: "auto",
                  position: "relative",
                }}
              >
                {React.createElement(page.element, { key: page.url })}
              </div>
            ))}
          </SwipeableViews>
        </div>
        <Footer />
      </div>
    </MainProvider>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
