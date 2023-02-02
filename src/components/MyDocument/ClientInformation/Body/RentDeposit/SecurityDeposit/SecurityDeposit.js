import { View } from '@react-pdf/renderer'
import React from 'react'
import { CheckBox } from '../../../../CheckBox/CheckBox'
import { Title } from '../../../../Title/Title'
import {styles} from './SecurityDeposit.module.js'

export const SecurityDeposit = () => {
    return (
        <View style={styles.wrapper} >
            <Title size={'sm'}>Deposito Cauzionale</Title>
            {/* <View> */}
                <CheckBox />
            {/* </View> */}
        </View>)
}
