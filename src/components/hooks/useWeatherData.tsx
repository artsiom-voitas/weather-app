import { useEffect, useState } from 'react'
import { OWM_API_KEY, OWM_API_URL } from '../../api/openweathermap'

type UseWeatherData = [data: object, isLoaded: boolean]

function useWeatherData(): UseWeatherData {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()
  const [data, setData] = useState<object>({})
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
      if (latitude && longitude !== 0) {
        await fetch(
          `${OWM_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${OWM_API_KEY}`,
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result)
          })
          setTimeout(() => {
            setIsLoaded(true)
          }, 500)
      }
    }
    fetchWeather()

  }, [latitude, longitude])
  return [data, isLoaded]
}

export default useWeatherData
