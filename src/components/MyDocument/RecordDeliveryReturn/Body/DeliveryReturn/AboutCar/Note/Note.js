import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { styles } from './Note.styles'


export const Note = ({ dateKMData }) => {
    return (
        <View style={styles.wrapper} >
            <Text style={styles.title} >Note</Text>
            <Text style={styles.textarea}>{dateKMData.find(data => data.note).note}</Text>

        </View >
    )
}