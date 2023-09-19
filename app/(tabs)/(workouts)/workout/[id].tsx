import { Link, Stack, useLocalSearchParams, router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import Exercise from '../../../components/Exercise'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

interface Exercise {
  id: number
  name: string
  imgUrl: string
  muscleGroupId: number
  workoutId: number
}

interface Workout {
  id: number
  title: string
  userId: number
  exercises: Exercise[]
}

export default function Workout() {
  const { id, title } = useLocalSearchParams()

  const [workout, setWorkout] = useState<Workout | null>(null)

  async function loadWorkout() {
    try {
      const response = await api.get(`/workouts/${id}?_embed=exercises`)
      setWorkout(response.data)
    } catch (err) {
      console.log(JSON.stringify(err))
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
          headerRight: () => (
            <Link href={{ pathname: '/workout/modal', params: { id, title } }}>
              <Text className="font-medium text-[#66CD7C]">Iniciar</Text>
            </Link>
          ),
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
        {workout &&
          workout.exercises.map((exercise) => {
            return <Exercise key={exercise.id} {...exercise} />
          })}
      </ScrollView>
    </>
  )
}
