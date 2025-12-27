import { useState } from 'react'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import List from './components/List'
import type { Category, Resolution } from './types/resolution'

const data: Resolution[] = [
  {
    id: '1',
    title: 'Buy a brand new car',
    category: 'personal',
    completed: false,
    createdAt: new Date(),
  },
]

function App() {
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<Category>('other')

  const [resolutions, setResolutions] = useState<Resolution[]>(data)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (input === '' || !category) return

    const newResolution: Resolution = {
      id: '3',
      title: input,
      category,
      completed: false,
      createdAt: new Date(),
    }

    setResolutions([...resolutions, newResolution])

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
        <List resolutions={resolutions} />

        <ProgressBar progress={55} />
      </main>
    </div>
  )
}

export default App
