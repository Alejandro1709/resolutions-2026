import type { Resolution } from '../types/resolution'
import ListItem from './ListItem'

interface Props {
  resolutions: Resolution[]
}

function List({ resolutions }: Props) {
  return (
    <div className="flex flex-col gap-4 px-4">
      {resolutions.map((resolution) => (
        <ListItem key={resolution.id} resolution={resolution} />
      ))}
    </div>
  )
}

export default List
