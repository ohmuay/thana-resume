import React from "react";
import styled from "styled-components";
import Avatar from "../src/statics/img/avatar.jpg";
import LineIcon from "../src/statics/img/LINE_APP.png";
import ExpressIcon from "../src/statics/img/express-js-icon-12.jpg";
import PythonIcon from "../src/statics/img/python-icon.png";
import TableauIcon from "../src/statics/img/tableau-icon.jpg";
import ExcelIcon from "../src/statics/img/excel-icon.jpg";
import JmpIcon from "../src/statics/img/jmp-icon.jpg";
import { udemyCertificates } from "./context";
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiJavascript,
  SiMongodb,
  SiMysql,
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
import reactDom from "react-dom";

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  /* --color-primary: #3269a8; */
  /* --color-left-panel: #fff8ec; */

  --color-primary: #333;
  --color-secondary: #333;
  --color-left-panel: #e9e9e9;
  --color-right-panel: #fff;

  /* --color-primary: #3269a8;
  --color-secondary: #333;
  --color-left-panel: #3269a8;
  --color-right-panel: #fff; */

  padding: 7rem 0;
  @media print {
    padding: 0;
  }
  
  @media screen and (max-width:1200px){
    background:var(--color-left-panel);
  }
  
`;

const Page = styled.div`
  display: flex;
  color: var(--color-secondary);
  margin: 0 auto;
  width: clamp(100px, 80vw, 972px);
  background: #fff;
  box-shadow: 0 4rem 10rem rgba(0, 0, 0, 0.4);
  /* font-size: 1.4rem; */
  font-size: clamp(1.4rem, 1vw, 2rem);
  animation: page 1s ease;

  @media print {
    width: 100vw;
    box-shadow: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  
  @media screen and (max-width: 1200px) {
    width: 100vw;
    box-shadow: none;
  }
`;

const LeftPanel = styled.div`
  background: var(--color-left-panel);
  display: flex;
  flex-direction: column;
  flex: 0 1 clamp(240px, 25%, 450px);
  > div,
  > header {
    /* flex: 1; */
    padding: 1rem;
  }
`;
const Panel = styled.div`
  flex: 1 1 auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background: var(--color-right-panel);
  padding: 1rem;
  > div {
    flex: 1;
  }
`;
const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Contact = styled.div``;

const Languages = styled.div`
  text-transform: capitalize;
`;

const Skills = styled.div`
  text-transform: capitalize;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const IconItem = styled.div`
  flex: 1;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: -1rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease;
  > svg {
    font-size: 3rem;
  }

  /* span = IconName styled component */
  @media only screen and (hover: hover) {
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

  @media only screen and (hover: hover) {
    display: block;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
`;
const Experiences = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  /* padding: 1rem; */
  /* background: yellow; */
  /* display: grid;
  place-items: center; */
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-primary);
  margin-bottom: 1rem;
  border-bottom: 2px solid currentColor;
`;
const Flex = styled.div`
  flex: 1 0 auto;
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  .full-grid {
    grid-column: 1/-1;
  }
`;
const ContactItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > svg {
    font-size: 3rem;
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
  font-size: 1.2rem;
`;

const Link = styled.a`
  flex: 1;
  text-decoration: none;
  color: var(--color-secondary);
  position: relative;
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: var(--color-primary);
    transform: scaleX(0);
    transition: all 0.3s cubic-bezier(1, 0, 0, 1);
    transform-origin: left;
  }
  :hover::after {
    transform: scaleX(1);
  }
`;

const P = styled.p`
  font-size: 1.5rem;
  color: var(--color-primary);
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  color: var(--color-primary);
`;
const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-primary);
  margin-bottom: 1rem;
  border-bottom: 2px solid currentColor;
`;
const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 2.25rem;
  font-weight: 300;
  color: var(--color-primary);
`;

const H4 = styled.h4`
  text-transform: capitalize;
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 300;
`;

const Certificates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
  }

  & ::marker {
    content: ">";
    color: var(--color-secondary);
  }
  ul {
    padding-left: 2rem;
  }
  li {
    line-height: 1.4;
    font-size: 1.5rem;
    padding: 0 1rem;
    color: var(--color-secondary);
  }
  a {
  }
`;

const Intro = styled.div``;
const ClipText = styled.h1`
  /* background: linear-gradient(to bottom, blue, lightblue); */
  background-image: url(https://img.freepik.com/free-vector/smooth-mesh-blurred-background-multi-color-gradient-pattern-smooth-modern-watercolor-style-backdrop_124894-147.jpg?size=626&ext=jpg);
  background-position: left;
  background-size:cover;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Badge = styled.span`
  color: #fff;
  background: var(--color-primary);
  border-radius: 9999rem;
  padding: 0.5rem;
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
             {/*<ClipText>Thana Wisutphusi</ClipText>*/}
            <H1>Thana Wisutphusi</H1>
            <H3>Software developer</H3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Badge>#selftaught</Badge>
              <Badge>#passionate</Badge>
              <Badge>#technology</Badge>
              <Badge>#fast-learner</Badge>
              <Badge>#detail-oriented</Badge>
            </div>
          </Header>
          <Contact>
            <H2>Contact</H2>
            <ContactGrid>
              <Link href="https://www.facebook.com/A.trbcp/" target="_blank">
                <ContactItem>
                  <SiFacebook style={{ color: "#4267B2" }} />
                  <p>/A.trbcp</p>
                </ContactItem>
              </Link>
              <Link href="https://www.linkedin.com/in/thana-w/" target="_blank">
                <ContactItem>
                  <SiLinkedin style={{ color: "#0e76a8" }} />
                  <p>/thana-w</p>
                </ContactItem>
              </Link>
              <Link href="https://www.github.com/ohmuay/" target="_blank">
                <ContactItem>
                  <SiGithub style={{ color: "#211f1f" }} />
                  <p>/ohmuay</p>
                </ContactItem>
              </Link>
              <Link href="https://line.me/ti/p/~ohmuay" target="_blank">
                <ContactItem>
                  <IconImg src={LineIcon} style={{ borderRadius: 0 }} />
                  <p>ohmuay</p>
                </ContactItem>
              </Link>
              <Link
                className="full-grid"
                href="mailto:thana.w@outlook.co.th"
                target="_blank"
              >
                <ContactItem>
                  <MdMail
                    style={{
                      color: "",
                    }}
                  />
                  <p>thana.w@outlook.co.th</p>
                </ContactItem>
              </Link>
              <ContactItem className="full-grid">
                <FaPhoneAlt style={{ color: "" }} />
                <p>+66 897989250</p>
              </ContactItem>
            </ContactGrid>
          </Contact>

          <Skills>
            <H2>Skills</H2>
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
                    border: "1px solid #999",
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
                <IconImg
                  src={TableauIcon}
                  style={{ border: "1px solid #999" }}
                />
                <IconName>Tableau</IconName>
              </IconItem>
              <IconItem>
                <IconImg src={JmpIcon} style={{ border: "1px solid #999" }} />
                <IconName>JMP</IconName>
              </IconItem>
              <IconItem>
                <IconImg src={ExcelIcon} style={{ border: "1px solid #999" }} />
                <IconName>Excel</IconName>
              </IconItem>
            </IconWrapper>
          </Skills>
          <Languages>
            <H2>Languages</H2>
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
                <p>Elementary</p>
              </LanguageItem>
              <LanguageItem>
                <Flag
                  code="JP"
                  role="flag"
                  style={{ border: "1px solid #999" }}
                />
                <p>Japanese</p>
                <p>Elementary</p>
              </LanguageItem>
            </Flex>
          </Languages>
        </LeftPanel>
        <Panel>
          <H2>Experiences</H2>
          <Experiences>
            <div className="experience">
              <H3>Developer Consultant</H3>
              <div className="experience__overview">
                <P className="experience__company">Thoughtworks</P>
                <p className="experience__period">Present</p>
              </div>
              <div className="responsibility">
                <H4>Methodology/Tools</H4>
                <ul>
                  <li>
                    Agile
                  </li>
                  <li>
                    Test Driven Development
                  </li>
                  <li>
                    Pair Programming
                  </li>
                </ul>
              </div>
              <div className="achievement">
                <H4>achievements</H4>
                <ul>
                  <li>
                    Graduated from Thoughtworks University Programme
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <H3>Software Developer</H3>
              <div className="experience__overview">
                <P className="experience__company">Haupcar Company</P>
                <p className="experience__period">2021</p>
              </div>
              <div className="responsibility">
                <H4>Responsibilities/Tasks</H4>
                <ul>
                  <li>
                    Creating websites/a website using standard HTML/CSS
                    practices
                  </li>
                  <li>
                    Working closely with web designers and product owner to
                    develop the website that meet customer requirements
                  </li>
                </ul>
              </div>
              <div className="achievement">
                <H4>achievements</H4>
                <ul>
                  <li>
                    Successfully add new feature to existing project in Python
                    Django Framework
                  </li>
                  <li>Develop an internal website using React.js</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <H3>Process Engineer</H3>
              <div className="experience__overview">
                <p className="experience__company">Seagate Technology</p>
                <p className="experience__period">2019 - 2021</p>
              </div>
              <div className="responsibility">
                <H4>Responsibilities/Tasks</H4>
                <ul>
                  <li>Manage production line to meet customer’s requirement</li>
                  <li>Evaluate process performance</li>
                  <li>Monitor product KPIs to prevent major defects</li>
                  <li>Take care of product inventory</li>
                  <li>
                    Get production data from database with SQL and analyze data
                    to find cause of defects
                  </li>
                  <li>Reporting production data to person involved</li>
                </ul>
              </div>
              <div className="achievement">
                <H4>achievements</H4>
                <ul>
                  <li>
                    Develop interactive real-time KPIs Monitoring Dashboard
                    using Tableau (Business Intelligence software)
                  </li>
                  <li>
                    Develop an automated-test program with Python Selenium to
                    eliminate the boring and repeattedly tasks
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <H3>Process Improvement Engineer</H3>
              <div className="experience__overview">
                <p className="experience__company">Nissan Motor Thailand</p>
                <p className="experience__period">2017 - 2018</p>
              </div>
              <div className="responsibility">
                <H4>Responsibilities/Tasks</H4>
                <ul>
                  <li>Design, run, test and upgrade systems and processes</li>
                  <li>
                    Develop best practices, routines and innovatives solutions
                    to improve production rates and quality of output
                  </li>
                  <li>
                    Provide process documentation and operating instructions
                  </li>
                  <li>
                    Audit actual operating process and operating instructions
                  </li>
                  <li>
                    Monitoring Process KPIs to prevent unexpected situations
                  </li>
                </ul>
              </div>
              <div className="achievement">
                <H4>achievements</H4>
                <ul>
                  <li>Successfully Manage project Double Door Installation</li>
                  <li>
                    Successfully test and adopt new material to mass production
                  </li>
                  <li>Project Kaizen to reuse leftover material</li>
                </ul>
              </div>
            </div>
          </Experiences>
          <H2>Education</H2>
          <Education>
            <H4>bachelor degree of mechatronics engineering</H4>
            <p>King Mongkut’s Institute of Technology Ladkrabang (2013-2017)</p>
          </Education>
          <H2>Certificates</H2>
          <Certificates>
            <div>
              <H4>Test of English for International Communication (TOEIC)</H4>
              <small>The Total Score ranges from 0 to 990</small>
              <ul>
                <li>735 points (2016)</li>
                <li>910 points (2019)</li>
              </ul>
            </div>
            <div>
              <H4>Udemy courses certificates</H4>
              <ul>
                {udemyCertificates.map((cert) => (
                  <li>
                    <Link href={cert.certificateURL} target="_blank">
                      {cert.courseName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Certificates>
        </Panel>
      </Page>
    </Background>
  );
}

export default App;
