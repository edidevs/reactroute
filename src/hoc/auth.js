import React from 'react';

const Auth = (props)=> {

    const pass = 'pasord'; 

    if(pass !== 'password' ){
        return <h3>Wrong password</h3>
    }else{
        return props.children;
    }

    

};

export default Auth; 