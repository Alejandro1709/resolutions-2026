import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import List from './components/List'
import type { Category, Resolution } from './types/resolution'

function App() {
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<Category>('other')

  const [resolutions, setResolutions] = useState<Resolution[]>(() => {
    const stored = localStorage.getItem('resolutions')
    return stored ? JSON.parse(stored) : []
  })

  const completedResolutions = resolutions.filter((r) => r.completed).length

  const percentage = (completedResolutions / resolutions.length) * 100

  useEffect(() => {
    localStorage.setItem('resolutions', JSON.stringify(resolutions))
  }, [resolutions])

  const handleCompleteResolution = (id: Resolution['id']) => {
    const updatedResolutions = resolutions.map((resolution) =>
      resolution.id === id
        ? { ...resolution, completed: !resolution.completed }
        : resolution
    )

    setResolutions(updatedResolutions)

    toast.success('Resolution Toggled!')
  }

  const handleRemoveResolution = (id: Resolution['id']) => {
    const updatedResolutions = resolutions.filter(
      (resolution) => resolution.id !== id
    )

    setResolutions(updatedResolutions)

    toast.success('Resolution Removed!')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (input === '' || !category) {
      toast.error('Text or Category missing!')
      return
    }

    const newResolution: Resolution = {
      id: crypto.randomUUID(),
      title: input,
      category,
      completed: false,
      createdAt: new Date(),
    }

    setResolutions([...resolutions, newResolution])

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
          resolutions={resolutions}
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
