import Image from "next/image";
import Container from "../Container/Container";
import HeaderText from "../HeaderText/HeaderText";
import Text from "../Text/Text";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container id="about" theme="white" className={"border-gray-300"}>
      <HeaderText l bold>
        About Me
      </HeaderText>

      <div>
        <div className={styles.aboutFlex}>
          <div className="w-full md:w-[80rem]">
            <Image
              src="/assets/about/rex_new.webp"
              alt=""
              className="w-full rounded-2xl bg-gray-50 object-cover md:h-[28rem]  2xl:object-top	"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Text l light className={"text-justify"}>
              Since developing my first mobile app, KSI Sounds, at 13, I&apos;ve
              cultivated a passion for app creation that has broadened to
              include web applications.
              <br />
              <br />
              After graduating with a first in Digital Media, where I honed my
              programming and user interface skills, I&apos;ve applied and
              developed those proficiencies. I&apos;ve built my own full-stack
              mobile and web applications and executed high-quality freelance
              front-end work.
              <br />
              <br />
              Alongside my development journey, I&apos;ve also founded and run
              tech businesses, including Tex Technologies. This experience has
              allowed me to blend my technical abilities with real-world
              business insights, further strengthening my approach to creating
              practical and efficient digital solutions.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
