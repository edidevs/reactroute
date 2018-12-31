import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

//Components 
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/lifecycle';
import Conditional from './components/conditional';
import User from './components/user';

const App = () => {

    return (

        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/home">Home</NavLink><br />
                    <NavLink to="/profile">Profile</NavLink><br />
                    <NavLink to="/posts">Posts</NavLink><br />
                    <NavLink to="/life">Life</NavLink><br />
                    <NavLink to="/conditional">Conditional</NavLink><br />
                    <NavLink to="/user">User</NavLink><br />
               
                </header>

                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/life" component={Life} />
                    <Route path="/conditional" component={Conditional} />
                    <Route path="/user" component={User} /><br />
               
                    <Route path="/" exact component={Home} />
                </Switch>


            </div>
        
        
        
        </BrowserRouter>


    )



}

ReactDOM.render(

 <App />,
 document.querySelector('#root')

    
);




