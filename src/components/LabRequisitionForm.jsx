import React, { useRef, useState } from 'react'
import toast from "react-hot-toast"
import { useTranslation } from 'react-i18next'
import { registerationStore } from '../store/registerationStore'

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  preferredDate: "",
  preferredTime: ""
}

const LabRequisitionForm = ({ hideForm }) => {
  const [file, setFile] = useState(null)
  const fileRef = useRef(null)
  const [data, setData] = useState(INITIAL_DATA)
  const { t } = useTranslation()

  const [selectedOption, setSelectedOption] = useState(null);
  const diagnosticsFormData = registerationStore(state => state.diagnosticsFormData)
  const changeDiagnosticsFormData = registerationStore(state => state.changeDiagnosticsFormData)
  const uploadFile = registerationStore(state => state.uploadFile)
  const setUploadFile = registerationStore(state => state.setUploadFile)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileInputChange = (event) => {
    console.log(event.target.files)
    setUploadFile(event.target.files[0])
  }

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("firstName", data.firstName)
    formData.append("lastName", data.lastName)
    formData.append("emailAddress", data.emailAddress)
    formData.append("phoneNumber", data.phoneNumber)

    try {
      const response = await fetch("https://mdhub-server.onrender.com/sendmail", {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        toast.success("Your form has been uploaded, you can continue booking", {
          id: "success booking"
        })
        hideForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-main">
        {t('laboratory-request-form')}
      </h2>
      <div className="w-full py-10 space-y-2">
        <div className="flex space-x-8">
          <input
            value={diagnosticsFormData.firstName}
            onChange={({ target }) => changeDiagnosticsFormData(target.name, target.value)}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="firstName"
            placeholder={t('first-name-0')}
          />
          <input
            value={diagnosticsFormData.lastName}
            onChange={({ target }) => changeDiagnosticsFormData(target.name, target.value)}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="lastName"
            placeholder={t('last-name-0')}
          />
        </div>
        <div className="flex space-x-8">
          <input
            value={diagnosticsFormData.emailAddress}
            onChange={({ target }) => changeDiagnosticsFormData(target.name, target.value)}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="email"
            name="emailAddress"
            placeholder={t('email-address')}
          />
          <input
            value={diagnosticsFormData.phoneNumber}
            onChange={({ target }) => changeDiagnosticsFormData(target.name, target.value)}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="tel"
            name="phoneNumber"
            placeholder={t('phone-number')}
          />
        </div>

        <div className="flex items-center pt-2">
          <label className="mr-4 font-medium text-gray-700">{t('do-you-currently-have-private-insurance')}</label>
          <div className="inline-flex items-center">
            <input
              checked={selectedOption === "yes"}
              type="radio"
              id="yes"
              name="private_insurance"
              value="yes"
              className="hidden"
              onChange={handleOptionChange}
            />
            <label
              htmlFor="yes"
              className={`inline-block w-4 h-4 rounded-full border-2 border-primary mr-2 ${selectedOption === "yes" ? "bg-primary border-primary" : ""
                }`}
            />
            <span className="text-gray-700 mr-4">{t('yes')}</span>
          </div>
          <div className="inline-flex items-center">
            <input
              checked={selectedOption === "no"}
              type="radio"
              id="no"
              name="private_insurance"
              value="no"
              className="hidden"
              onChange={handleOptionChange}
            />
            <label
              htmlFor="no"
              className={`inline-block w-4 h-4 rounded-full border-2 border-primary mr-2 ${selectedOption === "no" ? "bg-primary border-primary" : ""
                }`}
            />
            <span className="text-gray-700">{t('no')}</span>
          </div>
        </div>

        <div className="flex justify-around flex-wrap space-x-8 pt-4">
          <div className="flex-1 flex space-x-4 text-base font-main">
            <label htmlFor='uploadForm' className={`rounded-full group hover:ring-1 hover:ring-primary  py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}>
              {t('upload-requisition-file')}
            </label>
            <input
              name="file"
              className='hidden'
              id="uploadForm"
              type="file"
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabRequisitionForm
