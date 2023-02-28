import React, { useState } from 'react'


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
  const [data, setData] = useState(INITIAL_DATA)
  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(file)

  const submitForm = async () => {
    hideForm()
    const formData = new FormData();
    formData.append("reqform", file);
    try {
      const response = await fetch("http://localhost:8080/sendmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phoneNumber,
          preferredData: data.preferredDate,
          preferredTime: data.preferredTime,
          ...formData
        })
      })
      await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-main">
        Laboratory Request Form
      </h2>
      <form className="w-full py-10 space-y-2">
        <div className="flex space-x-8">
          <input
            value={data.firstName}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            value={data.phoneNumber}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>

        <div className="flex space-x-8">
          <input
            value={data.lastName}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <input
            value={data.emailAddress}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="email"
            name="emailAddress"
            placeholder="Email Address"
          />
        </div>

        <div className="flex space-x-8">
          <input
            value={data.preferredDate}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="preferredDate"
            placeholder="Preferred Date (DD/MM/YYY)"
          />
          <input
            value={data.preferredTime}
            onChange={handleChange}
            className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
            type="text"
            name="preferredTime"
            placeholder="Preferred Time"
          />
        </div>

        <div className="flex justify-around flex-wrap space-x-8 pt-4">
          <div className="flex-1 flex space-x-4 text-base font-main">
            <label htmlFor='uploadForm' className={`rounded-full group hover:ring-1 hover:ring-primary  py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}>
              Upload Requisition File
            </label>
            <input
              id="uploadForm"
              type="file"
              className="hidden"
              onChange={handleFileInputChange}
            />
            <button
              onClick={submitForm}
              type="button"
              className={`rounded-full group hover:ring-1 hover:ring-primary  py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
            >
              Submit Form
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LabRequisitionForm