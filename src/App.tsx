function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex flex-col space-y-8 max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl md:text-5xl text-center font-semibold">
          New Year's Resolutions 2026
        </h1>

        {/* Form */}
        <form className="flex flex-col space-y-4 p-4 bg-white border border-slate-100 shadow-md">
          <input
            className="bg-white p-2 w-full outline-0"
            type="text"
            placeholder="Earn 20k a year"
          />

          {/* Category Picker */}
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-slate-100 rounded-md p-2 font-medium cursor-pointer hover:bg-slate-200"
              type="button"
            >
              ♥️ Health
            </button>
            <button
              className="bg-slate-100 rounded-md p-2 font-medium cursor-pointer hover:bg-slate-200"
              type="button"
            >
              💰 Finance
            </button>
            <button
              className="bg-slate-100 rounded-md p-2 font-medium cursor-pointer hover:bg-slate-200"
              type="button"
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

      <main className="flex flex-col gap-6 max-w-4xl mx-auto">
        {/* List */}
        <div className="flex flex-col gap-4 px-4">
          <div className="flex gap-4 bg-white border border-slate-100 p-4 rounded shadow">
            {/* Custom Radio Input */}
            <div className="bg-white border-2 border-slate-200 h-8 w-8 rounded-full" />

            <div className="flex flex-col">
              <h2 className="text-md">💰 Finance</h2>
              <p className="text-lg font-medium">Earn more money</p>
            </div>

            <button className="ml-auto">Del</button>
          </div>
        </div>

        {/* ProgressBar */}
        <div className="relative bg-slate-100 h-6 rounded overflow-hidden">
          <div className="absolute flex justify-end items-center pr-2 bg-[#FF5656] h-full w-96">
            <span className="font-bold text-white text-sm text-center">
              55%
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
