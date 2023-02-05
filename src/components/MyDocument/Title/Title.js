import React, { Children } from 'react'
import { Text } from '@react-pdf/renderer'

import { styles } from './Title.style'


export const Title = ({ size, children }) => {
  return (
    <Text style={styles[`${size}`]}>{children}</Text>
  )
}
