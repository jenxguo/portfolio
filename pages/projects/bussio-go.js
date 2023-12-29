import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

const title = "Bussio Go"
const tags = ['React', 'Passio Go API']
const date = 'April 2023'

export default function BussioGo() {
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
            <h4><a target="_blank" href="https://www.youtube.com/watch?v=Zw9TTRR-KsY&ab_channel=GuoPro">→ Demo Video</a></h4>
            <br/>
            <p>Built as the second project for CS178: Engineering Usable and Interactive Systems. We were tasked with rebuilding a better version version of <a target="_blank" href="https://shuttle.harvard.edu/">Passio Go</a>: Harvard's shuttle tracker app, infamous among students for its awful user experience.</p>
            <div className={utilStyles.center}>
                <Image alt="Bussio Go" src="/images/bussiogo.png" width={300} height={300} layout="responsive" objectFit="contain"/> 
            </div>
            <br/>
            <p>Our initial design was geared toward “power users”–  i.e. Harvard students who routinely use the shuttle system and are familiar with the stops and routes. We wanted to improve upon Passio Go by 1. improving glanceability and 2. reducing complexity. So, the core of our design is showing bus route and bus information on a progress bar instead of on the map, which abstracts away unnecessary information, making the app more glanceable and convenient especially when in a hurry. The linear comparisons of the buses on the progress bar also enables the user to quickly decide which bus to catch, something that is not easy to do on the geographical map. For user trust, we provide real-time bus ETA estimates to the user’s start and destination stop. After the intermediate playtest, we decided 2 additions would be necessary for our final design: 1. a reference map of stops and routes to accommodate users who may not be as familiar with the Harvard shuttle system and 2. for each route, show the next stop the bus is en route to and the bus speed (in case the bus is stuck in traffic and might take longer than the ETA) to improve user trust.</p>
            <br/>
            <p>Users liked being able to enter their start and end stops to filter the routes, the progress bar rendering of information, the richness of bus ETA and location information, as well as the overall simplicity of the features. However, needing to search for routes with a start and end stop assumes prior user knowledge of stop names and locations. We thought that adding a reference map with all routes and stops would alleviate this, but we found that users still struggled to find the closest stop to their desired location. We fixed this after the playtest by adding a “search” feature to the map to center on any location. An unintended use case of the map was that users would use it to find the difference between the Southbound and Northbound routes of the same stops, which we realized caused some confusion. An underutilized functionality was the hoverForBusMetadata() action to view information about bus speed and passenger load. We fixed this by adding a “hover for more details” message above the route progress bars. We also realized no additional information was given whenever a route was available but no bus was currently online for the route, which decreased user trust. We fixed this by showing future scheduled arrivals for routes where there were no buses currently online. Ultimately, while some users still preferred watching the bus location update live on the map, many users enjoyed our alternative progress bar rendering of bus location for its glanceability.</p>


          </div>
      </Layout>
    );
  }