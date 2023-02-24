import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { TiClipboard, TiTickOutline, TiTimesOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'

const LabTestingModal = () => {
  const showLabTestingModal = registerationStore(state => state.showLabTestingModal)
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const [hasPrivateInsurance, setHasPrivateInsurance] = useState(false)
  const userInfo = registerationStore(state => state.userInfo)

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }
  return (
    <Modal
      key="Diagnostics"
      title="Diagnostics"
      showModal={showLabTestingModal}
      setShowModal={setShowLabTestingModal}
    >
      <section>
        <div className="flex gap-x-2 md:pl-8 pb-4">
          <input checked={hasPrivateInsurance} type="checkbox" value={hasPrivateInsurance} onChange={({ target }) => setHasPrivateInsurance(target.vaue)} />
          <p>I have private insurance</p>
        </div>
      <div className="flex justify-around">
          <article className="w-full max-w-[330px] text-dark text-center space-y-4">
            <button
              className="w-full text-center bg-primary text-white py-3 rounded-3xl"
            >
              <a
                href="https://www.getmaple.ca/mdhub"
                target="_blank"
                className="flex justify-center items-center text-xl gap-x-3"
              >
                <TiTickOutline />
                <span>
                  I have requisition
                </span>
              </a>
            </button>
            <p className="px-8">
              Click here to upload your requisition and book an appointment with a nurse.
            </p>
          </article>

          <article className="w-full max-w-[330px] text-dark text-center space-y-4">
            <button
              className="w-full text-center bg-primary text-white py-3 rounded-3xl"
            >
              <a
                className="flex justify-center items-center text-xl gap-x-3"
                href="https://www.mdhub.ca/virtual-doctors/"
                target="_blank"
              >
                <TiTimesOutline />
                <span>
                  I need a requisition
                </span>
              </a>
            </button>
            <p className="px-8">
              Click here to speak with a doctor now to get your requisition.
            </p>
            <div className="flex gap-x-2 justify-center">
              <div>
                Your Maple Login Code: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
              <div className="cursor-pointer" onClick={handleCopy}>
                <TiClipboard className="text-2xl" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </Modal>
  )
}

export default LabTestingModal