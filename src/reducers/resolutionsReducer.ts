import type { Category, Resolution } from '../types/resolution'

interface ResolutionState {
  resolutions: Resolution[]
}

export type ResolutionAction =
  | { type: 'ADD_RESOLUTION'; payload: { title: string; category: Category } }
  | { type: 'TOGGLE_RESOLUTION'; payload: Resolution['id'] }
  | { type: 'DELETE_RESOLUTION'; payload: Resolution['id'] }

export const getResolutionsInitialState = (): ResolutionState => {
  const localStorageState = localStorage.getItem('resolutionState')

  if (!localStorageState) {
    return {
      resolutions: [],
    }
  }

  return JSON.parse(localStorageState)
}

export const resolutionsReducer = (
  state: ResolutionState,
  action: ResolutionAction
): ResolutionState => {
  switch (action.type) {
    case 'ADD_RESOLUTION': {
      const newResolution: Resolution = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        category: action.payload.category,
        completed: false,
        createdAt: new Date(),
      }

      return {
        ...state,
        resolutions: [...state.resolutions, newResolution],
      }
    }

    case 'TOGGLE_RESOLUTION': {
      const updatedResolutions = state.resolutions.map((resolution) =>
        resolution.id === action.payload
          ? { ...resolution, completed: !resolution.completed }
          : resolution
      )

      return {
        ...state,
        resolutions: updatedResolutions,
      }
    }

    case 'DELETE_RESOLUTION': {
      const updatedResolutions = state.resolutions.filter(
        (resolution) => resolution.id !== action.payload
      )

      return {
        ...state,
        resolutions: updatedResolutions,
      }
    }

    default:
      return state
  }
}
