import { View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './CardDescription.style'
import { CreditCard } from './CreditCard/CreditCard'
import { DeductibleCharges } from './DeductibleCharges/DeductibleCharges'

export const CardDescription = () => {
    return (
        <View style={styles.wrapper}>
            <CreditCard />
            <DeductibleCharges />
        </View>
    )
}