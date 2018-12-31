import React, { PureComponent } from 'react';




class Life extends PureComponent {
    // 1 get default props 

    // 2 Set default state 

    state = { 
        title: 'Life cycles state'
    }

    // // 3 before render 
    // componentWillMount(){

    //     console.log('3 before render');
        

    // }

    // componentWillUpdate(){
    //     console.log('BEFORE update');
    // }

    // componentDidUpdate(){
    //     console.log('AFTER update');
    // }

    // //check the previous state and next state 
    // //
    // shouldComponentUpdate(nextProps, nextState){

    //     // console.log("Update component", nextState); 

    //     console.log("First state", this.state.title);
    //     console.log(nextState.title);
    //     if(nextState.title === this.state.title){
    //         return false;
    //     }

    //     return true; 

    // }

    // componentWillReceiveProps(){ //receive new props 


    //     console.log('BEFORE RECEIVE PROPS');
    // }

    // componentWillUnMount(){
    //     console.log('UNMOUNT');
    // }



    // 4 Render jsx 



    render(){
        console.log('RENDER');
        return(

            <div>
                <h3>Render {this.state.title}</h3>
                <div onClick={
                    () => {
                        return ( 
                            this.setState({
                            title:'Something else'}) // change the state 
                            // thus it will re render all the code 
                        );
                    }
                }>Click to Change               </div>
            </div>
        );



    };

    // 5 after jsx 
    componentDidMount(){
        console.log('5 Console after render'); 
        document.querySelector('h3').style.color = 'red';
    }


}


export default Life; 