# Matrix Health Calculator v1.0

A comprehensive Medicare wound care ROI calculator for dermal patch treatments with advanced financial modeling and real-time performance tracking.

## Features

- **Advanced Revenue Modeling**: Medicare reimbursement calculations with follow-up care tracking
- **Multi-Channel Marketing Analysis**: Digital and Out-of-Home (OOH) funnel optimization
- **Real-Time Performance Tracking**: Compare projections vs actual results
- **Automated Reporting**: Schedule reports with SMS/email notifications via Twilio
- **Medical Software Integration**: Epic, athenahealth, Cerner, QuickBooks compatibility
- **Multi-Year Projections**: 1, 3, and 5-year financial forecasting

## Quick Start

1. **Environment Setup**
   ```bash
   npm install
   npm run db:push
   npm run dev
   ```

2. **Required Environment Variables**
   ```
   DATABASE_URL=your_postgresql_url
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_NUMBER=your_twilio_number
   ```

3. **Access the Calculator**
   - Open http://localhost:5000
   - Navigate to Calculator tab to begin modeling

## Configuration for Non-Developers

### Marketing Funnel Rates
Marketing teams can update conversion rates and benchmarks without code changes by editing:

**File:** `client/src/data/benchmarks.json`

```json
{
  "digitalMarketing": {
    "defaultCTR": 2.5,           // Click-through rate %
    "defaultLeadConversion": 15.0, // Lead conversion %
    "defaultAppointmentConversion": 65.0,
    "defaultPatientConversion": 80.0,
    "defaultCPM": 25.0           // Cost per thousand impressions
  },
  "kensActualData": {
    "digitalCTR": 3.2,           // Ken's proven results
    "digitalLeadConversion": 18.5,
    // ... update these based on actual performance
  }
}
```

**To Deploy Changes:**
1. Edit the JSON file with new rates
2. Commit changes to repository
3. Redeploy application

### SMS Notifications
Test SMS functionality in Settings > Notifications > SMS Configuration & Testing

## ROI & Payback Semantics

The calculator uses enhanced semantics for financial metrics:

- **ROI Display**: 
  - `∞` = Infinite ROI (revenue with no cost)
  - `150.5%` = Standard percentage for ROI ≤ 100%
  - `2.5x return (150.5%)` = Multiple format for ROI > 100%

- **Payback Period**:
  - `"Immediate"` = Zero cost scenarios
  - `"15 days"` = Sub-month payback periods
  - `"2.3 months"` = Standard monthly payback
  - `"Never"` = Loss-making or break-even scenarios

## Technical Architecture

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + PostgreSQL
- **Database**: Drizzle ORM with type-safe schema
- **Notifications**: Twilio SMS integration
- **Deployment**: Replit production hosting

## Database Schema

Key tables:
- `calculator_sessions` - Persistent calculation state
- `sessions` - User authentication sessions (Replit Auth)

## API Endpoints

- `GET /api/calculator/session/:id` - Retrieve saved calculations
- `POST /api/calculator/session` - Save calculation state
- `POST /api/sms/test` - Test SMS configuration
- `POST /api/reports/notify` - Send report completion alerts

## Testing

Run comprehensive validation tests:
```bash
node validation_tests.js
```

Tests cover:
- ROI and payback calculation edge cases
- Geometric series mathematical accuracy
- Revenue split validation
- Type safety for null handling

## Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied (`npm run db:push`)
- [ ] Twilio credentials tested
- [ ] Marketing benchmarks updated in JSON
- [ ] SSL certificate active
- [ ] Performance monitoring enabled

## Support

For technical issues or feature requests, contact the development team or refer to the comprehensive validation documentation in `MATHEMATICAL_FIXES_SUMMARY.md`.

---

**Version 1.0** - Production ready with comprehensive Medicare wound care modeling capabilities.