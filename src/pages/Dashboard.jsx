import React from 'react';
import SingleCard from '../components/SingleCard/SingleCard';

import '../styles/Dashboard.css';
import MileCharts from '../components/Charts/MileCharts';
import CarStatsChart from '../components/Charts/CarStatsChart';

import RecommendCarCard from '../components/RecommendCarCard/RecommendCarCard';

import recommendCarsData from '../assets/dummy-data/recommendCars';

const carObj = {
    title: 'Total Cars',
    totalNumber: 750,
    icon: 'ri-police-car-line'
}

const tripObj = {
    title: 'Dayli Trips',
    totalNumber: 450,
    icon: 'ri-steering-2-line'
}

const clientObj = {
    title: "Clients Annualy",
    totalNumber: '85k',
    icon: 'ri-user-line'
}

const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2154,
    icon: 'ri-timer-flash-line'
}

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard item={carObj}/>
                    <SingleCard item={tripObj}/>
                    <SingleCard item={clientObj}/>
                    <SingleCard item={distanceObj}/>
                </div>
                <div className="statics">
                    <div className="stats">
                        <h3 className='stats__title'>Miles Statics</h3>
                        <MileCharts/>
                    </div>
                    <div className="stats">
                        <h3 className='stats__title'>Cars Statics</h3>
                        <CarStatsChart/>
                    </div>
                </div>
                <div className="recommend__cars-wrapper">
                   {
                       recommendCarsData.map(item => <RecommendCarCard item={item} key={item.id}/>)
                   }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;