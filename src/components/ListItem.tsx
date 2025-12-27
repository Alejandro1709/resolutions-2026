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
    <div className="flex gap-4 bg-white border border-slate-100 p-4 rounded shadow transform transition-all">
      <button
        className={`h-8 w-8 ${
          resolution.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'bg-transparent border-slate-200'
        } border-2 rounded-full`}
        onClick={() => onCompleteResolution(resolution.id)}
      >
        X
      </button>

      <div className="flex flex-col">
        <h2 className="text-md">
          {category.emoji} {category.label}
        </h2>
        <p className="text-lg font-medium">{resolution.title}</p>
      </div>

      <button
        className="ml-auto"
        onClick={() => onRemoveResolution(resolution.id)}
      >
        Del
      </button>
    </div>
  )
}

export default ListItem
