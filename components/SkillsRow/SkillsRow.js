import Text from "../Text/Text";
import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import styles from "./SkillsRow.module.css";
import HeaderText from "../HeaderText/HeaderText";
import ServicesItem from "../ServicesItem";

const SkillsRow = () => {
  return (
    <Container
      theme="white"
      aos="fade-left"
      className={" border-gray-300 pb-8 sm:pb-24"}
    >
      <div className="flex flex-col justify-between">
        <div>
          <HeaderText l bold>
            My Services
          </HeaderText>
          <Spacer s />
          <Text m light grey>
            Leveraging several years of experience in the dynamic fields of web
            and mobile app development, I offer comprehensive services aimed at
            transforming your digital vision into reality.
          </Text>
        </div>
      </div>
      <Spacer xl />

      <div className={styles.skillsRow}>
        <ServicesItem
          service={{
            title: "Web Development",
            points: [
              "Strong knowledge of React.js and Next.js.",
              "Focus on creating user-centric, responsive, and efficient web platforms.",
              "Experience with multiple Content Management Systems (CMS) for smooth content updates and maintenance.",
              "Mid-level developer with 4 years of hands-on experience in building interactive websites and complex web applications.",
            ],
            pattern: {
              y: 16,
              squares: [
                [-2, 1],
                [1, 3],
              ],
            },
            icon: "web",
          }}
        />
        <ServicesItem
          service={{
            title: "App Development",
            points: [
              "Expertise in React Native.",
              "Proven experience in creating user-friendly apps for both iOS and Android platforms.",
              "Balancing quality, performance, and aesthetic appeal in every mobile solution.",
              "4 years of solid industry experience, ensuring robust and reliable app development.",
            ],
            pattern: {
              y: -6,
              squares: [
                [0, 2],
                [1, 1],
                [2, 2],
                [2, 4],
              ],
            },
            icon: "app",
          }}
        />
      </div>
      <Spacer xl />
    </Container>
  );
};

export default SkillsRow;
