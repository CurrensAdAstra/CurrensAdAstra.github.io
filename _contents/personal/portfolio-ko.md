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

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-01-playback.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-01-playback.jpg" alt="TV에 재생 중인 셋톱박스 UI 화면" loading="lazy" decoding="async"></a><figcaption>KSTB5220 — 영상 재생 오류 재현 및 AVS 옵션 검증</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-02-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-02-bench.jpg" alt="여러 대의 셋톱박스 보드와 리모컨이 놓인 개발 벤치" loading="lazy" decoding="async"></a><figcaption>개발 벤치 — 버튼 동작 및 드라이버 디버깅용 타깃 보드</figcaption></figure>
  <figure class="fit"><a href="{{ site.baseurl }}/assets/img/portfolio/stb-03-cert-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-03-cert-bench.jpg" alt="오실로스코프와 전원 공급기가 놓인 인증 계측 환경" loading="lazy" decoding="async"></a><figcaption>KSTB4181 — 돌비 MS12 v1.3.4 / TB-44 인증 계측 환경</figcaption></figure>
  <figure class="fit"><a href="{{ site.baseurl }}/assets/img/portfolio/stb-07-audio-test.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-07-audio-test.jpg" alt="스트림 정보가 표시된 화면 앞의 오디오 검증 환경" loading="lazy" decoding="async"></a><figcaption>인증 시험 중 오디오 디코딩 검증</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-04-standby-power.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-04-standby-power.jpg" alt="셋톱박스의 대기전력을 측정하는 전력 분석기" loading="lazy" decoding="async"></a><figcaption>EU 대기전력 기준 대응을 위한 초전력모드 전력 측정</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-05-front-panel.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-05-front-panel.jpg" alt="상태 LED가 켜진 셋톱박스 전면 패널 근접 사진" loading="lazy" decoding="async"></a><figcaption>KSTB6150 — 커널 드라이버로 제어하는 전면 LED</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-08-ui-desk.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-08-ui-desk.jpg" alt="스트리밍 화면이 표시된 TV가 놓인 개발 자리" loading="lazy" decoding="async"></a><figcaption>KSTB6150 — 개발 환경에서의 스트리밍 UI 검증</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-09-audio-room.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-09-audio-room.jpg" alt="스피커와 서브우퍼, 시험 중인 셋톱박스가 놓인 청음실" loading="lazy" decoding="async"></a><figcaption>KSTB6150 — 청음실에서의 오디오 재생 확인</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-06-rdk-boards.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-06-rdk-boards.jpg" alt="RDK 파일럿 유닛과 모듈별 결과가 표시된 공정 검사 화면" loading="lazy" decoding="async"></a><figcaption>KSTB3220 — Yocto/RDK 브링업: 디바이스 트리·버튼 기능, 공정 검사</figcaption></figure>
</div>

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

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-01-rb5-5g.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-01-rb5-5g.jpg" alt="RB5 연산 모듈과 5G 통신 보드를 장착한 드론 기체" loading="lazy" decoding="async"></a><figcaption>Qualcomm RB5 + Thundercomm 5G 통신 보드를 장착한 드론 플랫폼</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-02-5g-link.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-02-5g-link.jpg" alt="5G·LTE 신호 지표와 장치 인식 로그가 표시된 터미널 화면" loading="lazy" decoding="async"></a><figcaption>링크 브링업 — 스트리밍 시험 중 LTE/5G 신호 및 장치 인식 로그</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-03-gimbal.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-03-gimbal.jpg" alt="카메라 짐벌을 장착한 드론의 벤치 테스트 장면" loading="lazy" decoding="async"></a><figcaption>STM32 embedded C 펌웨어 기반 카메라·짐벌 제어</figcaption></figure>
</div>

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

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-01-distributed-map.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-01-distributed-map.jpg" alt="분산 시뮬레이션 노드로 분할된 서울 지도" loading="lazy" decoding="async"></a><figcaption>대상 시나리오 — 강남권 도로망을 분산 노드로 분할</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-02-architecture.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-02-architecture.jpg" alt="분산 GPU 교통 시뮬레이터의 시스템 아키텍처 다이어그램" loading="lazy" decoding="async"></a><figcaption>시스템 구성 — SimCoordinator, YARN 기반 노드, OpenMPI 상의 GPU Executor</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-03-partition-process.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-03-partition-process.jpg" alt="파티션 단위 차량 이동 절차를 나타낸 흐름도" loading="lazy" decoding="async"></a><figcaption>파티션 별 차량 이동을 위한 시뮬레이션 절차 개선</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-04-partition-handoff.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-04-partition-handoff.jpg" alt="노드 버퍼를 통한 파티션 간 차량 정보 전달 다이어그램" loading="lazy" decoding="async"></a><figcaption>노드 버퍼를 경유한 파티션 간 차량 정보 전달</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-05-salt-viz.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-05-salt-viz.jpg" alt="속도 분포 차트와 함께 표시된 교통 시뮬레이션 시각화 화면" loading="lazy" decoding="async"></a><figcaption>결과 시각화 — 도로망 위에 재생되는 링크 속도 및 분포</figcaption></figure>
</div>

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

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-01-test-environment.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-01-test-environment.jpg" alt="AUTOSAR R4.0 적합성 테스트 환경 다이어그램" loading="lazy" decoding="async"></a><figcaption>AUTOSAR R4.0 적합성 테스트 환경 — Tester, 빌드 프로세스, SUT</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-02-eeprom-model.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-02-eeprom-model.jpg" alt="스텁으로 격리된 EEPROM 추상화 모듈의 컴포넌트 모델" loading="lazy" decoding="async"></a><figcaption>주변 BSW 모듈을 스텁으로 격리한 EEPROM Abstraction 검증 구조</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-03-hil-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-03-hil-bench.jpg" alt="테스트 PC와 타깃 보드, CAN 어댑터로 구성된 시험 환경" loading="lazy" decoding="async"></a><figcaption>테스트 환경 — 테스트 PC·타깃 보드·CAN 어댑터와 TTCN-3 테스트 구조</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-07-act-explorer.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-07-act-explorer.jpg" alt="테스트 케이스 프로젝트 트리가 열린 Eclipse 기반 ACT 작업 공간" loading="lazy" decoding="async"></a><figcaption>ACT — 아키텍처·설정·테스트 케이스를 담는 Eclipse 기반 작업 공간</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-04-uml-export.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-04-uml-export.jpg" alt="테스트 아키텍처 모델을 내보내는 Eclipse UML 플러그인 화면" loading="lazy" decoding="async"></a><figcaption>TTCN-3 GFT 도구가 읽을 수 있도록 변형한 Eclipse UML 플러그인</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-05-ttcn3-design.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-05-ttcn3-design.jpg" alt="테스트 케이스 시퀀스가 표시된 TTCN-3 GFT 편집기" loading="lazy" decoding="async"></a><figcaption>상용 TTCN-3 GFT 도구를 이용한 테스트 설계</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-08-test-parameters.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-08-test-parameters.jpg" alt="EEPROM 모듈 테스트 파라미터가 나열된 ECU 설정 트리" loading="lazy" decoding="async"></a><figcaption>EEPROM Abstraction 테스트 케이스용 파라미터 설정</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-06-report.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-06-report.jpg" alt="생성된 AUTOSAR 적합성 테스트 보고서" loading="lazy" decoding="async"></a><figcaption>테스트 케이스별 판정이 포함된 적합성 테스트 보고서 자동 생성</figcaption></figure>
</div>

---

## Other Projects

### 대구 자가망 GIS / 선번 관리 시스템

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/gis-01-network-map.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/gis-01-network-map.jpg" alt="설비 상세 패널이 열린 대구 자가망 GIS 지도 화면" loading="lazy" decoding="async"></a><figcaption>최신 leaflet.js 기반으로 재구축한 자가망 지도 및 설비 속성 조회</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/gis-02-line-management.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/gis-02-line-management.jpg" alt="선번 등록 및 관리 기능이 표시된 웹 화면" loading="lazy" decoding="async"></a><figcaption>선번 등록·관리 화면</figcaption></figure>
</div>

### M-Drive — QUIC 기반 고속 전송

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/mdrive-02-shell-integration.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/mdrive-02-shell-integration.jpg" alt="탐색기 우클릭 메뉴에 추가된 고속 업로드 항목" loading="lazy" decoding="async"></a><figcaption>탐색기 연동 — 파일 목록에서 바로 고속 업로드</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/mdrive-03-transfer.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/mdrive-03-transfer.jpg" alt="여러 영상 파일이 동시에 전송되는 진행률 창" loading="lazy" decoding="async"></a><figcaption>기사 영상 파일의 병렬 전송 및 파일별 진행률</figcaption></figure>
</div>

### 무인기 자율비행을 위한 SLAM 연구

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/slam-01-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/slam-01-bench.jpg" alt="비행 제어 소프트웨어가 실행 중인 노트북과 함께 놓인 쿼드로터" loading="lazy" decoding="async"></a><figcaption>실험 환경 — 오토파일럿 텔레메트리와 카메라 영상을 함께 확인</figcaption></figure>
  <figure class="fit"><a href="{{ site.baseurl }}/assets/img/portfolio/slam-02-ptam.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/slam-02-ptam.jpg" alt="특징점이 표시된 PTAM 카메라 영상과 추정된 3차원 맵 화면" loading="lazy" decoding="async"></a><figcaption>PTAM — 카메라 영상의 특징점 추적과 생성된 맵</figcaption></figure>
</div>

### 무인비행체를 이용한 실시간 방재 시스템 연구

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/hils-01-testbed.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/hils-01-testbed.jpg" alt="비행 시뮬레이션과 HILS 소프트웨어가 실행 중인 다중 모니터 테스트베드" loading="lazy" decoding="async"></a><figcaption>PC-104 기반 FCC / HILS 테스트베드와 Flight Simulator·Google Earth 연동 화면</figcaption></figure>
</div>

---

*Last updated: {{ "now" | date: "%Y-%m-%d" }}*

