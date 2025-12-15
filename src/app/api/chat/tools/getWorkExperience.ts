import { tool } from 'ai';
import { z } from 'zod';

export const getWorkExperience = tool({
    description: 'Provides detailed information about professional work experience, including roles, companies, responsibilities, and achievements. Use this when users ask about work history, professional experience, or career background.',
    parameters: z.object({}),
    execute: async () => {
        return {
            experiences: [
                {
                    company: 'Fynd',
                    role: 'SDE - AI Engineer',
                    duration: 'July 2025 - Present (5 months)',
                    location: 'Mumbai Metropolitan Region, India',
                    type: 'Full-time',
                    description: [
                        'Currently building agentic flows for an AI Agent to perform large-scale load testing across products.',
                        'Simulating millions of active users to identify performance bottlenecks and ensure system scalability.',
                        'Enhancing product reliability by proactively testing under real-world traffic scenarios.',
                    ],
                    technologies: ['AI Agents', 'Load Testing', 'Performance Engineering', 'Scalability'],
                },
                {
                    company: 'Stealth AI Startup',
                    role: 'Full Stack Engineer',
                    duration: 'April 2024 - May 2025 (1 year 2 months)',
                    location: 'Remote',
                    type: 'Full-time',
                    description: [
                        'Contributed as a Founding Engineer, Built and scaled an AI-powered CRM from the ground up, including dashboards, frontend, and backend integrations & Agentic Flows.',
                        'Developed AI Notes & Summaries that turned sales calls into actionable insights, automating follow-ups and deal tracking.',
                        'Designed advanced Voice-of-Customer Analytics, enabling leadership to ask real-time business questions (e.g., customer sentiment, churn drivers, product feedback) and receive AI-driven insights instantly.',
                        'Extended accessibility with a cross-platform mobile app, and improved adoption with Mixpanel-driven analytics.',
                    ],
                    technologies: ['AI/ML', 'CRM', 'Full Stack', 'Agentic Flows', 'Mobile Development', 'Analytics'],
                },
                {
                    company: 'Panora',
                    role: 'Software Developer',
                    duration: 'April 2024 - May 2024 (2 months)',
                    location: 'Remote',
                    type: 'Contract',
                    description: [
                        'Developed the backend of a decentralized exchange platform, ensuring efficient and secure transactions.',
                        'Created a referral system backend using Node.js and MongoDB, enhancing user engagement and retention.',
                        'Authored an SDK in Python using Aptos, facilitating cryptocurrency swaps between different tokens.',
                    ],
                    technologies: ['Node.js', 'MongoDB', 'Python', 'Aptos', 'Blockchain', 'Web3'],
                },
                {
                    company: 'Lamarr',
                    role: 'Full Stack Developer',
                    duration: 'March 2024 - April 2024 (2 months)',
                    location: 'Remote',
                    type: 'Contract',
                    description: [
                        'Utilized NextJS, TypeScript, and TailwindCSS to develop responsive and dynamic user interfaces, enhancing the overall user experience.',
                        'Incorporated PostgreSQL from Supabase for database operations, optimizing data retrieval and storage processes.',
                        'Configured and routed three domains using Nginx, ensuring seamless deployment and efficient traffic management.',
                    ],
                    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase', 'Nginx'],
                },
                {
                    company: 'F13 Technologies',
                    role: 'AWS Cloud Intern',
                    duration: 'May 2023 - September 2023 (5 months)',
                    location: 'India',
                    type: 'Internship',
                    description: [
                        'Worked with AWS EC2, EBS, and S3 to host and develop websites.',
                        'Successfully migrated non-AWS web applications to AWS infrastructure.',
                        'Developed a sophisticated Content Recommendation system using AWS Personalize.',
                        'Gained hands-on experience with over 50 AWS services during the training period.',
                    ],
                    technologies: ['AWS', 'EC2', 'S3', 'EBS', 'AWS Personalize', 'Cloud Infrastructure'],
                },
            ],
            summary: {
                totalYearsOfExperience: '2+ years',
                currentRole: 'SDE - AI Engineer at Fynd',
                specializations: ['AI Engineering', 'Full Stack Development', 'Cloud Infrastructure', 'Blockchain/Web3'],
                keyAchievements: [
                    'Built and scaled AI-powered CRM as a Founding Engineer',
                    'Developed agentic flows for large-scale load testing',
                    'Created Voice-of-Customer Analytics platform',
                    'Gained expertise in 50+ AWS services',
                ],
            },
        };
    },
});
