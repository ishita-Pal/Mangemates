import React from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import "./Graph.css";

// Register the CategoryScale
Chart.register(CategoryScale);

const Graph = () => {
    const state = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Students placed",
                backgroundColor: "rgba(75, 192, 192, 1)",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 2,
                data: [65, 90, 89, 102, 123]
            }
        ]
    }

    return (
        <div className='pgg' style={{
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0O8TC_Jk8y_I_Sb_BIeis7ts5vGBXTctSw&usqp=CAU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundColor: 'transparent !important', // Override Tailwind CSS
            color: 'black',
            transition: 'background-image 0.3s', // Add a smooth transition
            '&:hover': {
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0O8TC_Jk8y_I_Sb_BIeis7ts5vGBXTctSw&usqp=CAU")', // Change the background on hover
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4.6px)',
            border: '1px solid rgba(255, 255, 255, 0.94)',
            }
          }}>
              <p className='txt'>Your performance chart</p>
            <div className='gph'>
                <Bar data={state} className='gphe' />
                <p>Bar Chart</p>
            </div>
        </div>
    )
}

export default Graph;
