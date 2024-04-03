import React from "react";

const baseUrl = 'https://i.imgur.com/';
const person = {
    name:'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'b',
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
                src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
                className="avatar"
                alt={person.name}
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