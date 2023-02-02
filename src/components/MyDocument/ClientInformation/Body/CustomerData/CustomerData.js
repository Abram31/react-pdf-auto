import { View } from '@react-pdf/renderer'
import React from 'react'
import { generalCustomerData } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { Title } from '../../../Title/Title'
import { styles } from './CustomerData.style'

export const CustomerData = () => {
  return (
    <View style={styles.wrapper}>
      <Title size={'md'}>Dati cliente</Title>
      <Title size={'sm'}>Dati generali</Title>
      <View style={styles.container}>
        <View style={styles.column}>
        {generalCustomerData.firstColumn.map((data, index) => {
          return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
        })}
        </View>
        <View style={styles.column}>
          {generalCustomerData.secondColumn.map((data, index) => {
            return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
          })}
        </View>
      </View>
    </View>
  )
}
