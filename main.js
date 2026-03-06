// 1. Setup Connection
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchUserMiners() {
    const container = document.getElementById('miners-container');

    // 2. Fetch data from your 'rentals' table (referenced in your SQL list)
    const { data: rentals, error } = await _supabase
        .from('rentals')
        .select('*')
        .eq('status', 'active');

    if (error) {
        console.error('Error fetching miners:', error);
        return;
    }

    // 3. Render each miner card dynamically
    container.innerHTML = rentals.map(miner => {
        // Calculate progress (Current time vs Start time)
        const progress = calculateProgress(miner.start_date, miner.end_date);
        
        return `
            <div class="miner-card">
                <div class="miner-info">
                    <span class="miner-name">${miner.miner_type}</span>
                    <span class="miner-status">Status: ${miner.status}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
                <div class="miner-stats">
                    <span>Daily Profit: $${miner.daily_yield}</span>
                    <span>Progress: ${progress}%</span>
                </div>
            </div>
        `;
    }).join('');
}

function calculateProgress(start, end) {
    const total = new Date(end) - new Date(start);
    const elapsed = new Date() - new Date(start);
    return Math.min(Math.round((elapsed / total) * 100), 100);
}

// Run on load
fetchUserMiners();
