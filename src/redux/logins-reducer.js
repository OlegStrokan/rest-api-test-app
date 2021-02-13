const CHECK_DATA = 'CHECK_DATA'

let initialState = {
    login: 'login',
    password: 'admin',
    access: true,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_DATA: {
            let stateCopy = {...state}
            if (stateCopy.login === action.login && stateCopy.password === action.password) {
                return stateCopy.access = true
            }else {
                return stateCopy.access = false
            }
            return stateCopy
        }
        default:
            return state
    }
}

export const checkData = ({login, password}) => ({type: CHECK_DATA, login, password})

export default loginReducer