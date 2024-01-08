import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../../graphql-queries'

function Authors(props) {

  if (!props.show) {
    return null
  }

  const [name, setName] = useState('')
  const [birthyear, setBirthyear] = useState('')

  const result = useQuery(ALL_AUTHORS);
  const [editAuthor] = useMutation(EDIT_AUTHOR, { refetchQueries: [{ query: ALL_AUTHORS }] })

  if (result.loading) {
    return <div>loading...</div>
  }

  const submit = async (event) => {
    event.preventDefault()
    editAuthor({ variables: { name, setBornTo: parseInt(birthyear) } })
    setName('')
    setBirthyear('')
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Set birthday</h3>
        <form onSubmit={submit}>
          <div>
            name
            <input
              type='text'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            born
            <input
              type="number"
              value={birthyear}
              onChange={({ target }) => setBirthyear(target.value)}
            />
          </div>
          <button>update author</button>
        </form>

    </div>
  )
}

export default Authors