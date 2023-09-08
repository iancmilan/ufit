import { View } from 'react-native'
import Workout from '../../components/Workout'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface Exercise {
  id: number
  name: string
}

interface Workout {
  id: string
  title: string
  exercises: Exercise[]
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  async function loadWorkouts() {
    const response = await api.get('/workouts?_embed=exercises')
    setWorkouts(response.data)
    console.log(workouts)
  }

  useEffect(() => {
    loadWorkouts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View className="flex-1 items-center bg-[#11141B] px-6 py-6">
      <Workout
        id={1}
        title="Push"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
      <Workout
        id={2}
        title="Pull"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
      <Workout
        id={3}
        title="Legs"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae autem cupiditate voluptatum, assumenda ullam eius, impedit amet facere ipsam temporibus soluta hic aliquam maiores blanditiis. Saepe corporis temporibus ducimus."
      />
    </View>
  )
}
