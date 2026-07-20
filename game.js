// Dynamic Trilingual Game Engine for Great PQCM Adventure
// Powered by story_data.js loaded dynamically

// Add start & welcome nodes to STORY_DATA dynamically
STORY_DATA["start"] = {
    chapter: "start",
    title: {
        zh: "项目背景",
        ja: "プロジェクト背景",
        en: "Project Background"
    },
    avatar: "hidden",
    npcAvatar: "hidden",
    charName: {
        zh: "系统旁白",
        ja: "ナレーション",
        en: "Narrator"
    },
    image: "assets/qc_quest_title.jpg?v=1.0.3",
    desc: {
        zh: "【项目受约】\n公司成功中标中东某国家约1,500亿日元的天然气处理厂项目。为了赢得合同，项目预算和交期被压缩至极限；同时，因公司其他重点项目并发，内部人力资源极度匮乏。\n在如此严峻的形势下，你被任命为该项目的品质管理经理（PQCM）。\n为了项目的胜利，属于你的伟大品质管理冒险正式拉开了帷幕！",
        ja: "【プロジェクト受注】\n約1,500億円の中東のガス処理プラントのプロジェクトを受注しました。受注のためにコスト・スケジュールをミニマムにし、社内的にも他JOBなどもあって人财も逼迫してますが、そんな中であなたはPQCMに任命されました。\nさぁ、プロジェクトの成功に向けて、あなたの冒険が今始まります！",
        en: "【Project Awarded】\nOur company successfully won the contract for a Middle East gas processing plant project worth approximately 150 billion yen. To secure the bid, the cost and schedule were minimized to the absolute limit. Internally, resources are extremely tight due to other ongoing major jobs. Under these challenging circumstances, you have been appointed as the Project Quality Control Manager (PQCM).\nFor the success of the project, your great QC adventure begins now!"
    },
    selections: [
        {
            id: "start_to_welcome",
            desc: {
                zh: "进入品质管理部",
                ja: "品質管理部へ入る",
                en: "Enter QC Department"
            },
            influence: { zh: "", ja: "", en: "" },
            flags: [],
            score: 0
        }
    ]
};

STORY_DATA["welcome"] = {
    chapter: "welcome",
    title: {
        zh: "部门欢迎",
        ja: "部門歓迎",
        en: "Welcome to QC"
    },
    avatar: "normal",
    npcAvatar: "smiling",
    charName: {
        zh: "胜田前辈",
        ja: "勝田先輩",
        en: "Katsuda-senpai"
    },
    desc: {
        zh: "小Q，欢迎来到品质管理部！我是你的导师胜田。从今天起，你将作为 QC Engineer 接手新项目。项目千头万绪，但只要牢记我们的【QC 7 Golden Rules】，你就一定能克服困难，成为一名伟大的质量经理！现在，让我们开始第一项工作吧！",
        ja: "小Q（キューちゃん）、品質管理部へようこそ！私は君の指導員、勝田だ。今日から君はQCエンジニアとして新プロジェクトを担当してもらう。色々と大変なこともあるが、我々の【QC 7 Golden Rules】をしっかりと胸に刻んでおけば、どんな困難も乗り越え、偉大なクオリティマネージャーになれるはずだ！さあ、最初の業務に取り掛かろう！",
        en: "Q-chan, welcome to the Quality Control Department! I am your mentor Katsuda. From today, you will take over the new project as a Project QC Engineer. A project is complex, but as long as you remember our 【QC 7 Golden Rules】, you will overcome any difficulties and become a great QC Manager! Now, let's start our first task!"
    },
    selections: [
        {
            id: "start_btn",
            desc: {
                zh: "出发！接手新项目",
                ja: "スタート！新プロジェクトを担当する",
                en: "Let's go! Take over the new project"
            },
            influence: { zh: "", ja: "", en: "" },
            flags: [],
            score: 0
        }
    ]
};

// --- 1. GAME CONSTANTS & LEVELS ---
const LEVELS = ["1.1", "1.2", "1.3", "2.1", "3.1", "3.2", "3.3", "3.4", "3.5", "4.1", "4.2", "4.3", "5.1", "5.2", "5.3"];

const CAUSAL_CONNECTIONS = [
    { from: "start", to: "1.1" },
    { from: "1.1", to: "1.2" },
    { from: "1.2", to: "1.3" },
    { from: "1.3", to: "2.1" },
    { from: "2.1", to: "3.1" },
    { from: "3.1", to: "3.2" },
    { from: "3.2", to: "3.3" },
    { from: "3.3", to: "3.4" },
    { from: "3.4", to: "3.5" },
    { from: "3.5", to: "4.1" },
    { from: "4.1", to: "4.2" },
    { from: "4.2", to: "4.3" },
    { from: "4.3", to: "5.1" },
    { from: "5.1", to: "5.2" },
    { from: "5.2", to: "5.3" },
    
    // Branching connections (only drawn if destination is visited/discovered)
    { from: "1.2", to: "3.1-A" },
    { from: "1.2", to: "3.2-A" },
    { from: "1.2", to: "3.2-B" },
    { from: "3.1-A", to: "3.3-A" },
    { from: "3.2-B", to: "3.3-B" },
    { from: "1.2", to: "3.4-A" },
    { from: "3.1-A", to: "4.1-A" },
    { from: "3.2", to: "4.1-B" },
    { from: "3.3-B", to: "4.1-C" },
    { from: "3.4-A", to: "4.1-D" },
    { from: "1.1", to: "4.2-A" },
    { from: "1.1", to: "4.2-B" },
    { from: "1.2", to: "4.2-C" },
    { from: "1.3", to: "4.2-D" },
    { from: "3.1", to: "4.2-E" },
    { from: "3.5", to: "4.2-F" },
    { from: "4.1-D", to: "4.2-G" },
    { from: "4.1", to: "4.2-H" },
    { from: "1.3", to: "4.3-A" },
    { from: "3.2-B", to: "4.3-B" },
    { from: "3.3", to: "4.3-C" },
    { from: "3.4", to: "4.3-D" },
    { from: "1.2", to: "5.1-A" },
    { from: "4.2-F", to: "5.3-A" },
    { from: "4.2-G", to: "5.3-B" },
    { from: "4.3-A", to: "5.3-C" },
    { from: "4.3", to: "5.3-D" },
    { from: "5.1-A", to: "5.3-E" }
];

// --- 2. GAME STATE MANAGEMENT ---
let gameState = {
    currentId: "start",
    lang: "zh",
    visitedNodes: ["start"],
    path: ["start"],
    
    // Custom Expansion properties
    activeFlags: [],
    stageScores: {}, // { "1.1": [10], "4.2": [3, 10] } for averaging
    currentSelectionId: "",
    
    pendingSubChapters: [],
    currentLevelIdx: -1
};

// --- 3. UI ELEMENT REFERENCES ---
const els = {
    logoText: document.getElementById("logoText"),
    treeBtnText: document.getElementById("treeBtnText"),
    restartBtnText: document.getElementById("restartBtnText"),
    gameStage: document.getElementById("gameStage"),
    qchanSprite: document.getElementById("qchanSprite"),
    qchanImg: document.getElementById("qchanImg"),
    npcSprite: document.getElementById("npcSprite"),
    npcImg: document.getElementById("npcImg"),
    charName: document.getElementById("charName"),
    dialogueText: document.getElementById("dialogueText"),
    optionsList: document.getElementById("optionsList"),
    stageBg: document.getElementById("stageBg"),
    endingCard: document.getElementById("endingCard"),
    endingCardImg: document.getElementById("endingCardImg"),
    treeDialog: document.getElementById("treeDialog"),
    treeNodesContainer: document.getElementById("treeNodesContainer"),
    treeSvg: document.getElementById("treeSvg"),
    closeTreeBtn: document.getElementById("closeTreeBtn"),
    treeBtn: document.getElementById("treeBtn"),
    restartBtn: document.getElementById("restartBtn"),
    modalTitle: document.getElementById("modalTitle"),
    modalTip: document.getElementById("modalTip"),
    dialoguePanel: document.getElementById("dialoguePanel"),
    optionsPanel: document.getElementById("optionsPanel"),
    
    // Settlement screen references
    settlementScreen: document.getElementById("settlementScreen"),
    certMainTitle: document.getElementById("certMainTitle"),
    certBadge: document.getElementById("certBadge"),
    certCongrats: document.getElementById("certCongrats"),
    playerNameText: document.getElementById("playerNameText"),
    certEvaluation: document.getElementById("certEvaluation"),
    scoreLabelText: document.getElementById("scoreLabelText"),
    scoreValueText: document.getElementById("scoreValueText"),
    certDateText: document.getElementById("certDateText"),
    settlementRestartText: document.getElementById("settlementRestartText"),
    settlementTreeText: document.getElementById("settlementTreeText"),
    settlementShareText: document.getElementById("settlementShareText"),
    settlementRestartBtn: document.getElementById("settlementRestartBtn"),
    settlementTreeBtn: document.getElementById("settlementTreeBtn"),
    settlementShareBtn: document.getElementById("settlementShareBtn")
};

// Helper: Find selection by its ID across all chapters
function findSelectionById(selId) {
    for (const key in STORY_DATA) {
        const ch = STORY_DATA[key];
        if (ch.selections) {
            const sel = ch.selections.find(s => s.id === selId);
            if (sel) return sel;
        }
    }
    return null;
}

// Helper: Get chapter ID that contains a selection ID
function getChapterIdOfSelection(selId) {
    for (const key in STORY_DATA) {
        const ch = STORY_DATA[key];
        if (ch.selections && ch.selections.some(s => s.id === selId)) {
            return key;
        }
    }
    return "";
}

// --- 4. RENDER GAME STEP ---
function renderGameStep() {
    // Toggle Dragon Quest retro mode for the start screen
    if (gameState.currentId === "start") {
        document.body.classList.add("dq-start-mode");
    } else {
        document.body.classList.remove("dq-start-mode");
    }

    // Hide settlement screen by default during gameplay
    els.settlementScreen.classList.add("hidden");
    els.dialoguePanel.classList.remove("hidden");
    els.optionsPanel.classList.remove("hidden");
    
    // Confetti cleanup if we are not cleared
    if (confettiInterval) {
        cancelAnimationFrame(confettiInterval);
        confettiInterval = null;
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }

    if (gameState.currentId === "influence") {
        renderInfluenceStep();
        return;
    }

    const node = STORY_DATA[gameState.currentId];
    if (!node) return;

    // Clean Animations & States
    els.gameStage.classList.remove("showing-ending");
    els.qchanSprite.className = "character-sprite sprite-left hidden";
    els.npcSprite.className = "character-sprite sprite-right hidden";
    els.endingCard.classList.add("hidden");
    els.stageBg.style.backgroundColor = "#e3f2fd";

    // Show image illustration / cover art if provided
    if (node.image) {
        els.gameStage.classList.add("showing-ending");
        els.endingCard.classList.remove("hidden");
        els.endingCardImg.src = node.image;
    }

    // Q-chan Avatar
    if (node.avatar && node.avatar !== 'hidden') {
        els.qchanImg.src = `assets/qchan_${node.avatar}.png`;
        els.qchanSprite.classList.remove("hidden");
        setTimeout(() => els.qchanSprite.classList.add("active"), 50);

        if (node.avatar === 'panicked') {
            els.qchanSprite.classList.add("sprite-shake");
        } else if (node.avatar === 'happy' || node.avatar === 'crying') {
            els.qchanSprite.classList.add("sprite-bounce");
        }
    }

    // NPC Avatar
    if (node.npcAvatar && node.npcAvatar !== 'hidden') {
        els.npcImg.src = `assets/katsuda_${node.npcAvatar}.png`;
        els.npcSprite.classList.remove("hidden");
        setTimeout(() => els.npcSprite.classList.add("active"), 50);
    }

    // Header Name & Desc
    els.charName.textContent = node.charName[gameState.lang] || "???";
    
    const descText = node.desc[gameState.lang] || "";
    els.dialogueText.innerHTML = descText.replace(/\n/g, "<br>");

    // Render selections
    els.optionsList.innerHTML = "";
    if (node.selections && node.selections.length > 0) {
        node.selections.forEach(sel => {
            const btn = document.createElement("button");
            if (gameState.currentId === "start") {
                btn.className = "dq-pixel-start-btn";
                btn.textContent = "START";
            } else {
                btn.className = "option-btn";
                btn.textContent = sel.desc[gameState.lang];
            }
            btn.addEventListener("click", () => selectChoice(sel.id));
            els.optionsList.appendChild(btn);
        });
    }
}

// Special render for Selection Influence slide
function renderInfluenceStep() {
    const sel = findSelectionById(gameState.currentSelectionId);
    if (!sel) return;

    els.gameStage.classList.remove("showing-ending");
    els.qchanSprite.className = "character-sprite sprite-left hidden";
    els.npcSprite.className = "character-sprite sprite-right hidden";
    els.endingCard.classList.add("hidden");
    els.stageBg.style.backgroundColor = "#fff3cd"; // Orange pastel background for warnings/effects

    // Show mentor or Q-chan reaction based on selection score
    if (sel.score >= 10) {
        els.qchanImg.src = `assets/qchan_happy.png`;
        els.qchanSprite.classList.remove("hidden");
        els.qchanSprite.classList.add("sprite-bounce");
        els.npcImg.src = `assets/katsuda_smiling.png`;
        els.npcSprite.classList.remove("hidden");
    } else {
        els.qchanImg.src = `assets/qchan_thinking.png`;
        els.qchanSprite.classList.remove("hidden");
        // Calm thinking state - no sprite-shake animation added
        els.npcImg.src = `assets/katsuda_strict.png`;
        els.npcSprite.classList.remove("hidden");
    }
    setTimeout(() => {
        els.qchanSprite.classList.add("active");
        els.npcSprite.classList.add("active");
    }, 50);

    const charNames = {
        zh: "选择后果",
        ja: "選択の影響",
        en: "Selection Consequence"
    };
    els.charName.textContent = charNames[gameState.lang];

    const rawText = sel.influence[gameState.lang] || "";
    els.dialogueText.innerHTML = rawText.replace(/\n/g, "<br>");

    // Single Next Action Button
    els.optionsList.innerHTML = "";
    const nextBtn = document.createElement("button");
    nextBtn.className = "option-btn";
    
    const nextLabels = {
        zh: "继续",
        ja: "次へ",
        en: "Continue"
    };
    nextBtn.textContent = nextLabels[gameState.lang];
    nextBtn.addEventListener("click", () => nextStoryStep());
    els.optionsList.appendChild(nextBtn);
}

// --- 5. GAME ACTIONS & ENGINE FLOW ---
function selectChoice(selectionId) {
    if (selectionId === "start_to_welcome") {
        gameState.currentId = "welcome";
        if (!gameState.visitedNodes.includes("welcome")) {
            gameState.visitedNodes.push("welcome");
        }
        gameState.path.push("welcome");
        renderGameStep();
        return;
    }

    if (selectionId === "start_btn") {
        // Welcomed, transition to the first level
        gameState.currentLevelIdx = 0;
        const firstLevel = LEVELS[0];
        gameState.currentId = firstLevel;
        
        if (!gameState.visitedNodes.includes(firstLevel)) {
            gameState.visitedNodes.push(firstLevel);
        }
        gameState.path.push(firstLevel);
        
        renderGameStep();
        return;
    }

    const sel = findSelectionById(selectionId);
    if (!sel) return;

    // Record score
    const chId = getChapterIdOfSelection(selectionId);
    const baseLevel = chId.split('-')[0];
    if (!gameState.stageScores[baseLevel]) {
        gameState.stageScores[baseLevel] = [];
    }
    gameState.stageScores[baseLevel].push(sel.score);

    // Apply flags
    if (sel.flags) {
        sel.flags.forEach(fl => {
            if (!gameState.activeFlags.includes(fl)) {
                gameState.activeFlags.push(fl);
            }
        });
    }

    // Track path
    gameState.path.push(selectionId);
    
    // Check if the choice has branching flags that lead to another chapter (excluding Game Over)
    const hasBranchingFlags = sel.flags && sel.flags.some(fl => fl !== "GameOver" && fl !== "Game Over");

    // Display influence page if text exists and does not lead to a future chapter branch
    const influenceText = sel.influence[gameState.lang] || "";
    if (influenceText.trim().length > 0 && !hasBranchingFlags) {
        gameState.currentId = "influence";
        gameState.currentSelectionId = selectionId;
        renderGameStep();
    } else {
        nextStoryStep();
    }
}

// Move to next story node after choice/influence
function nextStoryStep() {
    // Check if the last selection triggered GameOver
    const lastSel = findSelectionById(gameState.path[gameState.path.length - 1]);
    if (lastSel && lastSel.flags && (lastSel.flags.includes("GameOver") || lastSel.flags.includes("Game Over"))) {
        showSettlement(true);
        return;
    }

    // Play next sub-chapter if any in queue
    if (gameState.pendingSubChapters.length > 0) {
        const nextSub = gameState.pendingSubChapters.shift();
        gameState.currentId = nextSub;
        if (!gameState.visitedNodes.includes(nextSub)) {
            gameState.visitedNodes.push(nextSub);
        }
        gameState.path.push(nextSub);
        renderGameStep();
        return;
    }

    // Advance Level
    gameState.currentLevelIdx += 1;
    if (gameState.currentLevelIdx >= LEVELS.length) {
        // Finished all levels successfully!
        showSettlement(false);
        return;
    }

    const level = LEVELS[gameState.currentLevelIdx];
    
    // Check if there are active sub-chapters for this level
    // Sort them alphabetically to handle concurrency (e.g. 4.2-A, 4.2-C)
    const activeSubs = gameState.activeFlags
        .filter(f => f.startsWith(level + '-'))
        .sort((a, b) => a.localeCompare(b));

    if (activeSubs.length > 0) {
        gameState.pendingSubChapters = activeSubs;
        const firstSub = gameState.pendingSubChapters.shift();
        gameState.currentId = firstSub;
        if (!gameState.visitedNodes.includes(firstSub)) {
            gameState.visitedNodes.push(firstSub);
        }
        gameState.path.push(firstSub);
        renderGameStep();
    } else {
        // Play default chapter
        if (STORY_DATA[level]) {
            gameState.currentId = level;
            if (!gameState.visitedNodes.includes(level)) {
                gameState.visitedNodes.push(level);
            }
            gameState.path.push(level);
            renderGameStep();
        } else {
            // Level data missing (safety skip)
            nextStoryStep();
        }
    }
}

// --- 6. TIME TRAVEL & ROLLBACK ENGINE ---
function timeTravelTo(nodeId) {
    if (!gameState.visitedNodes.includes(nodeId)) return;
    
    gameState.currentId = nodeId;
    
    // Truncate path history back to this chapter ID
    const index = gameState.path.indexOf(nodeId);
    if (index !== -1) {
        gameState.path = gameState.path.slice(0, index + 1);
    } else {
        gameState.path = [nodeId];
    }
    
    // Recalculate state parameters based on remaining selection IDs in truncated path
    gameState.activeFlags = [];
    gameState.stageScores = {};
    gameState.pendingSubChapters = [];
    
    gameState.path.forEach(item => {
        if (item.includes('.')) {
            const sel = findSelectionById(item);
            if (sel) {
                // Add flags
                if (sel.flags) {
                    sel.flags.forEach(fl => {
                        if (!gameState.activeFlags.includes(fl)) {
                            gameState.activeFlags.push(fl);
                        }
                    });
                }
                // Record scores
                const chId = getChapterIdOfSelection(item);
                const baseLevel = chId.split('-')[0];
                if (!gameState.stageScores[baseLevel]) {
                    gameState.stageScores[baseLevel] = [];
                }
                gameState.stageScores[baseLevel].push(sel.score);
            }
        }
    });

    // Set level index
    if (nodeId === "start" || nodeId === "welcome") {
        gameState.currentLevelIdx = -1;
    } else {
        const baseLevel = nodeId.split('-')[0];
        gameState.currentLevelIdx = LEVELS.indexOf(baseLevel);
    }

    // Close tree dialog
    els.treeDialog.close();
    renderGameStep();
}

// Restart entire game
function restartGame() {
    gameState.currentId = "start";
    gameState.path = ["start"];
    gameState.activeFlags = [];
    gameState.stageScores = {};
    gameState.pendingSubChapters = [];
    gameState.currentLevelIdx = -1;
    
    // Visited nodes are preserved to retain discovered story tree maps!
    renderGameStep();
}

// --- 7. SETTLEMENT SCREEN & CERTIFICATE GENERATION ---
function showSettlement(isGameOver) {
    els.dialoguePanel.classList.add("hidden");
    els.optionsPanel.classList.add("hidden");
    els.settlementScreen.classList.remove("hidden");

    // Dynamic certificate avatars depending on Game Over state
    const certQchan = document.getElementById("certQchanAvatar");
    const certKatsuda = document.getElementById("certKatsudaAvatar");
    if (certQchan && certKatsuda) {
        if (isGameOver) {
            certQchan.src = "assets/qchan_crying.png";
            certKatsuda.src = "assets/katsuda_strict.png";
        } else {
            certQchan.src = "assets/qchan_happy.png";
            certKatsuda.src = "assets/katsuda_smiling.png";
        }
    }

    let totalScore = 0;
    
    // Score Calculation: Average scores for concurrent branches, default is 10
    LEVELS.forEach(level => {
        const scores = gameState.stageScores[level];
        if (scores && scores.length > 0) {
            const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
            totalScore += avg;
        } else {
            // Default perfect score if level was skipped/passed without scoring
            totalScore += 10;
        }
    });

    totalScore = Math.min(150, Math.round(totalScore));

    // Determine ending type
    let endingKey = "Standard PQCM";
    if (isGameOver) {
        endingKey = "Game Over";
    } else if (totalScore === 150) {
        endingKey = "Perfect PQCM";
    } else if (totalScore >= 131) {
        endingKey = "Great PQCM";
    } else if (totalScore >= 101) {
        endingKey = "Standard PQCM";
    } else {
        endingKey = "To be enhanced";
    }

    const ending = ENDING_DATA[endingKey];
    
    // Render Certificate Details
    const labels = {
        zh: {
            certCongrats: "恭喜新进质量经理：",
            scoreLabel: "最终得分：",
            seal: "胜田导师批准",
            date: "颁发日期：",
            restart: "重新开始",
            tree: "剧情树",
            share: "生成分享图"
        },
        ja: {
            certCongrats: "新任クオリティマネージャー：",
            scoreLabel: "最終得点：",
            seal: "勝田指導官承認",
            date: "授与日：",
            restart: "リスタート",
            tree: "ストーリーツリー",
            share: "認定証を保存"
        },
        en: {
            certCongrats: "Congratulations to new QC Manager:",
            scoreLabel: "Final Score:",
            seal: "APPROVED BY KATSUDA",
            date: "Date Issued:",
            restart: "Restart",
            tree: "Story Tree",
            share: "Share Certificate"
        }
    };

    els.certMainTitle.textContent = ending.title[gameState.lang];
    els.certBadge.textContent = `${endingKey} (Score: ${ending.score_range})`;
    els.certCongrats.textContent = labels[gameState.lang].certCongrats;
    els.certEvaluation.textContent = ending.desc[gameState.lang];
    
    els.scoreLabelText.textContent = labels[gameState.lang].scoreLabel;
    els.scoreValueText.textContent = `${totalScore} / 150`;
    
    const today = new Date().toISOString().split('T')[0];
    els.certDateText.textContent = `${labels[gameState.lang].date} ${today}`;

    // Update buttons language
    els.settlementRestartText.textContent = labels[gameState.lang].restart;
    els.settlementTreeText.textContent = labels[gameState.lang].tree;
    els.settlementShareText.textContent = labels[gameState.lang].share;

    // Trigger confetti if good ending
    if (!isGameOver && totalScore >= 101) {
        gameState.currentId = "happy_clear"; // For confetti loop check
        triggerConfetti();
    }
}

// --- 8. PLOT TREE RENDER ENGINE (DYNAMIC SVG & DOM) ---
function buildPlotTreeUI() {
    els.treeNodesContainer.innerHTML = "";
    
    // Generate Tree Rows based on Levels
    LEVELS.forEach(level => {
        const row = document.createElement("div");
        row.className = "tree-chapter-row";
        
        const titleDiv = document.createElement("div");
        titleDiv.className = "tree-chapter-title";
        titleDiv.textContent = `Stage ${level}`;
        row.appendChild(titleDiv);
        
        const listDiv = document.createElement("div");
        listDiv.className = "tree-nodes-list";
        
        // Find default node for this level
        const defaultNode = { id: level, label: STORY_DATA[level] ? STORY_DATA[level].title : { zh: `关卡 ${level}`, ja: `ステージ ${level}`, en: `Stage ${level}` } };
        
        // Find all sub-chapters for this level
        const nodesList = [defaultNode];
        for (const key in STORY_DATA) {
            if (key.startsWith(level + '-')) {
                nodesList.push({ id: key, label: STORY_DATA[key].title });
            }
        }

        nodesList.forEach(nodeData => {
            const nodeDiv = document.createElement("div");
            nodeDiv.className = "tree-node";
            nodeDiv.id = `tree-node-${nodeData.id}`;
            nodeDiv.textContent = nodeData.label[gameState.lang];
            
            const isVisited = gameState.visitedNodes.includes(nodeData.id);
            const isActive = gameState.currentId === nodeData.id;
            
            if (nodeData.id.includes('-')) {
                nodeDiv.classList.add("bad_ending"); // Red style for branches
            }
            
            if (isActive) {
                nodeDiv.classList.add("active");
                nodeDiv.classList.remove("locked");
            } else if (isVisited) {
                nodeDiv.classList.add("visited");
                nodeDiv.classList.remove("locked");
                nodeDiv.addEventListener("click", () => timeTravelTo(nodeData.id));
            } else {
                nodeDiv.classList.add("locked");
                nodeDiv.textContent = "🔒 locked";
            }
            
            listDiv.appendChild(nodeDiv);
        });
        
        row.appendChild(listDiv);
        els.treeNodesContainer.appendChild(row);
    });

    // Draw SVG Connections
    setTimeout(drawTreeConnections, 100);
}

function drawTreeConnections() {
    const svg = els.treeSvg;
    svg.innerHTML = "";
    
    const svgRect = svg.getBoundingClientRect();

    CAUSAL_CONNECTIONS.forEach(conn => {
        const fromEl = document.getElementById(`tree-node-${conn.from}`);
        const toEl = document.getElementById(`tree-node-${conn.to}`);
        
        // Only draw connection if both nodes exist in the tree DOM
        if (fromEl && toEl) {
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();
            
            const x1 = (fromRect.left + fromRect.width / 2) - svgRect.left;
            const y1 = (fromRect.top + fromRect.height / 2) - svgRect.top;
            
            const x2 = (toRect.left + toRect.width / 2) - svgRect.left;
            const y2 = (toRect.top + toRect.height / 2) - svgRect.top;
            
            const isPathActive = gameState.path.includes(conn.from) && gameState.path.includes(conn.to);
            const isConnectionVisited = gameState.visitedNodes.includes(conn.from) && gameState.visitedNodes.includes(conn.to);
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            let d;
            if (Math.abs(x1 - x2) < 5) {
                d = `M ${x1} ${y1} L ${x2} ${y2}`;
            } else {
                const controlY = y1 + (y2 - y1) / 2;
                d = `M ${x1} ${y1} C ${x1} ${controlY}, ${x2} ${controlY}, ${x2} ${y2}`;
            }
            
            path.setAttribute("d", d);
            
            if (isPathActive) {
                path.setAttribute("stroke", "#ff7ea5");
                path.setAttribute("stroke-width", "4");
            } else if (isConnectionVisited) {
                path.setAttribute("stroke", "#a2d2ff");
                path.setAttribute("stroke-width", "3");
            } else {
                path.setAttribute("stroke", "#cccccc");
                path.setAttribute("stroke-width", "2");
                path.setAttribute("stroke-dasharray", "5,5");
            }
            
            path.setAttribute("fill", "none");
            svg.appendChild(path);
        }
    });
}

// Dialog light-dismiss helper
if (!('closedBy' in HTMLDialogElement.prototype)) {
    els.treeDialog.addEventListener('click', (event) => {
        if (event.target !== els.treeDialog) return;
        const rect = els.treeDialog.getBoundingClientRect();
        const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) {
            els.treeDialog.close();
        }
    });
}

// --- 9. CONFETTI ANIMATION SYSTEM ---
let confettiInterval = null;
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let particles = [];

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfettiCanvas);
resizeConfettiCanvas();

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = Math.random() * -confettiCanvas.height;
        this.size = Math.random() * 8 + 6;
        this.color = ["#ff7ea5", "#a2d2ff", "#ffd166", "#06d6a0", "#c8b6ff"][Math.floor(Math.random() * 5)];
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 4 + 4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > confettiCanvas.height) {
            this.y = -20;
            this.x = Math.random() * confettiCanvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function triggerConfetti() {
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push(new ConfettiParticle());
    }
    
    if (confettiInterval) cancelAnimationFrame(confettiInterval);
    
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        // Stop animation if we leave happy ending
        if (gameState.currentId !== "happy_clear") {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            return;
        }
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        confettiInterval = requestAnimationFrame(animate);
    }
    
    animate();
}

// --- 10. TRANSLATION ENGINE & UI ACTIONS ---
function switchLanguage(newLang) {
    gameState.lang = newLang;
    
    const uiText = {
        zh: {
            logo: "大话QC：伟大质量经理的诞生",
            tree: "剧情树",
            restart: "重启",
            modalTitle: "🌳 剧情回忆树 (Story Memory Tree)",
            modalTip: "您可以点击任何已解锁的节点，时光倒流回到那个时刻重新进行决策！"
        },
        ja: {
            logo: "QC大冒険：偉大なる品質管理マネージャーへの道",
            tree: "ストーリーツリー",
            restart: "リスタート",
            modalTitle: "🌳 ストーリー回想ツリー (Story Memory Tree)",
            modalTip: "アンロックされたノードをクリックすると、過去に戻って選択をやり直せます！"
        },
        en: {
            logo: "Great PQCM Adventure",
            tree: "Story Tree",
            restart: "Restart",
            modalTitle: "🌳 Story Memory Tree",
            modalTip: "Click any unlocked node to travel back in time and re-choose your path!"
        }
    };

    els.logoText.textContent = uiText[newLang].logo;
    els.treeBtnText.textContent = uiText[newLang].tree;
    els.restartBtnText.textContent = uiText[newLang].restart;
    els.modalTitle.textContent = uiText[newLang].modalTitle;
    els.modalTip.textContent = uiText[newLang].modalTip;

    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === newLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    if (els.settlementScreen.classList.contains("hidden")) {
        renderGameStep();
    } else {
        // Update settlement texts on lang change
        const flags = findSelectionById(gameState.path[gameState.path.length - 1])?.flags || [];
        const isGameOver = flags.includes("GameOver") || flags.includes("Game Over");
        showSettlement(isGameOver);
    }
}

// Share certificate as PNG using html2canvas
function shareCertificate() {
    const btn = els.settlementShareBtn;
    const oldText = els.settlementShareText.textContent;
    
    const loadingLabels = {
        zh: "生成中...",
        ja: "保存中...",
        en: "Generating..."
    };
    els.settlementShareText.textContent = loadingLabels[gameState.lang];
    btn.disabled = true;

    // Use html2canvas to capture settlement card
    html2canvas(document.getElementById("settlementCard"), {
        backgroundColor: null,
        scale: 2, // Retain high-res quality
        useCORS: true,
        logging: false
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = `PQCM_Certificate_${gameState.lang}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        
        btn.disabled = false;
        els.settlementShareText.textContent = oldText;
    }).catch(err => {
        console.error("Screenshot generation failed:", err);
        btn.disabled = false;
        els.settlementShareText.textContent = oldText;
    });
}

// --- 11. INITIALIZE EVENT LISTENERS ---
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => switchLanguage(btn.getAttribute("data-lang")));
});

els.treeBtn.addEventListener("click", () => {
    buildPlotTreeUI();
    els.treeDialog.showModal();
});

els.closeTreeBtn.addEventListener("click", () => els.treeDialog.close());
els.restartBtn.addEventListener("click", restartGame);

// Settlement screen actions
els.settlementRestartBtn.addEventListener("click", restartGame);
els.settlementTreeBtn.addEventListener("click", () => {
    buildPlotTreeUI();
    els.treeDialog.showModal();
});
els.settlementShareBtn.addEventListener("click", shareCertificate);

// Load the start welcome node
renderGameStep();
