import { Page } from '@react-pdf/renderer'
import React from 'react'
import { Header } from '../Header/Header'
import { styles } from './ClientInformation.style'
import { Body } from './Body/Body'

export const ClientInformation = () => {
  return (
      <Page  style={styles.page} size="A4">
          <Header />
          <Body />
      </Page>
  )
}
