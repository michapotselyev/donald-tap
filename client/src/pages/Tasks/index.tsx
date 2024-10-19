import Main from "@/components/layout/Main";
import styles from "./style.module.scss";

const Tasks = () => {
  return (
    <>
      <Main>
        <section className={styles.tasks}>
          <div className={styles.container}>
            <p className={styles.title}>Missions</p>

            <ul className={styles.groups}>
              <li className={styles.groupsItem}>
                <p className={styles.groupsItemTitle}>Group 1</p>\
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.avatar}>
                      {/* <img className={styles.avatarIcon} alt="avatar-icon" /> */}
                    </div>

                    <p className={styles.itemText}>Task 1</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Tasks;
