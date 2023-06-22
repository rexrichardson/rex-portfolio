import styles from "./WorkBody.module.css";

export default function WorkBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
