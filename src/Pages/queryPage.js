import React from 'react'
import QueryNavbar from '../components/queryNavbar';
import QueryCard from '../components/queryCard';
import '../assets/css/queryPage.css';


const sampleData = [
    {
        id: 1,
        question: 'How to create a React component?',
        tags: ['React', 'JavaScript', 'Component'],
        stars: 3,
        timestamp: new Date('2023-12-06T12:00:00')
    },
    {
        id: 2,
        question: 'What are the benefits of using Redux?',
        tags: ['React', 'Redux', 'State Management'],
        stars: 5,
        timestamp: new Date('2023-12-05T09:30:00')
    },
    {
        id: 3,
        question: 'How to style components in React?',
        tags: ['React', 'CSS', 'Styling'],
        stars: 2,
        timestamp: new Date('2023-12-04T15:45:00')
    }
];

const QueryPage = () => {
    return (
        <div className='queryPage'>
            
            <h2 className='queryHeading'>Query Corner</h2>

            {/* Search bar */}
            <div className='querySearchBar'>
                <input className='querySearchInput' type='text' />
                <button className='querySearchbtn' type='submit'>Ask a question</button>
            </div>

            <QueryNavbar />
            
            {sampleData.map(item => (
                <QueryCard key={item.id} questionData={item} /> // Pass questionData prop to Card component
            ))}

        </div>
    )
}

export default QueryPage;
