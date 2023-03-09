import React, { useState } from 'react'
import Select from 'react-select'
import { BiCaretDown } from 'react-icons/bi'
import { nursingServices, homecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'
import LabRequisitionForm from '../../components/LabRequisitionForm'

const options = [
  {
    label: 'Nursing Services',
    options: nursingServices.map(item => (
      { value: item, label: item }
    ))
  },
  {
    label: 'Homecare Services',
    options: homecareServices.map(item => (
      { value: item, label: item }
    ))
  }
]

const nursingServicesData = nursingServices.map(item => (
  { value: item, label: item }
))

const homecareServicesData = homecareServices.map(item => (
  { value: item, label: item }
))

const NursingAppointmentStepOne = ({ customNursingService, updateFields }) => {
  const [reqNeeded, setReqNeeded] = useState(false)
  const setNursingAppointmentBill = registerationStore(state => state.setNursingAppointmentBill)
  const selectedNursingHomecareOptions = registerationStore(state => state.selectedNursingHomecareOptions)
  const setSelectedNursingHomecareOptions = registerationStore(state => state.setSelectedNursingHomecareOptions)

  const handleSelect = (selectedOption) => {
    setSelectedNursingHomecareOptions(selectedOption);

    const nursingSelected = selectedOption.some(option =>
      options[0].options.some(o => o.value === option.value)
    );

    const homecareSelected = selectedOption.some(option =>
      options[1].options.some(o => o.value === option.value)
    );


    if (nursingSelected && homecareSelected) {
      setNursingAppointmentBill(99);
    } else if (nursingSelected) {
      setNursingAppointmentBill(99);
    } else if (homecareSelected) {
      setNursingAppointmentBill(59.99);
    } else {
      setNursingAppointmentBill(null);
    }
  }

  return (
    <div>
      <div className="text-lg">
        <p className="text-xl pb-4">Please select the services of your need.</p>
        <div className="space-y-3">
          <Select
            value={selectedNursingHomecareOptions}
            onChange={handleSelect}
            options={options}
            isMulti
            placeholder="Select services"
          />
        </div>
        <div className="py-4">
          <textarea
            className="w-full h-28 p-4 outline-none focus:ring-2 ring-primary rounded-3xl border-2"
            placeholder="Can’t find the service you are looking for? Please describe the service in the field."
            value={customNursingService}
            onChange={(e) => updateFields({ customNursingService: e.target.value })}
          />
        </div>
        <div className="py-4">
          <input
            className="mr-4"
            id="labReq"
            type="checkbox"
            checked={reqNeeded}
            value={reqNeeded}
            onChange={() => setReqNeeded(!reqNeeded)}
          />
          <label htmlFor="labReq">
            OPTIONAL: Upload Requisition if needed
          </label>
        </div>
      </div>
      {
        reqNeeded && <LabRequisitionForm hideForm={() => setReqNeeded(false)} />
      }
    </div>
  )
}

export default NursingAppointmentStepOne