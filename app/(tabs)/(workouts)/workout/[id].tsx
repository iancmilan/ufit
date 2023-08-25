import { Stack, useLocalSearchParams } from 'expo-router'
import { ScrollView } from 'react-native'
import Exercise from '../../../components/Exercise'

export default function Workout() {
  const params = useLocalSearchParams()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#11141B] px-6 py-4"
    >
      <Stack.Screen options={{ title: params.title as string }} />
      <Exercise />
      <Exercise />
      <Exercise />
      <Exercise />
    </ScrollView>
  )
}
