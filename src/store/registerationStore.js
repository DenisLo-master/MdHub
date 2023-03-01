import { create } from 'zustand'

const clearFormsObject = {
  formStep: 0,
  childForms: [],
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
    country: 'Canada',
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCvc: ''
  },
}

const initialRegistrationFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  country: 'Canada',
  dateOfBirth: new Date(),
  gender: "male"
}

const initialUserInfoData = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isChildUser: "",
  address: "",
  city: "",
  province: "",
  postalCode: "",
  paymentMode: "",
  accountType: '',
  loginCode: '',
  childAccounts: [],
}

export const registerationStore = create((set) => ({
  formStep: 0,
  selectedAccountType: 'individual',
  paymentMode: "yearly",
  individualYearlyFee: '24.99',
  individualMonthlyFee: '34.99',
  familyMonthlyFee: "54.99",
  familyYearlyFee: "44.99",
  selectedNursingOptions: [],
  selectedHomecareOptions: [],
  setSelectedNursingOptions: (list) => set({ selectedNursingOptions: list }),
  setSelectedHomecareOptions: (list) => set({ selectedHomecareOptions: list }),
  childForms: [],
  showLabTestingModal: false,
  setShowLabTestingModal: (show) => set((state) => ({ showLabTestingModal: show })),
  showOnlinePharmacyModal: false,
  setShowOnlinePharmacyModal: (show) => set((state) => ({ showOnlinePharmacyModal: show })),
  showNursingModal: false,
  setShowNursingModal: (show) => set((state) => ({ showNursingModal: show })),
  addChildAccount: () => set((state) => ({
    childForms: [...state.childForms, {
      firstName: '', lastName: '', email: '', password: '', phone: '', dateOfBirth: null, gender: "male"
    }]
  })),
  handleChildAccountInputChange: (event, index) => set((state) => {
    const { name, value } = event.target
    const newChildForms = [...state.childForms]
    newChildForms[index] = { ...newChildForms[index], [name]: value };
    return {
      childForms: newChildForms
    }
  }),
  handleRemoveChildForms: (event, index) => set((state) => {
    const newChildForms = [...state.childForms]
    newChildForms.splice(index, 1)
    return {
      childForms: newChildForms
    }
  }),
  userInfo: initialUserInfoData,
  setUserInfo: (userInfoData) => set((state) => ({ userInfo: userInfoData })),
  changeSelectedAccountType: (accountType) => set((state) => ({ selectedAccountType: accountType })),
  increaseFormStep: () => set((state) => ({ formStep: state.formStep + 1 })),
  decreaseFormStep: () => set((state) => ({ formStep: state.formStep - 1 })),
  setPaymentMode: (value) => set((state) => ({ paymentMode: value })),
  registerationFormData: initialRegistrationFormData,
  handleRegisterationFormDataChange: (name, value) => set((state) => ({
    registerationFormData: { ...state.registerationFormData, [name]: value }
  })),
  clearForms: () => set(clearFormsObject)
}))