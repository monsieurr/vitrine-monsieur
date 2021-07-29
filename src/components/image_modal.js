import React, {useState} from 'react'
import ReactDOM from 'react-dom';


const modalImageStyle = {
    width: "100%",
    height: "100%",
    padding: "20px",
    background: "purple",
}

const ImageModal = ({children}) => {
    ReactDOM.createPortal(
        <div className="imageModalWrapper">
            {children}
        </div>
    )
    document.getElementById('modal-root')
}

export default ImageModal;