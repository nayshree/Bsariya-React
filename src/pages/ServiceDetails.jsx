import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  {
    num: "01",
    label: "Accounting",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: <><span>Accounting</span> &amp; Related Advisory</>,
    content: [
      "Accounting is an important mechanism for operating every company effectively and efficiently. We provide back office outsourcing services to various clients across the world for efficient accounting and maintenance of records.",
      "Our outsourcing service consists of all four stages of accounting processes starting from recording of financial transactions, classifying the transactions, summarizing the accounting data into useful reports and interpreting the financial data.",
    ],
  },
  {
    num: "02",
    label: "Audit",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: <>Audit &amp; <span>Assurance</span></>,
    content: [
      "We are three decades old well known audit firm in India. We provide attestation function of statutory audits under Companies act, Tax Audit as per Income Tax Act, GST Audit, Internal audit, Management audits and various other Assurance services to our clients in India.",
      "Statutory Audits of financial statements under Indian GAAP, US GAAP and IFRS.",
      "Tax Audits, Management and Operational Audits.",
      "Concurrent Audits, Internal Audits including risk-based reviews, Inspection Audits.",
    ],
  },
  {
    num: "03",
    label: "Direct Tax",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: <>Direct <span>Tax</span></>,
    content: [
      "Obtaining Tax registrations (viz. PAN, TAN, PF, PT) in India.",
      "Assistance in Statutory compliances with various regulatory authorities including filing of various returns.",
      "Providing tailored solution for inter-company transactions. Assisting in preparing TP Study Report and filing form 3CEB.",
      "Analysis of Double Taxation Avoidance Agreement and related provisions.",
    ],
  },
  {
    num: "04",
    label: "CFO",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <path d="M13 8h4M13 12h4M13 16h4" />
      </svg>
    ),
    title: <>CFO <span>Management</span> Services</>,
    content: [
      "Complete establishment with all legal compliances and all level recruitments as per client needs.",
      "Finance arrangement and management as Virtual CFO Services. Authorized signatories facilities can be provided to facilitate client business in India.",
      "We assist new foreign small and medium size corporates in planning and organising their finance and other resources efficiently.",
      "We manage and deal with Banks and Financial Institutions in India on behalf of clients.",
    ],
  },
  {
    num: "05",
    label: "Indirect Tax",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: <>Indirect <span>Tax</span></>,
    content: [
      "Obtaining Tax registrations with the indirect-tax authorities.",
      "Advisory services for applicability & impact of indirect taxes on business operations.",
      "Structuring of business transactions to maximize tax efficiency.",
      "Conducting Audits (GST | VAT | CST) as prescribed under the law.",
      "Litigation services involving strategizing, filing of appeals and representation.",
    ],
  },
  {
    num: "06",
    label: "International",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: <>International &mdash; <span>Accounting</span> &amp; MIS</>,
    content: [
      "Our international services include various services such as NRI Advisory Services, International Accounting and MIS preparation services.",
      "Accounting & bookkeeping outsourcing of US, UK, Canada, Australia, Germany clients.",
      "NRI Fund Transfers - planning and repatriation of NRI fund out of India.",
      "15 CB Certificates for tax compliances for remittances out of India.",
    ],
  },
];

export default function ServiceDetail() {
  return (
    <div>
      <Header />

      {/* Page Banner */}
      <div className="page_banner">
        <div className="container">
          <div className="page_banner_content">
            <h1>SERVICES DETAIL</h1>
            <ul className="page_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>/</li>
              <li><Link to="/services">Services</Link></li>
              <li>/</li>
              <li className="active">Detail</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="svc_detail_section">
        <div className="container">
          <div className="svc_blocks">
            {services.map((s, i) => (
              <div className="svc_block" key={i}>

                {/* Left panel */}
                <div className="svc_block_panel">
                  <span className="svc_block_num">{s.num}</span>
                  <div className="svc_block_icon">{s.icon}</div>
                  <span className="svc_block_label">{s.label}</span>
                </div>

                {/* Right content */}
                <div className="svc_block_content">
                  <h2 className="svc_block_title">{s.title}</h2>
                  <div className="svc_block_bar" />
                  <ul className="svc_block_list">
                    {s.content.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
