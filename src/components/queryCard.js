import React from 'react'
import '../assets/css/queryPage.css';


const QueryCard = ({ questionData }) => {
    const { question, tags, stars, timestamp } = questionData;

    // Function to render stars based on the number of likes
    const renderStars = () => {
        const starArray = [];
        for (let i = 0; i < stars; i++) {
            starArray.push(<span key={i}>★</span>);
        }
        return starArray;
    };

    return (
        <div>
            
        <div className='box' style={{ border: '0.2vh solid #ccc', padding: '2vh', margin: '2vh', borderRadius: '1vh',height:'20vh'}}>
            
            <div className='content'>
            <p>Tags: {tags.join(', ')}</p>
            <h2>{question}</h2>
            
            <p>Stars: {renderStars()}</p>
            <p>Timestamp: {timestamp.toLocaleString()}</p>
            </div>
        </div>
        </div>
    );
}

export default QueryCard;
