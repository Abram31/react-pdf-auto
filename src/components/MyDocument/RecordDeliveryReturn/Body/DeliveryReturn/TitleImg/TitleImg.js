import React from 'react'
import { Image, View } from '@react-pdf/renderer'
import { styles } from './TitleImg.styles'
import { Title } from '../../../../Title/Title'


export const TitleImg = ({ title }) => {
    return (
        <View style={styles.wrapper}>
            <Title size={'ms'}>{title}</Title>
            <Image src='/img/auto.png' />

        </View>
    )
}