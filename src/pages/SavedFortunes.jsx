import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fortuneAPI } from "../services/api";

export default function SavedFortunes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 p-4 pt-20">
      <div className="max-w-6xl mx-auto">
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
          ) : (
            <div className="space-y-4">
              {fortunes.map((fortune) => (
                <div
                  key={fortune._id}
                  className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-2 border-teal-200 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate(`/fortune/${fortune._id}`)}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(fortune._id, fortune.name);
                      }}
                      className="text-red-500 hover:text-red-700 font-semibold px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {fortunes.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Total Saved:{" "}
                <span className="font-bold text-teal-600">
                  {fortunes.length}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
