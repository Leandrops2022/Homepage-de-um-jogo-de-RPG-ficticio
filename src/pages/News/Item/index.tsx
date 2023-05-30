import classes from 'assets/classesDescription/teste.json';
import styles from './Item.module.scss';

type Props = typeof classes[0];

export default function Item(props: Props) {
    const { id, photo, name, description } = props;
    return (
        <div key={id} className={styles.classes}>
            <h2 className={styles.name}>{name}</h2>
            <img src={photo.url} alt={name} className={styles['class-image']} />
            <p className={styles['class-description']}>{description}</p>
        </div>

    );
}
