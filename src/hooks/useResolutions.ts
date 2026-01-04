import { useEffect, useReducer } from 'react'
import {
  getResolutionsInitialState,
  resolutionsReducer,
} from '../reducers/resolutionsReducer'

function useResolutions() {
  const [state, dispatch] = useReducer(
    resolutionsReducer,
    getResolutionsInitialState()
  )

  const completedResolutions = state.resolutions.filter(
    (r) => r.completed
  ).length

  const percentage = (completedResolutions / state.resolutions.length) * 100

  useEffect(() => {
    localStorage.setItem('resolutionState', JSON.stringify(state))
  }, [state])

  return {
    state,
    percentage,
    completedResolutions,
    dispatch,
  }
}

export default useResolutions
