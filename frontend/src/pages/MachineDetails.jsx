import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Settings, Info, CheckCircle2, Gauge, Wrench, Zap, Cpu } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import { Helmet } from 'react-helmet-async'; // Imported correctly

const MachineDetails = () => {
  const { id } = useParams();
  const [machine, setMachine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://excelpackmachines-com-website.onrender.com/api/machines/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Machine not found');
        return res.json();
      })
      .then((data) => {
        setMachine(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching machine details:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const formatSpecKey = (key) => {
    const spaced = key.replace(/([A-Z])/g, ' $1');
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  const categoryConfig = {
    performance: { icon: Gauge, title: 'Performance Capabilities', color: 'text-blue-500', bg: 'bg-blue-50' },
    mechanical: { icon: Wrench, title: 'Mechanical Build', color: 'text-slate-600', bg: 'bg-slate-100' },
    utilities: { icon: Zap, title: 'Utility Requirements', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    electronics: { icon: Cpu, title: 'Control & Electronics', color: 'text-orange-500', bg: 'bg-orange-50' }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-slate-50">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-black text-slate-900">Retrieving Specifications...</h2>
      </div>
    );
  }

  if (error || !machine) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-slate-50 text-center px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Machine Not Found</h2>
        <p className="text-slate-500 mb-8">The requested equipment configuration could not be located in the database.</p>
        <Link to="/#catalog" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-slate-800 transition-colors">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const specifications = machine.specifications || {};
  const features = machine.features || [];

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen font-sans">
      {/* SEO META TAGS ADDED HERE */}
      <Helmet>
        <title>{machine.modelName} | Packaging Machinery | Excelpack Machines</title>
        <meta name="description" content={`High-performance ${machine.modelName} for ${machine.category}. Expertly manufactured by Excelpack Machines.`} />
        <link rel="canonical" href={`https://excelpackmachine.com/machine/${machine._id}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#catalog" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Link>

        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-slate-100 rounded-[32px] aspect-square flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 relative overflow-hidden group">
                <Settings className="w-16 h-16 mb-4 opacity-50 group-hover:rotate-180 transition-transform duration-700" />
                <p className="font-bold tracking-widest uppercase text-sm">Machine Visualization</p>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">{machine.category}</span>
                </div>
              </div>

              {features.length > 0 && (
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6">Key Engineering Features</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-1.5 rounded-full mb-6 border border-orange-500/20 w-fit">
                <Info className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Technical Overview</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {machine.modelName}
              </h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {machine.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {Object.keys(specifications).length > 0 ? (
                  Object.entries(specifications).map(([category, specs]) => {
                    const Config = categoryConfig[category] || { icon: Settings, title: category, color: 'text-slate-500', bg: 'bg-slate-100' };
                    const Icon = Config.icon;

                    return (
                      <div key={category} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                          <div className={`p-2.5 rounded-xl ${Config.bg}`}>
                            <Icon className={`w-5 h-5 ${Config.color}`} />
                          </div>
                          <h3 className="font-bold text-slate-900 tracking-tight">{Config.title}</h3>
                        </div>
                        <div className="space-y-4">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-1">
                              <span className="font-bold text-slate-400 text-xs tracking-wider uppercase">{formatSpecKey(key)}</span>
                              <span className="font-semibold text-slate-800 text-sm">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-slate-400 italic col-span-2">No technical specifications available.</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  className="flex-1 bg-slate-900 text-white py-4 px-6 rounded-full font-bold shadow-md hover:bg-slate-800 active:scale-95 transition-all duration-200"
                >
                  Request Custom Quote
                </button>
                <a
                  href="/brochures/excelpack-catalog.pdf"
                  download="Excelpack-Machine-Specs.pdf"
                  className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-colors inline-block text-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        machineName={machine?.modelName || "Excelpack Machine"}
      />
    </div>
  );
};
export default MachineDetails;