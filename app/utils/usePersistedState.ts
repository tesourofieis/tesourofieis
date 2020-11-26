import { useState, useEffect } from 'react'

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    if (process.browser) {
      const storageValue = localStorage.getItem(key)

      if (storageValue) {
        return JSON.parse(storageValue)
      }
    } else {
      return initialState
    }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

export default usePersistedState
