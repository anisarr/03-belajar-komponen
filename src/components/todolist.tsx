import React from "react";

const person = {
    name:'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function Todolist() {
    return(
        <>      
            <h1 style={{ color: person.theme.color, backgroundColor: person.theme.backgroundColor }}>{person.name}'s Todos
            </h1>

            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
                style={person.theme}
            />  
             
            {/* ngga muncul point-pointnya */}
            <ul style={{ color: person.theme.color }}>
                <li>Improvee the videophone</li>
                <li>Prepare aeronautics lecturers</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
            
            
        </>
    );
}