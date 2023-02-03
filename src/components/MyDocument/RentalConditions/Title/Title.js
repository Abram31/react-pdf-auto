import React, { Fragment } from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './Title.style'
import { clientInformationFooter, rentalConditionsTitle } from '../../../../constants/constants'


export const Title = () => {
    return (
        <View style={styles.wrapper}>
            {rentalConditionsTitle.map((data, index) => {
                return <Fragment key={index + data.name[0]
                }>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text>{data.value}</Text>
                </Fragment>
            })}
        </View >
    )
}
