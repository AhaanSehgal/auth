import { KeyringController } from '@tria-sdk/web';
import { eventTypes } from "@tria-sdk/connect";
import { useEffect } from 'react';

const AccessToken = () => {

    const baseUrl = 'https://staging.tria.so'
    const walletType = {
        embedded: true,
    };

    const keyringController = new KeyringController({
        baseUrl,
        walletType,
    });

    useEffect(() => {
        if (localStorage?.getItem("accessToken") !== "undefined") {
            keyringController.postMessage({
                //@ts-ignore
                type: eventTypes?.accessToken /* import {eventTypes} from "@tria-sdk/connect" */,
                data: localStorage?.getItem("accessToken") /*from local storage*/
            })
        }
    }, [])


    return (
        <>
        </>
    )

}

export default AccessToken