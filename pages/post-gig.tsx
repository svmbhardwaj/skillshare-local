import Head from 'next/head';
import styles from '../styles/PostGig.module.css';

export default function PostGig() {
  return (
    <>
      <Head>
        <title>Post a Gig | SkillShare Local</title>
        <meta name="description" content="Offer your skills to your local community" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>
          <span className={styles.white}>Post a </span>
          <span className={styles.blue}>New Gig</span>
        </h1>

        <form className={styles.form}>
          <label className={styles.label}>
            Title
            <input
              type="text"
              placeholder="e.g. Home tutoring"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Description
            <textarea
              placeholder="Describe your skill or offering..."
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Category
            <select className={styles.input}>
              <option>Select category</option>
              <option>Education</option>
              <option>Repair</option>
              <option>Health & Fitness</option>
              <option>Tech Help</option>
            </select>
          </label>

          <label className={styles.label}>
            Contact Info
            <input
              type="text"
              placeholder="Phone or email"
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.button}>
            Submit Gig
          </button>
        </form>
      </main>
    </>
  );
}
