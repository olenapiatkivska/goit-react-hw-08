import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/contacts/selectors';
import { fetchContacts } from './redux/contacts/operations';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        {loading && !error && <b>Request in progress...</b>}
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
