import { useState, useEffect } from 'react'
import { Search, ChevronRight, Settings2, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
  const navigate = useNavigate();
  const [machines, setMachines] = useState([])
  const [loading, setLoading] = useState(true)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    fetch('http://localhost:5000/api/machines')
      .then(res => res.json())
      .then(data => {
        setMachines(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching catalog:", err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm, selectedCategory]);

  const safeMachines = Array.isArray(machines) ? machines : [];

  const filteredMachines = safeMachines.filter(machine => {
    const safeModelName = machine?.modelName || '';
    const matchesSearch = safeModelName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || machine?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedMachines = filteredMachines.slice(0, visibleCount);
  const categories = ['All', ...new Set(safeMachines.map(m => m?.category).filter(Boolean))];

  return (
    <main id="catalog" className="bg-slate-50 py-24 font-sans relative">
      <div className="absolute top-40 left-0 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-slate-200/50 px-4 py-1.5 rounded-full mb-6 border border-slate-300/50">
              <Settings2 className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Equipment Registry</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              The Production <span className="text-orange-500">Fleet</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-md text-base md:text-right">
            High-output packaging systems designed for flawless continuous operation cycles.
          </p>
        </div>

        <div className="mb-12 flex flex-col lg:flex-row gap-6 justify-between items-center bg-white p-4 rounded-[32px] shadow-sm border border-slate-100">
          <div className="relative w-full lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Search className="h-5 w-5 text-slate-400" /></div>
            <input 
              type="text" 
              placeholder="Search by model name..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 text-slate-800 font-medium transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-auto flex flex-wrap gap-2 justify-start lg:justify-end overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {categories.map(category => (
              <button 
                key={category} onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] active:scale-95 whitespace-nowrap ${
                  selectedCategory === category ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
           <div className="bg-white rounded-[32px] border border-slate-200 p-20 flex flex-col items-center justify-center text-center shadow-sm">
             <div className="w-12 h-12 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin mb-6"></div>
             <p className="text-xl font-bold text-slate-800">Synchronizing Database...</p>
           </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedMachines.length > 0 ? displayedMachines.map((machine) => {
                
                // --- THE FIX: SMART DATA EXTRACTION ---
                // We look inside the new 'performance' bucket to find the data.
                const speed = machine.specifications?.performance?.productionSpeed 
                           || machine.specifications?.performance?.capacity 
                           || machine.specifications?.performance?.outputCapacity 
                           || machine.specifications?.performance?.operation 
                           || "N/A";
                
                const application = machine.specifications?.performance?.pouchType 
                                 || machine.specifications?.performance?.applications 
                                 || "Industrial Standard";
                // --------------------------------------

                return (
                  <div key={machine._id} className="bg-white rounded-[32px] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] border border-slate-100 flex flex-col group">
                    <div className="bg-slate-100 rounded-[24px] aspect-[4/3] relative overflow-hidden mb-6 flex items-center justify-center">
                      <div className="text-slate-400 flex flex-col items-center opacity-50 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)]">
                         <Settings2 className="w-12 h-12 mb-2" />
                         <span className="font-bold text-[10px] tracking-widest uppercase">Machine Image</span>
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">{machine.category}</span>
                      </div>
                    </div>

                    <div className="px-5 pb-5 flex flex-col flex-grow">
                      <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">{machine.modelName}</h3>
                      <div className="space-y-4 text-sm flex-grow mb-8">
                        
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <span className="font-bold text-slate-500">Output / Speed</span> 
                          <span className="text-right font-black text-slate-900 bg-slate-50 px-3 py-1 rounded-lg line-clamp-1">{speed}</span>
                        </div>
                        
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <span className="font-bold text-slate-500">Application</span> 
                          <span className="text-right font-semibold text-slate-700 text-xs line-clamp-1">{application}</span>
                        </div>

                      </div>
                      
                      <button 
                        onClick={() => navigate(`/machine/${machine._id}`)}
                        className="w-full flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 hover:bg-slate-900 hover:border-slate-900 text-slate-700 hover:text-white font-bold py-4 rounded-full transition-all duration-300 active:scale-95 ease-[cubic-bezier(0.2,0,0,1)]"
                      >
                        View Specifications
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              }) : (
                 <div className="col-span-full bg-white rounded-[32px] border border-slate-200 p-16 text-center text-slate-500 shadow-sm">
                    <p className="text-xl font-bold text-slate-800 mb-2">No Equipment Found</p>
                 </div>
              )}
            </div>

            {filteredMachines.length > visibleCount && (
              <div className="mt-16 flex justify-center">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                >
                  Load More Machines
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default Catalog