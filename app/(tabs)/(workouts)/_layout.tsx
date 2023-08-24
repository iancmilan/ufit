import { Stack } from 'expo-router'

export default function WorkoutsLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="workouts" options={{ title: 'Treino' }} />
    </Stack>
  )
}
