// 言語設定をlocalStorageで管理するユーティリティ
import { useState, useEffect } from 'react'

export const getStoredLanguage = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('falcoya-language')
    if (stored === 'en' || stored === 'ja') {
      return stored
    }
    // ブラウザの言語設定から自動判定
    const browserLang = navigator.language.toLowerCase()
    return browserLang.startsWith('ja') ? 'ja' : 'en'
  }
  return 'ja' // サーバーサイドではデフォルトで日本語
}

export const setStoredLanguage = (lang) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('falcoya-language', lang)
  }
}

export const useLanguage = () => {
  // 初期値をクライアントサイドで取得するために関数を使用
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return getStoredLanguage()
    }
    return 'ja'
  })

  useEffect(() => {
    // クライアントサイドで再度確認（SSR対応）
    const storedLang = getStoredLanguage()
    if (storedLang !== language) {
      setLanguageState(storedLang)
    }
  }, [])

  const setLanguage = (lang) => {
    setLanguageState(lang)
    setStoredLanguage(lang)
  }

  return [language, setLanguage]
}