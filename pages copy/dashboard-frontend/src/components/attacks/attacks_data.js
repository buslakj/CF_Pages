import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './attacks.css';


function AttackChart() {
    const [attackData, setAttackData] = useState([]);

    const url = 'https://worker_tutorial.kassidybuslach.workers.dev/attacks'

    fetch(url)
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
      throw response;
    }).then((data) => {
        setAttackData(data.data)
    })
    .catch((error) => {
    console.error("Error fetching data: ", error);
    })



const timestampKey = 'total/timestamps/'
const valueKey = 'total/values/'
let newData = [];
let i = 0;
while (i <= 719){
    newData.push({timestamp: attackData[ timestampKey + i.toString()],
     value: attackData[valueKey + i.toString()]
    });
    i++;
    };

    return (
    <div className='chart'>
        <LineChart
          width={1200}
          height={700}
          data={newData}
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
          <Line type="monotone" dataKey="value" stroke="#000000" activeDot={{ r: 8 }} />

        </LineChart>
        </div>
    );
  };


export default AttackChart; 