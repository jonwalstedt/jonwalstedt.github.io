import React, { useCallback, useState } from 'react';
import styles from './Hamburger.module.css';

interface HamburgerProps {
  isActive?: boolean;
  onClick: () => void;
}

const Hamburger = ({
  onClick,
  isActive = false,
}: HamburgerProps): JSX.Element => {
  const [isActiveInternal, setIsActiveInternal] = useState(isActive);
  const handleClick = useCallback(() => {
    setIsActiveInternal(!isActiveInternal);
    onClick();
  }, [onClick, isActiveInternal]);

  return (
    <button
      type="button"
      className={isActiveInternal ? styles.hamburgerActive : styles.hamburger}
      onClick={handleClick}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner} />
      </span>
    </button>
  );
};

export default Hamburger;
