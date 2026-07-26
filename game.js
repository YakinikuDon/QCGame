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
    console.log(`[QCGame Debug] selectChoice: ${selectionId}, score: ${sel.score}, baseLevel: ${baseLevel}, stageScores:`, JSON.stringify(gameState.stageScores));

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
const ENDING_DATA = {
  "Perfect PQCM": {
    "score_range": "150",
    "title": {
      "zh": "🏆 完美品质管理经理 (Perfect PQCM)",
      "ja": "🏆 完璧なクオリティマネージャー (Perfect PQCM)",
      "en": "🏆 Perfect PQCM"
    },
    "desc": {
      "zh": "质量、交期、成本方面都取得了巨大的成功！为公司利益做出重大贡献，获得了巨额年终奖！你从质量角度完美引导了项目的成功，卓越功绩得到全员认可。请继续作为 Perfect PQCM 迈进！",
      "ja": "品質/納期/コストともにPJは大成功を収めました！会社の利益にも大きく貢献し、巨額のボーナスを得ることが出来ました。あなたはPQCMとして品質面からプロジェクトを正しくリードし、顕著な功績が認められました。これからも Perfect PQCM として邁進してください！",
      "en": "The project was a huge success in terms of quality, schedule, and cost! You made a significant contribution to the company's profit and received a huge bonus. You correctly led the project from the quality perspective as a PQCM, and your remarkable achievements were highly recognized. Continue to strive as a Perfect PQCM!"
    }
  },
  "Great PQCM": {
    "score_range": "131-149",
    "title": {
      "zh": "🥈 优秀品质管理经理 (Great PQCM)",
      "ja": "🥈 優秀なクオリティマネージャー (Great PQCM)",
      "en": "🥈 Great PQCM"
    },
    "desc": {
      "zh": "虽然在工期 and 成本上受到了一定影响，但项目成员精诚团结共同应对，项目最终成功结束！你作为PQCM做出了正确的应对，项目组给予了极高评价。下一次请以 Perfect PQCM 为目标！",
      "ja": "納期/コストに影響は出るもプロジェクトメンバー一体となって対応し、プロジェクトは成功裏に終わりました。あなたはPQCMとして正しく対応し、プロジェクトからも良い評価を得ました。次は Perfect PQCM を目指してください！",
      "en": "Although there were impacts on schedule and cost, the project members worked together to respond, and the project ended successfully. You responded correctly as a PQCM and received good evaluations. Aim for Perfect PQCM next time!"
    }
  },
  "Standard PQCM": {
    "score_range": "101-130",
    "title": {
      "zh": "🥉 合格品质管理经理 (Standard PQCM)",
      "ja": "🥉 标准的なクオリティマネージャー (Standard PQCM)",
      "en": "🥉 Standard PQCM"
    },
    "desc": {
      "zh": "一路上克服了各种大大小小的麻烦，项目总算以确保盈余的成绩顺利结束了。你作为PQCM坚守岗位，积累了极为宝贵的项目实战经验。请活用这段宝贵的经历，下一次向 Great PQCM 发起挑战！",
      "ja": "色々なトラブルを乗り越えながら、何とか黒字確保でプロジェクトを終えることができました。あなたはPQCMとして何とかやり遂げ、貴重な経験を積み増しました。この経験を活かして次は Great PQCM を目指してください！",
      "en": "Overcoming various troubles, you managed to finish the project with a surplus. You managed to accomplish the task as a PQCM and gained valuable experience. Use this experience to aim for Great PQCM next time!"
    }
  },
  "To be enhanced": {
    "score_range": "<=100",
    "title": {
      "zh": "⚠️ 需持续提升的品质管理经理 (To be enhanced)",
      "ja": "⚠️ 要改善なクオリティマネージャー (To be enhanced)",
      "en": "⚠️ To be enhanced"
    },
    "desc": {
      "zh": "项目执行陷入极度混乱，最终工期严重延误、成本大幅超支，给公司利益带来了巨大的负面冲击。你在品质管理和项目平衡上还有极大的学习 and 提升空间，请为了成为真正的 PQCM 而努力！",
      "ja": "プロジェクトは混迷を極めて大きく採算が悪化し、会社の利益を大きく压迫しました。あなたもまだまだ勉強の余地があるので、真のPQCMを目指して頑張ってください。",
      "en": "The project was extremely chaotic, the profitability deteriorated significantly, and the company's profit was heavily squeezed. You still have room for study, please work hard to become a true PQCM!"
    }
  },
  "Game Over": {
    "score_range": "Game Over",
    "title": {
      "zh": "💥 项目资格被取消 (Game Over)",
      "ja": "💥 プロジェクト出禁 (Game Over)",
      "en": "💥 Client Disqualification (Game Over)"
    },
    "desc": {
      "zh": "抱歉，你在作为品质管理经理之前，连一名工程师最基本的职业操守和基本准则都未能坚守。项目被业主直接 Disqualify（取消资格）并清退，你的职业生涯遭遇了重大挫折！",
      "ja": "あなたはPQCM以前にエンジニアとして基本的に守るべき事柄が守られていません。客先からクレームを受けDisqualifyされました。",
      "en": "We are sorry, but before being a PQCM, you have not followed the basic principles that an engineer must follow. The client has disqualified the project due to ethical/technical issues. Work hard to rebuild your engineering basics!"
    }
  }
};

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
    console.log("[QCGame Debug] showSettlement called. Initial stageScores:", JSON.stringify(gameState.stageScores));
    LEVELS.forEach(level => {
        const scores = gameState.stageScores[level];
        if (scores && scores.length > 0) {
            const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
            totalScore += avg;
            console.log(`[QCGame Debug] Level ${level}: scores = ${JSON.stringify(scores)}, avg = ${avg}, running totalScore = ${totalScore}`);
        } else {
            // Default perfect score if level was skipped/passed without scoring
            totalScore += 10;
            console.log(`[QCGame Debug] Level ${level}: no scores (skipped), added 10, running totalScore = ${totalScore}`);
        }
    });

    totalScore = Math.min(150, Math.round(totalScore));
    console.log("[QCGame Debug] showSettlement final totalScore:", totalScore);

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
            certCongrats: isGameOver ? "新进质量经理评估：" : "恭喜新进质量经理：",
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
            certCongrats: isGameOver ? "新任クオリティマネージャー評価：" : "新任クオリティマネージャー：",
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
            certCongrats: isGameOver ? "QC Manager Evaluation:" : "Congratulations to new QC Manager:",
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
    "1.1": {
        "zh": "合同文件的要求事项（特别是写有“shall”的条款）属于强制要求，不得擅自修改。但在合同执行中必然存在偏离（Deviation）或澄清（Clarification）等与业主沟通的协议流程。对于严格遵守反而会引发项目混乱的条款，应尽早与业主及项目内部达成解决共识。",
        "ja": "契約図書の要求事項（特に”shall”で書かれている個所）は必須の要求なので、勝手に変更することはできませんが、必ずDeviationやClarificationなど客先と確認するプロトコルがあるはずなので、遵守することが余計にプロジェクトを混乱させるような要求事項は、早めに客先およびプロジェクト内で対応方法を合意しましょう。",
        "en": "Requirements in contract documents (especially clauses with \"shall\") are mandatory and cannot be altered arbitrarily. However, there are established protocols such as Deviations or Clarifications to align with the client. For requirements where strict compliance creates unnecessary project chaos, agree on a handling approach with the client and project team early."
    },
    "1.2": {
        "zh": "组建一支易于管理且高效坚固的团队是 PQCM 初期最重要的任务之一，但现实中很难做到 100 分的完美配置。如何在关键节点及时调配所需人才（能力与人数的匹配），并将其构建为高效运转的组织，正是考验 PQCM 领导力与管理水平的核心所在。",
        "ja": "自分が運営しやすい強固なチームを組織するのは、PQCMにとって初期の重要なタスクですが、100点満点のチームは中々できません。そんな時に、どうやってタイムリーに人財（能力×人数）を集めるかと、それをどういう組織にして効果的に運営するかがPQCMの腕の見せ所です。",
        "en": "Building a strong, manageable team is a critical initial task for a PQCM, but achieving a perfect 100-point team is rare. The true test of a PQCM's capability lies in how effectively you mobilize required talent (competency x capacity) in a timely manner and structure the organization for efficient execution."
    },
    "1.3": {
        "zh": "虽然应当尊重项目管理团队（PMT）拨付的预算，但 PQCM 的核心职责是统筹团队，确保将质量达标的设备材料按时交付至施工现场或模块场地。因此，只要是确保质量交付所必需的工时（MH），即便需要向 PMT 申请追加，也必须在沟通达成共识的前提下切实完成质量管控任务。",
        "ja": "PMTから配賦されるBudgetはリスペクトする必要はありますが、PQCMのタスクは、チームを指揮して品質の担保された資機材をタイムリーに現場/モジュールヤードに届けることなので、それに必要なMHはPMTの合意を得ながら追加してでも、確実にタスクをこなさなければなりません。",
        "en": "While PMT-allocated budgets must be respected, the PQCM's core mission is to lead the team in delivering quality-assured equipment and materials to the site or module yard on time. Necessary man-hours (MH) required to accomplish this must be secured and added with PMT alignment to reliably fulfill quality obligations."
    },
    "2.1": {
        "zh": "所给出的选项都是项目质量方针（Quality Policy）的核心要义，并无绝对的对错之分。作为 PQCM，在履行基本质量职责的同时，时刻明确自己的关注侧重点与管理理念，并在实践中不断锤炼与提升自身作为优秀质量经理的胜任力。",
        "ja": "すべて重要なPolicyになり得る選択肢で、どれかが正解でどれかが間違いというものではありません。当然、PQCMとしてやるべきことをやりながら、そんな中で何に重きを置くかを常に意識しながら、自分のPQCM像を磨いてください。",
        "en": "All options represent important quality policies, with no single choice being purely right or wrong. As a PQCM, while executing fundamental duties, continuously focus on your core priorities and refine your leadership identity as a Quality Control Manager."
    },
    "3.1-A": {
        "zh": "缺少必要的人员会导致业务停滞，但未经审核即放行图纸更是重大质量事故。若在项目初期就对有限的团队成员过度压榨，将严重损害团队的可持续运转。因此，应在及时补齐业务所需人才的同时，采取基于风险分级的防范措施与高效团队运营策略。",
        "ja": "必要なチーム員が居ないと業務が進みません、かといってReviewすべき図書をReviewしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、リスクに応じた効率的なチーム運営を心がけましょう。",
        "en": "Work stalls without essential team members, yet skipping required document reviews is a major quality failure. Overburdening a small team early on negatively impacts long-term team sustainability. Ensure timely staffing while practicing efficient, risk-proportionate quality management."
    },
    "3.1": {
        "zh": "接受 PMT 的委托先制定采购要求（Req.）的标准格式，再据此开展具体设备的要求审查，这是合理合规的流程。然而在实际项目中必须兼顾进度节点。若 QC 审查时间受限，则必须思考如何按设备重要度分级，高效把控核心关键设备的技术质量要求。",
        "ja": "Req.のFormat ReviewがPMTから依頼され、それを用いて個別のReq. Reviewを実施するのは理にかなった進め方ですが、当然スケジュールも考慮する必要があり、QCのReq. Reviewにあまり時間をかけられない場合は、どうやって効率的に重要な機器の要求事項をチェックするか考える必要があります。",
        "en": "Reviewing a general Req. template at PMT's request and using it for individual Req. reviews is a logical approach. However, schedule constraints must be factored in. When QC review time is limited, prioritize and develop efficient strategies to focus checks on critical equipment requirements."
    },
    "3.2-A": {
        "zh": "缺少关键人员会导致采购技术评价（Tech-Eval）无法推进，但跳过必要的技术评价将埋下巨大质量隐患。在初期对有限的人手强行加压会破坏团队长期稳定性。应在争取及时补充人员的同时，实施基于风险的高效评估与团队运营策略。",
        "ja": "必要なチーム員が居ないと業務が進みません、かといって必要なテクエバをしないのは大問題であり、序盤から限られたチーム員に無理を強いるのは後々のチームの運営に影響するので、業務に必要な人財はタイムリーに備えつつ、リスクに応じた効率的なチーム運営を心がけましょう。",
        "en": "Without necessary personnel, Technical Evaluations cannot proceed, yet failing to conduct required evaluations creates massive risk. Overworking limited staff early harms long-term operations. Secure required resources in a timely manner while ensuring risk-based efficient evaluation management."
    },
    "3.2-B": {
        "zh": "在工程总承包实践中，有的承包商主张 QC 从技术评价阶段就深度参与、严格复核投标厂商的质量要求；也有的承包商选择将技术评价交由设计部门，QC 直到下发订单后的 PIM 会议才接入。选择哪种模式取决于项目的总体管理策略，PQCM 需明确团队策略并高效推进。",
        "ja": "テクエバからQCが入り込んで品質要求事項を深くBidderを確認するコントラクターも居れば、テクエバは設計に任せて、オーダー後のPIMまでQCは関与しないコントラクターも存在し、どちらのスタイルを取るかはプロジェクトのPolicyによります。自分たちのスタイルを理解して業務を進めましょう。",
        "en": "Contractor strategies vary: some involve QC deeply during Technical Evaluation to rigorously check bidder quality compliance, while others leave evaluation to Engineering and defer QC involvement until post-order PIM. Understand your project policy and execute quality controls accordingly."
    },
    "3.2": {
        "zh": "若原材料的特殊质量要求（如抗湿硫化氢、高温蠕变等）直到设备制造中或出厂前才被发现纰漏，最坏情况下将导致原材料重新采购，产生极其严重的工期延误与成本飙升。因此在合同前期的文件审查（V-Doc. Review）及技术评价阶段彻底澄清并消除隐患至关重要。",
        "ja": "素材の特殊要求は、後々機器製作中や出荷前に見つかると、最悪の場合、素材の再調達まで発展して甚大なスケジュール・コストインパクトが発生します。\n要求事項は契約初期のV-Doc. Reviewやテクエバ時に確実に潰すことが非常に重要です。",
        "en": "Unresolved special material requirements discovered mid-fabrication or prior to shipping can force raw material re-procurement, leading to catastrophic schedule delays and cost overruns. Resolving all special material requirements during early V-Doc. reviews and Technical Evaluations is paramount."
    },
    "3.3-A": {
        "zh": "遗漏在采购要求（Req.）之外的任何质量标准，对供应商而言都属于范围追加（Change Order）。但若直接放弃这些要求，项目质量将无法保证。因此，必须与采购、设计等关联部门密切协商，确立合理的变更澄清与合同补遗流程。",
        "ja": "Req.に載せ忘れた要求事項は全てVendorにとって追加です。\nかといって要求事項を全てドロップするとプロジェクトの品質が担保できなくなるので、どのようなプロセスで契約要求に盛り込むか、関連部署と協議してプロトコルを合意しましょう。",
        "en": "Any requirement omitted from the initial Req. constitutes a change order for the Vendor. However, dropping essential quality requirements compromises project integrity. Collaborate with engineering and procurement to establish agreed protocols for incorporating missing requirements cleanly."
    },
    "3.3-B": {
        "zh": "以人员不足为由推诿技术评价等关键环节，本质上只是在积累并延后风险。问题暴露得越晚，后期可采取的补救措施就越少、代价就越大。PQCM 必须坚持在项目初期严控隐患。",
        "ja": "人財不足を理由にテクエバなどやるべきことをやらないのはリスクを先送りしているだけです。\n後になればなるほど打てる対策の手数が限られてくるので、初期段階でリスクをコントロールすることを心がけましょう。",
        "en": "Skipping mandatory tasks like Technical Evaluations due to resource shortages merely postpones risk. The later a defect is identified, the fewer remedial options remain. Strive to control and mitigate risks at the earliest stages."
    },
    "3.4-A": {
        "zh": "招聘新工程师时通常看重其过往经验，但若新人在未透彻理解本项目特定要求的情况下盲目开展图纸审查（V-Doc. Review），极易凭主观经验产生误判。应在初期开展系统的项目标准与要求交底，确保质量审核成果的准确性。",
        "ja": "新規のエンジニアは当然それまでの実績や経験を元に採用しますが、V-Doc. Reviewなどプロジェクトの要求事項を理解しないまま業務を進めると、思い込みで判定して問題が発生する場合があります。\n早い段階でプロジェクトの要求事項をインプットして、成果物の品質を担保しましょう。",
        "en": "New engineers are hired for their past experience, but conducting V-Doc. reviews without mastering project-specific requirements leads to dangerous assumptions. Brief team members early on project standards to safeguard quality deliverable standards."
    },
    "3.3": {
        "zh": "供应商作为商业实体，为提升成本竞争力使用新型分包商（Subvendor）属于正常商业行为。但这本身虽无可厚非，若选用缺乏履约信誉的分包商则会引发连锁质量事故。对于关键设备与材料，PQCM 必须指导督促供应商建立严格的分包商评价与监控机制。",
        "ja": "Vendorも営利企業なので競争力を出すために新規のSubvendorを使うことがあります。\nそれ自体は悪いことではありませんが、信頼性に欠けるSubvendorを使うとトラブルの元になるので、重要な機器や素材に関しては、しっかりとSubvendorの管理をするようにVendorを指導しましょう。",
        "en": "Vendors utilize new subvendors to remain commercially competitive, which is acceptable. However, unvetted subvendors pose severe risks. Guide vendors to rigorously audit and manage subvendors supplying critical equipment and raw materials."
    },
    "3.4": {
        "zh": "在任何大型工程中，制造图纸与文件审查（V-Doc. Review）在高峰期都会不可避免地出现积压。试图面面俱到地齐头并进是不现实的，应建立基于风险分级的优先审理机制或抽查协议，确保高效推进文件审核。",
        "ja": "どんなプロジェクトでもピーク時にはV-Doc. Reviewのバックログが溜まってきます。\nすべてを平坦に処理するのは不可能なので、リスクに応じて優先順位をつけたり、抜き取りでReviewするなどのプロトコルを確立して、効率的にV-Doc. Reviewを進めましょう。",
        "en": "V-Doc. review backlogs inevitably peak on complex projects. Processing every document uniformly is impossible; establish risk-based prioritization and sampling protocols to maintain efficient, targeted V-Doc. review workflows."
    },
    "3.5": {
        "zh": "第三方驻厂检验员（Inspector）是品质部门在供应商工厂的“眼睛与耳朵”。及时派遣能力过硬、客观公正的检验员直接关系到设备的制造质量。对于检查能力或履职态度存在重大缺陷的检验员，必须果断调整更换。",
        "ja": "JGC検査員はVendor Shopにおける我々の目であり耳なので、信頼できる検査員をタイムリーにアサインすることはプロジェクトの成功に直結します。\n能力に疑問のある検査員は早めに交代させるなどの対応が必要です。",
        "en": "Inspectors act as our eyes and ears in vendor shops. Assigning trusted, highly competent inspectors directly drives project success. Swiftly replace any inspectors whose capabilities or performance fall short of required standards."
    },
    "4.1-A": {
        "zh": "以人力不足为理由削减采购要求审查（Req. Review）等关键工作，只是将隐患推迟到未来爆发。越到项目后程，纠偏手段就越受限。务必坚持在前期阶段将质量风险控制在萌芽状态。",
        "ja": "人財不足を理由にReq. Reviewなどやるべきことをやらないのはリスクを先送りしているだけです。\n後になればなるほど打てる対策の手数が限られてくるので、初期段階でリスクをコントロールすることを心がけましょう。",
        "en": "Neglecting foundational tasks like Req. Reviews due to resource constraints is mere risk deferral. As execution progresses, corrective options shrink rapidly. Focus on proactively managing risks during early project phases."
    },
    "4.1-B": {
        "zh": "原材料的特殊技术要求若未在前期落实，直到制造或检验环节才暴露，极易引发材料报废与重新采购，造成灾难性的工期与成本损失。务必在前期技术评价和图纸审定阶段彻底敲定并落实所有特殊材料要求。",
        "ja": "素材の特殊要求は、後々機器製作中や出荷前に見つかると、最悪の場合、素材の再調達まで発展して甚大なスケジュール・コストインパクトが発生します。\n要求事項は契約初期のV-Doc. Reviewやテクエバ時に確実に潰すことが非常に重要です。",
        "en": "Overlooking special raw material specifications until fabrication or inspection leads to material replacement, causing devastating delays and costs. Eliminate all material requirement ambiguities during early V-Doc. reviews and technical evaluations."
    },
    "4.1-C": {
        "zh": "检验前会议（PIM）是设备正式开工制造的“质量闸门”。如果在 PIM 上暴露前期图纸审核或检验试验计划（ITP）未敲定等缺陷，设备将无法如期开工，直接拖垮进度。必须高度重视 PIM，确保前置文件与 ITP 提前达成一致。",
        "ja": "PIMはまさに機器製作が開始されるゲート、そこでそれまでの不備が表面化すると直ちに製作を開始することが出来ず、プロジェクトに遅れが発生します。\nPIMの重要性を認識して、前段階のV-Doc. ReviewやITPの合意を確実に実施しましょう。",
        "en": "Pre-Inspection Meetings (PIM) serve as the formal quality gate for fabrication release. Unresolved issues surfacing at PIM halt manufacturing start, causing immediate schedule slippage. Finalize all V-Doc. reviews and ITP agreements ahead of PIM."
    },
    "4.1-D": {
        "zh": "在商务合作中，虽然我们是买方客户，但在推进工程业务时必须将供应商视为合作伙伴，在相互尊重的基础上共赢。若采取居高临下的高压态度，不仅无法建立信任，一旦后续发生突发质量危机，将很难争取到厂商的全力配合。",
        "ja": "Vendorにとって顧客はJGCだけど、業務を進める上ではビジネスパートナーと考えて、お互いにリスペクトしながら業務を進めることが重要です。\n高圧的な態度でVendorに接すると、良好な関係が築けず、トラブルが発生した時に協力が得られなくなります。",
        "en": "While we are the client, vendors must be treated as strategic business partners with mutual respect. Heavy-handed tactics prevent solid relationship building and alienate vendor cooperation when unexpected troubleshooting support is required."
    },
    "4.1": {
        "zh": "在 PIM 期间考察工厂（Shop Visit）时，由于本项目设备尚未正式开工，即便观察到工厂其他项目的违规操作，也不能直接开具不符合项报告（NCR）。但必须将发现的问题（Finding）准确反馈给厂商与检验员，作为本项目开工前的防范重点。",
        "ja": "PIMのShop Visit時は、まだ自プロジェクトの機器は製作してないので、何か不適合があってもその場でNCRを出すことは出来ません。\nFindingは確実にVendorとJGC検査員にフィードバックして、自プロジェクトの機器製作時の再発防止に努めてください。",
        "en": "During a PIM Shop Visit, our project equipment has not yet started fabrication; thus, non-conformance reports (NCRs) cannot be issued for general shop observations. Document all findings and brief the Vendor and Inspector to prevent recurrence on our equipment."
    },
    "4.2-A": {
        "zh": "要求所有供应商一律提前 30 天提交确定的检验申请（Notice）在实际操作中难度极大。更务实做法是仅针对官厅法定见证等需要漫长审批协调的关键检验执行严格预告，而普通常规检验则按行业通行的 2 周预告期灵活安排。",
        "ja": "すべてのVendorに30日前にFirmな検査申請を出させるのは難しい。\n例えば官庁の立会があるなど調整に時間を要するものに限って厳密に管理するのは現実的ですが、他の一般的な検査はJGCの標準である2週間程度でアレンジするのが通常です。",
        "en": "Requiring a strict 30-day firm inspection notice from every Vendor is impractical. Rigorously enforce advance notice for complex inspections requiring official government witness, while managing standard routine inspections within normal 2-week notice windows."
    },
    "4.2-B": {
        "zh": "虽然提前 30 天申请确实存在客观困难，但未经业主书面同意擅自缩短申请预告期属于违约行为。必须通过正式的项目变更与澄清程序获得业主认可，建立契合实际的检验协调与见证机制。",
        "ja": "30日前の検査申請を出すのが難しいからといって、客先との合意も無く勝手に申請期間を短縮するのは契約違反です。\nプロジェクトの正しい手続きに則って客先の合意を得て、無理のない検査コーディネーションを進めましょう。",
        "en": "Even if 30-day notice is challenging, unilaterally shortening the notice period without client agreement constitutes a contract breach. Obtain official client consent through proper project procedures to establish workable inspection coordination."
    },
    "4.2-C": {
        "zh": "Hold Point（停工待检点/见证点）绝不能随意取消。业主通常认为见证点非常重要，突然变更会严重损害信任，因此应努力安排参加。",
        "ja": "Hold Pointは勝手にキャンセルすることはできません。\n客先もHold Pointは重要と考えていることが多く、突然の変更は信頼を損ねるので、参加を努力すべき",
        "en": "Hold Points cannot be cancelled arbitrarily. Clients view Hold Points as vital, and sudden changes will erode trust, so every effort should be made to participate."
    },
    "4.2-D": {
        "zh": "只要坚持按月开展 QC 检验工时（MH）的精细化盘点与更新，就不会出现检验工时忽然耗尽的困境。未经预警突然向 PMT 索要工时追加会损害管理信任，凡有工时变动，应及时说明合理解释并按程序审批。",
        "ja": "少なくとも毎月のQC MHのUpdateを確実に実施していたら、ある日突然、検査MHが枯渇することはありません。\n突然の追加MHはPMTの信頼を損ねるので、追加が発生したら、適切な理由を説明して、都度追加MHを合意してください。",
        "en": "Monthly QC man-hour (MH) tracking prevents sudden MH depletion. Abrupt demands for additional man-hours alienate PMT trust; justify any scope changes clearly and secure formal agreements whenever extra MH is needed."
    },
    "4.2-E": {
        "zh": "部分严格的业主并不认可偏向于企业内部认证的 ASNT SNT-TC-1A 无损检测人员资质。必须在合同初期仔细研读技术规范要求，避免出现资质否决风险。对于明确排除 SNT-TC-1A 的业主，后期试图强行沟通认可极其困难。",
        "ja": "社内資格に近いASNTのSNT-TC-1Aの認証プロセスを認めない客先も居るので、契約要求をシッカリ読み込んで、漏れの無いQC遂行を心がけてください。\n意識的にSNT-TC-1Aを排除したい客先に認めてもらうのはかなり難しいです。",
        "en": "Certain clients strictly reject employer-based ASNT SNT-TC-1A NDT certifications. Thoroughly review contract specifications early to avoid execution gaps. Persuading clients who explicitly exclude SNT-TC-1A to grant exceptions is exceptionally difficult."
    },
    "4.2-F": {
        "zh": "第三方驻厂检验员是品质部门在工厂的眼睛和耳朵。如果检验员出具的检验报告（IR）表述不清、缺少追溯依据，一旦施工现场发现质量隐患，将无法追溯工厂当时的制造状况，甚至在索赔谈判中陷于被动。必须指导规范检验员出具高质量的报告。",
        "ja": "JGC検査員はVendor Shopにおける我々の目であり耳です。\nプロジェクト関係者が理解できるIRを作成してもらわないと、建設現場で何か問題が見つかった時に、Vendor Shopでの状況が追いかけられず、最悪の場合、Vendorと不利な交渉に持ち込まれますので、適切なレベルのIRが作成できるよう検査員を指導しましょう。",
        "en": "Inspectors are our eyes and ears in vendor shops. If Inspection Reports (IRs) lack detail, site troubleshooting cannot trace shop fabrication status, leaving us vulnerable in vendor negotiations. Guide inspectors to produce professional, clear, and traceable IRs."
    },
    "4.2-G": {
        "zh": "与供应商关系僵化会在设备制造、检验、交货等各个环节衍生次生麻烦。在设备顺利出厂并完成制造记录簿（MRB）最终签署前，应始终保持建设性的合作关系。此外，让检验员在工厂承受人身安全风险是绝不可接受的底线问题。",
        "ja": "Vendorの関係がこじれると、色々な場面で問題が派生します。\n機器を出荷してMRBを承認するまで良好な関係を辞しましょう。\nJGC検査員をVendor Shopで危険にさらすのは問題外です。",
        "en": "Sour vendor relations trigger compounding problems across fabrication phases. Maintain a constructive relationship until equipment ships and Manufacturing Record Books (MRBs) are signed. Exposing inspectors to safety hazards at vendor shops is unacceptable."
    },
    "4.2-H": {
        "zh": "在供应商工厂检查中发现的问题如果未能及时形成闭环反馈，必然会导致缺陷延伸至本项目设备中。对于已发现的质量隐患必须严肃处理，隐瞒缺陷强行出厂属于严重触犯工程师职业道德的红线行为。",
        "ja": "Vendor ShopでのFindingを確実にフィードバックしないと、自プロジェクトの製品にもトラブルが発生します。\n見つかったトラブルに対しては適切に対応しましょう、欠陥を隠して出荷するのは技術者倫理に抵触する大問題です。",
        "en": "Failing to feed back shop inspection findings guarantees quality issues on our equipment. Address all identified defects properly; concealing defects to force equipment shipment violates fundamental engineering ethics."
    },
    "4.2": {
        "zh": "现实中许多主设备厂商对二级分包商（Subvendor）的管理能力相当薄弱。对于包含复杂分包链条的成套成组设备（Package Equipment），若缺乏精细监控，单一零配件的制造滞后就可能拖垮整台设备的出货，进而导致现场施工全面瘫痪。",
        "ja": "Subvendor管理がPoorなVendorは多々存在し、複雑なSubvendor構成で機器製作するパッケージ品などは特に綿密に管理しないと、1つの部品の遅れが機器全体の出荷、ひいては建設工事の遅れに直結する場合があります。",
        "en": "Many vendors suffer from poor subvendor oversight. For complex package equipment with intricate sub-vendor supply chains, a delay in a single component directly threatens overall equipment shipment and site construction schedules."
    },
    "4.3-A": {
        "zh": "批量散件（Bulk Materials）发生不符合项（NCR）后的全面水平展开排查往往耗时巨大。但必须深入追溯问题的根本原因，凡存在系统性重现风险的，哪怕耗费精力也必须全面追溯复核，否则未来会在现场酿成更大的事故。",
        "ja": "バルク品のNCRの水平展開は膨大な時間を要する場合があります。\nトラブルの根本原因を追究して、再現性がある場合は時間をかけてでもバックチェックしないと、後日もっと大きな問題に発展する可能性があります。",
        "en": "Horizontally expanding bulk material non-conformance reports (NCRs) requires significant time. However, investigating root causes is mandatory; if systemic defects exist, thorough back-checking is essential to prevent massive site failures later."
    },
    "4.3-B": {
        "zh": "政府官厅检验员本质上是执法人员或其法定代表，与业主有着本质区别。他们绝不会为了工程进度而承担任何违规风险，完全遵循法定程序。如果到了项目后期才发现遗漏了官厅见证要求，补救手段极其有限。务必在项目初期彻底梳理并纳入官厅法定检验要求。",
        "ja": "官庁検査員は基本的に役人かその代理人で客先とは異なり、リスクを取ってでもプロジェクトを進めようというマインドが乏しく、決められたルール通りに進める指向が強い場合が多いので、後になって官庁検査の要求漏れが見つかっても打てる対策が限られてきます。\nプロジェクトの初期から確実に官庁要求を取り込んでください。",
        "en": "Government inspectors are officials or legal deputies who strictly follow statutory rules with zero appetite for risk-taking to preserve schedule. If missing statutory inspection requirements are uncovered late, remedies are minimal. Incorporate government requirements from day one."
    },
    "4.3-C": {
        "zh": "视工厂质量危机的严重程度而定，有时即便投入海量人力驻厂补救并将设备强行送达现场，后续依然会在施工现场引发大量的追加返修。工程历史上不乏因未能及时果断取消订单换厂（Re-ordering）而追受巨大损失的教训。项目团队应保持透明沟通，果断决策。",
        "ja": "トラブルの量と程度によりますが、徹底的に人財を投入してVendor Shopでトラブルを出来るだけ解決して現場に機器を収めても、現場でも追加の補修工事などが発生し、振り返ってみれば、ある時期に発注替えを決断するべきだった反省する事例もあります。\nプロジェクト関係者で常に状況を共有しながら適切な判断をしましょう。",
        "en": "Depending on shop trouble severity, pouring in massive manpower to patch equipment before site delivery may still result in heavy site rework. In hindsight, early order cancellation and re-sourcing is sometimes the correct call. Maintain transparent communication to make decisive project calls."
    },
    "4.3-D": {
        "zh": "法兰密封面（Flange Face）的锈蚀与划伤是各类工程项目中最常见的质量通病。由于数量庞大，在工厂做到 100% 检验确实困难，但至少要确保合同防护要求被严格履行，并通过抽查留痕，确保即便未来现场出现争议，也能清晰说明工厂出厂时的合格状态。",
        "ja": "フランジ面の錆とキズは、どのプロジェクトでも大なり小なり問題が発生します。\n物量が多いのでVendor Shopで100%チェックをするのも難しいが、少なくともプロジェクトの要求事項は確実に履行させた上で、抜き取りで確認し、将来問題が起きた場合でも、Vendor Shopでなされたことが確実に説明でき状態にしておきましょう。",
        "en": "Flange face rust and scratches occur on virtually every project. Given high quantities, 100% shop inspection is tough, but ensure project preservation specs are strictly executed and spot-checked, so shop inspection status can be documented if disputes arise later."
    },
    "4.3": {
        "zh": "材质证明书（MTC）造假属于行业 Lessons Learned（CLL）中极其严重的违规事件。这种行为会彻底摧毁材料可追溯性（Traceability）的信任根基，PQCM 必须保持高度警惕，依法依规严厉调查与处理。",
        "ja": "偽造MTCはCLLにも挙げられている重大な問題です。\n材料のTraceabilityの信頼性を根底から覆す事象なので慎重かつ適切に対応しましょう。",
        "en": "Forged Material Test Certificates (MTCs) represent critical lessons-learned (CLL) violations. Fraud destroys material traceability credibility; PQCMs must handle suspected certificate falsifications with utmost gravity, thoroughness, and procedural compliance."
    },
    "5.1-A": {
        "zh": "管道散件材料若缺乏可追溯的材质证明书（MTC），建设现场将无法向施工分包商领料发放，直接面临管道预制全面停工的巨大风险。在签发检验放行证书（IRC）时，必须建立将合格 MTC 同步高效移交现场的保障协议。",
        "ja": "特に配管バルク材はMTCが無いと建設現場でサブコンに材料を払い出すことができず、工事が止まるリスクがあります。\nIRC発行時にはTraceableなMTCを確実に現場に届けるプロトコルを確立してください。",
        "en": "Piping bulk materials cannot be issued to site subcontractors without traceable MTCs, creating immediate risk of construction standstills. When issuing Inspection Release Certificates (IRCs), establish protocols to ensure verified MTCs arrive on site concurrently."
    },
    "5.1": {
        "zh": "出厂前最终检验（Final Inspection）若遗留大量尾项（Punch Items），最坏情况会导致海运船舶在港口滞留，产生极其昂贵的滞期费。若将未完工作（Carry-over Work）带到施工现场，又会引发分包商索赔。必须对存在疑虑的厂商提早介入，督促在工厂高效清理尾项。",
        "ja": "Final Inspectionで大量にパンチがつくと、最悪の場合、輸送船を港に滞留させることになり、莫大な追加の費用が発生します。　かといって現場にCarry Over Workを持ち込むと、サブコンの追加工事が発生します。\nVendor Shopで効率的にパンチを潰すために、疑義のあるVendorに対しては早めにチェックする必要があります。",
        "en": "Heavy punch lists at Final Inspection risk delaying shipping vessels and incurring exorbitant demurrage fees. Conversely, carrying over unfinished shop work to site triggers costly subcontractor claims. Intervene early with struggling vendors to clear punch items efficiently in the shop."
    },
    "5.2": {
        "zh": "设备出货前项目各方都会高度关注，但一旦设备离厂只剩制造记录簿（MRB）交尾工作时，往往变成 QC 孤军奋战催促厂商，直到竣工关单阶段突然面临项目部督催。应在设备刚出厂、厂商团队对本项目记忆犹新时，联合相关部门迅速倒逼厂商完成 MRB 归档。",
        "ja": "機器を出荷するまではプロジェクト関係者も注目しますが、MRBだけになるとQCだけがVendorを追いかけることになり、V-Doc.のCloseの段階になって急にプロジェクトから督促される場合があります。\nVendorがまだ自プロジェクトに関して新鮮な情報を持ってる内に、関連部門と協力しながらMRBを完了させましょう。",
        "en": "Project teams lose focus after equipment ships, leaving QC alone to chase Manufacturing Record Books (MRBs) until final project closeout pressure hits. Expedite and close out MRBs in collaboration with engineering while vendor teams still have fresh project context."
    },
    "5.3-A": {
        "zh": "协助处理施工现场发现的调达设备质量缺陷与损坏也是 PQCM 的重要职责。当现场发生争议时，必须能够清晰还原设备在工厂出厂时的检验状况，从而精准判定质量责任究竟属于制造厂商、物流运输商还是现场安装分包商。",
        "ja": "現場で発見される調達機材のトラブル対応をサポートするのもPQCMの役務です。\n何かあった時にVendor Shopでの状況を確実に説明できる状態にしておき、トラブルの責任がVendorにあるのか、Forwarderにあるのか、サブコンにあるのか、正しい判断ができるようにしましょう。",
        "en": "Supporting site teams on procured equipment defects is a core PQCM duty. Maintain complete shop inspection history so you can accurately explain fabrication status and determine whether fault lies with the Vendor, Logistics Forwarder, or Site Subcontractor."
    },
    "5.3-B": {
        "zh": "对于包含海量散件零配件的成套设备（Package Equipment），仅靠装箱单（Packing List）往往难以在现场快速定位物件。PQCM 应深入了解施工现场的材料管理与开箱流程，在工厂打包出货阶段就推行便于现场接收与管理的标记打包标准。",
        "ja": "膨大なルーズパーツを含むようなパッケージ機器などでは、Packing Listだけでは何がどこにあるのか分からない場合があるので、建設現場でどのように材料管理をするのか理解した上で、現場に優しい機器の出荷を心がけましょう。",
        "en": "For complex packaged equipment with extensive loose parts, packing lists alone are insufficient for site material tracking. Understand site storage and handling workflows to enforce vendor packing and labeling standards that support smooth site material control."
    },
    "5.3-C": {
        "zh": "在工厂阶段就已经暴露不符合项（NCR），却因处置不彻底、带病出厂，最终导致质量隐患在施工现场被成倍放大爆发。作为对项目质量负责的团队，这是极其沉痛的教训。务必揪出问题的根本原因，切实落实纠正预防措施（CAPA）。",
        "ja": "出荷前にNCRが発生していたにも関わらず、十分な対応を怠ったため現場でさらに問題が拡大する場合があります。\n品質に責任を負うチームとしては恥ずべき事象なので、問題の根本原因を確実に捉えて、再発防止に心掛けてください。",
        "en": "Allowing known shop NCRs to be poorly resolved creates catastrophic, expanded failures once equipment reaches the site. For a quality team, this is unacceptable. Always identify true root causes and enforce robust corrective actions to prevent site escalation."
    },
    "5.3-D": {
        "zh": "材质证明书（MTC）造假是行业教训（CLL）中性质极其恶劣的质量事故。此类行为会从根本上颠覆工程材料可追溯性的信任体系，必须采取极其严谨、严肃且合规的手段进行复查与整改。",
        "ja": "偽造MTCはCLLにも挙げられている重大な問題です。\n材料のTraceabilityの信頼性を根底から覆す事象なので慎重かつ適切に対応しましょう。",
        "en": "Forged Material Test Certificates (MTCs) represent critical lessons-learned (CLL) violations that undermine the foundation of material traceability. Address any suspected certificate falsifications with utmost rigor, diligence, and formal compliance."
    },
    "5.3-E": {
        "zh": "特别是对于管道散件材料，如果缺乏完备可追溯的材质证书（MTC），建设现场将无法向分包商发放材料，直接引发现场施工停摆风险。在签发放行证书（IRC）时，必须确立将合格 MTC 及时送达现场的刚性保障机制。",
        "ja": "特に配管バルク材はMTCが無いと建設現場でサブコンに材料を払い出すことができず、工事が止まるリスクがあります。\nIRC発行時にはTraceableなMTCを確実に現場に届けるプロトコルを確立してください。",
        "en": "Without verifiable MTCs, piping bulk materials cannot be released to site subcontractors, risking construction halts. When issuing Inspection Release Certificates (IRCs), establish rigid protocols ensuring traceable MTCs arrive on site in parallel."
    },
    "5.3": {
        "zh": "协助现场解决设备到货后的各类质量异常也是 PQCM 的职责所在。当发生质量争议时，应能清楚说明工厂出厂时的检验履历与状态，客观公正地界定属于厂商制造责任、海运运输责任还是现场分包商安装责任。",
        "ja": "現場で発見される調達機材のトラブル対応をサポートするのもPQCMの役務です。\n何かあった時にVendor Shopでの状況を確実に説明できる状態にしておき、トラブルの責任がVendorにあるのか、Forwarderにあるのか、サブコンにあるのか、正しい判断ができるようにしましょう。",
        "en": "Supporting site resolution of equipment receipt defects is a vital PQCM responsibility. Maintain clear shop inspection traceability so you can definitively determine whether defects stem from vendor shop errors, shipping transit damage, or site handling."
    },
    "4.1-R1": {
        "zh": "以人力不足为理由削减采购要求审查（Req. Review）等关键工作，只是将隐患推迟到未来爆发。越到项目后程，纠偏手段就越受限。务必坚持在前期阶段将质量风险控制在萌芽状态。",
        "ja": "人財不足を理由にReq. Reviewなどやるべきことをやらないのはリスクを先送りしているだけです。\n後になればなるほど打てる対策の手数が限られてくるので、初期段階でリスクをコントロールすることを心がけましょう。",
        "en": "Neglecting foundational tasks like Req. Reviews due to resource constraints is mere risk deferral. As execution progresses, corrective options shrink rapidly. Focus on proactively managing risks during early project phases."
    },
    "4.1-R2": {
        "zh": "检验前会议（PIM）是设备正式开工制造的“质量闸门”。如果在 PIM 上暴露前期图纸审核或检验试验计划（ITP）未敲定等缺陷，设备将无法如期开工，直接拖垮进度。必须高度重视 PIM，确保前置文件与 ITP 提前达成一致。",
        "ja": "PIMはまさに機器製作が開始されるゲート、そこでそれまでの不備が表面化すると直ちに製作を開始することが出来ず、プロジェクトに遅れが発生します。\nPIMの重要性を認識して、前段階のV-Doc. ReviewやITPの合意を確実に実施しましょう。",
        "en": "Pre-Inspection Meetings (PIM) serve as the formal quality gate for fabrication release. Unresolved issues surfacing at PIM halt manufacturing start, causing immediate schedule slippage. Finalize all V-Doc. reviews and ITP agreements ahead of PIM."
    },
    "4.1-R3": {
        "zh": "在商务合作中，虽然我们是买方客户，但在推进工程业务时必须将供应商视为合作伙伴，在相互尊重的基础上共赢。若采取居高临下的高压态度，不仅无法建立信任，一旦后续发生突发质量危机，将很难争取到厂商的全力配合。",
        "ja": "Vendorにとって顧客はJGCだけど、業務を進める上ではビジネスパートナーと考えて、お互いにリスペクトしながら業務を進めることが重要です。\n高圧的な態度でVendorに接すると、良好な関係が築けず、トラブルが発生した時に協力が得られなくなります。",
        "en": "While we are the client, vendors must be treated as strategic business partners with mutual respect. Heavy-handed tactics prevent solid relationship building and alienate vendor cooperation when unexpected troubleshooting support is required."
    },
    "4.2-R1": {
        "zh": "Hold Point（停工待检点/见证点）绝不能随意取消。业主通常认为见证点非常重要，突然变更会严重损害信任，因此应努力安排参加。",
        "ja": "Hold Pointは勝手にキャンセルすることはできません。\n客先もHold Pointは重要と考えていることが多く、突然の変更は信頼を損ねるので、参加を努力すべき",
        "en": "Hold Points cannot be cancelled arbitrarily. Clients view Hold Points as vital, and sudden changes will erode trust, so every effort should be made to participate."
    },
    "4.2-R2": {
        "zh": "只要坚持按月开展 QC 检验工时（MH）的精细化盘点与更新，就不会出现检验工时忽然耗尽的困境。未经预警突然向 PMT 索要工时追加会损害管理信任，凡有工时变动，应及时说明合理解释并按程序审批。",
        "ja": "少なくとも毎月のQC MHのUpdateを確実に実施していたら、ある日突然、検査MHが枯渇することはありません。\n突然の追加MHはPMTの信頼を損ねるので、追加が発生したら、適切な理由を説明して、都度追加MHを合意してください。",
        "en": "Monthly QC man-hour (MH) tracking prevents sudden MH depletion. Abrupt demands for additional man-hours alienate PMT trust; justify any scope changes clearly and secure formal agreements whenever extra MH is needed."
    },
    "4.2-R3": {
        "zh": "部分严格的业主并不认可偏向于企业内部认证的 ASNT SNT-TC-1A 无损检测人员资质。必须在合同初期仔细研读技术规范要求，避免出现资质否决风险。对于明确排除 SNT-TC-1A 的业主，后期试图强行沟通认可极其困难。",
        "ja": "社内資格に近いASNTのSNT-TC-1Aの認証プロセスを認めない客先も居るので、契約要求をシッカリ読み込んで、漏れの無いQC遂行を心がけてください。\n意識的にSNT-TC-1Aを排除したい客先に認めてもらうのはかなり難しいです。",
        "en": "Certain clients strictly reject employer-based ASNT SNT-TC-1A NDT certifications. Thoroughly review contract specifications early to avoid execution gaps. Persuading clients who explicitly exclude SNT-TC-1A to grant exceptions is exceptionally difficult."
    },
    "4.2-R4": {
        "zh": "第三方驻厂检验员是品质部门在工厂的眼睛和耳朵。如果检验员出具的检验报告（IR）表述不清、缺少追溯依据，一旦施工现场发现质量隐患，将无法追溯工厂当时的制造状况，甚至在索赔谈判中陷于被动。必须指导规范检验员出具高质量的报告。",
        "ja": "JGC検査員はVendor Shopにおける我々の目であり耳です。\nプロジェクト関係者が理解できるIRを作成してもらわないと、建設現場で何か問題が見つかった時に、Vendor Shopでの状況が追いかけられず、最悪の場合、Vendorと不利な交渉に持ち込まれますので、適切なレベルのIRが作成できるよう検査員を指導しましょう。",
        "en": "Inspectors are our eyes and ears in vendor shops. If Inspection Reports (IRs) lack detail, site troubleshooting cannot trace shop fabrication status, leaving us vulnerable in vendor negotiations. Guide inspectors to produce professional, clear, and traceable IRs."
    },
    "4.2-R5": {
        "zh": "在供应商工厂检查中发现的问题如果未能及时形成闭环反馈，必然会导致缺陷延伸至本项目设备中。对于已发现的质量隐患必须严肃处理，隐瞒缺陷强行出厂属于严重触犯工程师职业道德的红线行为。",
        "ja": "Vendor ShopでのFindingを確実にフィードバックしないと、自プロジェクトの製品にもトラブルが発生します。\n見つかったトラブルに対しては適切に対応しましょう、欠陥を隠して出荷するのは技術者倫理に抵触する大問題です。",
        "en": "Failing to feed back shop inspection findings guarantees quality issues on our equipment. Address all identified defects properly; concealing defects to force equipment shipment violates fundamental engineering ethics."
    },
    "4.3-R1": {
        "zh": "批量散件（Bulk Materials）发生不符合项（NCR）后的全面水平展开排查往往耗时巨大。但必须深入追溯问题的根本原因，凡存在系统性重现风险的，哪怕耗费精力也必须全面追溯复核，否则未来会在现场酿成更大的事故。",
        "ja": "バルク品のNCRの水平展開は膨大な時間を要する場合があります。\nトラブルの根本原因を追究して、再現性がある場合は時間をかけてでもバックチェックしないと、後日もっと大きな問題に発展する可能性があります。",
        "en": "Horizontally expanding bulk material non-conformance reports (NCRs) requires significant time. However, investigating root causes is mandatory; if systemic defects exist, thorough back-checking is essential to prevent massive site failures later."
    },
    "4.3-R2": {
        "zh": "政府官厅检验员本质上是执法人员或其法定代表，与业主有着本质区别。他们绝不会为了工程进度而承担任何违规风险，完全遵循法定程序。如果到了项目后期才发现遗漏了官厅见证要求，补救手段极其有限。务必在项目初期彻底梳理并纳入官厅法定检验要求。",
        "ja": "官庁検査員は基本的に役人かその代理人で客先とは異なり、リスクを取ってでもプロジェクトを進めようというマインドが乏しく、決められたルール通りに進める指向が強い場合が多いので、後になって官庁検査の要求漏れが見つかっても打てる対策が限られてきます。\nプロジェクトの初期から確実に官庁要求を取り込んでください。",
        "en": "Government inspectors are officials or legal deputies who strictly follow statutory rules with zero appetite for risk-taking to preserve schedule. If missing statutory inspection requirements are uncovered late, remedies are minimal. Incorporate government requirements from day one."
    },
    "4.3-R3": {
        "zh": "视工厂质量危机的严重程度而定，有时即便投入海量人力驻厂补救并将设备强行送达现场，后续依然会在施工现场引发大量的追加返修。工程历史上不乏因未能及时果断取消订单换厂（Re-ordering）而追受巨大损失的教训。项目团队应保持透明沟通，果断决策。",
        "ja": "トラブルの量と程度によりますが、徹底的に人財を投入してVendor Shopでトラブルを出来るだけ解決して現場に機器を収めても、現場でも追加の補修工事などが発生し、振り返ってみれば、ある時期に発注替えを決断するべきだった反省する事例もあります。\nプロジェクト関係者で常に状況を共有しながら適切な判断をしましょう。",
        "en": "Depending on shop trouble severity, pouring in massive manpower to patch equipment before site delivery may still result in heavy site rework. In hindsight, early order cancellation and re-sourcing is sometimes the correct call. Maintain transparent communication to make decisive project calls."
    },
    "4.3-R4": {
        "zh": "法兰密封面（Flange Face）的锈蚀与划伤是各类工程项目中最常见的质量通病。由于数量庞大，在工厂做到 100% 检验确实困难，但至少要确保合同防护要求被严格履行，并通过抽查留痕，确保即便未来现场出现争议，也能清晰说明工厂出厂时的合格状态。",
        "ja": "フランジ面の錆とキズは、どのプロジェクトでも大なり小なり問題が発生します。\n物量が多いのでVendor Shopで100%チェックをするのも難しいが、少なくともプロジェクトの要求事項は確実に履行させた上で、抜き取りで確認し、将来問題が起きた場合でも、Vendor Shopでなされたことが確実に説明でき状態にしておきましょう。",
        "en": "Flange face rust and scratches occur on virtually every project. Given high quantities, 100% shop inspection is tough, but ensure project preservation specs are strictly executed and spot-checked, so shop inspection status can be documented if disputes arise later."
    },
    "5.3-R1": {
        "zh": "协助处理施工现场发现的调达设备质量缺陷与损坏也是 PQCM 的重要职责。当现场发生争议时，必须能够清晰还原设备在工厂出厂时的检验状况，从而精准判定质量责任究竟属于制造厂商、物流运输商还是现场安装分包商。",
        "ja": "現場で発見される調達機材のトラブル対応をサポートするのもPQCMの役務です。\n何かあった時にVendor Shopでの状況を確実に説明できる状態にしておき、トラブルの責任がVendorにあるのか、Forwarderにあるのか、サブコンにあるのか、正しい判断ができるようにしましょう。",
        "en": "Supporting site teams on procured equipment defects is a core PQCM duty. Maintain complete shop inspection history so you can accurately explain fabrication status and determine whether fault lies with the Vendor, Logistics Forwarder, or Site Subcontractor."
    },
    "5.3-R2": {
        "zh": "对于包含海量散件零配件的成套设备（Package Equipment），仅靠装箱单（Packing List）往往难以在现场快速定位物件。PQCM 应深入了解施工现场的材料管理与开箱流程，在工厂打包出货阶段就推行便于现场接收与管理的标记打包标准。",
        "ja": "膨大なルーズパーツを含むようなパッケージ機器などでは、Packing Listだけでは何がどこにあるのか分からない場合があるので、建設現場でどのように材料管理をするのか理解した上で、現場に優しい機器の出荷を心がけましょう。",
        "en": "For complex packaged equipment with extensive loose parts, packing lists alone are insufficient for site material tracking. Understand site storage and handling workflows to enforce vendor packing and labeling standards that support smooth site material control."
    },
    "5.3-R3": {
        "zh": "在工厂阶段就已经暴露不符合项（NCR），却因处置不彻底、带病出厂，最终导致质量隐患在施工现场被成倍放大爆发。作为对项目质量负责的团队，这是极其沉痛的教训。务必揪出问题的根本原因，切实落实纠正预防措施（CAPA）。",
        "ja": "出荷前にNCRが発生していたにも関わらず、十分な対応を怠ったため現場でさらに問題が拡大する場合があります。\n品質に責任を負うチームとしては恥ずべき事象なので、問題の根本原因を確実に捉えて、再発防止に心掛けてください。",
        "en": "Allowing known shop NCRs to be poorly resolved creates catastrophic, expanded failures once equipment reaches the site. For a quality team, this is unacceptable. Always identify true root causes and enforce robust corrective actions to prevent site escalation."
    },
    "5.3-R4": {
        "zh": "特别是对于管道散件材料，如果缺乏完备可追溯的材质证书（MTC），建设现场将无法向分包商发放材料，直接引发现场施工停摆风险。在签发放行证书（IRC）时，必须确立将合格 MTC 及时送达现场的刚性保障机制。",
        "ja": "特に配管バルク材はMTCが無いと建設現場でサブコンに材料を払い出すことができず、工事が止まるリスクがあります。\nIRC発行時にはTraceableなMTCを確実に現場に届けるプロトコルを確立してください。",
        "en": "Without verifiable MTCs, piping bulk materials cannot be released to site subcontractors, risking construction halts. When issuing Inspection Release Certificates (IRCs), establish rigid protocols ensuring traceable MTCs arrive on site in parallel."
    }
};

function showExplanationsPage() {
    const lang = gameState.lang;
    const pageLabels = {
        zh: {
            title: "全关卡答题解说与质量评析",
            back: "返回证书",
            noQuestions: "您在本次故事线中尚未回答任何问题。",
            questionBg: "题目背景",
            yourChoice: "您的选择"
        },
        ja: {
            title: "全問題の解説と振り返り",
            back: "認定証へ戻る",
            noQuestions: "回答された問題がありません。",
            questionBg: "問題背景",
            yourChoice: "選択した回答"
        },
        en: {
            title: "Storyline Explanations & Quality Review",
            back: "Back to Certificate",
            noQuestions: "No answered questions to display.",
            questionBg: "Question Background",
            yourChoice: "Your Selection"
        }
    };

    els.explanationTitle.textContent = pageLabels[lang].title;
    els.explanationBackText.textContent = pageLabels[lang].back;
    els.explanationList.innerHTML = "";

    // Collect all answered selections across the storyline path (regardless of score!)
    const answeredSelections = [];
    gameState.path.forEach(nodeId => {
        const sel = findSelectionById(nodeId);
        if (sel && sel.id !== "start_to_welcome" && sel.id !== "start_btn") {
            answeredSelections.push(sel);
        }
    });

    if (answeredSelections.length === 0) {
        const emptyMsg = document.createElement("div");
        emptyMsg.className = "explanation-perfect-msg";
        emptyMsg.textContent = pageLabels[lang].noQuestions;
        els.explanationList.appendChild(emptyMsg);
    } else {
        answeredSelections.forEach(sel => {
            const chId = getChapterIdOfSelection(sel.id);
            const ch = STORY_DATA[chId];
            if (!ch) return;

            const item = document.createElement("div");
            item.className = "explanation-item";

            // Title (Chapter Header)
            const title = document.createElement("h3");
            title.className = "explanation-item-title";
            title.textContent = `${ch.chapter} ${ch.title ? ch.title[lang] || "" : ""}`;
            item.appendChild(title);

            // Question Description (题目的文字)
            const questionDiv = document.createElement("div");
            questionDiv.className = "explanation-item-question";
            questionDiv.innerHTML = `<strong>${pageLabels[lang].questionBg}:</strong> ${ch.desc ? ch.desc[lang] || "" : ""}`;
            item.appendChild(questionDiv);

            // Selected Choice Text (选择的选项的文字) - NO SCORE DISPLAY!
            const choiceDiv = document.createElement("div");
            choiceDiv.className = "explanation-item-choice";
            choiceDiv.innerHTML = `<span><strong>${pageLabels[lang].yourChoice}:</strong> ${sel.desc ? sel.desc[lang] || "" : ""}</span>`;
            item.appendChild(choiceDiv);

            // Explanation Text (解说)
            const expText = document.createElement("div");
            expText.className = "explanation-item-text";
            
            let exp = EXPLANATIONS[chId] || EXPLANATIONS[sel.id];
            let expString = "";
            if (exp && exp[lang]) {
                expString = exp[lang];
            } else {
                const placeholders = {
                    zh: "【暂无解说】",
                    ja: "【解説準備中】",
                    en: "[No explanation available]"
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
