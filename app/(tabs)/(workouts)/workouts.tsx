import { View, ActivityIndicator } from 'react-native'
import Workout from '../../components/Workout'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface Exercise {
  id: number
  name: string
}

interface Workout {
  id: number
  title: string
  exercises: Exercise[]
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadWorkouts() {
    try {
      setIsLoading(true)
      const response = await api.get('/workouts?_embed=exercises')
      setWorkouts(response.data)
      // console.log(JSON.stringify(workouts, null, 3))
    } catch (err) {
      console.log(JSON.stringify(err))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadWorkouts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View className="flex-1 items-center bg-[#11141B] px-6 py-6">
      {isLoading && <ActivityIndicator size="large" color="#66CD7C" />}
      {workouts.map((workout) => {
        return (
          <Workout
            key={workout.id}
            id={workout.id}
            title={workout.title}
            desc={workout.exercises.map((exercise) => exercise.name).join(', ')}
          />
        )
      })}
    </View>
  )
}
