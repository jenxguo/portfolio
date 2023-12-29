import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';

const title = "Are You a Normal Flier?"
const tags = ['D3.js', 'Data Visualization', 'Web']
const date = 'Dec 2023'

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
            <h4><a target="_blank" href="https://cs171.pages.dev/">→ Website</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/cs171-project-final">→ Code</a></h4>
            <br/>
            <p>Built as the final project for CS171: Visualization. Check out the live website for an in depth investigation on flying culture and patterns in the US, visualized.</p>

          </div>
      </Layout>
    );
  }