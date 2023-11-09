import React, { useEffect } from 'react'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
// import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import Nav from '../../Components/SignUp/Nav'
import { useAuthVerify } from '@tria-sdk/connect'

export default function Verified() {

    useAuthVerify()

    return (
        <div>
            
        </div>
    )
}
