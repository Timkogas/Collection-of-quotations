import './EditQuote.css'
import EditQuoteForm from '../../components/EditQuoteForm/EditQuoteForm';
import { useState } from 'react'
import axios from 'axios';
import Preloader from '../../UI/Preloader/Preloader'
import { useNavigate } from 'react-router-dom';

function EditQuote() {
  const [selectValue, setSelectValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [loading, setLoading] = useState(false)

  const inputChange = (e) => {
    setInputValue(e.target.value)
  }

  const textAreaChange = (e) => {
    setTextAreaValue(e.target.value)
  }

  const navigate = useNavigate();

  const AddQuote = async (e) => {
    setLoading(true)
    e.preventDefault();
    setLoading(false)
  }

  return (
    <>
      <Preloader showPlaceholder={loading}/>
      <EditQuoteForm/>
    </>
  );
}

export default EditQuote;