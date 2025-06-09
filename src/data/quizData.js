// src/data/quizData.js
export const prostateQuizData = {
    title: 'Prostate Symptom Quiz (IPSS)',
    questions: [
        'Incomplete Emptying - How often have you had the sensation of not emptying your bladder?',
        'Frequency - How often have you had to urinate less than every two hours?',
        'Intermittency - How often have you found you stopped and started again several times when you urinated?',
        'Urgency - How often have you found it difficult to postpone urination?',
        'Weak Stream - How often have you had a weak urinary stream?',
        'Straining - How often have you had to strain to start urination?',
        'Nocturia - How many times did you typically get up at night to urinate?',
    ],
    options: [
        { label: 'Not at All', value: 0 },
        { label: 'Less than 1 in 5 Times', value: 1 },
        { label: 'Less than Half the Time', value: 2 },
        { label: 'About Half the Time', value: 3 },
        { label: 'More than Half the Time', value: 4 },
        { label: 'Almost Always', value: 5 },
    ],
    specialOptions: {
        6: [
            { label: 'None', value: 0 },
            { label: '1 Time', value: 1 },
            { label: '2 Times', value: 2 },
            { label: '3 Times', value: 3 },
            { label: '4 Times', value: 4 },
            { label: '5 Times', value: 5 },
        ]
    },
    result: (score) => {
        if (score <= 7) {
            return {
                severity: 'mild',
                score,
                // title: "Your Prostate Symptoms Are Mild – Here's How to Keep Them That Way.",
                // body: `Your prostate symptoms currently reflect early-stage Benign Prostatic Hyperplasia (BPH)—a natural enlargement of your prostate gland that commonly affects men after age 50 (and increasingly, in younger men too). Mild symptoms usually include occasional increased urinary urgency or minor changes in urine flow.`,
                // learn: `As you age, hormonal shifts (especially increased levels of dihydrotestosterone, DHT) cause your prostate to slowly grow. \n Currently, your symptoms indicate minimal obstruction, but BPH often gradually progresses. Approximately 15% of men with mild symptoms see significant worsening within a year without proper management (AUA guidelines, 2022). `,
                // steps: `• Limit fluids before bed\n• Reduce caffeine/alcohol\n• Do pelvic floor exercises`,
                cta: "📞 Schedule Your Free Annual Prostate Health Check-In",
            };
        } else if (score <= 19) {
            return {
                severity: 'moderate',
                score,
                // title: "Moderate Symptoms Detected – You Have Effective Options Beyond Medication.",
                // body: `Your responses suggest moderate BPH. Typical symptoms at this stage include frequent night-time urination...`,
                // learn: `The enlarged prostate presses on your urethra, straining your bladder...`,
                // steps: `• Alpha-blockers, 5AR inhibitors (temporary relief)\n• PAE – 80–90% improvement\n• Resume activities in 48 hrs`,
                cta: "📞 Discuss if PAE is Right for You – Free Specialist Consult Today",
            };
        } else {
            return {
                severity: 'severe',
                score,
                // title: "Severe Prostate Symptoms Detected – Prompt Action Recommended.",
                // body: `Your symptoms indicate advanced BPH. Frequent urgency, weak stream, night awakenings are common.`,
                // learn: `Risk of complete urinary blockage or long-term bladder damage rises significantly (50% within 2 years)...`,
                // steps: `• PAE: Minimally invasive\n• No catheter, no incision\n• Discharge same day\n• Covered by insurance`,
                cta: "⚡ Fast-Track Your Free Specialist Consultation – Speak to Our Doctor Immediately",
            };
        }
    },
};


