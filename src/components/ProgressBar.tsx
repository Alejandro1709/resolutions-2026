interface Props {
  progress: number
}

function ProgressBar({ progress }: Props) {
  return (
    <div className="relative bg-slate-100 h-6 rounded overflow-hidden">
      <div className="absolute flex justify-end items-center pr-2 bg-[#FF5656] h-full w-96">
        <span className="font-bold text-white text-sm text-center">
          {progress}%
        </span>
      </div>
    </div>
  )
}

export default ProgressBar
