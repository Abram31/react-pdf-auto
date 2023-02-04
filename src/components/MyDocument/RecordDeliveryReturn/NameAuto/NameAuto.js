import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './NameAuto.styles'
import { nameAutoData } from '../../../../constants/constants'


export const NameAuto = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.name_auto}>{nameAutoData[0].value}</Text>
            <View style={styles.wrapper_color}>
                <Text style={styles.title}>{nameAutoData[1].title}</Text>
                <Text>{nameAutoData[1].value}</Text>
            </View>
            <View style={styles.wrapper_number}>
                <Text style={styles.title}>{nameAutoData[2].title}</Text>
                <Text>{nameAutoData[2].value}</Text>
            </View>
        </View>
    )
}