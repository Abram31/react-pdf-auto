import React from 'react'
import { Image, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './TitleImg.styles'
import { Title } from '../../../../Title/Title'


export const TitleImg = () => {
    return (
        <View style={styles.wrapper}>
            <Title>VERBALE DI CONSEGNA</Title>
            <Image src='/img/auto.png' />

        </View>
    )
}