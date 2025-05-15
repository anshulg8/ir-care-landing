import DrKhuzaima from './assets/dr-khuzaima.webp';
import DrRochan from './assets/dr-rochan.webp';
import DrMukul from './assets/dr-mukul.webp';
import DrLenon from './assets/dr-lenon.webp';
import DrKB from './assets/dr-kb.png';
import DrAshwin from './assets/dr-ashwin.jpg';

export const usps = [
    {
        title: "World-Class Doctors",
        description: [
            "Avg. 20+ years experience",
            "Trained at Harvard, Johns Hopkins, Cleveland Clinic",
            "Heads of Department at premium hospitals",
        ],
        iconPath:
            "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z",
    },
    {
        title: "Latest Procedures",
        description: [
            "US-FDA & EU-approved minimally invasive techniques",
            "German/American equipment (Siemens, Philips)",
            "15,000+ successful procedures",
        ],
        iconPath:
            "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "VIP Experience",
        description: [
            "Pickup/drop & healthy meals on procedure day",
            "24/7 clinical support + insurance claim handholding",
            "Zero waiting periods for consultations",
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
        title: 'World-Class Minimally Invasive Treatments',
        subtitle: "Docsy Subtitle - Lorem Ipsum!",
        description:
            "FDA/EU-approved procedures by India's top 1% Interventional Radiologists. Zero scars. Zero waiting. VIP care.",
        backgroundImage:
            "https://cdn.hexahealth.com/static/images/slide-1.jpg",
    },
    {
        title: "Advanced IR Care for Men & Women",
        subtitle: "Say goodbye to chronic pain",
        description:
            "Treating fibroids, varicocele, prostate, and more using non-surgical image-guided techniques.",
        backgroundImage:
            "https://cdn.hexahealth.com/static/images/slide-2.jpg",
    },
    {
        title: "Expert Consultation, No Signup Needed",
        subtitle: "Learn how IR can help",
        description:
            "Speak to an IR expert instantly without any delays or paperwork.",
        backgroundImage:
            "https://cdn.hexahealth.com/static/images/slide-3.jpg",
    },
];

export const featuredDoctors = [
    {
        id: 1,
        name: "Dr. Khuzaima Mama",
        designation: "Interventional Oncologist | Founder, C3 Medicare",
        image: DrKhuzaima,
        credentials: [
            "Harvard-MIT Health Sciences & Technology Alumnus",
            "35,000+ Cancer Patients Guided Pro Bono",
            "Investor & Oxford University Startup Mentor",
            "Pioneer of Affordable IR Cancer Care"
        ],
        specialty: "Molecular Oncology & Minimally Invasive Cancer Treatments",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg"]
    },
    {
        id: 2,
        name: "Surg. Capt. Dr. Rochan Pant",
        designation: "Vascular & Neuro IR Specialist",
        image: DrRochan,
        credentials: [
            "Vishisht Seva Medal (President of India Awardee)",
            "Ex-Director, Radiology - Reliance Foundation Hospital",
            "20+ Years Teaching at MUHS, Nasik",
            "18+ Published Research Papers"
        ],
        specialty: "Stroke Intervention, Aortic Aneurysms, Liver Cancer (TACE/RFA)",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg", "https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg"]
    },
    {
        id: 3,
        name: "Dr. Mukul Mutatkar",
        designation: "Senior Interventional Radiologist",
        image: DrMukul,
        credentials: [
            "Trained in MRI/CT at USA, Germany, Japan, UK",
            "Founder - OMEGA MRI & PDS CT Scan Centres (Pune)",
            "30+ Years in Advanced Imaging",
            "Specialized in Hepatobiliary Interventions"
        ],
        specialty: "Cross-Border IR Expertise with Global Techniques",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg"]
    },
    {
        id: 4,
        name: "Dr. Keerthiraj B",
        designation: "Interventional Neuro Radiologist",
        image: DrKB,
        credentials: [
            "First Interventional Neuroradiologist in Dakshina Kannada",
            "DM in Neuro Imaging & IR (SCTIMST, Trivandrum)",
            "Pioneer of Pinhole Access Neurovascular Treatments",
            "Expert in Stroke Management"
        ],
        specialty: "Endovascular Neurosurgeries Without Open Surgery",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg"]
    },
    {
        id: 5,
        name: "Dr. Lenon D'Souza",
        designation: "Vascular Surgeon & IR Specialist",
        image: DrLenon,
        credentials: [
            "Gold Medalist - Rajiv Gandhi University",
            "Fellowship in Vascular IR (KEM Hospital, Mumbai)",
            "7+ Years in Complex Endovascular Procedures",
            "Ranked #1 in Radiology (RGUHS)"
        ],
        specialty: "Varicose Veins, Diabetic Foot Salvage, Uterine Fibroid Embolization",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg"]
    },
    {
        id: 6,
        name: "Dr. Ashwin M Polnaya",
        designation: "Interventional Radiologist",
        image: DrAshwin,
        credentials: [
            "First in Dakshina Kannada to Perform Radioactive Liver Cancer Therapy",
            "Affiliated with AJ Hospital, Mangaluru",
            "Specialized in Minimally Invasive Tumor Treatments",
            "Expert in TACE & Radioembolization"
        ],
        specialty: "Advanced Liver Cancer Management",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://cdn.worldvectorlogo.com/logos/apollo-hospitals.svg"]
    }
];

const howItWorks = [
    {
        icon: "📞",
        title: "Free Screening",
        desc: "10-min questionnaire or teleconsult with our expert specialists",
        color: "bg-teal-100 text-teal-800"
    },
    {
        icon: "🏥",
        title: "Premium Diagnostics",
        desc: "Scan at JCI-accredited centers with Siemens/Philips machines",
        color: "bg-purple-100 text-purple-800"
    },
    {
        icon: "🚙",
        title: "VIP Procedure Day",
        desc: "Door-to-door transport & healthy meals for you + companion",
        color: "bg-green-100 text-green-800"
    },
    {
        icon: "💳",
        title: "Insurance Handholding",
        desc: "Dedicated admin team files all paperwork for cashless claims",
        color: "bg-amber-100 text-amber-800"
    },
    {
        icon: "❤️‍🩹",
        title: "Complete Aftercare",
        desc: "Pre & Post follow-ups until full recovery",
        color: "bg-red-100 text-red-800"
    }
]

export const centers = [
    {
        id: 'mumbai-c3',
        city: 'Mumbai',
        area: 'C3 Medicare',
        name: 'C3 Medicare',
        address: '123 Medical Plaza, Andheri West, Mumbai - 400053',
        phone: '+91 22 1234 5678',
        email: 'c3-mumbai@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our flagship center in Andheri offers state-of-the-art interventional radiology services with cutting-edge technology and expert medical professionals.',
        technologies: [
            {
                name: 'Siemens Artis Q.zen',
                description: 'Advanced angiography system with 3D imaging capabilities',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Philips Azurion',
                description: 'Next-generation image-guided therapy platform',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
                name: 'Dr. Rajesh Kumar',
                specialization: 'Interventional Radiologist',
                experience: '15+ years'
            },
            {
                name: 'Dr. Priya Sharma',
                specialization: 'Vascular Interventional Radiologist',
                experience: '12+ years'
            }
        ]
    },
    {
        id: 'pune-jahangir',
        city: 'Pune',
        area: 'Jahangir Hospital',
        name: 'Jahangir Hospital',
        address: '456 Tech Park, Powai, Mumbai - 400076',
        phone: '+91 22 2345 6789',
        email: 'jahangir@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our Powai center specializes in advanced interventional radiology procedures with a focus on patient comfort and cutting-edge technology.',
        technologies: [
            {
                name: 'GE Discovery IGS 740',
                description: 'Advanced imaging system for precise interventions',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Siemens MAGNETOM Vida',
                description: '3T MRI system for detailed imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            {
                name: 'Dr. Amit Verma',
                specialization: 'Interventional Radiologist',
                experience: '18+ years'
            },
            {
                name: 'Dr. Neha Gupta',
                specialization: 'Cardiac Interventional Radiologist',
                experience: '14+ years'
            }
        ]
    },
    {
        id: 'pune-h',
        city: 'Pune',
        area: 'Pune Hospital',
        name: 'Pune Hospital',
        address: '101 Cyber City, Pune - 122002',
        phone: '+91 124 5678 901',
        email: 'pune@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our Pune center offers comprehensive interventional radiology services with a focus on advanced technology and patient care.',
        technologies: [
            {
                name: 'Philips Ingenia Elition',
                description: '3T MRI system with AI-powered imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Siemens Artis pheno',
                description: 'Hybrid operating room system',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
        doctors: [
            {
                name: 'Dr. Vikram Singh',
                specialization: 'Vascular Interventional Radiologist',
                experience: '17+ years'
            },
            {
                name: 'Dr. Meera Kapoor',
                specialization: 'Cardiac Interventional Radiologist',
                experience: '15+ years'
            }
        ]
    },
    {
        id: 'mangalore-tara',
        city: 'Mangalore',
        area: 'Tara Hospital',
        name: 'Tara Hospital',
        address: '789 Healthcare Avenue, Saket, New Delhi - 110017',
        phone: '+91 11 3456 7890',
        email: 'tara@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our Saket center combines technological innovation with expert care, offering a wide range of interventional radiology procedures.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            {
                name: 'Dr. Suresh Patel',
                specialization: 'Neuro Interventional Radiologist',
                experience: '16+ years'
            },
            {
                name: 'Dr. Ananya Reddy',
                specialization: 'Vascular Interventional Radiologist',
                experience: '13+ years'
            }
        ]
    },
    {
        id: 'mangalore-aj',
        city: 'Mangalore',
        area: 'AJ Medical College',
        name: 'AJ Medical College',
        address: '789 Healthcare Avenue, Saket, Mangalore - 110017',
        phone: '+91 11 3456 7890',
        email: 'tara@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our Saket center combines technological innovation with expert care, offering a wide range of interventional radiology procedures.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            {
                name: 'Dr. Suresh Patel',
                specialization: 'Neuro Interventional Radiologist',
                experience: '16+ years'
            },
            {
                name: 'Dr. Ananya Reddy',
                specialization: 'Vascular Interventional Radiologist',
                experience: '13+ years'
            }
        ]
    },
    {
        id: 'mangalore-fm',
        city: 'Mangalore',
        area: 'Father Muller Medical College',
        name: 'Father Muller Medical College',
        address: '789 Healthcare Avenue, Saket, Mangalore - 110017',
        phone: '+91 11 3456 7890',
        email: 'tara@docsy.com',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Our Saket center combines technological innovation with expert care, offering a wide range of interventional radiology procedures.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            {
                name: 'Dr. Suresh Patel',
                specialization: 'Neuro Interventional Radiologist',
                experience: '16+ years'
            },
            {
                name: 'Dr. Ananya Reddy',
                specialization: 'Vascular Interventional Radiologist',
                experience: '13+ years'
            }
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
            <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
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
        icon: (
            <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        ),
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
        icon: (
            <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
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
        icon: (
            <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
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
        question: "What is Prostatic Artery Embolization (PAE)?",
        answer: "PAE is a minimally invasive procedure to treat Benign Prostatic Hyperplasia (BPH)..."
    },
    {
        id: 2,
        question: "Is the Uterine Fibroid Embolization (UFE) procedure safe?",
        answer: "Yes, UFE is an FDA-approved, safe procedure..."
    },
    {
        id: 3,
        question: "How long does the recovery take after Hemorrhoidal Artery Embolization (HAE)?",
        answer: "Most patients return to normal activities within 1-2 days after HAE..."
    },
    {
        id: 4,
        question: "What are the benefits of the OKUNO Procedure (TAM)?",
        answer: "The OKUNO Procedure offers targeted treatment for chronic pain..."
    },
];
