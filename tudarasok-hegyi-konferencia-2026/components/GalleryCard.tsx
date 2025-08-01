import React from 'react';

interface GalleryCardProps {
  imgSrc: string;
  description: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ imgSrc, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 sm:h-72">
      <img 
        src={imgSrc} 
        alt={description}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
      <div className="absolute inset-0 flex items-end p-4">
        <p className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
