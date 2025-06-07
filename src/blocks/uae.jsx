// import React from 'react';
// import CustomLink from '../components/CustomLink';

// const uaeBlock = () => {
//     return (
//         <div className="font-sans leading-relaxed">
//             <h2 className="text-xl font-bold my-4">What Is UFE?</h2>
//             <p className="mb-4 text-gray-700">
//                 Uterine Fibroid Embolization (UFE) is a non-surgical, scar-free treatment that treats fibroids through a simple pinhole in your wrist. A micro-wire is guided to the fibroid’s blood vessels and blocks their blood supply — shrinking the fibroids with no cuts or scars, no anesthesia, no hospital stay, and getting you home in a few hours.

//                 Importantly, yes — you can still get pregnant afterward.
//             </p>

//             <h2 className="text-xl font-bold my-4">How Are Fibroids Affecting You?</h2>
//             <p className="mb-4 text-gray-700">
//                 Fibroids are common, non-cancerous growths in the uterus in about 1 in 4 women and mostly require no treatment. In 5% (1 in 20) women though, they become large and cause:
//                 - Heavy or prolonged period bleeding
//                 - Severe cramps and pain during periods
//                 - Bloating, heaviness and pressure sensation
//                 - Frequent urination
//                 - Difficulty getting pregnant
//             </p>

//             <h2 className="text-xl font-bold my-4">What Are Your Treatment Options?</h2>
//             <p className="mb-4 text-gray-700">
//                 Once fibroids reach a certain size and symptoms become severe, painkillers stop working and a more permanent treatment becomes a necessity.

//                 Conventional Treatments:
//                 Surgery (Hysterectomy): Removes the uterus completely — effective, but need 4-6 weeks bed recovery, cause permanent loss of fertility and can cause potential complications like urine leakage, bladder damage and permanent loss of urinary control.
//                 Myomectomy: Cuts out part of uterus where fibroids are present while keeping rest of uterus intact - while it can technically allow pregnancy (almost always requiring a C-section), and the surgery is complex with a risk of urinary issues like hysterectomy and also excessive blood loss (since the uterus has a significantly high blood supply compared to other internal organs).
//             </p>

//             <h2 className="text-xl font-bold my-4">How Is UFE Different?</h2>
//             <p className="mb-4 text-gray-700">
//                 UFE works without cutting or removing anything.
//                 An interventional radiologist guides a thin wire from your wrist to the uterus using real-time imaging with advanced equipment, and then blocking only the vessels feeding the fibroids. Over the next few weeks your fibroids shrink in size, all symptoms including bleeding and pain disappear, and your uterus stays intact.
//             </p>

//             <h2 className="text-xl font-bold my-4">Is UFE Right for You?</h2>
//             <p className="mb-4 text-gray-700">
//                 UFE may be right if you:
//                 Want to keep your uterus (for pregnancy or personal choice)
//                 Need quick recovery and minimal downtime
//                 Can’t undergo surgery due to medical risks
//                 Want relief without pain, scars, or anesthesia
//             </p>

//             <h2 className="text-xl font-bold my-4">Is UFE Right for You?</h2>
//             <p className="mb-4 text-gray-700">
//                 UFE may NOT be right if you:
//                 Have certain fibroid types not suitable for embolization (e.g. pedunculated submucosal or completely cervical)
//                 Are nearing menopause and prefer to wait it out
//                 Have severe kidney disease and cannot tolerate the contrast used in UFE
//             </p>


//             {/* <h2 className="text-xl font-bold my-4">Who Is a Perfect Candidate?</h2>
//             <table className="w-full border border-collapse border-gray-300 my-4">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-3 bg-gray-100 text-left">✅ Ideal Candidates</th>
//                         <th className="border border-gray-300 p-3 bg-gray-100 text-left">❌ Not Ideal (Consider TURP / UroLift)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border border-gray-300 p-2">IPSS &gt;13, prostate &gt;40g</td>
//                         <td className="border border-gray-300 p-2">Neurogenic bladder</td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Bleeding disorders / on blood thinners</td>
//                         <td className="border border-gray-300 p-2">Severe (&gt;+2) median lobe intrusion</td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Cardiac, pulmonary or uncontrolled diabetes</td>
//                         <td className="border border-gray-300 p-2">Prostate cancer</td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Values sexual function & fast recovery</td>
//                         <td className="border border-gray-300 p-2">Wants tissue for histology</td>
//                     </tr>
//                 </tbody>
//             </table> */}

//             <p className="mb-4 text-gray-700 italic">
//                 Unsure? Book a free imaging review—our team will tell you honestly if PAE will meet your goals.{' '}
//                 <CustomLink procedure="Fibroid Treatment">Click here</CustomLink>
//             </p>

//             {/* <h2 className="text-xl font-bold my-4">PAE vs Traditional TURP</h2>
//             <table className="w-full border border-collapse border-gray-300 my-4">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-3 bg-gray-100 text-left">Factor</th>
//                         <th className="border border-gray-300 p-3 bg-gray-100 text-left">PAE</th>
//                         <th className="border border-gray-300 p-3 bg-gray-100 text-left">TURP</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {[
//                         ['Anesthesia', 'Local + mild sedation', 'Spinal/general'],
//                         ['Hospital Stay', '0 days (outpatient)', '2-3 days'],
//                         ['Ejaculatory Dysfunction', '10–16%', '50%+'],
//                         ['Erectile Dysfunction', '<5%', '~6%'],
//                         ['Stricture / incontinence', 'Rare (<1%)', '5–7%'],
//                         ['IPSS improvement @ 12 m', '-15 points', '-18 points'],
//                         ['Need for retreatment @ 5 y', '15–20%', '6–10%'],
//                     ].map(([factor, pae, turp], idx) => (
//                         <tr key={idx}>
//                             <td className="border border-gray-300 p-2">{factor}</td>
//                             <td className="border border-gray-300 p-2">{pae}</td>
//                             <td className="border border-gray-300 p-2">{turp}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table> */}

//         </div>
//     );
// };

// export default uaeBlock;

import React from 'react';
import CustomLink from '../components/CustomLink';

const uaeBlock = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold my-4">
                What Is UFE?
            </h2>
            <p className="mb-4 text-lg">
                Uterine Fibroid Embolization (UFE) is a non-surgical, scar-free treatment that treats fibroids through a simple pinhole in your wrist. A micro-wire is guided to the fibroid’s blood vessels and blocks their blood supply — shrinking the fibroids with no cuts or scars, no anesthesia, no hospital stay, and getting you home in a few hours.
            </p>
            <p className="mb-8 italic text-gray-600">
                Importantly, yes — you can still get pregnant afterward.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="Fibroid Treatment">Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">
                How Are Fibroids Affecting You?
            </h2>
            <p className="mb-4 text-lg">
                Fibroids are common, non-cancerous growths in the uterus in about 1 in 4 women and mostly require no treatment. In 5% (1 in 20) women though, they become large and cause:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Heavy or prolonged period bleeding</li>
                <li>Severe cramps and pain during periods</li>
                <li>Bloating, heaviness and pressure sensation</li>
                <li>Frequent urination</li>
                <li>Difficulty getting pregnant</li>
            </ul>

            <h2 className="text-2xl font-bold my-4">
                What Are Your Treatment Options?
            </h2>
            <p className="mb-4 text-lg">
                Once fibroids reach a certain size and symptoms become severe, painkillers stop working and a more permanent treatment becomes a necessity.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Conventional Treatments:</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>
                    <strong>Surgery (Hysterectomy):</strong> Removes the uterus completely — effective, but need 4-6 weeks bed recovery, cause permanent loss of fertility and can cause potential complications like urine leakage, bladder damage and permanent loss of urinary control.
                </li>
                <li>
                    <strong>Myomectomy:</strong> Cuts out part of uterus where fibroids are present while keeping rest of uterus intact - while it can technically allow pregnancy (almost always requiring a C-section), and the surgery is complex with a risk of urinary issues like hysterectomy and also excessive blood loss (since the uterus has a significantly high blood supply compared to other internal organs).
                </li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="Fibroid Treatment">Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">
                How Is UFE Different?
            </h2>
            <p className="mb-8 text-lg">
                UFE works without cutting or removing anything.
                An interventional radiologist guides a thin wire from your wrist to the uterus using real-time imaging with advanced equipment, and then blocking only the vessels feeding the fibroids. Over the next few weeks your fibroids shrink in size, all symptoms including bleeding and pain disappear, and your uterus stays intact.
            </p>

            <h2 className="text-2xl font-bold my-4">
                Is UFE Right for You?
            </h2>
            <p className="mb-2 text-lg">UFE may be right if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Want to keep your uterus (for pregnancy or personal choice)</li>
                <li>Need quick recovery and minimal downtime</li>
                <li>Can’t undergo surgery due to medical risks</li>
                <li>Want relief without pain, scars, or anesthesia</li>
            </ul>

            <p className="mb-2 text-lg">UFE may <strong>NOT</strong> be right if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Have certain fibroid types not suitable for embolization (e.g. pedunculated submucosal or completely cervical)</li>
                <li>Are nearing menopause and prefer to wait it out</li>
                <li>Have severe kidney disease and cannot tolerate the contrast used in UFE</li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="Fibroid Treatment">Let our doctors</CustomLink> guide you.
            </div>
        </div>
    );
};

export default uaeBlock;
