import './QuotesPage.css'
import Quotes from '../../components/Quotes/Quotes';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Preloader from '../../UI/Preloader/Preloader'

const baseUrl = 'https://js-8-timur-ermolaev-default-rtdb.firebaseio.com/quotes/'

function QuotesPage() {
  const params = useParams()
  const [quotes, setQuotes] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect (()=>{
    const fetchPost = async () => {
      setLoading(true)
      if (params.id) {
        await axios.get(`${baseUrl}.json?orderBy="category"&equalTo="${params.id}"`)
        .then((response)=>{
          setQuotes(response.data)
        })
      } else {
        await axios.get(baseUrl + '.json')
        .then((response)=>{
          setQuotes(response.data)
        })
      }
      setLoading(false)
    }
    fetchPost()
  }, [params])

  const editQuote = (id) => {

  }

  const deleteQuote = (id) => {

  }


  return (
    <>
    <Preloader showPlaceholder={loading}/>
    <Quotes
      deleteQuote={deleteQuote}
      editQuote={editQuote}
      quotes={quotes}
    />
    </>
  );
}

export default QuotesPage;
