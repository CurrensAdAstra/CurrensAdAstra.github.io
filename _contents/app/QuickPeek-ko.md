---
title: "QuickPeek"
category: "app"
lang: ko
translation_key: quickpeek
---

# QuickPeek – macOS 이미지 뷰어

QuickPeek은 macOS 및 Apple 하드웨어를 위해 설계된 빠르고 단순한 이미지 뷰어입니다.

## 주요 기능

- 다양한 이미지 포맷 지원: jpg, jpeg, png, gif, bmp, webp
- ZIP 압축 파일 내부 이미지 직접 보기
- 직관적인 키보드 단축키
- 파일 정보 표시
- 드래그 앤 드롭 지원

## 키보드 단축키

| 단축키 | 동작 |
|---------|--------|
| Tab | 메뉴 표시 / 숨기기 |
| Left / Up Arrow | 이전 이미지 |
| ~ | 좌상단 파일 정보 표시 |
| Right / Down Arrow, Spacebar | 다음 이미지 |
| [ | 이전 이미지 (ZIP 모드: 이전 ZIP 파일) |
| ] | 다음 이미지 (ZIP 모드: 다음 ZIP 파일) |
| ESC | 앱 종료 |
| Cmd+O | 파일 열기 |

## ZIP 파일 처리

QuickPeek은 ZIP 파일 내부 이미지를 직접 표시할 수 있습니다.

- ZIP 파일을 열면 내부 이미지 파일을 자동으로 로드합니다.
- ZIP 파일에 이미지가 없으면 다음 ZIP 파일을 자동으로 시도합니다.
- ZIP 모드에서 `[` 와 `]` 키로 ZIP 파일 간 이동이 가능합니다.

## 시스템 요구사항

- macOS 26.0 이상
- Apple Silicon (M1 / M2 / M3) 또는 Intel Mac

## 설치 및 실행

1. 저장소 클론:
   ```bash
   git clone [repository-url]
   ```

2. Xcode에서 프로젝트 열기:
   ```bash
   open QuickPeek.xcodeproj
   ```

3. Xcode에서 빌드 및 실행(Cmd+R)

## 사용 방법

1. 애플리케이션 실행
2. "Open File" 버튼 또는 `Cmd+O`로 이미지 열기
3. 이미지 파일을 앱 창에 드래그 앤 드롭 가능
4. 키보드 단축키로 이미지 탐색

## 개발

QuickPeek은 SwiftUI로 개발되었으며 다음 기술을 사용합니다.

- SwiftUI: 사용자 인터페이스
- UniformTypeIdentifiers: 파일 타입 판별
- Foundation: 파일 시스템 및 ZIP 처리

## 라이선스

[License information]

