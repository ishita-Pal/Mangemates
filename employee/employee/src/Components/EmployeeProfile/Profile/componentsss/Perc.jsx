import React from 'react';
import './Perc.css';
// import lastpp from './lastpp.jpeg';
// import lastpp1 from './lastpp1.jpeg';
import profile from "./../../../../assets/profile.jpg"
const Testmony = () => {
  return (
    <React.Fragment>
      <div className="mainn" style={{
        height: '500px',
        width: '1290px',
        backgroundColor:'#e1d3d3',
        alignItems: 'center',
        marginLeft: '0%',
        marginTop: '2%',
        display: 'flex',
        padding: '30px',
        gap:'20px',
        borderRadius: '9px', // corrected spelling
        backgroundImage: `url(${lastpp1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}>
        <div className="c1" style={{
          height: '400px',
          width: '350px',
          backgroundColor: '#C88EA7', 
          backgroundImage: `url(${lastpp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          borderRadius: '9px', // corrected spelling
          marginLeft: '60px',
        }}>
          <div className="cardd">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxx8RPkP9WhXUNDWCi1MJlOLNoWHO3_pFClA&usqp=CAU" className="card-img-top" alt="..." style={{
              height:'170px',
              width: '170px',
              marginLeft: '17%',
              marginTop: '9%',
              borderRadius: '50%', // Make it a circle
              overflow: 'hidden', // Hide any content outside the circle
            }} />
            <div className="card-body">
              <h5 className="card-title" style={{
                fontSize: 'xx-large',
                marginLeft: '10%',
              }}>85% Students Placed</h5>
              <p className="card-text" style={{
                fontSize: 'small',
                marginLeft: '4%',
                padding: '4px',   
              }}>In my experience all the students are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
            </div>
          </div>
        </div>     
        {/* Similar code for other cards */}
      </div>
    </React.Fragment>
  );
}

export default Testmony;
