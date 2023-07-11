import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
// import div from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </div>
          <div className="AboutBio">
            <div animateIn="fadeInLeft">
              Hello! My name is <strong>Anurag DOngre</strong>. I am a dedicated
              and passionate frontend developer, committed to creating engaging
              and user-friendly websites. I recently completed an extensive
              course in frontend development from ineuron.ai, gaining valuable
              skills and hands-on experience in the latest web technologies.
            </div>

            <br />
            <br />

            <div animateIn="fadeInLeft">
              Throughout my journey, I have developed a keen eye for aesthetics
              and a deep understanding of user experience principles. My goal is
              to craft visually appealing and intuitive interfaces that not only
              captivate users but also provide them with a seamless browsing
              experience. I believe in making the web more accessible and
              enjoyable for everyone
            </div>

            <br />
            <br />

            <div animateIn="fadeInLeft">
              I'm a frontend developer with a passion for fitness. I bring
              discipline and determination from the gym to my work, striving for
              excellence. I stay updated on frontend trends and love learning
              new concepts. Let's collaborate on impactful projects and create
              exceptional web experiences.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </div>

            <Technologies>
              {stackList.map((stack, index) => (
                <div animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </div>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
