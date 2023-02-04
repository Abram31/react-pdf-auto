import { View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './Body.styles'
import { Delivery } from './Delivery/Delivery'


export const Body = () => {
    return (
        <View style={styles.body}>
            <Delivery />

        </View>
    )
}
