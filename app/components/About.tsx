import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        {
            category: 'IAM Tools',
            items: ['Saviynt', 'ForgeRock', 'Auth0', 'Okta'],
            color: 'from-blue-500 to-blue-600',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            category: 'Test Automation',
            items: ['Java', 'Maven', 'TestNG', 'JUnit', 'Postman', 'API Testing'],
            color: 'from-purple-500 to-purple-600',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            category: 'Security',
            items: ['Web VAPT', 'Android VAPT', 'CTF Challenges'],
            color: 'from-pink-500 to-pink-600',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
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
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                        About Me
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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                    >
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-3xl opacity-20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <div className="relative bg-white rounded-lg p-8 shadow-xl">
                                <motion.p
                                    className="text-lg text-gray-600 leading-relaxed"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    I am an IAM Specialist, Security Enthusiast, and Test Automation Expert. I craft automated testing solutions using Java, Maven, TestNG, JUnit, and Postman. I specialize in IAM tools like Saviynt, ForgeRock, Auth0, and Okta for seamless identity and access management, and I thrive on challenging web and Android penetration testing (VAPT) scenarios as a passionate CTF player.
                                </motion.p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-3xl opacity-20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <div className="relative bg-white rounded-lg p-8 shadow-xl">
                                <motion.p
                                    className="text-lg text-gray-600 leading-relaxed"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    My expertise lies in developing secure identity governance workflows and automating comprehensive API testing. I'm passionate about creating robust security solutions and staying at the forefront of cybersecurity trends.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative group"
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <div className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center mb-4">
                                        <motion.div
                                            className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-lg text-white mr-4`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {skillGroup.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-gray-900">{skillGroup.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 