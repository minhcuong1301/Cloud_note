import { CheckBox } from "@mui/icons-material";
import { Link } from "@mui/material";
import { useState } from "react";

export default function Index() {
    const [imageSrc, setImageSrc] = useState('/images/Rectangle 1.svg');

    const handleMouseOver = () => {
        setImageSrc('/images/Rectangle 2.svg');
    };

    const handleMouseOut = () => {
        setImageSrc('/images/Rectangle 1.svg');
    };



    // const [isHovered, setIsHovered] = useState(false);
    // const [opacity, setOpacity] = useState(1);
    // let timeoutId;
  
    // const handleMouseOver = () => {
    //   setIsHovered(true);
    //   setOpacity(0.7);
  
    //   if (timeoutId) {
    //     clearTimeout(timeoutId);
    //   }
  
    //   timeoutId = setTimeout(() => {
    //     setOpacity(1);
    //   }, 500); // Thời gian chuyển từ 0.7 thành 1 (500ms)
    // };
  
    // const handleMouseOut = () => {
    //   setIsHovered(false);
    // };




    
 
  
    return (

        <>
            <div className="content-cloud">
                <img
                    src={imageSrc}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt="Image"
                    className="hover-opacity"
                />
                {/* <img
                    src="/images/Rectangle 1.svg"
                    alt="Image"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ opacity }}
                /> */}
                <div className="text">
                    <div className="text-welcome">
                        <h3>Hello Minh!</h3>
                        <p>Monday, 25 st Jul 2023</p>
                    </div>
                    <img className="calender" src="/images/calendar.svg"/>
                    <img src="/images/simple-icons_messenger.svg"/> 
                </div>
                <div className="note">
                    <div className="left-note">
                        <div className="top-note">
                            <div className="text-header">
                                <label>NOTE</label>
                                <img src="/images/more-horizontal.svg"></img>
                            </div>
                            <Link className="hover-link active">Recent</Link>
                            <Link className="hover-link">Recommended</Link>
                        </div>
                        <div className="main-note ">
                            <div className="box-note yellow">
                                <div className="name-note">
                                    <p>No name note</p>
                                    <img src="/images/Frame 108.svg"></img>
                                    <img src="/images/mdi_share.svg"></img>
                                </div>
                                <div className="content-text">
                                Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className="date">27/2/2023</div>
                              <input type="checkbox"/>
                            </div>
                            <div className="box-note">
                                <div className="name-note">
                                    <p>No name note</p>
                                    <img src="/images/Frame 108.svg"></img>
                                    <img src="/images/mdi_share.svg"></img>
                                </div>
                                <div className="content-text">
                                Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className="date">27/2/2023</div>
                              <input type="checkbox"/>
                            </div>
                            <div className="box-note green">
                                <div className="name-note">
                                    <p>No name note</p>
                                    <img src="/images/Frame 108.svg"></img>
                                    <img src="/images/mdi_share.svg"></img>
                                </div>
                                <div className="content-text">
                                Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className="date">27/2/2023</div>
                              <input type="checkbox"/>
                            </div>
                        </div>
                    </div>
                    <div className="right-note">
                        <div className="content-right-note">
                            <label>SCRATCH PAPER</label>
                            <img src="/images/Frame 108.svg"></img>
                        </div>
                    </div>
                </div>
                
            </div>
             
        </>
    )
}