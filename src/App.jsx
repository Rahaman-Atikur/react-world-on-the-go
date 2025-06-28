import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries/'
const countriesPromise = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Countries></Countries>
      </Suspense>

    </>
  )
}
export default App
