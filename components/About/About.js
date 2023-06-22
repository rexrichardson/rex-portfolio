import Container from "../Container/Container";
import HeaderText from "../HeaderText/HeaderText";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container id="about" theme="white" className={"border-gray-300"}>
      <HeaderText l bold>
        About Me
      </HeaderText>
      <Spacer l />
      <div>
        <div className={styles.aboutFlex}>
          <div className="w-full md:w-[80rem]">
            <img
              src="/assets/about/rex_new.webp"
              alt=""
              className="w-full rounded-2xl bg-gray-50 object-cover lg:h-[29.5rem]"
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
            <Spacer xxl />
            {/*  <Text m grey>
              Experience
            </Text>
            <Spacer m />
            <ul className={styles.list}>
              <li>
                <Text l light>
                  4 years running a tech company, Tex Technologies, part time.
                </Text>
                <Text l light>
                  1 year at Discovery as a digital designer and front end web
                  developer. Contributed to development of the design system for
                  Dplay (now Discovery+).
                </Text>
              </li>{" "}
              <Spacer xs />
              <li>
                <Text l light>
                  2 years experience running Tex Technologies LTD where I am
                  responsible for front end web development.
                </Text>
              </li>
              <Spacer xs />
              <li>
                <Text l light>
                  Several work experience jobs in the digital industry.
                </Text>
              </li>
              <Spacer m />
            </ul>
            <Text l>
              View in full on my{" "}
              <a href="https://www.linkedin.com/in/rex-richardson/?originalSubdomain=uk">
                LinkedIn
              </a>
              .{" "}
            </Text> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
