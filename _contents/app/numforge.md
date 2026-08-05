---
title: "NumForge"
category: "app"
lang: en
translation_key: numforge
---

# NumForge — Rust-Native Engineering Computation & Block Simulation

**NumForge** is a Rust-native environment for engineering computation and block-diagram
simulation, driven by a Python-like scripting language.

- Repository: [github.com/CurrensAdAstra/numforge](https://github.com/CurrensAdAstra/numforge)
- License: MIT or Apache-2.0, at your option
- Status: v0.10 (under active development)

It borrows design ideas from the Scilab/MATLAB family but is **not a clone**, and while the
script syntax looks like Python, it is **not CPython** — every numeric object and the whole
execution path is owned by the Rust runtime. Giving up pip/NumPy compatibility buys a
consistent set of decisions from day one: value semantics (`Arc` copy-on-write),
column-major matrices, a module registry, and GPU residency.

---

## Example

```python
# examples/scripts/m5_demo.nf — block simulation
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

## Key Features

### The `.nf` script language

0-based indexing, indentation blocks, `@` for matrix multiply and `*` for elementwise,
half-open slices, boolean masking, fancy indexing, size-1 broadcasting, chained comparisons,
**first-class function values** (closures, lambdas, `nonlocal`, `g = math.sin`),
comprehensions (list/dict/set), containers (list, dict, **tuple**, **set**) with
destructuring, membership and iteration, f-strings with format specs, `try`/`except`/`raise`,
and `global`.

### Value semantics

After `B = A`, mutating `B` leaves `A` untouched — backed by `Arc` copy-on-write.
Matrices are column-major; dtypes are `f64`, `complex128`, and `bool` (comparisons produce
bool arrays that promote to 0/1 on arithmetic).

### Module system

Signature-based dispatch with a capability registry so modules can share functionality:

| Module | Contents |
|---|---|
| `math` | trig, hyperbolic, `log2`, `clip`, `hypot`, … |
| `linalg` | QR / LU / SVD / eig, `norm`, `pinv`, `lstsq`, `kron` (faer) |
| `poly` | `polyval`, `polyfit`, `roots`, `polyder` |
| `signal` | FFT, `convolve`, windows, `lfilter` / `filtfilt` / `firwin` |
| `interp` | `interp1d` (linear/nearest/previous/next), natural cubic spline |
| `ode` | euler, rk2, heun, rk4, rk45, implicit solvers, events, `t_eval` |
| `control` | `tf` / `ss`, series, feedback, poles, bode, `c2d`, `lsim` |
| `stats` | `cumsum`, `corr`, `percentile`, … |
| `optimize` | `minimize`, `root`, `curve_fit` |
| `io` | CSV / JSON / text, workspace persistence |
| `plot` | line, scatter, bar, hist, legend, grid, log scale |
| `string`, `flow` | string utilities, block simulation |
| `ecos` *(optional)* | Bank of Korea economic statistics Open API (`--features ecos`) |

### NumFlow — block-diagram simulation

Feedthrough-based scheduling, feedback loops, and `.nflow` JSON serialization, plus a
desktop visual editor. Standard blocks (Step, Gain, Sum, Integrator, Constant, Product,
Saturation, Sine, Ramp, DeadZone, Switch, Quantizer), control blocks (PID, filtered
derivative), runtime function blocks (`flow.Function(f)`), and module blocks
(`control.TransferFunction`, `interp.lookup_block` for table nonlinearities).

### GPU backend

wgpu (Metal / Vulkan / DX12) f32 operations with **full device residency**: in
`C = A @ B; D = C @ C` the intermediate stays on the GPU and only comes down at
`print(D[0,0])`. `stats.sum/mean/min/max` compute over resident data with a GPU tree
reduction instead of downloading the whole buffer.

### Desktop shell

An egui-based shell (console, variable browser, editor, Figure, Flow editor, laid out
Scilab-style) that shares the exact same runtime as the CLI/REPL over a protocol.

---

## Quick Start

```bash
cargo run -p numforge-cli                      # REPL (history, multiline editing)
cargo run -p numforge-cli -- examples/scripts/v03_demo.nf   # v0.3 language tour
cargo run -p numforge-desktop                  # desktop shell
```

Per-module tour examples live in `examples/scripts/` — every one of them self-verifies with
`assert` against a closed-form solution, and the `examples_smoke` regression test runs them
in CI:

```bash
cargo run -p numforge-cli -- examples/scripts/linear_algebra.nf   # solve/qr/lu/svd/eig
cargo run -p numforge-cli -- examples/scripts/statistics.nf       # descriptive stats, quantiles, correlation
cargo run -p numforge-cli -- examples/scripts/containers.nf       # list/dict/set/tuple, closures
cargo run -p numforge-cli -- examples/scripts/ode_dynamics.nf     # solve_ivp, events, dense output
cargo run -p numforge-cli -- examples/scripts/signal_pipeline.nf  # FFT, filters, spectrum
cargo run -p numforge-cli -- examples/scripts/control_design.nf   # tf/step/bode
cargo run -p numforge-cli -- examples/scripts/nonlinear_flow.nf   # NumFlow discontinuity & lookup blocks
```

```text
>>> A = [[1, 2], [3, 4]]
>>> import linalg
>>> q, r = linalg.qr(A)
>>> set_backend("auto")                        # large matmuls go to the GPU when available
```

---

## Deployment & Embedding

- **User `.nf` modules** — drop a `.nf` file on the search path
  (`$NUMFORGE_PATH`, `~/.numforge/modules`, or the current directory) and `import` it.
  No recompilation.
- **Foreign-language embedding** — a `numforge-ffi` C ABI with C, Java (Panama),
  Python (ctypes), and Rust bindings, with bidirectional data transfer.
- **Embedded boards** — SSH deployment to Raspberry Pi 1 / Zero (ARMv6) via a slim,
  GPU-free CLI cross-build (`--no-default-features`). The custom Yocto image
  (`meta-numforge`) is split out as a separate downstream project, since a
  gigabyte-scale BSP does not belong in core.

---

## Design Notes

The design documents are normative — when a semantic question comes up, `architecture.md`
and `docs/` answer it before the code does.

v0.10 added foreign-language embedding (FFI), user `.nf` script modules, and a deeper
desktop shell (Figures in separate OS windows, per-file editor tabs, project root
management). It also rewrote `architecture.md` to match the real state of the v0.x line and
fixed five bugs surfaced by an adversarial audit. v0.9 added the NumFlow nonlinear blocks
and the VS Code-style desktop UI.
