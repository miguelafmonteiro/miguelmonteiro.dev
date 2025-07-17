import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import istLogo from '../../assets/img/ist_logo.png';
import VerticalTimelineElementCustom from '../timeline/VerticalTimelineElementCustom';

const Education = () => {
  return (
    <div 
      id='education'
      className="flex flex-col items-center justify-center min-h-screen mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-secondary mb-3 text-center"
      >
        Academic background, Honors & Awards
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-primary mb-20 text-center"
      >
        Education 
      </motion.h1>
      <div className="flex flex-col lg:flex-row w-full container gap-0">
        <div className="lg:w-2/3">
          <VerticalTimeline
            layout='1-column-left'
            animate={true}
            lineColor="transparent"
            className="text-2xl"
          >
            <VerticalTimelineElementCustom
              date="Sep 2021 - Dec 2023"
              icon={istLogo}
              title="Master's in Computer Science and Engineering @ "
              titleUrl="IST"
              subtitle="Lisbon, Portugal"
              content={
                <span>
                  Specialization in Cyber Security and Distributed Systems.
                  <p></p>
                  <b>Thesis</b>: ExplodeQ.js - A Library of Queries to Detect Injection Vulnerabilities in Node.js Applications. Grade: 20/20.
                  <p></p>
                  <b>Relevant Courses</b>: Software Security, Network and Computer Security, Highly Dependable Systems, Design and Implementation of Distributed Applications, Forensics Cyber Security.
                  <p></p>
                  <b>Grade</b>: 18/20.
                </span>
              }
              imageScale={0.5}
              url="https://tecnico.ulisboa.pt"
              logoColor={"var(--ist)"}
            />
            <VerticalTimelineElementCustom
              date="Sep 2018 - Jul 2021"
              icon={istLogo}
              title="Bachelors's in Computer Science and Engineering @ "
              titleUrl="IST"
              subtitle="Lisbon, Portugal"
              content={
                <span>
                  <b>Relevant Courses</b>: Software Engineering, Analysis and Synthesis of Algorithms, Computer Networks, Distributed Systems, Operating Systems.
                  <p></p>
                  <b>Grade</b>: 15/20.
                </span>
              }
              imageScale={0.5}
              url="https://tecnico.ulisboa.pt"
              logoColor={"var(--ist)"}
            />
          </VerticalTimeline>
        </div>
        <div className="lg:w-1/3">
          <VerticalTimeline
            layout='1-column-left'
            animate={true}
            lineColor="transparent"
            className="text-2xl lg:w-full"
          >
            <VerticalTimelineElementCustom
              title="Awards"
              content={
                <>
                <span>
                  <a
                    href="https://tecnico.ulisboa.pt/pt/noticias/campus-e-comunidade/premio-de-merito-jeronimo-martins-atribuido-a-estudantes-do-tecnico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative cursor-pointer underline-animate"
                  >
                    <b>Jerónimo Martins Best Master's Thesis Award</b>
                  </a>
                  <p></p>
                    My Master's thesis, <b><i>ExplodeQ.js: A Library of Queries to Detect Injection Vulnerabilities in Node.js Applications</i></b>, was honored with the Jerónimo Martins Best Master's Thesis Awards in Computer Science and Engineering. This recognition included an 1800€ prize for my work.
                </span>
                <p></p>
                <span>
                  <a
                    href="https://tecnico.ulisboa.pt/pt/noticias/campus-e-comunidade/premio-de-merito-jeronimo-martins-atribuido-a-estudantes-do-tecnico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative cursor-pointer underline-animate"
                  >
                    <b>Naoris Protocol Best Master's Thesis Award</b>
                  </a>
                  <p></p>
                  My Master's thesis, <b><i>ExplodeQ.js: A Library of Queries to Detect Injection Vulnerabilities in Node.js Applications</i></b>, was honored with the Naoris Protocol Award for Best Master's Thesis with a Cybersecurity Theme. This recognition included an 1800€ prize for my work.
                </span>
                </>
              }
              imageScale={1}
            />
            <VerticalTimelineElementCustom
              title="Honors"
              subtitle=""
              content={
                <span>
                  <b>Academic Merit Diploma</b> - 2019/2020
                  <p></p>
                  <b>Academic Merit Diploma</b> - 2021/2022 
                </span>
              }
              imageScale={1}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
