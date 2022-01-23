import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 
import {Resources} from './components/Resources';
import { QueryClient, QueryClientProvider } from 'react-query';


const overrides ={
  defaultOptions:{
    queries:{
      retry:false,
      refetchOnWindowFoces:false
    }
  }
}

const client = new QueryClient(overrides);


function App() {
  return (
    <QueryClientProvider client={client}>
      <Container>
        <Resources />
      </Container>
    </QueryClientProvider> 
  );
}

export default App;
