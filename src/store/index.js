import { registerationStore } from './registerationStore'

const formStep = registerationStore(state => state.formStep)
const increaseFormStep = registerationStore(state => state.increaseFormStep)
const decreaseFormStep = registerationStore(state => state.decreaseFormStep)
const registerationFormData = registerationStore(state => state.registerationFormData)
const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
const clearRegisterationFormData = registerationStore(state => state.clearRegisterationFormData)
const selectedAccountType = registerationStore(state => state.selectedAccountType)
const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)

export {
  formStep,
  increaseFormStep,
  decreaseFormStep,
  registerationFormData,
  handleRegisterationFormDataChange,
  clearRegisterationFormData,
  selectedAccountType,
  changeSelectedAccountType
}