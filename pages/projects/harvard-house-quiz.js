import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

const title = "Harvard House Quiz"
const tags = ['SparkAR', 'Firebase', 'Full Stack']
const date = 'March 2020'

export default function HHQ() {
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
            <div className={utilStyles.center} style={{width: '50%'}}>
                <Image alt="Harvard House Quiz in Action" src="/images/harvardquiz.gif" width={200} height={300} layout="responsive" objectFit="contain"/> 
            </div>
            <br/>
            Housing Day is a longstanding tradition at Harvard, and although I will never get to experience it due to COVID-19, I still had an exciting time ranking the houses months in advance, visiting and learning all the pros and cons of each house, and anxiously waiting in a Zoom waiting room to finally find out what house I got. There are 12 Harvard houses that you can get “sorted” into and each one has their own special culture. Students live in their house starting Sophomore year until Senior year and it is a place where many find their communities, best friends, and guidance. Ultimately, the best house is always your house. 
            <br/><br/>
            After virtual housing day, I was scrolling through Instagram and saw a Harvard House Sorting Hat filter, where a little box on top of your head would randomly cycle through the four Harvard houses to “sort” you into one. With Harvard’s huge house culture, I was surprised no one had made a filter for Harvard houses yet, so I decided to make one!
            <br/><br/>
            First, I gathered pictures of all the house shields from Google, and I added the name of the house on top of the shield with Photoshop. These would be the photos that I randomly cycled through in order to “sort” the user into a house. Then, I used Spark AR Studio, a free AR creating platform by Facebook, to make my filter. I placed a transparent box over where the user’s head would be, then created the title slide. When the user tapped the filter, the box would cycle through displaying all 12 of the houses until it randomly selected one! The process was super simple and afterwards, I just uploaded the filter to Instagram through Spark AR Hub so my friends could play around with it.
            <br/><br/>
            As of today (June 6th, 2020), “Harvard House Quiz” has over 80k impressions! Sadly, I posted the filter after Housing Day occurred, but I’m hoping that next year, the Class of 2024 can get a good use out of the filter in anticipation for Housing Day!
          </div>
      </Layout>
    );
  }