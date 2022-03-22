import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';
import axios from 'axios';

 const App = () => {
  const [data,setData] =useState([]);
   useEffect(() =>{
     axios.get('https://jsonplaceholder.typicode.com/todos').then(
      response => setData(response.data)
    )
  },[])
  return (
    <div className="App">
    {data.map(item => <li key={item.id}>{item.title}</li>)}
     </div>
  )
}

export default App;