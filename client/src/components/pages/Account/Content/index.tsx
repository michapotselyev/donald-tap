import Skills from "@/components/shared/Skills";
import styles from "./style.module.scss";
import Tabs from "@/components/shared/Tabs";
import Nfts from "@/components/shared/Nfts";

const Content = () => {
  return (
    <div className={styles.content}>
      <Tabs
        data={[
          { name: "My NFTs", content: <Nfts/> },
          { name: "Skills", content: <Skills /> },
        ]}
      />
    </div>
  );
};

export default Content;
