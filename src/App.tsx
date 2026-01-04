import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import List from './components/List'
import type { Category, Resolution } from './types/resolution'
import useResolutions from './hooks/useResolutions'

function App() {
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<Category>('other')

  const { state, percentage, completedResolutions, dispatch } = useResolutions()

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
    setCategory('other')
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

      <main className="flex flex-col gap-6 max-w-4xl mx-auto mb-6">
        <List
          resolutions={state.resolutions}
          onCompleteResolution={handleCompleteResolution}
          onRemoveResolution={handleRemoveResolution}
        />

        <div className="flex flex-col gap-2">
          <ProgressBar progress={percentage} />
          <p className="text-center">
            {completedResolutions} resolutions completed out of{' '}
            {state.resolutions.length}
          </p>
        </div>
      </main>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
