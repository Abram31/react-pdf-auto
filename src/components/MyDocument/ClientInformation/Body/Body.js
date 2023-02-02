import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './Body.style'
import { RentDeposit } from './RentDeposit/RentDeposit'
import { RentTerms } from './RentTerms/RentTerms'

export const Body = () => {
    return (
        <View style={styles.page}>
            <RentTerms />
            <RentDeposit />
        </View>
    )
}
