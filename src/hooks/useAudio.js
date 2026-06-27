import { useRef, useState, useEffect, useCallback } from 'react'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase.js'
import { sanitizeIdentifier } from '../../ipaMap.js'

export function useAudio() {
  const ctxRef = useRef(null)
  const cacheRef = useRef(new Map())
  const [playing, setPlaying] = useState(null) // { lang, id, type }
  const [error, setError] = useState(null)

  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    ctxRef.current = ctx
    return () => ctx.close()
  }, [])

  const fetchBuffer = useCallback(async (storagePath) => {
    if (cacheRef.current.has(storagePath)) return cacheRef.current.get(storagePath)
    try {
      const url = await getDownloadURL(ref(storage, storagePath))
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = await ctxRef.current.decodeAudioData(await res.arrayBuffer())
      cacheRef.current.set(storagePath, buf)
      return buf
    } catch {
      setError('Audio not found')
      setTimeout(() => setError(null), 2000)
      return null
    }
  }, [])

  const play = useCallback(async (lang, type, id, voice = 'female') => {
    const ctx = ctxRef.current
    if (!ctx) return
    if (ctx.state === 'suspended') await ctx.resume()
    const safe = sanitizeIdentifier(id)
    const path = `phoneme-audio/${lang}-${type}-${safe}-${voice}.mp3`
    setPlaying({ lang, id, type })
    const buffer = await fetchBuffer(path)
    if (!buffer) { setPlaying(null); return }
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.connect(ctx.destination)
    src.start(0)
    src.onended = () => setPlaying(null)
  }, [fetchBuffer])

  const playSequence = useCallback(async (lang, ipas, voice = 'female') => {
    const ctx = ctxRef.current
    if (!ctx) return
    if (ctx.state === 'suspended') await ctx.resume()
    for (const ipa of ipas) {
      const safe = sanitizeIdentifier(ipa)
      const path = `phoneme-audio/${lang}-phoneme-${safe}-${voice}.mp3`
      setPlaying({ lang, id: ipa, type: 'phoneme' })
      const buffer = await fetchBuffer(path)
      if (!buffer) continue
      await new Promise(resolve => {
        const src = ctx.createBufferSource()
        src.buffer = buffer
        src.connect(ctx.destination)
        src.start(0)
        src.onended = resolve
      })
      await new Promise(r => setTimeout(r, 350))
    }
    setPlaying(null)
  }, [fetchBuffer])

  return { play, playSequence, playing, error }
}
