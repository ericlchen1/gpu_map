/*
    This file defines a the footer displayed on all pages
*/

import React from "react"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer () {
	return (
		<div className={styles.footer}>
			{/* Conatiner with 3 columns */}
			<div className={styles.container}>
				{/* Long column with site name and description */}
				<div className={styles.footerDataLong}>
					<h1 className={styles.siteName}><b>GPU</b>Map</h1>
					<div className={styles.siteText}>
                    Find GPUs near you! Search and contribute information on available GPUs to help those looking for GPUs.
					</div>
				</div>
				{/* Short column with models */}
				<div className={styles.footerDataShort}>
					<h1 className={styles.modelHeader}>Models</h1>
					<div className={styles.footerLinkContainer}>
						<Link to="/search">Find GPUs</Link>
					</div>
					<div className={styles.footerLinkContainer}>
						<Link to="/contribute">Contribute</Link>
					</div>
					<div className={styles.footerLinkContainer}>
						<Link to="/about">About Us</Link>
					</div>
				</div>
				{/* Short column with other links */}
				<div className={styles.footerDataShort}>
					<h1 className={styles.otherLinksHeader}>Other Links</h1>
					<div className={styles.footerLinkContainer}>
						<Link to="/">Home</Link>
					</div>
					<div className={styles.footerLinkContainer}>
                        <a href="https://www.nvidia.com/en-us/geforce/">Nvidia Geforce</a>
					</div>
					<div className={styles.footerLinkContainer}>
						<a href="https://www.amd.com/en/graphics/radeon-rx-graphics">AMD Radeon RX Graphics</a>
					</div>
				</div>
			</div>
			{/* Bottom of footer is copyright of our site */}
			<h3 className={styles.copyrightText}>
				{" "}
				Copyright © 2021 <b>GPU</b>Map
			</h3>
		</div>
	);
}

export default Footer;
