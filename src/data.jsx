import { FaMale, FaFemale, FaToiletPaper, FaWalking } from 'react-icons/fa';
import DrRochan from './assets/dr-rochan-copy.webp';
import DrMukul from './assets/dr-mukul-copy.webp';
import DrLenon from './assets/dr-lenon-copy.webp';
import DrKB from './assets/dr-kb.png';
import DrAshwin from './assets/dr-ashwin.jpg';

export const usps = [
    {
        title: "Top Senior Doctors",
        description: [
            "Only Dept Heads at premium hospitals",
            "Average 22 years experience",
            "5000+ IR procedures with <1% complications",
        ],
        iconPath:
            "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z",
    },
    {
        title: "Premium Centres & Latest Tech",
        description: [
            "US-FDA & EU-approved minimally invasive techniques",
            "Strictly vetted cath lab suites with European flat-panel imaging systems",
            "Infection-controlled theatres, anaesthetist and critical care on standby",
        ],
        iconPath:
            "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "VIP Experience",
        description: [
            "24 × 7 Care Navigator on WhatsApp and phone",
            "End-to-end insurance-claim hand-holding",
            "Door-to-door pickup & drop + complimentary lounge meal & barista coffee/tea for family and patient",
        ],
        iconPath:
            "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
];

export const technologies = [
    {
        title: "JCI-Accredited Facilities",
        iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
        title: "Siemens/Philips Imaging",
        iconPath:
            "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
        title: "Infection-Controlled OTs",
        iconPath:
            "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
        title: "Verified Support Staff",
        iconPath:
            "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
];

export const cards = [
    {
        title: 'Surgery — without Surgery',
        subtitle: "Discover Interventional Radiology: tiny pin-hole cures, same-day discharge",
        backgroundImage: "https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgyNGI2YTNmMmIwODE5MWIyZmNmNDJkMDFmMmNiOWE6ZmlsZV8wMDAwMDAwMGIxNzA2MjJmOWU3ZDRhZTMzYmU3NTEyNiIsInRzIjoiNDg1Mzg0IiwicCI6InB5aSIsInNpZyI6ImEyNThlOTExNzliMjYyNGQwMjgwMjI0YzBiZGRjMTk0M2Q3MmUwN2JkOWNlMmNlNDk1NGNiMmI4ZDJmNmNhNjYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==",
        // "https://cdn.hexahealth.com/static/images/slide-1.jpg",
        primaryCTA: "Book Free IR Consultation",
        secondaryCTA: "What is IR?",
    },
    {
        title: "No Cuts. No Scars. No Hospital Stay.",
        subtitle: "American FDA & European CE-approved, lowers complications 70-90 % vs open/lap surgery",
        backgroundImage:
            "https://cdn.hexahealth.com/static/images/slide-2.jpg",
        primaryCTA: "Check My Eligibility",
        secondaryCTA: "Compare to Surgery",
    },
    {
        title: "Top Doctors • Premium Centres • VIP Experience",
        subtitle: "India’s first end-to-end IR ecosystem with 24 x 7 Care Navigators",
        backgroundImage: "https://cdn.hexahealth.com/static/images/slide-3.jpg",
        primaryCTA: "Start My Care Journey",
        secondaryCTA: "View Success Stories",
    },
];

export const featuredDoctors = [
    {
        id: 1,
        name: "Dr. Ashwin M Polnaya",
        designation: "Interventional Radiologist",
        image: DrAshwin,
        credentials: [
            // "Trailblazer in advanced liver cancer therapy — first radioactive IR in Karnataka.",
            "First in Dakshina Kannada to Perform Radioactive Liver Cancer Therapy",
            "Affiliated with AJ Hospital, Mangaluru",
            "Specialized in Minimally Invasive Tumor Treatments",
            "Expert in TACE & Radioembolization"
        ],
        specialty: "Advanced Liver Cancer Management",
        hospitalIcons: ["https://www.ajhospital.in/images/aj-logo.png", "https://www.fathermuller.edu.in/medical-college/img/father-muller-logo.svg"]
    },
    {
        id: 2,
        name: "Surg. Capt. Dr. Rochan Pant",
        designation: "Vascular & Neuro IR Specialist",
        image: DrRochan,
        credentials: [
            // "Decorated IR veteran with 2,000+ complex vascular interventions. Presidential awardee",
            "Vishisht Seva Medal (President of India Awardee)",
            "Ex-Director, Radiology - Reliance Foundation Hospital",
            "20+ Years Teaching at MUHS, Nasik",
            "18+ Published Research Papers"
        ],
        specialty: "Stroke Intervention, Aortic Aneurysms, Liver Cancer (TACE/RFA)",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://www.ajhospital.in/images/aj-logo.png"]
    },
    {
        id: 3,
        name: "Dr. Mukul Mutatkar",
        designation: "Senior Interventional Radiologist",
        image: DrMukul,
        credentials: [
            // "Global imaging expert with 30 yrs of IR innovation. Built Pune’s first high-end MRI centre.",
            "Trained in MRI/CT at USA, Germany, Japan, UK",
            "Founder - OMEGA MRI & PDS CT Scan Centres (Pune)",
            "30+ Years in Advanced Imaging",
            "Specialized in Hepatobiliary Interventions"
        ],
        specialty: "Cross-Border IR Expertise with Global Techniques",
        hospitalIcons: ["https://poonahospital.org/wp-content/uploads/2022/09/logo_new.png", "https://www.ajhospital.in/images/aj-logo.png"]
    },
    {
        id: 4,
        name: "Dr. Keerthiraj B",
        designation: "Interventional Neuro Radiologist",
        image: DrKB,
        credentials: [
            // "Mangalore’s senior-most leading neuro-IR specialist. 1,500+ life-changing pin-hole procedures.",
            "First Interventional Neuroradiologist in Dakshina Kannada",
            "DM in Neuro Imaging & IR (SCTIMST, Trivandrum)",
            "Pioneer of Pinhole Access Neurovascular Treatments",
            "Expert in Stroke Management"
        ],
        specialty: "Endovascular Neurosurgeries Without Open Surgery",
        hospitalIcons: ["https://www.manipalhospitals.com/mangalore/assets/images/homepage/manipal-hospitals-mangalore.webp", "https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg"]
    },
    {
        id: 5,
        name: "Dr. Lenon D'Souza",
        designation: "Vascular Surgeon & IR Specialist",
        image: DrLenon,
        credentials: [
            // "Gold-medalist IR specialist with latest expertise across new & diverse procedure types.",
            "Gold Medalist - Rajiv Gandhi University",
            "Fellowship in Vascular IR (KEM Hospital, Mumbai)",
            "7+ Years in Complex Endovascular Procedures",
            "Ranked #1 in Radiology (RGUHS)"
        ],
        specialty: "Varicose Veins, Diabetic Foot Salvage, Uterine Fibroid Embolization",
        hospitalIcons: ["https://www.fathermuller.edu.in/medical-college/img/father-muller-logo.svg", "https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg"]
    },
];

export const howItWorks = [
    {
        title: "Free Video Consult",
        desc: "IR specialist reviews symptoms, scans & scores(IPSS / fibroid size / bleeding grade).",
        icon: "🩺",
        time: "15 min",
        color: "bg-teal-500 text-white",
    },
    {
        title: "Evidence-Based Choice",
        desc: "Specialist doctor helps compare surgery vs IR; navigator gives price, insurance check & finance options.",
        icon: "🧠",
        time: "Same day",
        color: "bg-blue-500 text-white",
    },
    {
        title: "Day-Care Procedure",
        desc: "Local anaesthesia, pin - hole access, latte in the lounge, discharge in 4 h.",
        icon: "💉",
        time: "4 h on site",
        color: "bg-purple-500 text-white",
    },
    {
        title: "Virtual Recovery",
        desc: "WhatsApp check - ins Day 1 & Day 30, diet & physio tips, 24 × 7 hotline.",
        icon: "🤝",
        time: "< 5 min",
        color: "bg-orange-500 text-white",
    },
];

export const centers = [
    {
        id: 'mumbai-c3',
        rating: 4.9,
        reviews: 77,
        city: 'Mumbai',
        area: '',
        name: 'C3 Medicare',
        address: '901, Shrikant Chambers - c, II, VN Purav Marg, next to R K Studio, Union Park, Chembur, Mumbai 400071',
        phone: '022 4897 2433',
        email: 'info@c3medicare.com',
        image: 'https://i0.wp.com/c3medicare.com/wp-content/uploads/2024/08/1.jpg',
        description: 'C3 MEDICARE is a day-care centre for oncology and interventional radiology procedures that do not require overnight admissions. Our dedicated daycare Centre allows patients quick and efficient single-point admission, treatment, and discharge and reduces the time spent in the hospital.',
        technologies: [
            {
                name: 'Siemens Artis Q.zen',
                description: 'Advanced angiography system with 3D imaging capabilities',
                image: ''
            },
            {
                name: 'Philips Azurion',
                description: 'Next-generation image-guided therapy platform',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'JCI Accredited',
            'ISO 15189:2012 Medical Laboratories'
        ],
        specialties: [
            'Vascular Interventions',
            'Oncological Interventions',
            'Neuro Interventions',
            'Urological Interventions'
        ],
        doctors: [
            {
                name: 'Dr. Surg. Capt. Rochan Pant',
                specialization: 'Interventional Radiologist',
                experience: '15+ years'
            },
            {
                name: 'Dr. Mukul Mutatkar',
                specialization: 'Interventional Radiologist',
                experience: '30+ years'
            }
        ]
    },
    {
        id: 'pune-jahangir',
        rating: 4.6,
        reviews: 10378,
        city: 'Pune',
        area: '',
        name: 'Jahangir Hospital',
        address: '32, Sasoon Rd, opposite Railway Station, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001',
        phone: '020 6681 9999',
        email: ' info@jehangirhospital.com',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwrJZ6Es7LvMppZmwd7bwjIOk0Z8tTlwtOqQQ6phCN1PksUDp6F9BXcECG9nQQATZ9qgb1hg1nRQG3fJn5ne3nfhSx-UbAvwoeoVTxIQl9fC4dOQOPXA4TYGwYzyj_3GAq3Nar=s680-w680-h510-rw',
        description: 'Jehangir Hospital is a 350-bed hospital in Pune, Maharashtra, India. Sir Cowasji Jehangir and Lady Hirabai Jehangir founded the hospital on 6 February 1946.',
        technologies: [
            {
                name: 'GE Discovery IGS 740',
                description: 'Advanced imaging system for precise interventions',
                image: ''
            },
            {
                name: 'Siemens MAGNETOM Vida',
                description: '3T MRI system for detailed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'Green OT Certification'
        ],
        specialties: [
            'Cardiac Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Pediatric Interventions'
        ],
        doctors: [
        ]
    },
    {
        id: 'pune-h',
        rating: 3.6,
        reviews: 980,
        city: 'Pune',
        area: '',
        name: 'Poona Hospital',
        address: '27, near Alka Talkies, Sadashiv Peth, Pune, Maharashtra',
        phone: '+91 97305 59600',
        email: 'phrcjr@gmail.com',
        image: 'https://poonahospital.org/wp-content/uploads/2024/01/Hosptial.jpg',
        description: 'Poona Hospital & Research Center is a healthcare provider, par excellence, fast establishing it self as a global industry model in the tertiary healthcare system of india.',
        technologies: [
            {
                name: 'Philips Ingenia Elition',
                description: '3T MRI system with AI-powered imaging',
                image: ''
            },
            {
                name: 'Siemens Artis pheno',
                description: 'Hybrid operating room system',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'Green OT Certification'
        ],
        specialties: [
            'Vascular Interventions',
            'Oncological Interventions',
            'Cardiac Interventions',
            'Pediatric Interventions'
        ],
        doctors: []
    },
    {
        id: 'mangalore-tara',
        rating: 3.7,
        reviews: 191,
        city: 'Mangalore',
        area: '',
        name: 'Tara Hospital',
        address: 'Ganapathi High School Road, Bhavathi, Near Hampankatta, Mangalore-575001, Karnataka, India.',
        phone: '+91 78296 07080',
        email: 'Office@tarahospital.co.in',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'We at Tara Hospital provide the highest quality and affordable treatments to our patients. We have an unwavering commitment to medical ethics.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: []
    },
    {
        id: 'mangalore-aj',
        rating: 4.1,
        reviews: 1500,
        city: 'Mangalore',
        area: '',
        name: 'AJ Medical College',
        address: 'Kuntikana NH -66, Mangalore - 575 004.',
        phone: '+91 11 3456 7890',
        email: 'dean@ajims.edu.in',
        image: 'https://ajims.edu.in/ASPXImages/sliderfirst.jpg',
        description: 'AJIMS is aimed to provide a global perspective of medical education to achieve the national objective of “Health for All”.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: [
        ]
    },
    {
        id: 'mangalore-fm',
        city: 'Mangalore',
        rating: 4.1,
        reviews: 931,
        area: '',
        name: 'Father Muller Medical College',
        address: 'VV85+HJR, Father Muller\'s Rd, Kankanady, Mangaluru',
        phone: '+91 824 223 8000',
        email: 'drnageshkr@rediffmail.com',
        image: 'https://bookuradmission.com/college_photo/Father%20Muller%20Medical%20College_photo210528093012.jpg',
        description: 'Father Muller Medical College is a private medical school located at Kankanady in Mangaluru, Karnataka. It is a part of the Father Muller Charitable Institutions.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: [
        ]
    }
];

export const proceduresArray = [
    {
        id: 1,
        slug: "prostatic-artery-embolization-pae",
        name: "Prostatic Artery Embolization (PAE)",
        for: "BPH (Enlarged Prostate)",
        cta: "Know More",
        description: "A minimally invasive procedure that blocks blood flow to the prostate, reducing its size and relieving symptoms of benign prostatic hyperplasia (BPH).",
        benefits: [
            "No catheter • Free by lunchtime",
            "Shrinks prostate in 2-4 weeks",
            "Zero risk of sexual dysfunction",
            "FDA-approved alternative to TURP"
        ],
        icon: (
            <FaMale className="text-4xl text-teal-600" />
        ),
        process: [
            "Initial consultation and imaging",
            "Local anesthesia administration",
            "Catheter insertion through a small puncture in the groin",
            "Precise delivery of embolic agents to block blood flow",
            "Post-procedure monitoring and recovery"
        ],
        recovery: "Most patients can return to normal activities within 1-2 weeks, with full recovery typically achieved within 4-6 weeks.",
        risks: [
            "Temporary urinary symptoms",
            "Mild discomfort at the puncture site",
            "Rare risk of infection",
            "Minimal risk of non-target embolization"
        ],
        faqs: [
            {
                id: 1,
                question: "Is PAE better than TURP?",
                answer: "PAE is less invasive, doesn’t require general anesthesia, and preserves sexual function..."
            },
            {
                id: 2,
                question: "Will I need a catheter after PAE?",
                answer: "Most patients don’t require long-term catheterization and can resume normal activities quickly."
            },
        ],
        comparison: [
            { parameter: "Anesthesia", ir: "Local", traditional: "General" },
            { parameter: "Hospital Stay", ir: "4 hours", traditional: "3-5 days" },
            { parameter: "Recovery", ir: "24-48 hours", traditional: "2-4 weeks" },
            { parameter: "Erectile Dysfunction Risk", ir: "<1%", traditional: "6-15%" },
            { parameter: "Retrograde Ejaculation", ir: "0%", traditional: "50-70%" }
        ]
    },
    {
        id: 2,
        slug: "uterine-fibroid-embolization-ufe",
        name: "Uterine Fibroid Embolization (UFE)",
        for: "Symptomatic Fibroids",
        cta: "Know More",
        description: "A non-surgical treatment for uterine fibroids that blocks blood flow to the fibroids, causing them to shrink and symptoms to improve.",
        benefits: [
            "90% symptom relief without hysterectomy",
            "1-hour procedure under local anesthesia",
            "Preserves uterus for future pregnancy",
            "Recommended by leading gynecologists"
        ],
        icon: <FaFemale className="text-4xl text-teal-600" />,
        process: [
            "Pre-procedure imaging and consultation",
            "Local anesthesia administration",
            "Catheter insertion through a small puncture in the groin",
            "Precise delivery of embolic agents to block blood flow",
            "Post-procedure monitoring and pain management"
        ],
        recovery: "Most patients can return to normal activities within 1-2 weeks, with full recovery typically achieved within 4-6 weeks.",
        risks: [
            "Temporary cramping and pain",
            "Vaginal discharge",
            "Rare risk of infection",
            "Minimal risk of non-target embolization"
        ],
        faqs: [
            {
                id: 1,
                question: "Is PAE better than TURP?",
                answer: "PAE is less invasive, doesn’t require general anesthesia, and preserves sexual function..."
            },
            {
                id: 2,
                question: "Will I need a catheter after PAE?",
                answer: "Most patients don’t require long-term catheterization and can resume normal activities quickly."
            },
        ],
        comparison: [
            { parameter: "Invasiveness", ir: "2mm incision", traditional: "Abdominal cut" },
            { parameter: "Fertility", ir: "Preserved", traditional: "Lost permanently" },
            { parameter: "Recovery", ir: "3-5 days", traditional: "6-8 weeks" },
            { parameter: "Blood Loss", ir: "10ml", traditional: "300-500ml" },
            { parameter: "Hormonal Impact", ir: "None", traditional: "Surgical menopause" }
        ]
    },
    {
        id: 3,
        slug: "hemorrhoidal-artery-embolization-hae",
        name: "Hemorrhoidal Artery Embolization (HAE)",
        for: "Chronic Rectal Bleeding",
        cta: "Know More",
        description: "A non-surgical treatment for hemorrhoids that reduces blood flow to alleviate pain and bleeding.",
        benefits: [
            "Painless alternative to rubber banding/laser",
            "30-minute outpatient procedure",
            "No dietary restrictions post-op",
            "Resume work next day"
        ],
        icon: <FaToiletPaper className="text-4xl text-teal-600" />,
        process: [
            "Pre-procedure imaging and consultation",
            "Local anesthesia administration",
            "Catheter insertion through the femoral artery",
            "Targeted embolization of hemorrhoidal arteries",
            "Post-procedure observation and discharge"
        ],
        recovery: "Most patients recover within 2-3 days and return to work the next day.",
        risks: [
            "Mild discomfort",
            "Temporary urgency",
            "Rare bleeding",
            "Minimal infection risk"
        ],
        faqs: [
            {
                id: 1,
                question: "Is PAE better than TURP?",
                answer: "PAE is less invasive, doesn’t require general anesthesia, and preserves sexual function..."
            },
            {
                id: 2,
                question: "Will I need a catheter after PAE?",
                answer: "Most patients don’t require long-term catheterization and can resume normal activities quickly."
            },
        ],
        comparison: [
            { parameter: "Pain Level", ir: "Minimal", traditional: "Moderate to Severe" },
            { parameter: "Anesthesia", ir: "Local", traditional: "General or spinal" },
            { parameter: "Recovery", ir: "2-3 days", traditional: "1-2 weeks" },
            { parameter: "Procedure Time", ir: "30 mins", traditional: "60+ mins" },
            { parameter: "Recurrence", ir: "Low", traditional: "Moderate" }
        ]
    },
    {
        id: 4,
        slug: "okuno-procedure-tam",
        name: "OKUNO Procedure (TAM)",
        for: "Chronic Pain (Knee/Shoulder/Back)",
        cta: "Know More",
        description: "Targeted micro-embolization using advanced microcatheters to reduce inflammation and pain for joint conditions like osteoarthritis.",
        benefits: [
            "Targeted micro-embolization for osteoarthritis",
            "50-80% pain reduction in 2 weeks",
            "No implants or major surgery",
            "German-engineered microcatheters used"
        ],
        icon: <FaWalking className="text-4xl text-teal-600" />,
        process: [
            "Consultation with pain/intervention expert",
            "MRI or diagnostic scan",
            "Embolization of tiny inflammatory vessels",
            "Outpatient discharge same day",
            "Rehab & physical therapy guidance"
        ],
        recovery: "Return to normal activity in 1-2 days, with pain relief typically starting within 2 weeks.",
        risks: [
            "Transient swelling",
            "Minor bruising",
            "Allergic reaction (rare)",
            "Non-target embolization (very rare)"
        ],
        faqs: [
            {
                id: 1,
                question: "Is PAE better than TURP?",
                answer: "PAE is less invasive, doesn’t require general anesthesia, and preserves sexual function..."
            },
            {
                id: 2,
                question: "Will I need a catheter after PAE?",
                answer: "Most patients don’t require long-term catheterization and can resume normal activities quickly."
            },
        ],
        comparison: [
            { parameter: "Invasiveness", ir: "Minimal", traditional: "Arthroscopy or surgery" },
            { parameter: "Pain Relief", ir: "2 weeks", traditional: "2-3 months" },
            { parameter: "Implants", ir: "None", traditional: "Possible" },
            { parameter: "Return to Work", ir: "Next day", traditional: "1-3 weeks" },
            { parameter: "Scarring", ir: "None", traditional: "Visible" }
        ]
    }
];

// Create a map for fast access by slug
export const proceduresMap = proceduresArray.reduce((map, p) => {
    map[p.slug] = p;
    return map;
}, {});

export const generalFaqs = [
    {
        id: 1,
        question: "What exactly is Interventional Radiology?",
        answer:
            "It’s an image-guided minimally invasive treatment done through a 2 mm pin-hole in the wrist or leg, accessing any part of the body via our blood vessel system. No large cuts, stitches or scarring; no general anaesthesia, home the same day.",
    },
    {
        id: 2,
        question: "Is the radiation dangerous?",
        answer:
            "A typical IR case gives about the same dose as one abdominal CT scan, well below levels linked to measurable cancer risk. Lead shields protect the rest of your body.",
    },
    {
        id: 3,
        question: "How safe are these procedures overall?",
        answer:
            "Across >5,000 cases by our senior IR doctors, the major-complication rate is <1%. Global studies report similar numbers.",
    },
    {
        id: 4,
        question: "I’m over 75 / have diabetes or heart stents—can I still have IR?",
        answer:
            "Yes. Because we use only local anaesthesia and light sedation, high-risk patients usually qualify. We’ll coordinate with your cardiologist or endocrinologist first.",
    },
    {
        id: 5,
        question: "Will IR affect fertility or sexual function?",
        answer:
            "PAE: Preserves erections and ejaculation (0% retrograde vs ≤65% after TURP).\nUAE: Many women conceive after the procedure; large series show healthy pregnancies post-UAE.",
    },
    {
        id: 6,
        question: "What if IR doesn’t work—can I still have surgery later?",
        answer:
            "Absolutely. IR is “add-on,” not burn-the-bridge. You can still choose TURP, myomectomy, hemorrhoidectomy, or knee replacement later if needed.",
    },
    {
        id: 7,
        question: "Will it hurt?",
        answer:
            "You’ll feel a quick numbing injection; most patients rate pain 1–2 / 10 and walk within an hour.",
    },
    {
        id: 8,
        question: "How many visits if I’m travelling from another city?",
        answer:
            "Only two: a virtual pre-op consult, then a 4-hour day-care visit. Fly home the next morning. We arrange hotel, car and paperwork.",
    },
    {
        id: 9,
        question: "How soon can I drive, work or fly?",
        answer:
            "Drive next day, desk work 24–48 h, fly 48 h, gym one week.",
    },
    {
        id: 10,
        question: "What tests or prep do I need?",
        answer:
            "Basic blood work and a 6-hour fast. If you take blood thinners, we’ll liaise with your cardiologist for a safe pause.",
    },
    {
        id: 11,
        question: "How long do the results last?",
        answer:
            "PAE: 85–93% symptom relief at 12 m with durable benefit >5 y.\nUAE: 90–95% bleeding relief; fibroid shrinkage 30–60%.\nHAE: 90–93% bleeding control in Grade II–III hemorrhoids.\nTAME/GAE: 71% pain drop, 87% QoL boost at 1 y; delays knee replacement.\nRepeat IR is possible if symptoms return.",
    },
    {
        id: 12,
        question: "What does it cost and will insurance pay?",
        answer:
            "Packages ₹ 1.8 – 2.75 L all-inclusive. Most private insurers cover when medical need is shown; our Care Navigator files cashless claims. No-interest EMIs from ₹ 5,999 / month.",
    },
    {
        id: 13,
        question: "Can I get a free second opinion?",
        answer:
            "Yes—upload your scans, and a senior IR sends a written IR-vs-surgery report within 24 h.",
    },
    {
        id: 14,
        question: "How do I confirm if I’m a candidate?",
        answer:
            "Click 'Book Free IR Consult' below or WhatsApp us your latest report. A senior doctor replies in ≤30 min.",
    },
];
