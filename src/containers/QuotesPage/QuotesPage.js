import './QuotesPage.css'
import Quotes from '../../components/Quotes/Quotes';
import { useState, useEffect} from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';

const baseUrl = 'https://js-8-timur-ermolaev-default-rtdb.firebaseio.com/quotes/'

function QuotesPage() {
  const params = useParams()
  const [quotes, setQuotes] = useState({})
  const [loading, setLoading] = useState(false)


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

  const navigate = useNavigate();
  const editQuote = (id) => {
    navigate(`/quotes/${id}/edit`)
  }

  const deleteQuote = async (id) => {
    setLoading(true)
    await axios.delete(baseUrl + id +'.json')
    fetchPost()
    setLoading(false)
  }


  return (
    <>
    <Quotes
      showPlaceholder={loading}
      deleteQuote={deleteQuote}
      editQuote={editQuote}
      quotes={quotes}
    />
    </>
  );
}

export default QuotesPage;
