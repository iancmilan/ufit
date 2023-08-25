import { Link } from 'expo-router'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface WorkoutProps {
  title: string
  desc: string
  id: number
}

export default function Workout({ title, desc, id }: WorkoutProps) {
  return (
    <Link href={{ pathname: '/workout/[id]', params: { id, title } }} asChild>
      <TouchableOpacity className="mb-5 rounded-md bg-[#2C2E33] px-4 py-4">
        <Text className="text-lg font-bold text-[#fefefe]">{title}</Text>
        <Text className="text-base text-white/40" numberOfLines={2}>
          {desc}
        </Text>
      </TouchableOpacity>
    </Link>
  )
}
