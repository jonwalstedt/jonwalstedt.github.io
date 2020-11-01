import React, { ReactNode, useState } from 'react';
import Portal from '../Portal/Portal';
import styles from './Banner.module.css';

interface BannerItemProps {
  image?: string;
  iframe?: string;
}

interface BannerIframeItemProps {
  iframe: string;
}

const BannerIframeItem = ({ iframe }: BannerIframeItemProps): JSX.Element => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeEl = document.createElement('iframe');
  iframeEl.src = iframe;
  iframeEl.onload = () => {
    setIframeLoaded(true);
  };

  return (
    <iframe
      scrolling="no"
      src={`${iframe}?height=375&theme-id=1709&default-tab=js,result`}
      frameBorder="no"
      style={{
        opacity: iframeLoaded ? 1 : 0,
      }}
    />
  );
};

interface BannerImageItemProps {
  image: string;
}

const BannerImageItem = ({ image }: BannerImageItemProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  if (image) {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }
  return (
    <div
      className={styles.bannerImage}
      style={{
        backgroundImage: `url(${image})`,
        opacity: imageLoaded ? 1 : 0,
      }}
    />
  );
};

export const BannerItem = ({ image, iframe }: BannerItemProps): JSX.Element => {
  return (
    <div className={styles.bannerItem}>
      {image && <BannerImageItem image={image} />}
      {iframe && <BannerIframeItem iframe={iframe} />}
    </div>
  );
};

interface BannerProps {
  children: ReactNode;
}

const Banner = ({ children }: BannerProps): JSX.Element => {
  const childrenArr = React.Children.toArray(children);
  const randomIndex = Math.round(Math.random() * (childrenArr.length - 1));

  return (
    <Portal selector="#banner">
      <div className={styles.banner}>
        <div className={styles.bannerContent}>{childrenArr[randomIndex]}</div>
      </div>
    </Portal>
  );
};

export default Banner;
