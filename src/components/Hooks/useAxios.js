import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAxios(value) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${value}/popular?api_key=a721dd910292becd0d78ed436463db21&language=en-US&page=1`)
      .then(res => {
        setData(res.data.results)
      })
  }, [value])

  return data
}
