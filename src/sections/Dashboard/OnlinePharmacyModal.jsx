import React from 'react'
import { TiClipboard, TiTickOutline, TiTimesOutline } from 'react-icons/ti'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const OnlinePharmacyModal = () => {
  const showOnlinePharmacyModal = registerationStore(state => state.showOnlinePharmacyModal)
  const setShowOnlinePharmacyModal = registerationStore(state => state.setShowOnlinePharmacyModal)
  const userInfo = registerationStore(state => state.userInfo)
  const { t } = useTranslation()

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }
  return (
    <Modal
      key="Online Pharmacy"
      title={t('Online Pharmacy')}
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
                href="https://www.medzy.ca/mdhub?lang=en&utm_source=mdhub&utm_medium=partners&utm_campaign=website_leads"
                target="_blank"
                className="flex justify-center items-center text-xl gap-x-3"
              >
                <TiTickOutline />
                <span>
                  {t('i-have-a-prescription')}
                </span>
              </a>
            </button>
            <p className="px-8">
              {t('click-here-to-upload-your-prescription-and-sign-up-for-online-delivery')}
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
                  {t('i-need-a-prescription')}
                </span>
              </a>
            </button>
            <p className="px-8">
              {t('click-here-to-speak-with-a-doctor-now-to-get-your-prescription')}
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
      </section>
    </Modal>
  )
}

export default OnlinePharmacyModal
