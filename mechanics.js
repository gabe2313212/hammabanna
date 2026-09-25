// ======================================================
// HAMMABANNA — GAME RULES
// ======================================================

const GAME_RULES = {

    // World
    worldArea: 10_000_000,

    // Normal pigs
    normalPigKillsRequired: 500,
    normalPigSize: 8,

    // Shooting
    cannonballsPerSecond: 10,

    // Boss
    boss: {
        name: "Big P",
        maxHealth: 1_000_000,
        damagePerHit: 200
    },

    // Pig respawn
    normalPigRespawnTime: 5.5
};


// ======================================================
// CALCULATED VALUES
// ======================================================

GAME_RULES.worldSideLength =
    Math.sqrt(
        GAME_RULES.worldArea
    );

GAME_RULES.bossHitsRequired =
    GAME_RULES.boss.maxHealth /
    GAME_RULES.boss.damagePerHit;


// ======================================================
// GAME STATE
// ======================================================

const HAMMABANNA_STATE = {

    pigsKilled: 0,

    bossStarted: false,

    bossDefeated: false,

    bossHealth:
        GAME_RULES.boss.maxHealth,

    cannonballsFired: 0
};


// ======================================================
// DEBUG INFORMATION
// ======================================================

console.log(
    "🐷 HAMMABANNA mechanics loaded."
);

console.log(
    "🌎 World area:",
    GAME_RULES.worldArea.toLocaleString(),
    "m²"
);

console.log(
    "📏 World side:",
    GAME_RULES.worldSideLength.toFixed(2),
    "m"
);

console.log(
    "🐷 Normal pig kills required:",
    GAME_RULES.normalPigKillsRequired
);

console.log(
    "💥 Cannonballs per second:",
    GAME_RULES.cannonballsPerSecond
);

console.log(
    "👑 Boss:",
    GAME_RULES.boss.name
);

console.log(
    "❤️ Boss health:",
    GAME_RULES.boss.maxHealth.toLocaleString()
);

console.log(
    "🎯 Boss hits required:",
    GAME_RULES.bossHitsRequired.toLocaleString()
);
