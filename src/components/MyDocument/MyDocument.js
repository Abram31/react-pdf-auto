import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { Header } from './Header/Header';

import { ClientInformation} from './ClientInformation/ClientInformation';
import { Row } from './Row/Row';
import { RentalConditions } from './RentalConditions/RentalConditions';
import { RecordDeliveryReturn } from './RecordDeliveryReturn/RecordDeliveryReturn';

export const MyDocument = () => (
    <Document>
        <ClientInformation />
        <RentalConditions />
        <RecordDeliveryReturn/>
        {/* <Page size="A4" >
            <Header />
            <View >
                <Text>Section #1</Text>
            </View>
            <View >
                <Text>Section #2</Text>
            </View>
        </Page> */}
    </Document>
);