const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h4 className="text-xl font-bold mb-4">ExcelPack Machines</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Premium industrial manufacturing solutions. Automated form-fill-seal lines and packaging machinery.
            </p>
            <p className="text-orange-500 font-bold text-sm">Noida, Uttar Pradesh</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/#catalog" className="hover:text-orange-500 transition-colors">Machinery Catalog</a></li>
              <li><a href="/#spare-parts" className="hover:text-orange-500 transition-colors">Spare Parts Catalog</a></li>
              <li><a href="mailto:info@excelpackagingindia.in" className="hover:text-orange-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>info@excelpackagingindia.in</li>
              <li>Ph: +91 9818392235</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer