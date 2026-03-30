/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AlertCircle, Info } from 'lucide-react';

const APPLICATIONS = [
    "ADA / EVA / ASKBO (Tier 1)", "AIMS (Tier 1)", "AMOS (Tier 1)", "ARINC / ARINC Border Management (Tier 1)", "ARINC Messaging Service (AAB) (Tier 1)", "CARDWORKS (Tier 1)", "CENTRALISE LOGIN SYSTEM (Tier 1)", "DIGITAL TRIP FILES / NEO (Tier 1)", "EDIFLY MESSAGING (Tier 1)", "ENTERPRISE SERVICE BUS (ESB) (Tier 1)", "FLIGHT REALTIME SYSTEM (FLIRT) (Tier 1)", "HEALTH TRAVEL PASS (Tier 1)", "MCO DCS AND KIOSK (Tier 1)", "MOVE X AIRLINE FLIGHT DATA SERVICES (Tier 1)", "NATIVE SELF BAG DROP (Tier 1)", "NAVBLUE FLIGHT PLAN (NFP) (Tier 1)", "NAVITAIRE - GSS (APIS/APPS/IAPI/PNRGOV/Console) (Tier 1)", "NAVITAIRE - LOYALTY (Tier 1)", "NAVITAIRE - NEWSKIES DYNAMIC PRICING (Tier 1)", "NAVITAIRE - NEWSKIES FARE MANAGER PLUS (Tier 1)", "NAVITAIRE - NEWSKIES GONOW (Tier 1)", "NAVITAIRE - NEWSKIES MANAGEMENT CONSOLE (Tier 1)", "NAVITAIRE - NEWSKIES NAVITAIRE REPORT MANAGER (Tier 1)", "NAVITAIRE - NEWSKIES SCHEDULE MANAGER (Tier 1)", "NAVITAIRE - NEWSKIES SKYSPEED RESERVATION MANAGER (Tier 1)", "NAVITAIRE - SKYLEDGER (Tier 1)", "NAVITAIRE - SKYPAY (Tier 1)", "NAVTECH MIDDLEWARE (Tier 1)", "NETWORK OPERATIONS INSIGHTS (GE NOI) (Tier 1)", "OPERATIONAL DECISION INTELLIGENCE (ODIN) (Tier 1)", "SALESFORCE (Tier 1)", "SITA AIRCOM (Tier 1)", "SITA MESSAGING (Tier 1)", "SITA MISSION WATCH (Tier 1)",
    "ACE (Tier 2)", "ADYEN (Tier 2)", "AIRFASE / AIRFASE LITE (Tier 2)", "ALLSTAR BOOKING - ECOUPON & ID90 (Tier 2)", "ARMS (Tier 2)", "AUTO SEAT ASSIGNMENT (Tier 2)", "BAGGAGE RECONCILIATION SYSTEM (BRS) (Tier 2)", "BAGGAGE SOURCE MESSAGE (BSM) (Tier 2)", "BAGGAGE TRACING SYSTEM (BTS) (Tier 2)", "BOOKING CART API SERVICE (Tier 2)", "CAMBODIA TAX INVOICE (Tier 2)", "DOLLY (Tier 2)", "E-ATTESTATION (Tier 2)", "E-INVOICING (Tier 2)", "FIDS (Tier 2)", "FLIGHT DISRUPTION MANAGEMENT SYSTEM (FDMS) (Tier 2)", "FLIGHT STATUS (Tier 2)", "GROUP BOOKING SYSTEM (Tier 2)", "IN-SEAT ORDERING (Tier 2)", "INFLIGHT SALES SYSTEM (ISS4) (Tier 2)", "KAVITECH BAGGAGE TRACING SYSTEM (BTS) (Tier 2)", "KIOSK (CUSS / V4 / V5 / V6) (Tier 2)", "MOVE CHECK-IN (Tier 2)", "NAVITAIRE - TYPE B MESSAGE (Tier 2)", "ORACLE (Tier 2)", "PASSENGER RECONCILIATION SYSTEM (PRS) (Tier 2)", "PAX MANIFEST PORTAL (Tier 2)", "PRE-BOOK MEAL (Tier 2)", "REDRADAR (BCM & ERM) (Tier 2)", "REFUND PROCESSING SYSTEM (RPS) (Tier 2)", "SMARTKARGO (Tier 2)", "TAA TAX INVOICE (Tier 2)", "TOTAL OPERATIONS NETWORK INTELLIGENCE (TONI) (Tier 2)", "VIETNAM TAX INVOICE SYSTEM (Tier 2)", "WAREHOUSE MANAGEMENT SYSTEM (WMS) (Tier 2)", "YONDER DOCUMENT MANAGEMENT SYSTEM (Tier 2)",
    "AA WIFI (Tier 3)", "AAX SSR TAG AUTOMATION (Tier 3)", "AIRASIA DRONE (Tier 3)", "AUTOMATED DAILY FLIGHT MONITORING (Tier 3)", "BLACKLISTED PASSENGER PORTAL (Tier 3)", "CORUSON (Tier 3)", "CWORKS (Tier 3)", "DIGIMIND (Tier 3)", "DIVA COLLECTOR (Tier 3)", "DOCUNET (Tier 3)", "ELECTRONIC FLIGHT BAG (EFB) (Tier 3)", "ELEVADE (Tier 3)", "EXCHANGE RATE APIs (BI, BNU, BOT, Vietnam) (Tier 3)", "FLIGHT ATTENDANT HOTEL BOOKING (Tier 3)", "FUDER (Tier 3)", "FUEL INSIGHT MAINLINE / HONEYWELL FORGE (Tier 3)", "GALAXY SUITE (Tier 3)", "GO VIEWPOINT (Tier 3)", "HUMANICA PAYROLL SYSTEM (WORKPLAZE) (Tier 3)", "I-TOPUP (Tier 3)", "ICTS TRAVELDOC (Tier 3)", "INFOBIP (Tier 3)", "INTERCO (BILLBOT / RECOBOT) (Tier 3)", "JIFFY (Tier 3)", "LDCS / MAESTRO (Tier 3)", "LEENA AI TICKETING SYSTEM (Tier 3)", "MANPOWER PLANNING (Tier 3)", "MERIT/DEMERIT DASHBOARD & FLIGHT OPS Z2 (Tier 3)", "NAVBLUE MISSION+ (Tier 3)", "NMC COMMAND CENTER DASHBOARD (Tier 3)", "OVERBOOKING TRAVEL VOUCHER DASHBOARD (Tier 3)", "PAXIN (Tier 3)", "PELESYS ETR (Tier 3)", "PHENOM (Tier 3)", "REDEYE (Tier 3)", "REDHIRE (Tier 3)", "REFINITIV (EXCHANGE RATES) (Tier 3)", "REGULA FORENSICS (Tier 3)", "REVAL (Tier 3)", "RPA (DIVA IDP, ROBOPAYOUT, ZONEUP) (Tier 3)", "SANTAN CORPORATE WEB PAGE (Tier 3)", "SKYIQ (Tier 3)", "TAA DELTAPATCH CLOUD PABX (Tier 3)", "TAA PRINTER SYSTEM (PAPERCUT) (Tier 3)", "TABLEAU (Tier 3)", "UIPATH (Tier 3)", "WASABI (Tier 3)",
    "ACCOUNT PORTAL (Tier 4)", "AIRASIA FOUNDATION (Tier 4)", "AIRLINE NPS PLATFORM (Tier 4)", "ALERTA (Tier 4)", "AVIATAR (Tier 4)", "BOARDPAC (Tier 4)", "CABIN CREW COMMISSION PORTAL (Tier 4)", "CALMS (Tier 4)", "CEKAP (Tier 4)", "CHECKMK (Tier 4)", "CHILLI (Tier 4)", "CONCUR (Tier 4)", "CREDIT ACCOUNT NOTIFICATION (Tier 4)", "DOCUSIGN (Tier 4)", "DYNAMICS AX 2009 / 2012 (AXAPTA) (Tier 4)", "EGENCIA (Tier 4)", "EIGHTFOLD AI - TALENT MANAGEMENT (Tier 4)", "ELVIS DAM / WOODWING ASSETS (Tier 4)", "ENTERPRISE IDENTITY MANAGEMENT & LOGGING (Tier 4)", "ESKER APOD (OCR) (Tier 4)", "ETRAINING (CBTA) (Tier 4)", "EXCELITY (Tier 4)", "FACES+ (Tier 4)", "FLYSISWA PORTAL (Tier 4)", "GOMBOT (Tier 4)", "GRAFANA (Tier 4)", "ILEAS (Tier 4)", "JIRA (ASSET, CONFLUENCE, SERVICE MANAGEMENT, SOFTWARE) (Tier 4)", "LOOKER STUDIO (Tier 4)", "MICROSITE (Tier 4)", "MOT FLYSISWA AUTOMATION (Tier 4)", "MUSEUM PORTAL (Tier 4)", "NALURI (Tier 4)", "NEWSKIES USER RESET PASSWORD (Tier 4)", "PETTY CASH (Tier 4)", "PINGDOM (Tier 4)", "REDDOCS (Tier 4)", "REDICON / REDICONS (ESS) (Tier 4)", "REDQ PARKING SYSTEM (Tier 4)", "SANTAN EXPRESS (Tier 4)", "TESTRAIL (Tier 4)", "TRAVEL AGENT RESET PASSWORD (Tier 4)", "TRAVELPERK (Tier 4)", "WORKPLACE BY META / WORKVIVO (Tier 4)", "XILNEX (Tier 4)", "YELLOW AI (Tier 4)", "ZOOM (Tier 4)"
];

const LOCATIONS = [
    "AGSS - PENANG (Tier 1)", "BRUNEI (Tier 1)", "CHIANG MAI (Tier 1)", "CHINA CAN OFFICE (Tier 1)", "CHINA DC (Tier 1)", "CYBERJAYA (PRISMA 9) - BCP (Tier 1)", "CYBERPOINT FINEXUS (Tier 1)", "DANANG (Tier 1)", "DENPASAR (Tier 1)", "DON MUEANG (Tier 1)", "GROCER OFFICE (Tier 1)", "IAA HQ (Tier 1)", "IFC WAREHOUSE (Tier 1)", "JAKARTA (Tier 1)", "JOHOR BAHRU / SENAI (Tier 1)", "KHH (Tier 1)", "KL SENTRAL (Tier 1)", "KLIA 1 - SITA (Tier 1)", "KLIA 2 / PERMANENT OFFICE (Tier 1)", "KOTA KINABALU (Tier 1)", "KUCHING (Tier 1)", "NINOY AQUINO T2 & T3 (Tier 1)", "NUCLEUS TOWER, PJ (Tier 1)", "PAA HQ (Tier 1)", "PENANG (Tier 1)", "PHNOM PENH (Tier 1)", "PHUKET (Tier 1)", "REDCHAIN (Tier 1)", "REDQ CAMPUS (Tier 1)", "REDQ DC (Tier 1)", "SINGAPORE (Tier 1)", "SURABAYA (Tier 1)", "SUVARNABHUMI (Tier 1)", "SYDNEY AIRPORT & DC (Tier 1)", "TAA HQ (Tier 1)", "TELEPORT - WISMA TUNE (Tier 1)", "TITIWANGSA FINEXUS (Tier 1)", "TPE (Tier 1)", "TRAVELSKY NETWORK (Tier 1)", "VITRO DC (Tier 1)",
    "CATICLAN (Tier 2)", "CEBU (Tier 2)", "DA NANG (Tier 2)", "DHAKA (Tier 2)", "HANOI (Tier 2)", "HAT YAI (Tier 2)", "HO CHI MINH CITY (Tier 2)", "HONG KONG (Tier 2)", "KHON KAEN (Tier 2)", "KOTA BHARU (Tier 2)", "KRABI (Tier 2)", "KUALANAMU (Tier 2)", "LANGKAWI (Tier 2)", "MACAO (Tier 2)", "MIRI (Tier 2)", "SIBU (Tier 2)", "SIEM REAP (Tier 2)", "SURABAYA (Tier 2)", "TAIPEI - TAOYUAN (Tier 2)", "TAWAU (Tier 2)",
    "BACOLOD (Tier 3)", "BINTULU (Tier 3)", "CHENNAI (Tier 3)", "CHIANG RAI (Tier 3)", "DAVAO (Tier 3)", "ILOILO (Tier 3)", "KALIBO (Tier 3)", "KERTAJATI (Tier 3)", "KUALA TERENGGANU (Tier 3)", "KUPANG (Tier 3)", "LOMBOK (Tier 3)", "MALÉ (Tier 3)", "NAKHON PHANOM (Tier 3)", "NAKHON SI THAMMARAT (Tier 3)", "NAN (Tier 3)", "PALEMBANG (Tier 3)", "PERTH (Tier 3)", "PHITSANULOK (Tier 3)", "PUERTO PRINCESA (Tier 3)", "ROI ET AIRPORT (Tier 3)", "SANDAKAN (Tier 3)", "SEOUL (Tier 3)", "SORONG (Tier 3)", "SUBANG (Tier 3)", "SURAT THANI (Tier 3)", "SYDNEY (Tier 3)", "TACLOBAN (Tier 3)", "TAGBILARAN (Tier 3)", "TANJUNG PANDAN (Tier 3)", "TIMOR LESTE (Tier 3)", "TIRUCHIRAPPALLI (Tier 3)", "UBON RATCHATHANI (Tier 3)", "UDON THANI (Tier 3)", "YANGON (Tier 3)", "YOGYAKARTA (Tier 3)",
    "ADI SUMARMO (Tier 4)", "ALMATY (Tier 4)", "ALOR SETAR (Tier 4)", "BALIKPAPAN (Tier 4)", "BANDA ACEH (Tier 4)", "BANDUNG (Tier 4)", "BENGALURU (Tier 4)", "BERAU (Tier 4)", "BIJU PATNAIK (Tier 4)", "BURI RAM (Tier 4)", "BUSAN (Tier 4)", "CHANGSHA (Tier 4)", "CHONGQING (Tier 4)", "CHUMPHON (Tier 4)", "CLARK (Tier 4)", "COLOMBO (Tier 4)", "FUKUOKA (Tier 4)", "GUANGZHOU (Tier 4)", "HANEDA (Tier 4)", "HUAHIN (Tier 4)", "HYDERABAD (Tier 4)", "IPOH (Tier 4)", "JAIPUR (Tier 4)", "KANSAI (Tier 4)", "KOCHI (Tier 4)", "KOLKATA (Tier 4)", "KOZHIKODE (Tier 4)", "KUNMING (Tier 4)", "LABUAN (Tier 4)", "LABUAN BAJO (Tier 4)", "LAGUINDINGAN [CAGAYAN] (Tier 4)", "LAMPANG (Tier 4)", "LAMPUNG (Tier 4)", "LOEI (Tier 4)", "LUANG PRABANG (Tier 4)", "MELBOURNE (Tier 4)", "NARATHIWAT (Tier 4)", "NARITA (Tier 4)", "NEW CHITOSE (Tier 4)", "NEW DELHI (Tier 4)", "NHA TRANG (Tier 4)", "PADANG (Tier 4)", "PANGLAO (Tier 4)", "PEKANBARU (Tier 4)", "PONTIANAK (Tier 4)", "RANONG (Tier 4)", "ROXAS (Tier 4)", "SAKON NAKHON (Tier 4)", "SEMARANG (Tier 4)", "SHANGHAI (Tier 4)", "SHENZHEN (Tier 4)", "SILANGIT (Tier 4)", "TANJUNG KARANG (Tier 4)", "TARAKAN (Tier 4)", "TRANG (Tier 4)", "U-TAPAO (Tier 4)", "UJUNG PANDANG (Tier 4)", "VIENTIANE (Tier 4)", "XI'AN XIANYANG (Tier 4)"
];

interface CalculationResult {
    priority: string;
    priorityTitle: string;
    slaText: string;
    sevDesc: string;
    total: number;
    finalQ1: number;
    finalQ2: number;
    finalTier: number;
    affectedItems: string[];
}

export default function App() {
    const [selectedApps, setSelectedApps] = useState<string[]>([]);
    const [selectedLocs, setSelectedLocs] = useState<string[]>([]);
    const [appQ1, setAppQ1] = useState<number>(1);
    const [appQ2, setAppQ2] = useState<number>(1);
    const [locQ1, setLocQ1] = useState<number>(2);
    const [locQ2, setLocQ2] = useState<number>(2);
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const toggleApp = (app: string) => {
        setSelectedApps(prev => 
            prev.includes(app) ? prev.filter(a => a !== app) : [...prev, app]
        );
        setResult(null);
        setError(null);
    };

    const toggleLoc = (loc: string) => {
        setSelectedLocs(prev => 
            prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
        );
        setResult(null);
        setError(null);
    };

    const getTierScore = (items: string[], type: 'Application' | 'Location') => {
        if (items.length === 0) return 0;
        let highestTier = 4;
        
        items.forEach(item => {
            const match = item.match(/Tier (\d)/);
            if (match) {
                const tier = parseInt(match[1]);
                if (tier < highestTier) highestTier = tier; 
            }
        });

        if (type === 'Location') {
            return highestTier === 1 ? 5 : highestTier === 2 ? 4 : highestTier === 3 ? 3 : 2;
        } else {
            return highestTier === 1 ? 4 : highestTier === 2 ? 3 : highestTier === 3 ? 2 : 1;
        }
    };

    const calculate = () => {
        if (selectedApps.length === 0 && selectedLocs.length === 0) {
            setError("Please select at least one Application or Location to proceed.");
            return;
        }

        const currentAppQ1 = selectedApps.length > 0 ? appQ1 : 0;
        const currentAppQ2 = selectedApps.length > 0 ? appQ2 : 0;
        const appTierScore = getTierScore(selectedApps, 'Application');

        const currentLocQ1 = selectedLocs.length > 0 ? locQ1 : 0;
        const currentLocQ2 = selectedLocs.length > 0 ? locQ2 : 0;
        const locTierScore = getTierScore(selectedLocs, 'Location');

        const finalQ1 = Math.max(currentAppQ1, currentLocQ1);
        const finalQ2 = Math.max(currentAppQ2, currentLocQ2);
        const finalTier = Math.max(appTierScore, locTierScore);
        
        const total = finalQ1 + finalQ2 + finalTier;
        const hasFive = (currentAppQ1 === 5 || currentAppQ2 === 5 || currentLocQ1 === 5 || currentLocQ2 === 5 || finalTier === 5);
        
        const affectedItems = [...selectedApps, ...selectedLocs];

        let priorityTitle = "";
        let slaText = "";
        let sevDesc = "";
        let priorityClass = "";

        if (total >= 15 || hasFive) {
            priorityTitle = "P0 - CRITICAL";
            slaText = "SLA: 15-30 Minutes";
            priorityClass = "p0";
        } else if (total >= 10) {
            priorityTitle = "P1 - MAJOR";
            slaText = "SLA: 1-2 Hours";
            priorityClass = "p1";
        } else if (total >= 7) {
            priorityTitle = "P2 - HIGH";
            slaText = "SLA: 4-8 Hours";
            priorityClass = "p2";
        } else {
            priorityTitle = "P3 - LOW";
            slaText = "SLA: 24+ Hours";
            priorityClass = "p3";
        }

        if (priorityClass === "p0" || priorityClass === "p1" || hasFive) {
            sevDesc = "Sev 1 = Services impacting everyone who uses the service; e.g., Total Outage, OR received escalation from business.";
        } else if (priorityClass === "p2") {
            sevDesc = "Sev 2 = Services impacting a few groups; e.g., a few stations down, GoNow slow, network degraded.";
        } else if (priorityClass === "p3" && finalQ1 >= 3) {
            sevDesc = "Sev 3 = Services impacting a specific department; e.g., Scheduling team only.";
        } else {
            sevDesc = "Sev 4 = Services impacting a single user.";
        }

        setResult({
            priority: priorityClass,
            priorityTitle,
            slaText,
            sevDesc,
            total,
            finalQ1,
            finalQ2,
            finalTier,
            affectedItems
        });
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="container mx-auto bg-white rounded-[24px] shadow-xl overflow-hidden max-w-4xl">
                <div className="bg-[#E3242B] text-white p-8 text-center relative">
                    <div className="inline-block bg-white px-4 py-2 rounded-full mb-4 shadow-md">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg" 
                            alt="AirAsia Logo" 
                            className="h-8"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <h1 className="text-xl font-semibold tracking-wide m-0">IT Incident Calculator</h1>
                    <p className="text-sm opacity-90 mt-1">Severity & SLA Assessment Tool</p>
                </div>
                
                <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="flex-1 flex flex-col bg-white border border-[#F0F2F5] rounded-2xl p-4 shadow-sm">
                            <div className="font-semibold text-sm mb-4 pb-2 border-b border-[#F0F2F5]">Affected Applications</div>
                            <div className="h-64 overflow-y-auto pr-2 checkbox-list">
                                {APPLICATIONS.map(app => (
                                    <label key={app} className="flex items-center py-1.5 cursor-pointer hover:bg-gray-50 rounded px-1">
                                        <input 
                                            type="checkbox" 
                                            className="mr-3 w-4.5 h-4.5 accent-[#E3242B] cursor-pointer"
                                            checked={selectedApps.includes(app)}
                                            onChange={() => toggleApp(app)}
                                        />
                                        <span className="text-xs text-[#222222]">{app}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col bg-white border border-[#F0F2F5] rounded-2xl p-4 shadow-sm">
                            <div className="font-semibold text-sm mb-4 pb-2 border-b border-[#F0F2F5]">Affected Locations</div>
                            <div className="h-64 overflow-y-auto pr-2 checkbox-list">
                                {LOCATIONS.map(loc => (
                                    <label key={loc} className="flex items-center py-1.5 cursor-pointer hover:bg-gray-50 rounded px-1">
                                        <input 
                                            type="checkbox" 
                                            className="mr-3 w-4.5 h-4.5 accent-[#E3242B] cursor-pointer"
                                            checked={selectedLocs.includes(loc)}
                                            onChange={() => toggleLoc(loc)}
                                        />
                                        <span className="text-xs text-[#222222]">{loc}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {selectedApps.length > 0 && (
                        <div className="bg-white border border-[#F0F2F5] p-5 mb-6 rounded-2xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#E3242B]"></div>
                            <h3 className="font-semibold text-base mb-4 text-[#222222]">Application Impact Details</h3>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-xs text-[#757575]">Q1: Scope of Impact</label>
                                <select 
                                    className="w-full p-3.5 border border-[#E5E7EB] rounded-xl text-sm bg-[#F9FAFB] outline-none focus:border-[#E3242B] appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_fill=%22%23757575%22_viewBox=%220_0_16_16%22%3E%3Cpath_d=%22M7.247_11.14L2.451_5.658C1.885_5.013_2.345_4_3.204_4h9.592a1_1_0_0_1_.753_1.659l-4.796_5.48a1_1_0_0_1-1.506_0z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:calc(100%-15px)_center]"
                                    value={appQ1}
                                    onChange={(e) => setAppQ1(parseInt(e.target.value))}
                                >
                                    <option value="1">1 - Single user</option>
                                    <option value="2">2 - Single department</option>
                                    <option value="3">3 - Multiple departments</option>
                                    <option value="4">4 - Entire organization</option>
                                    <option value="5">5 - Total outage (Global)</option>
                                </select>
                            </div>
                            <div className="mb-0">
                                <label className="block mb-2 font-semibold text-xs text-[#757575]">Q2: Workaround Availability</label>
                                <select 
                                    className="w-full p-3.5 border border-[#E5E7EB] rounded-xl text-sm bg-[#F9FAFB] outline-none focus:border-[#E3242B] appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_fill=%22%23757575%22_viewBox=%220_0_16_16%22%3E%3Cpath_d=%22M7.247_11.14L2.451_5.658C1.885_5.013_2.345_4_3.204_4h9.592a1_1_0_0_1_.753_1.659l-4.796_5.48a1_1_0_0_1-1.506_0z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:calc(100%-15px)_center]"
                                    value={appQ2}
                                    onChange={(e) => setAppQ2(parseInt(e.target.value))}
                                >
                                    <option value="1">1 - Full workaround</option>
                                    <option value="2">2 - Partial workaround</option>
                                    <option value="3">3 - Temporary manual process</option>
                                    <option value="4">4 - Limited workaround</option>
                                    <option value="5">5 - No workaround</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {selectedLocs.length > 0 && (
                        <div className="bg-white border border-[#F0F2F5] p-5 mb-6 rounded-2xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#2e7d32]"></div>
                            <h3 className="font-semibold text-base mb-4 text-[#2e7d32]">Location Impact Details</h3>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-xs text-[#757575]">Q1: Station Impact</label>
                                <select 
                                    className="w-full p-3.5 border border-[#E5E7EB] rounded-xl text-sm bg-[#F9FAFB] outline-none focus:border-[#E3242B] appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_fill=%22%23757575%22_viewBox=%220_0_16_16%22%3E%3Cpath_d=%22M7.247_11.14L2.451_5.658C1.885_5.013_2.345_4_3.204_4h9.592a1_1_0_0_1_.753_1.659l-4.796_5.48a1_1_0_0_1-1.506_0z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:calc(100%-15px)_center]"
                                    value={locQ1}
                                    onChange={(e) => setLocQ1(parseInt(e.target.value))}
                                >
                                    <option value="2">2 - Only One Station/Location Impacted</option>
                                    <option value="3">3 - More than One Station/Location Impacted</option>
                                    <option value="4">4 - More than Five Stations/Locations Impacted</option>
                                    <option value="5">5 - All stations Impacted</option>
                                </select>
                            </div>
                            <div className="mb-0">
                                <label className="block mb-2 font-semibold text-xs text-[#757575]">Q2: Workaround Availability</label>
                                <select 
                                    className="w-full p-3.5 border border-[#E5E7EB] rounded-xl text-sm bg-[#F9FAFB] outline-none focus:border-[#E3242B] appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_fill=%22%23757575%22_viewBox=%220_0_16_16%22%3E%3Cpath_d=%22M7.247_11.14L2.451_5.658C1.885_5.013_2.345_4_3.204_4h9.592a1_1_0_0_1_.753_1.659l-4.796_5.48a1_1_0_0_1-1.506_0z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:calc(100%-15px)_center]"
                                    value={locQ2}
                                    onChange={(e) => setLocQ2(parseInt(e.target.value))}
                                >
                                    <option value="2">2 - Full Workaround available</option>
                                    <option value="3">3 - Limited Workaround available (Manual Process)</option>
                                    <option value="4">4 - Limited Workaround available</option>
                                    <option value="5">5 - No Workaround available</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <button 
                        onClick={calculate}
                        className="w-full py-4 bg-[#E3242B] text-white border-none rounded-full cursor-pointer font-semibold text-sm tracking-wide transition-all active:scale-[0.98] hover:bg-[#C81E25] shadow-lg shadow-red-500/30 mt-2"
                    >
                        Assess Severity
                    </button>

                    {error && (
                        <div className="flex items-center justify-center gap-2 text-[#E3242B] font-semibold text-xs text-center mt-4">
                            <AlertCircle size={14} />
                            {error}
                        </div>
                    )}

                    {result && (
                        <div className={`mt-8 p-6 rounded-2xl text-center border ${result.priority}`}>
                            <h2 className="m-0 mb-2 text-2xl font-bold">{result.priorityTitle}</h2>
                            <p className="font-semibold text-base my-1 text-[#222222]">{result.slaText}</p>
                            <p className="text-sm my-4 text-[#757575] leading-relaxed">{result.sevDesc}</p>
                            <div className="text-[10px] mt-4 text-[#9CA3AF] border-t border-dashed border-[#E5E7EB] pt-4">
                                <span>Breakdown: Impact ({result.finalQ1}) + Workaround ({result.finalQ2}) + Auto-Tier ({result.finalTier})</span><br />
                                <strong className="block mt-1">Calculated Score: {result.total}</strong>
                                <span className="inline-block mt-2 text-[9px] opacity-80">
                                    Affected: {result.affectedItems.join(", ")}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto mt-6 px-4 text-center">
                <p className="text-[10px] text-[#757575] flex items-center justify-center gap-1">
                    <Info size={10} />
                    Internal Tool for IT Operations. Based on AirAsia Severity Matrix.
                </p>
            </div>
        </div>
    );
}
