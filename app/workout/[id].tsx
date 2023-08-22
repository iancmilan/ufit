import { router, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Exercise from '../components/Exercise'

export default function Workout() {
  const params = useLocalSearchParams()

  function goBack() {
    router.replace('/workouts')
  }

  return (
    <View className="flex-1 px-6 py-6">
      <Text className="text-4xl font-bold text-gray-700">
        {' '}
        Workout: {params.id}
      </Text>

      <Exercise />

      <TouchableOpacity onPress={goBack}>
        <Text>voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
