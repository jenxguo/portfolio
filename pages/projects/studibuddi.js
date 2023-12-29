import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';

const title = "StudiBuddi"
const tags = ['React', 'Firebase', 'Full Stack']
const date = 'January 2021'

export default function SB() {
    return (
      <Layout title={title}>
          <Head>
          <title>Jenn Guo - {title}</title>
          </Head>
          <div className={utilStyles.blog}>
            <div className={utilStyles.row}>
              <p className={utilStyles.date}>{date}</p>
              <div className={utilStyles.tags}>
                {tags.map((tag, i) => (
                  <span key={i} className={['badge', 'badge-pill', 'badge-primary', utilStyles.badge].join(' ')}>{tag}</span>
                ))}
              </div>
            </div>
            <h4><a target="_blank" href="https://studibuddibeta.web.app/">→ Landing Page</a></h4>
            <br/>
            Studi Buddi began as a side project I ideated and worked on with a friend over the summer of 2020. I had just begun to learn React and Firebase and wanted to take a stab at coding my first “social network”. After hearing the news that Harvard would be completely virtual for the 2020-2021 academic school year and that sophomores were not invited back to campus for the year, I decided to take a gap year. From my personal experience taking Zoom courses for half the spring semester, I realized just how difficult it would be for other students to excel in their large lecture style problem set based courses over Zoom. Every micro social interaction at college was gone, and I wasn’t sure how anyone would go about making friendships, much less finding compatible study partners.
<br/><br/>
While grabbing coffee with a high-school friend, he mentioned how entertaining it would be to be able to swipe through everyone in your courses Tinder-style to find your ideal study partner match. I thought this was a brilliant idea and recruited a friend to help me build it throughout the summer.
<br/><br/>
By the start of the fall school year, we were halfway through building Studi Buddi. We had user authentication, the database, and everything up until the swiping screen working. Around this time, I decided to “comp” (Harvard lingo for “apply to be in”) Harvard Ventures, a student organization of startup founders at Harvard. Part of the “comp” process was creating a startup, business plan, and a slide deck that culminated in a pitch presentation at the end of the semester. I found an amazing team of people at Harvard Ventures (including my boyfriend), and I decided to pitch Studi Buddi to them. Ultimately, everyone loved the idea, and we decided to take Studi Buddi to the next level with the goal of actually beta testing and pushing for production in the start of the spring semester of 2021.
<br/><br/>
The first step was user research. Over the summer, my friend and I barely did any user research at all and just jumped straight into coding. This time, we took it slow and conducted hundreds of user interviews with Harvard students. We discovered the existence of a competitor: ClassFinds, which wasn’t doing so well in terms of user retention. We also discovered our target market: incoming first-years taking large intro-style courses looking for quick friends and academic success. The most important thing, however, was that we realized our Tinder-style swiping mechanism was not the most ideal way to go. People didn’t want to spend a long time finding their study partners, they wanted a quick fix. Better yet, they wanted someone to curate their perfect study match for them.
<br/><br/>
Here’s when we started to pivot. I was upset at first that customers didn’t like the Tinder-style mechanism (since that was my baby! the crux of the idea!) but I realized we had to push on and provide the most useful product for our users. We decided to implement a new design: instead of swiping through everyone in your class, users could take a short survey and the Studi Buddi algorithm would match them with the top 10 most compatible study partners in each of their courses. This idea already existed in some capacity at Harvard under Datamatch, a matching algorithm that took place every Valentine’s Day for students to find romantically compatible matches. We took inspiration from them and decided to implement our own matching algorithm that would take place at the start of each semester for each registered Harvard course to find academically compatible matches.
<br/><br/>
This is a huge undertaking, and a current work in progress. A beta version of Studi Buddi is scheduled to be ready by January 2021, in time for testing at wintersession courses. I have an amazing team of 3 engineers, and we’re all working very hard to make Studi Buddi a reality! We currently have over 100 interest emails logged. In the meantime, make sure to check out our landing page for more information!
          </div>
      </Layout>
    );
  }