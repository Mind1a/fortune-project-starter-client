// src/pages/Feedback.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {};

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <button
          onClick={() => navigate("/")}
          className="text-white mb-6 flex items-center gap-2 hover:underline"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💬</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Share Your Feedback
            </h1>
            <p className="text-gray-600">
              We'd love to hear your thoughts about Fortune Cookie!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-5xl transition-all transform hover:scale-110 ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-center text-gray-600 mt-2">
                  You rated: {rating} star{rating > 1 ? "s" : ""}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>

          <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">
              📝 Why Your Feedback Matters:
            </h3>
            <ul className="text-sm text-indigo-800 space-y-1">
              <li>• Helps us improve the app</li>
              <li>• Guides future features and updates</li>
              <li>• Makes the experience better for everyone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
