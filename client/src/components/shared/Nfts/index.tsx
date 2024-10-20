import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import testIcon from "@/assets/nft/nft-scrudje3.webp";
import Skeleton from "@mui/material/Skeleton";

const Nfts = () => {
  const [nfts, setNfts] = useState([{
    price: 1000,
    title: "The Greed of Donald's Ruins",
    image: testIcon
  }]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/nfts")
      .then((response) => response.json())
      .then((data) => {
        setNfts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.nft}>
      <ul className={styles.list}>
        {(isLoading ? Array(4).fill({}) : nfts).map((nft, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.price}>
              {isLoading ? (
                <Skeleton variant="text" width={80} height={24} />
              ) : (
                `${nft.price}$`
              )}
            </p>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={322}
                height={322}
                className={styles.icon}
              />
            ) : (
              <img
                src={nft.image || testIcon}
                className={styles.icon}
                alt={`icon-nft-${nft.title}`}
                width="322"
                height="322"
              />
            )}
            <p className={styles.title}>
              {isLoading ? (
                <Skeleton variant="text" width={200} height={24} />
              ) : (
                nft.title
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nfts;
