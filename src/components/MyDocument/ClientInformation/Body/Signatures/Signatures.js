import { View } from '@react-pdf/renderer'
import React from 'react'
import { signaturesData } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { styles } from './Signatures.styles'

export const Signatures = () => {
    return (
        <View style={styles.container}>
            {signaturesData.map((data, index) => {
                return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
            })}
        </View>

    )
}