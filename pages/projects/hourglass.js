import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

const title = "Hourglass"
const tags = ['Svelte', 'Frontend Web']
const date = 'March 2023'

export default function Hourglass() {
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
            <h4><a target="_blank" href="https://github.com/jenxguo/hourglass">→ Code</a></h4>
            <br/>
            <p>Built as the first project for CS178: Engineering Usable and Interactive Systems. We were tasked with building our version of a scheduling app-- with inspiration from <a target='_blank' href="https://doodle.com/en/product/polls/">Doodle</a> and <a target='_blank' href="https://www.when2meet.com/">When2Meet</a>.</p>
            <br/>
            <p>The target user was the average Harvard student-- most students either meet up in the SEC (engineering building), the River houses, the Quad houses, or remotely. So, we added options to select meetup location as well as a toggle to indicate your preferred vs. "only if need be" preferences.</p>
            <br/>
            <p>Our final design was a transposed When2Meet, featuring easy "drag to select" capabilities.</p>
            <br/>
            <p>When the host is finished collecting responses, Hourglass will calculate the top 3 best times that work for everyone.</p>
            <div className={utilStyles.center}>
                <Image alt="Hourglass Login Screen" src="/images/hourglass1.png" width={300} height={300} layout="responsive" objectFit="contain"/> 
            </div>
            <br/>
            <div className={utilStyles.center}>
                <Image alt="Hourglass Selection Screen" src="/images/hourglass2.png" width={300} height={300} layout="responsive" objectFit="contain"/> 
            </div>
          </div>
      </Layout>
    );
  }