import React, { useState } from "react";
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Col, Row, Container } from "../../components/Grid";
import "../Resume/Resume.css"
// import Loading from "../../components/Loading/loading";

import { Document, Page, Outline} from 'react-pdf/dist/esm/entry.webpack';



const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    
    const flipAnimation = keyframes`${fadeIn}`;
    const Flip = styled.div `animation: 1s ${flipAnimation};`;
    return (
        <div className="resumePage">
            <Container fluid className="resume">
                
            <Col size="-12">
            <Document
                renderMode={"canvas"}
                file={"AdamJonesResume.pdf"}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                <Flip><Page pageNumber={pageNumber} scale={2.25} className="resumePdf" /></Flip>
                <Flip><LazyLoad><Page pageNumber={pageNumber + 1} scale={2.25} className="resumePdf" /></LazyLoad></Flip>
                
                
            </Document>
            </Col>
            
            </Container>

        </div>
    );
};

export default Resume;