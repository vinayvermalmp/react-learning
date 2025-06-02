import React from "react";

function Person({person}) {
    console.log(person);
    return (
          <h2> I am {person.name}. I am {person.age} years old {person.gender}. My email id is {person.email}</h2> 
    )
    
}
export default Person;