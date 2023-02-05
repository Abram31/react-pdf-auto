import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { styles } from './TextCondition.styles'
import { conditionsData } from '../../../../constants/constants'


export const TextCondition = () => {
    return (
        <View style={styles.wrapper}>
            {conditionsData.map((data, index) => {
                return <View style={styles.container} key={index + data.title[0]}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.text}>{data.value}</Text>
                </View>
            })}
        </View>
    )
}