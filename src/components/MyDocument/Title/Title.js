import React from 'react'
import { Text } from '@react-pdf/renderer'

import { styles } from './Title.style'

export const Title = () => {
  return (
      <Text style={styles.title}>Condizioni di noleggio</Text>
  )
}
