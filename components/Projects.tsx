import SectionWrapper from "./SectionWrapper";
import ProjectCard, { Project } from "./ProjectCard";

const FEATURED_PROJECT: Project = {
  title:       "Multi-Vendor Network Automation Toolkit",
  description: "Developed Python-based automation scripts to configure and monitor multi-vendor network devices using SSH and multiprocessing. Automated configuration workflows using Ansible across Linux and Cisco environments.",
  year:        "2025",
  tags:        ["Infrastructure Automation", "Python & Multiprocessing", "SSH & Configuration Management"],
  imageToken:  "[[PROJECT_FEATURED_IMAGE]]",
  imageSrc:    "/images/network-automation.png",
  repoUrl:     "[[NETWORK_AUTOMATION_REPO_URL]]",
};

const OTHER_PROJECTS: Project[] = [
  {
    title:       "Autonomous Rover Control System",
    description: "Contributed to a full-scale autonomous rover by building ROS 2–based perception and motion control pipelines. Integrated sensors and real-time communication across embedded and edge devices.",
    year:        "2022",
    tags:        ["ROS 2 & Robotics Middleware", "Real-Time Systems", "Embedded Systems Integration"],
    imageToken:  "[[ROVER_IMAGE]]",
    imageSrc:    "/images/rover.png",
    liveUrl:     "https://www.youtube.com/watch?v=rbkrRSdEiOA&t=1s",
  },
  {
    title:       "Real-Time Obstacle Avoidance Robot",
    description: "Designed a microcontroller-based obstacle detection and avoidance system using ultrasonic sensors and dynamic motion control logic for real-time navigation.",
    year:        "2021",
    tags:        ["Embedded Systems", "Real-Time Control Logic", "Sensor Integration"],
    imageToken:  "[[OBSTACLE_AVOIDANCE_IMAGE]]",
    imageSrc:    "/images/obstacle-avoidance.png",
    repoUrl:     "https://github.com/Sghoshxperia/Arduino",
  },
  {
    title:       "Robotic Arm Motion Simulator",
    description: "Built a ROS-based simulator for a 3-DOF robotic arm using URDF, MoveIt, and Gazebo to implement motion planning and kinematic visualization.",
    year:        "2021",
    tags:        ["Motion Planning", "Simulation & Kinematics", "ROS Ecosystem"],
    imageToken:  "[[ROBOTIC_ARM_IMAGE]]",
    imageSrc:    "/images/robotic-arm.png",
    repoUrl:     "https://github.com/Sghoshxperia/ROS",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="border-t border-border">
      {/* Swipe-in section header */}
      <div className="swipe-right mb-12">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
          What I&apos;ve built
        </p>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-text-primary"
        >
          Projects
        </h2>
      </div>

      {/* Featured project */}
      <div className="reveal mb-8">
        <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
          Featured
        </p>
        <ProjectCard project={FEATURED_PROJECT} featured />
      </div>

      {/* Grid of other projects */}
      <div className="mt-12">
        <p className="reveal text-xs font-mono text-text-muted uppercase tracking-widest mb-6">
          Other noteworthy projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {OTHER_PROJECTS.map((project, i) => (
            <div key={project.title} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

    </SectionWrapper>
  );
}

