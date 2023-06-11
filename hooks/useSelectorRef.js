import { useRef } from 'react'
import { useSelector } from 'react-redux'

export default function useSelectorRef(selector) {
  const original = useSelector(selector)
  const ref = useRef(original)
  ref.current = original

  return ref.current
}
