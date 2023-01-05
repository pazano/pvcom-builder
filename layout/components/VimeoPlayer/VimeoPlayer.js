import styles from './VimeoPlayer.module.scss';

const VimeoPlayer = ({ videoId }) => {
  return (
    <div className={styles.player}>
      <iframe title="vimeo-player" src={`https://player.vimeo.com/video/${videoId}`} frameborder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VimeoPlayer;