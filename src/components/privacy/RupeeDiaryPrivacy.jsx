import React from "react";

const Section = ({ title, children }) => (
    <section
        className="
      mb-6 rounded-xl border border-gray-200 dark:border-gray-700
      bg-white dark:bg-[#0f172a] p-6
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
      hover:border-indigo-400 dark:hover:border-indigo-500
    "
    >
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {children}
        </p>
    </section>
);

const RupeeDiaryPrivacy = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#020617] py-12 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        RupeeDiary Mobile Application
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        Last updated: 03/01/2026
                    </p>
                </div>

                {/* Intro */}
                <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                    RupeeDiary respects your privacy. This page explains how your financial
                    data is handled within the RupeeDiary mobile application.
                </p>

                {/* Sections */}
                <Section title="Data Collection">
                    RupeeDiary does not collect, store, or transmit personal or financial
                    data to any external servers. All data entered by the user remains
                    stored locally on the user’s device.
                </Section>

                <Section title="Internet Usage">
                    The app may use internet connectivity for optional features. No
                    personal or financial data is uploaded or shared with any service.
                </Section>

                <Section title="Local Storage">
                    All financial records, transactions, and settings are stored locally
                    using the device’s internal storage and are never accessed remotely.
                </Section>

                <Section title="Data Backup & Restore">
                    Users may optionally export or import their data manually. Backup files
                    remain fully under the user’s control and are never transmitted to any
                    server.
                </Section>

                <Section title="Third-Party Services">
                    RupeeDiary does not use advertising, analytics, or tracking services of
                    any kind.
                </Section>

                <Section title="Data Security">
                    Reasonable measures are taken to protect data stored locally on the
                    user’s device against unauthorized access.
                </Section>

                <Section title="Children’s Privacy">
                    RupeeDiary is not intended for children under the age of 13 and does
                    not knowingly collect data from children.
                </Section>

                <Section title="Policy Updates">
                    This privacy policy may be updated in future versions of the app. Any
                    changes will be reflected on this page.
                </Section>

                {/* Contact */}
                <div className="mt-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">Contact</h3>
                    <p className="text-sm">
                        If you have any questions about this privacy policy, feel free to
                        reach out:
                    </p>
                    <a
                        href="mailto:support@bramhadeshmukh.me"
                        className="mt-2 inline-block font-medium underline underline-offset-4 hover:text-indigo-100 transition-colors"
                    >
                        support@bramhadeshmukh.me
                    </a>
                </div>

            </div>
        </div>
    );
};

export default RupeeDiaryPrivacy;
