import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Calculator, Sparkles, Users, PhoneCall, Target } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import CostBreakdownSection from './CostBreakdownSection'

const SliderInput = ({ label, value, onChange, min, max, step, prefix = '', suffix = '', icon: Icon }) => {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
      {/* Inline label + value */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-[#0080FF]" />
            </div>
          )}
          <label className="text-sm font-medium text-white/80">{label}</label>
        </div>
        <span className="text-xl font-bold text-[#0080FF] whitespace-nowrap flex-shrink-0">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>

      {/* Custom slider */}
      <div className="relative group h-10 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-white/[0.06]" />

        {/* Filled track */}
        <div
          className="absolute left-0 h-1.5 rounded-full bg-[#0080FF] transition-all duration-100"
          style={{ width: `${percentage}%` }}
        />

        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
          style={{ left: `${percentage}%` }}
        >
          <div className="relative -ml-2.5">
            <div className="w-5 h-5 rounded-full bg-white border-2 border-[#0080FF] shadow-sm" />
          </div>
        </div>

        {/* Invisible native input for accessibility */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-slider absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          aria-label={label}
        />
      </div>

      {/* Min/max labels */}
      <div className="flex justify-between text-xs text-white/40">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  )
}

const ResultCard = ({ label, value, prefix = '', suffix = '', color, delay = 0, trend }) => {
  const colorStyles = {
    emerald: { accent: 'bg-emerald-400', text: 'text-emerald-400', border: 'border-emerald-500/15', trendColor: 'text-emerald-400/60' },
    blue:    { accent: 'bg-[#0080FF]',   text: 'text-[#0080FF]',   border: 'border-[#0080FF]/15',   trendColor: 'text-[#0080FF]/60' },
    purple:  { accent: 'bg-purple-400',   text: 'text-purple-400',  border: 'border-purple-500/15',  trendColor: 'text-purple-400/60' },
  }
  const c = colorStyles[color] || colorStyles.blue

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="h-full"
    >
      <div className={`h-full p-5 sm:p-6 rounded-xl bg-white/[0.03] border ${c.border} flex flex-col`}>
        {/* Label with colored dot */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${c.accent}`} />
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{label}</span>
        </div>

        {/* Value */}
        <div className={`text-3xl sm:text-4xl font-bold ${c.text} tracking-tight`}>
          {prefix}<AnimatedCounter value={value} duration={1000} />{suffix}
        </div>

        {/* Trend */}
        {trend && (
          <p className={`text-xs ${c.trendColor} mt-3`}>{trend}</p>
        )}
      </div>
    </motion.div>
  )
}

const ROICalculator = () => {
  const [salary, setSalary] = useState(3500)
  const [numReceptionists, setNumReceptionists] = useState(1)
  const [missedCalls, setMissedCalls] = useState(20)
  const [dealValue, setDealValue] = useState(2000)

  const calculations = useMemo(() => {
    const annualStaffCost = salary * 12 * numReceptionists
    const missedOpportunityCost = missedCalls * 52 * dealValue * 0.05
    const totalCurrentCost = annualStaffCost + missedOpportunityCost
    const titleVoiceCost = (1500 * 12) + 5000 // $23k first year
    const annualSavings = totalCurrentCost - titleVoiceCost
    const roiPercentage = titleVoiceCost > 0 ? Math.round((annualSavings / titleVoiceCost) * 100) : 0
    const monthlySavings = annualSavings / 12
    const paybackMonths = monthlySavings > 0 ? Math.ceil(titleVoiceCost / monthlySavings) : 0

    return {
      annualStaffCost,
      missedOpportunityCost,
      totalCurrentCost,
      titleVoiceCost,
      annualSavings: Math.max(0, annualSavings),
      roiPercentage: Math.max(0, roiPercentage),
      monthlySavings: Math.max(0, monthlySavings),
      paybackMonths
    }
  }, [salary, numReceptionists, missedCalls, dealValue])

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080FF]/[0.06] border border-[#0080FF]/15 mb-6">
          <Sparkles className="w-4 h-4 text-[#0080FF]" />
          <span className="text-sm text-white/70 font-medium">Interactive ROI Calculator</span>
        </div>
      </motion.div>

      {/* Main Layout: Sidebar + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 max-w-[1400px] mx-auto">

        {/* Sidebar - Inputs */}
        <div className="order-1 lg:order-1 lg:sticky lg:top-8 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 lg:p-8 bg-[#0a0a0a] rounded-2xl border border-white/10"
          >
            {/* Header with divider */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#0080FF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Numbers</h3>
                <p className="text-sm text-white/50">Adjust to match your business</p>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              <SliderInput
                label="Number of Receptionists"
                value={numReceptionists}
                onChange={setNumReceptionists}
                min={1}
                max={5}
                step={1}
                icon={Users}
              />
              <SliderInput
                label="Monthly Salary"
                value={salary}
                onChange={setSalary}
                min={2000}
                max={6000}
                step={250}
                prefix="$"
                icon={DollarSign}
              />
              <SliderInput
                label="Missed Calls / Week"
                value={missedCalls}
                onChange={setMissedCalls}
                min={5}
                max={50}
                step={1}
                icon={PhoneCall}
              />
              <SliderInput
                label="Average Deal Value"
                value={dealValue}
                onChange={setDealValue}
                min={500}
                max={5000}
                step={100}
                prefix="$"
                icon={Target}
              />
            </div>

            {/* Methodology footer */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                <span className="text-[#0080FF] font-semibold">Methodology:</span>{' '}
                Assumes 5% of missed calls result in lost deals (conservative industry estimate). Actual results may vary.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content - Results */}
        <div className="order-2 lg:order-2 space-y-6">
          {/* Top row: 3 KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResultCard
              label="Annual Savings"
              value={calculations.annualSavings}
              prefix="$"
              color="emerald"
              delay={0.1}
              trend={`$${calculations.monthlySavings.toLocaleString()}/month`}
            />
            <ResultCard
              label="ROI"
              value={calculations.roiPercentage}
              suffix="%"
              color="blue"
              delay={0.2}
              trend="First year return"
            />
            <ResultCard
              label="Payback Period"
              value={calculations.paybackMonths}
              suffix={calculations.paybackMonths === 1 ? ' month' : ' months'}
              color="purple"
              delay={0.3}
              trend="Break-even point"
            />
          </div>

          {/* Cost Breakdown */}
          <CostBreakdownSection
            calculations={calculations}
            numReceptionists={numReceptionists}
            salary={salary}
          />
        </div>
      </div>
    </div>
  )
}

export default ROICalculator
