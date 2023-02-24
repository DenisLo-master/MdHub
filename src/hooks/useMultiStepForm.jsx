import React, { useState } from 'react'
import { registerationStore } from '../store/registerationStore'

export const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const increaseFormStep = registerationStore(state => state.increaseFormStep)
  const decreaseFormStep = registerationStore(state => state.decreaseFormStep)

  const next = () => {
    increaseFormStep()
    setCurrentStepIndex(i => {
      return i + 1
    })
  }

  const back = () => {
    decreaseFormStep()
    setCurrentStepIndex(i => {
      return i - 1
    })
  }

  const goTo = (number) => {
    setCurrentStepIndex(index)
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}
