import React from 'react';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';

function AdminHome(){
    
    return(
        <>
            <UpperHeaderLog image = {college__logo} />
            {
                localStorage.getItem('email') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody />
            <Footer />
        </>
    )
}

export default AdminHome;