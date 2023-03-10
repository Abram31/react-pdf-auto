import React from 'react'
import { View } from '@react-pdf/renderer'
import { styles } from './AboutCar.styles'
import { DateKM } from './DateKM/DateKM'
import { Fuel } from './Fuel/Fuel'
import { Note } from './Note/Note'


export const AboutCar = ({ dateKMData, returnFlag }) => {
    return (
        <View style={styles.wrapper}>
            <DateKM dateKMData={dateKMData} returnFlag={returnFlag} />
            <Fuel dateKMData={dateKMData} returnFlag={returnFlag}/>
            <Note dateKMData={dateKMData} />
        </View>
    )
}