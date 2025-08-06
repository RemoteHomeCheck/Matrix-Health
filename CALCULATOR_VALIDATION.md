# Matrix Health Calculator - Mathematical Validation Guide

## Purpose
This document provides a comprehensive breakdown of all calculations in the Matrix Health Calculator for independent validation by mathematicians, analysts, or AI systems.

## Core Revenue Calculations

### 1. Treatment Revenue (Per Patient)
```
Treatment Area = Length (cm) × Width (cm)
Treatment Value = Treatment Area × CMS Rate ($/cm²)
Follow-up Revenue = Weekly Dressing Fee × Number of Follow-up Weeks
Patient Treatment Reimbursement = Treatment Value + Follow-up Revenue

Default Values:
- Length: 4 cm
- Width: 4 cm  
- CMS Rate: $2,500/cm²
- Weekly Dressing Fee: $500
- Follow-up Weeks: 5

Expected Result: (4 × 4 × $2,500) + ($500 × 5) = $40,000 + $2,500 = $42,500
```

### 2. Revenue Split Validation
```
Revenue shares must sum to 100%:
Distributor Share + Provider Share + Manufacturer Share = 100%

Default splits:
- Distributor: 15%
- Provider: 50% 
- Manufacturer: 35%
Total: 15% + 50% + 35% = 100% ✓

Per-patient revenue distribution:
- Distributor Revenue = $42,500 × 0.15 = $6,375
- Provider Revenue = $42,500 × 0.50 = $21,250
- Manufacturer Revenue = $42,500 × 0.35 = $14,875
Total: $6,375 + $21,250 + $14,875 = $42,500 ✓
```

## Marketing Funnel Calculations

### 3. Digital Channel Math
```
Step 1: Impressions → Clicks
Clicks = Impressions × (CTR / 100)
Default: 500,000 × (1.2 / 100) = 6,000 clicks

Step 2: Clicks → Leads  
Leads = Clicks × (Lead Conversion Rate / 100)
Default: 6,000 × (0.4 / 100) = 24 leads

Step 3: Leads → Appointments
Appointments = Leads × (Appointment Rate / 100)
Default: 24 × (7.5 / 100) = 1.8 appointments

Step 4: Appointments → Patients
Patients = Appointments × (Patient Conversion / 100)
Default: 1.8 × (60 / 100) = 1.08 patients

Step 5: Patient Revenue
Channel Revenue = Patients × Patient Treatment Reimbursement
Default: 1.08 × $42,500 = $45,900
```

### 4. Out-of-Home (OOH) Channel Math
```
Step 1: Impressions → Responses
Responses = Impressions × (Response Rate / 100)
Default: 250,000 × (0.07 / 100) = 175 responses

Step 2: Responses → Leads
Leads = Responses × (Lead Conversion / 100)
Default: 175 × (8.5 / 100) = 14.875 leads

Step 3: Leads → Appointments  
Appointments = Leads × (Appointment Rate / 100)
Default: 14.875 × (7.5 / 100) = 1.116 appointments

Step 4: Appointments → Patients
Patients = Appointments × (Patient Conversion / 100)
Default: 1.116 × (55 / 100) = 0.614 patients

Step 5: Patient Revenue
Channel Revenue = Patients × Patient Treatment Reimbursement
Default: 0.614 × $42,500 = $26,095
```

## Cost and ROI Analysis

### 5. Cost Per Mille (CPM) Calculations
```
Digital CPM Calculation:
Cost = (Impressions ÷ 1,000) × CPM Rate
Default: (500,000 ÷ 1,000) × $8.35 = $4,175

OOH CPM Calculation:
Cost = (Impressions ÷ 1,000) × CPM Rate  
Default: (250,000 ÷ 1,000) × $12.00 = $3,000

Total Marketing Spend = $4,175 + $3,000 = $7,175
```

### 6. ROI Calculations
```
Combined Results:
Total Patients = Digital Patients + OOH Patients = 1.08 + 0.614 = 1.694 patients
Total Revenue = Digital Revenue + OOH Revenue = $45,900 + $26,095 = $71,995
Total Costs = Digital Cost + OOH Cost = $4,175 + $3,000 = $7,175

Blended ROI = ((Total Revenue - Total Costs) ÷ Total Costs) × 100
Blended ROI = (($71,995 - $7,175) ÷ $7,175) × 100 = 903.55%

Payback Period = Total Costs ÷ (Total Revenue - Total Costs)
Payback Period = $7,175 ÷ ($71,995 - $7,175) = 0.111 months
```

## Multi-Year Growth Projections

### 7. Year 1 Cumulative Calculation
```
For each month (1-12):
Monthly Growth Factor = (1 + Growth Rate)^month
Conversion Improvement = 1 + (Optimization Rate × month/12)
Monthly Patients = Base Patients × Growth Factor × Conversion Improvement
Monthly Revenue = Monthly Patients × Patient Treatment Reimbursement

Cumulative totals are summed across all 12 months.

Example with 5% monthly growth, 10% conversion optimization:
Month 1: 1.694 × 1.05^1 × 1.008 = 1.79 patients
Month 2: 1.694 × 1.05^2 × 1.017 = 1.89 patients
...continuing for all 12 months
```

### 8. Validation Checkpoints
```
Critical validation points:
1. Revenue splits always sum to 100%
2. Funnel conversion rates are realistic (industry benchmarks)
3. Growth rates have maximum ceilings to prevent unrealistic projections
4. Cost calculations use actual spend, not theoretical maximums
5. Multi-year projections account for market saturation
```

## Test Cases for Validation

### Test Case 1: Zero Marketing Spend
- Input: $0 digital spend, $0 OOH spend
- Expected: 0 patients, $0 revenue, undefined ROI

### Test Case 2: Single Channel Only
- Input: $7,175 digital only, $0 OOH
- Expected: Verify digital calculations independently

### Test Case 3: Revenue Split Edge Cases
- Input: 100% distributor, 0% others
- Expected: All revenue goes to distributor share

### Test Case 4: Maximum Growth Ceiling
- Input: Very high growth rates
- Expected: Growth should cap at reasonable maximums

## Clinical Research Validation
The calculator is based on Las Heras (2020) clinical research:
- 30% of wounds become chronic
- 60-70% recurrence rate for chronic wounds
- Average treatment duration: 12-13 months (calculator uses 20 weeks)
- Medicare population: 16.4% have chronic wounds

## Questions for External Validation
1. Are the funnel conversion rates realistic for healthcare marketing?
2. Do the revenue splits align with typical medical device distribution?
3. Are the growth projections mathematically sound and business-realistic?
4. Do the ROI calculations properly account for all costs and revenues?
5. Are there any mathematical errors in the multi-year projections?

## Source Code References
- Core calculations: `client/src/lib/calculations.ts`
- Schema definitions: `shared/schema.ts`
- Component implementations: `client/src/components/`

## Validation Instructions for External Review
1. Verify each calculation step manually with a calculator
2. Check that percentages sum correctly (revenue splits = 100%)
3. Validate that growth projections follow compound interest formulas
4. Ensure ROI calculations use standard financial formulas
5. Test edge cases (zero values, maximum values, invalid inputs)
6. Compare conversion rates against healthcare industry benchmarks