import { Card, CardBody, CardHeader, Divider, Image, Spinner } from '@nextui-org/react'
import moment from 'moment'
import { OWM_ICON_URL } from '../api/openweathermap'
import { formatDate } from '../services/formatDate'
import { useWeatherData } from './hooks'

interface WeatherData {
  main?: {
    temp?: number
    feels_like?: number
    temp_min?: number
    temp_max?: number
  }
  sys?: {
    sunrise?: number
    sunset?: number
  }
  weather?: {
    description?: string
    icon?: string
  }[]
  name?: string
  cod?: number | string
}

function WeatherCard() {
  const [data, isLoaded] = useWeatherData()

  const { main, sys, name, weather }: WeatherData = data
  const temp = main?.temp?.toFixed(0)
  const sunrise = sys?.sunrise
  const sunset = sys?.sunset
  const description = weather?.[0].description
  const currentDay: string = moment().format('dddd')
  const currentDate: string = moment().format('LL')
  const icon: string = `${OWM_ICON_URL}/${weather?.[0]?.icon}.png`

  return (
    <main className='flex min-h-screen items-center justify-center font-mono'>
      {isLoaded ? (
        <Card className='min-h-[260px] w-[90%] max-w-[400px] sm:w-full'>
          <CardHeader className='flex items-center justify-between p-3 px-5'>
            <h1 className='text-lg font-bold uppercase'>{name}</h1>
            <div className='text-right font-bold uppercase text-blue-500 opacity-70'>
              <p>{currentDay}</p>
              <p>{currentDate}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className='min-h-[210px] bg-blue-300 px-3 text-white sm:px-5'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-xl font-bold uppercase'>{description}</p>
              <div className='flex flex-col items-end'>
                <Image src={icon} alt='current weather icon' className='rounded-3xl' />
                <p className='text-2xl font-bold'>{temp} °C</p>
              </div>
            </div>
            {sunrise && sunset && (
              <div className='my-auto text-center font-bold'>
                <p className='text-yellow-200'>Sunrise:{formatDate(sunrise)}</p>
                <p className='text-black'>Sunset: {formatDate(sunset)}</p>
              </div>
            )}
          </CardBody>
          <Divider />
        </Card>
      ) : (
        <Spinner />
      )}
    </main>
  )
}

export default WeatherCard
