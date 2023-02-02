import { View } from '@react-pdf/renderer'
import React from 'react'
import { billingData } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { Title } from '../../../Title/Title'
import { styles } from './Billing.style'

export const Billing = () => {
  return (
    <View style={styles.wrapper}>
      <Title size={'sm'}>Fatturazione</Title>
      <View style={styles.container}>
        <View style={styles.column}>
          {billingData.firstColumn.map((data, index) => {
          return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
        })}
        </View>
        <View style={styles.column}>
          {billingData.secondColumn.map((data, index) => {
            return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
          })}
        </View>
      </View>
    </View>
  )
}
