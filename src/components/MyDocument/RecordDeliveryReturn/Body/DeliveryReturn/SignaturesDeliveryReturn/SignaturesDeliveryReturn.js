import React from 'react'
import { Image, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './SignaturesDeliveryReturn.styles'
import { Title } from '../../../../Title/Title'
import { Signatures } from '../../../../ClientInformation/Body/Signatures/Signatures'
import { signaturesData, signaturesDeliveryReturnData } from '../../../../../../constants/constants'


export const SignaturesDeliveryReturn = () => {
    return (
        <View style={styles.wrapper}>
            <Signatures signaturesData={signaturesDeliveryReturnData} />
            <Signatures signaturesData={signaturesData} />
        </View>
    )
}