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
    image: "assets/qc_quest_title.jpg?v=1.0.7",
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
        zh: "K前辈",
        ja: "K先輩",
        en: "K-senpai"
    },
    desc: {
        zh: "小Q，欢迎来到品质管理部！我是你的导师 Mr.K。从今天起，你将作为 PQCM 接手新项目。项目千头万绪，但只要牢记我们的【7 Golden Rules for PQCM】，你就一定能克服困难，成为一名伟大的 PQCM！现在，让我们开始第一项工作吧！",
        ja: "Qちゃん、私は君の指導員Mr.Kだ。今日から君はPQCMとして新プロジェクトを担当してもらう。色々と大変なこともあるが、我々の【7 Golden Rules for PQCM】をしっかりと胸に刻んでおけば、どんな困難も乗り越え、偉大なPQCMになれるはずだ！さあ、最初の業務に取り掛かろう！",
        en: "Q-chan, welcome to the Quality Control Department! I am your mentor Mr.K. From today, you will take over the new project as a PQCM. A project is complex, but as long as you remember our 【7 Golden Rules for PQCM】, you will overcome any difficulties and become a great PQCM! Now, let's start our first task!"
    },
    selections: [
        {
            id: "start_btn",
            desc: {
                zh: "新项目，启动！",
                ja: "新プロジェクト、スタート！",
                en: "New project, start!"
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
    certSeal: document.getElementById("certSeal"),
    settlementRestartText: document.getElementById("settlementRestartText"),
    settlementTreeText: document.getElementById("settlementTreeText"),
    settlementShareText: document.getElementById("settlementShareText"),
    settlementRestartBtn: document.getElementById("settlementRestartBtn"),
    settlementTreeBtn: document.getElementById("settlementTreeBtn"),
    settlementShareBtn: document.getElementById("settlementShareBtn"),
    settlementExplanationBtn: document.getElementById("settlementExplanationBtn"),
    settlementExplanationText: document.getElementById("settlementExplanationText"),
    explanationScreen: document.getElementById("explanationScreen"),
    explanationTitle: document.getElementById("explanationTitle"),
    explanationList: document.getElementById("explanationList"),
    explanationBackBtn: document.getElementById("explanationBackBtn"),
    explanationBackText: document.getElementById("explanationBackText")
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
    els.explanationScreen.classList.add("hidden");
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
        els.npcImg.src = `assets/k_${node.npcAvatar}.png`;
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

    // Update progress road visualization
    updateProgressRoad();
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
        els.npcImg.src = `assets/k_smiling.png`;
        els.npcSprite.classList.remove("hidden");
    } else {
        els.qchanImg.src = `assets/qchan_thinking.png`;
        els.qchanSprite.classList.remove("hidden");
        // Calm thinking state - no sprite-shake animation added
        els.npcImg.src = `assets/k_strict.png`;
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
            let nextSub = level;

            // Randomness logic: detour default/good levels 4.1, 4.2, 4.3, and 5.3 to sudden incidents (75% probability)
            if (["4.1", "4.2", "4.3", "5.3"].includes(level) && Math.random() < 0.75) {
                // Dynamically find all available random incidents for this level (e.g., 4.2-R1, 4.2-R2...)
                const availableIncidents = [];
                let idx = 1;
                while (STORY_DATA[level + "-R" + idx]) {
                    availableIncidents.push(level + "-R" + idx);
                    idx++;
                }

                if (availableIncidents.length > 0) {
                    const randomIncidentId = availableIncidents[Math.floor(Math.random() * availableIncidents.length)];
                    // Queue default level to play immediately after resolving the detour incident
                    gameState.pendingSubChapters.unshift(level);
                    nextSub = randomIncidentId;
                }
            }

            gameState.currentId = nextSub;
            if (!gameState.visitedNodes.includes(nextSub)) {
                gameState.visitedNodes.push(nextSub);
            }
            gameState.path.push(nextSub);
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

    // Hide progress road on settlement screen
    const road = document.getElementById("progressRoadContainer");
    if (road) road.classList.add("hidden");

    // Dynamic certificate avatars depending on Game Over state
    const certQchan = document.getElementById("certQchanAvatar");
    const certK = document.getElementById("certKAvatar");
    if (certQchan && certK) {
        if (isGameOver) {
            certQchan.src = "assets/qchan_crying.png";
            certK.src = "assets/k_strict.png";
        } else {
            certQchan.src = "assets/qchan_happy.png";
            certK.src = "assets/k_smiling.png";
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
            playerName: "小Q (Q-chan)",
            scoreLabel: "最终得分：",
            seal: "Mr.K导师批准",
            date: "颁发日期：",
            restart: "重新开始",
            tree: "剧情树",
            share: "生成分享图",
            explanationBtn: "观看解说"
        },
        ja: {
            certCongrats: "新任クオリティマネージャー：",
            playerName: "Qちゃん",
            scoreLabel: "最終得点：",
            seal: "Mr.K指導官承認",
            date: "授与日：",
            restart: "リスタート",
            tree: "ストーリーツリー",
            share: "認定証を保存",
            explanationBtn: "解説を見る"
        },
        en: {
            certCongrats: "Congratulations to new QC Manager:",
            playerName: "Q-chan",
            scoreLabel: "Final Score:",
            seal: "APPROVED BY MR.K",
            date: "Date Issued:",
            restart: "Restart",
            tree: "Story Tree",
            share: "Share Certificate",
            explanationBtn: "View Explanations"
        }
    };

    els.certMainTitle.textContent = ending.title[gameState.lang];
    els.certBadge.textContent = `${endingKey} (Score: ${ending.score_range})`;
    els.certCongrats.textContent = labels[gameState.lang].certCongrats;
    els.playerNameText.textContent = labels[gameState.lang].playerName;
    els.certEvaluation.textContent = ending.desc[gameState.lang];
    
    els.scoreLabelText.textContent = labels[gameState.lang].scoreLabel;
    els.scoreValueText.textContent = `${totalScore} / 150`;
    
    const today = new Date().toISOString().split('T')[0];
    els.certDateText.textContent = `${labels[gameState.lang].date} ${today}`;
    els.certSeal.textContent = labels[gameState.lang].seal;

    // Update buttons language
    els.settlementRestartText.textContent = labels[gameState.lang].restart;
    els.settlementTreeText.textContent = labels[gameState.lang].tree;
    els.settlementShareText.textContent = labels[gameState.lang].share;
    els.settlementExplanationText.textContent = labels[gameState.lang].explanationBtn;

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
els.settlementExplanationBtn.addEventListener("click", showExplanationsPage);
els.explanationBackBtn.addEventListener("click", hideExplanationsPage);

// --- 12. PROGRESS ROAD VISUALIZATION ---
function updateProgressRoad() {
    const container = document.getElementById("progressRoadContainer");
    if (!container) return;

    // Hide road on start, welcome, or if settlement screen is showing
    if (gameState.currentId === "start" || 
        gameState.currentId === "welcome" || 
        !els.settlementScreen.classList.contains("hidden")) {
        container.classList.add("hidden");
        return;
    }

    let targetId = gameState.currentId;
    if (targetId === "influence") {
        targetId = gameState.currentSelectionId || "";
    }

    // Try to parse chapter number from node ID (e.g. "1.1" -> 1, "3.1-A" -> 3)
    const match = targetId.match(/^([1-5])/);
    if (!match) {
        container.classList.add("hidden");
        return;
    }

    container.classList.remove("hidden");
    const currentChapter = parseInt(match[1], 10);

    // Update milestones styling
    const milestones = container.querySelectorAll(".milestone");
    milestones.forEach(stone => {
        const ch = parseInt(stone.getAttribute("data-chapter"), 10);
        stone.classList.remove("active", "passed");
        if (ch === currentChapter) {
            stone.classList.add("active");
        } else if (ch < currentChapter) {
            stone.classList.add("passed");
        }
    });

    // Position mini Q-chan
    // There are 5 milestones, positioned at 0%, 25%, 50%, 75%, 100% of the road width
    const percent = (currentChapter - 1) * 25;
    const miniQ = document.getElementById("miniQchan");
    if (miniQ) {
        miniQ.style.left = `${percent}%`;
    }
}

// --- 13. EXPLANATION PAGE LOGIC & DATA ---
const EXPLANATIONS = {
    "1.1.1": {
        zh: "合同文件中的要求（特别是带有“shall”字样的条款）是必须遵守的强制要求，无法擅自更改。但在工程中，必然存在向业主提交偏差申请（Deviation）或澄清说明（Clarification）的沟通流程。因此，对于那些死守反倒会导致项目混乱的苛刻合同条款，应尽早与业主及项目内部协商达成一致的解决办法。",
        ja: "契約図書の要求事項（特に”shall”で書かれている個所）は必須の要求なので、勝手に変更することはできませんが、必ずDeviationやClarificationなど客先と確認するプロトコールがあるはずなので、遵守することが余計にプロジェクトを混乱させるような要求事項は、早めに客先およびプロジェクト内で対応方法を合意しましょう。",
        en: "Contractual requirements (especially those marked with \"shall\") are mandatory and cannot be changed arbitrarily. However, there is always a protocol like Deviation or Clarification to align with the client. For requirements where strict compliance would unnecessarily disrupt the project, we should agree on a resolution with both the client and the internal project team early on."
    },
    "1.1.3": {
        zh: "合同文件中的要求（特别是带有“shall”字样的条款）是必须遵守的强制要求，无法擅自更改。但在工程中，必然存在向业主提交偏差申请（Deviation）或澄清说明（Clarification）的沟通流程。因此，对于那些死守反倒会导致项目混乱的苛刻合同条款，应尽早与业主及项目内部协商达成一致的解决办法。",
        ja: "契約図書の要求事項（特に”shall”で書かれている個所）は必須の要求なので、勝手に変更することはできませんが、必ずDeviationやClarificationなど客先と確認するプロトコールがあるはずなので、遵守することが余計にプロジェクトを混乱させるような要求事項は、早めに客先およびプロジェクト内で対応方法を合意しましょう。",
        en: "Contractual requirements (especially those marked with \"shall\") are mandatory and cannot be changed arbitrarily. However, there is always a protocol like Deviation or Clarification to align with the client. For requirements where strict compliance would unnecessarily disrupt the project, we should agree on a resolution with both the client and the internal project team early on."
    },
    "1.2.1": {
        zh: "组建一个便于自己管理的高效且强有力的团队，是 PQCM 在项目初期的关键任务。然而，现实中很难在刚开始就组建起百分之百完美的团队。如何在有限的时间内高效召集人手（匹配的能力与人数），并构建起合理的组织结构进行有效运营，最能体现 PQCM 的管理水平。",
        ja: "自分が運営しやすい強固なチームを組織するのは、PQCMにとって初期の重要なタスクですが、100点満点のチームは中々できません。\nそんな時に、どうやってタイムリーに人財（能力×人数）を集めるかと、それをどういう組織にして効果的に運営するかがPQCMの腕の見せ所です。",
        en: "Building a strong team that is easy to manage is a key early task for a PQCM, but a 100-point perfect team is rarely possible from the start. How to timely gather resources (capability x headcount) and structure them into an effective organization is where the PQCM's true skills are tested."
    },
    "1.2.2": {
        zh: "组建一个便于自己管理的高效且强有力的团队，是 PQCM 在项目初期的关键任务。然而，现实中很难在刚开始就组建起百分之百完美的团队。如何在有限的时间内高效召集人手（匹配的能力与人数），并构建起合理的组织结构进行有效运营，最能体现 PQCM 的管理水平。",
        ja: "自分が運営しやすい強固なチームを組織するのは、PQCMにとって初期の重要なタスクですが、100点満点のチームは中々できません。\nそんな時に、どうやってタイムリーに人財（能力×人数）を集めるかと、それをどういう組織にして効果的に運営するかがPQCMの腕の見せ所です。",
        en: "Building a strong team that is easy to manage is a key early task for a PQCM, but a 100-point perfect team is rarely possible from the start. How to timely gather resources (capability x headcount) and structure them into an effective organization is where the PQCM's true skills are tested."
    },
    "1.3.2": {
        zh: "虽然我们需要尊重项目管理部（PMT）分配的预算，但 PQCM 的核心任务是带领团队确保质量合格的设备和材料能够按时运抵现场或模块场地。因此，即使需要与 PMT 沟通协商追加必要的工时预算，也必须确保质量控制任务的切实履行。",
        ja: "PMTから配賦されるBudgetはリスペクトする必要はありますが、PQCMのタスクは、チームを指揮して品質の担保された資機材をタイムリーに現場/モジュールヤードに届けることなので、それに必要なMHはPMTの合意を得ながら追加してでも、確実にタスクをこなさなければなりません。",
        en: "While we should respect the budget allocated by the PMT, the PQCM's primary task is to lead the team to deliver quality-assured equipment and materials to the site or module yard on time. Therefore, even if we must negotiate with the PMT to add necessary man-hour budget, we must secure the execution of our tasks."
    },
    "3.1-A.1": {
        zh: "没有足够的人手，业务便无法开展，但如果不认真审查应当审查的图纸也是极大的失职。如果从项目一开始就强行让有限的团队成员过度加班，会严重影响后续团队的长久运营。因此，应当及时配备业务所需的资源，并根据风险大小实施高效的团队运营。",
        ja: "必要なチーム員が居ないと業務が進みません、かといってReviewすべき図書をReviewしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、リスクに応じた効率的なチーム運営を心がけましょう。",
        en: "Without necessary team members, work cannot proceed; however, skipping document reviews is a major issue. Forcing limited team members to overwork from the start will hurt team dynamics later. You should secure necessary resources in a timely manner while aiming for risk-based, efficient team operations."
    },
    "3.1-A.2": {
        zh: "没有足够的人手，业务便无法开展，但如果不认真审查应当审查的图纸也是极大的失职。如果从项目一开始就强行让有限的团队成员过度加班，会严重影响后续团队的长久运营。因此，应当及时配备业务所需的资源，并根据风险大小实施高效的团队运营。",
        ja: "必要なチーム員が居ないと業務が進みません、かといってReviewすべき図書をReviewしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、リスクに応じた効率的なチーム運営を心がけましょう。",
        en: "Without necessary team members, work cannot proceed; however, skipping document reviews is a major issue. Forcing limited team members to overwork from the start will hurt team dynamics later. You should secure necessary resources in a timely manner while aiming for risk-based, efficient team operations."
    },
    "3.1.1": {
        zh: "标准的流程通常是先由项目管理部（PMT）委托对询价书（Requisition）模板进行审查，随后由各专业部委托对具体的询价书进行个别审查。因此，首先应当将项目共性的要求纳入询价书的空白模板中，同时提炼出质量控制（QC）的特殊要求并在团队内共享，以便在个别审查时能够毫无遗漏地将特殊要求融入其中。",
        ja: "Req.のFormat ReviewがPMTから依頼され、それを用いて個別のReq. Reviewが専門部から依頼されるのが通常の流れなので、まずはプロジェクト共通の要求事項はReq.のBlank Formに盛り込んでもらい、並行してQCとして特殊要求を取り出してチーム内で共有した上で、個別のReq. Review時にもれなく特殊要求を盛り込むようにしましょう。",
        en: "The standard workflow is that the PMT requests a Blank Form/Template Review first, followed by individual Requisition Reviews from engineering disciplines. Thus, common project requirements should first be incorporated into the Blank Requisition Form. Concurrently, QC special requirements should be extracted and shared in the team so they can be seamlessly built into individual discipline reviews."
    },
    "3.1.2": {
        zh: "标准的流程通常是先由项目管理部（PMT）委托对询价书（Requisition）模板进行审查，随后由各专业部委托对具体的询价书进行个别审查。因此，首先应当将项目共性的要求纳入询价书的空白模板中，同时提炼出质量控制（QC）的特殊要求并在团队内共享，以便在个别审查时能够毫无遗漏地将特殊要求融入其中。",
        ja: "Req.のFormat ReviewがPMTから依頼され、それを用いて個別のReq. Reviewが専門部から依頼されるのが通常の流れなので、まずはプロジェクト共通の要求事項はReq.のBlank Formに盛り込んでもらい、並行してQCとして特殊要求を取り出してチーム内で共有した上で、個別のReq. Review時にもれなく特殊要求を盛り込むようにしましょう。",
        en: "The standard workflow is that the PMT requests a Blank Form/Template Review first, followed by individual Requisition Reviews from engineering disciplines. Thus, common project requirements should first be incorporated into the Blank Requisition Form. Concurrently, QC special requirements should be extracted and shared in the team so they can be seamlessly built into individual discipline reviews."
    },
    "3.2-A.1": {
        zh: "缺少团队成员会导致工作无法运转，但不进行必要的技术评审（TBE）是严重的安全隐患。如果从前期就开始勉强有限的人手过度负荷，会拖累团队后续的健康运行。因此，要在合适的时间节点配备人员，并积极借助资深专家的经验，根据风险程度来进行高效的运营管理。",
        ja: "必要なチーム員が居ないと業務が進みません、かといって必要なテクエバをしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、シニアの知見なども借りてリスクに応じた効率的なチーム運営を心がけましょう。",
        en: "Without necessary team members, work stalls; however, failing to perform required Technical Bid Evaluations (TBE) is a major quality risk. Forcing limited members to stretch too thin early on will impact team health later. Secure required headcount timely and leverage senior expertise to run efficient, risk-based operations."
    },
    "3.2-A.2": {
        zh: "缺少团队成员会导致工作无法运转，但不进行必要的技术评审（TBE）是严重的安全隐患。如果从前期就开始勉强有限的人手过度负荷，会拖累团队后续的健康运行。因此，要在合适的时间节点配备人员，并积极借助资深专家的经验，根据风险程度来进行高效的运营管理。",
        ja: "必要なチーム員が居ないと業務が進みません、かといって必要なテクエバをしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、シニアの知見なども借りてリスクに応じた効率的なチーム運営を心がけましょう。",
        en: "Without necessary team members, work stalls; however, failing to perform required Technical Bid Evaluations (TBE) is a major quality risk. Forcing limited members to stretch too thin early on will impact team health later. Secure required headcount timely and leverage senior expertise to run efficient, risk-based operations."
    },
    "3.2-B.1": {
        zh: "在技术评审（TBE）阶段就由 QC 深入介入并向投标人详细确认质量要求的做法在工程承包商中较为少见。因此，一些新加入的契约工程师虽然 QC 经验丰富，但也可能是第一次接触 TBE。为了切实做好这一工作，不能完全依赖个人发挥，在团队内统一评审标准和质量要求也至关重要。",
        ja: "テクエバからQCが入り込んで品質要求事項を深くBidderを確認するコントラクターは珍しいので、新規ASエンジニアの中にはQCの経験は豊富でもテクエバは初めてという人も居る可能性があります。\n確実に必要なテクエバを実施するために、個人任せにせずに、チーム内でレベル感を調整することも重要です。",
        en: "Contractors that involve QC deep in the TBE stage to verify quality requirements with bidders are rare. Some new contract engineers might have rich QC experience but be new to TBE. To ensure execution, do not leave it to individuals; aligning the technical standards and levels within the team is key."
    },
    "3.2-B.2": {
        zh: "在技术评审（TBE）阶段就由 QC 深入介入并向投标人详细确认质量要求的做法在工程承包商中较为少见。因此，一些新加入的契约工程师虽然 QC 经验丰富，但也可能是第一次接触 TBE。为了切实做好这一工作，不能完全依赖个人发挥，在团队内统一评审标准和质量要求也至关重要。",
        ja: "テクエバからQCが入り込んで品質要求事項を深くBidderを確認するコントラクターは珍しいので、新規ASエンジニアの中にはQCの経験は豊富でもテクエバは初めてという人も居る可能性があります。\n確実に必要なテクエバを実施するために、個人任せにせずに、チーム内でレベル感を調整することも重要です。",
        en: "Contractors that involve QC deep in the TBE stage to verify quality requirements with bidders are rare. Some new contract engineers might have rich QC experience but be new to TBE. To ensure execution, do not leave it to individuals; aligning the technical standards and levels within the team is key."
    },
    "3.2.1": {
        zh: "原材料的特殊材料要求如果拖到设备制造期间或发货前才被发现，最坏的情况可能需要重新采购原材料，从而对项目进度造成不可估量的重大延误。因此，凡是涉及成本和质量的重大要求，必须在下达采购订单（PO）前由投标人确认并纳入合同中，务必在技术评审（TBE）阶段彻底确认清楚。",
        ja: "素材の特殊要求は、後々機器製作中や出荷前に見つかると、最悪の場合、素材の再調達まで遡って大きなスケジュールインパクトに繋がり、さらにコストに影響する要求事項はPO.発行までに確実にBidderに取り込んでもらう必要があるので、テクエバ時に確実に確認しましょう。",
        en: "Special material requirements discovered late during fabrication or pre-shipping can, at worst, require re-procuring raw materials, causing huge schedule and cost impacts. All cost-impacting requirements must be secured in the vendor's scope before PO award, so confirm them thoroughly during TBE."
    },
    "3.2.2": {
        zh: "原材料的特殊材料要求如果拖到设备制造期间或发货前才被发现，最坏的情况可能需要重新采购原材料，从而对项目进度造成不可估量的重大延误。因此，凡是涉及成本和质量的重大要求，必须在下达采购订单（PO）前由投标人确认并纳入合同中，务必在技术评审（TBE）阶段彻底确认清楚。",
        ja: "素材の特殊要求は、後々機器製作中や出荷前に見つかると、最悪の場合、素材の再調達まで遡って大きなスケジュールインパクトに繋がり、さらにコストに影響する要求事項はPO.発行までに確実にBidderに取り込んでもらう必要があるので、テクエバ時に確実に確認しましょう。",
        en: "Special material requirements discovered late during fabrication or pre-shipping can, at worst, require re-procuring raw materials, causing huge schedule and cost impacts. All cost-impacting requirements must be secured in the vendor's scope before PO award, so confirm them thoroughly during TBE."
    },
    "3.3-A.1": {
        zh: "对于供应商（Vendor）而言，凡是前期在询价书（Req.）中漏掉的质量条款都属于额外的合同变更。但如果直接违反质量规范，对业主来说就是严重的不符合项。因此，即使是事后补救，那些必须遵守的核心规范依然不可妥协。不过，通过与业主积极谈判，部分辅助性的条款或许能获得一定的豁免或缓和。",
        ja: "Req.に載せ忘れた要求事項は全てVendorにとって追加です。\nかといって要求事項からの逸脱は客先からすれば不適合なので、後出しになったとしても、遵守しなければならない要求事項は遵守しなければなりません。　ただし客先との交渉次第では、ある部分の要求事項が緩和される場合もあるかもしれません。",
        en: "Any requirement forgotten in the Requisition will be treated as an extra cost variation by the Vendor. However, deviations from specifications are unacceptable non-conformances to the client. Even if it is a late addition, mandatory quality requirements must be enforced. Depending on client negotiation, some items may be relaxed."
    },
    "3.3-A.2": {
        zh: "对于供应商（Vendor）而言，凡是前期在询价书（Req.）中漏掉的质量条款都属于额外的合同变更。但如果直接违反质量规范，对业主来说就是严重的不符合项。因此，即使是事后补救，那些必须遵守的核心规范依然不可妥协。不过，通过与业主积极谈判，部分辅助性的条款或许能获得一定的豁免或缓和。",
        ja: "Req.に載せ忘れた要求事項は全てVendorにとって追加です。\nかといって要求事項からの逸脱は客先からすれば不適合なので、後出しになったとしても、遵守しなければならない要求事項は遵守しなければなりません。　ただし客先との交渉次第では、ある部分の要求事項が緩和される場合もあるかもしれません。",
        en: "Any requirement forgotten in the Requisition will be treated as an extra cost variation by the Vendor. However, deviations from specifications are unacceptable non-conformances to the client. Even if it is a late addition, mandatory quality requirements must be enforced. Depending on client negotiation, some items may be relaxed."
    }
};

function showExplanationsPage() {
    const lang = gameState.lang;
    const pageLabels = {
        zh: {
            title: "未获得满分问题的答题解说",
            back: "返回证书",
            perfect: "恭喜！您获得了满分，没有任何答错的选项！",
            yourChoice: "您的选择",
            score: "得分"
        },
        ja: {
            title: "クオリティマネジメント解説",
            back: "認定証へ戻る",
            perfect: "おめでとうございます！満点のため、解説が必要な誤選択はありません！",
            yourChoice: "あなたの選択",
            score: "得点"
        },
        en: {
            title: "Quality Review & Explanations",
            back: "Back to Certificate",
            perfect: "Congratulations! You got a perfect score! There are no incorrect choices to review.",
            yourChoice: "Your Choice",
            score: "Score"
        }
    };

    els.explanationTitle.textContent = pageLabels[lang].title;
    els.explanationBackText.textContent = pageLabels[lang].back;
    els.explanationList.innerHTML = "";

    // Find all selections where score was not 10
    const incorrectSelections = [];
    gameState.path.forEach(nodeId => {
        const sel = findSelectionById(nodeId);
        // Only show actual question selections that scored less than 10 points
        if (sel && sel.score < 10) {
            incorrectSelections.push(sel);
        }
    });

    if (incorrectSelections.length === 0) {
        const perfectMsg = document.createElement("div");
        perfectMsg.className = "explanation-perfect-msg";
        perfectMsg.textContent = pageLabels[lang].perfect;
        els.explanationList.appendChild(perfectMsg);
    } else {
        incorrectSelections.forEach(sel => {
            const chId = getChapterIdOfSelection(sel.id);
            const ch = STORY_DATA[chId];
            if (!ch) return;

            const item = document.createElement("div");
            item.className = "explanation-item";

            // Title (Chapter title)
            const title = document.createElement("h3");
            title.className = "explanation-item-title";
            title.textContent = `${ch.chapter} ${ch.title[lang] || ""}`;
            item.appendChild(title);

            // Choice details
            const choiceDiv = document.createElement("div");
            choiceDiv.className = "explanation-item-choice";
            choiceDiv.innerHTML = `<span><strong>${pageLabels[lang].yourChoice}:</strong> ${sel.desc[lang]}</span>
                                  <span class="explanation-score-tag">${pageLabels[lang].score}: ${sel.score} / 10</span>`;
            item.appendChild(choiceDiv);

            // Explanation text
            const expText = document.createElement("div");
            expText.className = "explanation-item-text";
            
            // Fetch explanation or fall back to placeholders
            let exp = EXPLANATIONS[sel.id];
            let expString = "";
            if (exp && exp[lang]) {
                expString = exp[lang];
            } else {
                const placeholders = {
                    zh: "【暂无该选项解说】请继续努力，尝试选择满分选项！",
                    ja: "【この選択肢の解説は現在準備中です】引き続き満点を目指して挑戦してください！",
                    en: "[No explanation available for this option yet] Please keep trying to find the perfect choice!"
                };
                expString = placeholders[lang];
            }
            expText.textContent = expString;
            item.appendChild(expText);

            els.explanationList.appendChild(item);
        });
    }

    els.settlementScreen.classList.add("hidden");
    els.explanationScreen.classList.remove("hidden");
}

function hideExplanationsPage() {
    els.explanationScreen.classList.add("hidden");
    els.settlementScreen.classList.remove("hidden");
}

// Load the start welcome node
renderGameStep();
