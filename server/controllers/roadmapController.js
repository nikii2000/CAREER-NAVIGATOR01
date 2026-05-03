const User = require('../models/User');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function callGroq(prompt) {
  const response = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    max_tokens: 1000,
    messages: [{ role: 'user', content: prompt }],
  });
  const text = response.choices[0].message.content.trim();
  return text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim();
}

exports.generateRoadmap = async (req, res) => {
  try {
    const { currentSkills, targetRole } = req.body;

    const prompt = `You are a career advisor. Return ONLY a raw JSON object with no markdown, no backticks, no explanation.
The JSON must have this exact shape:
{
  "skillGaps": ["string"],
  "roadmap": [{ "week": number, "topic": "string", "resource": "string", "provider": "string" }],
  "interviewQuestions": ["string", "string", "string"],
  "estimatedWeeks": number
}
The user has these skills: ${JSON.stringify(currentSkills)}.
Their target role is: ${targetRole}.
Do NOT include any URLs or hyperlinks anywhere. Only use provider names like Coursera, freeCodeCamp, Udemy.`;

    const raw = await callGroq(prompt);
    const roadmap = JSON.parse(raw);

    await User.findByIdAndUpdate(req.userId, { savedRoadmap: roadmap });

    res.status(200).json(roadmap);
  } catch (err) {
    console.error('generateRoadmap error:', err.message);
    res.status(500).json({ error: true, message: 'Failed to generate roadmap' });
  }
};

exports.gradeAnswer = async (req, res) => {
  try {
    const { question, answer, targetRole } = req.body;

    const prompt = `You are an interview coach. Return ONLY a raw JSON object with no markdown, no backticks.
Shape: { "score": number (out of 10), "feedback": "2-3 lines of feedback" }
Question: ${question}
Candidate answer: ${answer}
Target role: ${targetRole}`;

    const raw = await callGroq(prompt);
    const result = JSON.parse(raw);

    res.status(200).json(result);
  } catch (err) {
    console.error('gradeAnswer error:', err.message);
    res.status(500).json({ error: true, message: 'Failed to grade answer' });
  }
};

exports.getMyRoadmap = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: true, message: 'User not found' });
    res.status(200).json(user.savedRoadmap || null);
  } catch (err) {
    res.status(500).json({ error: true, message: 'Failed to fetch roadmap' });
  }
};