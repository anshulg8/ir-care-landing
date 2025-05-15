import { Link } from 'react-router-dom';
import { FaMale, FaFemale, FaToiletPaper, FaWalking } from 'react-icons/fa';

const diseaseIcons = [
    {
        id: 1,
        label: 'Enlarged Prostate',
        slug: 'prostatic-artery-embolization-pae',
        icon: <FaMale className="text-4xl text-teal-600" />,
    },
    {
        id: 2,
        label: 'Uterine Fibroids',
        slug: 'uterine-fibroid-embolization-ufe',
        icon: <FaFemale className="text-4xl text-teal-600" />,
    },
    {
        id: 3,
        label: 'Bleeding Hemorrhoids',
        slug: 'hemorrhoidal-artery-embolization-hae',
        icon: <FaToiletPaper className="text-4xl text-teal-600" />,
    },
    {
        id: 4,
        label: 'Joint Pain',
        slug: 'okuno-procedure-tam',
        icon: <FaWalking className="text-4xl text-teal-600" />,
    },
];

const DiseaseIconsGrid = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Conditions We Treat
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {diseaseIcons.map(({ id, label, slug, icon }) => (
                        <Link
                            to={`/procedures/${slug}`}
                            key={id}
                            className="group flex flex-col items-center justify-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all bg-white"
                        >
                            <div className="mb-2">{icon}</div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiseaseIconsGrid;
