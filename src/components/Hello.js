import React from 'react';

const Hello = () => {
    // return (
    //     <div class='dummyCalass'>
    //         <h1>Hello Vinay</h1>
    //     </div>   
    // )

   // create jsx version of this hello.js belo code return
   return React.createElement(
    'div',
     {id: 'hello', className: 'dummyHello'},
    React.createElement('h1' , null, 'Hello Vinay')
   )

}

export default Hello;