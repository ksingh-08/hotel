"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Hotel,
  MessageSquare,
  Settings,
  Calendar,
  DollarSign,
  Star,
  LogOut,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingsManagement from "./components/BookingsManagement";
import SettingsManagement from "./components/SettingsManagement";
import MessagesManagement from "./components/MessagesManagement";

interface AdminStats {
  totalBookings: number;
  totalRevenue: number;
  activeGuests: number;
  pendingMessages: number;
}

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [stats, setStats] = useState<AdminStats>({
    totalBookings: 0,
    totalRevenue: 0,
    activeGuests: 0,
    pendingMessages: 0,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  // Authentication handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
    }
  };

  // Fetch admin data
  useEffect(() => {
    const checkAuth = localStorage.getItem("adminAuth");
    if (checkAuth) setIsAuthenticated(true);

    const fetchAdminData = async () => {
      try {
        const messagesResponse = await fetch("/api/contact");
        const messages = await messagesResponse.json();
        setMessages(messages);

        const statsResponse = await fetch("/api/admin?type=stats");
        const stats = await statsResponse.json();
        setStats(stats);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Hotel Admin
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative">
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium">A</span>
                  </div>
                  <span className="font-medium">Admin</span>
                  <LogOut className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Bookings
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.totalBookings}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Revenue
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  ₹{(stats.totalRevenue || 0).toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Active Guests
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.activeGuests}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Pending Messages
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.pendingMessages}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="mt-8 bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "dashboard"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "bookings"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveTab("messages")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "messages"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Messages
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "settings"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "bookings" && <BookingsManagement />}
            {activeTab === "settings" && <SettingsManagement />}
            {activeTab === "messages" && <MessagesManagement />}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Welcome to the Admin Dashboard
                </h2>
                <p className="text-gray-600">
                  Select a tab above to manage bookings, view messages, or update settings.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 