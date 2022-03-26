import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Account from '../components/Account'
import CardNFT from '../components/CardNFT'
import TextBox from '../components/TextBox'
import { data } from '../data/response'
import { style } from '../data/style'

const Donation: FC = () => {
  const { t } = useTranslation()

  // view
  return (
    <div className="max-w-md mx-auto">
      <div className={`${style.contentInterval}`}>
        <Account />
      </div>
      <div className={`${style.contentInterval} pt-0 md:pt-0`}>
        <TextBox
          label={t('donation.to_ukraine')}
          value={data.addressUk}
          disabled={true}
          color={'white'}
        />
      </div>
      <div className={`${style.contentInterval} pt-0 md:pt-0`}>
        <div className="flex flex-wrap -mx-1">
          <CardNFT />
          <CardNFT />
        </div>
      </div>
    </div>
  )
}

export default Donation
