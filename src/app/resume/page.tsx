import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
	title: 'Ashley Towner\'s Resume'
}

function Experience(props: {
  company: string;
  position: string;
  duration: string;
  children: ReactNode;
}) {
  const { company, position, duration, children } = props;
  return (
    <div className="card md:grid grid-cols-2 gap-4 m-2">
      <div className="md:border-r-2 border-material-300 dark:border-material-600">
        <span className="eyebrow">{company}</span>
        <h3>{position}</h3>
        <span className="italic font-bold">{duration}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <h1>Ashley Towner</h1>
      <p>
        I work as a Software Engineer at Aligent Consulting, having earned a
        Bachelor&apos;s degree in Computer Science from Adelaide University. My
        main focus revolves around various technologies, including Typescript,
        Node.js, React, serverless architecture, and SQL.
      </p>
      <div className="flex justify-around w-full">
        <Link href="https://github.com/ashleytowner" target="_blank">
          <button className="btn flex gap-2">
            <Github /> GitHub
          </button>
        </Link>
        <Link href="https://www.linkedin.com/in/ashley-towner/" target="_blank">
          <button className="btn flex gap-2">
            <Linkedin /> Linkedin
          </button>
        </Link>
      </div>
      <h2>Work Experience</h2>
      <Experience
        position="Software Engineer"
        company="Aligent Consulting"
        duration="Apr 2021 - Present"
      >
        <p className="font-bold">Key Activities:</p>
        <ul className="pl-5 list-disc">
          <li>
            Develop modern PWAs for e-commerce using React with TypeScript
          </li>
          <li>
            Integrate TypeScript throughout a JavaScript/React PWA project
          </li>
          <li>
            Construct several microservices using AWS Lambda and Step Functions
            to integrate several content management systems
          </li>
          <li>Mentor entry-level engineers</li>
          <li>Lead front-end and microservice projects</li>
          <li>
            Give both internal and external presentations on areas of expertise
          </li>
          <li>
            Assist junior and intermediate level engineers on client projects
          </li>
          <li>Provide estimations for tasks, and projects</li>
        </ul>
      </Experience>
      <Experience
        position="Full-Stack Engineer"
        company="Cortex Interactive"
        duration="Nov 2019 - Apr 2021"
      >
        <p className="font-bold">Key Activities:</p>
        <ul className="pl-5 list-disc">
          <li>
            Develop cross-platform web applications using Angular and Ionic
          </li>
          <li>Utilise AWS Serverless and SQL to implement RESTful APIs</li>
          <li>Deploy applications using Azure DevOps</li>
          <li>Manage infrastructure as code using Terraform</li>
          <li>Resolve bugs and improve application efficiency</li>
          <li>Design and implement a SAAS solution</li>
        </ul>
      </Experience>
      <Experience
        position="Intern"
        company="Cortex Interactive"
        duration="Aug 2019 - Nov 2019"
      >
        <p>Particiapted in the Adelaide University ECMS internship program</p>
      </Experience>
      <Experience
        position="Full-Stack Developer"
        company="Pitter-Pattr"
        duration="Jul 2019 - Nov 2019"
      >
        <p className="font-bold">Key Activities:</p>
        <ul className="pl-5 list-disc">
          <li>
            Develop and test Android applications using Java and Android Studio
          </li>
          <li>Develop and test web applications using Vue</li>
          <li>Manage project development with Agile methodologies</li>
          <li>Design application UIs across multiple platforms</li>
          <li>Manage internationalisation into several languages</li>
          <li>
            Design, develop and test a RESTful API using Node & Firebase
            Firestore
          </li>
        </ul>
      </Experience>
      <Experience
        position="Software Developer"
        company="Future Identity"
        duration="Feb 2019 - Apr 2019"
      >
        <p className="font-bold">Key Activities</p>
        <ul className="pl-5 list-disc">
          <li>Develop an application for Android, iOS, and web using React</li>
          <li>
            Manage authentication for web applications with single sign on
          </li>
          <li>Manage project development with Jira</li>
          <li>Test, maintain and recommend software implementations</li>
        </ul>
      </Experience>
      <h2>Skills</h2>
      <div className="card m-2">
        {[
          'TypeScript',
          'React',
          'AWS',
          'Jira',
          'Azure',
          'Angular',
          'Terraform',
          'CloudFormation',
          'Vue',
          'SQL',
          'Bash & ZSH',
          'Git',
          'GraphQL',
        ].map((skill) => {
          return (
            <span className="badge shadow bg-material-100 dark:bg-material-800" key={skill}>
              {skill}
            </span>
          );
        })}
      </div>
      <h2>Education</h2>
      <Experience
        company="Adelaide University"
        position="Bachelor of Science in Computer Science"
        duration="2022"
      >
        <p className="font-bold">Key Activities:</p>
        <ul className="pl-5 list-disc">
          <li>
            Worked both independently and within teams to strict deadlines
          </li>
        </ul>
      </Experience>
      <h2>Extra-Curriculars</h2>
      <Experience
        company="Things to do at Adelaide U"
        position="Volunteer"
        duration="2021 - 2022"
      >
        <p className="font-bold">Description:</p>
        <p className="ml-3">
          Things to do at Adelaide U is a student-run organisation who helps
          students connect with the multitude of clubs at Adelaide University.
          My role at Things to Do involved automating various processes
          including event posting and calendar management, as well as
          data-entry.
        </p>
      </Experience>
      <Experience
        company="Ampowered"
        position="Mentoring Program"
        duration="2019"
      >
        <p className="font-bold">Description:</p>
        <p className="ml-3">
          Highly adept mentoring program which provides graduate pathways
          through assessing student skills, capabilities and interests and
          determining suitable team and project fits within the industry.
        </p>
      </Experience>
      <Experience company="ACMI" position="Competitor" duration="2017">
        <p className="font-bold">Description:</p>
        <p className="ml-3">
          Placed as a finalist with my video game &quot;Murder at the Dinner
          Table&quot; in the national school-aged game developer, film maker,
          and animator competition &quot;Screen It&quot;, organised by the
          Australian Centre for the Moving Image
        </p>
      </Experience>
    </>
  );
}
