import React, { useState, useEffect, useRef } from "react"
import { DownOutlined } from "@ant-design/icons"
import { Card, Typography } from 'antd';
import './Home.css';
// import { Link } from "react-router-dom";

import Nvidia from "./images/nvidia_logo.jpg";
import AMD from "./images/amd_logo.webp";

const { Title, Paragraph } = Typography;

function Home () {
    const ref = useRef(null);

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
            <div className="modelCards" ref={ref}>
                <Title level={1} style={{ textAlign: "center", marginTop: 32 }}>
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