import { categoryConfig, type Resolution } from '../types/resolution'
import CustomRadio from './CustomRadio'

interface Props {
  resolution: Resolution
}

function ListItem({ resolution }: Props) {
  const category = categoryConfig[resolution.category]

  return (
    <div className="flex gap-4 bg-white border border-slate-100 p-4 rounded shadow">
      {/* Custom Radio Input */}
      <CustomRadio />

      <div className="flex flex-col">
        <h2 className="text-md">
          {category.emoji} {category.label}
        </h2>
        <p className="text-lg font-medium">{resolution.title}</p>
      </div>

      <button className="ml-auto">Del</button>
    </div>
  )
}

export default ListItem
