export const skills = [
  {
    title: "Web Development",
    contents: [
      "React, Next.js, TypeScript 생태계에 능숙하며, SSR/CSR을 적절히 활용하여 성능과 보안이 최적화된 웹 애플리케이션을 구축합니다.",
      "Recoil, Apollo, GraphQL을 활용한 효율적인 전역 상태 관리 및 비동기 데이터 통신 로직을 설계합니다.",
      "Storybook을 도입하여 UI 컴포넌트 단위 테스트를 수행하고, Styled Components/Emotion으로 유지보수 용이한 스타일 시스템을 구축합니다.",
    ],
  },
  {
    title: "DevSecOps",
    contents: [
      "GitHub Actions를 활용하여 코드 통합부터 배포, 보안 검사까지 자동화된 CI/CD 파이프라인을 구축합니다.",
      "Terraform, Ansible을 이용한 IaC(Infrastructure as Code) 환경을 구현하여 인프라를 코드 단위로 안전하게 관리하고 버전 제어를 수행합니다.",
      "AWS(IAM, VPC) 및 Docker/Kubernetes 환경에서 최소 권한 원칙(Least Privilege) 등 클라우드 보안 모범 사례를 적용합니다.",
    ],
  },
  {
    title: "Backend Development",
    contents: [
      "Node.js(Express) 및 Python(FastAPI, Flask) 환경에서 대용량 트래픽 처리가 가능한 확장성 있는 RESTful API를 설계합니다.",
      "MongoDB(NoSQL) 및 PostgreSQL(RDBMS) 등 서비스 특성에 맞는 데이터베이스 모델링과 쿼리 최적화 경험이 있습니다.",
      "클라이언트와 AI 모델 간의 효율적인 데이터 파이프라인을 구축하고, 안전한 API 통신을 위한 인증/인가 로직을 구현합니다.",
    ],
  },
  {
    title: "AI/ML",
    contents: [
        "XGBoost 및 TensorFlow를 활용하여 50만 개 이상의 데이터를 학습시킨 지능형 악성코드 탐지 모델을 개발했습니다.",
        "Pandas, NumPy를 활용한 대규모 보안 데이터 전처리 및 특징 추출(Feature Engineering)에 능숙합니다.",
        "AWS Sagemaker 및 CodePipeline을 연동하여, 지속적인 모델 학습 및 배포가 가능한 MLOps 자동화 환경을 구축했습니다.",
    ]
  }
];

export const careers = [
  {
    title: "경기관광공사",
    date: "2025.10.18 ~ 2025.10.27",
    about: "ITB Asia Singapore 2024 경기도 부스 특별 인턴"

  },
  {
    title: "(주)프리미엄패스인터내셔널",
    date: "2024.07.15 ~ 2024.08.30",
    about: "MICE사업부 인턴",
  },
];

export const activities = [
  {
    title: "OSCO MICE 행사 기획 공모전",
    date: "2024.12.23",
    about: "충북도지사상 수상"
  },
  {
    title: "경기MICE아카데미",
    date: "2024.06.15 ~ 2024.07.05",
    about: "경기도, 경기관광공사, 한국MICE협회가 진행한 MICE 인재 양성 교육",
  },
  {
    title: "IHHH",
    date: "2024.03 ~ 2025.02",
    about: "홍익대학교 정보보안 학회 - 학회원",
  },
  {
    title: "Wrtn Prompthon",
    date: "2023.11.09 ~ 2023.11.11",
    about: "최우수상 수상",
  },
];

export const projects = [
  {
    title: "taeyun-ryu.com",
    date: "2025.07 ~ 2025.11 (1명)",
    skills: ["React", "Next.js", "Typescript", "PostCSS"],
    github: "https://github.com/portfolio_dev.taeyun",
    website: "https://taeyunryu.vercel.app",
    about:
        "개인 포트폴리오 웹사이트 제작",
    contents: [
      "Next.js 및 TypeScript 도입으로 타입 안전성을 보장하는 컴포넌트 기반 아키텍처 설계 및 반응형 UI 구현",
      "gray-matter와 markdown-to-jsx를 활용해 마크다운 파일을 정적 페이지로 변환하는 커스텀 블로그 엔진 개발",
      "GSAP, AOS, Lottie 라이브러리를 활용한 스크롤 인터랙션 및 동적 애니메이션 구현으로 사용자 몰입감 증대",
      "next-sitemap을 통한 SEO 최적화 및 Webpack 커스터마이징, Bundle Analyzer 도입으로 빌드 사이즈 경량화",
    ],
  },
  {
    title: "dev.next.taeyunryu",
    date: "2025.09 ~ 2025.10 (1명)",
    skills: ["React", "Next.js", "Typescript", "Sass"],
    github: "https://github.com/tyroneryu/dev.taeyun",
    website: "",
    about: "개인 블로그 사이트 제작",
    contents: [
      "next 기반의 SSR 웹 애플리케이션 구축",
      "BEM 방법론을 적용하여 styled components 사용",
    ],
  },
  {
    title: "GitKubeOps",
    date: "2025.06 ~ 2025.08 (1명)",
    skills: ["Kubernetes", "Argo CD", "Helm", "GitHub Actions", "Docker", "Python (Flask)"],
    github: "https://github.com/tyroneryu/GitKubeOps",
    website: "",
    about:
        "Docker, Helm, Argo CD를 활용한 Flask App의 Kubernetes GitOps 배포 및 CI/CD 파이프라인 구축 프로젝트",
    contents: [
      "Python Flask 애플리케이션을 Docker 컨테이너로 패키징하고 GHCR(GitHub Container Registry)과 연동하여 이미지 관리 효율화",
      "Helm Chart를 직접 설계하여 Deployment, Service, HPA 등 복잡한 Kubernetes 리소스를 모듈화하고 버전 관리(IaC) 구현",
      "GitHub Actions를 활용한 CI 파이프라인을 구축하여, 코드 변경 시 Docker 이미지 빌드 및 푸시 과정을 자동화",
      "Argo CD를 도입하여 Git 리포지토리의 상태를 Kubernetes 클러스터에 자동으로 동기화하는 GitOps 기반의 CD 워크플로우 완성",
      "Horizontal Pod Autoscaler(HPA)를 구성하여 트래픽 부하에 따라 Pod가 자동으로 확장 및 축소되는 오토스케일링 환경 마련"
    ],
  },
  {
    title: "TriggerForge",
    date: "2025.09 ~ 2025.10 (1명)",
    skills: ["Terraform", "AWS SAM", "Ansible", "GitHub Actions", "Docker", "LocalStack"],
    github: "https://github.com/tyroneryu/trigger_forge",
    website: "",
    about:
        "Terraform, AWS SAM, Ansible을 활용한 Event-Driven 인프라 구축 및 CI/CD 파이프라인 자동화 프로젝트",
    contents: [
      "Terraform을 이용한 S3, IAM 등 핵심 클라우드 인프라의 코드화(IaC) 및 버전 관리 구현",
      "AWS SAM 기반의 Lambda 함수 배포를 통해 S3 이벤트 트리거 중심의 서버리스 아키텍처 설계",
      "Ansible Playbook을 활용하여 관리용 EC2 인스턴스 내 Nginx 배포 및 구성 관리(Configuration Management) 자동화",
      "Docker 및 LocalStack을 도입하여 클라우드 리소스 비용 절감 및 로컬 테스트 환경의 정합성 확보",
      "GitHub Actions를 통한 terraform fmt/plan 자동화 및 CI/CD 파이프라인 구축으로 배포 안정성 증대",
      "최소 권한 원칙(Least Privilege) 기반의 IAM 역할 설계 및 Secrets 관리 등 보안 모범 사례(Security Best Practices) 적용"
    ],
  },
  {
    title: "Malware Analysis DL Model",
    date: "2024.08 ~ 2025.06 (2명)",
    skills: ["React", "Typescript", "Next.js", "AWS", "Python", "FastAPI", "CAPA", "Docker",],
    github: "https://github.com/tyroneryu/malware-analysis-service",
    website: "",
    about: "CAPA rule을 활용한 악성코드 탐지 모델 개발",
    contents: [
      "CAPA rule을 활용하여 악성코드 50만개 전처리",
      "전처리 된 csv 파일로 ML 학습(최종 XGBoost 선정)",
      "학습된 모델을 하이퍼 파라미터 튜닝",
      "DL 학습으로 최종 모델 생성(AWS Sagemaker)",
      "FastAPI로 백엔드 구성",
      "Next.js 기반으로 프론트엔드 구성",
      "Docker container로 AWS 서버에 최종 배포",
      "AWS CodeCommit, Pipeline, CodeBuild 를 통한 완전 자동화(신규 악성코드 자동 학습 파이프라인)"
    ],
  },
  {
    title: "Shared Bike System Implementation",
    date: "2024.03 ~ 2024.06 (4명)",
    skills: ["C++", "Object-Oriented Programming", "ECB Pattern", "File I/O", "System Architecture"],
    github: "https://github.com/tyroneryu/HONGIK_SE_HW02",
    website: "",
    about:
        "소프트웨어 공학을 기반으로 팀 단위의 설계를 거쳐, C++로 실제 작동하는 공유 자전거 시스템을 구현한 프로젝트",
    contents: [
      "요구사항 분석 및 설계 단계는 팀 협업으로 진행하고, 이후 C++ 코드 구현 및 테스트 전 과정을 단독으로 수행하여 실행 가능한 시스템 완성",
      "Boundary(_ui), Control(_control), Entity 클래스를 엄격히 분리하는 ECB(Entity-Control-Boundary) 아키텍처를 적용하여 결합도를 낮추고 유지보수성 확보",
      "회원가입, 로그인/아웃(Session 관리), 자전거 대여/반납, 관리자 모드 등 핵심 비즈니스 로직을 객체 지향적으로 구현",
      "헤더(.h)와 소스(.cpp) 파일의 명확한 분할 및 모듈화를 통해 컴파일 의존성을 최소화하고 코드의 가독성 및 재사용성 증대",
      "File I/O(input/output.txt)를 활용한 데이터 영속성 처리를 구현하여, 프로그램 종료 후에도 회원 및 자전거 데이터가 유지되도록 설계"
    ],
  },
  {
    title: "Baekjoon Algorithm Prolem set",
    date: "2024.02 ~ 2025.12 (1명)",
    skills: ["C++", "Python"],
    github: "https://github.com/tyroneryu/Algorithm_ps",
    website: "https://solved.ac/profile/tyroneryu",
    about: "백준 웹사이트에서 알고리즘 문제 풀이",
    contents: [
      "BaekjoonHub라는 Extension을 이용해 풀이했던 모든 알고리즘 문제와 해답 Github에 저장",
      "현재 풀이한 문제 수: 199",
      "Tier: Gold IV"
    ],
  },
];