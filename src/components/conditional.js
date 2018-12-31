import React from 'react';


const Conditional = (props)=> {

    const value = false; 

    const returnValue = () => {

        return false; 
    }; 

    const showIt = () => {

        return (

            returnValue() ? <div>
                        Hello it is true
                </div> : <div>It is false </div>

        ); 


    }; 


    return (

        <div>
            {
               showIt() 
            }
            
        </div>

        

    );

};

export default Conditional; 