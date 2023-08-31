import { Link, Stack, useLocalSearchParams, router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import Exercise from '../../../components/Exercise'
import { Ionicons } from '@expo/vector-icons'

export default function Workout() {
  const { id, title } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          title: title as string,
          headerRight: () => (
            <Link href={{ pathname: '/workout/modal', params: { id, title } }}>
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
