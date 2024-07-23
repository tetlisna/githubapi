import styles from './ScrollToTopButton.module.scss';

type Props = {
  onClick: () => void;
};

const ScrollToTopButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.scrollToTop} onClick={onClick}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
