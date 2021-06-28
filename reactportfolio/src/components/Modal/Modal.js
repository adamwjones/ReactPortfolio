// import React, { useState } from "react";
// import { Modal, Carousel} from "react-bootstrap";



// const ModalGallery = () => {

//     // STATE FOR MODAL
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     //  STATE FOR CAROUSEL
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     return(
//         <div>
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body >
//             <Carousel activeIndex={index} onSelect={handleSelect}>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-1.jpg"
//                         alt="First slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-2.jpg"
//                         alt="Second slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-3.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-4.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-5.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-6.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-7.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-8.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="../assets/img-9.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//             </Carousel>
//         </Modal.Body>
//     </Modal>

//     </div>
//     )

// }

// export default ModalGallery;