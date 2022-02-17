import styled from "styled-components";
import { LightRedButton, PrimaryButton } from "../General/Button";

import logo from "../../images/logo.svg";
import editor from "../../images/illustration-editor-mobile.svg";
import phones from "../../images/illustration-phones.svg";
import bg from "../../images/bg-pattern-circles.svg";
import laptop from "../../images/illustration-laptop-mobile.svg";

import NavBarMobile from "./NavBarMobile";

import "./Page.scss";
import Paragraph from "./PagaraphMobile";

export default function Page() {
	return (
		<div className="main-page">
			<header>
				<NavBarMobile></NavBarMobile>
				<div className="introduction">
					<h1>A modern publishing platform</h1>
					<p>Grow your audience and build your online brand</p>
					<div className="button-group">
						<LightRedButton width={120}>Start for Free</LightRedButton>
						<PrimaryButton width={120}>Learn More</PrimaryButton>
					</div>
				</div>
			</header>
			<article>
				<h2>Designed for the future</h2>
				<img src={editor} alt="editor mobile" />
				<Paragraph title="Introducing an extensible editor">
					Blogr features an exceedingly intuitive interface which lets you
					focus on one thing: creating content. The editor supports
					management of multiple blogs and allows easy manipulation of
					embeds such as images, videos, and Markdown. Extensibility with
					plugins and themes provide easy ways to add functionality or
					change the looks of a blog.
				</Paragraph>
				<Paragraph title="Robust content management">
					Flexible content management enables users to easily move through
					posts. Increase the usability of your blog by adding customized
					categories, sections, format, or flow. With this functionality,
					you’re in full control.
				</Paragraph>
			</article>
			<img
				className="mobile-illustration"
				src={phones}
				alt="phones mobile"
			/>
			<article className="dark">
				<img src={bg} alt="background" />
				<h2>State of the Art Infrastructure</h2>
				<p>
					With reliability and speed in mind, worldwide data centers
					provide the backbone for ultra-fast connectivity. This ensures
					your site will load instantly, no matter where your readers are,
					keeping your site competitive.
				</p>
			</article>
			<article>
				<img src={laptop} alt="laptop illustration" />
				<Paragraph title="Free, open, simple">
					Blogr is a free and open source application backed by a large
					community of helpful developers. It supports features such as
					code syntax highlighting, RSS feeds, social media integration,
					third-party commenting tools, and works seamlessly with Google
					Analytics. The architecture is clean and is relatively easy to
					learn.
				</Paragraph>
				<Paragraph title="Powerful tooling">
					Batteries included. We built a simple and straightforward CLI
					tool that makes customization and deployment a breeze, but
					capable of producing even the most complicated sites.
				</Paragraph>
			</article>
			<footer>
				<img src={logo} alt="logo" />
				<div>
					<h4>Product</h4>

					<p>Overview</p>
					<p>Pricing</p>
					<p>Marketplace</p>
					<p>Features</p>
					<p>Integrations</p>
				</div>

				<div>
					<h4>Company</h4>

					<p>About</p>
					<p>Team</p>
					<p>Blog</p>
					<p>Careers</p>
				</div>

				<div>
					<h4>Connect</h4>

					<p>Contact</p>
					<p>Newsletter</p>
					<p>LinkedIn</p>
				</div>
			</footer>
		</div>
	);
}
