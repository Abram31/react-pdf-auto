import React from 'react'
import { View } from '@react-pdf/renderer'
import { styles } from './DateKM.styles'
import { dateKMDeliveryData } from '../../../../../../../constants/constants'
import { Row } from '../../../../../Row/Row'


export const DateKM = () => {
    return (
        <View style={styles.wrapper}>
            <Row nameRow={dateKMDeliveryData[0].title} valueRow={dateKMDeliveryData[0].value} />
            <Row nameRow={dateKMDeliveryData[1].title} valueRow={`${dateKMDeliveryData[1].value[0]}, ${dateKMDeliveryData[1].value[1]}`} />
        </View>
    )
}