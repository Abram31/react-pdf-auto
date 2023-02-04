import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { styles } from './Note.styles'


export const Note = () => {
    return (
        <View style={styles.wrapper} >
            <Text style={styles.title} >Note</Text>
            <Text style={styles.textarea}></Text>

        </View >
    )
}