import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function First ()
{
    return(
        <>
        <div >
            <form >
                <label>Name:</label>
                <input type="text"></input><br/>

                <label>email:</label>
                <input type="email"></input><br/>

                <label>phone:</label>
                <input type="tel"></input><br/>

                <button>submit</button>
                
            </form>
         </div>
        </>
    )
}

export default First;