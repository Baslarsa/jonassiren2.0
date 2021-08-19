import { Button, Modal } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useCallback } from "react";

const Gallery = ({ title, subTitle, text, images }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState(images[0].url);

    const handleModal = useCallback((val) => {
        setModalUrl(images[val].url);
        setModalOpen(!modalOpen);
    });

    return (
        <div className="gallery-wrap w-full lg:px-16 px-2 text-white text-center lg:text-left">
            <div className="text-main lg:pt-12 lg:pr-12 lg:pb-12 lg:pl-0 px-4 py-8">
                <Modal
                    onClose={() => setModalOpen(false)}
                    className="flex items-center justify-center"
                    open={modalOpen}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    aria-labelledby="Image big in modal"
                    aria-describedby="A big view of the image in a modal"
                >
                    <Fade in={modalOpen}>
                        <img
                            src={modalUrl}
                            className="p-2 md:w-2/3 w-full object-cover modal-image"
                        />
                    </Fade>
                </Modal>
                <h2 className="py-4">{title}</h2>
                <h3>{subTitle}</h3>
                <p className="py-2">{text}</p>
                <Button
                    onClick={handleModal}
                    className="button-primary"
                    variant="outlined"
                >
                    What we can do for you
                </Button>
            </div>
            <div className="mainImage" onClick={() => handleModal(0)}>
                <img
                    src={images[0].url}
                    className="object-cover w-full h-full rounded"
                />
            </div>
            <div className="primary1" onClick={() => handleModal(1)}>
                <img
                    src={images[1].url}
                    className="object-cover w-full h-full rounded"
                />
            </div>
            <div className="primary2" onClick={() => handleModal(2)}>
                <img
                    src={images[2].url}
                    className="object-cover w-full h-full rounded"
                />
            </div>
            <div className="primary3" onClick={() => handleModal(3)}>
                <img
                    src={images[3].url}
                    className="object-cover w-full h-full rounded"
                />
            </div>
        </div>
    );
};

export default Gallery;
