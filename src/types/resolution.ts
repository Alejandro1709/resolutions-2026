export type Category =
  | 'health'
  | 'career'
  | 'personal'
  | 'financial'
  | 'learning'
  | 'relationships'
  | 'travel'
  | 'other'

export interface Resolution {
  id: string
  title: string
  category: Category
  completed: boolean
  createdAt: Date
  completedAt?: Date
}

export const categoryConfig: Record<
  Category,
  { label: string; emoji: string; color: string }
> = {
  health: { label: 'Health & Fitness', emoji: '💪', color: 'hsl(142 76% 45%)' },
  career: { label: 'Career', emoji: '💼', color: 'hsl(210 90% 60%)' },
  personal: {
    label: 'Personal Growth',
    emoji: '🌱',
    color: 'hsl(280 70% 60%)',
  },
  financial: { label: 'Financial', emoji: '💰', color: 'hsl(45 93% 58%)' },
  learning: { label: 'Learning', emoji: '📚', color: 'hsl(15 85% 60%)' },
  relationships: {
    label: 'Relationships',
    emoji: '❤️',
    color: 'hsl(350 80% 60%)',
  },
  travel: { label: 'Travel', emoji: '✈️', color: 'hsl(45 93% 58%)' },
  other: { label: 'Other', emoji: '🌏', color: 'hsl(210 90% 60%)' },
}
