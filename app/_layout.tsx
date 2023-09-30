import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}
