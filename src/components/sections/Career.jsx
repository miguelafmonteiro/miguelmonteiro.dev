import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import humanLogo from '../../assets/img/human_logo_hand.png';
import inescLogo from '../../assets/img/inesc_id_logo.png';
import VerticalTimelineElementCustom from '../timeline/VerticalTimelineElementCustom';
import Icon from '../common/Icon';

const Career = () => {
  return (
    <div
      id='career'
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-secondary mb-3 text-center"
      >
        What I've done so far
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-primary mb-20 text-center"
      >
        Career
      </motion.h1>
      <div className="container">
        <VerticalTimeline
          layout='2-columns'
          animate={true}
          lineColor="transparent"
          className="text-2xl max-w-full"
        >
          <VerticalTimelineElementCustom
            date="Feb 2024 - Present"
            icon={humanLogo}
            title="Software Engineer @ Human Ready"
            subtitle="Lisbon, Portugal"
            content={<span>Developing <b>Advisor</b>: a web-based business intelligence platform that provides real-time analytics, narrative insights, forecasting tools, and actionable recommendations.</span>}
            icons={
              <>
                <Icon icon="devicon-python-plain" className="text-2xl" tooltip="Python" />
                <Icon icon="devicon-react-plain " className="text-2xl" tooltip="React" />
                <Icon icon="devicon-javascript-plain" className="text-2xl" tooltip="JavaScript" />
                <Icon icon="devicon-postgresql-plain" className="text-2xl" tooltip="PostgreSQL" />
                <Icon icon="devicon-cypressio-plain" className="text-2xl" tooltip="Cypress" />
                <Icon icon="devicon-docker-plain" className="text-2xl" tooltip="Docker" />
                <Icon icon="devicon-elasticsearch-plain" className="text-2xl" tooltip="Elasticsearch" />
              </>
            }
            imageScale={0.7}
            url="https://humanready.io"
          />
          <VerticalTimelineElementCustom
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
                <Icon icon="devicon-nodejs-plain " className="text-2xl" tooltip="Node.js" />
                <Icon icon="devicon-javascript-plain" className="text-2xl" tooltip="JavaScript" />
                <Icon icon="devicon-python-plain" className="text-2xl" tooltip="Python" />
                <Icon icon="devicon-neo4j-plain" className="text-4xl" tooltip="Neo4j" />
                <Icon icon="devicon-typescript-plain" className="text-2xl" tooltip="TypeScript" />
              </>
            }
            imageScale={0.65}
            url="https://www.inesc-id.pt/"
          />
          <VerticalTimelineElementCustom
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
                <Icon icon="devicon-nodejs-plain " className="text-2xl" tooltip="Node.js" />
                <Icon icon="devicon-javascript-plain" className="text-2xl" tooltip="JavaScript" />
                <Icon icon="devicon-python-plain" className="text-2xl" tooltip="Python" />
              </>
            }
            imageScale={0.65}
            url="https://www.inesc-id.pt/"
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Career;
