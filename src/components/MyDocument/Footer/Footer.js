import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { footerData } from '../../../constants/constants.js'
import { styles } from './Footer.style.js'

export const Footer = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.line} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>{footerData.title}</Text>
                    <Text style={styles.text}>{footerData.text}</Text>
            </View>
        </View>
    )
}
