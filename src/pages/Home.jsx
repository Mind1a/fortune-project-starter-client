// src/pages/Home.jsx
import { useState } from "react";
import toast from "react-hot-toast";
import { fortuneAPI } from "../services/api";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            🔮 Fortune Cookie
          </h1>
          <p className="text-white text-lg opacity-90">
            Discover your destiny with a click
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          {!fortune ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🥠</div>
              <p className="text-gray-600 text-lg mb-8">
                Click the button below to reveal your fortune
              </p>
              <button
                onClick={generateFortune}
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Generating..." : "Generate Fortune"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-2xl text-gray-800 font-medium italic leading-relaxed">
                  "{fortune.text}"
                </p>
              </div>

              <div className="border-t pt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Save this fortune with your name:
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={saveFortune}
                    disabled={loading}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>

              <button
                onClick={generateFortune}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Generating..." : "Generate Another Fortune"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
