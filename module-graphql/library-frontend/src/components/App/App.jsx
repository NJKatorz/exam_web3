import { useState } from 'react'
import './App.css'
import Authors from 'components/Authors/Authors'
import Books from 'components/Books/Books'
import AddBook from 'components/AddBook/AddBook'

import {
  ApolloClient,
  ApolloProvider, HttpLink,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
})


function App() {
  const [page, setPage] = useState('authors')
  return (

    <ApolloProvider client={client}>
      <div>
        <div>
          <button onClick={()=> setPage('authors')}> authors </button>
          <button onClick={()=> setPage('books')}> books </button>
          <button onClick={()=> setPage('add')}> add book </button>
        </div>

        <Authors show={page === 'authors'} />
        <Books show={page === 'books'} />
        <AddBook show={page === 'add'} />

      </div>
    </ApolloProvider>

  )
}

export default App
