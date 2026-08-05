---
title: "Portfolio"
category: "personal"
lang: en
translation_key: portfolio
---

# Portfolio

This page presents selected projects representing my work across **embedded systems, robotics platforms, and large-scale simulation environments**.

My work often sits at the intersection of **system software, hardware platforms, and experimental research systems**.  
The projects below highlight not only final results but also **system architecture, engineering decisions, and experimental validation**.

- **[Download Full Portfolio (PDF, English)](/assets/resume/MinGiKyung_portfolio_eng.pdf)**
- **[Download Full Portfolio (PDF, Korean)](/assets/resume/MinGiKyung_portfolio_kor.pdf)**

---

## Selected Projects

### 1. Historical GIS Mapping Using Early 20th-Century Maps

This project investigates how historical cartographic materials can be converted into analyzable digital spatial data despite incomplete or inconsistent source information.

The work involved reconstructing historical locations from fragmented documents and integrating them into modern GIS systems.

#### Key Contributions

- Reconstruction of historical locations using archival records
- Spatial database design using **PostgreSQL / PostGIS**
- Map visualization using **Leaflet.js and OpenStreetMap**
- Handling uncertainty and incomplete information in historical datasets

#### Technical Stack

- PostgreSQL / PostGIS  
- Leaflet.js  
- OpenStreetMap  
- Data normalization and spatial inference techniques

#### Outcome

The project demonstrated how historical map materials can be integrated into modern spatial analysis systems while preserving historical uncertainty and context.

---

### 2. Embedded Linux Set-Top Box Platforms (Broadcom ARM SoCs)

This work focuses on the development and long-term maintenance of **production-grade embedded Linux systems** deployed in commercial set-top box platforms.

The platform operates under strict certification, stability, and power-management constraints.

#### Key Contributions

- Linux kernel debugging and device driver development
- Platform bring-up and system integration on **Broadcom ARM SoCs**
- Implementation of power management features for **EU standby compliance**
- Support for certification processes including **Dolby MS12 v1.3.4** and **TB-44**

#### Technical Stack

- Embedded Linux  
- Linux kernel driver development  
- Broadcom ARM SoC platforms  
- Yocto-based build systems  

#### Outcome

The system was deployed in commercial environments requiring long-term reliability and maintainability.

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/stb-08-ui-desk.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/stb-08-ui-desk.jpg" alt="Development desk with a TV showing the streaming interface" loading="lazy" decoding="async"></a><figcaption>KSTB6150 — streaming UI verification at the development desk</figcaption></figure>
</div>

---

### 3. ROS 2-Based UAV Control System with 5G Video Streaming

This project explores the integration of **robotics middleware and high-bandwidth wireless communication** in UAV platforms.

The goal was to create a modular UAV control system capable of supporting real-time sensor integration and video streaming.

#### Key Contributions

- Architecture design for **ROS 2-based UAV control**
- Integration of **ArduPilot flight controller with ROS 2**
- Real-time video streaming using **Qualcomm RB5** and **Thundercomm 5G module**
- System-level debugging under thermal and power constraints

#### Technical Stack

- ROS 2  
- ArduPilot  
- Qualcomm RB5 embedded platform  
- STM32 embedded firmware  
- 5G communication modules  

#### Outcome

The project demonstrated the feasibility of combining robotics middleware with high-bandwidth wireless communication for UAV systems.

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-01-rb5-5g.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-01-rb5-5g.jpg" alt="UAV airframe carrying the RB5 compute module and 5G communication board" loading="lazy" decoding="async"></a><figcaption>UAV platform with the Qualcomm RB5 and Thundercomm 5G communication board mounted</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-02-5g-link.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-02-5g-link.jpg" alt="Terminal output showing 5G and LTE signal metrics alongside device enumeration" loading="lazy" decoding="async"></a><figcaption>Link bring-up — LTE/5G signal telemetry and device enumeration during streaming tests</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/uav-03-gimbal.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/uav-03-gimbal.jpg" alt="Bench testing of a UAV with camera gimbal attached" loading="lazy" decoding="async"></a><figcaption>Camera and gimbal control via STM32 embedded C firmware</figcaption></figure>
</div>

---

### 4. GPU-Accelerated Urban Traffic Simulation

This research project focuses on improving the scalability of large-scale urban traffic simulation using GPU computing.

Traditional CPU-based traffic simulations struggle to scale when modeling large metropolitan road networks.  
This work explored **GPU-based parallel simulation models** to address that limitation.

#### Key Contributions

- CUDA-based parallel traffic simulation models
- Distributed simulation experiments using **OpenMPI**
- Integration of real-world urban traffic datasets
- Empirical performance comparison between CPU and GPU implementations

#### Technical Stack

- CUDA  
- OpenMPI  
- Traffic simulation models (LCTM-based approaches)  
- Performance measurement and evaluation tools  

#### Outcome

The project demonstrated significant improvements in simulation performance and scalability compared with conventional CPU-based approaches.

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-01-distributed-map.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-01-distributed-map.jpg" alt="Map of Seoul partitioned across distributed simulation nodes" loading="lazy" decoding="async"></a><figcaption>Target scenario — the Gangnam road network partitioned across distributed nodes</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-02-architecture.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-02-architecture.jpg" alt="System architecture diagram of the distributed GPU traffic simulator" loading="lazy" decoding="async"></a><figcaption>System architecture — SimCoordinator, YARN-managed nodes, GPU executors over OpenMPI</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-03-partition-process.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-03-partition-process.jpg" alt="Flow diagram of the revised per-partition vehicle movement process" loading="lazy" decoding="async"></a><figcaption>Revised simulation step for moving vehicles across partition boundaries</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-04-partition-handoff.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-04-partition-handoff.jpg" alt="Diagram of vehicle state handoff between two partitions through node buffers" loading="lazy" decoding="async"></a><figcaption>Passing vehicle state between partitions through per-node buffers</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/traffic-05-salt-viz.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/traffic-05-salt-viz.jpg" alt="Web visualization of simulated traffic with speed distribution charts" loading="lazy" decoding="async"></a><figcaption>Result visualization — link speeds and distributions replayed over the road network</figcaption></figure>
</div>

---

### 5. AUTOSAR R4.0 Conformance Testing Platform

This project focuses on **verification methodologies for automotive embedded software systems** based on the AUTOSAR standard.

The goal was to design a framework capable of automatically validating the compliance of AUTOSAR Basic Software components.

#### Key Contributions

- Development of **TTCN-3–based conformance testing framework**
- Verification of **AUTOSAR R4.0 BSW components**
- Development of **UML-to-TTCN-3 test generation tools**
- Integration with embedded and **Hardware-in-the-Loop (HIL)** test environments

#### Technical Stack

- TTCN-3  
- AUTOSAR R4.0  
- UML modeling tools  
- Eclipse-based development environments  

#### Outcome

The platform enabled automated validation of automotive software components and supported systematic testing of embedded automotive systems.

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-01-test-environment.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-01-test-environment.jpg" alt="Diagram of the AUTOSAR R4.0 conformance test environment" loading="lazy" decoding="async"></a><figcaption>AUTOSAR R4.0 conformance test environment — tester, build process, system-under-test</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-02-eeprom-model.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-02-eeprom-model.jpg" alt="Component model of the EEPROM abstraction module under test with stubs" loading="lazy" decoding="async"></a><figcaption>EEPROM abstraction under test, isolated with stubs for the surrounding BSW modules</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-03-hil-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-03-hil-bench.jpg" alt="Test bench with a test PC, target board and CAN adapter, next to the test architecture" loading="lazy" decoding="async"></a><figcaption>Test setup — test PC, target board and CAN adapter against the TTCN-3 test architecture</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-07-act-explorer.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-07-act-explorer.jpg" alt="Eclipse-based ACT workspace with a test case project tree" loading="lazy" decoding="async"></a><figcaption>ACT — Eclipse-based workspace holding architecture, configuration and test cases</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-04-uml-export.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-04-uml-export.jpg" alt="Eclipse UML plug-in exporting a test architecture model" loading="lazy" decoding="async"></a><figcaption>Modified Eclipse UML plug-in exporting models the TTCN-3 GFT tooling can read</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-05-ttcn3-design.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-05-ttcn3-design.jpg" alt="TTCN-3 GFT editor showing a test case sequence diagram" loading="lazy" decoding="async"></a><figcaption>Test case design in the commercial TTCN-3 GFT editor</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-08-test-parameters.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-08-test-parameters.jpg" alt="ECU configuration tree listing EEPROM module test parameters" loading="lazy" decoding="async"></a><figcaption>Test parameter configuration for the EEPROM abstraction test cases</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/autosar-06-report.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/autosar-06-report.jpg" alt="Generated AUTOSAR conformance test report" loading="lazy" decoding="async"></a><figcaption>Generated conformance test report with per-test-case verdicts</figcaption></figure>
</div>

---

## Other Projects

### Daegu Utility Network GIS / Line Management System

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/gis-01-network-map.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/gis-01-network-map.jpg" alt="GIS map view of the Daegu utility network with a facility detail panel" loading="lazy" decoding="async"></a><figcaption>Network map view rebuilt on a current Leaflet.js stack, with facility attributes</figcaption></figure></div>

### M-Drive — High-Speed Media Transfer over QUIC

<div class="shot-grid shot-grid-fit">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/mdrive-02-shell-integration.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/mdrive-02-shell-integration.jpg" alt="File explorer context menu with an M-Drive high-speed upload entry" loading="lazy" decoding="async"></a><figcaption>Shell integration — upload straight from the file explorer</figcaption></figure>
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/mdrive-03-transfer.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/mdrive-03-transfer.jpg" alt="Transfer window showing several media files uploading in parallel" loading="lazy" decoding="async"></a><figcaption>Parallel transfer of news media files with per-file progress</figcaption></figure>
</div>

### SLAM for UAV Autonomous Flight

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/slam-01-bench.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/slam-01-bench.jpg" alt="Quadrotor on a desk next to a laptop running flight control software" loading="lazy" decoding="async"></a><figcaption>Bench setup — quadrotor with autopilot telemetry and camera feed</figcaption></figure>
  <figure class="fit"><a href="{{ site.baseurl }}/assets/img/portfolio/slam-02-ptam.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/slam-02-ptam.jpg" alt="PTAM camera feed with tracked features next to the estimated 3D map" loading="lazy" decoding="async"></a><figcaption>PTAM — feature tracking on the camera feed and the resulting map view</figcaption></figure>
</div>

### Real-Time Disaster-Response System Using UAVs

<div class="shot-grid">
  <figure><a href="{{ site.baseurl }}/assets/img/portfolio/hils-01-testbed.jpg"><img src="{{ site.baseurl }}/assets/img/portfolio/hils-01-testbed.jpg" alt="Multi-monitor testbed running flight simulation and HILS software" loading="lazy" decoding="async"></a><figcaption>FCC / HILS testbed on PC-104 hardware, driving a Flight Simulator and Google Earth view</figcaption></figure>
</div>

---

*Last updated: {{ "now" | date: "%Y-%m-%d" }}*
