import { useState } from "react";


function Auth() {

    // const [isLogged, setIsLogged] = useState(false)
    // const [apiToken, setApiToken] = useState('');

    // setApiToken = localStorage.getItem('api_token');
    // function checkLogin() {

    // }
    // if (apiToken !== null) {
    //     // return true;
    //     return apiToken;
    // }

    if (localStorage.getItem('api_token') !== null) {
        console.log('api token' + localStorage.getItem('api_token'));
        return true;
    }else{
        console.log('api token' + localStorage.getItem('api_token'));
        return false;
    }

    // return false;


}

// function Auth() {

//     const [isLogged, setIsLogged] = useState(getToken());

//     const getToken = () => {
//         return localStorage.getItem('api_token') !== null ? true : false;
//     };

//     // return false;
// }

// function Auth = (() => {
//     return localStorage.getItem('api_token') !== null ? false : true;
// });

// function Auth(){

// }


export default Auth;