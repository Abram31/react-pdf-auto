import React from 'react'
import { View } from '@react-pdf/renderer'
import { styles } from './SignaturesDeliveryReturn.styles'
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