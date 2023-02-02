import { View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './Body.style'
import { CardDescription } from './CardDescription/CardDescription'
import { RentDeposit } from './RentDeposit/RentDeposit'
import { RentTerms } from './RentTerms/RentTerms'

export const Body = () => {
    return (
        <View style={styles.body}>
            <RentTerms />
            <RentDeposit />
            <CardDescription />
        </View>
    )
}
