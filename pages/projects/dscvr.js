import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';

const title = "DSCVR"
const tags = ['React', 'Spotify API']
const date = 'June 2020'

export default function DSCVR() {
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
            <h4><a target="_blank" href="https://dscvrvibez.web.app/">→ Website</a></h4>
            <h4><a target="_blank" href="https://github.com/jenxguo/dscvr">→ Code</a></h4>
            <br/>
            Before completing this project, I never thought I could code something on my own, without the help of more talented programmers or the guidance of teachers or a detailed PDF telling me exactly what to do. DSCVR was the first project I embarked on for the summer of 2020, when I decided I would teach myself actual, employable CS skills that Harvard wouldn’t teach me (hey but at least I know OCaml)! So, brushed up my HTML/CSS and Javascript chops and taught myself React, a library at the core of front-end web development. I also wanted to learn more about APIs, since I had just attended a workshop at hack:now about the tool. About a week in, I realized I could learn so much more by actually creating a project, so I decided to create DSCVR. Let’s get into my journey with DSCVR, some of the challenges I faced, and what I would improve on if I had to do it again.
<br/><br/>
DSCVR is a web-app that essentially takes the user’s Spotify listening data from the last 30 days and uses powerful Spotify API tools to relay interesting statistics back the user, such as the user’s top 10 songs, artists and genres, as well as overall traits of the music the user likes measured in danceability, energy, tempo, etc. DSCVR then matches those overall traits with more obscure music that the user might like and creates a playlist for them.
<br/><br/>
The first step was authenticating the user with Spotify so that DSCVR could grab user data and manipulate user playlists. This by far was the most difficult part of the project, since I didn’t understand how OAuth worked. I have to thank so many Medium articles for helping me through this part, including Jonny Kalambay’s and Alex Ginsberg’s. I realized a great first step to any project is looking online for any tutorials you can find to familiarize yourself with the tools you will be working with. Essentially, I had to redirect the user to a url containing a client_id, a redirect url, and authentication scopes (what the user allows DSCVR to do, such as reading the user’s top songs and artists and making playlists for the user), using implicit grant flow. This would redirect the user to a “Login with Spotify” page and then redirect the user back to DSCVR.
<br/><br/>
Next, I had to make an API call to get the user’s top songs and top artists and store the data in the state accordingly. This first API call was also tough to figure out, since it was my first time working with APIs. Luckily, there is a library available on Github that simplifies Spotify API calls into a simple function call. I then manipulated the data to 1. get the user’s top genres and 2. get the overall traits of the music. I had a bit of help from Sofiya Semenova’s blog post in retrieving the top genres, and getting the overall traits of the music was just another API call using the “get audio features” endpoint.
<br/><br/>
I displayed the user’s data using bootstrap cards and a lovely Chart.js library.
<br/><br/>
Now that I had all the user data I needed, it was time to create playlists for the user. First, I created a playlist full of 30 of the user’s most listened to songs in the past 30 days. Here, I had to use the “create playlist” endpoint as well as the “add songs to playlist” endpoint. I ran into another roadblock here because for some reason, the Github library I mentioned earlier that I was using wasn’t working for the creating a playlist endpoint, so I had to learn a bit JQuery Ajax to make that request. 
<br/><br/>
Then, I made another playlist full of 30 songs the user might enjoy based on the overall audio features of their most-listened to music. The audio features I obtained earlier included acousticness, danceability, energy, instrumentalness, speechiness, valence (Spotify’s API returned these elements in a float between 0.0 and 1.0- I did not have to calculate them myself). Spotify’s API also has an endpoint called “get recommendations from artist seeds”, so I fed the API the user’s top 5 artists, the target audio features to match and a low target popularity (so the recommended songs would be more obscure). The results- worked! When I tried it on myself, I ended up with a playlist of 30 songs that I actually thoroughly enjoyed. However, my method did give me a couple recommended songs that I already knew or were relatively popular. I think this is because Spotify gives its songs a popularity score of between 0 and 100 where a song with a high popularity score has a lot of recent plays. So, the #1 song on the charts in 2014 might have a super low popularity score, only because it wasn’t played recently. I don’t like how Spotify measured popularity, but it was something I had to work with, so that is likely why my method still recommended less obscure music. 
<br/><br/>
Pretty happy with my recommendations!
<br/><br/>
Now that I had the backend of DSCVR working, it was time to work on the styling! It was very important to me that DSCVR looked beautiful. I chose a complementary color scheme of purples and yellows to give off a fun, vibrant feel. I used a CSS gradient background and found a cool code snippet for the very “pop-culture-y”, creative font. I didn’t like how static the website felt, so I wanted to add animations  so that different sections of the web-app would appear as the user scrolled. Luckily, I found this Animate on Scroll library that made it super easy to implement (and the end product looked very sleek as well).

          </div>
      </Layout>
    );
  }