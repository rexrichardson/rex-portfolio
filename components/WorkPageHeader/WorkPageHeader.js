import Tag from "../Tag/Tag";
import styles from "./WorkPageHeader.module.css";
import HeaderText from "../HeaderText/HeaderText";

const WorkPageHeader = ({ tags, title, theme }) => {
  return (
    <div className="flex flex-col items-center pb-4">
      <div className={`w-full pb-4 sm:pb-6`}>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} value={tag} theme={theme} />
          ))}
        </div>
      </div>

      <HeaderText xl bold>
        {title}
      </HeaderText>
    </div>
  );
};

export default WorkPageHeader;
