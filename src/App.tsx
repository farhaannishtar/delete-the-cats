import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className='text-black font-bold'>Delete the Cats</h1>
      </QueryClientProvider>
    </>
  )
}

export default App
