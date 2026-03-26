import React, { useState } from 'react';
import { 
  Plane, BookOpen, Target, HeartPulse, MessageSquare, 
  Users, AlertTriangle, CheckCircle, Shield, ArrowRight, Send, 
  BarChart2, Globe, TrendingUp, Zap
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  LineChart, Line, ReferenceLine, AreaChart, Area, Cell, Legend
} from 'recharts';
import { 
  diversityData, fatigueData, performanceMetrics, learningModules, 
  chatHistory, competitorData, recruitmentCampaigns
} from './mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('command-center');
  const [chatMessages, setChatMessages] = useState(chatHistory);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'Noted. In the live environment, I would synthesize this request against our internal HR policies and provide a personalized action plan.' 
      }]);
    }, 1000);
  };

  // --- TAB 1: Command Center (Slides 4, 12, 13) ---
  const CommandCenterView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center"><Globe className="mr-3 text-ai-red" size={32}/> Strategic Command Center</h2>
        <p className="text-gray-500 mt-1">Macro-environment metrics, ESG goals, and competitive benchmarking.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vistara Integration (Slide 12) */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-ai-gold">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Vistara Integration</p>
            <Zap size={16} className="text-ai-gold" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Active Harmonization</h3>
          <p className="text-sm text-gray-600 mt-2">Data-driven competency mapping mitigating redundancies while preserving culture.</p>
        </div>

        {/* Green HR (Slide 13) */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-green-500">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">SITA OptiFlight</p>
            <LeafIcon size={16} className="text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">-35,000<span className="text-lg text-gray-500 font-medium ml-1">Tons CO₂</span></h3>
          <p className="text-sm text-gray-600 mt-2">Annual reduction via paperless operations and ESG embedded KPIs.</p>
        </div>

        {/* Diversity (Slide 13) */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-ai-red">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Diversity & Inclusion</p>
            <Users size={16} className="text-ai-red" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">16%<span className="text-lg text-gray-500 font-medium ml-1">Women Pilots</span></h3>
          <p className="text-sm text-gray-600 mt-2">Currently operating at 3x the global industry average (~5%).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competitive Analysis (Slide 4) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><BarChart2 className="mr-2 text-ai-red" size={20}/> Competitor Employee Cost Ratio</h3>
          <p className="text-xs text-gray-500 mb-6">Transitioning from legacy cost-heavy structures to performance-driven systems.</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="airline" tick={{fontSize: 12}} />
                <YAxis domain={[0, 20]} label={{ value: 'Cost Ratio (%)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
                <Tooltip cursor={{fill: 'transparent'}} formatter={(value) => `${value}%`} />
                <Bar dataKey="costRatio" radius={[4, 4, 0, 0]} barSize={50}>
                  {competitorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Diversity Transformation (Slide 13) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Users className="mr-2 text-ai-red" size={20}/> 2026 Representation Goals</h3>
          <p className="text-xs text-gray-500 mb-6">Strategic scaling across historically underrepresented operational sectors.</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diversityData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 40]} unit="%" />
                <YAxis dataKey="category" type="category" width={100} tick={{fontSize: 12, fill: '#4b5563'}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} />
                <Bar dataKey="value" name="Current %" fill="#E31837" radius={[0, 4, 4, 0]} barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  // --- TAB 2: Acquisition & Strategy (Slide 10) ---
  const AcquisitionView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center"><TrendingUp className="mr-3 text-ai-red" size={32}/> Digital Talent Acquisition</h2>
        <p className="text-gray-500 mt-1">Leveraging continuous, authentic storytelling to attract Gen Z and Expat demographics.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Plane className="mr-2 text-ai-red" size={20}/> A/B Testing: Recruitment Engagement</h3>
        <p className="text-xs text-gray-500 mb-6">Comparing traditional job board applications vs. targeted social media campaigns (LinkedIn).</p>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={recruitmentCampaigns} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Area type="monotone" dataKey="genZCampaign" name="Campaign B (Targeted Social/Storytelling)" stroke="#E31837" fill="#fecaca" strokeWidth={3} />
              <Area type="monotone" dataKey="legacyCampaign" name="Campaign A (Legacy Job Boards)" stroke="#9ca3af" fill="#f3f4f6" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // --- TAB 3: Gurukul & Rise (Slide 8) ---
  const TalentEngineView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center"><Target className="mr-3 text-ai-red" size={32}/> The Dual Engine</h2>
        <p className="text-gray-500 mt-1">Gurukul.AI (Capability) driving Rise.AI (Performance Outturns).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gurukul */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center"><BookOpen className="mr-2 text-ai-red" size={24}/> Gurukul.AI Hub</h3>
          <div className="space-y-4">
            {learningModules.map(module => (
              <div key={module.id} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{module.title}</h4>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${module.type === 'Technical' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {module.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-ai-red rounded-full" style={{ width: `${module.progress}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 w-12 text-right">{module.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rise */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center"><Target className="mr-2 text-ai-red" size={24}/> Rise.AI Output</h3>
           <div className="space-y-6">
            {performanceMetrics.map((metric, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-gray-700">{metric.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{metric.score}</span>
                    <span className="text-xs text-gray-400">/ {metric.target}</span>
                  </div>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${metric.score >= metric.target ? 'bg-green-500' : 'bg-ai-gold'}`} style={{ width: `${(metric.score / metric.target) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // --- TAB 4: Human Factors & Amaha (Slide 14) ---
  const WellnessView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center"><HeartPulse className="mr-3 text-ai-red" size={32}/> Human Factors & Safety</h2>
        <p className="text-gray-500 mt-1">Holistic wellness, psychological safety, and fatigue mitigation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fatigue Risk */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Shield className="mr-2 text-ai-red" size={20}/> Algorithmically Driven Rostering</h3>
          <p className="text-sm text-gray-500 mb-6">Dynamic fatigue risk management system mapping flight block hours against regulatory thresholds.</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fatigueData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tick={{fontSize: 12}} />
                <YAxis domain={[0, 100]} label={{ value: 'Fatigue Risk %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <ReferenceLine y={75} stroke="#E31837" strokeDasharray="5 5" label={{position: 'top', value: 'DGCA Action Threshold', fill: '#E31837', fontSize: 10}} />
                <Line type="monotone" dataKey="riskLevel" stroke="#1f2937" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Amaha Platform */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center shadow-sm">
          <HeartPulse className="text-indigo-600 mb-4 h-12 w-12" />
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">Amaha Portal</h3>
          <p className="text-sm text-indigo-800 mb-4 leading-relaxed">Discreet, structured mental health support for zero-margin-for-error environments.</p>
          <ul className="text-xs text-indigo-700 space-y-2 mb-6 font-medium">
            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-indigo-500"/> 600+ Self-care tools</li>
            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-indigo-500"/> Confidential Therapy</li>
            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-indigo-500"/> Post-Trauma Support</li>
          </ul>
          <button className="mt-auto bg-indigo-600 text-white py-3 px-4 rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors">
            Launch Amaha App
          </button>
        </div>
      </div>
    </div>
  );

  // --- TAB 5: AI Chatbot (Slide 9) ---
  const ChatbotView = () => (
    <div className="flex flex-col h-[calc(100vh-10rem)] animate-fade-in bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-900 p-5 text-white flex items-center gap-4">
        <MessageSquare size={24} className="text-ai-red" />
        <div>
          <h3 className="font-bold text-lg tracking-wide">Vihaan.AI Concierge</h3>
          <p className="text-xs text-gray-400">Delivering real-time, unbiased insights</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
              msg.sender === 'user' 
                ? 'bg-ai-red text-white rounded-br-none shadow-md' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleChatSubmit} className="flex gap-3">
          <input 
            type="text" 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Query policies, integration updates, or training modules..." 
            className="flex-1 px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ai-red/20 focus:border-ai-red transition-all"
          />
          <button type="submit" className="bg-gray-900 text-white p-3 px-6 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center shadow-md">
            <Send size={18} className="mr-2" /> Send
          </button>
        </form>
      </div>
    </div>
  );

  // Helper Icon for Leaf
  const LeafIcon = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;

  // --- NAVIGATION CONFIG ---
  const navItems = [
    { id: 'command-center', label: 'Command Center', icon: Globe },
    { id: 'acquisition', label: 'Acquisition Strategy', icon: TrendingUp },
    { id: 'talent-engine', label: 'Gurukul & Rise Engine', icon: Target },
    { id: 'wellness', label: 'Human Factors & Amaha', icon: HeartPulse },
    { id: 'chat', label: 'Vihaan.AI Assistant', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-950 text-white flex flex-col shadow-2xl z-10">
        <div className="p-8 flex flex-col items-start border-b border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-ai-red rounded-sm transform rotate-45 shadow-lg"></div>
            <h1 className="text-3xl font-black tracking-tight uppercase">Air India</h1>
          </div>
          <p className="text-xs text-ai-gold font-bold uppercase tracking-widest ml-11">Vihaan.AI Portal</p>
        </div>
        
        <div className="flex-1 py-8 space-y-2 px-4">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-ai-red text-white shadow-md font-bold' 
                    : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200 font-medium'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
        
        <div className="p-6 bg-gray-900 m-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-gold to-yellow-600 flex items-center justify-center text-sm font-bold text-white shadow-inner">
              HR
            </div>
            <div>
              <p className="text-sm font-bold text-gray-100">HR Admin</p>
              <p className="text-xs text-green-400 font-mono mt-0.5 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span> System Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto p-10 lg:p-14">
        {activeTab === 'command-center' && <CommandCenterView />}
        {activeTab === 'acquisition' && <AcquisitionView />}
        {activeTab === 'talent-engine' && <TalentEngineView />}
        {activeTab === 'wellness' && <WellnessView />}
        {activeTab === 'chat' && <ChatbotView />}
      </div>
    </div>
  );
}