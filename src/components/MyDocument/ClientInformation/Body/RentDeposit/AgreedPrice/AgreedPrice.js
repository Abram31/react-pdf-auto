import { View } from '@react-pdf/renderer'
import React from 'react'
import { agreedPriceData} from '../../../../../../constants/constants'
import { CheckBox } from '../../../../CheckBox/CheckBox'
import { Title } from '../../../../Title/Title'
import { styles } from './SecurityDeposit.module.js'

export const AgreedPrice = () => {
    return (
        <View style={styles.wrapper} >
            <Title size={'sm'}>Canone pattuito</Title>
            {agreedPriceData.map((data, index) => <CheckBox key={index + data.name} name={data.name} value={data.value} select={data.select} />)
            }
        </View>)
}
