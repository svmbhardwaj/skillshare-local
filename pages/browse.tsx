// ✅ Top
import React from 'react'; // Optional but helpful
import Head from 'next/head';
import styles from '../styles/Browse.module.css';

export default function BrowseGigs() {
    const gigs = [
        {
            id: 1,
            title: 'Home Tutoring',
            description: 'Help for school students from Class 1 to 10.',
            image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
            provider: 'Shivam Bhardwaj',
            verified: true,
        },
        {
            id: 2,
            title: 'Yoga at Home',
            description: 'Certified Yoga trainer for all age groups.',
            image: 'https://cdn-icons-png.flaticon.com/512/1995/1995661.png',
            provider: 'Yashika Chaudhary',
            verified: true,
        },
        {
            id: 5,
            title: 'Mobile Notary',
            description: 'Quick doorstep document verification service.',
            image: 'https://cdn-icons-png.flaticon.com/512/2516/2516644.png',
            provider: 'Vaishnavi Sachan',
            verified: false,
        },
        {
            id: 3,
            title: 'Stitching Services',
            description: 'Custom blouse, fall-pico, and alteration.',
            image: 'https://cdn-icons-png.flaticon.com/512/3764/3764572.png',
            provider: 'Shikha Sharma',
            verified: true,
        },
        {
            id: 4,
            title: 'Appliance Repair',
            description: 'Fan, fridge, mixer repair within 30 mins.',
            image: 'https://cdn-icons-png.flaticon.com/512/2910/2910793.png',
            provider: 'Deepak Kumar',
            verified: true,
        },
    ];

    return (
        <>
            <Head>
                <title>Browse Gigs | SkillShare Local</title>
                <meta name="description" content="Find trusted services offered by your community" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.heading}>
                    <span className={styles.white}>Explore </span>
                    <span className={styles.blue}>Gigs</span>
                </h1>

                <p className={styles.subtitle}>
                    Discover trusted local services — verified providers offering real skills near you.
                </p>

                <div className={styles.grid}>
                    {gigs.map((gig) => (
                        <div key={gig.id} className={styles.card}>
                            <img src={gig.image} alt={gig.title} className={styles.image} />
                            <div className={styles.info}>
                                <h3 className={styles.title}>
                                    {gig.title}{' '}
                                    {gig.verified && <span className={styles.badge}>✔ Verified</span>}
                                </h3>
                                <p className={styles.desc}>{gig.description}</p>
                                <p className={styles.provider}>By {gig.provider}</p>
                                <button className={styles.button}>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
