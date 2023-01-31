import { View } from '@react-pdf/renderer'
import React from 'react'
import { firstBlock } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { Title } from '../../../Title/Title'
import { styles } from './RentTerms.style'

export const RentTerms = () => {
  return (
    <View style={styles.wrapper}>
      <Title />
      <View style={styles.container}>
        <View style={styles.aboutCar}>
          {firstBlock.map((data, index) => {
            if (index < firstBlock.length / 2) {
              return <Row key={index + data} nameRow={data.name} valueRow={data.value} />
            }
            return false;
          })}
        </View>
        <View style={styles.aboutCar}>
          {firstBlock.map((data, index) => {
            if (index >= firstBlock.length / 2) {
              return <Row key={index + data} nameRow={data.name} valueRow={data.value} />
            }
            return false;
          })}
        </View>
      </View>
    </View>
  )
}
