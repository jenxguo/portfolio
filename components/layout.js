import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Jenn Guo';
export const siteTitle = 'Jenn Guo';

export default function Layout({ children, home, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jenn Guo Personal Website"
        />
        <meta name="og:title" content={siteTitle} />
        
      </Head>
      <header className={styles.header}>
        {home ? (
        <div className={styles.col}>
            <div className={styles.row}>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>

                <div className={styles.links}>
                    <div className={styles.row}>
                        <Link target='blank' href="mailto:jenniferguo@college.harvard.edu"> 
                            <Image alt="email" src="/images/email.png" height={40} width={40}/> 
                        </Link>
                        <Link target='blank' href="http://github.com/jenxguo"> 
                            <Image alt="Github" src="/images/github.svg" height={35} width={35}/> 
                        </Link>
                        <Link target='blank' href="http://www.linkedin.com/in/jenniferrguo/"> 
                            <Image alt="LinkedIn" src="/images/linkedin.svg" height={40} width={40}/> 
                        </Link>
                    </div>
                </div>

            </div>
            <h3 className={`${utilStyles.headingMd} ${styles.description}`}>[freedom of mind]</h3>
        </div>
        
        
        ) : (
          <div className={styles.col}>
                <h1 className={utilStyles.heading2Xl}>{title}</h1>
            <div className={styles.backToHome}>
            <Link href="/#works">← Back to home</Link>
          </div>
        </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}