import React from 'react';


const Body =(props) => 
<div>
<li>
    {props.val.author}, {props.val.title}
</li>
</div>


export default Body;