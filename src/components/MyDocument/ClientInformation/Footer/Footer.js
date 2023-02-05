import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { styles } from './Footer.style'
import { clientInformationFooter } from '../../../../constants/constants'


export const Footer = () => {
    return (
        <View style={styles.wrapper}>
            {clientInformationFooter.map((data, index) => {
                return <Text style={styles.text} key={index + data[3]}>{data.value}</Text>
            })}
        </View>
    )
}
