import React from "react"
import Christian from "./assets/Christian .jpg"
import Casemiro from "./assets/Casemiro.jpg"
import Bruno from "./assets/Bruno.jpg"
import Rashford from "./assets/Rashford.jpg"

const players = [
    {   
        ImageURL : Christian,
        Jersey_number : <button className="Btn">#14</button>,
        Name : "Christian Eriksen",
        Age : <button className="Btn">31</button>,
        Team : "Manchester United",
        Nationality  : "Denmark",
    },
    {
        ImageURL : Casemiro,
        Jersey_number : <button className="Btn">#18</button>,
        Name : "Casemiro",
        Age : <button className="Btn">31</button>,
        Team : "Manchester United",
        Nationality  : "Brazil",
    },
    {
        ImageURL : Bruno,
        Jersey_number : <button className="Btn">#8</button>,
        Name : "Bruno Fernandes",
        Age : <button className="Btn">29</button>,
        Team : "Manchester United",
        Nationality  : "Portugal",
    },
    {
        ImageURL : Rashford,
        Jersey_number : <button className="Btn">#10</button>,
        Name : "Marcus Rashford",
        Age : <button className="Btn">26</button>,
        Team : "Manchester United",
        Nationality  : "England",
    }
];

export default players;