import { useState, useEffect } from 'react'
import './NavBar.css'

const NavBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hovering, setHovering] = useState(false)
    const [hoveringPA, setHoveringPA] = useState(false)
    const [hoveringNews, setHoveringNews] = useState(false)
    const [hoveringFirm, setHoveringFirm] = useState(false)
    const [hoveringLocations, setHoveringLocations] = useState(false)
    const [hoveringCareers, setHoveringCareers] = useState(false)
    const navigations = ['Attorneys', 'Practice Areas', 'News', 'The Firm', 'Careers', 'Locations']
    const PA = new Array(51).fill('Lorem Ipsum');
    const locations = new Array(34).fill('Lorem Ipsum');
    console.log(PA)
    const handleEnter = () => {
        setHovering(true)
    }
    const handleLeave = () => {
        setHovering(false)
    }

    const handleEnterPA = () => {
        setHoveringPA(true)
    }
    const handleLeavePA = () => {
        setHoveringPA(false)
    }

    const handleEnterNews = () => {
        setHoveringNews(true)
    }
    const handleLeaveNews = () => {
        setHoveringNews(false)
    }

    const handleEnterFirm = () => {
        setHoveringFirm(true)
    }
    const handleLeaveFirm = () => {
        setHoveringFirm(false)
    }

    const handleEnterLocations = () => {
        setHoveringLocations(true)
    }
    const handleLeaveLocations = () => {
        setHoveringLocations(false)
    }
    const handleEnterCareers = () => {
        setHoveringCareers(true)
    }
    const handleLeaveCareers = () => {
        setHoveringCareers(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerStyle = {
        backgroundColor: scrollPosition > 0 ? 'rgb(51, 63, 72)' : 'transparent'
    };

    return (
        <div className="outer__container" style={containerStyle}>
            <div className='img__container'>
                <img src="/qe-logo.svg" width={'286px'} height={'35px'}></img>
            </div>
            <div className="navigation">
                {
                    !hovering ? (
                        <>
                            {navigations.map(nav => {
                                if (nav == "Practice Areas") {
                                    return (
                                        <div className='navigation__button' onMouseEnter={handleEnterPA} onMouseLeave={handleLeavePA}>
                                            <p> {nav}</p>
                                        </div>
                                    )
                                } else {
                                    if (nav == "News") {
                                        return (
                                            <div className='navigation__button' onMouseEnter={handleEnterNews} onMouseLeave={handleLeaveNews}>
                                                <p> {nav}</p>
                                            </div>
                                        )
                                    } else {
                                        if (nav == "The Firm") {
                                            return (
                                                <div className='navigation__button' onMouseEnter={handleEnterFirm} onMouseLeave={handleLeaveFirm}>
                                                    <p> {nav}</p>
                                                </div>
                                            )
                                        } else {
                                            if (nav == "Locations") {
                                                return (
                                                    <div className='navigation__button' onMouseEnter={handleEnterLocations} onMouseLeave={handleLeaveLocations}>
                                                        <p> {nav}</p>
                                                    </div>
                                                )
                                            } else {
                                                if (nav == "Careers") {
                                                    return (
                                                        <div className='navigation__button' onMouseEnter={handleEnterCareers} onMouseLeave={handleLeaveCareers}>
                                                            <p> {nav}</p>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className='navigation__button'>
                                                            <p> {nav}</p>
                                                        </div>
                                                    )
                                                }

                                            }

                                        }
                                    }

                                }
                            })}
                            <div className='navigation__button' style={{ paddingTop: "23px", display: 'flex', justifyContent: 'flex-end' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                                <img src='search-icon.png' alt='search icon' />
                            </div>
                        </>
                    ) : (
                        <div className='search__bar__container' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                            <div className='search__bar'>
                                <div className='search__icon'>
                                    <img src='search-icon.png' alt='search icon' />
                                </div>
                                <input className='search__bar' placeholder='Search'></input>

                            </div>


                        </div>
                    )
                }

                <div className='navigation__button'>
                    <p>ENG</p>
                </div>

            </div>

            <div hidden={!hoveringPA} className='PA__dropdown' onMouseEnter={handleEnterPA} onMouseLeave={handleLeavePA}>
                <div>
                    <a>

                    </a>
                </div>
                <div className='PA__dropdown__left'>
                    {
                        PA.map(p => (
                            <a>{p}</a>
                        )
                        )
                    }
                </div>
            </div>

            <div hidden={!hoveringNews} className='news__dropdown'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
                    <a>Awards</a>
                    <a>Firm News</a>
                    <a>Events</a>
                    <a>Firm Memoranda</a>
                    <a>Business Litigation Reports</a>
                </div>
            </div>

            <div hidden={!hoveringFirm} className='firm__dropdown'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
                    <a>About Quinn Emanuel</a>
                    <a>Our Notable Victories</a>
                    <a>Videos</a>
                    <a>Contact Us</a>
                </div>
            </div>



            <div hidden={!hoveringPA} className='PA__dropdown' onMouseEnter={handleEnterPA} onMouseLeave={handleLeavePA}>
                <div>
                    <a>

                    </a>
                </div>
                <div className='PA__dropdown__left'>
                    {
                        PA.map(p => (
                            <a>{p}</a>
                        )
                        )
                    }
                </div>
            </div>

            <div hidden={!hoveringLocations} className='locations__dropdown' onMouseEnter={handleEnterLocations} onMouseLeave={handleLeaveLocations}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", marginLeft: "150px" }}>
                    <div style={{ width: "40%", display: "flex", justifyContent: "flex-end" , marginTop: "14px",marginRight:"10px" }}>
                        <a>
                            View all locations
                        </a>
                    </div>
                    <div style={{width:"50%"}}>
                        <p style={{ color: "black", width: "100%" , textAlign:"left" , marginLeft : "25px",fontWeight:"bold" }}>Locations</p>
                        <div className='locations__dropdown__left'>
                                {
                                    locations.map(p => (
                                        <div>
                                            <a style={{ fontSize: "12px" }}>{p}</a>
                                        </div>
                                    )
                                    )
                                }
                            
                        </div>
                    </div>
                </div>
            </div>

            <div hidden={!hoveringCareers} className='careers__dropdown' onMouseEnter={handleEnterCareers} onMouseLeave={handleLeaveCareers}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: "10px", flexWrap: 'wrap', height: "100%", paddingLeft: "20px" }}>
                    <p style={{ margin: "0", color: "black", fontWeight: "bold" }}>Our Culture</p>
                    <a>About Quinn Emanuel</a>
                    <a>Our Notable Victories</a>
                    <a>Videos</a>
                    <a>Contact Us</a>
                    <p style={{ margin: "0", color: "black", marginTop: "10px", fontWeight: "bold" }}>Summer Program</p>
                    <a>Videos</a>
                    <a>Contact Us</a>
                    <a>About Quinn Emanuel</a>
                    <p style={{ margin: "0", color: "black", marginTop: "0px", fontWeight: "bold" }}>Application Progress</p>
                    <a>Videos</a>
                    <a>Contact Us</a>
                    <a>About Quinn Emanuel</a>
                    <p style={{ margin: "0", color: "black", marginTop: "10px", fontWeight: "bold" }}>Careers</p>
                    <a>Our Notable Victories</a>
                    <a>Videos</a>
                    <a>Contact Us</a>
                </div>
            </div>

        </div>
    )
}

export default NavBar

/*
<div>
                    <p>Attorneys</p>
                </div>
                <div>
                    <p>Practice Areas</p>
                </div>
                <div>
                    <p>Attorneys</p>
                </div>
*/