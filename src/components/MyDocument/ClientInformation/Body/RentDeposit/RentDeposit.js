import { Canvas, Circle, StyleSheet, Svg, View } from '@react-pdf/renderer'
import React from 'react'
import styles from './RentDeposit.module'
import { SecurityDeposit } from './SecurityDeposit/SecurityDeposit'



export const RentDeposit = () => {
    return (
    <View style={styles.wrapper}>
        <SecurityDeposit />
            

    </View>)
}
