import { ProviderWrapper as JokesProviderWrapper } from "../contexts/JokeContext";
import App from "../components/App";
import { BrowserRouter as Router } from 'react-router-dom';

const AppLoader = () => {
  return (
    <Router>
      <JokesProviderWrapper >
        <App />
      </JokesProviderWrapper >
    </Router>
  )
}

export default AppLoader;