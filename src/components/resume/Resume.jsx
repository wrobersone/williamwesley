import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Card, CardMedia } from "@mui/material";



function Resume() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Row style={{ justifyContent: "center", position: "relative" }}>
                <div className="col-12 mt-1">
                    <div className="resBTN">
                        <a className="button" href={'https://docs.google.com/document/d/15cmdsziJ5tiBszmkOClEOSLUxN2u5ezN2wmqWic10cU/edit'} rel="noreferrer" target="_blank" download>
                        <span className="button-text">Download Resume</span>
                        <span className="button-icon fa fa-download"></span>
                        </a>
                    </div>
              </div>
				</Row>

				<Row className="resume">
                
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
                        
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src="https://docs.google.com/document/d/15cmdsziJ5tiBszmkOClEOSLUxN2u5ezN2wmqWic10cU/edit"
						/>
                        
					</Card>
                
				</Row>

			
			</Container>
		</div>
	);
}

export default Resume;
