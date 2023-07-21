import { CheckBox, Padding } from "@mui/icons-material";
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
                    <img className="calender" src="/images/calendar.svg" />
                    <img src="/images/simple-icons_messenger.svg" />
                </div>

                <div className="overlay"></div>
                <div className="note">
                    <div className="a">
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
                                <input type="checkbox" />
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
                                <input type="checkbox" />
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
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="wrap-right-note">
                        <div className="right-note">

                            <label>SCRATCH PAPER</label>
                            <img src="/images/Frame 108.svg"></img>

                        </div>
                    </div>

                </div>
                <div className="note">
                    <div className="a">
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
                                <div className="box-note red">
                                    <div className="name-note">
                                        <p className="custom-text-pinned">No name note</p>
                                        <img className="pinned" src="/images/Group 48096886.svg"></img>

                                    </div>
                                    <div className="content-text custom-text">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className="date custom-date">27/2/2023</div>
                                    <input type="checkbox" className="custom-checkbox" />
                                </div>
                                <div className="box-note ">
                                    <div className="name-note">
                                        <p className="custom-text-pinned">No name note</p>
                                        <img className="pinned" src="/images/Group 48096886.svg"></img>

                                    </div>
                                    <div className="content-text custom-text">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className="date custom-date">27/2/2023</div>
                                    <input type="checkbox" className="custom-checkbox" />
                                </div>
                                <div className="box-note purple">
                                    <div className="name-note">
                                        <p className="custom-text-pinned">No name note</p>
                                        <img className="pinned" src="/images/Group 48096886.svg"></img>

                                    </div>
                                    <div className="content-text custom-text">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className="date custom-date">27/2/2023</div>
                                    <input type="checkbox" className="custom-checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="left-note custom-padding">
                            <div className="top-note">
                                <div className="text-header">
                                    <label>PUBLIC NOTE</label>
                                    <img className=" custom-margin" src="/images/more-horizontal.svg"></img>
                                </div>
                                <Link className="hover-link active">Recent</Link>
                                <Link className="hover-link">Recommended</Link>
                            </div>
                            <div className="main-note ">
                                <div className="box-art">
                                    <div className="header-box-art">
                                        <img src="/images/usersquare.svg"></img>
                                        <div className="text-box-art">
                                            <p>Minh Vu</p>
                                            <span>Join at 26st, Jul 2023</span>
                                        </div>
                                        <img className="shared" src="/images/mdi_share.svg"></img>
                                    </div>
                                    <p className="title">No name note</p>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className="create-at">Created at 27/03/2023</p>
                                    <div className="emotion-icon">
                                        <img src="/images/Group 48096840.svg"></img>
                                        <span>1</span>
                                        <img src="/images/Group 48096842.svg"></img>
                                        <span>1</span>
                                        <img src="/images/message-circle.svg"></img>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="box-art">
                                    <div className="header-box-art">
                                        <img src="/images/usersquare.svg"></img>
                                        <div className="text-box-art">
                                            <p>Minh Vu</p>
                                            <span>Join at 26st, Jul 2023</span>
                                        </div>
                                        <img className="shared" src="/images/mdi_share.svg"></img>
                                    </div>
                                    <p className="title">No name note</p>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className="create-at">Created at 27/03/2023</p>
                                    <div className="emotion-icon">
                                        <img src="/images/Group 48096840.svg"></img>
                                        <span>1</span>
                                        <img src="/images/Group 48096842.svg"></img>
                                        <span>1</span>
                                        <img src="/images/message-circle.svg"></img>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-note custom-padding">
                            <div className="top-note">
                                <div className="text-header">
                                    <label>CHECKLIST</label>
                                    <img className=" custom-margin" src="/images/more-horizontal.svg"></img>
                                </div>
                                <Link className="hover-link active">Recent</Link>
                                <Link className="hover-link">Recommended</Link>
                            </div>
                            <div className="main-note ">
                                <div className="box-art  ">
                                    <div className="checkbox change">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <span className="color-create"> Created 29/01/2023</span>
                                </div>
                                <div className="box-art  ">
                                    <div className="checkbox change">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" name="" value=""/>
                                        <label for=""> No name note</label>
                                    </div>
                                    <span className="color-create"> Created 29/01/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="wrap-right-note">
                        <div className="right-note user">

                            <label>NEW USER</label>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text">Join at 26st, Jul 2023</span>
                            </div>
                            <p>See more</p>
                        </div>
                        <div className="right-note user">

                         
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                            <div className="username">
                                <img className="avatar" src="/images/usersquare.svg" />
                                <span className="text-avatar">User Name</span>
                                <span className="date-text bold">Has added a new public note</span>
                                <span className="minus">4 min </span>
                            </div>
                           
                            <p>See more</p>
                        </div>
                    </div>


                </div>
                <div className="recorder-info">
                    <label>NEW RECORDED INFORMATION</label>
                    <img src="/images/more-horizontal.svg"></img>
                    <div className="menu-album">
                        <p className="active">Photo</p>
                        <p>Document</p>
                        <p>Audio</p>
                        <p>Note</p>
                        <p>Email</p>
                    </div>
                </div>
                <div className="img-album">
                    <div className="item">
                        <img src="/images/Rectangle 4260.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                    <div className="item">
                        <img src="/images/Rectangle 4261.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                    <div className="item">
                        <img src="/images/Rectangle 4262.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                    <div className="item">
                        <img src="/images/Rectangle 4260.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                    <div className="item">
                        <img src="/images/Rectangle 4261.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                    <div className="item">
                        <img src="/images/Rectangle 4262.svg"></img>
                        <p className="date-album">27/2/2023</p>
                    </div>
                   
                </div>
                <div className="footer">
                    <div className="left">
                        <img src="/images/Group 1.svg"></img>
                        <span>CLOUDNOTE</span>
                    </div>
                    <div className="center">
                    Now we have mobile version for this app
                    </div>
                    <div className="right">
                        Download
                    </div>
                </div>
            </div>

        </>
    )
}