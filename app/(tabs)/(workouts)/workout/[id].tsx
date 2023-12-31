import {
  // Link,
  Stack,
  useLocalSearchParams,
  router,
} from 'expo-router'
import {
  ScrollView,
  // Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Exercise from '../../../components/Exercise'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

interface Set {
  set: number
  kg: number
  reps: number
  time: number
}

interface Exercise {
  id: number
  name: string
  imgUrl: string
  muscleGroupId: number
  workoutId: number
  exerciseTypeId: number
  sets: Set[]
}

interface Workout {
  id: number
  title: string
  userId: number
  exercises: Exercise[]
}

export default function Workout() {
  const { id, title } = useLocalSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [workout, setWorkout] = useState<Workout | null>(null)

  async function loadWorkout() {
    try {
      setIsLoading(true)
      const response = await api.get(`/workouts/${id}?_embed=exercises`)
      setWorkout(response.data)
    } catch (err) {
      console.log(JSON.stringify(err))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadWorkout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Stack.Screen
        options={{
          title: title as string,
          // headerRight: () => (
          //   <Link
          //     href={{
          //       pathname: '/workout/workoutModal',
          //       params: { id, title },
          //     }}
          //   >
          //     <Text className="font-medium text-[#66CD7C]">Iniciar</Text>
          //   </Link>
          // ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={'#66CD7C'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-[#11141B] px-4 py-4"
      >
        {isLoading && <ActivityIndicator size="large" color="#66CD7C" />}
        {workout &&
          workout.exercises.map((exercise) => {
            return <Exercise key={exercise.id} {...exercise} />
          })}
      </ScrollView>
    </>
  )
}
