import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../../graphql-queries'

function Books(props) {

  if (!props.show) {
    return null
  }

  const result = useQuery(ALL_BOOKS);
  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>books</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {result.data.allBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.published}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books