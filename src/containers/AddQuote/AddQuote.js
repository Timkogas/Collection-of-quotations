import './AddQuote.css'
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm';
import { useState } from 'react'
import axios from 'axios';
import Preloader from '../../UI/Preloader/Preloader'
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://js-8-timur-ermolaev-default-rtdb.firebaseio.com/quotes/'

function AddQuote() {
  const [selectValue, setSelectValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [loading, setLoading] = useState(false)

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value)
  }

  const textAreaChangeHandler = (e) => {
    setTextAreaValue(e.target.value)
  }

  const navigate = useNavigate();

  const AddQuote = async (e) => {
    setLoading(true)
    e.preventDefault();
    await axios.post(baseUrl + '.json', {author: inputValue, category: selectValue, text: textAreaValue})
    navigate(`/quotes/${selectValue}`);
    setLoading(false)
  }

  return (
    <>
      <Preloader showPlaceholder={loading}/>
      <AddQuoteForm
        AddQuote={(e)=>{AddQuote(e)}}
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

export default AddQuote;
