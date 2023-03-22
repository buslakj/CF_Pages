
import './App.css';
import RankedList from './components/domains/domain_json'

import TrafficChart from './components/traffic/traffic_data';
import AttackChart from './components/attacks/attacks_data';


function App() {

  return (
<div className='app'>

  <h1 className="App-header">Kassidy's Cloudflare General Assessment</h1>
  <h2 >Traffic Data over 30 days</h2>
  <TrafficChart></TrafficChart>

  <RankedList></RankedList>

  <h2>Layer 3 DDoS Attack over 30 days</h2>

  <AttackChart></AttackChart>
</div> 
  );
}

export default App;


