import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function ReportViewer() {
  const router = useRouter()
  const { reportId } = router.query
  const [reportData, setReportData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!reportId) return

    const loadReport = async () => {
      try {
        setLoading(true)
        // In a real implementation, you would fetch the report data from the API
        // For now, we'll show a static report for the specific reportId
        if (reportId === 'e2e-complete-results-17340066428') {
          // Simulate loading the actual HTML report
          setReportData({
            id: reportId,
            timestamp: '2025-08-30T05:45:03Z',
            htmlPath: '/reports/e2e-complete-results-17340066428/index.html'
          })
        } else {
          setError('Report not found')
        }
      } catch (err) {
        setError('Failed to load report')
      } finally {
        setLoading(false)
      }
    }

    loadReport()
  }, [reportId])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>レポートを読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <h1>エラー</h1>
        <p>{error}</p>
        <Link href="/quality">
          <a className="back-link">品質ページに戻る</a>
        </Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>E2E Test Report - {reportId} - FALCOYA</title>
        <meta name="description" content="Detailed E2E test report for falco-plugin-nginx" />
      </Head>

      <div className="report-viewer">
        <div className="report-header">
          <Link href="/quality">
            <a className="back-link">← 品質ページに戻る</a>
          </Link>
          <h1>📋 E2E Test Report</h1>
          <p className="report-id">Report ID: {reportId}</p>
        </div>

        <div className="report-iframe-container">
          <iframe 
            src={reportData.htmlPath}
            width="100%" 
            height="100%"
            frameBorder="0"
            title={`E2E Test Report ${reportId}`}
          />
        </div>
      </div>

      <style jsx>{`
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .back-link {
          color: #3498db;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .report-viewer {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .report-header {
          background: white;
          padding: 20px;
          border-bottom: 1px solid #dee2e6;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .report-header h1 {
          margin: 10px 0;
          color: #2c3e50;
          font-size: 1.8rem;
        }

        .report-id {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .report-iframe-container {
          flex: 1;
          background: #f8f9fa;
        }

        .report-iframe-container iframe {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .report-header {
            padding: 15px;
          }

          .report-header h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}