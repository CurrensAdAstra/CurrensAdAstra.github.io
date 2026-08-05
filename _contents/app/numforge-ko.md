---
title: "NumForge"
category: "app"
lang: ko
translation_key: numforge
---

# NumForge — Rust-native 공학계산·블록 시뮬레이션 환경

**NumForge**는 Python-like 스크립트 언어로 구동되는 Rust-native 공학계산·블록 시뮬레이션
환경입니다.

- 저장소: [github.com/CurrensAdAstra/numforge](https://github.com/CurrensAdAstra/numforge)
- 라이선스: MIT 또는 Apache-2.0 중 선택
- 상태: v0.10 (활발히 개발 중)

Scilab/MATLAB 계열 도구의 설계를 참고하되 **clone이 아니며**, 스크립트 문법은 Python-like지만
**CPython이 아닙니다** — 모든 수치 객체와 실행을 Rust runtime이 소유합니다. pip/NumPy
생태계와의 호환을 포기하는 대신, 값 시맨틱(Arc CoW)·column-major 행렬·모듈 registry·GPU 상주
같은 결정을 처음부터 일관되게 가져갑니다.

---

## 예제

```python
# examples/scripts/m5_demo.nf — 블록 시뮬레이션
import flow
import plot

m = flow.Model("motor")              # Step(t=1) → Gain(2) → Integrator → Scope
u = m.add(flow.Step(time=1.0))
g = m.add(flow.Gain(k=2.0))
i = m.add(flow.Integrator(x0=0.0))
s = m.add(flow.Scope())
m.connect(u.out, g.input)
m.connect(g.out, i.input)
m.connect(i.out, s.input)

t, Y = m.simulate(0.0, 10.0, dt=0.001)
plot.plot(t, Y[:, 0])
plot.show()
```

---

## 주요 특징

### `.nf` 스크립트 언어

0-based 인덱싱, 들여쓰기 블록, `@`=행렬곱 / `*`=elementwise, half-open 슬라이스, bool
마스킹·fancy 인덱싱·size-1 브로드캐스팅·연쇄 비교, **first-class 함수 값**(클로저·lambda·
`nonlocal`·`g = math.sin`), comprehension(list/dict/set), 컨테이너(list·dict·**tuple**·
**set**)와 디스트럭처링·멤버십·순회, f-string(포맷 스펙), `try`/`except`/`raise`, `global`.

### 값 시맨틱

`B = A` 후 `B`를 고쳐도 `A`는 불변입니다 (Arc copy-on-write). Matrix는 column-major,
dtype은 `f64` / `complex128` / `bool` (비교 결과는 bool 배열이고, 산술에 진입하면 0/1로
승격됩니다).

### 모듈 시스템

Signature 기반 디스패치와 capability registry로 모듈 간 기능을 공유합니다.

| 모듈 | 내용 |
|---|---|
| `math` | 삼각·쌍곡·`log2`·`clip`·`hypot` … |
| `linalg` | QR / LU / SVD / eig, `norm`·`pinv`·`lstsq`·`kron` (faer) |
| `poly` | `polyval`·`polyfit`·`roots`·`polyder` |
| `signal` | FFT·`convolve`·windows·`lfilter`/`filtfilt`/`firwin` |
| `interp` | `interp1d` (linear/nearest/previous/next), 자연 큐빅 spline |
| `ode` | euler/rk2/heun/rk4/rk45, 암시적 solver, event, `t_eval` |
| `control` | `tf`/`ss`·series·feedback·poles·bode·`c2d`·`lsim` |
| `stats` | `cumsum`·`corr`·`percentile` … |
| `optimize` | `minimize`·`root`·`curve_fit` |
| `io` | CSV / JSON / 텍스트, workspace 영속 |
| `plot` | line·scatter·bar·hist, legend·grid·log scale |
| `string`, `flow` | 문자열 유틸리티, 블록 시뮬레이션 |
| `ecos` *(옵션)* | 한국은행 경제통계 Open API (`--features ecos`로만 연결) |

### NumFlow — 블록 다이어그램 시뮬레이션

feedthrough 기반 스케줄링, 피드백 루프, `.nflow` JSON 직렬화, 그리고 데스크톱 시각 에디터.
표준 블록(Step / Gain / Sum / Integrator / Constant / Product / Saturation / Sine / Ramp /
DeadZone / Switch / Quantizer), 컨트롤 블록(PID·필터드 Derivative), 런타임 함수
블록(`flow.Function(f)`), 모듈 블록(`control.TransferFunction`, 테이블 비선형을 위한
`interp.lookup_block`)을 제공합니다.

### GPU backend

wgpu(Metal / Vulkan / DX12) f32 연산이 **device에 완전히 상주**합니다. `C = A @ B; D = C @ C`
에서 중간 결과는 GPU에 머물고 `print(D[0,0])` 시점에 처음 내려옵니다. `stats.sum/mean/min/max`
는 상주 데이터를 전체 다운로드 없이 GPU 트리 리덕션으로 계산합니다.

### Desktop shell

egui 기반 셸(콘솔 / 변수 브라우저 / 에디터 / Figure / Flow 에디터, Scilab식 배치)이며,
CLI/REPL과 동일한 runtime을 프로토콜로 공유합니다.

---

## 빠른 시작

```bash
cargo run -p numforge-cli                      # REPL (history·멀티라인 편집)
cargo run -p numforge-cli -- examples/scripts/v03_demo.nf   # v0.3 언어 투어
cargo run -p numforge-desktop                  # 데스크톱 shell
```

모듈별 투어 예제는 `examples/scripts/`에 있습니다. 전부 닫힌해 `assert`로 자체 검증하며,
`examples_smoke` 회귀 테스트가 CI에서 실행합니다.

```bash
cargo run -p numforge-cli -- examples/scripts/linear_algebra.nf   # solve/qr/lu/svd/eig
cargo run -p numforge-cli -- examples/scripts/statistics.nf       # 기술통계/분위수/상관/난수
cargo run -p numforge-cli -- examples/scripts/containers.nf       # list/dict/set/tuple/클로저
cargo run -p numforge-cli -- examples/scripts/ode_dynamics.nf     # solve_ivp/이벤트/dense
cargo run -p numforge-cli -- examples/scripts/signal_pipeline.nf  # FFT/필터/스펙트럼
cargo run -p numforge-cli -- examples/scripts/control_design.nf   # tf/step/bode
cargo run -p numforge-cli -- examples/scripts/nonlinear_flow.nf   # NumFlow 불연속/룩업 블록
```

```text
>>> A = [[1, 2], [3, 4]]
>>> import linalg
>>> q, r = linalg.qr(A)
>>> set_backend("auto")                        # GPU가 있으면 큰 matmul은 GPU로
```

---

## 배포와 임베딩

- **사용자 `.nf` 모듈** — `.nf` 파일을 검색 경로(`$NUMFORGE_PATH`·`~/.numforge/modules`·
  현재 디렉터리)에 두면 `import`로 씁니다. 재컴파일이 필요 없습니다.
- **외부 언어 임베드** — `numforge-ffi` C ABI와 C·Java(Panama)·Python(ctypes)·Rust
  바인딩, 양방향 데이터 전달.
- **임베디드 보드** — 라즈베리파이 1/Zero(ARMv6)에 SSH 배포. GPU 없는 슬림 CLI
  크로스 빌드(`--no-default-features`)를 씁니다. 부팅 실행하는 커스텀 Yocto
  이미지(`meta-numforge`)는 BSP가 기가급이라 core에 두지 않고 별도 다운스트림
  프로젝트로 분리했습니다.

---

## 설계 노트

설계 문서가 규범입니다 — 시맨틱이 궁금하면 코드보다 `architecture.md`와 `docs/`를 먼저
읽습니다.

v0.10은 **외부 언어 임베드(FFI)**, **사용자 `.nf` 스크립트 모듈**, **데스크톱 셸
심화**(Figure 별도 OS 창·에디터 파일별 멀티탭·프로젝트 루트 관리)를 더했습니다. 또한
`architecture.md`를 v0.x 실상에 맞춰 전면 재작성하고 적대적 감사로 찾은 버그 5건을
수정했습니다. v0.9는 NumFlow 비선형 블록과 데스크톱 VS Code 스타일 UI를 더했습니다.
