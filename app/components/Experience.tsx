import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Deloitte',
            role: 'Senior Executive, Risk Advisory - Cyber : Identity',
            period: 'July 2023 – Present',
            location: 'Kolkata',
            achievements: [
                'Enhanced IAM solutions with Saviynt by developing secure identity governance workflows',
                'Automated comprehensive API testing using Rest Assured and UniRest',
                'Integrated secure identity repositories with Spring Boot and PostgreSQL',
            ],
            color: 'from-blue-500 to-blue-600',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            company: 'ANZ',
            role: 'Cyber Security Analyst',
            period: 'April 2020 – June 2020',
            location: 'Remote',
            achievements: [
                'Managed digital investigations and analyzed packet captures to detect potential threats',
                'Implemented security measures to protect sensitive data and systems',
            ],
            color: 'from-pink-500 to-pink-600',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
        <section id="experience" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
                        Experience
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
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative group"
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
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
                                        className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg text-white mr-4`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {exp.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <div>
                                                <motion.h3
                                                    className="text-xl font-bold text-gray-900"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    {exp.role}
                                                </motion.h3>
                                                <motion.p
                                                    className="text-lg text-indigo-600"
                                                    whileHover={{ scale: 1.01 }}
                                                >
                                                    {exp.company}
                                                </motion.p>
                                            </div>
                                            <div className="mt-2 sm:mt-0">
                                                <motion.p
                                                    className="text-gray-600"
                                                    whileHover={{ scale: 1.01 }}
                                                >
                                                    {exp.period}
                                                </motion.p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600">{exp.description}</p>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    whileHover={{ scale: 1.01, x: 5 }}
                                                >
                                                    <motion.svg
                                                        className={`w-5 h-5 text-${exp.color.split('-')[1]}-500 mr-2 mt-0.5`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </motion.svg>
                                                    <span className="text-gray-600">{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
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

export default Experience; 