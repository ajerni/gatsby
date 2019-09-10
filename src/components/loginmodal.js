import React from 'react'
import IdentityModal from "react-netlify-identity-widget"

import "../css/loginmodal.module.css"
//import"react-netlify-identity-widget/styles.css"

const loginmodal = (props) => {
    return (
        <IdentityModal
            showDialog={props.showDialog}
            onCloseDialog={props.onCloseDialog}
        />
    )
}

export default loginmodal




