/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Printer, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ATSResume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="ats-resume-view" className="py-12 md:py-24 bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
      {/* Informative Header Banner */}
      <div className="max-w-4xl mx-auto px-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl print:hidden">
        <div className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] text-amber-500 font-extrabold uppercase tracking-widest">
              Professional Resume
            </span>
          </div>
          <h2 className="font-sans text-xl font-bold text-slate-100">
            Clean & Printable Resume
          </h2>
          <p className="font-sans text-xs text-slate-400 max-w-lg mt-1">
            A traditionally formatted professional layout. Click below to generate or save a print-ready PDF version of my resume.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-400/15 cursor-pointer transition-colors shrink-0"
        >
          <Printer size={16} />
          <span>Save / Print PDF</span>
        </button>
      </div>

      {/* Printable Sheet Shell Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        
        {/* The Actual "Paper" Resume Page */}
        <div 
          id="printable-resume-area"
          className="bg-white text-slate-900 p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl shadow-slate-950/40 border border-slate-200/40 w-full font-sans text-left transition-all duration-300 print:shadow-none print:border-none print:p-0 print:bg-white print:text-black print:rounded-none"
        >
          {/* Print CSS Inject rules to hide outside modules when window.print() is called */}
          <style dangerouslySetInnerHTML={{__html: `
            @media print {
              body * {
                visibility: hidden;
              }
              #printable-resume-area, #printable-resume-area * {
                visibility: visible;
              }
              #printable-resume-area {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                margin: 0;
                padding: 0 !important;
                background: white !important;
                color: black !important;
              }
              header, footer, nav, button, .print\\:hidden {
                display: none !important;
              }
            }
          `}} />

          {/* Header Block */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-indigo-200/80 pb-6 mb-6">
            <div className="text-left">
              <h1 className="text-4xl font-light tracking-wide text-slate-800 print:text-black">
                Keerthanavalli R
              </h1>
              <p className="text-sm font-medium italic text-slate-500 mt-1">
                Full-Stack Developer | React.js | PHP
              </p>
            </div>

            {/* Direct Contacts Info */}
            <div className="flex flex-col gap-1 text-[11px] text-slate-600 print:text-slate-800 font-medium sm:text-right">
              <div>Karaikudi</div>
              <div>Sivagangai, Tamil Nadu</div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Phone size={10} className="text-slate-400" />
                <span>+91 96775 25528</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Mail size={10} className="text-slate-400" />
                <a href="mailto:rkvravindran4623@gmail.com" className="hover:underline">rkvravindran4623@gmail.com</a>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <span className="w-2.5 h-2.5 inline-flex items-center justify-center text-[10px] text-slate-400 font-bold font-mono">🌐</span>
                <a href="https://keerthanavalli-portfolio-fsd.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">keerthanavalli-portfolio-fsd.vercel.app</a>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Linkedin size={10} className="text-slate-400" />
                <a href="https://linkedin.com/in/keerthanavallirkv" target="_blank" rel="noreferrer" className="hover:underline">keerthanavallirkv</a>
              </div>
            </div>
          </div>

          {/* Summary / Profile */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[5px] bg-slate-900" />
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-800">Summary</h2>
            </div>
            <p className="text-[11px] text-slate-700 print:text-slate-900 leading-relaxed font-sans text-justify">
              Results-driven Full-Stack Developer with 3 years of experience in developing and maintaining scalable web applications, CRM systems, and inventory management platforms. Experienced in working on multiple full-stack projects involving frontend and backend development, API integration, and database management. Strong understanding of React.js, PHP, Laravel, TypeScript, and MySQL, with hands-on experience in building responsive user interfaces and secure backend services. Skilled in developing RESTful APIs, implementing authentication workflows, and collaborating with teams to deliver efficient and maintainable solutions.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[5px] bg-slate-900" />
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-800">Experience</h2>
            </div>
            
            <div className="space-y-4">
              {/* Exp 1 */}
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Full-Time Freelance Full-Stack Developer, <span className="font-normal italic text-slate-600">DevBeans, Remote</span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">Aug 2025 – Present</span>
                </div>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Engineered custom CRM systems and business dashboards for enterprise clients, automating workflow pipelines and reducing manual data-entry overhead
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Developed secure backend modules and database schemas using PHP and MySQL, implementing robust REST APIs and granular access control list (ACL) rules
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented highly responsive frontend layouts and interactive UI components using React.js and TypeScript, improving overall user retention
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Crafted custom WordPress websites and theme modules for business clients, handling custom plugin architecture and layout designs
                  </li>
                </ul>
              </div>

              {/* Exp 2 */}
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Technical Lead – Full-Stack Developer, <span className="font-normal italic text-slate-600">Codeshell Technologies, Chennai</span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">Oct 2024 – Jul 2025</span>
                </div>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Directed an engineering team in building secure CRM and inventory management platforms, delivering all core milestones ahead of schedule
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Refactored legacy PHP and Laravel codebases and optimized complex SQL database queries, improving application load performance and backend processing efficiency
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Instituted Agile methodologies and conducted weekly team code reviews to ensure compliance with best practices and minimize post-deployment bugs
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Delivered both collaborative team-based software products and independent full-stack web applications from initial requirements to final deployment
                  </li>
                </ul>
              </div>

              {/* Exp 3 */}
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Frontend and UI/UX Developer, <span className="font-normal italic text-slate-600">Codeshell Technologies, Remote, Chennai</span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">Nov 2023 – Sep 2024</span>
                </div>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Created reusable React.js UI components and modular design elements, streamlining frontend development workflow across the engineering team
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Converted high-fidelity, complex Figma wireframes into pixel-perfect, responsive user interfaces using HTML5 and CSS3
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Integrated frontend applications with REST APIs, handling dynamic data rendering for high-traffic public-facing platforms
                  </li>
                </ul>
              </div>

              {/* Exp 4 */}
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Teaching Professional, <span className="font-normal italic text-slate-600">Education Sector, Karaikudi, Tamil Nadu</span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">Nov 2023 – Sep 2024</span>
                </div>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Instructed students on computer science fundamentals and modern programming paradigms, achieving strong course completion and understanding
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Guided students through targeted debugging exercises and code logic building, improving average practical test performance
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Taught foundational and practical concepts in HTML, CSS, PHP, MySQL, and C++
                  </li>
                </ul>
              </div>

              {/* Exp 5 */}
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Frontend Developer Intern, <span className="font-normal italic text-slate-600">Senchola Technology Solutions, Remote</span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">Oct 2023 – Dec 2023</span>
                </div>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Constructed responsive frontend layouts using React.js and Bootstrap, ensuring perfect cross-device compatibility and browser layouts
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Assisted lead developers in debugging complex UI components and optimizing web page rendering speeds and scripts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page break element for printing to force clean transition to page 2 */}
          <div className="print:page-break-after" />

          {/* Projects */}
          <div className="mb-6 print:mt-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[5px] bg-slate-900" />
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-800">Projects</h2>
            </div>

            <div className="space-y-4">
              {/* Project 1 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  ServiceApp – Technician Work Management Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">PHP, MySQL, JavaScript</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Architected a task assignment and real-time attendance tracking system for field service personnel, streamlining dispatch operations
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented access control and admin dashboards, providing managers with comprehensive visibility into workflow status
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Dealer Inventory Management System
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">PHP, MySQL, JavaScript</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Designed inventory tracking and supplier management modules, reducing stock discrepancies significantly
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Automated billing and customer management systems, decreasing invoice generation turnaround time
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Mortoplux CRM Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, PHP, MySQL</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Developed a centralized client dashboard to manage large-scale records securely with Role-Based Access Control (RBAC)
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Integrated reporting and analytics tools, enabling data-driven decision-making and increasing sales efficiency
                  </li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Coupon Management System
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, PHP, MySQL</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Built a merchant dashboard and automated coupon workflow system, processing daily redemptions seamlessly
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Configured revenue tracking and reporting functionality, improving marketing ROI visibility
                  </li>
                </ul>
              </div>

              {/* Project 5 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  HallBooky & ShineStays Booking Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, Tailwind CSS, PHP, MySQL</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Programmed an end-to-end hotel and event booking engine with real-time scheduling validation to prevent double bookings
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Designed a highly responsive UI and availability management system, increasing mobile booking conversions
                  </li>
                </ul>
              </div>

              {/* Project 6 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Studios Web Application
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">WordPress, PHP, CSS</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Customized WordPress themes and plugins for business websites, enhancing site loading speed
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Optimized responsive design and overall user experience, reducing bounce rates
                  </li>
                </ul>
              </div>

              {/* Project 7 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  ZarStore – Online Store Application
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">Laravel framework, Tailwind CSS, MySQL</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Engineered an online store featuring product catalogs, cart logic, and secure checkout workflows for extensive listed items
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Configured authentication, order tracking, and gateway integration utilizing the Laravel framework to process daily transactions
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Structured a buyer interface tailored for mobile devices with Tailwind CSS, enhancing session engagement
                  </li>
                </ul>
              </div>

              {/* Project 8 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  LARA SHOPY – E-Commerce Shopping Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">Laravel framework, PHP, MySQL, Tailwind CSS</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Engineered a complete multi-category e-commerce catalog with fuzzy searching and dynamic price filtering
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented an optimized shopping cart workflow, managing user session persistence and price calculations
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Designed secure customer checkout flows and integrated robust database architectures for order tracking
                  </li>
                </ul>
              </div>

              {/* Project 9 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  ZETA EXPEDITIONS – Tours & Travels Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, Vite, TypeScript, Tailwind CSS, Motion React</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Developed an interactive travel reservation interface featuring a searchable destination catalog and real-time category filtering
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Designed smooth layout transitions and high-performance entrance animations using Motion React
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented a responsive user experience optimized across all devices using Tailwind CSS and type-safe TypeScript architectures
                  </li>
                </ul>
              </div>

              {/* Project 10 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Almino CRM – Construction Sector Design System
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">Figma, UI/UX Design, Design Systems, Prototyping, Access Flow</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Designed a comprehensive multi-branch, multi-domain large CRM with robust separation of distinct construction branches and sectors in Figma
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Architected fully functional role-based authentication and authorization flows tailored for Admins, Project Managers, and Onsite Foremen
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Constructed flexible UI component systems and interactive prototypes for dynamic site allocations, machinery scheduling, and logs
                  </li>
                </ul>
              </div>

              {/* Project 11 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Travel Booky – Tours & Travels Booking Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, Vite, TypeScript, Tailwind CSS, 2-Theme Model</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Created an elegant, responsive booking platform for tours & travels supporting a robust custom dual-theme architecture
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented comprehensive vacation search tools and dynamic categorization filters to maximize user selection workflows
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Ensured strong type safety and highly responsive client-side state handling with modular React and modern TypeScript rules
                  </li>
                </ul>
              </div>

              {/* Project 12 */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">
                  Wedding Invite – Animated Digital RSVP & Invitation Platform
                </h4>
                <p className="text-[9px] font-mono italic text-slate-500">React.js, Vite, TypeScript, Google Apps Script, Tailwind CSS, Google Calendar Sync</p>
                <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-700 leading-relaxed">
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Developed a personalized, premium animated digital wedding invitation card optimized for seamless portrait mobile viewing
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Integrated real-time RSVP submission workflows mapping guest database entries securely to Google Sheets using Google Apps Script APIs
                  </li>
                  <li className="relative pl-3 before:content-['○'] before:absolute before:left-0 before:text-slate-400">
                    Implemented one-click Google Calendar Event synchronization allowing guests to dynamically save key wedding schedules
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[5px] bg-slate-900" />
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-800">Skills</h2>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[10.5px] text-slate-800 leading-relaxed">
              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Languages</div>
              <div>JavaScript (ES6+), TypeScript, PHP, Python, HTML5, CSS3, MySQL</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Frontend</div>
              <div>React.js, Tailwind CSS, Bootstrap, Responsive Web Design, UI Development, Cross-Browser Compatibility</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">UI/UX</div>
              <div>Figma, Wireframing, Prototyping, Mockups, User Interface (UI) Design, User Experience (UX) Design, Figma-to-Code Conversion</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Backend</div>
              <div>PHP, Laravel, Node.js, REST API Development, Authentication Systems, Role-Based Access Control (RBAC), API Integration</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Database</div>
              <div>MySQL, Database Design, Query Optimization</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Tools</div>
              <div>Git, GitHub, VS Code, Postman, WordPress</div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Practices</div>
              <div>Agile/Scrum, System Architecture, Code Review, Database Optimization, Debugging, Performance Optimization</div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[5px] bg-slate-900" />
              <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-800">Education</h2>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[10.5px] text-slate-800 leading-relaxed">
              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Post-Graduate</div>
              <div>
                <span className="font-bold">M.E. Communication Systems</span>, Agni College of Technology, Chennai, Tamil Nadu
              </div>

              <div className="font-extrabold text-slate-900 uppercase tracking-wide">Graduate</div>
              <div>
                <span className="font-bold">B.E. Electronics and Communication Engineering</span>, Agni College of Technology, Chennai, Tamil Nadu
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
