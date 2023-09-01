import React from 'react';

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import mileStatisData from '../../assets/dummy-data/mileStatics';

const MileCharts = () => {
    return (
        <ResponsiveContainer width="100%">
            <BarChart data={mileStatisData}>
                <XAxis dataKey="name" stroke='#2884ff'/>
                <Bar dataKey="mileStats" 
                    stroke='#2884ff' 
                    fill='#2884ff'
                    barSize={30}/>
                <Tooltip cursor={false} wrapperClassName="tooltip__style"/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default MileCharts;