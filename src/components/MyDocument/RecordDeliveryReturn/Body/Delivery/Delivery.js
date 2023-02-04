import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './Delivery.styles'
import { TitleImg } from './TitleImg/TitleImg'
import { AboutCar } from './AboutCar/AboutCar'


export const Delivery = () => {
    return (
        <View style={styles.wrapper}>
            <TitleImg />
            <AboutCar />
        </View>
    )
}