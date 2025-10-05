import React, { useEffect, useState } from "react";

export default function ImageScroller() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageModules = import.meta.glob("../images/*.{png,jpg,jpeg,svg}", { eager: true });
    const imageUrls = Object.values(imageModules).map((mod) => mod.default);
    setImages(imageUrls);
  }, []);

  return (
    <div className="image-scroller">
      <div className="scroller-track">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
}