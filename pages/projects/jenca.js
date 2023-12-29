import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';

const title = "Jenca"
const tags = ['Flask', 'SQL', 'Full Stack']
const date = 'November 2019'

export default function Jenca() {
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
            <h4><a target="_blank" href="https://youtu.be/wFExRS5pJhY">→ Demo Video</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/jenca">→ Code</a></h4>
            <br/>
            <p>For our CS50 Final Project back in November 2019, my partner and I decided to go down the web track and build the iconically basic idea that I’m pretty sure every beginning programmer has built before: a bUDgETiNG aPP. No, really, as I was sharing my group’s list of ideas with other CS50 students, I found that out of the 10 ideas on my list, 9 of them were ideas other people had already come up with. Oh well, I guess it’s hard to be original. 
            <br/>
            <br/>
            Anyway, our version of the infamous budgeting app is Jenca, built with Python’s Flask library and SQL, where we tried to focus on clean, minimalistic UI. Some of my favorite features that we included was our pie chart (made with Matplotlib) and how the colors of the spending categories increase in saturation as the user nears their monthly budget.
            <br/>
            <br/>
            Ultimately, this project was a fantastic introduction to web development (although I don’t think I will be using Flask again to build my projects) and I got a great introduction to creating user logins and registrations and saving user data in databases with SQL.
            <br/>
            <br/>
            Yesterday, after a lot of struggle, I was able to deploy Jenca onto Heroku. However, as I fiddled around with it again, I saw the occurrence of many bugs that weren’t there before deployment. Feel free to check out Jenca on Heroku, but take a look at our demo video for a better representation of how Jenca is supposed to work!</p>
          </div>
      </Layout>
    );
  }