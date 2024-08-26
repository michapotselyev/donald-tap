import Skills from "@/components/shared/Skills";
import styles from "./style.module.scss";
import Tabs from "@/components/shared/Tabs";

const Content = () => {
  return (
    <div className={styles.content}>
      <Tabs
        data={[
          { name: "Skills", content: <Skills /> },
          { name: "My NFTs", content: <div>test2</div> },
        ]}
      />
    </div>
  );
};

export default Content;
