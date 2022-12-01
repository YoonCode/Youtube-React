import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/SearchHeader'
import { YoutubeApiProvider } from './context/YoutubeApiContext'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  )
}

export default App
