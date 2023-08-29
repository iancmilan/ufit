import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Modal() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="light" />
      <Text>Olá</Text>
    </View>
  )
}
