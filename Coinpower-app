<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoinPower | Secure Mining</title>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore-compat.js"></script>
    <style>
        :root { --gold: #b8860b; --p-green: #28a745; --dark: #1a1a1a; }
        body { font-family: 'Segoe UI', sans-serif; margin: 0; padding-bottom: 80px; background: #fff; color: #333; }
        .container { max-width: 450px; margin: auto; padding: 20px; }
        .hidden { display: none !important; }
        .auth-header { text-align: center; padding: 40px 20px; }
        .logo-large { width: 140px; height: 140px; border-radius: 50%; box-shadow: 0 8px 20px rgba(0,0,0,0.15); object-fit: cover; }
        .dash-header { background: linear-gradient(135deg, #111 0%, #333 100%); color: white; padding: 25px; border-radius: 0 0 25px 25px; text-align: center; }
        .logo-small { width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--gold); }
        .card { background: white; border: 1px solid #eee; border-radius: 18px; padding: 20px; margin: 15px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .btn { background: var(--p-green); color: white; border: none; padding: 15px; border-radius: 12px; cursor: pointer; width: 100%; font-weight: bold; }
        input, select { width: 100%; padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 10px; box-sizing: border-box; }
        .timer-label { color: #d9534f; font-weight: bold; font-size: 0.85em; margin-top: 8px; text-align: center; }
    </style>
</head>
<body>
    <div id="auth-page">
        <div class="auth-header">
            <img src="3611.jpg" class="logo-large">
            <h2 style="color: var(--gold);">DIGITAL ENERGY MINING</h2>
        </div>
        <div class="container">
            <div id="reg-box" class="card">
                <input type="text" id="reg-user" placeholder="Username">
                <select id="reg-country">
                    <option value="">Select Country</option>
                    <option>Italy 🇮🇹</option><option>Canada 🇨🇦</option><option>USA 🇺🇸</option>
                    <option>UK 🇬🇧</option><option>Ghana 🇬🇭</option><option>Nigeria 🇳🇬</option>
                </select>
                <input type="text" id="reg-phone" placeholder="Phone Number">
                <input type="password" id="reg-pin" maxlength="4" placeholder="4-Digit PIN">
                <button class="btn" onclick="register()">Join Now</button>
            </div>
        </div>
    </div>

    <div id="main-page" class="hidden">
        <div class="dash-header">
            <img src="3611.jpg" class="logo-small">
            <h1 id="display-balance" style="color: #ffc107;">$0.00</h1>
        </div>
        <div class="container">
            <div id="bonus-card" class="card hidden" style="border: 2px solid #ffc107; text-align: center;">
                <h3>🎁 Bonus!</h3>
                <button class="btn" style="background:#ffc107; color:#000;" onclick="claimSpecial()">Claim $<span id="bonus-amt-text">0</span></button>
            </div>
            <div class="card" style="text-align:center;">
                <h3>PG1 Global Unit</h3>
                <button id="btn-claim-pg" class="btn" onclick="claimDaily()">Claim $1.00</button>
                <div id="timer-text" class="timer-label"></div>
            </div>
            <button class="btn" style="background:#25D366" onclick="window.open('https://wa.me/YOURNUMBER')">💬 Support</button>
        </div>
    </div>

    <script>
        // Use your same Firebase Config here
        const firebaseConfig = { /* PASTE YOUR CONFIG */ };
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        let user = null;

        async function register() {
            const phone = document.getElementById('reg-phone').value.trim();
            user = { username: document.getElementById('reg-user').value, phone: phone, country: document.getElementById('reg-country').value, pin: document.getElementById('reg-pin').value, balance: 1.0, lastClaim: 0, pendingBonus: 0 };
            await db.collection("users").doc(phone).set(user);
            showDashboard();
        }

        async function login() {
            /* standard login logic */
        }

        async function claimDaily() {
            if(Date.now() - user.lastClaim < 86400000) return;
            user.balance += 1.0; user.lastClaim = Date.now();
            await db.collection("users").doc(user.phone).set(user); updateUI();
        }

        async function claimSpecial() {
            user.balance += user.pendingBonus; user.pendingBonus = 0;
            await db.collection("users").doc(user.phone).set(user); updateUI();
        }

        function showDashboard() { 
            document.getElementById('auth-page').classList.add('hidden'); 
            document.getElementById('main-page').classList.remove('hidden'); 
            updateUI(); startTimer();
        }

        function updateUI() {
            document.getElementById('display-balance').innerText = "$" + user.balance.toFixed(2);
            if(user.pendingBonus > 0) {
                document.getElementById('bonus-card').classList.remove('hidden');
                document.getElementById('bonus-amt-text').innerText = user.pendingBonus;
            } else { document.getElementById('bonus-card').classList.add('hidden'); }
        }

        function startTimer() {
            setInterval(() => {
                const diff = 86400000 - (Date.now() - user.lastClaim);
                document.getElementById('timer-text').innerText = diff > 0 ? "Mining..." : "Ready!";
                document.getElementById('btn-claim-pg').disabled = diff > 0;
            }, 1000);
        }
    </script>
</body>
</html>
