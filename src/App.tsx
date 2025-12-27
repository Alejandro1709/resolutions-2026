import { useState } from 'react'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import CustomRadio from './components/CustomRadio'

function App() {
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const handleChangePicker = (value: string = 'other') => {
    if (category) {
      setCategory('')
      return
    }

    setCategory(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (input === '') return

    console.log({ input, category })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        input={input}
        category={category}
        onInputChange={setInput}
        onPickerChange={handleChangePicker}
        onSubmit={handleSubmit}
      />

      <main className="flex flex-col gap-6 max-w-4xl mx-auto">
        {/* List */}
        <div className="flex flex-col gap-4 px-4">
          <div className="flex gap-4 bg-white border border-slate-100 p-4 rounded shadow">
            {/* Custom Radio Input */}
            <CustomRadio />

            <div className="flex flex-col">
              <h2 className="text-md">💰 Finance</h2>
              <p className="text-lg font-medium">Earn more money</p>
            </div>

            <button className="ml-auto">Del</button>
          </div>
        </div>

        <ProgressBar progress={55} />
      </main>
    </div>
  )
}

export default App
