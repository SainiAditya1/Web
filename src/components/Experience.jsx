import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <section id="experience">
        <div className="experience-item">
          <img src="assets/gsoc.png" alt="GSOC" />
          <div>
            <h3>Google Summer of Code '23 (Contributor)</h3>
            <p>May 2023 - Sep 2023 · 5 mos</p>
            <p>Edinburgh, Scotland, United Kingdom · Remote</p>
            <ul>
              <li>
                Created an Automated Installation Script in Python to simplify
                gprMax setup, automating OS detection, dependency installation,
                software downloads, environment setup, and Cython module
                compilation, enhancing user convenience and enabling seamless
                updates.
              </li>
              <li>
                Developed a Docker Image containing gprMax and dependencies,
                allowing users to run gprMax in a containerized environment
                without manual dependency installations, promoting ease of use,
                version management, and cross-platform compatibility.
              </li>
              <li>
                Streamlined gprMax installation, reducing user effort and
                potential errors by offering a one-click installation solution.
              </li>
              <li>
                Enhanced project scalability and accessibility through Docker,
                making it effortless to distribute and manage various gprMax
                versions across diverse machines and operating systems.
              </li>
              <li>
                Demonstrated expertise in software development, system
                optimization, and project management while contributing to the
                "Improved Installation Tools" project.
              </li>
            </ul>
            <p>Linux, Compilers and +7 skills</p>
          </div>
        </div>

        <div className="experience-item">
          <img src="assets/infosys.png" alt="Infosys" />
          <div>
            <h3>Campus Ambassador</h3>
            <p>May 2022 - May 2023 · 1 yr 1 mo</p>
            <p>Remote</p>
            <ul>
              <li>Represented Infosys in my institute organised events.</li>
            </ul>
            <p>Leadership and Management</p>
          </div>
        </div>

        <div className="experience-item">
          <img src="assets/smartintern.jpeg" alt="SmartInternz" />
          <div>
            <h3>Android Developer</h3>
            <p>Aug 2022 - Sep 2022 · 2 mos</p>
            <p>Remote</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
