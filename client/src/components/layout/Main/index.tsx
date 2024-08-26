import Footer from "@/components/Footer";
import { ReactElement, ReactNode } from "react";

interface MainType {
  children: ReactNode;
}

const Main = ({ children }: MainType): ReactElement => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Main;
