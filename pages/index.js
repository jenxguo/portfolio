import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ResumeBlock from '../components/resumeBlock';
import utilStyles from '../styles/utils.module.css';
import { experience } from '../data/experience';
import TypeIt from "typeit-react";
import { gsap } from "gsap";

export default function Home() {
  const [currBlockIdx, setCurrBlockIdx] = useState(0)
  let featuredExperience = useRef()

  const toggleFeaturedExperience = (idx) => {
    setCurrBlockIdx(idx)
    gsap.from(featuredExperience.current, {
      x: 100,
      // opacity: 0,
      ease: 'elastic',
      duration: 2
    })
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.thin}`}>
        <h1>the present <span>🎁</span></h1>
        <div className={utilStyles.content}>
          <TypeIt options={{speed: 5, waitUntilVisible: true}}>Hi, I'm Jenn. 
          <br/>
          As of spring 2024, I am embarking on semester 8 out of 8 of my <a target="_blank" href="https://seas.harvard.edu/computer-science">Computer Science</a> + <a target="_blank" href="https://mbb.harvard.edu/"> Mind Brain Behavior </a> degree at Harvard.
          <br/>
          You can find me savoring my last semester in my beloved <a target="_blank" href="https://www.forbes.com/sites/carltonreid/2023/04/17/walkable-neighborhoods-are-happy-neighborhoods-finds-study/?sh=39b8bdd73f3a">walkable community</a> of Cambridge with frequent sunset strolls down to the Charles or trips to local bouldering areas.
          <br/>
          If so, don't be afraid to say hi.</TypeIt>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.medThin}`}>
        <h1>the past</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>Here are some teams I've worked on to show my credibility and stuff.</TypeIt>
        </div>

        <div className={utilStyles.resume}>
          <div className={utilStyles.sideBar}>
            <ul className="nav flex-column nav-underline">
            {experience.map((exp, i) => (
              <li key={i} className="nav-item">
                <a className={i == currBlockIdx ? `nav-link active ${utilStyles.noUnderline}` : `nav-link ${utilStyles.noUnderline}`} aria-current="page" onClick={() => toggleFeaturedExperience(i)}>{exp.dates}</a>
              </li>
            ))}
            </ul>
          </div>

          <div className={utilStyles.experienceDisplay} ref={featuredExperience}>
            <ResumeBlock id='featuredExperience' content={experience[currBlockIdx]}/>
          </div>
        </div>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.thin}`}>
        <h1>the future</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>Normally, thinking about the future hurts my brain.
        <br/>
        But we're on the cusp of a <a target="_blank" href="https://zaidkdahhaj.medium.com/why-understanding-the-seasons-of-life-will-ease-your-suffering-32ad7381c634">changing of the seasons</a>, so I have a plan.
        <br/>
        Upon graduating college in May 2024, I will move to <em>granola-coffee land</em>: Seattle.
        <br/>
        There, I will begin the next season of life as a Software Engineer at <a target="_blank" href="http://stripe.com">Stripe</a>.</TypeIt>
        </div>
      </section>

      <section id="works" className={`${utilStyles.headingMd} ${utilStyles.thinCentered}`}>
        <h1>the works</h1>
        <div className={utilStyles.content}>
        <TypeIt options={{speed: 5, waitUntilVisible: true}}>Here's some stuff I've built.</TypeIt>
        </div>

        <div>
          <div className={utilStyles.box}>
            {/* <h4>Projects</h4> */}
            <ul className={utilStyles.projectList}>
              <li className={utilStyles.project}><a href="/projects/flier">Are You a Normal Flier?</a></li>
              <li className={utilStyles.project}><a href="/projects/crimson-cafes">Crimson Cafes</a></li>
              <li className={utilStyles.project}><a href="/projects/bussio-go">Bussio Go</a></li>
              <li className={utilStyles.project}><a href="/projects/hourglass">Hourglass</a></li>
              <li className={utilStyles.project}><a href="/projects/dscvr">DSCVR</a></li>
              <li className={utilStyles.project}><a href="/projects/harvard-house-quiz">Harvard House Quiz</a></li>
              <li className={utilStyles.project}><a href="/projects/studibuddi">StudiBuddi</a></li>
              <li className={utilStyles.project}><a href="/projects/block-party">Block Party</a></li>
              <li className={utilStyles.project}><a href="/projects/jenca">Jenca</a></li>
              <li className={utilStyles.project}><em>This</em>-- using Next.js, Bootstrap, TypeIt, GSAP. </li>
            </ul>
          </div>
          {/* <div className={utilStyles.box}>
            <h4>Thoughts</h4>
            <ul>
            <li><a href="/posts/first-post">journal entry 1</a></li>
            </ul>
          </div> */}
        </div>

      </section>
      
    </Layout>
  );
}