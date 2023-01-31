import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './Row.style.js'

export const Row = ({ nameRow, valueRow }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.name}>{nameRow}</Text>
            <Text style={styles.value}>{valueRow}</Text>
        </View>
    )
}
