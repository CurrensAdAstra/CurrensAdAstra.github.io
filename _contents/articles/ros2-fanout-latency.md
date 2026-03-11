---
title: "Understanding ROS 2 Fan-Out Latency"
date: 2026-03-11
category: articles
tags: [ros2, robotics, latency, distributed-systems, performance]
---

# Understanding ROS 2 Fan-Out Latency

ROS 2 is designed around a publish–subscribe communication model built on top of DDS (Data Distribution Service).  
This architecture allows multiple subscribers to receive the same message from a single publisher without requiring explicit coordination between nodes.

In theory, this should scale well. In practice, however, the latency behavior of ROS 2 can become surprisingly complex when the number of subscribers increases.  
In this article I discuss a phenomenon commonly observed in experiments: **fan-out latency growth**.

---

# The Fan-Out Communication Model

In ROS 2, a typical communication pattern looks like this:
> Publisher → DDS → Subscriber 1
> Subscriber 2
> Subscriber 3
> ...
> Subscriber N


One publisher produces a message that must be delivered to many subscribers.  
The number of subscribers connected to a publisher is often referred to as **fan-out**.

In small systems the overhead is negligible.  
But as fan-out increases, the latency distribution can change significantly.

---

# Why Latency Increases with Fan-Out

There are several factors contributing to this behavior.

## 1. Message Replication and Delivery

DDS implementations typically replicate messages internally for each subscriber.  
Even when shared memory transport is used, internal bookkeeping and message dispatch still introduce overhead.

As the number of subscribers increases, the middleware must perform additional work:

- message serialization or memory reference management
- transport-layer dispatch
- queue management for each subscriber

These operations add cumulative overhead.

---

## 2. Executor Scheduling

ROS 2 nodes are usually executed using an **executor model**.

A typical configuration uses:

- a single-threaded executor, or
- a multi-threaded executor with callback queues

When many subscribers receive the same message, the system must schedule many callbacks almost simultaneously.

This can cause:

- increased **context switching**
- CPU cache pressure
- callback queue contention

As a result, latency variability increases.

---

## 3. Operating System Scheduling

Even if DDS and ROS 2 behave efficiently, the operating system scheduler becomes part of the problem.

When multiple subscriber callbacks become runnable at the same time:

- the scheduler must decide execution order
- threads may preempt each other
- CPU migration may occur

These effects are especially visible on embedded platforms with limited cores.

---

# Tail Latency Effects

One interesting observation is that **median latency often remains stable**, while **tail latency grows rapidly**.

For example:

| Fan-out | Median Latency | p99 Latency |
|-------|---------------|------------|
| 4     | small change  | moderate increase |
| 16    | stable        | large increase |
| 64    | stable        | extreme spikes |

This behavior resembles the well-known *Tail at Scale* phenomenon in distributed systems.

Even if most messages are delivered quickly, the slowest messages dominate system performance in real-time applications.

---

# Practical Implications

This behavior has several practical consequences for robotics systems.

## Real-Time Control

Systems that rely on tight control loops may experience jitter when fan-out grows.

Examples include:

- UAV control systems
- sensor fusion pipelines
- perception processing graphs

## System Observability

The problem often becomes visible only when detailed measurements are performed.

Typical debugging tools include:

- tracing tools
- executor instrumentation
- OS-level scheduling metrics

Understanding the interaction between middleware and the OS scheduler is essential.

---

# Mitigation Strategies

Several approaches can reduce fan-out latency effects.

### Reduce Callback Contention

- distribute subscribers across multiple executors
- separate high-frequency and low-frequency callbacks

### Adjust QoS Policies

ROS 2 QoS parameters affect message buffering and delivery behavior.

Relevant settings include:

- history depth
- reliability mode
- deadline constraints

### CPU Affinity and Scheduling

Pinning executors to specific cores can reduce scheduling overhead.

This approach is particularly useful on embedded platforms.

---

# Conclusion

ROS 2 fan-out latency illustrates a broader systems principle:

> Communication scalability depends not only on middleware design but also on executor architecture and operating system scheduling.

Understanding these interactions is essential when building robotics systems that must operate reliably under real-world constraints.

As robotics platforms grow more complex, performance analysis of middleware behavior will become increasingly important.

---

# Notes

This article summarizes observations from ongoing experiments on ROS 2 communication latency and system-level scheduling behavior.

Future posts will explore:

- ROS 2 executor scheduling behavior
- context-switch effects in robotics workloads
- performance comparisons across DDS implementations
