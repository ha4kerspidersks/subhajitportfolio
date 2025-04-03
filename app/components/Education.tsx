import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
    const { theme, isDarkMode } = useTheme();
    const education = [
        {
            degree: 'M.Tech in Cyber Security & Digital Forensics',
            school: 'National Forensic Sciences University (NFSU)',
            period: 'Nov 2021 – Jul 2023',
            description: 'Specialized in advanced cybersecurity concepts and digital forensics techniques.',
            color: 'from-blue-500 to-blue-600',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
        },
        {
            degree: 'B.Tech in Information Technology',
            school: 'Institute of Engineering & Management, Kolkata',
            period: '2017 – 2021',
            description: 'Focused on core IT concepts and software development fundamentals.',
            color: 'from-purple-500 to-purple-600',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            degree: 'High School Diploma in Science',
            school: 'Kamalpur Netaji High School',
            period: '2009 – 2016',
            description: 'Completed high school education with a focus on science and mathematics.',
            color: 'from-pink-500 to-pink-600',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Education
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative group"
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start">
                                    <motion.div
                                        className={`p-3 bg-gradient-to-r ${edu.color} rounded-lg text-white mr-4`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {edu.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <motion.h3
                                                    className="text-xl font-bold text-gray-900 mb-2"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    {edu.degree}
                                                </motion.h3>
                                                <motion.p
                                                    className="text-lg text-indigo-600 mb-2"
                                                    whileHover={{ scale: 1.01 }}
                                                >
                                                    {edu.school}
                                                </motion.p>
                                                <motion.p
                                                    className="text-gray-600"
                                                    whileHover={{ scale: 1.01 }}
                                                >
                                                    {edu.description}
                                                </motion.p>
                                            </div>
                                            <div className="mt-4 md:mt-0 md:ml-8">
                                                <motion.div
                                                    className="flex items-center text-gray-500"
                                                    whileHover={{ scale: 1.01 }}
                                                >
                                                    <motion.svg
                                                        className="w-5 h-5 mr-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </motion.svg>
                                                    {edu.period}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education; 