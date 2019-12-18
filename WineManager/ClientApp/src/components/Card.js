import React, { useState } from 'react';
import {Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props){
    const [open, toggleOpen] = useState(false);

    function renderButton(){
        if(!props.buttonName){
            return;
        } else {
            return (
                <div>
                    <button type='botton' className='btn btn-primary' onClick={() => props.onButtonClick(true)}>{props.buttonName}</button>
                </div>
            )
        }
    }
    return (
        <div id='card-wrap' onClick={() => toggleOpen(!open)}>
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <Collapse isOpen={open}>
                        <div>
                            {props.links.map((linkProp) => {
                                return (
                                    <div key={`${props.title}-${linkProp.id}`}>
                                        <Link to={linkProp.link}>{linkProp.name}</Link>
                                    </div>
                                    )
                            })}
                            {renderButton()}
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Card;