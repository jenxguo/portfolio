import React, { useState } from 'react'

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ResumeBlock from '../components/resumeBlock';
import utilStyles from '../styles/utils.module.css';

import TypeIt from "typeit-react";

const experience = [
  {
    companyName: 'Microsoft',
    link: 'http://code.visualstudio.com/',
    role: 'Technical Product Management Intern',
    team: 'VS Code Python AI',
    dates: 'Jun 2023 - Sep 2023',
    description: 'Led user discovery and incorporated LLM-powered data science tooling into new VS Code Jupyter Notebook Extension features.',
    tags: ['Product Management', 'Developer Tools', 'LLMs'],
  },
  {
    companyName: 'Microsoft',
    link: 'http://www.microsoft.com/en-us/microsoft-365',
    role: 'Program Management Intern',
    team: 'M365 SMB Growth',
    dates: 'May 2022 - Aug 2022',
    description: 'Wrote white paper detailing vision and strategy for an account management tool for the M365 SMB and Partner space. Managed launch and UAT of version II of tool.',
    tags: ['Product Management', 'Consumer Workspace', 'Growth + Strategy'],
  },
  {
    companyName: 'Google',
    link: 'http://workspace.google.com/',
    role: 'STEP Intern',
    team: 'Google Workspace Security',
    dates: 'Jun 2021 - Sep 2022',
    description: 'Created a scalable and robust SQL pipeline that runs daily to turn over 100 GB of Google Workspace Product Usage data into an adoption event history table.',
    tags: ['Software Engineering', 'Consumer Workspace', 'SQL'],
  },
  {
    companyName: 'Hallo',
    link: 'http://hallo.ai',
    role: 'Software Engineering Intern',
    dates: 'Mar 2021 - May 2021',
    description: 'Launched recommender algorithms to help over 1m users find peers and teachers to follow on both iOS and Android, increasing retention by 5%. Architected backend and database structure for new revenue streams, built group lesson video calls with Agora RTC for Flutter, ran A/B tests, advised on UI/UX design choices, and improved existing codebase.',
    tags: ['Software Engineering', 'Mobile', 'Flutter', 'Web', 'React'],
  },
  {
    companyName: 'The Clinton Foundation',
    link: 'https://www.clintonfoundation.org/',
    role: 'UX Design Lead',
    dates: 'Feb 2021 - May 2021',
    description: 'Conducted user interviews with farmers in rural Africa to understand need and improve user experience. Collaborated with engineers and product managers to turn a design vision into a tangible product.',
    tags: ['UX Design', 'Figma', 'Web'],
  },
  {
    companyName: 'HackHarvard x IvyHacks',
    link: 'https://ivyhacks.devpost.com/',
    role: 'Director',
    dates: 'Sep 2019 - Jan 2022',
    description: ' Spearheaded IvyHacks, the first-ever joint virtual hackathon with 1000+ participants hosted by 6 out of 8 Ivy League schools and over $5000 worth of prizes. Partnered with high-tier keynote speakers including CEOs of Duolingo, Y Combinator, Razer, Neo, and Wikihow.',
    tags: ['Event Management', 'Hacker Experience'],
  }
]

export default function Home() {
  const [currBlockIdx, setCurrBlockIdx] = useState(0)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>the present</h1>
        <div className={utilStyles.content}>
          <TypeIt options={{speed: 5, waitUntilVisible: true}}>Hi, I'm Jenn. 
          <br/>
          As of spring 2024, I am embarking on semester 8 out of 8 [the final boss]
          <br/>
          of my <a target="_blank" href="https://seas.harvard.edu/computer-science">Computer Science</a> + <a target="_blank" href="https://mbb.harvard.edu/"> Mind Brain Behavior </a> degree at Harvard.
          <br/>
          You might catch me doing student-things around my beloved <a target="_blank" href="https://www.forbes.com/sites/carltonreid/2023/04/17/walkable-neighborhoods-are-happy-neighborhoods-finds-study/?sh=39b8bdd73f3a">walkable community</a> of Cambridge.
          <br/>
          If so, don't be afraid to say hi. I probably won't run away.</TypeIt>
        </div>
      </section>

      <section className={utilStyles.headingMd}>
        <h1>the past</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>People love to talk about the past. Especially the things they've done. It shows credibility and stuff.</TypeIt>
        </div>

        <div className={utilStyles.resume}>
          <div class={utilStyles.sideBar}>
            <ul class="nav flex-column nav-underline">
            {experience.map((exp, i) => (
              <li key={i} class="nav-item">
                <a className={i == currBlockIdx ? `nav-link active ${utilStyles.noUnderline}` : `nav-link ${utilStyles.noUnderline}`} aria-current="page" onClick={() => setCurrBlockIdx(i)}>{exp.dates}</a>
              </li>
            ))}
            </ul>
          </div>


        <ResumeBlock content={experience[currBlockIdx]}/>
        </div>

      </section>
      <section className={utilStyles.headingMd}>
        <h1>the future</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>Normally, thinking about the future hurts my brain. But we're on the cusp of a <a target="_blank" href="https://zaidkdahhaj.medium.com/why-understanding-the-seasons-of-life-will-ease-your-suffering-32ad7381c634">changing of the seasons</a>, so I have a plan.
        <br/>
        Upon graduating college in May 2024, I will travel westward to a magical storybook alpine land: <b><em>Seattle</em></b>.
        <br/>
        There, I will begin the next season of life as a Software Engineer at <a target="_blank" href="http://stripe.com">Stripe</a>.</TypeIt>
        </div>
      </section>

      <section id="works" className={utilStyles.headingMd}>
        <h1>works</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>Here's some stuff I'm proud of.</TypeIt>
        </div>

        <div className={utilStyles.row}>
          <div>
            <h4>Action</h4>
            <ul>
              <li><a href="/posts/first-post">project 1</a></li>
            </ul>
          </div>
          <div>
            <h4>Thought</h4>
            <ul>
            <li><a href="/posts/first-post">journal entry 1</a></li>
            </ul>
          </div>
        </div>

      </section>
      
    </Layout>
  );
}