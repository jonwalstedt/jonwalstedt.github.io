import React from 'react';
import styles from './Hamburger.module.css';

interface HamburgerProps {
  isActive?: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger = ({
  onClick,
  isActive = false,
  className = '',
}: HamburgerProps): JSX.Element => {
  const classes = isActive
    ? `${styles.hamburgerActive} ${className}`
    : `${styles.hamburger} ${className}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={isActive ? 'Close menu' : 'Show menu'}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner} />
      </span>
    </button>
  );
};

export default Hamburger;
