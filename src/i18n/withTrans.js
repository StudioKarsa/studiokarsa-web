import React from 'react'
import i18n from './config'
import { I18nextProvider, withTranslation } from 'react-i18next'

export function withTrans(WrappedComponent) {
  WrappedComponent = withTranslation()(WrappedComponent)
  return props => (
    <I18nextProvider i18n={i18n}>
      <WrappedComponent {...props} language={i18n.language} />
    </I18nextProvider>
  )
}
