import { motion } from 'framer-motion';
import VerticalTimelineElementCustom from '../timeline/VerticalTimelineElementCustom';
import { VerticalTimeline } from 'react-vertical-timeline-component';

const Publications = () => {
  return (
    <div 
      id='publications'
      className="flex flex-col items-center justify-center min-h-screen mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-secondary mb-3 text-center"
      >
        Scientific Research
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-primary mb-20 text-center"
      >
        Publications
      </motion.h1>
      <VerticalTimeline 
        layout='1-column-left'
        animate={true}
        lineColor="transparent"
        className="text-2xl"
      >
        <VerticalTimelineElementCustom
          date="June 2024"
          title="Efficient Static Vulnerability Analysis for JavaScript with Multiversion Dependency Graphs"
          subtitle="In Proceedings of PLDI'24 - Programming Language Design and Implementation 2024 (A*)"
          content={
            <span>
              While static analysis tools that rely on Code Property Graphs (CPGs) to detect security vulnerabilities have proven effective, deciding how much information to include in the graphs remains a challenge. Including less information can lead to a more scalable analysis but at the cost of reduced effectiveness in identifying vulnerability patterns, potentially resulting in classification errors. Conversely, more information in the graph allows for a more effective analysis but may affect scalability. For example, scalability issues have been recently highlighted in ODGen, the state-of-the-art CPG-based tool for detecting Node.js vulnerabilities.
              <p></p>
              This paper examines a new point in the design space of CPGs for JavaScript vulnerability detection. We introduce the Multiversion Dependency Graph (MDG), a novel graph-based data structure that captures the state evolution of objects and their properties during program execution. Compared to the graphs used by ODGen, MDGs are significantly simpler without losing key information needed for vulnerability detection. We implemented Graph.js, a new MDG-based static vulnerability scanner specialized in analyzing npm packages and detecting taint-style and prototype pollution vulnerabilities. Our evaluation shows that Graph.js outperforms ODGen by significantly reducing both the false negatives and the analysis time. Additionally, we have identified 49 previously undiscovered vulnerabilities in npm packages.
              <p></p>
              <b>Authors</b>: Mafalda Ferreira, Miguel Monteiro, Tiago Brito, Miguel Coimbra, Nuno Santos, Limin Jia, José Santos
            </span>
          }
          imageScale={0.5}
        />
        <VerticalTimelineElementCustom

          date="December 2023"
          title="Study of JavaScript Static Analysis Tools for Vulnerability Detection in Node.js Packages"
          subtitle="In IEEE Transactions on Reliability 2023"
          content={
            <span>
              With the emergence of the Node.js ecosystem, JavaScript has become a widely used programming language for implementing server-side web applications. In this article, we present the first empirical study of static code analysis tools for detecting vulnerabilities in Node.js code. To conduct a comprehensive tool evaluation, we created the largest known curated dataset of Node.js code vulnerabilities. We characterized and annotated a set of 957 vulnerabilities by analyzing information contained in npm advisory reports. We tested nine different tools and found that many important vulnerabilities appearing in the OWASP top-10 are not detected by any tool. The three best performing tools combined only detect up to 57.6% of all vulnerabilities in the dataset, but at a very low precision of 0.11%. Our curated dataset offers a new benchmark to help characterize existing Node.js code vulnerabilities and foster the development of better vulnerability detection tools for Node.js code.
              <p></p>
              <b>Authors</b>: Tiago Brito, Mafalda Ferreira, Miguel Monteiro, Pedro Lopes, Miguel Barros, José Santos, Nuno Santos
            </span>
          }
          imageScale={0.5}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Publications;
