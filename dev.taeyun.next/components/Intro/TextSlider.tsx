import styled from "styled-components";

const TextSlider = () => (
	<SlideContainer>
		<div
			style={{
				width: "100%",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					width: "500%",
					overflow: "hidden",
					display: "flex",
					animation: "slide 20s infinite",
				}}
			>
				<Slide>
					<span className="__text">Frontend</span>
				</Slide>
				<Slide>
					<span className="__text">Backend</span>
				</Slide>
				<Slide>
					<span className="__text">Security</span>
				</Slide>
				<Slide>
					<span className="__text">ML / DL</span>
				</Slide>
				<Slide>
					<span className="__text">MICE</span>
				</Slide>
			</div>
		</div>
	</SlideContainer>
);

const SlideContainer = styled.div`
  width: 100%;
  margin-top: -5rem;
`;

const Slide = styled.div`
  font-size: 4.5rem;
  font-weight: 800;
  padding-left: 4%;
  width: 100%;
  .__text {
    background: ${({ theme }) => theme.color.blue};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default TextSlider;
