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
    <div className="lg:ml-10 mb-6 lg:mb-0 flex justify-center">
      <Image
        src={imagePath}
        alt={alt}
        height={500}
        width={500}
        className="h-80 w-80 object-cover rounded-full shadow-lg"
      />
    </div>
  );
};

export default ImageCmp;
