import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './DeliveryReturn.styles'
import { TitleImg } from './TitleImg/TitleImg'
import { AboutCar } from './AboutCar/AboutCar'
import { SignaturesDeliveryReturn } from './SignaturesDeliveryReturn/SignaturesDeliveryReturn'


export const DeliveryReturn = ({ dateKMData, returnFlag, title }) => {
    return (
        <View style={styles.wrapper}>
            <TitleImg title={title} />
            <AboutCar dateKMData={dateKMData} returnFlag={returnFlag} />
            <SignaturesDeliveryReturn />
        </View>
    )
}