import { View } from '@react-pdf/renderer'
import React from 'react'
import { securityDepositData } from '../../../../../../constants/constants'
import { CheckBox } from '../../../../CheckBox/CheckBox'
import { Title } from '../../../../Title/Title'
import { styles } from './SecurityDeposit.module.js'

export const SecurityDeposit = () => {
    return (
        <View style={styles.wrapper} >
            <Title size={'sm'}>Deposito Cauzionale</Title>
            {securityDepositData.map((data, index) => <CheckBox key={index + data.name} name={data.name} value={data.value} select={data.select} />)
            }
        </View>)
}
