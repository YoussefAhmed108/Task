import React, { useState } from 'react';
import './CardList.css'; // Import your CSS file for styling
import Card from './Card';

const CardList2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0); // State to control translation
    const [cards, setCards] = useState([
        {
            title: "Firm News 1",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 2",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 3",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 4",
            text: "Another Year - Still 'Most Feared'",
        },
    ])

    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setTranslateX((prevTranslateX) => prevTranslateX - 430);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setTranslateX((prevTranslateX) => prevTranslateX + 430); // Update translation state
    };

    return (
        <div className="carousel-container">
            <div>
                <h2>WHAT’S NEW AT QUINN EMANUEL?</h2>
            </div>
            <div className="carousel" >
                {cards.map((card, index) => (
                    <div className="card" key={index} style={{ transform: `translateX(${translateX}px)` }}>
                        <Card title={card.title} text={card.text} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>
                ❮
            </button>
            <button className="next" onClick={handleNext}>
                ❯
            </button>
        </div>
    );
};

export default CardList2;
