
import { getIndustryInsights } from '@/actions/deshboard';
import { getUserOnboardingStatus }  from '@/actions/user';
import { redirect } from 'next/navigation';
import DashboardView from './_components/dashboard-view';
import React from 'react'

const IndustryInsight = async() => {
    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

    if (!isOnboarded) {
      redirect("/onboarding");
    }
  return (
    <div className='container mx-auto'>
     <DashboardView insights={insights}/>
    </div>
  )
}

export default IndustryInsight
