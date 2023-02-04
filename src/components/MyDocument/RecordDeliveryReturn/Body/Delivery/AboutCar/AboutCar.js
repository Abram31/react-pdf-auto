import React from 'react'
import { Image, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './AboutCar.styles'
import { DateKM } from './DateKM/DateKM'
import { Fuel } from './Fuel/Fuel'
import { Note } from './Note/Note'


export const AboutCar = () => {
    return (
        <View style={styles.wrapper}>
            <DateKM />
            <Fuel />
            <Note />
        </View>
    )
}