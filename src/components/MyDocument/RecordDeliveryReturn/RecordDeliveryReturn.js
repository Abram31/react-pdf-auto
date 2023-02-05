import React from 'react'
import { Page } from '@react-pdf/renderer'
import { styles } from './RecordDeliveryReturn.style'
import { Header } from '../Header/Header'
import { NameAuto } from './NameAuto/NameAuto'
import { Body } from './Body/Body'
import { Footer } from '../Footer/Footer'


export const RecordDeliveryReturn = () => {
    return (
        <Page style={styles.page} size="A4">
            <Header></Header>
            <NameAuto />
            <Body />
            <Footer />
        </Page>
    )
}