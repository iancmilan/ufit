import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Modal() {
  return (
    <>
      <Stack.Screen
        options={{
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
        <TouchableOpacity
          onPress={() => router.back()}
          className="rounded-md bg-[#66CD7C] p-3"
        >
          <Text className="font-bold text-[#fefefe]">Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}
