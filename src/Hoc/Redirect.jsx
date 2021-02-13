import React from 'react'
import {Redirect} from "react-router-dom";

export const authRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.access === false) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}
