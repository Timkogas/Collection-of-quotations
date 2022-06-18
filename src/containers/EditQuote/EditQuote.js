import './EditQuote.css'
import EditQuoteForm from '../../components/EditQuoteForm/EditQuoteForm';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Preloader from '../../UI/Preloader/Preloader'
import { useNavigate, useParams } from 'react-router-dom';

const baseUrl = 'https://js-8-timur-ermolaev-default-rtdb.firebaseio.com/quotes/'

function EditQuote() {
  const params = useParams()
  const [selectValue, setSelectValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState({})

  useEffect (()=>{
    const fetchPost = async () => {
      setLoading(true)
      await axios.get(baseUrl + params.id +'.json')
        .then((response)=>{
          setSelectValue(response.data.category)
          setInputValue(response.data.author)
          setTextAreaValue(response.data.text)
          setQuote(response.data)
        })
      setLoading(false)
    }
    fetchPost()
  }, [params])


  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const textAreaChangeHandler = (e) => {
    setTextAreaValue(e.target.value)
  }

  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value)
  }


  const navigate = useNavigate();

  const EditQuote = async (e) => {
    setLoading(true)
    e.preventDefault();
    await axios.put(baseUrl + params.id+ '.json', {author: inputValue, category: selectValue, text: textAreaValue})
    navigate(`/quotes/${selectValue}`);
    setLoading(false)
  }

  return (
    <>
      <Preloader showPlaceholder={loading}/>
      <EditQuoteForm
         EditQuote={(e)=>{EditQuote(e)}}
         textAreaValue={textAreaValue}
         selectValue={selectValue}
         inputValue={inputValue}
         textAreaChangeHandler={(e)=>{textAreaChangeHandler(e)}}
         inputChangeHandler={(e)=>{inputChangeHandler(e)}}
         selectChangeHandler={(e)=>{selectChangeHandler(e)}}
      />
    </>
  );
}

export default EditQuote;