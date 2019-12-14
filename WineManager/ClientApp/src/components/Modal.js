import React from 'react';
import $ from 'jquery';

function Modal(props){
    function closeModal() {
        $('#confirm').modal('hide');
    }
    const modalBodyStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    return(
        <div className="modal fade" id="confirm" role="dialog" aria-labelledby="confirmTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                        <button type="button" className="close" onClick={() => closeModal()} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={modalBodyStyle}>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;