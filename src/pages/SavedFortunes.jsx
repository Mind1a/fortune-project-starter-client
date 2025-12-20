import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SavedFortunes() {
  const [fortunes, setFortunes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchFortunes = async () => {};

  const handleDelete = async (id, name) => {};

  // Filter fortunes based on search term
  const filteredFortunes = fortunes.filter(
    (fortune) =>
      fortune.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fortune.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        <button
          onClick={() => navigate("/")}
          className="text-white mb-6 flex items-center gap-2 hover:underline"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💾</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Saved Fortunes
            </h1>
            <p className="text-gray-600">
              All fortunes saved by users with their names
            </p>
          </div>

          {!loading && fortunes.length > 0 && (
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by name or fortune text..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin text-6xl mb-4">🔮</div>
              <p className="text-gray-600">Loading saved fortunes...</p>
            </div>
          ) : fortunes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-600 mb-4">No saved fortunes yet</p>
              <button
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Generate Your First Fortune
              </button>
            </div>
          ) : filteredFortunes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600">No fortunes match your search</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFortunes.map((fortune) => (
                <div
                  key={fortune._id}
                  className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-2 border-teal-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {fortune.name ? fortune.name[0].toUpperCase() : "?"}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {fortune.name || "Anonymous"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(fortune.createdAt).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(fortune.createdAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-800 italic pl-13">
                        "{fortune.text}"
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(fortune._id, fortune.name)}
                      className="text-red-500 hover:text-red-700 font-semibold px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && fortunes.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Total Saved:{" "}
                <span className="font-bold text-teal-600">
                  {fortunes.length}
                </span>
                {searchTerm && filteredFortunes.length !== fortunes.length && (
                  <span className="ml-2">
                    (Showing: {filteredFortunes.length})
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
