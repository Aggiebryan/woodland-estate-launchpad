
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  structuredData?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://woodlands.law${canonicalUrl}`} />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      
      {/* Structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
