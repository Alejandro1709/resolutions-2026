import { useEffect, useReducer, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import List from './components/List'
import {
  getResolutionsInitialState,
  resolutionsReducer,
} from './reducers/resolutionsReducer'
import type { Category, Resolution } from './types/resolution'

function App() {
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<Category>('other')

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

  const handleCompleteResolution = (id: Resolution['id']) => {
    dispatch({ type: 'TOGGLE_RESOLUTION', payload: id })

    toast.success('Resolution Toggled!')
  }

  const handleRemoveResolution = (id: Resolution['id']) => {
    dispatch({ type: 'DELETE_RESOLUTION', payload: id })

    toast.success('Resolution Removed!')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (input === '' || !category) {
      toast.error('Text or Category missing!')
      return
    }

    dispatch({ type: 'ADD_RESOLUTION', payload: { title: input, category } })

    toast.success('Resolution Added!')

    setInput('')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        input={input}
        category={category}
        onInputChange={setInput}
        onPickerChange={setCategory}
        onSubmit={handleSubmit}
      />

      <main className="flex flex-col gap-6 max-w-4xl mx-auto">
        <List
          resolutions={state.resolutions}
          onCompleteResolution={handleCompleteResolution}
          onRemoveResolution={handleRemoveResolution}
        />

        {completedResolutions > 0 && <ProgressBar progress={percentage} />}
      </main>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
