import { createContext, useContext } from 'react'
import Youtube from '../api/youtube'

export const YoutubeApiContext = createContext()

const youtube = new Youtube()

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}
