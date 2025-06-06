// src/data/quizData.js
export const quizData = {
    prostate: {
        title: 'Prostate Health Quiz',
        questions: [
            "Incomplete Emptying - How often have you had the sensation of not emptying your bladder?",
            "Frequency - How often have you had to urinate less than every two hours?",
            "Intermittency - How often have you found you stopped and started again several times when you urinated?",
            "Urgency - How often have you found it difficult to postpone urination?",
            "Weak Stream - How often have you had a weak urinary stream?",
            "Straining - How often have you had to strain to start urination?",
            "Nocturia - How many times did you typically get up at night to urinate?"
        ],
        options: [
            { label: "Not at All", value: 0 },
            { label: "Less than 1 in 5 Times", value: 1 },
            { label: "Less than Half the Time", value: 2 },
            { label: "About Half the Time", value: 3 },
            { label: "More than Half the Time", value: 4 },
            { label: "Almost Always", value: 5 }
        ],
        specialOptions: {
            6: [ // Nocturia question (index 6)
                { label: "None", value: 0 },
                { label: "1 Time", value: 1 },
                { label: "2 Times", value: 2 },
                { label: "3 Times", value: 3 },
                { label: "4 Times", value: 4 },
                { label: "5 Times", value: 5 }
            ]
        },
        result: (score) => {
            if (score <= 7) return {
                title: "Your Prostate Symptoms Are Mild – Here's How to Keep Them That Way.",
                body: "Your symptoms reflect early-stage Benign Prostatic Hyperplasia (BPH)...",
                cta: "📞 Schedule Your Free Annual Prostate Health Check-In"
            };
            if (score <= 19) return {
                title: "Moderate Symptoms Detected – You Have Effective Options Beyond Medication.",
                body: "Your responses suggest moderate BPH...",
                cta: "📞 Discuss if PAE is Right for You – Free Specialist Consult"
            };
            return {
                title: "Severe Prostate Symptoms Detected – Prompt Action Recommended.",
                body: "Your symptom profile indicates severe BPH...",
                cta: "⚡ Fast-Track Your Free Specialist Consultation"
            };
        }
    },

    fibroids: {
        title: 'Uterine Fibroids Symptom Checker',
        questions: [
            "Do you experience heavy menstrual bleeding?",
            "Do you feel pelvic pressure or bloating?",
            "Do you have frequent urination?",
            "Do you have pain during periods?",
            "Have you experienced fertility challenges?"
        ],
        options: [
            { label: "Never", value: 0 },
            { label: "Rarely", value: 1 },
            { label: "Sometimes", value: 2 },
            { label: "Often", value: 3 },
            { label: "Always", value: 4 }
        ],
        result: (score) => {
            if (score <= 6) return {
                title: "Your Symptoms Are Mild – Monitoring Recommended",
                body: "You may be experiencing minor symptoms associated with fibroids...",
                cta: "📞 Schedule a Free Fibroid Symptom Check"
            };
            if (score <= 14) return {
                title: "Moderate Symptoms – Non-Surgical Options Available",
                body: "You're likely experiencing moderate fibroid symptoms...",
                cta: "📞 Talk to a Specialist About UFE"
            };
            return {
                title: "Severe Symptoms – Treatment Strongly Recommended",
                body: "Your symptom severity suggests immediate evaluation is needed...",
                cta: "📞 Book a Free UFE Consult Today"
            };
        }
    },

    // Add more quizzes like `piles`, `endometriosis`, etc. here
};
