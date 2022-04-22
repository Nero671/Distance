import React from "react";

let messagesData = [
    {id: 1, message: 'Hi there, how are u?', userProfile: 'me'},
    {id: 2, message: 'Never been better! U?', userProfile: 'Wanda'},
    {id: 3, message: 'So so, have some personal troubles', userProfile: 'me'},
    {id: 4, message: 'Sound like shit....?', userProfile: 'Wanda'},
]
let messagesElements = messagesData.map(item => <Message name={item.userProfile} message={item.message} id={item.id}/>)

