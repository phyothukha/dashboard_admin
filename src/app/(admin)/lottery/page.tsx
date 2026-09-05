"use client";

import React, { useState } from "react";
import {
  Home,
  Bell,
  CreditCard,
  User,
  ChevronRight,
  Crown,
  Diamond,
  Activity,
  FileText,
  Settings,
  Headphones,
  Copy,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
} from "lucide-react";

const LotteryRedesignLight = () => {
  const [activeScreen, setActiveScreen] = useState("home");
  const [activeTab, setActiveTab] = useState("ALL");

  const NavigationBar = () => (
    <div className="fixed bottom-0 container max-w-3xl mx-auto left-0 right-0 bg-[#c30010] border-t border-gray-200 shadow-lg">
      <div className="flex justify-around py-3">
        <button
          onClick={() => setActiveScreen("home")}
          className={`flex flex-col items-center px-4 py-2 transition-colors ${
            activeScreen === "home" ? "text-yellow-300" : ""
          }`}
        >
          <Home size={24} strokeWidth={1.5} />
          <span className="text-xs mt-1 font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveScreen("draw")}
          className={`flex flex-col items-center px-4 py-2 transition-colors ${
            activeScreen === "draw" ? "text-yellow-300" : ""
          }`}
        >
          <Activity size={24} strokeWidth={1.5} />
          <span className="text-xs mt-1 font-medium">Draw</span>
        </button>
        <button
          onClick={() => setActiveScreen("account")}
          className={`flex flex-col items-center px-4 py-2 transition-colors ${
            activeScreen === "account" || activeScreen === "bettingRecord"
              ? "text-yellow-300"
              : ""
          }`}
        >
          <User size={24} strokeWidth={1.5} />
          <span className="text-xs mt-1 font-medium">Account</span>
        </button>
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="min-h-screen  pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extrabold text-gray-800 font-mono">
            SnowLink
          </div>
          <button className=" border p-3 bg-yellow-600 text-sm font-medium hover:text-yellow-300 transition-colors">
            Sign out
          </button>
        </div>
      </div>

      {/* Main Actions */}
      <div className="bg-white px-4 py-6 mb-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CreditCard
                className="text-green-600"
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm font-medium text-gray-800">Deposit</span>
          </button>
          <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
              <ArrowUpRight
                className="text-red-600"
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm font-medium text-gray-800">Cash-out</span>
          </button>

          <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors relative">
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
              <Bell className="text-amber-600" size={24} strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-gray-800">
              Notification
            </span>
          </button>
        </div>
      </div>

      {/* Premium Banner */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            FIRST-TIME RECHARGE SPECIAL
          </h2>
          <p className="text-sm  mb-4">Exclusive bonuses await new members!</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
              <div className="text-amber-600 font-bold text-lg">100 USDT</div>
              <div className="text-xs ">Get 10 USDT</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
              <div className="text-amber-600 font-bold text-lg">300 USDT</div>
              <div className="text-xs ">Get 35 USDT</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
              <div className="text-amber-600 font-bold text-lg">500 USDT</div>
              <div className="text-xs ">Get 100 USDT</div>
            </div>
          </div>
          <div className="mt-3 bg-white rounded-lg p-3 text-center border border-amber-200">
            <div className="text-amber-600 font-bold text-lg">1000 USDT</div>
            <div className="text-xs ">Get 300 USDT</div>
          </div>
          <button className="w-full mt-4 bg-amber-500  font-semibold py-3 rounded-lg hover:bg-amber-600 transition-colors shadow-sm">
            RECHARGE NOW!
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="px-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Select Lottery
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "Global 10", icon: "🌍" },
            { name: "5 Mins Loto", icon: "⚡" },
            { name: "Mark 6", icon: "6️⃣" },
            { name: "Fast 3", icon: "🚀" },
            { name: "5 of 11", icon: "🎯" },
            { name: "Lucky 28", icon: "🍀" },
            { name: "Happy 10", icon: "😊" },
            { name: "Speed 5", icon: "💨" },
            { name: "Fortune 7", icon: "7️⃣" },
          ].map((game, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-4 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
              onClick={() => setActiveScreen("betting")}
            >
              <div className="text-2xl mb-2">{game.icon}</div>
              <div className="text-sm font-medium text-gray-800">
                {game.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const VIPScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm mb-4">
        <div className="flex items-center text-sm  mb-3">
          <span>Home</span>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-yellow-300 font-medium">Global 10</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">VIP Levels</h2>
      </div>

      {/* VIP Cards - 2 Column Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              level: 1,
              minBet: 1,
              balance: 0,
              borderColor: "border-gray-300",
              iconColor: "text-gray-500",
              bgGradient: "from-gray-50 to-gray-100",
            },
            {
              level: 2,
              minBet: 100,
              balance: 5000,
              borderColor: "border-blue-300",
              iconColor: "text-blue-500",
              bgGradient: "from-blue-50 to-blue-100",
            },
            {
              level: 3,
              minBet: 200,
              balance: 10000,
              borderColor: "border-purple-300",
              iconColor: "text-purple-500",
              bgGradient: "from-purple-50 to-purple-100",
            },
            {
              level: 4,
              minBet: 500,
              balance: 30000,
              borderColor: "border-amber-400",
              iconColor: "text-amber-500",
              bgGradient: "from-amber-50 to-amber-100",
            },
          ].map((vip) => (
            <div
              key={vip.level}
              className={`bg-gradient-to-br ${vip.bgGradient} rounded-2xl p-5 border-2 ${vip.borderColor} hover:shadow-lg transition-all cursor-pointer`}
              onClick={() => setActiveScreen("betting")}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-2xl font-bold text-gray-800">
                  VIP {vip.level}
                </div>
                <Crown
                  className={`${vip.iconColor}`}
                  size={24}
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs ">Min. bet</p>
                  <p className="text-amber-600 font-bold text-lg">
                    {vip.minBet}
                  </p>
                </div>
                <div>
                  <p className="text-xs ">Balance req.</p>
                  <p className="text-amber-600 font-bold text-lg">
                    {vip.balance.toLocaleString()}
                  </p>
                </div>
              </div>
              {vip.level === 4 && (
                <div className="mt-3 text-center">
                  <span className="inline-block bg-amber-200 px-3 py-1 rounded-full text-amber-800 text-xs font-semibold">
                    Premium
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional VIP Tiers */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            {
              level: 5,
              minBet: 1000,
              balance: 50000,
              borderColor: "border-emerald-300",
              iconColor: "text-emerald-500",
              bgGradient: "from-emerald-50 to-emerald-100",
            },
            {
              level: 6,
              minBet: 2000,
              balance: 100000,
              borderColor: "border-indigo-300",
              iconColor: "text-indigo-500",
              bgGradient: "from-indigo-50 to-indigo-100",
            },
            {
              level: 7,
              minBet: 5000,
              balance: 200000,
              borderColor: "border-rose-300",
              iconColor: "text-rose-500",
              bgGradient: "from-rose-50 to-rose-100",
            },
            {
              level: 8,
              minBet: 10000,
              balance: 500000,
              borderColor: "border-orange-300",
              iconColor: "text-orange-500",
              bgGradient: "from-orange-50 to-orange-100",
            },
            {
              level: 9,
              minBet: 20000,
              balance: 1000000,
              borderColor: "border-teal-300",
              iconColor: "text-teal-500",
              bgGradient: "from-teal-50 to-teal-100",
            },
            {
              level: 10,
              minBet: 50000,
              balance: 2000000,
              borderColor: "border-yellow-400",
              iconColor: "text-yellow-600",
              bgGradient: "from-yellow-50 to-yellow-100",
            },
          ].map((vip) => (
            <div
              key={vip.level}
              className={`bg-gradient-to-br ${vip.bgGradient} rounded-2xl p-5 border-2 ${vip.borderColor} hover:shadow-lg transition-all cursor-pointer`}
              onClick={() => setActiveScreen("betting")}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-2xl font-bold text-gray-800">
                  VIP {vip.level}
                </div>
                {vip.level === 10 ? (
                  <Diamond
                    className={`${vip.iconColor}`}
                    size={24}
                    strokeWidth={1.5}
                  />
                ) : (
                  <Crown
                    className={`${vip.iconColor}`}
                    size={24}
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs ">Min. bet</p>
                  <p className="text-amber-600 font-bold text-lg">
                    {vip.minBet.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs ">Balance req.</p>
                  <p className="text-amber-600 font-bold text-base">
                    {vip.balance >= 1000000
                      ? `${vip.balance / 1000000}M`
                      : `${vip.balance / 1000}K`}
                  </p>
                </div>
              </div>
              {vip.level === 10 && (
                <div className="mt-3 text-center">
                  <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 px-3 py-1 rounded-full text-yellow-900 text-xs font-semibold">
                    Elite
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VIP Benefits Info */}
        <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            VIP Benefits
          </h3>
          <p className="text-xs ">
            Higher VIP levels unlock exclusive rewards, faster withdrawals, and
            better odds on select games.
          </p>
        </div>
      </div>
    </div>
  );

  const BettingScreen = () => (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center text-sm  mb-3">
          <span>Home</span>
          <ChevronRight size={16} className="mx-2" />
          <span>Global 10</span>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-yellow-300 font-medium">VIP 1</span>
        </div>

        {/* Game Status */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm ">Round</div>
              <div className="text-2xl font-bold text-gray-800">21097</div>
            </div>
            <div className="text-center">
              <div className="text-sm ">Time Remaining</div>
              <div className="text-3xl font-bold text-red-600 font-mono">
                4:50
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm ">Balance</div>
              <div className="text-xl font-bold text-amber-600">$0.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Results History */}
      <div className="bg-white px-4 py-4 mb-2">
        <h3 className="text-sm  mb-2 font-medium">Previous Results</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[5, 7, 5, 2, 2, 7, 8, 8, 3, 7].map((num, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-600 font-bold flex-shrink-0"
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white px-4 pt-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "ALL"
                ? "bg-yellow-300  shadow-sm"
                : "bg-gray-100  hover:bg-gray-200"
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab("Special")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "Special"
                ? "bg-yellow-300  shadow-sm"
                : "bg-gray-100  hover:bg-gray-200"
            }`}
          >
            Special
          </button>
        </div>
      </div>

      {/* Betting Grid */}
      <div className="bg-white px-4 pb-4">
        {activeTab === "ALL" ? (
          <div className="space-y-4">
            {/* TOP Bets */}
            <div>
              <h3 className="text-sm  mb-2 font-medium">TOP1+2</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "TOP1+2ODD", odds: "1.891" },
                  { name: "TOP1+2EVEN", odds: "2.125" },
                  { name: "TOP1+2BIG", odds: "2.125" },
                  { name: "TOP1+2SMALL", odds: "1.891" },
                ].map((bet) => (
                  <button
                    key={bet.name}
                    className="bg-white rounded-xl p-4 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="text-sm  mb-2">{bet.name}</div>
                    <div className="text-2xl font-bold text-yellow-300">
                      {bet.odds}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Ball Bets */}
            {[1, 2, 3, 4, 5].map((ball) => (
              <div key={ball}>
                <h3 className="text-sm  mb-2 font-medium">Ball {ball}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: `Ball ${ball} ODD`,
                      odds: ball === 2 ? "1.95" : "1.891",
                    },
                    {
                      name: `Ball ${ball} Even`,
                      odds:
                        ball === 2
                          ? "1.5"
                          : ball === 3 || ball === 4 || ball === 5
                            ? "1.5"
                            : "2.125",
                    },
                    { name: `Ball ${ball} Big`, odds: "1.891" },
                    {
                      name: `Ball ${ball} Small`,
                      odds:
                        ball === 2
                          ? "1.5"
                          : ball === 3 || ball === 4 || ball === 5
                            ? "1.5"
                            : "2.125",
                    },
                  ].map((bet) => (
                    <button
                      key={bet.name}
                      className="bg-white rounded-xl p-4 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="text-sm  mb-2">{bet.name}</div>
                      <div className="text-2xl font-bold text-yellow-300">
                        {bet.odds}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">🎲</div>
            <p>Special bets coming soon</p>
          </div>
        )}
      </div>
    </div>
  );

  const AccountScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Profile Header */}
      <div className="bg-white px-6 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-300 rounded-full flex items-center justify-center">
              <User size={32} strokeWidth={1.5} className="" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  ID: 4FDEA8
                </h2>
                <button className="text-gray-400 hover:text-yellow-300 transition-colors">
                  <Copy size={16} strokeWidth={1.5} />
                </button>
              </div>
              <p className="">tony</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-yellow-300 transition-colors">
            <Settings size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Financial Overview - Large Prominent Card */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
          <div className="grid grid-cols-2 gap-6 mb-5">
            <div>
              <p className="text-sm text-gray-700 mb-1 font-medium">
                Wallet Amount
              </p>
              <p className="text-3xl font-bold text-amber-600">$0.00</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 mb-1 font-medium">
                Daily Profit
              </p>
              <p className="text-3xl font-bold text-green-600">$0.00</p>
            </div>
          </div>

          {/* Transaction Actions */}
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white border border-green-300 text-green-700 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <ArrowDownRight size={18} strokeWidth={1.5} />
              Deposit
            </button>
            <button className="bg-white border border-red-300 text-red-700 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <ArrowUpRight size={18} strokeWidth={1.5} />
              Withdraw
            </button>
            <button className="bg-white border border-blue-300 text-blue-700 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <RefreshCw size={18} strokeWidth={1.5} />
              Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
          <h3 className="text-lg font-bold text-emerald-700 mb-1">
            THE MORE YOU GET
          </h3>
          <p className="text-amber-600 font-semibold">THE MORE YOU EARN</p>
        </div>
      </div>

      {/* Records & Details - Vertical List */}
      <div className="bg-white">
        <div className="divide-y divide-gray-100">
          {[
            {
              icon: Calendar,
              label: "Betting Record",
              color: "text-yellow-300",
            },
            {
              icon: FileText,
              label: "Deposit Record",
              color: "text-green-600",
            },
            { icon: Activity, label: "Withdraw Record", color: "text-red-600" },
            { icon: FileText, label: "Statement", color: "text-purple-600" },
            { icon: User, label: "Account Details", color: "text-amber-600" },
            {
              icon: Headphones,
              label: "Online Service",
              color: "text-yellow-300",
            },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => {
                if (item.label === "Betting Record") {
                  setActiveScreen("bettingRecord");
                }
              }}
            >
              <div className="flex items-center gap-4">
                <item.icon className={item.color} size={24} strokeWidth={1.5} />
                <span className="text-gray-800 font-medium">{item.label}</span>
              </div>
              <ChevronRight
                className="text-gray-400"
                size={20}
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const BettingRecordScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm mb-4">
        <div className="flex items-center">
          <button onClick={() => setActiveScreen("account")} className="mr-3">
            <ChevronRight className=" rotate-180" size={24} strokeWidth={1.5} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            Betting Records
          </h2>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white px-4 py-3 mb-4">
        <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="" size={20} strokeWidth={1.5} />
            <span className="text-gray-800">Nov 10, 2025 - Nov 11, 2025</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="bg-white px-4 py-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-sm text-gray-700 mb-1">Total Loss</p>
            <p className="text-2xl font-bold text-red-600">$0.00</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-sm text-gray-700 mb-1">Total Win</p>
            <p className="text-2xl font-bold text-green-600">$0.00</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="text-sm text-gray-700 mb-1">Total Earning</p>
            <p className="text-2xl font-bold text-yellow-300">$0.00</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-sm text-gray-700 mb-1">Total Betting Order</p>
            <p className="text-2xl font-bold text-amber-600">0</p>
          </div>
        </div>
      </div>

      {/* No Data State */}
      <div className="bg-white px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-4">
            <div className="text-5xl">💸</div>
          </div>
          <p className="text-gray-500 font-medium">No Data Found</p>
          <p className="text-sm text-gray-400 mt-2">
            Your betting records will appear here
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {activeScreen === "home" && <HomeScreen />}
      {activeScreen === "draw" && <VIPScreen />}
      {activeScreen === "betting" && <BettingScreen />}
      {activeScreen === "account" && <AccountScreen />}
      {activeScreen === "bettingRecord" && <BettingRecordScreen />}
      <NavigationBar />
    </div>
  );
};

export default LotteryRedesignLight;
