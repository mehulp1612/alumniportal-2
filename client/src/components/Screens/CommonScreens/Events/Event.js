// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import Footer from '../../../CommonComponents/Footer/Footer';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';

function Events(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody Heading = {'Events'} />
            <Footer />
        </>
    )
}

export default Events;