import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Character from "../components/Character";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Background from "../components/Background";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Scroll from "../public/scroll.json";
import styled from "styled-components";
import Up from "../public/up.svg";
import { media } from "../styles/theme";


const Index = () => {
    const [isScrollable, setIsScrollable] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", () => {
            if (innerHeight + scrollY >= document.body.offsetHeight) {
                setIsScrollable(false);
            } else setIsScrollable(true);
        });
    }, []);

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Scroll,
    };

    return (
        <Container>
            <Background />
            <Hero />
            <Intro />
            <Character />
            <Experience />
            <Project />
            <ScrollBtn>
                {isScrollable ? (
                    <Lottie
                        options={lottieOptions}
                        ariaRole="img"
                        isClickToPauseDisabled
                    />
                ) : (
                    <Up
                        style={{ cursor: "pointer" }}
                        onClick={() => window.scrollTo(0, 0)}
                    />
                )}
            </ScrollBtn>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ScrollBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 4rem;
  right: 3rem;
  z-index: 10;
  opacity: 0.5;
  ${media.mobile} {
    width: 5rem;
    height: 5rem;
  }
`;

export default Index;
