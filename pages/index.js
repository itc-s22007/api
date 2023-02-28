import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home () {
  const [dogImage, setDogImage] = useState('')
  const [catImage, setCatImage] = useState('')
  const apiUrl = 'https://api.thedogapi.com/v1/images/search'
  const Apiurl = 'https://api.thecatapi.com/v1/images/search'

  useEffect(() => {
    fetchDogImage()
  }, [])

  const fetchDogImage = async () => {
    try {
      const res = await axios.get(apiUrl)
      setDogImage(res.data[0].url)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCatImage()
  }, [])
  const fetchCatImage = async () => {
    try {
      const res = await axios.get(Apiurl)
      setCatImage(res.data[0].url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>The dog only</h1>
      <button onClick={fetchDogImage}>次へ</button>
      {dogImage && <img src={dogImage} alt='dog' />}
      <h1>The cat only</h1>
      <button onClick={fetchCatImage}>次へ</button>
      {catImage && <img src={catImage} alt='cat' />}
    </div>

  )
}
