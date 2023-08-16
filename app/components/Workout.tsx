import { Text, View } from 'react-native'

interface WorkoutProps {
  title: string
  desc: string
}

export default function Workout({ title, desc }: WorkoutProps) {
  return (
    <View className="mb-5 rounded-md bg-gray-400 px-4 py-4">
      <Text className="text-lg font-bold text-white">{title}</Text>
      <Text className="text-base text-white/40" numberOfLines={2}>
        {desc}
      </Text>
    </View>
  )
}
