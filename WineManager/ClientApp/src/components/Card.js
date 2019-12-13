import React, { useState } from 'react';
import {Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props){
    const [open, toggleOpen] = useState(false);

    return (
        <div id='card-wrap' onClick={() => toggleOpen(!open)}>
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {console.log(props.links)}
                    <Collapse isOpen={open}>
                        <div>
                            {props.links.map((linkProp, index) => {
                                return (
                                    <Link to={linkProp.link} key={index}>{linkProp.name}</Link>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Card;