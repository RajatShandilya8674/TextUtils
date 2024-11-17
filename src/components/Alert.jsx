import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"70px"}}>
            {props.alert&& <div className="alert alert-success mh-50" role="alert">
                <strong>{props.alert.val}</strong>: {props.alert.msg}
            </div>}
            </div>
    )
}
