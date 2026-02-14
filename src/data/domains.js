export const domains = [
    {
        id: "software-development",
        title: "Software Development",
        about: "Software Development focuses on designing, coding, testing, and maintaining software applications used on computers and servers. Developers solve real-world problems using logic and programming languages. This field builds strong problem-solving ability and system thinking. It offers opportunities in startups, enterprises, and product-based companies. Continuous learning is key due to evolving technologies.",
        description: "Build robust software systems, desktop applications, and tools.",
        toolsText: "Common tools include VS Code for coding, Git and GitHub for version control, compilers and interpreters for running programs, and Linux for understanding system-level operations. Debuggers help find errors efficiently. These tools improve productivity and collaboration. Learning command-line usage is highly beneficial.",
        languages: ["C", "C++", "Java", "Python"],
        environment: ["VS Code", "Git & GitHub", "Compilers (GCC, JDK)", "Linux", "Debuggers"],
        roadmap: [
            "Start with C or Python to understand programming basics and logic.",
            "Learn Object-Oriented Programming concepts and data structures.",
            "Practice by building command-line and small backend projects.",
            "Understand databases, APIs, and software design principles.",
            "Move towards scalable and system-level applications."
        ],
        pdfUrl: "/road_map/software-architect.pdf",
        miniProjects: ["Calculator", "To-Do App", "File Manager"],
        certifications: [
            { name: "C (Cisco NetAcad)", url: "https://www.netacad.com/courses/c-advanced?courseLang=en-US" },
            { name: "C++ (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/c-plus-plus?courseLang=en-US" },
            { name: "Python (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/python?courseLang=en-US" },
            { name: "Java (Simplilearn)", url: "https://www.simplilearn.com/free-java-beginners-course-skillup?term=java" }
        ],
        youtube: [
            { name: "CS & IT Tutorials by Vrushali", url: "https://www.youtube.com/watch?v=IHx9ImEMuzQ&list=PLQ-nEJNYlEV29CBLzIDxcogm6CEZjVad2" }
        ],
        websites: [
            { name: "GeeksforGeeks", url: "https://youtu.be/9rWdjx_InOA?si=KNCi0m6NjcoZePKK" },
            { name: "HackerRank", url: "https://www.hackerrank.com/" },
            { name: "Programiz", url: "https://www.programiz.com/" }
        ],
        projects: [
            { level: "Beginner", title: "Calculator, To-Do App" },
            { level: "Intermediate", title: "File Manager" },
            { level: "Advanced", title: "Custom text editor" }
        ],
        jobs: ["Software Developer", "Backend Engineer", "QA Engineer"]
    },
    {
        id: "web-development",
        title: "Web Development",
        about: "Web Development involves creating websites and web applications accessed through browsers. It combines design, logic, and interactivity. Developers build user interfaces and backend services. The field is fast-growing with demand in all industries. Creativity and problem-solving go hand in hand.",
        description: "Create websites and web applications for the internet.",
        toolsText: "VS Code is used for coding, browsers for testing, Git for version control, and Node.js for backend development. Browser developer tools help debug layouts and scripts. Hosting platforms are also commonly used. These tools enable full-stack development.",
        languages: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
        environment: ["VS Code", "Browsers (Chrome/Firefox)", "Git", "Node.js", "DevTools"],
        roadmap: [
            "Learn HTML, CSS, and JavaScript fundamentals.",
            "Understand responsive design and basic UI principles.",
            "Learn React for frontend development.",
            "Learn Node.js and MongoDB for backend.",
            "Build and deploy full-stack applications."
        ],
        pdfUrl: "/road_map/full-stack.pdf",
        miniProjects: ["Portfolio websites", "Weather apps", "E-commerce sites"],
        certifications: [
            { name: "HTML (Cisco NetAcad)", url: "https://www.netacad.com/courses/html-essentials?courseLang=en-US" },
            { name: "CSS (Simplilearn)", url: "https://www.simplilearn.com/learn-css-basics-free-training-course-skillup" },
            { name: "JavaScript (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/javascript?courseLang=en-US" }
        ],
        youtube: [
            { name: "code io - Tamil", url: "https://www.youtube.com/watch?v=3jkub2c0kLA&list=PLhP5RsB7fhE2lGbXCw35H5opjIAksz2q5" }
        ],
        websites: [
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
            { name: "W3Schools", url: "https://www.w3schools.com/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/" }
        ],
        projects: [
            { level: "Beginner", title: "Portfolio Website" },
            { level: "Intermediate", title: "Weather App (API)" },
            { level: "Advanced", title: "E-commerce Site" }
        ],
        jobs: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        about: "Mobile App Development focuses on building applications for smartphones and tablets. These apps can be developed for Android, iOS, or both using cross-platform frameworks. Mobile apps are used daily for communication, shopping, banking, and learning. This field combines programming logic, UI design, and user experience. Demand is high as mobile usage continues to grow.",
        description: "Build applications for Android and iOS devices.",
        toolsText: "Android Studio is used for native Android development, while Flutter SDK helps build cross-platform apps. VS Code is commonly used for coding and debugging. Emulators and physical devices are used for testing apps. Git is essential for version control and collaboration.",
        languages: ["Java/Kotlin (Android)", "Dart (Flutter)", "JavaScript (React Native)"],
        environment: ["Android Studio", "Flutter SDK", "VS Code", "Git", "Emulators/Devices"],
        roadmap: [
            "Learn Java/Kotlin or Dart basics",
            "Understand mobile UI layouts",
            "Work with APIs and databases",
            "Build complete apps",
            "Publish apps to Play Store/App Store"
        ],
        miniProjects: ["Calculator App", "Notes App", "Expense Tracker", "Quiz App", "Simple Chat App"],
        certifications: [
            { name: "Java (Simplilearn)", url: "https://www.simplilearn.com/free-java-beginners-course-skillup?term=java" },
            { name: "JavaScript (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/javascript?courseLang=en-US" }
        ],
        youtube: [
            { name: "Tamil Hacks - Vlogs", url: "https://www.youtube.com/watch?v=WlNjBmKKpR4&list=PLxLRoiL22apK1yzX_1dWIbudoObRVKuHX" }
        ],
        websites: [
            { name: "Flutter.dev", url: "https://flutter.dev/" },
            { name: "developer.android.com", url: "https://developer.android.com/" }
        ],
        projects: [
            { level: "Beginner", title: "Calculator App" },
            { level: "Intermediate", title: "Notes App" },
            { level: "Advanced", title: "Chat App" }
        ],
        jobs: ["Android Developer", "Flutter Developer", "Mobile App Engineer"]
    },
    {
        id: "ai-machine-learning",
        title: "AI & Machine Learning",
        about: "AI & Machine Learning focus on creating systems that learn from data and make intelligent decisions. These technologies power chatbots, recommendation systems, and image recognition. AI is used across industries like healthcare, finance, and automation. It is one of the highest-paying tech fields. Strong logic and analytical thinking are important.",
        description: "Teach computers to learn from data and make decisions.",
        toolsText: "Python is the main language along with Jupyter Notebook and Google Colab. Libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch are essential. GPUs are often used for faster training. These tools help build and evaluate models efficiently.",
        languages: ["Python", "SQL"],
        environment: ["Jupyter Notebook", "Google Colab", "TensorFlow", "PyTorch", "NumPy/Pandas"],
        roadmap: [
            "Learn Python & math basics.",
            "Understand ML algorithms.",
            "Practice data preprocessing.",
            "Learn deep learning.",
            "Build AI projects."
        ],
        pdfUrl: "/road_map/ai-engineer.pdf",
        miniProjects: ["House Price Prediction", "Spam Classifier", "Recommendation System", "Chatbot", "Face Detection"],
        certifications: [
            { name: "AI (Generative AI) (Cisco NetAcad)", url: "https://www.netacad.com/modules/introduction-to-generative-ai?courseLang=en-US" },
            { name: "Python (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/python?courseLang=en-US" },
            { name: "SQL (Kaggle)", url: "https://www.kaggle.com/discussions/general/425278" }
        ],
        youtube: [
            { name: "Chill and learn", url: "https://www.youtube.com/watch?v=aiCIWGSCCKo&list=PLorkqpg7qgkw8xqc-RmuCgfCWRWCRnN-u" }
        ],
        websites: [
            { name: "Kaggle", url: "https://www.kaggle.com/" },
            { name: "Coursera", url: "https://www.coursera.org/" },
            { name: "Towards Data Science", url: "https://towardsdatascience.com/" }
        ],
        projects: [
            { level: "Beginner", title: "House Price Prediction" },
            { level: "Intermediate", title: "Spam Classifier" },
            { level: "Advanced", title: "AI Chatbot" }
        ],
        jobs: ["Machine Learning Engineer", "AI Engineer", "Data Scientist"]
    },
    {
        id: "web-designing",
        title: "Web Designing",
        about: "Web Designing focuses on the aesthetics and usability of websites. Designers create layouts, color schemes, and visual elements that engage users. It requires a good eye for design and understanding of user experience principles.",
        description: "Design the look and feel of websites.",
        toolsText: "Designers use tools like Figma, Adobe XD, and Photoshop. VS Code is used for implementing designs in HTML/CSS.",
        languages: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
        environment: ["Figma", "Adobe XD", "VS Code"],
        roadmap: [
            "Learn design principles (Color, Typography, Layout).",
            "Master Figma or Adobe XD.",
            "Learn HTML & CSS for implementation.",
            "Build portfolio projects."
        ],
        pdfUrl: "/road_map/ux-design.pdf",
        miniProjects: ["Portfolio Design", "Landing Page", "Mobile App UI"],
        certifications: [
            { name: "HTML (Cisco NetAcad)", url: "https://www.netacad.com/courses/html-essentials?courseLang=en-US" },
            { name: "CSS (Simplilearn)", url: "https://www.simplilearn.com/learn-css-basics-free-training-course-skillup" },
            { name: "JavaScript (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/javascript?courseLang=en-US" }
        ],
        youtube: [
            { name: "Online Tutorials", url: "https://www.youtube.com/c/OnlineTutorials4Designers" },
            { name: "DesignCourse", url: "https://www.youtube.com/c/DesignCourse" },
            { name: "Easy Tutorials", url: "https://www.youtube.com/c/EasyTutorialsVideo" }
        ],
        websites: [
            { name: "frontendmentor.io", url: "https://www.frontendmentor.io/" },
            { name: "Dribbble", url: "https://dribbble.com/" },
            { name: "CSS Tricks", url: "https://css-tricks.com/" }
        ],
        projects: [
            { level: "Beginner", title: "Portfolio Design" },
            { level: "Intermediate", title: "Blog UI" },
            { level: "Advanced", title: "Dashboard UI" }
        ],
        jobs: ["UI/UX Designer", "Frontend Designer", "Web Designer"]
    },
    {
        id: "data-science-analytics",
        title: "Data Science & Analytics",
        about: "Data Science & Analytics focus on analyzing data to extract insights and support decisions. Data analysts understand past trends, while data scientists predict future outcomes. This field is used in business, finance, marketing, and tech. Data-driven decision-making is critical for companies. Logical thinking and curiosity are key skills.",
        description: "Analyze data to find trends and insights.",
        toolsText: "Python, SQL, Excel, Power BI, and Tableau are widely used. Jupyter Notebook helps with experimentation. Databases store large datasets. Visualization tools present insights clearly to stakeholders.",
        languages: ["Python", "SQL", "R"],
        environment: ["Jupyter Notebook", "Tableau", "Power BI", "Excel", "SQL Databases"],
        roadmap: [
            "Learn Python & SQL.",
            "Perform data cleaning.",
            "Create visualizations.",
            "Learn basic ML.",
            "Work on real datasets."
        ],
        pdfUrl: "/road_map/data-analyst.pdf",
        miniProjects: ["Sales Analysis", "Customer Churn Analysis", "Dashboard Creation", "Stock Analysis"],
        certifications: [
            { name: "SQL (Kaggle)", url: "https://www.kaggle.com/discussions/general/425278" },
            { name: "Python (Cisco NetAcad)", url: "https://www.netacad.com/learning-collections/python?courseLang=en-US" }
        ],
        youtube: [
            { name: "AI Coach John", url: "https://www.youtube.com/watch?v=k6HOBjkUkE4" }
        ],
        websites: [
            { name: "Kaggle", url: "https://www.kaggle.com/" },
            { name: "Datacamp", url: "https://www.datacamp.com/" },
            { name: "Coursera", url: "https://www.coursera.org/" }
        ],
        projects: [
            { level: "Beginner", title: "Sales Analysis" },
            { level: "Intermediate", title: "Customer Churn Prediction" },
            { level: "Advanced", title: "Forecasting Model" }
        ],
        jobs: ["Data Analyst", "Data Scientist", "Business Analyst", "ML Engineer"]
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        about: "Cybersecurity focuses on protecting systems, networks, and data from cyber attacks. Professionals identify vulnerabilities and prevent security breaches. With increasing cyber threats, this field is critical for all organizations. It requires strong analytical and ethical skills. Demand is growing globally.",
        description: "Protect systems and networks from digital attacks.",
        toolsText: "Linux and Kali Linux are commonly used. Tools like Wireshark, Nmap, Metasploit help analyze and test security. Virtual machines allow safe practice. Python and shell scripting automate tasks.",
        languages: ["Python", "Bash", "SQL", "Networking protocols"],
        environment: ["Kali Linux", "Wireshark", "Nmap", "Metasploit", "VirtualBox"],
        roadmap: [
            "Learn networking basics.",
            "Understand Linux.",
            "Study security fundamentals.",
            "Practice ethical hacking.",
            "Advanced threat analysis."
        ],
        pdfUrl: "/road_map/cyber-security.pdf",
        miniProjects: ["Password Strength Checker", "Port Scanner", "Vulnerability Scanner", "Network Monitor"],
        certifications: [
            { name: "Cybersecurity (Cisco NetAcad)", url: "https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US" }
        ],
        youtube: [
            { name: "KaaShiv InfoTech", url: "https://www.youtube.com/watch?v=Kk016YZi63Y&list=PL-M5l4dLK9TUaql2YMIFLmI46T931M3ZJ" }
        ],
        websites: [
            { name: "TryHackMe", url: "https://tryhackme.com/" },
            { name: "HackTheBox", url: "https://www.hackthebox.com/" },
            { name: "OverTheWire", url: "https://overthewire.org/" }
        ],
        projects: [
            { level: "Beginner", title: "Password Strength Checker" },
            { level: "Intermediate", title: "Port Scanner" },
            { level: "Advanced", title: "Network Monitor" }
        ],
        jobs: ["Cybersecurity Analyst", "Ethical Hacker", "SOC Analyst", "Network Security Engineer"]
    },
    {
        id: "typewriting",
        title: "Typewriting",
        about: "Typewriting is the skill of typing text quickly and accurately on a computer keyboard. It improves productivity and efficiency in various professional fields. Mastering touch typing allows you to type without looking at the keys.",
        description: "Master touch typing to improve speed and accuracy.",
        toolsText: "Online platforms like TypingClub and Ratatype provide structured lessons. Keyboards with comfortable layouts, such as ergonomic or mechanical keyboards, can enhance the experience.",
        languages: ["English", "Touch Typing"],
        environment: ["TypingClub", "Monkeytype", "TypeRacer", "Microsoft Word"],
        roadmap: [
            "Learn the Home Row keys.",
            "Practice top and bottom row keys.",
            "Master capital letters and symbols.",
            "Increase typing speed to 40 WPM.",
            "Achieve high accuracy (95%+).",
            "Practice advanced texts and numbers."
        ],

        miniProjects: ["Reach 30 WPM with 100% Accuracy", "Type a full page without looking", "Beat personal best on Monkeytype"],
        certifications: [
            { name: "Typewriting (TypingTest)", url: "https://www.typingtest.com/certificate.php" }
        ],
        youtube: [
            { name: "TypingClub", url: "https://www.youtube.com/@TypingClub_edclub" }
        ],
        websites: [
            { name: "TypingClub", url: "https://www.typingclub.com/" },
            { name: "Monkeytype", url: "https://monkeytype.com/" },
            { name: "Keybr", url: "https://www.keybr.com/" }
        ],
        projects: [
            { level: "Beginner", title: "Reach 20 WPM" },
            { level: "Intermediate", title: "Reach 50 WPM" },
            { level: "Advanced", title: "Reach 80+ WPM" }
        ],
        jobs: ["Data Entry Operator", "Transcriptionist", "Executive Assistant", "Content Writer"]
    },
    {
        id: "ats-friendly-resume",
        title: "ATS Friendly Resume",
        about: "Applicant Tracking Systems (ATS) are software tools used by employers to filter and rank resumes. To get hired, your resume must be 'ATS-friendly'—formatted simply and optimized with relevant keywords so bots can read it. Mastering this ensures your application reaches a human recruiter. A strong, ATS-optimized professional summary might look like this: 'I have gained foundational knowledge in software development, web development, mobile application development, artificial intelligence, machine learning, data science, analytics, and cybersecurity through structured online learning platforms...'",
        description: "Optimize your resume to pass automated screening filters.",
        toolsText: "Use standard word processors like Microsoft Word or Google Docs, or use dedicated Resume Builders like FlowCV and Teal. Save as .docx or PDF to ensure compatibility.",
        languages: ["English (Professional)", "Keywords matching Job Description"],
        environment: ["Microsoft Word", "Google Docs", "Jobscan", "LinkedIn"],
        roadmap: [
            "Analyze Job Descriptions for keywords.",
            "Choose a simple, single-column layout.",
            "Use standard headings (Experience, Skills).",
            "Write keyword-rich bullet points.",
            "Test your resume with an ATS scanner.",
            "Proofread for zero errors."
        ],
        miniProjects: [],
        atsCheckers: [
            { name: "Jobscan", url: "https://www.jobscan.co/" },
            { name: "Rezi (Resume Checker)", url: "https://www.rezi.ai/" },
            { name: "SkillSyncer", url: "https://skillsyncer.com/" },
            { name: "Teal (Analysis)", url: "https://www.tealhq.com/" }
        ],
        youtube: [
            { name: "Jeff Su", url: "https://www.youtube.com/watch?v=csmlTXn2p5o" }
        ],
        websites: [
            { name: "FlowCV (Free Builder)", url: "https://flowcv.com/" },
            { name: "Teal (AI Builder)", url: "https://www.tealhq.com/tools/resume-builder" },
            { name: "Jobscan", url: "https://www.jobscan.co/" },
            { name: "Rezi", url: "https://www.rezi.ai/" },
            { name: "TopResume", url: "https://www.topresume.com/" }
        ],
        projects: [],
        jobs: []
    }
];

export const games = [
    { name: "Model Context", url: "https://codingfantasy.com/games/mcp" },
    { name: "Protocol Panic", url: "https://cssgridgarden.com/" },
    { name: "Codingame Start", url: "https://www.codingame.com/start/" },
    { name: "Elevator Saga", url: "https://play.elevatorsaga.com/" }
];
