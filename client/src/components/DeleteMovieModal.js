import React from 'react';
import {  useHistory } from 'react-router-dom'

export default function DeleteMovieModal(props){
const { push } = useHistory()

    const handleSubmit=()=>{
        props.handleDelete(props.id)
        push('/movies')
    }

    return (<div id="deleteMovieModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input onClick={() => (props.setModalOn(false))}type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

// export default DeleteMovieModal;
