import { View } from '@react-pdf/renderer'
import React from 'react'
import { dateKMDeliveryData, dateKMReturnData } from '../../../../constants/constants'
import { styles } from './Body.styles'
import { DeliveryReturn } from './DeliveryReturn/DeliveryReturn'


export const Body = () => {
    return (
        <View style={styles.body}>
            <DeliveryReturn dateKMData={dateKMDeliveryData} title={'VERBALE DI CONSEGNA'} returnFlag={false} />
            <DeliveryReturn dateKMData={dateKMReturnData} title={'VERBALE DI RICONSEGNA'} returnFlag={true} />

        </View>
    )
}
