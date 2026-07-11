import { ArrowRight, FileText, ShieldCheck, Image as ImageIcon } from "lucide-react";

export default function Hero({ openQuoteModal }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-10 pb-20 lg:pt-16 lg:pb-28 font-sans border-b border-slate-200">

      {/* Decorative Blurs */}
      <div aria-hidden="true" className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute right-0 top-10 h-[600px] w-[600px] rounded-full bg-slate-300/40 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-slate-900/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Premium Packaging Solutions
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-7xl">
              Next-Gen
              <span className="block text-orange-500 my-1">Manufacturing</span>
              Machinery
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-slate-600 lg:text-xl">
              Engineered for speed. Built for precision. Discover Excelpack's elite lineup of high-performance vertical form-fill-seal lines and automated dosing systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* WIRED: Navigates to Catalog */}
              <a href="/#catalog" className="group flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-orange-600 hover:shadow-lg active:scale-95">
                Explore Machinery
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* WIRED: Navigates to Footer/Contact */}
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-10 border-t border-slate-200/60 pt-8">
              <div>
                <p className="text-3xl font-black text-slate-900">20+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Machine Configurations</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">24/7</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Digital Support Portal</p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-[40px] bg-white/60 p-6 shadow-xl backdrop-blur-md border border-white/80 md:p-8">
              <div className="aspect-[4/3] rounded-[24px] bg-slate-200/50 border-2 border-dashed border-slate-300 overflow-hidden flex flex-col items-center justify-center text-slate-400 group transition-colors hover:border-orange-400 hover:text-orange-500">
                <ImageIcon className="h-12 w-12 mb-3 opacity-50" />
                <span className="font-bold text-sm tracking-widest uppercase">Image Placeholder</span>
                <p className="text-xs mt-2 opacity-70 font-medium">4:3 Ratio Recommended</p>
              </div>

              <div className="absolute -left-4 top-8 rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-slate-100 md:-left-10 md:top-12 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-full"><FileText className="h-5 w-5 text-orange-600" /></div>
                  <div className="pr-2">
                    <p className="font-black text-slate-900 leading-tight">Auto Quotations</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Instant Generation</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-6 rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur-sm border border-slate-100 md:-right-8 md:bottom-10 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 p-2.5 rounded-full"><ShieldCheck className="h-5 w-5 text-white" /></div>
                  <div className="pr-2">
                    <p className="font-black text-slate-900 leading-tight">ISO 9001</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Certified Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}