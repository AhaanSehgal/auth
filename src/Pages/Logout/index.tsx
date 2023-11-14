import { KeyringController } from '@tria-sdk/web';
import { useEffect } from 'react';

const Logout = () => {

    const baseUrl = 'https://staging.tria.so';
    const walletType = {
        embedded: true,
    };

    const keyringController = new KeyringController({
        baseUrl,
        walletType,
    });

    const logout = async () =>{
        console.log("initiate")
        const log = await keyringController.logout()
        console.log("logged_out", log)
    }
    
    useEffect(()=>{
        logout()
    },[])

    return(
        <>
        </>
    )
}

export default Logout