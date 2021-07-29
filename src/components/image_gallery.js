import React, {useState} from 'react'
import "react-responsive-modal/styles.css";
import './gallery.css'
import {useStaticQuery, graphql} from 'gatsby'

import ImageModal from './image_modal'
import { Modal } from 'react-responsive-modal';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';


const ImageGallery = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)
    //const [activeTag, setActiveTag] = useState('')
    
    //Manage modal opening and closing
    const onOpenImage = (indexImage) => {
        setOpen(true)
        setId(indexImage)
    }
    const onCloseImage = () => setOpen(false)

    //Manage tag system
    /*const onTagButtonSelection = (tag) => {
        setActiveTag(tag)
    }*/
    
    const data = useStaticQuery(graphql`query CloudinaryImage {
            allCloudinaryMedia {
                totalCount
                edges {
                    node {
                        secure_url
                        id
                        tags
                        context {
                            custom {
                                alt
                                caption
                            }
                        }
                    }
                }
            }
        }`
    )
    const clImages = data.allCloudinaryMedia.edges
    return (
        <div id="modal-root">
            {/*<button className="galleryButton" onClick={() => onTagButtonSelection('cloud')}>CLOUDS</button>
            <button className="galleryButton" onClick={() => onTagButtonSelection('night')}>NIGHT</button>*/}
            <div className="image-grid">
            {clImages.map((image, index) => (
                  <div className="image-item" key={`${index}-cl`} onClick={() => onOpenImage(index)}>
                    <img src={image.node.secure_url} alt={image.node.context.custom.alt} />
                  </div>
                ))
            }
            <Modal open={open} onClose={onCloseImage} center focusTrapped >
                <InnerImageZoom src={clImages[id]['node']['secure_url']}></InnerImageZoom>
            </Modal>
          </div>
        </div>
        
      )
  }
  export default ImageGallery