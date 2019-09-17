import React, { useState } from "react"
import { navigate } from "gatsby"
import IdentityModal from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

const LoginPage = () => {
  const [showDialog, setShowDialog] = useState(true)
  return (
    <div>
      <IdentityModal
        showDialog={showDialog}
        onCloseDialog={() => {
          setShowDialog(false)
          navigate("page-2")
        }}
      />
    </div>
  )
}

export default LoginPage
