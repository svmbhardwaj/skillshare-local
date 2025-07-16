import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillShare Local</title>
        <meta name="description" content="Empowering local skills, connecting communities" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.white}>Skill</span>
            <span className={styles.blue}>Share</span>{' '}
            <span className={styles.gold}>Local</span>
          </h1>

          <p className={styles.subtitle}>
            Connect. Hire. Grow — in your own neighborhood.
          </p>

          <div className={styles.actions}>
            <Link href="/post-gig">
              <button className={styles.btn}>Post a Gig</button>
            </Link>
            <Link href="/browse">
              <button className={`${styles.btn} ${styles.secondary}`}>Browse Gigs</button>
            </Link>
          </div>

          <div className={styles.logo}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2904/2904958.png"
              alt="Skill Sharing"
              width={180}
              height={180}
              className={styles.invertedIcon}
            />
          </div>
        </div>
      </main>
    </>
  );
}
