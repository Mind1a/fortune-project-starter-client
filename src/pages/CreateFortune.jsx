import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fortuneAPI } from "../services/api";

export default function CreateFortune() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <button
          onClick={() => navigate("/")}
          className="text-white mb-6 flex items-center gap-2 hover:underline"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Create Fortune Template
            </h1>
            <p className="text-gray-600">Add a new fortune to the collection</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Fortune Text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your fortune message... (e.g., 'A journey of a thousand miles begins with a single step')"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                {text.length} characters
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Fortune Template"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/templates")}
                className="px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                View Templates
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">💡 Tips:</h3>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Keep it positive and inspiring</li>
              <li>• Make it universal and relatable</li>
              <li>• Add emojis for extra charm ✨</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
