import { useState } from 'react'

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6">
        {/* Square */}
        <div className="relative w-64 h-64 rounded-2xl border border-slate-300 bg-white shadow-sm overflow-hidden">
          {/* Rainbow appears when show === true */}
          {show && (
            <div className="absolute inset-4 rainbow origin-bottom flex flex-col justify-between">
              {[
                'from-red-500 to-orange-500',
                'from-orange-500 to-yellow-400',
                'from-yellow-400 to-green-500',
                'from-green-500 to-teal-500',
                'from-teal-500 to-blue-500',
                'from-blue-500 to-indigo-500',
                'from-indigo-500 to-fuchsia-500'
              ].map((g, i) => (
                <div key={i} className={`h-2 rounded-full bg-linear-to-r ${g}`}></div>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => setShow(s => !s)}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-[.98] transition"
        >
          press me
        </button>
      </div>
    </div>
  )
}