import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import humanLogo from '../../assets/img/human_logo_hand.png';
import inescLogo from '../../assets/img/inesc_id_logo.png';
import VerticalTimelineElementCustom from '../timeline/VerticalTimelineElementCustom';
import { colors } from '../../assets/colors';
import Section from './Section';
import Tooltip from '@mui/material/Tooltip';

const Experience = () => {
  return (
    <Section
      nameStyle="gradient-text-frappe-lbt"
      matrixFontColor={colors.catppuccin.frappe.blue.hex}
    >
      <div 
        id='experience'
        className="flex flex-col items-center justify-center w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-smooch font-bold gradient-text-frappe-lbt mb-20"
        >
          Experience
        </motion.h1>
        <VerticalTimeline
          layout='2-columns'
          animate={true}
          lineColor="transparent"
          className="font-smooch text-2xl"
        >
          <VerticalTimelineElementCustom
            background='linear-gradient(45deg, var(--frappe-lavender), var(--frappe-blue), var(--frappe-teal)'
            textColor='var(--frappe-base)'
            arrowColor='var(--frappe-teal)'
            date="Feb 2024 - Present"
            icon={humanLogo}
            title="Fullstack Software Engineer @ Human Ready"
            subtitle="Lisbon, Portugal"
            content={<span>Developing <b>Advisor</b>: a web-based business intelligence platform that provides real-time analytics, narrative insights, forecasting tools, and actionable recommendations.</span>}
            icons={
              <>
                {/* <Tooltip title="Python" placement='bottom'> */}
                <motion.i className="devicon-python-plain text-2xl"></motion.i>
                {/* </Tooltip> */}
                <motion.i className="devicon-react-plain text-2xl"></motion.i>
                <motion.i className="devicon-javascript-plain text-2xl"></motion.i>
                <motion.i className="devicon-cypressio-plain text-2xl"></motion.i>
                <motion.i className="devicon-docker-plain text-2xl"></motion.i>
                <motion.i className="devicon-elasticsearch-plain text-2xl"></motion.i>
              </>
            } 
            imageScale={0.7}
          />
          <VerticalTimelineElementCustom
            background='linear-gradient(45deg, var(--frappe-lavender), var(--frappe-blue), var(--frappe-teal)'
            textColor='var(--frappe-base)'
            arrowColor='var(--frappe-lavender)'
            date="Aug 2022 - Jan 2024"
            icon={inescLogo}
            title="Research Assitant @ INESC-ID"
            subtitle="Lisbon, Portugal"
            content={
                <span>
                  Developed <b>Graph.js</b>: a static analysis tool for JavaScript that detects taint-style and prototype pollution vulnerabilities. The tool detected <b>98 zero day vulnerabilities</b>, with <b>3 CVE </b>identifiers assigned.
                  <p></p>
                  Developed <b>Explode.js</b>: the first tool to combine static analysis and symbolic execution to automatically identify injection vulnerabilities in Node.js applications and confirm them by generating exploits.
                </span>
            }
            icons={
              <>
                <motion.i className="devicon-nodejs-plain text-2xl"></motion.i>
                <motion.i className="devicon-javascript-plain text-2xl"></motion.i>
                <motion.i className="devicon-python-plain text-2xl"></motion.i>
                <motion.i className="devicon-neo4j-plain text-4xl -mb-2"></motion.i>
                <motion.i className="devicon-typescript-plain text-2xl"></motion.i>
              </>
            } 
            imageScale={0.65}
          />
          <VerticalTimelineElementCustom
            background='linear-gradient(45deg, var(--frappe-lavender), var(--frappe-blue), var(--frappe-teal)'
            textColor='var(--frappe-base)'
            arrowColor='var(--frappe-teal)'
            date="Nov 2021 - Jul 2022"
            icon={inescLogo}
            title="Research Intern @ INESC-ID"
            subtitle="Lisbon, Portugal"
            content={
                <span>
                  Created the <b>VulcaN</b> dataset: the largest known curated dataset of Node.js packages with well-characterized security vulnerabilities.
                  <p></p>
                  Created the first empirical study of JavaScript static analysis tools for vulnerability detection in Node.js packages, using the VulcaN dataset.
                </span>
            }
            icons={
              <>
                <motion.i className="devicon-nodejs-plain text-2xl"></motion.i>
                <motion.i className="devicon-javascript-plain text-2xl"></motion.i>
                <motion.i className="devicon-python-plain text-2xl"></motion.i>
                <motion.i className="devicon-neo4j-plain text-4xl -mb-2"></motion.i>
                <motion.i className="devicon-typescript-plain text-2xl"></motion.i>
              </>
            } 
            imageScale={0.65}
          />
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
