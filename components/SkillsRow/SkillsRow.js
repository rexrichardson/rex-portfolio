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
            Drawing on years of experience in web and mobile app development, I
            combine my strong development skills with a keen eye for design to
            create digital solutions that align with your vision.
          </Text>
        </div>
      </div>
      <Spacer xl />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ServicesItem
          service={{
            title: "Web Development",
            points: [
              "Strong knowledge of React.js and Next.js.",
              "Focus on building fast, user-centric, and SEO-optimized web apps.",
              "Experience with various CMS platforms for efficient content management.",
              "Mid-level developer with 2 years of hands-on experience building web applications.",
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
              "Skilled in using React Native for cross-platform app development.",
              "Create engaging iOS and Android apps with a user-first approach.",
              "Experience using Firebase for app authentication and backend operations.",
              "Solely built three complex apps from scratch, handling UI, front-end, and backend tasks.",
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
        <ServicesItem
          service={{
            title: "UI Design",
            points: [
              "Proficiency in Sketch and Figma for intuitive UI creation.",
              "Adept at transforming user needs into responsive designs.",
              "Strong design aesthetics for a superior user experience.",
              "Commitment to iterative design for constant refinement.",
            ],
            pattern: {
              y: 16,
              squares: [
                [3, 5],
                [-3, 0],
                [0, 3],
              ],
            },
            icon: "ui",
          }}
        />
      </div>
      <Spacer xl />
    </Container>
  );
};

export default SkillsRow;
