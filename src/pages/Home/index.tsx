import styles from './Home.module.scss';
import arcanum3 from 'assets/imgs/arcanum3.png';
import arcanum2 from 'assets/imgs/arcanum2.png';
import forest from 'assets/imgs/forest3.jpeg';

export default function Home() {

    return (
        <div className={styles.main}>
            <div className={styles['background-video']}>
                <video autoPlay loop muted>
                    <source src='/game.mp4' type='video/mp4' />
                </video>
            </div>
            <div className={styles['grid-container']}>

                <div className={styles.item1}>
                    <img src={arcanum3} alt="banshee" />
                </div>
                <div className={styles.item2}>
                    <p>As the sun sets over the cursed town of Ravenwood, a dense fog rolls in, bringing
                        with it the whispers of the dead. The townspeople have long feared the apparitions
                        that haunt the abandoned buildings and overgrown cemeteries. Now, you and your fellow
                        adventurers find yourselves drawn to the town, driven by the promise of treasure and
                        the thrill of adventure. But do you have what it takes to face the horrors that await?
                        Will your blades and spells be enough to vanquish the supernatural foes that lurk in the
                        shadows? Only time will tell if you possess the bravery and wit to unravel the mysteries
                        of Ravenwood and emerge victorious.
                    </p>
                </div>
                <div className={styles.item3}>
                    <p>
                        Embark on an extraordinary journey into the desolate realm of the Deadlands,
                        where the echoes of a forgotten kingdom linger in eerie silence. A haunting
                        invitation awaits those who dare to venture into this perilous realm. Within
                        its crumbling ruins and sunken valleys, danger lurks at every turn, challenging
                        your wit and courage. But take heart, brave adventurers, for amidst the treacherous
                        trials lie untold treasures and unimaginable power. Delve into the depths of this
                        forsaken kingdom, where the greatest perils yield the grandest rewards. Unleash your
                        true potential and claim the spoils that await the bold. Are you prepared to conquer
                        the perils of the Deadlands and emerge as a legend? Join us, if you dare, for within
                        these forsaken lands, greatness awaits those who seek it.
                    </p>
                </div>
                <div className={styles.item4}>
                    <img src={arcanum2} alt="deadlands" />
                </div>
                <div className={styles.item5}>
                    <img src={forest} alt="deadlands" />
                </div>
                <div className={styles.item6}>
                    <p>
                        Deep within the heart of the mystical land of Adara forest lies unparalleled splendor and
                        wonder. Towering trees stretch towards the sky, reaching incredible heights and obscuring
                        the sun with their dense canopy. Beneath the towering giants, a vast array of flora and
                        fauna thrive, from the smallest of insects to the largest ferocious beasts. Ancient ruins
                        shrouded in mystery are also scattered throughout the forest, waiting to be uncovered by
                        intrepid adventurers. Venture forth into the forest of Adara and discover the wonders
                        hidden within. Who knows what treasures you may find amongst the twisting trees and
                        ancient ruins?
                    </p>
                </div>
            </div>

        </div>

    );
}