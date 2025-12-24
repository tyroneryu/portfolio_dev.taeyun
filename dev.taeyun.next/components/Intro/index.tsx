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
					<Bold>FIELD</Bold> 부터 <Bold>CODE</Bold> 까지, 현장의 문제를 논리적인 코드로 해결하는
					<Bold>주니어 백엔드 개발자</Bold> 입니다.
					{"\n"}
					5년의 외식업 관리 경력과 글로벌경영 전공을 바탕으로 서비스의 비즈니스 흐름을 누구보다 깊이 이해하고 있으며,
					이를 확장성 있는 백엔드 아키텍처로 구현하는 데 집중하고 있습니다.
					{"\n"}
					<Bold>
						" 비즈니스의 페인 포인트는 현장에 있고, 그 해답은 똑부러지는 설계에 있습니다. "
					</Bold>
					{"\n"}
					복잡하게 파편화된 데이터를 통합하여 실제 운영 효율을 극대화하는 시스템의 힘을 믿습니다.
					{"\n"}
					현장의 감각 위에 <Bold>'인프라와 보안'</Bold> 이라는 견고한 기술적 논리를 다지겠습니다.
					{"\n"}
					철저한 분석과 데이터 중심의 사고로, 성장을 가속하는 <Bold>백엔드 엔지니어</Bold>가 되겠습니다.
				</div>
			</TextBox>

			<TextBox className="flex mobile-only">
				<div>
					<Bold>FIELD</Bold> 부터 <Bold>CODE</Bold> 까지, 현장의 문제를 논리적인 코드로 해결하는
					<Bold>주니어 백엔드 개발자</Bold> 입니다.
					{"\n"}
					5년의 외식업 관리 경력과 글로벌경영 전공을 바탕으로 서비스의 비즈니스 흐름을 누구보다 깊이 이해하고 있으며,
					이를 확장성 있는 백엔드 아키텍처로 구현하는 데 집중하고 있습니다.
					{"\n"}
					<Bold>
						" 비즈니스의 페인 포인트는 현장에 있고, 그 해답은 똑부러지는 설계에 있습니다. "
					</Bold>
					{"\n"}
					복잡하게 파편화된 데이터를 통합하여 실제 운영 효율을 극대화하는 시스템의 힘을 믿습니다.
					{"\n"}
					현장의 감각 위에 <Bold>'인프라와 보안'</Bold> 이라는 견고한 기술적 논리를 다지겠습니다.
					{"\n"}
					철저한 분석과 데이터 중심의 사고로, 성장을 가속하는 <Bold>백엔드 엔지니어</Bold>가 되겠습니다.
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

