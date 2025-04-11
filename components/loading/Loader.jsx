export default function Loader() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#FF5F6D]  to-[#DD2476] animate-[gradient_15s_ease_infinite] flex flex-col items-center justify-center space-y-8">
      <div className="relative inline-block text-4xl font-bold text-transparent">
        <span className="text-white/20">Finding hotel results...</span>
        <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white to-cyan-300 bg-clip-text overflow-hidden animate-[textFill_2.5s_ease-in-out_infinite]">
          Finding hotel results...
        </span>
      </div>

      <div className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
        <svg
          className="w-24 h-24 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>

      <div className="flex space-x-4">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
}
