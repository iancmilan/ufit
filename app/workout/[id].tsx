import { router, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Workout() {
  const params = useLocalSearchParams()

  function goBack() {
    router.replace('/workouts')
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-bold text-gray-700">
        {' '}
        Workout: {params.id}
      </Text>
      <TouchableOpacity onPress={goBack}>
        <Text>voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
