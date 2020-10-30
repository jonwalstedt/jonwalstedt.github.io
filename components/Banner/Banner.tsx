import Image from 'next/image';
import React, { ReactNode } from 'react';
import Portal from '../Portal/Portal';

interface BannerItemProps {
  image?: string;
  iframe?: string;
}

export const BannerItem = ({ image, iframe }: BannerItemProps): JSX.Element => {
  console.log('iframe:', iframe);
  return <div>{image && <Image src={image} width={1000} height={400} />}</div>;
};

interface BannerProps {
  children: ReactNode;
}

const Banner = ({ children }: BannerProps): JSX.Element => {
  return (
    <Portal selector="#banner">
      <div>{children}</div>
    </Portal>
  );
};

export default Banner;
