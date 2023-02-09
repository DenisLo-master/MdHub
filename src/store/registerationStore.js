import { create } from 'zustand'

export const registerationStore = create((set) => ({
  formStep: 0,
  selectedAccountType: 'individual',
  changeSelectedAccountType: (accountType) => set((state) => ({ selectedAccountType: accountType })),
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
  firstFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  secondFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  thirdFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  fourthFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  handleRegisterationFormDataChange: (name, value) => set((state) => ({ registerationFormData: { ...state.registerationFormData, [name]: value } })),
  handleFirstFamilyMemberFormDataChange: (name, value) => set((state) => ({ firstFamilyMemberFormData: { ...state.firstFamilyMemberFormData, [name]: value } })),
  handleSecondFamilyMemberFormDataChange: (name, value) => set((state) => ({ secondFamilyMemberFormData: { ...state.secondFamilyMemberFormData, [name]: value } })),
  handleThirdFamilyMemberFormDataChange: (name, value) => set((state) => ({ thirdFamilyMemberFormData: { ...state.thirdFamilyMemberFormData, [name]: value } })),
  handleFourthFamilyMemberFormDataChange: (name, value) => set((state) => ({ fourthFamilyMemberFormData: { ...state.fourthFamilyMemberFormData, [name]: value } })),
  clearForms: () => set({
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
    },
    firstFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    secondFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    thirdFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    fourthFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    }
  })
}))