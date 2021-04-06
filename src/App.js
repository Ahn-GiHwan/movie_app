import axios from 'axios'
import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [list, setList] = useState([])

  const getData = () => {
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(res => {
        setList(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ItemList item={list} />
  );
}

export default App;
