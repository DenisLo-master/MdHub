import { create } from 'zustand'

export const registerationStore = create((set) => ({
  formStep: 0,
  increaseFormStep: () => set((state) => ({ formStep: state.formStep + 1 })),
  decreaseFormStep: () => set((state) => ({ formStep: state.formStep - 1 })),
  registerationFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Canada'
  },
  handleRegisterationFormDataChange: (name, value) => set((state) => ({ registerationFormData: { ...state.registerationFormData, [name]: value } })),
  clearRegisterationFormData: () => set({
    formStep: 0,
    registerationFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      country: 'Canada'
    }
  })
}))