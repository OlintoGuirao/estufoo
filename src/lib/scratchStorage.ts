const PREFIX = 'estufoo-scratch-q-'

export function loadScratch(questionId: string | number): string | null {
  try {
    return localStorage.getItem(`${PREFIX}${questionId}`)
  } catch {
    return null
  }
}

export function saveScratch(questionId: string | number, dataUrl: string): void {
  try {
    localStorage.setItem(`${PREFIX}${questionId}`, dataUrl)
  } catch {
    // Quota or private mode — ignore
  }
}

export function clearScratch(questionId: string | number): void {
  try {
    localStorage.removeItem(`${PREFIX}${questionId}`)
  } catch {
    // ignore
  }
}
