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

---

*Last updated: {{ "now" | date: "%Y-%m-%d" }}*
