import React, { useEffect, useContext } from 'react'
import Loader from '../../Components/Loader'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import NavContext from '../../NavContext';
import { KeyringController } from '@tria-sdk/web';
import { AuthController } from '@tria-sdk/core';
import { call } from 'web3/lib/commonjs/eth.exports';


export default function VerificationPage() {

    const walletType = {
        embedded: true,
    };

    const navigate = useNavigate()
    const { setToken } = useContext(NavContext)
    const location = useLocation();
    const baseUrl = 'https://staging.tria.so'


    const authController = new AuthController(
        baseUrl
    );

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/welcome')
    //     }, 2000)
    // }, [])

    const call = async () => {
        const searchParams = new URLSearchParams(location.search);
        const email = searchParams.get('email');
        const token = searchParams.get('token');
        console.log('Email', email);
        //@ts-ignore
        console.log('Token', token);
        //@ts-ignore
        const check = await authController.emailLinkVerification({ email: email, code: token })
        console.log('check', check)
        console.log('params', searchParams)
    }

    useEffect(() => {
        call()
    }, []);

    return (
        <div>
            <div className='mt-80'><Loader /></div>
        </div>
    )
}
