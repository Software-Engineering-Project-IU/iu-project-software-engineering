/*
*	Button.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-06-2024
*	Info/Notizen:		Implementierung einer einfachen Button-Komponente
*
*	Editiert von:		Kevin Krazius
*	Editiert am:		03-12-2024
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/


import React from 'react';
import '../../scss/main.scss';

const Button = ({ text, onClick, classNameParam}) => {
    return (
        <button className={`${classNameParam || 'button'}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
