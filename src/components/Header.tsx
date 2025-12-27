import type { Category } from '../types/resolution'

interface Props {
  title?: string
  input: string
  category: string
  onInputChange: React.Dispatch<React.SetStateAction<string>>
  onPickerChange: (value: Category) => void
  onSubmit: (e: React.FormEvent) => void
}

function Header({
  title = "New Year's Resolutions 2026",
  input,
  category,
  onInputChange,
  onPickerChange,
  onSubmit,
}: Props) {
  return (
    <header className="flex flex-col space-y-8 max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl md:text-5xl text-center font-semibold">
        {title}
      </h1>

      {/* Form */}
      <form
        className="flex flex-col space-y-4 p-4 bg-white border border-slate-100 shadow-md"
        onSubmit={onSubmit}
      >
        <input
          className="bg-white p-2 w-full outline-0"
          type="text"
          placeholder="Earn 20k a year"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
        />

        {/* Category Picker */}
        <div className="flex flex-wrap gap-4">
          <button
            className={`${
              category === 'health'
                ? 'bg-[#FF5656] hover:bg-[#F14747] text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-black'
            } rounded-md p-2 font-medium cursor-pointer`}
            type="button"
            onClick={() => onPickerChange('health')}
          >
            ♥️ Health
          </button>
          <button
            className={`${
              category === 'finance'
                ? 'bg-[#FF5656] hover:bg-[#F14747] text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-black'
            } rounded-md p-2 font-medium cursor-pointer`}
            type="button"
            onClick={() => onPickerChange('financial')}
          >
            💰 Finance
          </button>
          <button
            className={`${
              category === 'travel'
                ? 'bg-[#FF5656] hover:bg-[#F14747] text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-black'
            } rounded-md p-2 font-medium cursor-pointer`}
            type="button"
            onClick={() => onPickerChange('personal')}
          >
            ✈️ Travel
          </button>
        </div>

        <button
          className="bg-[#FF5656] p-2 text-white font-medium rounded-md cursor-pointer hover:bg-[#F14747]"
          type="submit"
        >
          Add Resolution
        </button>
      </form>
    </header>
  )
}

export default Header
