import React from "react";
import styled from "styled-components";
import Avatar from "../src/statics/img/avatar.jpg";
import LineIcon from "../src/statics/img/LINE_APP.png";
import ExpressIcon from "../src/statics/img/express-js-icon-12.jpg";
import PythonIcon from "../src/statics/img/python-icon.png";
import TableauIcon from "../src/statics/img/tableau-icon.jpg";
import ExcelIcon from "../src/statics/img/excel-icon.webp";
import JmpIcon from "../src/statics/img/jmp-icon.jpg";
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPython,
} from "react-icons/si";
import {
  FaPhoneAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Flag from "react-world-flags";

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  --color-primary: #3269a8;
  --color-left-panel: #fff8ec;
  padding: 7rem 0;
`;

const Page = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, minmax(min-content, 1fr)); */
  display: flex;
  margin: 0 auto;
  width: clamp(400px, 80vw, 1366px);
  background: #fff;
  box-shadow: 0 4rem 10rem rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  padding: 2rem;
`;
const LeftPanel = styled.div`
  background: var(--color-left-panel);
  display: flex;
  flex-direction: column;
  flex: 0 0 clamp(200px, 25%, 450px);
  > div {
    flex: 1;
    padding: 1rem;
  }
`;
const Panel = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Bio = styled.div`
  background: green;
`;
const Contact = styled.div``;

const Languages = styled.div``;

const Skills = styled.div`
  text-transform: capitalize;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (hover: hover) {
    gap: 0.5rem;
  }
`;

const IconItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-bottom: -1rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease;
  > svg {
    font-size: 3rem;
  }

  /* span = IconName styled component */
  @media (hover: hover) {
    span {
      transition: inherit;
      opacity: 0;
    }
    :hover {
      transform: translateY(-0.5rem);
    }
    :hover span {
      opacity: 1;
    }
  }
`;

const SkillTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.3rem 0;
  display: none;

  @media (hover: hover) {
    display: block;
  }
`;

const Experiences = styled.div`
  background: yellow;
`;
const Education = styled.div`
  background: blue;
`;

const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-primary);
  border-bottom: 2px solid currentColor;
  /* padding-left: 1rem; */
  /* width: fit-content; */
  /* min-width: 70%; */
  /* text-align: right;
  border-bottom: 0.4rem solid blue; */
`;
const Flex = styled.div`
  flex: 1 0 auto;
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const FlexItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  > svg {
    font-size: 2rem;
  }
`;
const LanguageItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  > img[role="flag"] {
    width: 3.5rem;
  }
  p:first-of-type {
    margin-right: auto;
  }
`;
const IconImg = styled.img`
  height: 3rem;
  border-radius: 50%;
`;

const IconName = styled.span`
  font-size: 1rem;
`;

function App() {
  return (
    <Background>
      <Page>
        <LeftPanel>
          <Header>
            <div className="profile">
              <img src={Avatar} alt="avatar" />
            </div>
            <h1>Thana Wisutphusi</h1>
            <h2>Software developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              ad necessitatibus assumenda provident, minima et.
            </p>
          </Header>
          <Contact>
            <SectionTitle>Contact</SectionTitle>
            <Flex>
              <FlexItem>
                <SiFacebook style={{ color: "#4267B2" }} />
                <p>/A.trbcp</p>
              </FlexItem>
              <FlexItem>
                <SiLinkedin style={{ color: "#0e76a8" }} />
                <p>/thana-w</p>
              </FlexItem>
              <FlexItem>
                <SiGithub style={{ color: "#211f1f" }} />
                <p>/ohmuay</p>
              </FlexItem>
              <FlexItem>
                <img src={LineIcon} height="30" />
                <p>ohmuay</p>
              </FlexItem>
              <FlexItem>
                <FaPhoneAlt style={{ color: "" }} />
                <p>+66 897989250</p>
              </FlexItem>
              <FlexItem>
                <MdMail
                  style={{
                    color: "",
                  }}
                />
                <p>thana.w@outlook.co.th</p>
              </FlexItem>
            </Flex>
          </Contact>
          <Languages>
            <SectionTitle>Languages</SectionTitle>
            <Flex>
              <LanguageItem>
                <Flag code="TH" role="flag" />
                <p>Thai</p>
                <p>Native</p>
              </LanguageItem>
              <LanguageItem>
                <Flag code="GB" role="flag" />
                <p>English</p>
                <p>Intermediate</p>
              </LanguageItem>
              <LanguageItem>
                <Flag code="CN" role="flag" />
                <p>Mandarin</p>
                <p>Beginner</p>
              </LanguageItem>
              <LanguageItem>
                <Flag code="JP" role="flag" />
                <p>Japanese</p>
                <p>Beginner</p>
              </LanguageItem>
            </Flex>
          </Languages>
          <Skills>
            <SectionTitle>Skills</SectionTitle>
            <SkillTitle>Frontend Web development</SkillTitle>
            <IconWrapper>
              <IconItem>
                <FaHtml5 style={{ color: "#e34c26" }} />
                <IconName>HTML5</IconName>
              </IconItem>
              <IconItem>
                <FaCss3Alt style={{ color: "#264de4" }} />
                <IconName>CSS3</IconName>
              </IconItem>
              <IconItem>
                <SiJavascript
                  style={{ color: "#f0db4f", backgroundColor: "#000" }}
                />
                <IconName>Javascript</IconName>
              </IconItem>
              <IconItem>
                <FaReact
                  className="rounded-icon"
                  style={{
                    color: "#61dbfb",
                    backgroundColor: "black",
                  }}
                />
                <IconName>React.js</IconName>
              </IconItem>
            </IconWrapper>
            <SkillTitle>Backend development</SkillTitle>
            <IconWrapper>
              <IconItem>
                <IconImg src={ExpressIcon} />
                <IconName>Express.js</IconName>
              </IconItem>
              <IconItem>
                <FaNodeJs style={{ color: "#3C873A" }} />
                <IconName>Node.js</IconName>
              </IconItem>
              <IconItem>
                <SiMongodb
                  className="rounded-icon"
                  style={{
                    color: "#4DB33D",
                    backgroundColor: "#3F3E42",
                  }}
                />
                <IconName>MongoDB</IconName>
              </IconItem>
              <IconItem>
                <SiMysql
                  className="rounded-icon"
                  style={{
                    color: "#00758F",
                    backgroundColor: "#eee",
                  }}
                />
                <IconName>MySQL</IconName>
              </IconItem>
            </IconWrapper>
            <SkillTitle>Data Analytics</SkillTitle>
            <IconWrapper>
              <IconItem>
                <IconImg src={PythonIcon} />
                <IconName>Python</IconName>
              </IconItem>
              <IconItem>
                <IconImg src={TableauIcon} />
                <IconName>Tableau</IconName>
              </IconItem>
              <IconItem>
                <IconImg src={JmpIcon} />
                <IconName>JMP</IconName>
              </IconItem>
              <IconItem>
                <IconImg src={ExcelIcon} />
                <IconName>Excel</IconName>
              </IconItem>
            </IconWrapper>
          </Skills>
        </LeftPanel>
        <Panel>
          <Experiences>Experiences</Experiences>
          <Education>Education</Education>
        </Panel>
      </Page>
    </Background>
  );
}

export default App;
