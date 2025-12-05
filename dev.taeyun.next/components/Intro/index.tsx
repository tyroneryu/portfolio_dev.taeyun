import styled from "styled-components";
import { media } from "../../styles/theme";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Information from "./Information";

const Intro = () => (
	<Wrapper className="flex">
		<Container className="flex">
			<TextSlider />
			<ProgressBar />
			<Information />
			<TextBox className="flex pc-only">
				<div>
					<Bold>DEV</Bold> 부터 <Bold>SEC</Bold> 까지 넓은 시야를 가진 보안 전문가를 꿈꾸는
					<Bold>주니어 개발자</Bold> 입니다.{"\n"}
					Frontend와 Backend, 나아가 ML/DL 개발 경험을 통해 서비스의 구조적 흐름을 깊이 있게 이해하고 있으며,
					이를 바탕으로 빈틈없는 보안 환경을 구축하는 데 집중하고 있습니다.{"\n"}
					<Bold>
						" 큰 둑도 개미 구멍 하나로 무너진다. "
					</Bold>
					{"\n"}
					완벽해 보이는 시스템이라도 사소한 취약점 하나가 치명적인 보안 사고로 이어질 수 있음을 항상 경계합니다.{"\n"}
					화려한 기술 위에 <Bold>'보안'</Bold> 이라는 단단한 기초를 다지겠습니다.{"\n"}
					개발 경험으로 다져진 디테일함으로, 아주 작은 위협조차 허용하지 않는 <Bold>정보보안 전문가</Bold>가 되겠습니다.
				</div>
			</TextBox>

			<TextBox className="flex mobile-only">
				<div>
					<Bold>DEV</Bold> 부터 <Bold>SEC</Bold> 까지 넓은 시야를 가진 보안 전문가를 꿈꾸는
					<Bold>주니어 개발자</Bold> 입니다.{"\n"}
					Frontend와 Backend, 나아가 ML/DL 개발 경험을 통해 서비스의 구조적 흐름을 깊이 있게 이해하고 있으며,
					이를 바탕으로 빈틈없는 보안 환경을 구축하는 데 집중하고 있습니다.{"\n"}
					<Bold>
						" 큰 둑도 개미 구멍 하나로 무너진다. "
					</Bold>
					{"\n"}
					완벽해 보이는 시스템이라도 사소한 취약점 하나가 치명적인 보안 사고로 이어질 수 있음을 항상 경계합니다.{"\n"}
					화려한 기술 위에 <Bold>'보안'</Bold> 이라는 단단한 기초를 다지겠습니다.{"\n"}
					개발 경험으로 다져진 디테일함으로, 아주 작은 위협조차 허용하지 않는 <Bold>정보보안 전문가</Bold>가 되겠습니다.
				</div>
			</TextBox>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
  margin-top: 100vh;
  height: 100vh;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  border-radius: 2rem;
  max-width: 1373px;
  height: 100%;
  padding-top: 3rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

const TextBox = styled.div`
  white-space: pre-line;
  line-height: 230%;
  margin-top: 3rem;
  font-size: 1.1rem;
  ${media.mobile} {
    font-size: 1.3rem;
    line-height: 200%;
    font-weight: 700;
    padding-left: 7rem;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-left: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.mobile} {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export default Intro;

