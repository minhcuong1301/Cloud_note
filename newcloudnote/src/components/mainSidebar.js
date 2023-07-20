export default function MainSidebar(){
    return(
        <>
            <div className="mainsidebar">
                <div className="top-sidebar">
                    <div className="header-sidebar"> 
                        <div className="avatar">
                            <img src="/images/usersquare.svg"/>
                        
                        </div>
                        <div className="text-avatar"> 
                            <h4>Minh Vu</h4>
                            <p>Join at 26st, Jul 2023</p>
                        </div>
                        <div className="setting"> 
                            <img src="/images/Group 113.svg"/>
                        </div>
                    </div>
                    <input className="search-box" placeholder="Search messenger"/>
                    <img className="img-search" src="/images/Group 48096918.svg"></img>
                    <div className="news">
                        <img src="/images/notefavorite.svg"></img>
                        <span>New</span>
                    </div>
                </div>
                <div className="menu_sidebar">
                    <div className="item">
                        <img src="/images/Group 114.svg"/>
                        <span>Homepage</span>
                    </div>
                    <div className="item">
                        <img src="/images/Group 115.svg"/>
                        <span>Photos</span>
                    </div>
                    <div className="item">
                        <img src="/images/Group 116.svg"/>
                        <span>Note</span>
                    </div>
                    <div className="item">
                        <img src="/images/Group 117.svg"/>
                        <span>Group</span>
                    </div>
                    <div className="item">
                        <img src="/images/Group 119.svg"/>
                        <span>Dustbin</span>
                    </div>
                </div>
                <div className="anonimos">
                    <img src="/images/anonimous.svg"></img>
                    <span >Anonymous</span>
                </div>
            </div>
        </>
    )
}