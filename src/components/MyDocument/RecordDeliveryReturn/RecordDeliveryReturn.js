import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './RecordDeliveryReturn.style'
import { Header } from '../Header/Header'
import { NameAuto } from './NameAuto/NameAuto'
import { Body } from './Body/Body'


export const RecordDeliveryReturn = () => {
    return (
        <Page style={styles.page} size="A4">
            <Header></Header>
            <NameAuto />
            <Body />
        </Page>
    )
}