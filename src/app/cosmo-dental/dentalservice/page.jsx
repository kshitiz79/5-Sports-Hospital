import ExpertDoctors from '@/components/cosmodenatl/ExpertDoctors';
import FacilityGallery from '@/components/cosmodenatl/FacilityGallery';
import FeatureCardSection from '@/components/cosmodenatl/FeatureCard';
import Hero from '@/components/cosmodenatl/hero';
import HighlightFeatures from '@/components/cosmodenatl/HighlightFeature';
import React from 'react';

const DentalService = () => {
    return (
        <div>
            <Hero/>
            <FeatureCardSection/>
            <HighlightFeatures/>
            <FacilityGallery/>
            <ExpertDoctors/>
        </div>
    );
};

export default DentalService;