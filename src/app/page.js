"use client"
import Image from 'next/image';

import React from 'react'
import { motion } from 'framer-motion'
import './globals.css' 

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const Page = () => {
  return (
    <div className='all'>
      {/* Hero Section */}
      <header className="hero-section">
        <motion.img 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src='/images/momen ahmed.jpeg' 
          className="profile-img" 
        />
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Momen Ahmed Mohamed |  Full-Stack Web Developer
        </motion.h1>
        <p className="hero-subtitle">Building scalable web applications & seamless user experiences</p>
        
        <div className="hero-buttons">
          <motion.a 
            href="#projects" 
            className='bt main-bt'
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 85, 212, 0.8)" }}
          >
            View Projects
          </motion.a>
        <motion.a 
  href="/my-cv.pdf" 
  download="My_Name_CV.pdf" 
  className="btn-download"
  style={{ display: 'inline-block', textDecoration: 'none' }} // لضمان ظهور التنسيق ككتلة زر
  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 210, 255, 0.8)" }}
>
  Download CV ▹
</motion.a>
        </div>
      </header>

      {/* About Me Section - تم تعديله ليصبح بنظام الـ Inner Cards */}
      <motion.section className="section-card" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>About Me</h2>
        
        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '15px' }}>
          <div className="project-header">
            <h3>Education</h3>
            <span className="tag">Academic</span>
          </div>
          <p>Bachelor's Degree in Computer Science and Management Information Systems (Abu Qir Institute, Alexandria).</p>
        </motion.div>

        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '15px' }}>
          <div className="project-header">
            <h3>Certificates and Courses</h3>
            <span className="tag">Certified</span>
          </div>
          <p>Professional Diploma in Full Stack Web Development from AMIT Learning.</p>
        </motion.div>

        <motion.div className="project-inner-card" whileHover={{ x: 10 }}>
          <div className="project-header">
            <h3>Location</h3>
            <span className="tag">Current</span>
          </div>
          <p>Based in Alexandria, Egypt - Open for on site & hybrid & remote opportunities.</p>
        </motion.div>
      </motion.section>

     {/* Technical Skills - تم تحويله لنظام الـ Inner Cards الموحد */}
      <motion.section className="section-card" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Technical Skills</h2>
        
        <div className="skills-grid">
          {/* Frontend Card */}
          <motion.div className="project-inner-card" whileHover={{ x: 10 }}>
            <div className="project-header">
              <h3>Frontend Development</h3>
              <span className="tag">Client-Side</span>
            </div>
            <p style={{ marginTop: '10px', color: '#cbd5e1' }}>
              Building responsive and interactive UIs using:
            </p>
            <ul style={{ marginTop: '10px' }}>
              <li>HTML </li>
               <li>CSS</li>
                <li>JavaScript</li>
              <li>React.jsx </li>
               <li>Next.js</li>
              
             
            </ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div className="project-inner-card" whileHover={{ x: 10 }}>
            <div className="project-header">
              <h3>Backend Development</h3>
              <span className="tag">Server-Side</span>
            </div>
            <p style={{ marginTop: '10px', color: '#cbd5e1' }}>
              Developing robust APIs and server logic with:
            </p>
            <ul style={{ marginTop: '10px' }}>
              <li>PHP </li>
                <li>Laravel 12</li>
              <li>RESTful APIs Design</li>
              <li>MySQL</li>
              <li>Object-Oriented Programming (OOP)</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects & Certificates Section */}
      <motion.section id="projects" className="section-card" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>Projects & Certificates</h2>
        
        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '20px' }}>
          <div className="project-header">
            <h3>BistroBliss - Restaurant App</h3>
            <span className="tag">Full-Stack</span>
          </div>
          <p>Comprehensive web app using Laravel 12 API and React.js.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="https://github.com/momenahmed450-bit" target="_blank" className="contact-link">Source Code ▹</a>
            <a href="https://bistro-bliss-six.vercel.app/" target="_blank" className="contact-link">Live Demo ▹</a>
          </div>
        </motion.div>

        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '20px' }}>
          <div className="project-header">
            <h3>Modern E-Commerce Store</h3>
            <span className="tag">Front-End</span>
          </div>
          <p>High-performance UI/UX focused on Next.js and Tailwind CSS.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="https://github.com/momenahmed450-bit" target="_blank" className="contact-link">Source Code ▹</a>
            <a href="https://e-commerce-react-sable.vercel.app/" target="_blank" className="contact-link">Live Demo ▹</a>
          </div>
        </motion.div>
<motion.div className="project-inner-card cert-card" whileHover={{ scale: 1.02 }}>
  <div className="project-header">
    <h3>Full Stack PHP Diploma</h3>
    <span className="tag">Grade: 95%</span>
  </div>

  {/* عرض السكرين شوت الخاصة بالشهادة */}
<motion.div className="project-inner-card cert-card" whileHover={{ scale: 1.02 }}>
  <div className="project-header">
    <h3>Full Stack PHP Diploma</h3>
    <span className="tag">Grade: 95%</span>
  </div>

  <p style={{ marginTop: '10px' }}>Certified success in Full Stack PHP development.</p>

  {/* ⬇️ حاوية الشهادة - تم تعديلها لتصغير الحجم وتوسيط الصورة ⬇️ */}
  <div 
    className="certificate-image-container"
    style={{ 
      position: 'relative', 
      // --- التعديلات الرئيسية هنا ---
      maxWidth: '400px', // 💡 حدد أقصى عرض تريده للشهادة هنا (مثلاً 400px)
      margin: '20px auto', // 💡 لتوسيط الصورة في المنتصف وإضافة مسافة عمودية
      // ----------------------------
      width: '100%', 
      height: 'auto', 
      borderRadius: '8px', 
      overflow: 'hidden',
      border: '1px solid #444', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      aspectRatio: '1 / 1.414', // 💡 (اختياري) يحافظ على أبعاد الشهادة A4
    }}
  >
    <Image 
      // استخدم نفس المسار الصحيح لديك
      src="/images/image.png" 
      alt="Full Stack PHP Diploma"
      layout="fill" // 💡 استخدم 'fill' هنا لجعل الصورة تملأ الحاوية ذات الحجم المحدد
      objectFit="contain" // 💡 يضمن ظهور الشهادة بالكامل داخل الحاوية
      style={{ 
        borderRadius: '8px'
      }}
      priority
    />
  </div>

</motion.div>

  <p>Certified success in Full Stack PHP development.</p>
  
  <div style={{ marginTop: '10px' }}>
    <a 
      // href="/momen-certificate.pdf" // رابط ملف الـ PDF الأصلي للتحميل
      download="Momen_Ahmed_Certificate.pdf"
      // className="contact-link"
      style={{ color: '#ffd700', textDecoration: 'none' }}
    >
      Certified  Full Stack PHP development ▹
    </a>
  </div>
</motion.div>
      </motion.section>

      {/* Contact Me Section - تم تعديله ليصبح بنظام الـ Inner Cards */}
      <motion.section className="section-card" variants={sectionVariants} initial="hidden" whileInView="visible">
        <h2>Contact Me</h2>
        
        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '15px' }}>
          <div className="project-header">
            <h3>Direct Phone & Whatsapp</h3>
            <span className="tag">Mobile</span>
          </div>
          <p style={{ marginTop: '5px' }}>
            <a href="tel:01221560586" className="contact-link">01221560586</a>
          </p>
        </motion.div>

        <motion.div className="project-inner-card" whileHover={{ x: 10 }} style={{ marginBottom: '15px' }}>
          <div className="project-header">
            <h3>Email Address</h3>
            <span className="tag">Professional</span>
          </div>
          <p style={{ marginTop: '5px' }}>
            <a href="mailto:momenahmed450@gmail.com" className="contact-link">momenahmed450@gmail.com</a>
          </p>
        </motion.div>

        <motion.div className="project-inner-card" whileHover={{ x: 10 }}>
          <div className="project-header">
            <h3>Social Networks</h3>
            <span className="tag">Profiles</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="https://github.com/momenahmed450-bit" target="_blank" className="contact-link">GitHub ▹</a>
            <a href="https://www.linkedin.com/in/momen-ahmed-7726812b6" target="_blank" className="contact-link">LinkedIn ▹</a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Page;
  
  
