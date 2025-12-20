// src/pages/FeedbackList.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchFeedbacks = async () => {};

  const handleDelete = async (id) => {};

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-4">
      <div className="max-w-5xl mx-auto pt-8">
        <button
          onClick={() => navigate("/")}
          className="text-white mb-6 flex items-center gap-2 hover:underline"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📢</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              User Feedback
            </h1>
            <p className="text-gray-600">
              Read what people are saying about Fortune Cookie
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin text-6xl mb-4">🔮</div>
              <p className="text-gray-600">Loading feedbacks...</p>
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-600 mb-4">No feedback yet</p>
              <button
                onClick={() => navigate("/feedback")}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Leave Feedback
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {feedbacks.map((fb) => (
                <div
                  key={fb._id}
                  className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-xl border-2 border-indigo-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {(fb.name || "?").charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {fb.name || "Anonymous"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(fb.createdAt).toLocaleDateString()} at{" "}
                            {""}
                            {new Date(fb.createdAt).toLocaleTimeString()}
                          </p>
                          {fb.email && (
                            <p className="text-xs text-gray-500">{fb.email}</p>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-800 leading-relaxed mb-3">
                        {fb.message}
                      </p>

                      {fb.rating ? (
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-xl ${
                                star <= fb.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ⭐
                            </span>
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {fb.rating}/5
                          </span>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No rating given</p>
                      )}
                    </div>

                    <button
                      onClick={() => handleDelete(fb._id)}
                      className="text-red-500 hover:text-red-700 font-semibold px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && feedbacks.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Total Feedbacks:{" "}
                <span className="font-bold text-indigo-600">
                  {feedbacks.length}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
