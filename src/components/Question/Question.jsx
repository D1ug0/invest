import preview from './../../assets/images/preview.jpg'
import React from "react";
import s from './Question.module.css'

const Question = () => {
    return(
        <div className={s.preview}>
            <img src={preview}/>
        </div>
    )
}

export default Question;