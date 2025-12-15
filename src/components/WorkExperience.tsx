'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
    logo?: string;
}

const experiences: Experience[] = [
    {
        company: 'Fynd',
        role: 'SDE - AI Engineer',
        duration: 'July 2025 - Present (5 months)',
        location: 'Mumbai Metropolitan Region, India',
        description: [
            'Currently building agentic flows for an AI Agent to perform large-scale load testing across products.',
            'Simulating millions of active users to identify performance bottlenecks and ensure system scalability.',
            'Enhancing product reliability by proactively testing under real-world traffic scenarios.',
        ],
        logo: '/fynd.png',
    },
    {
        company: 'Stealth AI Startup',
        role: 'Full Stack Engineer',
        duration: 'April 2024 - May 2025 (1 year 2 months)',
        location: 'Remote',
        description: [
            'Contributed as a Founding Engineer, Built and scaled an AI-powered CRM from the ground up, including dashboards, frontend, and backend integrations & Agentic Flows.',
            'Developed AI Notes & Summaries that turned sales calls into actionable insights, automating follow-ups and deal tracking.',
            'Designed advanced Voice-of-Customer Analytics, enabling leadership to ask real-time business questions (e.g., customer sentiment, churn drivers, product feedback) and receive AI-driven insights instantly.',
            'Extended accessibility with a cross-platform mobile app, and improved adoption with Mixpanel-driven analytics.',
        ],
        logo: '/stealth.png',
    },
    {
        company: 'Panora',
        role: 'Software Developer',
        duration: 'April 2024 - May 2024 (2 months)',
        location: 'Remote',
        description: [
            'Developed the backend of a decentralized exchange platform, ensuring efficient and secure transactions.',
            'Created a referral system backend using Node.js and MongoDB, enhancing user engagement and retention.',
            'Authored an SDK in Python using Aptos, facilitating cryptocurrency swaps between different tokens.',
        ],
        logo: '/panora.png',
    },
    {
        company: 'Lamarr',
        role: 'Full Stack Developer',
        duration: 'March 2024 - April 2024 (2 months)',
        location: 'Remote',
        description: [
            'Utilized NextJS, TypeScript, and TailwindCSS to develop responsive and dynamic user interfaces, enhancing the overall user experience.',
            'Incorporated PostgreSQL from Supabase for database operations, optimizing data retrieval and storage processes.',
            'Configured and routed three domains using Nginx, ensuring seamless deployment and efficient traffic management.',
        ],
        logo: '/lamarr.png',
    },
    {
        company: 'F13 Technologies',
        role: 'AWS Cloud Intern',
        duration: 'May 2023 - September 2023 (5 months)',
        location: 'India',
        description: [
            'Worked with AWS EC2, EBS, and S3 to host and develop websites.',
            'Successfully migrated non-AWS web applications to AWS infrastructure.',
            'Developed a sophisticated Content Recommendation system using AWS Personalize.',
            'Gained hands-on experience with over 50 AWS services during the training period.',
        ],
        logo: '/f13.png',
    },
];

export function WorkExperience() {
    return (
        <div className="mx-auto w-full max-w-5xl py-12 font-sans">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="from-foreground to-muted-foreground bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    Work Experience
                </h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    My professional journey and contributions
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 h-full w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 md:left-8" />

                {/* Experience items */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-16 md:pl-20"
                        >
                            {/* Logo circle */}
                            <div className="bg-accent absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-lg md:h-16 md:w-16">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-blue-500 to-purple-600">
                                    {exp.logo ? (
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                // Fallback to icon if image fails to load
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    ) : null}
                                    <Briefcase className="h-6 w-6 text-white md:h-8 md:w-8" />
                                </div>
                            </div>

                            {/* Content card */}
                            <div className="bg-card hover:border-primary/50 rounded-2xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                                {/* Company and role */}
                                <div className="mb-3">
                                    <h3 className="text-foreground text-xl font-semibold md:text-2xl">
                                        {exp.company}
                                    </h3>
                                    <p className="text-primary mt-1 text-base font-medium md:text-lg">
                                        {exp.role}
                                    </p>
                                </div>

                                {/* Duration and location */}
                                <div className="mb-4 flex flex-col gap-2 text-sm md:flex-row md:gap-4">
                                    <div className="text-muted-foreground flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="space-y-2">
                                    {exp.description.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-foreground/90 flex gap-2 text-sm leading-relaxed"
                                        >
                                            <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
