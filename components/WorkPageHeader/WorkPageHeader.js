import Tag from "../Tag/Tag";
import HeaderText from "../HeaderText/HeaderText";
import Text from "../Text/Text";

const WorkPageHeader = ({ tags, title,  date }) => {
  return (
    <div className="flex flex-col items-center pb-4">
      <div className="w-full pb-4 sm:pb-6">
        <div className="flex flex-wrap justify-start sm:justify-center gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} value={tag}  />
          ))}
        </div>
      </div>
      <Text s light className="text-center pb-2">
        {date}
      </Text>
      <HeaderText xl bold>
        {title}
      </HeaderText>
    </div>
  );
};

export default WorkPageHeader;
