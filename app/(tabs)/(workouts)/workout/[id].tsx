import { Link, Stack, useLocalSearchParams, router } from 'expo-router'
import { ScrollView, Text } from 'react-native'
import Exercise from '../../../components/Exercise'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Workout() {
  const params = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          title: params.title as string,
          headerRight: () => (
            <Link href="workout/modal">
              <Text className="font-medium text-[#66CD7C]">Iniciar</Text>
            </Link>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={'#66CD7C'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-[#11141B] px-4 py-4"
      >
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </ScrollView>
    </>
  )
}