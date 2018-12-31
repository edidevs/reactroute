import React from 'react';

const PostItem = (props)=> {

    console.log(props.match.params.username);

    return (

        <div>
           Post Detail React
        </div>
    );

};

export default PostItem; 