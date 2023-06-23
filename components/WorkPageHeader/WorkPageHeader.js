import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import styles from "./WorkPageHeader.module.css";
import HeaderText from "../HeaderText/HeaderText";

const WorkPageHeader = ({ tags, title, theme }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`${styles.workPageHeader} pb-16`}>
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
