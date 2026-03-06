# CoinPower | Sustainable Energy Mining Platform

CoinPower is a premier global investment platform focused on sustainable energy mining. This repository contains the unified codebase for the marketplace, banking center, and admin analytics dashboard.

## 🚀 Key Features

### 1. Energy Marketplace
* **Tiered Mining Units**: Users can rent generators ranging from PG1 (Trial) to PG3 (Elite).
* **Real-time Earnings**: Automated daily income tracking based on the rented unit level.

### 2. Banking & Withdrawal System
* **Activation Rule**: Withdrawals are locked for PG1 ($1.00) trial accounts. Users must upgrade to **PG2** to unlock the withdrawal gateway.
* **Manual Verification**: All requests are manually verified by platform managers within **1 to 24 hours**.
* **Processing Fee**: A standard **15% maintenance and charity tax** is applied to every withdrawal to support infrastructure and community funds.

### 3. Security & Integrity
* **Official Channels**: Support is strictly limited to Telegram (@coinpow_group). WhatsApp groups are prohibited to prevent scams.
* **Anti-Fraud**: Multiple accounts created to farm the $1.00 bonus result in a permanent ban.
* **Data Protection**: No admin will ever ask for passwords, PINs, or private money transfers.

## 🛠️ Technical Setup

### Database (Supabase)
Run the provided `schema.sql` in your Supabase SQL editor to:
* Generate the `transactions` and `generators` tables using `gen_random_uuid()`.
* Enable **Row Level Security (RLS)** to protect user data.
* Configure the **Active Rentals View** for real-time status tracking.

### Admin Dashboard
* **Approval Queue**: Manually approve or reject withdrawals based on net amounts (Amount - 15% Fee).
* **Analytics**: Monitor total platform profit and active mining nodes.

## ⚖️ Rules of Conduct
* Zero tolerance for harassing customers or support staff.
* Failed mining nodes are eligible for instant full refunds.
*