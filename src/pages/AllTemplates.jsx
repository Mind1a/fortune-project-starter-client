import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fortuneAPI } from "../services/api";

export default function AllTemplates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-white flex items-center gap-2 hover:underline"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate("/create")}
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            + Create New
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Fortune Templates
            </h1>
            <p className="text-gray-600">
              All available fortune messages in the collection
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin text-6xl mb-4">🔮</div>
              <p className="text-gray-600">Loading templates...</p>
            </div>
          ) : templates.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-600 mb-4">No templates found</p>
              <button
                onClick={() => navigate("/create")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Create First Template
              </button>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template, index) => (
                <div
                  key={template._id}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      #{index + 1}
                    </span>
                  </div>
                  <p className="text-gray-800 italic leading-relaxed">
                    "{template.text}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <p className="text-xs text-gray-500">
                      Created:{" "}
                      {new Date(template.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Total Templates:{" "}
              <span className="font-bold text-purple-600">
                {templates.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
