import React, { useState } from 'react'
import Select from 'react-select'
import { BiCaretDown } from 'react-icons/bi'
import { nursingServices, homecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'
import LabRequisitionForm from '../../components/LabRequisitionForm'

const nursingServicesData = nursingServices.map(item => (
  { value: item, label: item }
))

const homecareServicesData = homecareServices.map(item => (
  { value: item, label: item }
))

const NursingAppointmentStepOne = () => {
  const [reqNeeded, setReqNeeded] = useState(false)
  const selectedNursingOptions = registerationStore(state => state.selectedNursingOptions)
  const setSelectedNursingOptions = registerationStore(state => state.setSelectedNursingOptions)
  const selectedHomecareOptions = registerationStore(state => state.selectedHomecareOptions)
  const setSelectedHomecareOptions = registerationStore(state => state.setSelectedHomecareOptions)


  const handleNursingServicesChange = (selectedList) => {
    setSelectedNursingOptions(selectedList);
  };

  const handleHomecareServicesChange = (selectedList) => {
    setSelectedHomecareOptions(selectedList);
  };

  return (
    <div>
      <div>
        <p className="text-xl pb-4">Please select the services of your need.</p>
        <div className="space-y-3">
          <Select
            options={nursingServicesData}
            value={selectedNursingOptions}
            onChange={handleNursingServicesChange}
            isMulti
            placeholder="Select Nursing Services"
          />
          <Select
            options={homecareServicesData}
            value={selectedHomecareOptions}
            onChange={handleHomecareServicesChange}
            isMulti
            placeholder="Select Homecare Services"
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