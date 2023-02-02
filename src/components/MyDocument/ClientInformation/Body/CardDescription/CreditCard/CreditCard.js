import { View } from '@react-pdf/renderer'
import React from 'react'
import { creditCardData } from '../../../../../../constants/constants'
import { Row } from '../../../../Row/Row'
import { Title } from '../../../../Title/Title'
import { styles } from './CreditCard.style'

export const CreditCard = () => {
  return (
    <View style={styles.wrapper}>
      <Title size={'sm'}>Carta di credito</Title>
      <View style={styles.container}>
        {creditCardData.map((data, index) => {
          return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
        })}
      </View>
    </View>
  )
}
