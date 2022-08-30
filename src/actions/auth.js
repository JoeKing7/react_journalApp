import Swal from 'sweetalert2/dist/sweetalert2.all'
import { firebase, GOOGLE_AUTH_PROVIDER } from "../firebase/firebaseConfig";
import { types } from "../types/types"
import { noteLogout } from './notes';
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(login(user.multiFactor.user.uid, user.multiFactor.user.displayName));
            dispatch(finishLoading());
        })
        .catch( (err) => {
            dispatch(finishLoading());
            Swal.fire({
                icon: 'error',
                title: 'Login',
                text: err.message,
            })
        })
        //dispatch(login(12345, 'Juancho Polo'));
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user})=> {
            await user.updateProfile({
                displayName: name
            })
            
            dispatch(login(user.uid, user.displayName));
        })
        .catch( (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Login',
                text: err.message,
            })
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(GOOGLE_AUTH_PROVIDER)
        .then( ({user}) => {
            dispatch(login(user.multiFactor.user.uid, user.multiFactor.user.displayName))
        })
        
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)

export const startLogout = () => { //async por el firebase
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
})