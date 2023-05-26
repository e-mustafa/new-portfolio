import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Pictur from "./Pictur";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function MainSection() {
	const [typewriter, setTypewriter] = useState("");

	useEffect(() => {
		function sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		}

		const phrases = [
			" FrontEnd web Developer",
			" BackEnd web Developer",
			" Fullstack web Developer",
		];

		let sleepTime = 100;

		let curPhraseIndex = 0;

		const writeLoop = async () => {
			while (true) {
				let curWord = phrases[curPhraseIndex];

				for (let i = 0; i < curWord.length; i++) {
					setTypewriter(curWord.substring(0, i + 1));
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 10);

				for (let i = curWord.length; i > 0; i--) {
					setTypewriter(curWord.substring(0, i - 1));
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 5);

				if (curPhraseIndex === phrases.length - 1) {
					curPhraseIndex = 0;
				} else {
					curPhraseIndex++;
				}
			}
		};
		writeLoop();
	}, []);

	return (
		<main id="home" className="baner" style={{ paddingTop: "63.4px" }}>
			<Container className="py-5">
				<Row className="align-items-center">
					<Col xs={12} lg={6}>
						<Stack gap={2} className="text-light mt-0 mt-lg-5 pb-5">
							<h6>Welcome All in my Portfolio</h6>
							<h1>
								I'm <span>Mustafa Abutabl,</span>
							</h1>
							<h2>
								I'm a{" "}
								<span className="typewriter">
									{typewriter}
									<span>|</span>
								</span>
							</h2>

							<p>
								Hello everyone, i have 3years of experiance in web
								devlopment
							</p>

							<HashLink to="/#cntact">
								let's connect <FaRegArrowAltCircleRight />
							</HashLink>
						</Stack>
					</Col>

					<Col xs={12} lg={6} className="order-0 order-lg-2">
						<div className="pic-parent px-0 px-lg-4">
							<Pictur />
						</div>
					</Col>
				</Row>
			</Container>
		</main>
	);
}