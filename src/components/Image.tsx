import React from 'react';
import Image from 'next/image';
interface ImageProps {
  folder?: string;
  imageName: string;
  alt: string;
}
const ImageCmp: React.FC<ImageProps> = ({ folder, imageName, alt }) => {
  let imagePath = '';
  if (folder) imagePath = '/' + folder;
  if (!imageName) imagePath = '';
  else imagePath = imagePath + '/' + imageName;
  return (
    <div className="flex justify-center mb-2 md:justify-start">
      <Image
        src={imagePath}
        height={500}
        width={500}
        alt={alt}
        className=" lg:h-80 lg:w-80 h-40 w-40 object-cover rounded-full shadow-lg"
      />
    </div>
  );
};

export default ImageCmp;
