import React from 'react'
import { View } from '@react-pdf/renderer'
import { styles } from './DateKM.styles'
import { Row } from '../../../../../Row/Row'


export const DateKM = ({ dateKMData, returnFlag }) => {
    return (
        <View style={styles.wrapper}>
            <Row nameRow={dateKMData[0].title} valueRow={dateKMData[0].value} />
            <Row nameRow={dateKMData[1].title} valueRow={`${dateKMData[1].value[0]}, ${dateKMData[1].value[1]}`} />
            {returnFlag && <Row nameRow={dateKMData[2].title} valueRow={`${dateKMData[2].value}`} />}
        </View>
    )
}