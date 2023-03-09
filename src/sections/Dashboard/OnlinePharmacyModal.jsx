import React from 'react'
import { TiClipboard, TiTickOutline, TiTimesOutline } from 'react-icons/ti'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'

const OnlinePharmacyModal = () => {
  const showOnlinePharmacyModal = registerationStore(state => state.showOnlinePharmacyModal)
  const setShowOnlinePharmacyModal = registerationStore(state => state.setShowOnlinePharmacyModal)
  const userInfo = registerationStore(state => state.userInfo)

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }
  return (
    <Modal
      key="Online Pharmacy"
      title="Online Pharmacy"
      showModal={showOnlinePharmacyModal}
      setShowModal={setShowOnlinePharmacyModal}
    >
      <section>
        <div className="flex justify-around">
          <article className="w-full max-w-[330px] text-dark text-center space-y-4">
            <button
              className="w-full text-center bg-primary text-white py-3 rounded-3xl"
            >
              <a
                href="https://www.medzy.ca/mdhub"
                target="_blank"
                className="flex justify-center items-center text-xl gap-x-3"
              >
                <TiTickOutline />
                <span>
                  I have a prescription
                </span>
              </a>
            </button>
            <p className="px-8">
              Click here to upload your prescription and sign up for online delivery.
            </p>
          </article>

          <article className="w-full max-w-[330px] text-dark text-center space-y-4">
            <button
              className="w-full text-center bg-primary text-white py-3 rounded-3xl"
            >
              <a
                className="flex justify-center items-center text-xl gap-x-3"
                href="https://www.getmaple.ca/mdhub"
                target="_blank"
              >
                <TiTimesOutline />
                <span>
                  I need a prescription
                </span>
              </a>
            </button>
            <p className="px-8">
              Click here to speak with a doctor now to get your prescription.
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

export default OnlinePharmacyModal
