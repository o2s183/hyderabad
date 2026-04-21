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

// --- RECIPE SCHEMA ---
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String }],
  steps: [{ type: String }],
  calories: { type: Number },
  macros: {
    protein: { type: Number },
    carbs: { type: Number },
    fats: { type: Number }
  },
  image: { type: String },
  goalType: { type: String, enum: ["Weight loss", "Muscle gain", "Maintenance", "General"] }
}, { timestamps: true });

export const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);

// --- FOOD ITEM SCHEMA ---
const FoodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  macros: {
    protein: { type: Number },
    carbs: { type: Number },
    fats: { type: Number }
  }
}, { timestamps: true });

export const FoodItem = mongoose.models.FoodItem || mongoose.model("FoodItem", FoodItemSchema);

// --- PRODUCT SCHEMA ---
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["Protein", "Multivitamins", "Omega-3", "Pre/Post workout", "Other"] },
  price: { type: Number, required: true },
  benefits: [{ type: String }],
  usage: { type: String },
  rating: { type: Number, default: 0 },
  image: { type: String }
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
