import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile.jpg';

const Hero = () => {
    const stats = [
        { label: 'Years of Experience', value: '3+', color: 'from-blue-500 to-blue-600' },
        { label: 'Projects Completed', value: '10+', color: 'from-purple-500 to-purple-600' },
        { label: 'CTF Challenges', value: '50+', color: 'from-pink-500 to-pink-600' },
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
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
                animate={{
                    background: [
                        "linear-gradient(to bottom right, #E0F2FE, #F3E8FD, #FCE7F3)",
                        "linear-gradient(to bottom right, #F3E8FD, #FCE7F3, #E0F2FE)",
                        "linear-gradient(to bottom right, #FCE7F3, #E0F2FE, #F3E8FD)",
                    ]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </motion.div>

            {/* Fixed Profile Photo */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-md hidden lg:block"
            >
                <div className="relative">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    <img
                        src={profilePhoto}
                        alt="Subhajit Kar - Profile Photo"
                        className="relative w-full h-auto rounded-full shadow-2xl border-4 border-white/20"
                    />
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:mr-[33%]">
                <motion.div
                    className="flex flex-col items-center lg:items-start justify-between gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            Subhajit Kar
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8"
                            whileHover={{ scale: 1.01 }}
                        >
                            Consultant @ Deloitte | IAM | IGA | CTF Player | Technology & Transformation | Certified Cross Identity Associate
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-12"
                        >
                            IAM Specialist | Security Enthusiast | Test Automation Expert – Crafting automated testing solutions and securing digital experiences.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto lg:mx-0"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    <motion.div
                                        className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex justify-center lg:justify-start gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Get in Touch
                            </motion.a>
                            <motion.a
                                href="#about"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white text-indigo-600 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    className="w-6 h-10 border-2 border-gray-400 rounded-full p-2"
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero; 