import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 
import {Resources} from './components/Resources';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <Container>
        <Resources />
      </Container>
    </QueryClientProvider> 
  );
}

export default App;
