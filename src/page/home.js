import "./style.css";
import React, { useState } from "react";
import Nav from "../compenent/Nav";
import About from "../compenent/About";
import Skill from "../compenent/Skill";
import Service from "../compenent/Service";
import Footerbar from "../compenent/Footerbar";
import about from "./img/about.jpeg";
import { FaLaptopCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Home() {
  let [skill, setSkill] = useState([
    { name: "HTML", per: 80 },
    { name: "CSS", per: 70 },
    { name: "SASS", per: 70 },
    { name: "JS", per: 60 },
    { name: "React", per: 60 },
  ]);
  let [service, setService] = useState([
    {
      service: "Web Design",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaLaptopCode/>,
    },
    {
      service: "UI Design",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaPalette/>,
    },
    {
      service: "UX Design",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaCode/>,
    },
    {
      service: "IT Support",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaCog/>,
    },
    {
      service: "Mobile App",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaMobileAlt/>,
    },
    {
      service: "React Task",
      title:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: <FaReact/>,
    },
  ]);
  return (
    <>
      <Nav />
      <div className="scroll-button">
        <a href="#home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>

      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Javid Suleymanov</div>
            <div className="text-three">Front-end Developer</div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <About
            photo={about}
            title="Javid Suleymanov"
            about="I am a passionate front-end developer with many ambitions.
            I have over two years of commercial experience in front-end
            development. With a strong technical skill-set and attention
            to detail, my aim is to always improve and make a positive
            change in my line of work."
          />
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>

              <div className="experience">
                <div className="num">2</div>
                <div className="exp">
                  Years Of <br /> Experience
                </div>
              </div>
            </div>
            <div className="boxes">
              {skill.map((value, index) => (
                <Skill
                  key={"skill" + index}
                  name={value.name}
                  per={value.per}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Services</span>
          </div>
          <div className="boxes">
           {
             service.map((value,index)=>(
               <Service
                key={"service" + index}
                title={value.title}
                service={value.service}
                icon={value.icon}
              />
             ))
           }
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">
            <span>Contact Me</span>
          </div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              neque ipsum corrupti dolores, facere numquam voluptate aspernatur
              sit perferendis qui nisi modi! Recusandae deserunt consequatur
              voluptatibus alias repellendus nobis eligendi.
            </p>
            <div className="button">
              <button>
                <a
                  className="letschat"
                  href="mailto:javid.suleyamnov@yahoo.com?subject='Hello Welcome my Email'"
                >
                  Let's Chat
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footerbar
        name="Javid Suleymanov"
        title="2021 All Rights
            Reserved"
      />
    </>
  );
}

export default Home;
