import React from 'react';
import { Document } from '@react-pdf/renderer';

import { ClientInformation} from './ClientInformation/ClientInformation';
import { RentalConditions } from './RentalConditions/RentalConditions';
import { RecordDeliveryReturn } from './RecordDeliveryReturn/RecordDeliveryReturn';

export const MyDocument = () => (
    <Document>
        <ClientInformation />
        <RentalConditions />
        <RecordDeliveryReturn/>
    </Document>
);