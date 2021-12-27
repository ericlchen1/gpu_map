import React, { useState, useEffect, useRef } from "react"
import { DownOutlined } from "@ant-design/icons"
import { Typography } from 'antd';
import './Home.css';


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
							Find GPUs near you! Search and give information
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
                    Recent News
                </Title>
				<div className="cardFlexContainer">
                </div>
            </div>
        </div>
    )
}

export default Home;