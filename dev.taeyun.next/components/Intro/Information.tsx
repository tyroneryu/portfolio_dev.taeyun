import styled from "styled-components";
import Memoji from "../../public/memoji.png";
import MemojiMobile from "../../public/memoji-mobile.png";
import Cursor from "../../public/cursor.svg";
import { useState } from "react";
import { media } from "../../styles/theme";

const Information = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<Container className="flex" {...{ isHover }}>
			<div
				className="memoji"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<div className="memoji__box">Developer</div>
				<img src={Memoji.src} alt="me" className="memoji__img pc-only" />
				<img src={MemojiMobile.src} alt="me" className="memoji__img mobile-only" />
				{!isHover && <Cursor className="memoji__cursor" />}
				<div className="memoji__circle" />
				<div className="memoji__info-circle" />
				<div className="memoji__info flex">
					{`
            유태윤
            1998.09.19
            Yonsei Univ.
            `}
				</div>
			</div>
			<div className="info">
				<div
					className="info__button"
					onClick={() => window.open("mailto:ryu.tyrone@gmail.com")}
				>
					ryu.tyrone@gmail.com
				</div>
				<div
					className="info__button"
					onClick={() => window.open("https://github.com/tyroneryu")}
				>
					GITHUB
				</div>
				<div
					className="info__button"
					onClick={() => window.open("https://www.linkedin.com/in/ryu-tyrone-3a2a36320/")}
				>
					LINKEDIN
				</div>
				<div
					className="info__button"
					onClick={() =>
						window.open(
							"https://www.notion.so/tyroneryu/Resume-7c32047349064df5b0de46f325550e22"
						)
					}
				>
					RESUME
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div<{ isHover: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
	
  padding-top: 3rem;
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
	
  ${media.mobile} {
    flex-direction: column;
	padding: 3rem 1.5rem;  
  }
  .memoji {
    cursor: pointer;
    position: relative;
	width: 13rem;
	height: 13rem;
	flex-shrink: 0;
	  
    &__box {
      position: absolute;
      background-color: ${({ theme }) => theme.color.gray};
      padding: 0.5rem 1.5rem;
      font-weight: 800;
      font-size: 1.5rem;
      border-radius: 2rem;
      color: ${({ theme }) => theme.color.white};
      left: -2rem;
      top: 1.8rem;
      transform: rotate(-10deg);
      border: 0.2rem solid white;
	  white-space: nowrap;	
    } 
	  &__img {
		  position: absolute;
		  width: 14rem;
		  height: auto;
		  left: 0.5rem; 
		  top: 2rem;
	  }
	  
	  .pc-only { display: block; }
	  .mobile-only { display: none; }
	  
    &__cursor {
      position: absolute;
      left: 1.2rem;
      bottom: 1.2rem;
      fill: #fff;
      transform: rotate(60deg);
      animation: fade 1s linear infinite;
    }
    &__circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.blue};
    }
    &__info-circle {
      opacity: ${({ isHover }) => (isHover ? 0.8 : 0)};
      transition: 0.3s;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.gray};
    }
    &__info {
      font-weight: 500;
      opacity: ${({ isHover }) => (isHover ? 1 : 0)};
      transition: 0.2s;
      position: absolute;
      top: -1rem;
      color: #fff;
      white-space: pre-line;
      text-align: center;
      line-height: 2rem;
      width: 100%;
      height: 100%;
	  display: flex;
      align-items: center;
	  justify-content: center;
	  z-index: 7;	
    }
  }
  .info {
    border-radius: 2.5rem;
    padding: 3rem;
    margin-left: 5rem;
    box-sizing: border-box;
    height: auto;
    display: flex;
    font-weight: 600;
    letter-spacing: 0.1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.color.blue};
    ${media.mobile} {
      margin-top: 3rem;
      margin-left: 0;
	  width: 100%;
	  max-width: 100%;
		
	  padding: 1.5rem 1rem;	
    }

    &__button {
      cursor: pointer;
      width: 100%;
      padding: 0.8rem 2rem;
      border-radius: 2rem;
      border: 0.5rem solid ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.white};
	  text-align: center;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;	
	  max-width: 100%;
	  box-sizing: border-box;	
      :not(:first-child) {
        margin-top: 0.6rem;
      }
      :hover {
        background-color: ${({ theme }) => theme.color.blue};
      }
	  ${media.mobile} {
		  font-size: clamp(0.7rem, 4vw, 0.9rem);
		  border-width: 2px;
		  padding: 0.8rem 0.5rem;
	  }	
    }
  }
`;

export default Information;
