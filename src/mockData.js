// src/mockData.js

// -- Slide 13: Diversity & Green HR --
export const diversityData = [
  { category: 'Women Pilots', value: 16, globalAvg: 5 },
  { category: 'Airport Ops', value: 31, previous: 24 },
  { category: 'Security Roles', value: 22, previous: 14 },
];

// -- Slide 4: Comparative HR Analysis --
export const competitorData = [
  { airline: 'Air India (Legacy)', costRatio: 15.5, fill: '#E31837' },
  { airline: 'IndiGo (Lean)', costRatio: 13.5, fill: '#3b82f6' },
  { airline: 'Akasa Air (Agile)', costRatio: 12.0, fill: '#f59e0b' },
];

// -- Slide 10: Digital Talent Acquisition & A/B Testing --
export const recruitmentCampaigns = [
  { week: 'W1', legacyCampaign: 120, genZCampaign: 250 },
  { week: 'W2', legacyCampaign: 135, genZCampaign: 380 },
  { week: 'W3', legacyCampaign: 110, genZCampaign: 420 },
  { week: 'W4', legacyCampaign: 140, genZCampaign: 550 },
];

// -- Slide 14: Human Factors & Amaha --
export const fatigueData = [
  { day: 'Mon', riskLevel: 20, flightHours: 6 },
  { day: 'Tue', riskLevel: 35, flightHours: 8 },
  { day: 'Wed', riskLevel: 65, flightHours: 11 },
  { day: 'Thu', riskLevel: 40, flightHours: 7 },
  { day: 'Fri', riskLevel: 80, flightHours: 13 }, // Trigger threshold
  { day: 'Sat', riskLevel: 25, flightHours: 4 },
  { day: 'Sun', riskLevel: 10, flightHours: 0 },
];

// -- Slide 8: Rise.AI Performance --
export const performanceMetrics = [
  { metric: 'Safety Compliance', score: 99.8, target: 100 },
  { metric: 'On-Time Performance', score: 87.4, target: 90 },
  { metric: 'Sustainability KPIs', score: 92.1, target: 95 },
  { metric: 'Digital Journey Adoption', score: 88.5, target: 85 }, // Slide 11 metric
];

// -- Slide 8: Gurukul.AI Capability --
export const learningModules = [
  { id: 1, title: 'A350 Fleet Transition', status: 'In Progress', progress: 65, type: 'Technical' },
  { id: 2, title: 'Vistara Cultural Bridge', status: 'Mandatory', progress: 15, type: 'Culture' }, // Slide 12
  { id: 3, title: 'Fatigue Risk Management', status: 'Completed', progress: 100, type: 'Compliance' },
  { id: 4, title: 'Explainable AI Basics', status: 'Available', progress: 0, type: 'Transformation' }, // Slide 16
];

// -- Slide 9: AI Chatbot Insights --
export const chatHistory = [
  { sender: 'ai', text: 'Welcome to the Vihaan.AI Concierge. How can I assist with your operational readiness today?' },
  { sender: 'user', text: 'Can you show me the A/B test results for the recent LinkedIn cabin crew campaign?' },
  { sender: 'ai', text: 'Certainly. The digitally native, storytelling-focused campaign (Campaign B) is currently outperforming the legacy job-board campaign by 292% in Gen-Z engagement. I have updated the Acquisition Dashboard with real-time metrics.' },
];