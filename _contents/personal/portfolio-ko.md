---
title: "Portfolio"
category: "personal"
lang: ko
translation_key: portfolio
---

# Portfolio

이 페이지는 **임베디드 시스템, 로보틱스 플랫폼, 대규모 시뮬레이션** 영역에서 수행한 대표 프로젝트를 정리합니다.

저의 작업은 **시스템 소프트웨어, 하드웨어 플랫폼, 실험적 연구 시스템**의 교차점에 위치합니다. 아래 프로젝트는 결과물뿐 아니라 **아키텍처 설계, 엔지니어링 의사결정, 실험 검증**을 함께 보여줍니다.

- **[Download Full Portfolio (PDF, English)](/assets/resume/MinGiKyung_portfolio_eng.pdf)**
- **[Download Full Portfolio (PDF, Korean)](/assets/resume/MinGiKyung_portfolio_kor.pdf)**

---

## Selected Projects

### 1. 20세기 초 지도 기반 역사 GIS 매핑

불완전하고 불일치한 사료를 디지털 공간 데이터로 변환해 분석 가능한 형태로 재구성한 프로젝트입니다.

#### Key Contributions
- 아카이브 기반 역사 위치 복원
- **PostgreSQL / PostGIS** 기반 공간 DB 설계
- **Leaflet.js + OpenStreetMap** 시각화
- 불확실성/결측 정보 처리 기법 적용

#### Technical Stack
- PostgreSQL / PostGIS
- Leaflet.js
- OpenStreetMap
- 데이터 정규화 및 공간 추론

#### Outcome
역사적 불확실성을 보존하면서 현대 공간 분석 체계에 통합 가능한 워크플로를 제시했습니다.

---

### 2. Embedded Linux Set-Top Box 플랫폼(Broadcom ARM SoC)

상용 환경에 배포되는 **프로덕션급 임베디드 Linux 시스템**의 개발 및 장기 유지보수 프로젝트입니다.

#### Key Contributions
- Linux 커널 디버깅/드라이버 개발
- **Broadcom ARM SoC** 플랫폼 브링업/통합
- **EU 대기전력 규격** 대응 전력관리 기능 구현
- **Dolby MS12 v1.3.4 / TB-44** 인증 지원

#### Technical Stack
- Embedded Linux
- Linux kernel driver development
- Broadcom ARM SoC
- Yocto build system

#### Outcome
장기 신뢰성과 유지보수성이 요구되는 상용 환경 배포를 완료했습니다.

---

### 3. ROS 2 기반 UAV 제어 시스템 + 5G 비디오 스트리밍

**로보틱스 미들웨어와 고대역 무선 통신**을 UAV에 통합한 프로젝트입니다.

#### Key Contributions
- **ROS 2 기반 UAV 제어 아키텍처** 설계
- **ArduPilot + ROS 2** 통합
- **Qualcomm RB5 + Thundercomm 5G 모듈** 실시간 스트리밍
- 열/전력 제약 조건 하 시스템 디버깅

#### Technical Stack
- ROS 2
- ArduPilot
- Qualcomm RB5
- STM32 firmware
- 5G modules

#### Outcome
UAV에서 로보틱스 미들웨어와 고대역 무선 통신의 결합 가능성을 검증했습니다.

---

### 4. GPU 가속 도시 교통 시뮬레이션

대규모 도시 교통 시뮬레이션의 확장성을 GPU 컴퓨팅으로 향상시키는 연구 프로젝트입니다.

#### Key Contributions
- CUDA 기반 병렬 교통 시뮬레이션 모델
- **OpenMPI** 분산 시뮬레이션 실험
- 실제 도시 교통 데이터셋 통합
- CPU/GPU 구현 간 실측 성능 비교

#### Technical Stack
- CUDA
- OpenMPI
- LCTM 계열 교통 시뮬레이션 모델
- 성능 측정/평가 도구

#### Outcome
기존 CPU 접근 대비 성능 및 확장성 개선을 확인했습니다.

---

### 5. AUTOSAR R4.0 적합성 테스트 플랫폼

AUTOSAR 기반 차량용 임베디드 소프트웨어의 **검증 자동화**를 목표로 한 프로젝트입니다.

#### Key Contributions
- **TTCN-3 기반 적합성 테스트 프레임워크** 개발
- **AUTOSAR R4.0 BSW 컴포넌트** 검증
- **UML→TTCN-3** 테스트 생성 도구 개발
- 임베디드/HIL 테스트 환경 통합

#### Technical Stack
- TTCN-3
- AUTOSAR R4.0
- UML modeling tools
- Eclipse-based environments

#### Outcome
차량용 소프트웨어 컴포넌트 검증 자동화를 지원하고 체계적 테스트 프로세스를 구축했습니다.

---

*Last updated: {{ "now" | date: "%Y-%m-%d" }}*

