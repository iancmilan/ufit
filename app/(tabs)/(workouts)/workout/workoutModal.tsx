import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Modal() {
  const { title } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          title: title as string,
          headerRight: () => (
            <TouchableOpacity>
              <Text className="font-medium text-[#66CD7C]">Finalizar</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-down-outline"
                size={24}
                color={'#66CD7C'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView className="flex-1 bg-[#11141B] px-4 py-4">
        <StatusBar style="light" />
      </ScrollView>
    </>
  )
}
