import React, { useState } from 'react';
import {Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';

function Card(props){
    const [open, toggleOpen] = useState(false);

    const style = {
        display: 'inline-block',
        width: '25vw',
        margin: '2vmax'
    }
    return (
        <div onClick={() => toggleOpen(!open)} style={style}>
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