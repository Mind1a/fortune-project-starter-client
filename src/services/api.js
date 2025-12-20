// src/services/api.js
const API_BASE_URL = "http://localhost:4000/api/fortune";

export const fortuneAPI = {
  // Get all fortunes
  getAllFortunes: async () => {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) throw new Error("Failed to fetch fortunes");
    return response.json();
  },

  // Get all templates
  getTemplates: async () => {
    const response = await fetch(`${API_BASE_URL}/templates`);
    if (!response.ok) throw new Error("Failed to fetch templates");
    return response.json();
  },

  // Get random fortune
  getRandomFortune: async () => {
    const response = await fetch(`${API_BASE_URL}/random`);
    if (!response.ok) throw new Error("Failed to fetch random fortune");
    return response.json();
  },

  // Save fortune with name
  saveFortune: async (name, text) => {
    const response = await fetch(`${API_BASE_URL}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, text }),
    });
    if (!response.ok) throw new Error("Failed to save fortune");
    return response.json();
  },

  // Create new fortune template
  createTemplate: async (text) => {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) throw new Error("Failed to create template");
    return response.json();
  },

  // Delete fortune by ID
  deleteFortune: async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete fortune");
    return response.json();
  },
};
