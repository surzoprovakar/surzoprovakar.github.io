---
layout: archive
title: ""
permalink: /research/
author_profile: true
---

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<div>
<h3>Publications</h3>

<b>ER-𝜋: Exhaustive Interleaving Replay for Testing Replicated Data Library Integration</b>
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>26th ACM Middleware Conference
<br>Nashville, TN, USA, December 15-19, 2025
<br>
<blockquote>
    <p>A middleware system that provides integration testing support to verify the interactions between replicated data libraries and distributed application logic via exhaustive interleaving replay, reducing the problem space with <ins>four</ins> novel pruning algorithms, replicating <ins>12</ins> known bugs, and uncovering <ins>5</ins> common misconceptions.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25__ER_%f0%9d%9c%8b_.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/surzoprovakar/Integration-Testing" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Datasets</a>
<br>
<br>

<!-- --------------------- -->
<b>Toward Thorough and Practical Integration Testing of Replicated Data Systems</b>
<br><u>Provakar Mondal</u>
<br>26th ACM Middleware Conference (MIDDLEWARE Demos Posters and Doctoral Symposium)
<br>Nashville, TN, USA, December 15-19, 2025
<br>
<blockquote>
    <p>A comprehensive integration testing framework for replicated data systems, increasing testing efficacy by <ins>3.58X</ins> through pruning and prioritizing distributed event interleavings.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25_Thorough_Testing.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<br>
<br>

<!-- --------------------- -->
<b>Understanding Tradeoffs of Replicated Data Library Integration Strategies in Multilingual Environments</b>
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>26th ACM Middleware Conference (MIDDLEWARE Demos Posters and Doctoral Symposium)
<br>Nashville, TN, USA, December 15-19, 2025
<br>
<blockquote>
    <p>An empirical evaluation of two replicated data library integration strategies in multilingual distributed systems, revealing performance-implementation tradeoffs and providing insights into cross-language software architecture design.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25_RDL_Integration.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/surzoprovakar/Multilingual-RDL" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Datasets</a>
<br>
<br>

<!-- --------------------- -->
<b>Undoing CRDT Operations Automatically</b>
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>14th IEEE International Conference on Cloud Computing Technology and Science (CloudCom 2023)
<br>Napoli, Italy, December 4-6, 2023
<br>
<blockquote>
    <p>An automatic approach to generate and actuate undo functionality for Conflict-free Replicated Data Type (CRDT) libraries improving undo efficiency by <ins>16%</ins> without manual modification of the library code.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/CloudCom_23_Auto_Undo.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/surzoprovakar/Undo_Script" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Datasets</a>
<br>
<br>

</div>

<div>
<h3>Research Experience</h3>
</div>

<div style="text-align: justify; margin-bottom: 1rem;">
  <b>Software Innovations Lab</b> &mdash; <i><a href="https://people.cs.vt.edu/tilevich/" target="_blank" rel="noopener noreferrer">Dr. Eli Tilevich</a></i><br>
  <i>Graduate Research Assistant</i><br>
  <b>Research Area:</b> Distributed Systems, Software Engineering, Data Replication, System Support for ML

  <ul>
    <li>Working on system support for replicating domain-specific AI models, aiming to improve user experience and reduce model synchronization latency by prioritizing application utility. <br> 
    <code>Python, TensorFlow, PyTorch, Small Language Model (SLM)</code></li>
    <li>Introduced effective integration testing for replicated data libraries (<a href="https://orbitdb.org/" target="_blank" rel="noopener noreferrer">OrbitDB</a>, <a href="https://osalvador.github.io/ReplicaDB/index.html" target="_blank" rel="noopener noreferrer">ReplicaDB</a>, <a href="https://crdt.tech/" target="_blank" rel="noopener noreferrer">CRDT</a>); increased test coverage by 32% by optimizing interleaving replay of app-library interaction. <br>
    <code>Go, Java, JS, Python, C++</code></li>
    <li>Created comprehensive error handling for replicated data libraries; improved system reliability by 25% under erroneous updates via distributed error tracing and non-intrusive integration. <br>
    <code>Python, Go, JS, C#, C++</code> </li>
    <li>Provided multilingual support for replicated data systems; enhanced performance (54%) and software quality (38%) via a language-agnostic interface for cross-language replica coordination. <br>
    <code>Go, Java, JS, Python, Protobuf</code></li>
  </ul>
</div>


<div style="text-align: justify; margin-bottom: 1rem;">
<b>Undergraduate Thesis</b> &mdash; <i><a href="https://rifatshahriyar.github.io/" target="_blank" rel="noopener noreferrer">Dr. Rifat Shahriyar</a></i><br>
  <ul>
    <li>Enabled GPGPU (General Purpose Graphics Processing Units) Frameworks for HSA (Heterogeneous System Architecture) enabled APUs without Discrete GPU support.</li>
    <li>Devised a toolkit for AMD HSA, accelerated processing units to leverage GPGPU libraries of high-level languages, such as APARAPI (A PARallel API) and TornadoVM.</li>
    <li>Translated the generated OpenCL files to HSA-specific IR (Intermediate Representation) called HSAIL, which we then compiled into runnable BRIG format.</li>
  </ul>
</div>


<!-- #### <font size = "+2.5"><b>Research Interests</b></font>

<img src = "/images/research.png" style = "padding:30px"> -->