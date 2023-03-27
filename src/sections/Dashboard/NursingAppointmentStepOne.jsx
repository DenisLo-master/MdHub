import React, { useState } from 'react'
import Select from 'react-select'
import { nursingServices, homecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'
import LabRequisitionForm from '../../components/LabRequisitionForm'
import { useTranslation } from 'react-i18next'


const NursingAppointmentStepOne = ({ customNursingService, updateFields }) => {
  const [reqNeeded, setReqNeeded] = useState(false)
  const setNursingAppointmentBill = registerationStore(state => state.setNursingAppointmentBill)
  const selectedNursingHomecareOptions = registerationStore(state => state.selectedNursingHomecareOptions)
  const setSelectedNursingHomecareOptions = registerationStore(state => state.setSelectedNursingHomecareOptions)
  const { t } = useTranslation()

  const options = [
    {
      label: t('nursing-services'),
      options: nursingServices.map(item => (
        { value: item, label: t(`${item}`) }
      ))
    },
    {
      label: t('homecare-services'),
      options: homecareServices.map(item => (
        { value: item, label: t(`${item}`) }
      ))
    }
  ]


  const handleSelect = (selectedOption) => {

    setSelectedNursingHomecareOptions(selectedOption);

    const nursingSelected = selectedOption.some(option =>
      options[0].options.some(o => o.value === option.value)
    );

    const homecareSelected = selectedOption.some(option =>
      options[1].options.some(o => o.value === option.value)
    )


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
        <p className="text-xl pb-4">{t('please-select-the-services-of-your-need')}</p>
        <div className="space-y-3">
          <Select
            value={selectedNursingHomecareOptions}
            onChange={handleSelect}
            options={options}
            isMulti
            placeholder={t('select-services')}
          />
        </div>
        <div className="py-4">
          <textarea
            className="w-full h-28 p-4 outline-none focus:ring-2 ring-primary rounded-3xl border-2"
            placeholder={t('cant-find-the-service-you-are-looking-for-please-describe-the-service-in-the-field')}
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
            {t('optional-upload-requisition-if-needed')}
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