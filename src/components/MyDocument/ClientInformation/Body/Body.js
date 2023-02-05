import { View } from '@react-pdf/renderer'
import React from 'react'
import { Row } from '../../Row/Row'
import { Billing } from './Billing/Billing'
import { styles } from './Body.style'
import { CardDescription } from './CardDescription/CardDescription'
import { CustomerData } from './CustomerData/CustomerData'
import { LicenseDetails1 } from './LicenseDetails1/LicenseDetails1'
import { RentDeposit } from './RentDeposit/RentDeposit'
import { RentTerms } from './RentTerms/RentTerms'
import { Signatures } from './Signatures/Signatures'
import { signaturesData } from '../../../../constants/constants'

export const Body = () => {
    return (
        <View style={styles.body}>
            <RentTerms />
            <RentDeposit />
            <CardDescription />
            <CustomerData />
            <Billing />
            <LicenseDetails1 />
            <View style={styles.line}>
                <Row />
            </View>
            <Signatures signaturesData={signaturesData} />

        </View>
    )
}
