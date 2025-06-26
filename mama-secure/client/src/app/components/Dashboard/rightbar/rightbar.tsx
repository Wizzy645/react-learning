import Image from "next/image"
import { MdPlayCircleFilled } from "react-icons/md"
import styles from "./rightbar.module.css"

export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/password.webp" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h2 className={styles.title}>How to use the new version of the admin dashboard</h2>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h2 className={styles.title}>How to use the new version of the admin dashboard</h2>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
    </div>
  );
}
