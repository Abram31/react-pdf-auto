import { View } from '@react-pdf/renderer'
import React from 'react'
import { AgreedPrice } from './AgreedPrice/AgreedPrice'
import {styles} from './RentDeposit.module'
import { SecurityDeposit } from './SecurityDeposit/SecurityDeposit'
import { TotalKM } from './TotalKM/TotalKM'



export const RentDeposit = () => {
    return (
    <View style={styles.wrapper}>
        <SecurityDeposit />
        <AgreedPrice />
        <TotalKM />
    </View>)
}
