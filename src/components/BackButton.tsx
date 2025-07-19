'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} 
            className="italic px-2 py-2 mb-4 hover:underline rounded"
    >
      ← back
    </button>
  )
}
