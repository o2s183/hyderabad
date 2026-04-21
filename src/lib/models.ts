import mongoose from "mongoose";

// --- USER SCHEMA ---
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional if using OAuth
  profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }]
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

// --- PROFILE SCHEMA ---
const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  dietType: { type: String, enum: ["Veg", "Non-veg", "Vegan", "Keto", "Paleo"], default: "Veg" },
  goal: { type: String, enum: ["Weight loss", "Muscle gain", "Maintenance", "General health"], default: "General health" },
  age: { type: Number },
  weight: { type: Number }, // in kg
  height: { type: Number } // in cm
}, { timestamps: true });

export const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

// --- DAILY LOG SCHEMA ---
const DailyLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  date: { type: Date, default: Date.now },
  meals: [{
    type: { type: String, enum: ["Breakfast", "Lunch", "Dinner", "Snack"] },
    description: String,
    calories: Number
  }],
  sleep: { type: Number }, // hours
  mood: { type: String, enum: ["Happy", "Normal", "Stressed", "Tired"] },
  exercise: { type: Boolean, default: false }
}, { timestamps: true });

export const DailyLog = mongoose.models.DailyLog || mongoose.model("DailyLog", DailyLogSchema);

// --- AI REPORT SCHEMA ---
const AIReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  date: { type: Date, default: Date.now },
  score: { type: Number },
  suggestions: [{ type: String }],
  mistakes: [{ type: String }],
  predictedCravingTime: { type: String } // e.g., "15:00"
}, { timestamps: true });

export const AIReport = mongoose.models.AIReport || mongoose.model("AIReport", AIReportSchema);
