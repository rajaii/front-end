import axios from 'axios';

// Login axios call

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    axios.post("https://blackhole-backend.herokuapp.com/api/auth/login", creds)
        .then( res => {
            console.log(res.data)

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_id', res.data.user.id)

            dispatch({ type: LOGIN_SUCCESS , payload: res.data.token })

        });
};

// Register axios call

export const REG_START = 'REG_START';
export const REG_SUCCESS = 'REG_SUCCESS';

export const register = user => dispatch => {
    dispatch({ type: REG_START });

    axios.post("https://blackhole-backend.herokuapp.com/api/auth/register", user)
        .then( res => {
            dispatch({ type: REG_SUCCESS })
            dispatch(getUsers());
        })
        .catch( err => console.log(err));
};