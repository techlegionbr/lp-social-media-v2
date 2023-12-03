import { useEffect, useState } from "react"


export const useFormPopup = () => {
  const [showFormPopup, setShowFormPopup] = useState(false)
  const [rounds, setRounds] = useState(1)
  const handleShowFormPopupToggle = () => setShowFormPopup(prevShow => !prevShow)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showFormPopup) {
        setShowFormPopup(true)
        setRounds(prevRounds => prevRounds + 1)
      }

    }, rounds * 10000)

    return () => clearInterval(interval)
  }, [])

  return {
    showFormPopup,
    handleShowFormPopupToggle
  }
}
