import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
export default function Index() {
    // const [imageSrc, setImageSrc] = useState('/images/Rectangle 1.svg');
    const [isHovered, setIsHovered] = useState(false);
    const imageProps = useSpring({
        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
      });
    
      const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseOut = () => {
        setIsHovered(false);
      };
    return (

        <>
            <div className="content-cloud">
                <img src={imageSrc}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt="Image" />

            </div>
        </>
    )
}