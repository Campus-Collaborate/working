import React from 'react'
import '../assets/css/queryPage.css';
import '../assets/css/queryNavbar.css';

const QueryNavbar = () => {
  return (
    <div className='container'>
        <div className='filter one'>
            <div className='queryNavbtn'>Newest </div>
            <div className='queryNavbtn'>Active </div>
            <div className='queryNavbtn'>Unanswered </div>
            <div className='queryNavbtn'>More </div>
        </div>
        <div className='filter two'>Filter</div>
    </div>

  )
}

export default QueryNavbar;
