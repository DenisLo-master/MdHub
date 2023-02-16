import React, { useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import Modal from '../../components/Modal'
import { nursingAndHomecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'

const NursingModal = () => {
  const nursingFormRef = useRef(null)
  const showNursingModal = registerationStore(state => state.showNursingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const userInfo = registerationStore(state => state.userInfo)

  const handleNursingFormSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const appointmentFormData = Object.fromEntries(form)
    try {
      const response = await fetch('https://mdhub-backend.onrender.com/api/v1/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentFormData)
      })
      await response.json()
      nursingFormRef.current.reset()
      toast.success("Appointed created successfully", { id: "Appointment" })
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Modal key="Nursing Modal" title="Nursing & Healthcare" showModal={showNursingModal} setShowModal={setShowNursingModal}>
      <section section className="bg-[#F9F9F9] p-6" >
        <p className="text-xl">Fill in the details to get the service of your need.</p>
        <div className="flex gap-x-4 w-full">
          <form ref={nursingFormRef} onSubmit={handleNursingFormSubmit} className="w-full py-10 space-y-2">
            <div className="w-full flex">
              <input
                className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
                type="date"
                name="date"
              />
              <input type="hidden" name="userId" value={userInfo?._id} />
            </div>
            <div className="w-full flex relative">
              <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
              <select name="service" className="flex-1 appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary">
                {
                  nursingAndHomecareServices.map((item, index) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </select>
            </div>
            <div className="w-full flex">
              <textarea placeholder='Additional Info' className="w-full text-lg p-4 h-32 border rounded-lg outline-none focus:ring ring-primary" name="additionalInfo" maxLength="250" />
            </div>
            <div>
              <button
                className={`rounded-full font-main text-lg group hover:ring-1 hover:ring-primary px-12 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section >
    </Modal>
  )
}

export default NursingModal