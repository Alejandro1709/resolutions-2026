import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { categoryConfig, type Resolution } from '../types/resolution'

interface Props {
  resolution: Resolution
  onCompleteResolution: (id: Resolution['id']) => void
  onRemoveResolution: (id: Resolution['id']) => void
}

function ListItem({
  resolution,
  onCompleteResolution,
  onRemoveResolution,
}: Props) {
  const category = categoryConfig[resolution.category]

  return (
    <div className="flex gap-4 bg-white border border-slate-100 p-4 rounded shadow hover:scale-95 transform transition-all">
      <button
        className={`flex justify-center items-center h-8 w-8 ${
          resolution.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'bg-transparent border-slate-200'
        } border-2 rounded-full cursor-pointer`}
        onClick={() => onCompleteResolution(resolution.id)}
      >
        <FaCheck />
      </button>

      <div className="flex flex-col">
        <h2 className="text-md">
          {category.emoji} {category.label}
        </h2>
        <p
          className={`text-lg font-medium ${
            resolution.completed ? 'line-through' : ''
          }`}
        >
          {resolution.title}
        </p>
      </div>

      <button
        className="flex justify-center items-center self-center ml-auto h-8 w-8 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600"
        onClick={() => onRemoveResolution(resolution.id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default ListItem
