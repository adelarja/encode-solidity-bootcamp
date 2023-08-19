import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons_container}>
        <div>
          <a
            href="https://github.com/adelarja/encode-solidity-bootcamp"
            target={"_blank"}
          >
            Leave a star on Github
          </a>
        </div>
      </div>
    </div>
  );
}
