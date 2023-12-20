import React from 'react'


function FirstComponent ()
{  
  const name ='nidhi'
  const element = <div><h1>hii</h1></div>

  return(
        <>
    <div  >
    <h1>FirstComponent {5+5}</h1>
    <h1>{name} {element}</h1>
    </div>
   </>
)
}


export default FirstComponent;