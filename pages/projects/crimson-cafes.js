import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

const title = "Crimson Cafes"
const tags = ['React Native', 'Apollo GraphQL','Full Stack', 'Mobile']
const date = 'May 2023'

export default function CC() {
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
            <h4><a target="_blank" href="https://www.figma.com/file/4nSGkF8iDAJONBtDujhAmS/CS178-Final-Project?type=design&node-id=0-1&mode=design">→ Figma</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/cafe-app-mobile">→ Frontend Code</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/cafe-app-api">→ Backend Code</a></h4>
            <br/>
            <p>Built as the final project for CS178: Engineering Usable and Interactive Systems. Check out the Figma for the full design!</p>
            <br/>
            <p>The main users of this app are Harvard College students. Studnets wnat to know where they can spend their BoardPlus (extra dining cash_ and get food outside of normal dining halls, as well as keep track of their BoardPlus balance. However, a lack of a centralized place to view all Harvard cafe locations and transparency with BoardPlus balances gets in the way.</p>
            <br/>
            <p>We built Crimson Cafes as a centralized place to view all BoardPlus cafe and grille locations, as well as their hours/menu/location. We foster Harvard community by enabling students to review and rate all locations. Lastly, we allow students to track their BoardPlus balance and purchases for further transparency.</p>

          </div>
      </Layout>
    );
  }