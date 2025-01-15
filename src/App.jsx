import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Banner } from './components/Banner';
import { Products } from './components/Products';

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Banner />
      <Products />
    </QueryClientProvider>
  )
}

export default App
