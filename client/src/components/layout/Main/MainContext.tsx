import React, { createContext, useEffect, useRef, useState } from 'react';
import { BG_COLORS } from '@/utils/constants/bgColors';

// Тип контекста
interface MainContextType {
  activeIndex: number;
  menuBorderRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  clickItem: (index: number) => void;
  isLoading: {
    models: boolean;
    menu: boolean;
  };
  finishLoading: (key: "models" | "menu") => void;
}

// Инициализация контекста с типизацией
export const MainContext = createContext<MainContextType>({
  activeIndex: 0,
  menuBorderRef: { current: null },
  menuRef: { current: null },
  clickItem: () => {},
  isLoading: { models: true, menu: true },
  finishLoading: () => {},
});

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState({
    models: true,
    menu: true,
  });

  const menuBorderRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const clickItem = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (menuRef.current && menuBorderRef.current) {
      const menu = menuRef.current;
      const activeItem = menu.querySelector('.active') as HTMLElement;
      if (activeItem) {
        offsetMenuBorder(activeItem, menuBorderRef.current);
      }
      document.body.style.backgroundColor = BG_COLORS[activeIndex];
    }
  }, [activeIndex]);

  const offsetMenuBorder = (element: HTMLElement, menuBorder: HTMLDivElement) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          (menuRef.current?.offsetLeft || 0) -
          (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  const finishLoading = (key: keyof typeof isLoading) => {
    setIsLoading((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <MainContext.Provider
      value={{
        activeIndex,
        menuBorderRef,
        menuRef,
        clickItem,
        isLoading,
        finishLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
