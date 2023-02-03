import React, { Fragment } from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './Acceptance.styles'
import { clientInformationFooter, dateTime, rentalConditionsTitle } from '../../../../constants/constants'
import { Row } from '../../Row/Row'


export const Acceptance = () => {
    return (<Fragment>
        <View style={styles.wrapper}>
            <View style={styles.container_left}>
                <Text style={styles.title}>Per accettazione e presa visione di tutti gli articoli</Text>
                <View style={styles.wrapper_row_title}>
                    <Row nameRow='' valueRow=''></Row>
                    <Text>Il Cliente</Text>
                </View>
            </View>
            <View style={styles.container_right}>
                <View style={styles.wrapper_date_time}>
                    <Text>{dateTime.date}</Text>
                    <Text>{dateTime.time}</Text>
                </View>
                <View style={styles.wrapper_row_title}>
                <Row nameRow='' valueRow=''></Row>
                    <Text>Data e ora</Text>
                </View>
            </View>
        </View >
        {/* <Text>Il Cliente</Text> */}
    </Fragment>
    )
}
