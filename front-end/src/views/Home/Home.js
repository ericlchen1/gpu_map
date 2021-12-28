import React, { useState, useEffect, useRef } from "react"
import { DownOutlined } from "@ant-design/icons"
import { Button, Card, Typography } from 'antd';
import './Home.css';
import { useNavigate } from "react-router-dom";

import Nvidia from "./images/nvidia_logo.jpg";
import AMD from "./images/amd_logo.webp";
import map_with_markers from './images/map_with_markers.jpg';
import contribute_image from './images/contribute_image.jpg';

import {
    SearchOutlined,
    PlusOutlined
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function Home () {
    const ref = useRef(null);
    const navigate = useNavigate();

    return (
        <div>
            <div className="splashImage">
                <div className="splashContent">
                    <div className="headerText">
						<Title level={1} className="title">
							GPU Map
						</Title>
						<Paragraph className="about">
							Find GPUs near you! Search and contribute information
                            on available GPUs to help those looking for GPUs.
						</Paragraph>
                    </div>
                </div>
                <div className="downButton">
					<DownOutlined
						className="downButtonIcon"
						onClick={() => {
							window.scrollTo({
								top: ref.current.offsetTop,
								behavior: "smooth",
							})
						}}
					/>
				</div>
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:'16px', backgroundColor:'	#E0E0E0'}} ref={ref}>
                <img
                    style={{display:'flex', margin: '30px', maxWidth: '550px'}}
                    alt={"Image of a map"}
                    src={map_with_markers}
                ></img>
                <div style={{display:'flex', margin: '30px', maxWidth: '400px', flexDirection:'column'}}>
                    <Title style={{fontWeight:700}}>
                        Search for locations of graphics cards near you
                    </Title>
                    <Paragraph style={{fontSize: '1.2em'}}>
                        GPUs are filterable by location, model, and price.
                    </Paragraph>
                    <Button 
                        shape="round"
                        size='large'
                        style={{width: '50%'}}
                        icon={<SearchOutlined className="icon" />}
                        onClick={() => {navigate('/search')}}
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:'16px', backgroundColor:'#F0F0F0'}}>
                <div style={{display:'flex', margin: '30px', maxWidth: '400px', flexDirection:'column'}}>
                    <Title style={{fontWeight:700}}>
                        Contribute to our database of graphics card locations
                    </Title>
                    <Paragraph style={{fontSize: '1.2em'}}>
                        Report graphics card drops near you.
                    </Paragraph>
                    <Button 
                        shape="round"
                        size='large'
                        style={{width: '50%'}}
                        icon={<PlusOutlined className="icon" />}
                        onClick={() => {navigate('/contribute')}}
                    >
                        Contribute
                    </Button>
                </div>
                <img
                    style={{display:'flex', margin: '30px', maxWidth: '550px'}}
                    alt={"Image of a contributions"}
                    src={contribute_image}
                ></img>
            </div>
            <div className="learnMoreCards">
                <Title level={1} style={{ textAlign: "center", marginTop: 32, fontWeight:700 }}>
                    Learn More
                </Title>
				<div className="cardFlexContainer">
                    <a href="https://www.nvidia.com/en-us/geforce/" className="card">
                        <Card
                            bordered={true}
							className="card"
							cover={
								<img
									className="cardImage"
									alt={"Nvidia"}
									src={Nvidia}
								></img>
							}
							hoverable={true}
                        >
                            <Title level={2} style={{ textAlign: "center" }}>
								Nvidia
							</Title>
							<Paragraph>
								Learn more about current and upcoming Nvidia Geforce products.
							</Paragraph>
                        </Card>
                    </a>
                    <a href="https://www.amd.com/en/graphics/radeon-rx-graphics" className="card">
                        <Card
                            bordered={true}
							className="card"
							cover={
								<img
									className="cardImage"
									alt={"AMD"}
									src={AMD}
								></img>
							}
							hoverable={true}
                        >
                            <Title level={2} style={{ textAlign: "center" }}>
								AMD
							</Title>
							<Paragraph>
								Learn more about AMD's Radeon RX graphics cards.
							</Paragraph>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;