import React from 'react'
import { TiTickOutline, TiTimesOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'

const LabTestingModal = () => {
  const showLabTestingModal = registerationStore(state => state.showLabTestingModal)
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  return (
    <Modal
      key="Lab Testing Modal"
      title="Medical Laboratory"
      showModal={showLabTestingModal}
      setShowModal={setShowLabTestingModal}
    >
      <div className="flex justify-around">
        <button className="w-full text-center bg-primary text-white max-w-[330px] py-3 rounded-3xl">
          <Link to="/services/medical-laboratory" className="flex justify-center items-center text-xl gap-x-3">
            <TiTickOutline /><span>I have requisition</span>
          </Link>
        </button>
        <button className="w-full  text-center bg-primary text-white max-w-[330px] py-3 rounded-3xl">
          <a className="flex justify-center items-center text-xl gap-x-3" href="https://www.mdhub.ca/virtual-doctors/" target="_blank">
            <TiTimesOutline /><span>I need a requisition</span>
          </a>
        </button>
      </div>
    </Modal>
  )
}

export default LabTestingModal