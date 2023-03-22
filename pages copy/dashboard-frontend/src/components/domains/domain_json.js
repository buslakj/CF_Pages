import React, { useState } from 'react';
import "./domain.css";



function RankedList() {
  const [domains, setDomains] = useState([]);

  const url = 'https://worker_tutorial.kassidybuslach.workers.dev/popular'
 
    fetch(url)
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
      throw response;
    }).then((data) => {
      const sortedData = data.rankingEntries.sort((a, b) => a.rank - b.rank)
      setDomains(sortedData)
    })
    .catch((error) => {
    console.error("Error fetching data: ", error);
    })
  


    return (
      <div >
         <h2 className='title'> Most Popular Domains</h2>
        <h4 className='title'> Rank change constitutes the change over the past 30 days</h4>
        <ol className="center">
        {domains.map((entry) => (
          <li className="center" key={entry.rank}>
            <strong>{entry.domain}</strong> ({entry.category}), Rank change: {entry.rankChange}
          </li>
        ))}
      </ol>
      </div>
    );
  }
  


  
  export default RankedList;