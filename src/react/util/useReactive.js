import { useRef } from "react"
import onChange from 'on-change'
import useForceUpdate from './useForceUpdate'

export default function useReactive (object) {
  const ref = useRef(object),
        forceUpdate = useForceUpdate(),
        reactiveInstance = onChange(ref.current, (path, value) => {
          ref.current = value
          forceUpdate()
        }),
        invoke = (method, args = []) => {
          reactiveInstance[method].bind(reactiveInstance)(...args)
        }

  return [ref, invoke]
}
