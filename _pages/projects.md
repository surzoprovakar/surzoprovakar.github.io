---
layout: archive
title: ""
permalink: /projects/
author_profile: true
---

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<h2><span style="font-variant:small-caps;">Research Projects</span></h2>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: flex-start;">

  <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>ER-𝜋: Exhaustive Integration Testing via Optimized Interleavings Replay</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/ER-PI-Simple.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Introduced exhaustive integration testing for replicated data libraries, boosting test coverage by <b>32%</b> by applying domain-specific constraints to optimize interleavings replay between libraries and application interactions.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>Go, Java, JavaScript, Datalog</code>
    </p>
    <a href="https://people.cs.vt.edu/provakar/Middleware_25__ER_%f0%9d%9c%8b_.pdf" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Paper</a>
    <a href="https://github.com/SoftwareInnovationsLab/ER-PI-Middleware25-Artifact" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

   <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>Handling Update Errors in Replicated Data Systems via Distributed Tracing</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/HUE.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Created a Middleware service, enhancing error handling for replicated data libraries by <b>25%</b> by tracing the distributed effects of erroneous updates and using integration techniques without modifying library code.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>Go, JavaScript, C#, C++</code>
    </p>
    <a href="https://github.com/surzoprovakar/Error-Handling-Middleware" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

  <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>Breaking Language Barriers in Implementing and Extending RDL</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/BabelRDL.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Provided multilingual support for replicated data systems, increasing performance by <b>54%</b> and software quality by <b>38%</b> by empowering application developers to choose the best programming language for application needs.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>Go, Java, JavaScript, C++, Protobuf</code>
    </p>
    <a href="https://github.com/surzoprovakar/Multilingual-RDL" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

   <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>AUTO-UNDO: Undoing CRDT Operations Automatically via Metaprogramming</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/Auto-Undo.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      An automatic approach to generate and actuate undo functionality for Conflict-free Replicated Data Type (CRDT) libraries, improving undo efficiency by <b>16%</b> without manual modification of the library code.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>JavaScript, Python</code>
    </p>
    <a href="https://people.cs.vt.edu/provakar/CloudCom_23_Auto_Undo.pdf" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Paper</a>
    <a href="https://github.com/surzoprovakar/Auto_Undo" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

  <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>Improving Reliability for Data Replication in Distributed Systems</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/trust_replica.png" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Ensured trustworthy distributed data replication by integrating Autonomous Trust Management (ATM) and Service Level Agreement (SLA) into replicated data systems, enhancing system reliability by <b>21%</b> under malicious updates.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>Go, Python, JSON</code>
    </p>
    <a href="https://people.cs.vt.edu/provakar/Course_Projects/Improving-Security-and-Reliability-for-Replicated-Data.pdf" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Report</a>
    <a href="https://github.com/surzoprovakar/CS6204-Project-Trust-RDL" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

   <div style="width: 400px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>D-CRDT: Eventual Consistent Platform-independent CRDT Implementation</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/D-CRDT.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Developed a platform-independent CRDT system using Docker containers, enabling seamless deployment across various operating systems and integrating Kubernetes for scalability and load balancing.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>Go, Docker, Kubernetes</code>
    </p>
    <a href="https://people.cs.vt.edu/provakar/Course_Projects/D-CRDT.pdf" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Report</a>
    <a href="https://github.com/surzoprovakar/CS6704-Project-D_CRDT" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Code</a>
  </div>

</div>

<br>

<h2><span style="font-variant:small-caps;">Samsung Projects</span></h2>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: flex-start;">

  <div style="width: 300px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>Windows Samsung Notes</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/samsung-notes-icon.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Implemented <b>6</b> new features and engineered a &#x2206;-data transferable middleware between Notes and Samsung Cloud, reducing synchronization latency by <b>27%</b>.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>C#, Java, C++, XAML</code>
    </p>
    <a href="https://www.samsung.com/us/support/owners/app/samsung-notes" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Learn More</a>
  </div>

   <div style="width: 300px; border: 1px solid #ccc; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <center><b>Windows SmartThings</b></center>
    <div style="width: 100%; height: 160px; border-radius: 6px; overflow: hidden;">
      <img src="/images/smartthings.svg" alt="Project Image" style="width: 100%; height: 100%; object-fit: fill; display: block;">
    </div>
    <p style="font-size: 0.95em; line-height: 1.4; text-align: justify; margin-top: 10px;">
      Improved user experience through GUI enhancements, bug fixes, and leadership in quality assurance, including testing, issue reporting, and documentation.
    </p>
    <p style="font-size: 0.9em; line-height: 1.4; text-align: justify; margin-top: 8px; margin-bottom: 0;">
      <b>Stack:</b><code>C#, C++, XAML</code>
    </p>
    <a href="https://www.samsung.com/us/smartthings/" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 14px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Learn More</a>
  </div>

</div>

<br>

<h2><span style="font-variant:small-caps;">Selective Academic Projects</span></h2>

<h5>Online Flea Market</h5>
Engineered an e-commerce software application for buying and selling second-hand products, creating a user-friendly online marketplace (<code>Python, Django, JavaScript, and CSS</code>). <a href="https://github.com/surzoprovakar/Online-Flea-Mart" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CODE-100000?style=flat&logo=github&logoColor=white&labelColor=blue" alt="Code" />
</a>

<h5>Generating Probabilistic Logic Program from Java Annotation</h5>
Created a framework for the automatic generation of probabilistic logic via Java annotations, integrating probability calculations in Java applications (<code>Java, C++, Prolog</code>). <a href="https://github.com/surzoprovakar/cplint_from_java_annotations" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CODE-100000?style=flat&logo=github&logoColor=white&labelColor=blue" alt="Code" />
</a>


<h5>Relevance Ranking for Tweet Search</h5>
Implemented an Information Retrieval (IR) model using BM25, RankNet, and TF-Ranking to rank the relevance of Twitter data about Covid-19 (<code>Python, TensorFlow</code>). <a href="https://github.com/kanguyen-vn/covidtweet_rr" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CODE-100000?style=flat&logo=github&logoColor=white&labelColor=blue" alt="Code" />
</a>

<h5>Sentiment Analysis</h5>
Implemented movie rating prediction using Deep Learning's models, including LSTM (Long Short Term Memory), MLP (Multi Layer Perceptron), CNN (Convolutional Neural Network) (<code>Python, TensorFlow</code>). <a href="https://github.com/surzoprovakar/Sentiment-Analysis" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CODE-100000?style=flat&logo=github&logoColor=white&labelColor=blue" alt="Code" />
</a>


<h5>Virginia Tech Entomology Collection (VTEC) Visualization</h5>
Visualized a 3D model of an insect specimen, focusing on the domains of Geographical, Network Graph, and Classification by applying D3-observable (<code>JavaScript</code>). <a href="https://observablehq.com/d/c600bb5cecd9f407" target="_blank" rel="noopener noreferrer"> <img src="https://img.shields.io/badge/REPORT-black?style=flat&logo=bug&logoColor=white&labelColor=red" alt="Report" />
</a>

<h5>iCab</h5>
Implemented a taxi-hiring application for Android platforms, featuring ride-booking, real-time tracking, and user management (<code>Java, Android Studio, Firebase</code>). <a href="https://github.com/surzoprovakar/Taxi-Hiring" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CODE-100000?style=flat&logo=github&logoColor=white&labelColor=blue" alt="Code" />
</a>
