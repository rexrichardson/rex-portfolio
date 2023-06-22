import { AiFillCheckCircle } from "react-icons/ai";
import Text from "../Text/Text";

const BulletCheck = ({ text }) => {
  return (
    <div className="flex flex-row gap-2">
      <AiFillCheckCircle size={20} />
      <Text s light>
        {text}
      </Text>
    </div>
  );
};

export default BulletCheck;
