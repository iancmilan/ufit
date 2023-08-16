import { View } from 'react-native'
import Workout from '../components/Workout'

export default function Workouts() {
  return (
    <View className="items-cente flex-1 px-6 py-6">
      <Workout
        title="Push"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
      <Workout
        title="Pull"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
      <Workout
        title="Legs"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
    </View>
  )
}
