import React, { useRef } from 'react'
import { http } from '../lib/api'

const apiUrl = "http://ivicontrol2-dvelezrom.pitunnel.com/open"

export const useApp = () => {
  const toastRef = useRef(null)

  const handlePressOpenButton = async () => {
    try {
      const response = await http(apiUrl, { method: 'GET' })
      if (response.status === 200) {
        if (toastRef) {
          toastRef.current.show('Your door is open...!', 5000)
        }
      }
    } catch (err) {
      console.error("ERROR")
      toastRef.current.show('An error ocurred, please use your keys..!', 5000)
    }
  }

  return {
    handlePressOpenButton,
    toastRef,
  }
}