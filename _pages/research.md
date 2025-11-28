---
layout: archive
title: ""
permalink: /research/
author_profile: true
---

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<style>
.abstract.btn.btn-sm {
  border: 1px solid #800000 !important;   
  color: #000 !important;                 
  background: none !important;            
  padding: 2px 6px;
  font-size: 0.85rem;
}

.abstract.btn.btn-sm i {
  color: #000 !important;                 
}

.abstract.btn.btn-sm:hover {
  background: #e0e0e0ff !important;
  text-decoration: none;
}
.hidden { display: none; }

.abstract-block {
  font-size: 0.8rem;                 
  margin-top: 5px;                   
  margin-bottom: -25px;                
  padding: 10px;                      
  border: 1px dotted #800000;         
  width: 100%;                        
  box-sizing: border-box;             
  text-align: justify;  
}

.abstract-block p {
  margin: 0;
}
</style>

<script>
 
  function toggleAbs(button) {
    const abs = button.nextElementSibling;
    const icon = button.querySelector('i');

    abs.classList.toggle('hidden');

    if (abs.classList.contains('hidden')) {
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    } else {
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    }
  }
</script>

<div>
<h3>Publications</h3>

<b>ER&ndash;&pi;: Exhaustive Interleaving Replay for Testing Replicated Data Library Integration</b><br>
<img src="/images/artifact_available_v1.1.png" alt="Artifacts Available Badge" style="height:10%; width:10%;object-fit: contain;"> <img src="/images/artifact_functional_v1.1.png" alt="Artifacts Functional Badge" style="height:10%; width:10%;object-fit: contain;">
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>26th ACM Middleware Conference &mdash; <b>Middleware 2025</b>
<br>Nashville, TN, USA, December 15&ndash;19, 2025
<br>
<blockquote>
    <p>A middleware system that provides integration testing support to verify the interactions between replicated data libraries and distributed application logic via exhaustive interleaving replay, reducing the problem space with <ins>four</ins> novel pruning algorithms, replicating <ins>12</ins> known bugs, and uncovering <ins>5</ins> common misconceptions.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25__ER_%f0%9d%9c%8b_.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/SoftwareInnovationsLab/ER-PI-Middleware25-Artifact" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Dataset</a>

<a class="abstract btn btn-sm" role="button" onclick="toggleAbs(this)">
  <i class="fa fa-angle-down" aria-hidden="true"></i> ABSTRACT
</a>

<div class="hidden abstract-block">
  <p> Modern replicated data systems often rely on libraries integrated with application code. These replicated data libraries exchange asynchronous messages, whose execution orderings are non-deterministic, allowing any message interleaving to occur during system execution. Testing the integration of application code with library code requires considering all possible interleavings, whose detection and simulation pose significant challenges for application developers. In this paper, we present ER-𝜋, a middleware system, designed to detect and replay possible interleavings in replicated data systems.ER-𝜋 identifies potential interleavings for a given code segment and applies four novel pruning techniques to reduce the complexity of the problem space. Subsequently, it replays the remaining interleavings to perform the specified integration testing tasks. To assess the applicability and efficacy of ER-𝜋, we integrated it with third-party replicated data libraries across various programming languages. Our experiments demonstrate ER-𝜋's capability to replicate 12 known bugs and uncover 5 types of common misconceptions associated with replicated data libraries. Given that integration testing is essential for ensuring correctness and robustness, the design ofER-𝜋 holds promise in extending these testing benefits to the realm of replicated data systems. </p>
</div>
<br>
<br>

<!-- --------------------- -->
<b>Toward Thorough and Practical Integration Testing of Replicated Data Systems</b>
<br><u>Provakar Mondal</u>
<br>26th ACM Middleware Doctoral Symposium &mdash; <b>Middleware 2025</b>
<br>Nashville, TN, USA, December 15&ndash;19, 2025
<br>
<blockquote>
    <p>A comprehensive integration testing framework for replicated data systems, increasing testing efficacy by <ins>3.58X</ins> through pruning and prioritizing distributed event interleavings.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25_Thorough_Testing.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/surzoprovakar/Integration-Testing" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Dataset</a>

<a class="abstract btn btn-sm" role="button" onclick="toggleAbs(this)">
  <i class="fa fa-angle-down" aria-hidden="true"></i> ABSTRACT
</a>

<div class="hidden abstract-block">
  <p> Highly available applications rely on replicated data, but complex event interleavings between application logic and replicated data libraries (RDLs) often cause subtle integration bugs. Detecting such bugs is challenging due to the inherent nondeterminism of distributed execution, as certain bugs can only manifest under specific interleavings. Correctness testing, therefore, requires replaying all possible interleavings—a challenging task due to the combinatorial explosion of the interleaving space. My doctoral dissertation addresses this challenge with ER-𝜋, a middleware framework that exercises all possible interleavings between the application code and RDL; it also eliminates redundant and impossible interleavings via novel pruning techniques. Initial results show that ER-𝜋successfully reproduces 12 real-world bugs across multiple opensource RDLs while significantly reducing the interleaving search space. Our ongoing work extends this foundation with interleaving prioritization, ranking interleavings execution by their likelihood of exposing faults—particularly those introduced by recent code changes, thus accelerating bug discovery. This research supports developers responsible for ensuring the correctness and reliability of replicated data systems. </p>
</div>
<br>
<br>

<!-- --------------------- -->
<b>Understanding Tradeoffs of Replicated Data Library Integration Strategies in Multilingual Environments</b>
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>26th ACM Middleware Demos and Posters Symposium &mdash; <b>Middleware 2025</b>
<br>Nashville, TN, USA, December 15&ndash;19, 2025
<br>
<blockquote>
    <p>An empirical evaluation of two replicated data library integration strategies in multilingual distributed systems, revealing performance-implementation tradeoffs and providing insights into cross-language software architecture design.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/Middleware_25_RDL_Integration.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://github.com/surzoprovakar/Multilingual-RDL" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Dataset</a>

<a class="abstract btn btn-sm" role="button" onclick="toggleAbs(this)">
  <i class="fa fa-angle-down" aria-hidden="true"></i> ABSTRACT
</a>

<div class="hidden abstract-block">
  <p> Modern distributed systems replicate data across multiple execution sites by means of special-purpose replicated data libraries (RDLs), which provide read-write data access and synchronization. Programming languages often need to be mixed across replica sites to meet business requirements and resource constraints. Because RDLs are typically written in a single language, integrating them in multilingual environments requires special-purpose code, whose characteristics are poorly understood. We aim to bridge this knowledge gap by reviewing two key strategies for integrating RDLs in multilingual environments: (1) foreign-function interface (FFI) and (2) common data format (CDF). Our preliminary results indicate performance and implementation tradeoffs: CDF offers latency and memory consumption advantages, while incurring an additional implementation burden. With modern distributed systems utilizing multiple languages, our findings can inform the design of RDLs for multilingual replicated data systems. </p>
</div>
<br>
<br>

<!-- --------------------- -->
<b>Undoing CRDT Operations Automatically</b>
<br><u>Provakar Mondal</u> and Eli Tilevich
<br>14th IEEE International Conference on Cloud Computing Technology and Science &mdash; <b>CloudCom 2023</b>
<br>Napoli, Italy, December 4&ndash;6, 2023
<br>
<blockquote>
    <p>An automatic approach to generate and actuate undo functionality for Conflict-free Replicated Data Type (CRDT) libraries improving undo efficiency by <ins>16%</ins> without manual modification of the library code.</p>
</blockquote>
<a href="https://people.cs.vt.edu/provakar/CloudCom_23_Auto_Undo.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-success text-decoration-none">PDF</a>
<a href="https://people.cs.vt.edu/provakar/Auto_Undo.pdf" target="_blank" rel="noopener noreferrer" class="btn-sm btn-warning text-decoration-none">Slide Deck</a>
<a href="https://github.com/surzoprovakar/Undo_Script" target="_blank" rel="noopener noreferrer" class="btn-sm btn-info text-decoration-none">Code and Dataset</a>

<a class="abstract btn btn-sm" role="button" onclick="toggleAbs(this)">
  <i class="fa fa-angle-down" aria-hidden="true"></i> ABSTRACT
</a>

<div class="hidden abstract-block">
  <p> In a distributed replicated data system, Conflict-free Replicated Data Types (CRDTs) keep data replicas consistent on different nodes, while providing intuitive programming abstractions for accessing and modifying the replicas. Due to user errors, program bugs, or hardware malfunctions, a CRDT can be updated incorrectly, so the effect of the executed CRDT update operations needs to be undone. However, because CRDT libraries rarely include the undo capability, adding it requires modifying source code by hand, a task that is hard to accomplish in a modular and reusable fashion. As a result, programmers end up adding this advanced functionality in an ad-hoc fashion, with the resulting code being hard to understand, maintain, and reuse. To address this problem, this paper presents AUTO-UNDO, an automatic approach that generates and actuates undo functionality for existing CRDT libraries, based on simple configurations and without modifying the library code by hand. The configurations specify which CRDT operations undo each other and the conditions that trigger the execution of undo procedures. Based on the configuration, AUTO-UNDO generates and actuates a sequence of update operations that undo the specified updates on a given replica. We have implemented and evaluated AUTO-UNDO in JavaScript, a popular CRDT language, demonstrating our approach's effectiveness, flexibility, and efficiency. Our experiences show that AUTO-UNDO effectively provides the undo capability for CRDT-based applications, thus streamlining the complexity of adding features to distributed programming frameworks. </p>
</div>
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