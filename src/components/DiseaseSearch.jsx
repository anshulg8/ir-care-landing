import { useState } from "react";
import { Link } from "react-router-dom";
import { proceduresArray } from "../data";

const DiseaseSearch = () => {
    const [query, setQuery] = useState("");

    const filtered = proceduresArray.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Search for a <span className="text-teal-600">Condition</span>
                </h2>
                <p className="text-gray-600 mb-6">
                    Find the right treatment by searching your disease or condition
                </p>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., Fibroids, Prostate, Pain..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                />

                {/* Results */}
                {query && (
                    <div className="mt-4 bg-white rounded-lg border border-gray-200 shadow-sm text-left">
                        {filtered.length > 0 ? (
                            filtered.map((disease, index) => (
                                <Link
                                    key={index}
                                    to={`/procedures/${disease.slug}`}
                                    className="block px-4 py-3 hover:bg-teal-50 text-gray-800 border-b last:border-b-0"
                                >
                                    {disease.name}
                                </Link>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-gray-500">No results found.</div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DiseaseSearch;
