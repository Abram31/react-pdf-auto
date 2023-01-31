import { View } from '@react-pdf/renderer'
import React from 'react'
import { firstBlock } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { Title } from '../../../Title/Title'

export const RentTerms = () => {
  return (
    <View >
      <Title />
      <View >
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
      </View>
      <View >
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
        <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
      </View>
    </View>
  )
}
