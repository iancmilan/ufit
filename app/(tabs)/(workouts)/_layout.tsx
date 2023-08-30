import { Stack } from 'expo-router'

export default function WorkoutsLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#2C2E33' },
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name="workouts" options={{ title: 'Treino' }} />
      <Stack.Screen
        name="workout/modal"
        options={{ presentation: 'fullScreenModal', title: 'Treino' }}
      />
    </Stack>
  )
}
