import { useState } from "react";
export default function Index() {
    const [imageSrc, setImageSrc] = useState('/images/Rectangle 1.svg');

    const handleMouseOver = () => {
        setImageSrc('/images/Rectangle 2.svg');
    };

    const handleMouseOut = () => {
        setImageSrc('/images/Rectangle 1.svg');
    };
    return (

        <>
            <div className="content-cloud">
                <img
                    src={imageSrc}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt="Image"
                />
            </div>
        </>
    )
}