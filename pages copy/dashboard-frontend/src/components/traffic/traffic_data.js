import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './traffic.css'

function TrafficChart() {
    const [trafficData, setTrafficData] = useState([]);
    const url = 'https://worker_tutorial.kassidybuslach.workers.dev/traffic'

  useEffect(() => {
        fetch(url)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
            throw response;
        }).then((data) => {
            
            let newData = [];
            const timestampKey = 'total/timestamps/'
            const valueKey = 'total/values/'
            const httpKey = 'http/values/'
            let i = 0;
            while (i <= 720){
                newData.push(
                    {timestamp: data["data"]["total"][timestampKey+ i.toString()],
                 value: data["data"]["total"][valueKey+ i.toString()],
                 httpVal: data["data"]["http"][httpKey+ i.toString()] 
                });
                i++;
                };
            setTrafficData(newData)
        })
        .catch((error) => {
        console.error("Error fetching data: ", error);
        })
   
    });
    console.log(trafficData)



    return (
    <div className='chart'>
        <LineChart
          width={1200}
          height={700}
          data={trafficData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className='chart'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="httpVal" stroke="#000000" activeDot={{ r: 8 }} />
         </LineChart>
    </div>
    );
};
export default TrafficChart; 