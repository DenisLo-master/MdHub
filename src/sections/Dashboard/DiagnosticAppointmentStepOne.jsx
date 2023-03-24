import React from 'react'
import { toast } from 'react-hot-toast'
import { TiClipboard, TiTickOutline, TiTimesOutline } from 'react-icons/ti'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const DiagnosticAppointmentStepOne = () => {
  const userInfo = registerationStore(state => state.userInfo)
  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }
  const { t } = useTranslation()
  return (
    <div className="flex justify-around">
      <article className="w-full max-w-[330px] text-dark text-center space-y-4">
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-x-3 text-center bg-primary text-white py-3 rounded-3xl"
        >
          <TiTickOutline />
          <span>
            {t('i-have-requisition')}
          </span>
        </button>
        <p className="px-8">
          {t('click-here-to-upload-your-requisition-and-book-an-appointment-with-a-nurse')}
        </p>
      </article>

      <article className="w-full max-w-[330px] text-dark text-center space-y-4">
        <button
          type="button"
          className="w-full text-center bg-primary text-white py-3 rounded-3xl"
        >
          <a
            className="flex justify-center items-center text-xl gap-x-3"
            href="https://www.mdhub.ca/virtual-doctors/"
            target="_blank"
          >
            <TiTimesOutline />
            <span>
              {t('i-need-a-requisition')}
            </span>
          </a>
        </button>
        <p className="px-8">
          {t('click-here-to-speak-with-a-doctor-now-to-get-your-requisition')}
        </p>
        <div className="flex gap-x-2 justify-center">
          <div>
            {t('your-maple-login-code')}: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
          <div className="cursor-pointer" onClick={handleCopy}>
            <TiClipboard className="text-2xl" />
          </div>
        </div>
      </article>
    </div>
  )
}

export default DiagnosticAppointmentStepOne