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
  const [language, setLanguageState] = useState('ja')

  useEffect(() => {
    // クライアントサイドで言語を取得
    setLanguageState(getStoredLanguage())
  }, [])

  const setLanguage = (lang) => {
    setLanguageState(lang)
    setStoredLanguage(lang)
  }

  return [language, setLanguage]
}