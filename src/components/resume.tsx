'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { resumeDetails } from '@/lib/config-loader';

export function Resume() {
  // Resume details loaded from configuration

  const handleDownload = () => {
    // For external URLs, open in a new tab
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      {/* Resume Card */}
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
      >
        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download button */}
            <motion.button
              onClick={handleDownload}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download PDF"
            >
              <Download className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* PDF Preview - Check if URL exists */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full rounded-xl overflow-hidden border bg-white dark:bg-black shadow-lg"
      >
        <div className="bg-gray-100 dark:bg-black px-4 py-2 flex items-center justify-between border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <File className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume Preview</span>
          </div>
          {resumeDetails.downloadUrl && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Open Full
            </button>
          )}
        </div>

        <div className="w-full h-[600px] bg-gray-50 dark:bg-gray-900">
          {resumeDetails.downloadUrl ? (
            <iframe
              src={resumeDetails.downloadUrl}
              width="100%"
              height="100%"
              className="border-0"
              title="Resume Preview"
              allow="autoplay"
            />
          ) : (
            <div className="text-center p-8 max-w-md">
              <File className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Resume PDF Not Available
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                To display your resume, please add your PDF file to the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">/public</code> folder and update the download URL in <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">portfolio-config.json</code>.
              </p>
              <div className="text-left bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-xs">
                <p className="font-mono text-gray-800 dark:text-gray-200 mb-2">Steps:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Add <code>resume.pdf</code> to <code>/public</code> folder</li>
                  <li>Or update <code>downloadUrl</code> to an external URL</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;