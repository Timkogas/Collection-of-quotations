import QuotesPage from "./containers/QuotesPage/QuotesPage";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";
import Layout from "./components/Layout/Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout/>}>
            <Route path='/'element={<QuotesPage/>} />
            <Route path='/quotes'element={<QuotesPage/>}/>
            <Route path='/add-quote'element={< AddQuote/>} />
            <Route path='/quotes/:id/edit'element={<EditQuote/>}/>
            <Route path='/quotes/:id'element={<QuotesPage/>} />
          </Route>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
