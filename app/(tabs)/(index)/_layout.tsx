import { Stack } from 'expo-router'

export default function IndexLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
    </Stack>
  )
}
