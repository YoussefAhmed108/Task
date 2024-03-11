import CardList from "./CardList"
import NavBar from "./NavBar"
import './Home.css'
import { useEffect, useState } from "react"
import CardList2 from "./CardList2"
import Text from "./Text"
import Text2 from "./Text2"

const Home = () => {
    const [counter, setCounter] = useState(0)
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const backgrounds = ['newyork.jpg', 'london.jpg', 'syndey.jpg', 'losangeles.jpg']

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter + 1) % backgrounds.length);
        }, 4000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [backgrounds.length]);
    useEffect(() => {
        setShowText1(backgrounds[counter] === 'newyork.jpg' || backgrounds[counter] === 'syndey.jpg');
    }, [counter, backgrounds]);
    useEffect(() => {
        setShowText2(backgrounds[counter] === 'london.jpg' || backgrounds[counter] === 'losangeles.jpg');
    }, [counter, backgrounds]);
    return (
        <div className="main">
            <NavBar />
            <div>

                <div className={"hero"} style={{
                    backgroundImage: "url(newyork.jpg)",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    opacity: backgrounds[counter] == 'newyork.jpg' ? "1" : "0",
                    transition: "opacity 2000ms ease-in-out"
                }}>
                    {
                        showText1 && (
                            <div style={{ marginTop: '18%' }}>
                                <Text />
                            </div>
                        )
                    }
                </div>

                <div className={"hero"} style={{
                    backgroundImage: "url(london.jpg)",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    opacity: backgrounds[counter] == 'london.jpg' ? "1" : "0",
                    transition: "opacity 2000ms ease-in-out"
                }}>

                    {
                        showText2 && (
                            <div style={{ marginTop: '18%' }}>
                                <Text2 />
                            </div>
                        )
                    }

                </div>



                <div className={"hero"} style={{
                    backgroundImage: "url(syndey.jpg)", 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', 
                    opacity: backgrounds[counter] == 'syndey.jpg' ? "1" : "0",
                    transition: "opacity 2000ms ease-in-out"
                }}>

                    {
                        showText1 && (
                            <div style={{ marginTop: '18%' }}>
                                <Text />
                            </div>
                        )
                    }
                </div>




                <div className={"hero"} style={{
                    backgroundImage: "url(losangeles.jpg)", 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', 
                    opacity: backgrounds[counter] == 'losangeles.jpg' ? "1" : "0",
                    transition: "opacity 2000ms ease-in-out"
                }}>

                    {
                        showText2 && (
                            <div style={{ marginTop: '18%' }}>
                                <Text2 />
                            </div>
                        )
                    }

                </div>




            </div>
            <div className="whats__new">
                <CardList />
            </div>
        </div >
    )
}

export default Home