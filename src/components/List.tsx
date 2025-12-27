import type { Resolution } from '../types/resolution'
import ListItem from './ListItem'

interface Props {
  resolutions: Resolution[]
  onCompleteResolution: (id: Resolution['id']) => void
}

function List({ resolutions, onCompleteResolution }: Props) {
  return (
    <div className="flex flex-col gap-4 px-4">
      {resolutions.map((resolution) => (
        <ListItem
          key={resolution.id}
          resolution={resolution}
          onCompleteResolution={onCompleteResolution}
        />
      ))}
    </div>
  )
}

export default List
