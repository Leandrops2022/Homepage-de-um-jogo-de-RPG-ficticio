import Item from './Item';
import { useState } from 'react';
import styles from './News.module.scss';
import classes from 'assets/classesDescription/teste.json';

export default function News() {

    const [list, setList] = useState(classes);
    console.log(list);

    return (
        <div className={styles.main}>
            <div className={styles.news}>
                <h1>New classes added!</h1>
                <p>We are proud to announce that new classes were added to the game and will be present in the
                    upcoming closed beta. check below all the classes available so far. If you want to
                    participate in the closed beta, hurry up and sign by clicking the play now button above !!!
                </p>
                {list.map(element => (
                    <Item
                        key={element.id}
                        {...element}
                    />
                ))}
            </div>
        </div>
    );
}