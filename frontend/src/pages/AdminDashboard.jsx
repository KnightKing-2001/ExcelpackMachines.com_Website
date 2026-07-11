import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const token = localStorage.getItem('adminToken');
      
      // If no token exists, redirect to login immediately
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/quotes', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          // Token is invalid or expired
          handleLogout();
          return;
        }

        const result = await response.json();
        if (result.success) {
          setQuotes(result.data);
        }
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Logout Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Excelpack Lead Command Center</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        
        {loading ? (
          <p className="text-slate-500">Loading leads...</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Client Info</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Machine Interest</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {quotes.map((quote) => (
                  <tr key={quote._id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-slate-900">{quote.name}</div>
                      <div className="text-sm text-slate-500">{quote.company}</div>
                      <div className="text-sm text-slate-500">{quote.phone}</div>
                      <div className="text-sm text-blue-600">{quote.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                        {quote.machineInterest}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        quote.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {quote.status}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {quotes.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                      No machinery quotes received yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
