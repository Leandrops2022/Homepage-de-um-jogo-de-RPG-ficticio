import styles from './VideoBackground.module.scss';

const VideoBackground: React.FC = () => {
    return (
        <div className={styles['background-video']}>
            <video autoPlay loop muted>
                <source src='/game.mp4' type='video/mp4' />
            </video>
        </div>
    );
};

export default VideoBackground;