import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';

const title = "Block Party"
const tags = ['React', 'Firebase', 'Radar.io API', 'Youtube API']
const date = 'June 2020'

export default function BP() {
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
            <h4><a target="_blank" href="https://ravedeejay.web.app/">→ Website</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/deejay">→ Code</a></h4>
            <br/>
            Over the summer, my friend Jessica and I decided to do a hackathon together, HobbyHacks. HobbyHacks comes from TechTogether, and is a hobby (music, art, gaming, cooking, etc) themed hackathon. Jess and I knew we wanted to tackle connectivity at a time of social distancing, so we created Block Party, a webapp that allows users to create music “rooms” with their friends. Each member of the room can queue free music (courtesy of YouTube’s API) and the music would synchronously play on each user’s computer. We also included a location services feature. Say you’d like to connect with your physical neighbors (those closest to you by zip code) by listening to music together. Block Party uses Radar.io geofencing, enabling users to listen to music with other members of their town, like one big virtual block party.
          </div>
      </Layout>
    );
  }