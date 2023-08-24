import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import Exercise from '../../../components/Exercise'

export default function Workout() {
  const params = useLocalSearchParams()

  return (
    <View className="flex-1 px-6 py-6">
      <Stack.Screen options={{ title: params.title as string }} />
      <Text className="text-4xl font-bold text-gray-700">
        {' '}
        Workout {params.id} {params.title}
      </Text>
      <Exercise />
    </View>
  )
}
