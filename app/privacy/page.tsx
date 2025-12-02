import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PostgresMac",
  description:
    "PostgresMac Privacy Policy - Your data stays on your device. We do not collect, transmit, or store any personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Privacy Policy for PostgresMac
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last Updated: December 1, 2025
          </p>
        </header>

        {/* Content sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Introduction
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This Privacy Policy explains how PostgresMac handles your
              information. <strong>All data stays on your device</strong>.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac is a local-only application. We do not collect,
              transmit, store, or share any of your personal information or
              usage data. This privacy policy explains what data the app
              accesses on your device and how it is used.
            </p>
          </section>

          {/* Information We Do NOT Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Information We Do NOT Collect
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not collect any information from you, including
              but not limited to:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Usage analytics or statistics</li>
              <li>Crash reports or diagnostic data</li>
              <li>Device information</li>
              <li>IP addresses or location data</li>
              <li>SQL queries or database content you work with</li>
              <li>Connection credentials or database information</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
              We do not track you. We do not analyze your behavior. We do not
              collect any data whatsoever.
            </p>
          </section>

          {/* Information the App Accesses Locally */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Information the App Accesses Locally
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              While PostgresMac does not collect or transmit any data, it does
              access the following information locally on your device to provide
              its functionality:
            </p>

            <div className="space-y-4 pl-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  PostgreSQL Connection Information
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    Database connection credentials (host, port, username,
                    password, database name)
                  </li>
                  <li>
                    Saved connection profiles with your chosen names and
                    settings
                  </li>
                  <li>Connection parameters you configure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Database Content
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    The databases, tables, and data you choose to access through
                    the PostgreSQL servers you connect to
                  </li>
                  <li>SQL queries you write and execute</li>
                  <li>Query results returned from your PostgreSQL servers</li>
                </ul>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
              Important: All of this information remains exclusively on your
              Mac. It is never transmitted to us or any third party.
            </p>
          </section>

          {/* How Your Data is Stored */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              How Your Data is Stored
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              All data used by PostgresMac is stored locally on your device:
            </p>

            <div className="space-y-4 pl-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  macOS Keychain Integration
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    Database passwords are securely stored in your macOS
                    Keychain
                  </li>
                  <li>
                    This is Apple&apos;s built-in secure storage system designed
                    to protect sensitive credentials
                  </li>
                  <li>
                    Only PostgresMac can access these stored passwords, and only
                    with your system&apos;s permission
                  </li>
                  <li>
                    Passwords are encrypted and protected by your Mac&apos;s
                    security features
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Local Application Storage
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    Connection profiles (excluding passwords) are stored in your
                    application&apos;s local storage
                  </li>
                  <li>
                    This includes connection names, hostnames, ports, usernames,
                    and database names
                  </li>
                  <li>
                    All data is stored using standard macOS application data
                    storage
                  </li>
                  <li>
                    No data is synchronized to iCloud or any cloud service
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  SQL Queries and Results
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    SQL queries you write are executed directly against the
                    PostgreSQL servers you specify
                  </li>
                  <li>
                    Query results are displayed in the app but not permanently
                    stored
                  </li>
                  <li>
                    No history of your queries or results is maintained by the
                    application
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Data Security
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Your data security is ensured through:
            </p>

            <div className="space-y-4 pl-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Local-Only Architecture
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>PostgresMac operates entirely on your device</li>
                  <li>
                    No data transmission to external servers (except PostgreSQL
                    servers you explicitly connect to)
                  </li>
                  <li>
                    No network connections initiated by the app except to your
                    specified database servers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  macOS Security Features
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>Leverages macOS Keychain for credential security</li>
                  <li>
                    Uses standard macOS application sandboxing and security
                    features
                  </li>
                  <li>
                    Protected by your Mac&apos;s security settings and user
                    permissions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Direct Database Connections
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    When you connect to a PostgreSQL server, the connection goes
                    directly from your Mac to that server
                  </li>
                  <li>We are not an intermediary in this connection</li>
                  <li>
                    All communication follows the standard PostgreSQL protocol
                    with its security features
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Third-Party Services
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not use any third-party services, including:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
              <li>Analytics platforms (no Google Analytics, Mixpanel, etc.)</li>
              <li>Crash reporting services</li>
              <li>Advertising networks</li>
              <li>Cloud storage services</li>
              <li>Authentication services</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The only network connections made by PostgresMac are directly to
              the PostgreSQL database servers you explicitly configure and
              choose to connect to.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Data Sharing
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We do not share any data with third parties because we do not
              collect any data. Your database credentials, connection
              information, SQL queries, and results never leave your device
              (except when sent directly to your PostgreSQL servers as part of
              normal database operations).
            </p>
          </section>

          {/* Your Rights and Control */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Your Rights and Control
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              You have complete control over your data:
            </p>

            <div className="space-y-4 pl-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Deleting Connection Profiles
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    You can delete any saved connection profile directly in the
                    app
                  </li>
                  <li>Deleting a connection removes it from local storage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Removing Passwords
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    Deleting a connection profile also removes associated
                    passwords from macOS Keychain
                  </li>
                  <li>
                    You can also manage stored passwords through macOS System
                    Preferences &gt; Passwords
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Uninstalling the App
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
                  <li>
                    Uninstalling PostgresMac removes the application and its
                    local data
                  </li>
                  <li>
                    You may need to manually remove Keychain entries through
                    System Preferences if desired
                  </li>
                  <li>
                    No data remains on our servers because no data was ever sent
                    to us
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Children&apos;s Privacy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not collect any information from anyone,
              including children under the age of 13. The app does not target
              children specifically, and we do not knowingly collect personal
              information from children. Since no data is collected by the app,
              COPPA compliance is maintained by default.
            </p>
          </section>

          {/* Mac App Store Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Mac App Store Privacy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              For Mac App Store users, PostgresMac&apos;s privacy label
              indicates &quot;No Data Collected&quot; because the app does not
              collect any data that leaves your device. The app accesses local
              data only as necessary to provide database management
              functionality.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time to reflect
              changes in the app, legal requirements, or our privacy practices.
              When we make changes:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
              <li>
                The &quot;Last Updated&quot; date at the top of this policy will
                be revised
              </li>
              <li>
                If distributed through the Mac App Store, updates will be noted
                in release notes
              </li>
              <li>
                For significant changes, we will provide notice through the app
                or our website
              </li>
              <li>
                Continued use of the app after changes indicates acceptance of
                the updated policy
              </li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your privacy.
            </p>
          </section>

          {/* Future Changes to the App */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Future Changes to the App
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Currently, PostgresMac is a completely local application with no
              data collection. If we ever introduce features that involve data
              collection, cloud synchronization, or online services:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
              <li>This Privacy Policy will be updated accordingly</li>
              <li>
                Users will be clearly notified before any such features are
                enabled
              </li>
              <li>
                Any data collection features will be optional and require
                explicit user consent
              </li>
              <li>
                The core principle of privacy protection will remain central to
                the app
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Contact Us
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or PostgresMac&apos;s privacy practices, please
              contact us at:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 pl-2">
              <p>
                <strong>Email:</strong> fikri@mghazi.com
              </p>
              <p>
                <strong>Website:</strong> postgresmac.com
              </p>
              <p>
                <strong>Developer:</strong> Fikri Ghazi
              </p>
            </div>
          </section>

          {/* Summary */}
          <section className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Summary
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              To summarize PostgresMac&apos;s approach to privacy:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
              <li>
                <strong>No data collection:</strong> We do not collect any
                information from you
              </li>
              <li>
                <strong>Local storage only:</strong> All data stays on your Mac
              </li>
              <li>
                <strong>Secure credentials:</strong> Passwords protected by
                macOS Keychain
              </li>
              <li>
                <strong>No tracking:</strong> No analytics, no crash reports, no
                usage statistics
              </li>
              <li>
                <strong>No third parties:</strong> No external services or data
                sharing
              </li>
              <li>
                <strong>You are in control:</strong> Complete control over your
                connection profiles and data
              </li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not collect any data from you. All information
              remains stored locally on your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
