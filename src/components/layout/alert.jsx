import React from 'react'

const Alert = ({ alert, clearAlert }) => {

    if (alert !== null) {

        return (
            <div className="Alert" style={{ "color": "white" }}>
                <h1>Alert</h1>
                {alert.msg}
            </div>
        )
    } else {
        return ""
    }
}
export default Alert