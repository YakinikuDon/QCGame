/* ==========================================================================
   QC AVG GAME: GREAT PQCM ADVENTURE - LOGIC & STORIES
   Supports Chinese, Japanese, and English
   Includes dynamic SVG Story Tree with Time Travel and Canvas Confetti
   ========================================================================== */

// --- 1. MULTILINGUAL STORY DICTIONARY ---
const STORY_DATA = {
    start: {
        avatar: 'normal',
        npcAvatar: 'smiling',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "小Q，欢迎来到品质管理部！我是你的导师胜田。从今天起，你将作为项目质量经理（PQCM）接手新项目。项目千头万绪，但只要牢记我们的【QC 7 Golden Rules】，你就一定能克服困难，成为一名伟大的质量经理！现在，让我们开始第一项工作吧！",
            ja: "小Q（キューちゃん）、品質管理部へようこそ！私は君の指導員、勝田だ。今日から君はプロジェクト品質管理マネージャー（PQCM）として新プロジェクトを担当してもらう。色々と大変なこともあるが、我々の【QC 7 Golden Rules】をしっかりと胸に刻んでおけば、どんな困難も乗り越え、偉大なクオリティマネージャーになれるはずだ！さあ、最初の業務に取り掛かろう！",
            en: "Q-chan, welcome to the Quality Control Department! I am your mentor Katsuda. From today, you will take over the new project as the Project QC Manager (PQCM). A project is complex, but as long as you remember our 【QC 7 Golden Rules】, you will overcome any difficulties and become a great QC Manager! Now, let's start our first task!"
        },
        choices: [
            {
                text: {
                    zh: "出发！接手新项目",
                    ja: "スタート！新プロジェクトを担当する",
                    en: "Let's go! Take over the new project"
                },
                nextId: "ch1_intro"
            }
        ]
    },

ch1_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: '旁白',
            ja: 'ナレーション',
            en: 'Narrator'
        },
        dialogue: {
            zh: '【第一关：技术评估 (Technical Evaluation)】\n你收到动设备部（回転機チーム）发送的 critical 泵 Requisition。因工期非常紧张，制造厂（Vendor）提出的焊接材料标准与项目 specs 不符，但专业设计人员认为没问题，说直接同意就行。PM 李经理在一旁催促你赶紧签字放行。你会怎么做？',
            ja: '【第1章：技術評価 (Technical Evaluation)】\n回転機チームから重要なポンプの Requisition が届きました。工期が非常に逼迫している中、メーカー（Vendor）が提案した溶接材料の規格がプロジェクト仕様書（Specs）と一致していません。しかし、設計担当者は「問題ないからそのまま同意してくれ」と言っています。PMの李マネージャーからも早く承認してサインするよう急かされています。どうしますか？',
            en: "【Chapter 1: Technical Evaluation】\nYou received a Requisition for a critical pump from the Rotating Equipment Team (回転機チーム). The schedule is extremely tight, and the vendor's proposed welding material standard deviates from the project specs. However, the design engineer says 'It's fine, just approve it.' PM Mr. Li is urging you to sign off immediately. What will you do?"
        },
        choices: [
            {
                text: {
                    zh: '向进度妥协：因工期特别紧张，省去协调直接同意设计人员的意见。',
                    ja: '工期を優先する：工期が非常に厳しいため、調整を省き设计担当者の意見にそのまま同意する。',
                    en: "Compromise for schedule: Since the timeline is tight, agree with the design engineer's opinion directly."
                },
                nextId: 'ch1_bad'
            },
            {
                text: {
                    zh: '主动参与澄清会议：携带相关资料与 QC 专家讨论，联合设计部与制造厂形成合理结论。',
                    ja: 'クラリフィケーション会議に参画：資料を持参してQC専門家と協議し、設計部門・メーカーと合理的な结论を出す。',
                    en: "Actively coordinate: Bring references to discuss with QC experts, and work with Engineering and the vendor to reach a reasonable conclusion."
                },
                nextId: 'ch2_intro'
            }
        ]
    },

    ch1_bad: {
        avatar: 'crying',
        npcAvatar: 'strict',
        charName: {
            zh: '胜田前辈',
            ja: '勝田先輩',
            en: 'Katsuda-senpai'
        },
        dialogue: {
            zh: '【Bad Ending 1: 现场重熔惨剧】\n制造厂按照偏低的标准进行了焊接。结果在设备运抵工地后，被业主史密斯抓到焊缝严重开裂！整批设备必须全部刨开重新熔焊，现场补焊费用高昂，反而导致了数百万美元的损失以及更严重的工期延误……',
            ja: '【Bad Ending 1: 現場での溶接割れ惨劇】\nメーカーはレベルの低い規格で溶接を完了させました。しかし、機器が建設現場に到着した後、客先の史密ス氏から溶接部の深刻な割れを指摘されてしまいました！結果、現場ですべて溶接部を削り取って再溶接する羽目になり、莫大な補修費用とさらなる工期遅延が発生しました……',
            en: "【Bad Ending 1: Site Re-welding Calamity】\nThe vendor carried out welding using the lower standard. After the equipment arrived at the site, Client Mr. Smith discovered severe weld cracking! The entire batch of equipment had to be gouged out and re-welded on-site, incurring astronomical repair costs and even worse schedule delays..."
        },
        tip: {
            zh: '💡 胜田前辈的提示：QC 黄金法则①——PQCM 应对所有调达品的质量负责。作为质量经理，我们不是简单的检验员，必须早期介入，带上专业资料和部门专家讨论，寻求合理且合规的质量方案，绝不能在未确认时因工期盲从设计意见！',
            ja: '💡 勝田先輩のアドバイス：QCゴールデンルール①――PQCMは担当プロジェクトの全調達資機材の品質に責任を持つ。我々は単なる検査調整員ではない。早期に関与し、専門資料を持って部門内エキスパートと協議し、合理的かつ適合した品質ソリューションを見出すべきだ。工期を理由に未確認のまま設計意見に盲従してはならない！',
            en: "💡 Katsuda-senpai's Hint: QC Golden Rule 1 - The PQCM is responsible for the quality of all procured materials. We are not simple inspectors; we must get involved early, bring reference materials to discuss with department experts, and reach a reasonable and compliant quality solution. Never blindly follow engineering's opinion to rush the schedule!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch1.jpg'
    },

ch2_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: '旁白',
            ja: 'ナレーション',
            en: 'Narrator'
        },
        dialogue: {
            zh: '【第二关：启动会议 (KOM & PIM)】\n订单已发，需要与 Vendor 召开启动会。PM 李经理极力催促称工期极其紧迫且预算经费受限，要求省去单独的 Pre-Inspection Meeting (PIM)，直接在 KOM 中顺带提及即可。你该怎么做？',
            ja: '【第2章：キックオフ会議 (KOM & PIM)】\n発注が完了し、メーカーとキックオフ会議を開催します。PMの李マネージャーは「工期が非常に厳しく予算も限られているため、個別の Pre-Inspection Meeting (PIM) は省略し、KOMのついでに軽く説明するだけで済ませてくれ」と強く要求しています。どうしますか？',
            en: "【Chapter 2: Kick-Off Meeting (KOM & PIM)】\nThe purchase order has been placed. PM Mr. Li is pushing you hard, claiming that both schedule and budget are extremely tight. He wants to skip the dedicated Pre-Inspection Meeting (PIM) and just briefly cover it in the KOM."
        },
        choices: [
            {
                text: {
                    zh: '坚持召开 PIM：在专有会议上向 Vendor 和检验员详细阐述历史上类似的制品质量事故，核对 ITP 条款。',
                    ja: 'PIM開催を堅持する：専門の会議でメーカーと検査員に過去の製品品質事故の事例を詳しく説明し、ITP条項を確認する。',
                    en: 'Insist on holding the PIM: Present past product quality accident cases to the vendor and inspector, and review ITP terms in detail.'
                },
                nextId: 'ch3_intro'
            },
            {
                text: {
                    zh: '听从 PM 压力：省去 PIM，仅在 KOM 会议中由设计人员捎带提及 QC 规则。',
                    ja: 'PMの圧力に従う：PIMを省略し、KOM会議中に設計担当者から軽くQC規則に触れるだけにする。',
                    en: "Yield to PM pressure: Skip the PIM, and just let engineering briefly mention QC rules during the KOM."
                },
                nextId: 'ch2_bad'
            }
        ]
    },

    ch2_bad: {
        avatar: 'panicked',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 2: 现场返工泥潭】\n缺少针对性的质量事故交底，Vendor 遗漏了核心见证点，擅自将后续部件盖板封闭。现场 QC 发现后，被迫将已经完成的管道焊缝全部铲掉重新焊接返工。这一折腾导致进度彻底崩溃，损失远超省下的差旅费！",
            ja: "【Bad Ending 2: 現場手戻りの泥沼】\n適切な品質事故の周知が欠けていたため、メーカーは重要な見証点（Witness Point）を漏らし、無断で後続部品のカバーを閉じてしまいました。現場QCに指摘され、すでに行われた配管溶接部をすべて鏟り落として再溶接する手戻りが発生。工期は完全に崩壊し、出張費を節約した以上の損失を出してしまいました！",
            en: "【Bad Ending 2: Reworking Quagmire】\nDue to the lack of dedicated quality accident orientation, the vendor missed critical witness points and enclosed the assembly. The Site QC discovered it and forced them to gouge out all finished welds and rework. This completely wrecked the schedule, costing far more than the saved travel budget!"
        },
        tip: {
            zh: "💡 胜田前辈的提示：PIM 是向 Vendor 传递协调规则与质量底线的核心屏障，绝对不能因为暂时的预算或进度而妥协省略。预防（Pro-active QC）比事后纠正（Rework）更省 Man-hour！",
            ja: "💡 勝田先輩のアドバイス：PIMはメーカーに調整ルールと品質のデッドラインを伝える極めて重要な防壁だ。一時的な予算や工期のために省略してはならない。予防（Pro-active QC）は、事後の手戻り（Rework）よりもはるかにマンアワーを節約できる！",
            en: "💡 Katsuda-senpai's Hint: The PIM is a critical gatekeeper to align coordination rules and quality baselines with the vendor. It must never be skipped for minor budget or schedule constraints. Preventive action (Pro-active QC) saves far more man-hours than rework!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch2.jpg'
    },

ch3_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: '旁白',
            ja: 'ナレーション',
            en: 'Narrator'
        },
        dialogue: {
            zh: '【第三关：图书审查 (Document Review)】\n审查低温压力容器的 WPS/PQR（焊接规程）。项目 spec 规定焊材必须进行低温冲击试验，但 Vendor 未提供此项，且辩称“我们是行业老字号，以前不做也没出过事”。目前已是允许开工的最后期限，PM 催促你放行。',
            ja: '【第3章：図書レビュー (Document Review)】\n低温圧力容器の WPS/PQR（溶接施工要領書）をレビューしています。仕様書（Spec）では溶接材料の低温衝撃試験が必須とされていますが、メーカーは未提出です。「弊社は老舗なので、今までこの試験をしなくても問題ありませんでした」と主張しています。現在は製造着手の最終期限であり、PMが承認を急かしています。',
            en: "【Chapter 3: Document Review】\nYou are reviewing the WPS/PQR for a low-temperature pressure vessel. The spec mandates a low-temperature impact test for the weld metal, but the vendor did not submit it, claiming 'We are a reputable shop and never had problems without this test.' It is now the absolute deadline for fabrication start."
        },
        choices: [
            {
                text: {
                    zh: '坚决退回图书。要求 Vendor 必须补做冲击试验，确认材料指标符合要求后才予批准开工。',
                    ja: '図書を断固差し戻す：メーカーに衝撃試験の追加実施を要求し、材料指標の適合を確認するまで着手を承認しない。',
                    en: 'Firmly reject the submittal. Demand that the vendor perform the impact test, and only approve fabrication after compliance is verified.'
                },
                nextId: 'ch4_intro'
            },
            {
                text: {
                    zh: '向 PM 汇报并获得批准后，向制造厂批复“允许在 WPS 未完全批准时先行开工”，后续补交。',
                    ja: 'PMに報告して承認を得た後、「WPSの完全承認前に製造着手してよい」とメーカーに返答し、報告書は後日提出させる。',
                    en: 'Report to the PM, and with their approval, authorize the vendor to start fabrication before the WPS is fully approved, and submit the report later.'
                },
                nextId: 'ch3_bad'
            }
        ]
    },

    ch3_bad: {
        avatar: 'crying',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 3: 冷凝器破裂灾难】\n压力容器发运安装完毕。但在工地低温试运行期间，由于焊缝没有经过冲击功检验，现场低温受载导致焊缝发生脆断开裂泄漏！因为设备已经安装就位，现场返修成本是厂内的数百倍，项目面临巨额索赔！",
            ja: "【Bad Ending 3: BOGリコンデンサー脆性破壊の災難】\n圧力容器が現場に到着し据え付けられました。しかし、試運転中に溶接部の低温衝撃値が不十分だったため、脆性破壊によるガス漏れ事故が発生！すでに据え付け完了後のため、現場での手直し費用は工場の数百倍に膨らみ、プロジェクトは巨額の損害賠償を突きつけられました！",
            en: "【Bad Ending 3: Condenser Ruin Disaster】\nThe vessel was shipped and installed. However, during cryogenic commissioning on-site, the weld seam suffered brittle fracture and leaked because its low-temperature impact properties were never verified! Since the equipment was already installed, the site repair cost was hundreds of times higher than in-shop."
        },
        tip: {
            zh: "💡 胜田前辈的提示：绝不能因工期妥协质量底线！低温压力容器的冲击性能是防范脆性断裂（脆断）的红线，属于一票否决指标。任何时候都不能用“先批开工再补报告”的形式妥协质量规范！",
            ja: "💡 勝田先輩のアドバイス：工期を理由に品質のデッドラインを妥協してはならない！低温圧力容器の衝撃試験値は、脆性破壊を防ぐための超重要管理項目であり、一発アウトのレッドラインだ。いかなる場合も「未承認で着手させ、後から報告書を出す」ような妥協をしてはならない！",
            en: "💡 Katsuda-senpai's Hint: Never compromise the quality baseline for the schedule! Low-temperature impact properties are a critical safeguard against brittle fracture. They are a non-negotiable metric. You must never compromise quality specifications by allowing start-work under 'conditional' approvals."
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch3.jpg'
    },

    ch4_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: "旁白",
            ja: "ナレーション",
            en: "Narrator"
        },
        dialogue: {
            zh: "【第四关：检验协调 (Inspection Coordination)】\n检验节点临近，第三方检验机构（TPI）派来的检验员未在 JGC 检验员资质库（QOI Database）中注册。Vendor 催促如果等待注册审批，可能会延误首批检验和出厂船期。",
            ja: "【第4章：検査調整 (Inspection Coordination)】\n立会検査の期限が迫る中、検査会社（TPI）が派遣した検査員が弊社の検査員資格認定データベース（QOI Database）に登録されていないことが判明しました。メーカーは「QOIの登録承認を待つと最初の検査が遅れ、船期に間に合わない」と催促しています。",
            en: "【Chapter 4: Inspection Coordination】\nThe inspection date is near, but the inspector assigned by the TPI agency is not registered in JGC's Inspector Qualification Database (QOI Database). The vendor warns that waiting for QOI approval will delay the first inspection and cause missed shipping schedules."
        },
        choices: [
            {
                text: {
                    zh: "允许直接检验：认为第三方检验机构在 Proposal 阶段已被审查，无需着急做 QOI 登记，检验人员直接去检验。",
                    ja: "そのまま検査を許可する：検査会社自体は見積時に審査されているため、QOI登録を急ぐ必要はなく、検査員を直接派遣させる。",
                    en: "Allow inspection directly: Assume since the TPI agency was audited during the proposal phase, there's no rush to do QOI registration, and let the inspector proceed."
                },
                nextId: "ch4_bad"
            },
            {
                text: {
                    zh: "严格遵循 QOI 流程：核实检验员资质并要求补注册，同时准备检验指导书 (Inspector Instruction Sheet) 明确检验重点。",
                    ja: "QOIプロセスを遵守する：検査員の資格を確認して緊急登録を要請し、同時に検査指示書（Inspector Instruction Sheet）を発行して重点を明確にする。",
                    en: "Follow QOI procedure: Verify inspector qualifications, request expedited registration, and prepare an Inspector Instruction Sheet outlining the check items."
                },
                nextId: "ch5_intro"
            }
        ]
    },

    ch4_bad: {
        avatar: 'panicked',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 4: 隐形检验员漏洞】\n由于未经过资质审查，该检验员缺乏专业技能，错过了主焊缝的内部缺陷。设备运抵现场水压试验时管壁膨胀破裂，造成严重质量事故！并且由于该检验员在 QOI 系统中没有合法授权记录，我司无法向检验机构追责和索赔，陷入巨大法律纠纷！",
            ja: "【Bad Ending 4: シャドー検査員の落とし穴】\n資質審査を行わなかったため、その検査員には十分なスキルがなく、主要溶接部の内部欠陥を見落としてしまいました。現場での耐圧試験中に容器が膨張・破裂し、大事故に！さらに、検査員がシステム上で正規承認されていなかったため、検査会社に責任を追及・賠偿請求することもできず、深刻な法的紛争に発展しました！",
            en: "【Bad Ending 4: Ghost Inspector Loophole】\nWithout qualification vetting, the inspector lacked proper skills and missed inner defects of the main weld. The vessel expanded and burst during site hydrostatic tests. Because the inspector was never authorized in the QOI database, JGC could not claim damages against the agency, causing massive legal disputes!"
        },
        tip: {
            zh: "💡 胜田前辈的提示：检验员资质认证（QOI Process）是 QC 管理的底线合规要求。任何检查必须由资质核准的检验员执行，并且派遣前必须下发检验指导书（Inspector Instruction Sheet），这是对项目的基本保护！",
            ja: "💡 勝田先輩のアドバイス：検査員資格認定（QOI Process）は、QC管理におけるコンプライアンスの最低ラインだ。すべての立会検査は、承認された検査員が実施しなければならない。また、派遣前に必ず検査指示書（Inspector Instruction Sheet）を発行することが、プロジェクトを守る盾となる！",
            en: "💡 Katsuda-senpai's Hint: Inspector Qualification (QOI Process) is the baseline compliance requirement of QC management. Every inspection must be performed by an approved inspector, and a detailed Inspector Instruction Sheet must be issued beforehand to protect the project!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch4.jpg'
    },

ch5_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: '旁白',
            ja: 'ナレーション',
            en: 'Narrator'
        },
        dialogue: {
            zh: '【第五关：现场不符合项 (NCR Handling)】\n制造检验中发现筒体板厚略有超差。Vendor 试图在未提交正式修复程序的情况下私自打磨补焊以赶上装船。PM 疯狂施压要求快速处理，不让你走繁琐的 NCR 流程。你会怎么做？',
            ja: '【第5章：不適合管理 (NCR Handling)】\n製造検査でシェル板厚がわずかに仕様を下回っていることが判明しました。メーカーは「船期に間に合わせるため」と、正式な補修要領書（Repair Procedure）を提出せず、無断で肉盛り・グラインダー仕上げで済ませようとしています。PMも「面倒なNCRを発行するな」と猛烈なプレッシャーをかけてきます。どうしますか？',
            en: "// 【Chapter 5: Non-Conformity Report (NCR)】\nDuring inspection, the shell plate thickness is found slightly under tolerance. The vendor wants to perform grinding and weld repairs secretly without submitting a formal repair procedure to meet the vessel sailing date. PM Mr. Li is putting heavy pressure on you to skip the tedious NCR process."
        },
        choices: [
            {
                text: {
                    zh: '开具 NCR：要求 Vendor 走正式程序提交修复方案（Repair Procedure），审批通过并在检验员见证下修复。',
                    ja: 'NCRを発行する：メーカーに正式な不適合修補要領書（Repair Procedure）の提出を求め、承認後に検査員の立会のもとで補修させる。',
                    en: "Issue an NCR: Force the vendor to submit a formal Repair Procedure for approval, and perform the repair under the inspector's witness."
                },
                nextId: 'ch6_intro'
            },
            {
                text: {
                    zh: '默许 Vendor 快速修补：避开书面记录，不给项目留下负面文件以帮 PM 节省时间。',
                    ja: 'メーカーの隠密補修を黙認する：記録を残さず、PMに都合が悪い書類を作らないようにし時間を節約する。',
                    en: "Acquiesce to the vendor's quick repair: Skip the written records to save time for the PM and avoid negative project files."
                },
                nextId: 'ch5_bad'
            }
        ]
    },

    ch5_bad: {
        avatar: 'crying',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 5: 浑身是泥的 QC】\n私下修补的焊缝在压力试验中开裂，并被业主抓包。业主愤怒投诉。为了应付业主，PM 瞬间反口，向部门投诉 QC“监管不力、私自放行未经批准的修补”。所有的锅都扣在了你头上，你成了浑身是泥的替罪羊！",
            ja: "【Bad Ending 5: 泥だらけのQC（スケープゴート）】\n裏で補修された箇所が耐圧試験で裂け、客先に発覚して激怒されました。PMは自らの保身のため、一転して「QCが勝手に不適切な補修を放任した」と会社に苦情を入れました。すべての責任が君に押しつけられ、文字通り泥をかぶる羽目になりました！",
            en: "【Bad Ending 5: Mud-Splattered QC】\nThe secretly repaired weld cracked during pressure testing and was caught by the client, who filed an angry complaint. To save his own skin, the PM immediately backstabbed you, complaining that 'QC failed to inspect and allowed unauthorized repairs.' You took the entire blame and became a mud-splattered scapegoat!"
        },
        tip: {
            zh: "💡 胜田前辈的提示：QC 黄金法则③——不合格决不能隐瞒。出现质量问题开具 NCR，要求提供正式的 Repair Procedure 是国家安全、项目质量和保护你自身利益的最佳盾牌。我们不怕泥，但必须主动控制泥的走向！",
            ja: "💡 勝田先輩のアドバイス：QCゴールデンルール③――不適合管理は決して隠蔽してはならない。品質問題に対してNCRを発行し、正式な修補要領書（Repair Procedure）を求めることは、プラントの安全、品質、そして君自身を守る最大の盾だ。我々は泥をかぶる覚悟はあっても、その泥の出所はコントロールしなければならない！",
            en: "💡 Katsuda-senpai's Hint: QC Golden Rule 3 - Nonconformities must never be hidden. Issuing an NCR and demanding a formal Repair Procedure is your strongest shield to protect plant safety, project quality, and yourself. We are not afraid of mud, but we must actively control where the mud lands!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch5.jpg'
    },

    ch6_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: "旁白",
            ja: "ナレーション",
            en: "Narrator"
        },
        dialogue: {
            zh: "【第六关：发行放行证 (IRC Issuance)】\n设备制造完毕，但表面油漆有几处轻微擦伤，且铭牌排版有一处不影响技术使用的文字微瑕。PM 强烈要求立刻发行放行证（IRC）出货。你会怎么做？",
            ja: "【第6章：出荷許可証の発行 (IRC Issuance)】\n機器の製造は完了しましたが、表面塗装に数箇所軽微なキズがあり、銘牌（Nameplate）の文字レイアウトにも一部軽微な誤り（実使用上影響なし）があります。PMは「今すぐ出荷許可証（IRC）を発行して出荷してくれ」と強く求めています。どうしますか？",
            en: "【Chapter 6: Inspection Release Certificate (IRC)】\nFabrication is complete. However, there are minor scratches on the paint surface, and the nameplate has a tiny typographical error that does not affect operation. PM Mr. Li is demanding that you immediately issue the IRC. What will you do?"
        },
        choices: [
            {
                text: {
                    zh: "强行扣押 IRC：坚持完美主义，要求 Vendor 将油漆全部刷好、铭牌重做合格后才允许放行出厂。",
                    ja: "IRC発行を拒否する：完璧主義を貫き、メーカーが傷をすべて再塗装し、銘牌を再製作して完全に合格するまで出荷を認めない。",
                    en: "Hold the IRC: Stand on strict perfectionism, and refuse to issue the IRC until all paint scratches are recoated and the nameplate is remade."
                },
                nextId: "ch6_bad"
            },
            {
                text: {
                    zh: "签发 IRC 并标记 Carry Over Work：将擦伤和铭牌问题列为 Punch List，交由现场 QC 团队在工地现场监督修复。",
                    ja: "Carry Over Work 条件付きでIRCを発行する：傷や銘牌の問題をパンチリスト（Punch List）に登録し、現場のQCチームに引き継いで現地で補修・修正させる。",
                    en: "Issue IRC with Carry Over Work: Document the scratches and nameplate issue in the Punch List (Carry Over Work) for follow-up by the Site QC."
                },
                nextId: "ch7_intro"
            }
        ]
    },

    ch6_bad: {
        avatar: 'panicked',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 6: 进度破坏者】\n因为这几处完全不影响项目安全的小缺陷，设备在港口滞留了整整两周！延误产生了数万美元的滞港费，严重影响了运输大船的装载计划，PM 和设计部门联合投诉你死板、缺乏商业敏感度和全局观！",
            ja: "【Bad Ending 6: プロジェクトクラッシャー】\n安全上問題のない軽微な不具合のために、機器は港で2週間も留め置かれました！数万ドルの滞船料が発生し、大船の積載スケジュールを狂わせました。PMと設計部門から「頭が固い」「商業感覚と全体視野が欠けている」と猛烈なクレームが入りました！",
            en: "// 【Bad Ending 6: Schedule Saboteur】\nDue to minor flaws that had zero impact on safety, the equipment was held up at port for two weeks! This caused tens of thousands of dollars in demurrage fees and disrupted shipment schedules. The PM and Engineering filed complaints, calling you rigid and commercially insensitive."
        },
        tip: {
            zh: "💡 胜田前辈的提示：QC 黄金法则④和⑤——合理满足内部客户并支持现场。质量控制要有“しなやかさ（韧性与弹性）”。对于非安全关键、可在工地修复的小缺陷，应积极使用 Carry Over Work 机制交由现场解决，避免耽误船期！",
            ja: "💡 勝田先輩のアドバイス：QCゴールデンルール④＆⑤――内外部顧客の満足と現場サポート。品質管理には「しなやかさ」が求められる。安全に関わらない現地補修可能な軽微な欠陥については、Carry Over Work（持ち越し役務）を活用して現場に引き継ぎ、無用な出荷遅延を回避すべきだ！",
            en: "💡 Katsuda-senpai's Hint: QC Golden Rules 4 & 5 - Achieve customer satisfaction and support the site. Quality control requires flexibility ('しなやかさ'). For minor defects that do not affect safety and can be repaired on-site, utilize the Carry Over Work mechanism to avoid shipping delays!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch6.jpg'
    },

ch7_intro: {
        avatar: 'normal',
        npcAvatar: 'hidden',
        charName: {
            zh: '旁白',
            ja: 'ナレーション',
            en: 'Narrator'
        },
        dialogue: {
            zh: '【第七关：MRB 审查 (MDRB Review)】\n设备运抵工地，进行竣工资料册（MRB）最终审查。发现管道材质证书（MTC）缺失了几页。由于 Vendor 已经拿到了 95% 的尾款，态度十分消极，拒不配合查找证书。此时你打算？',
            ja: '【第7章：MRBレビュー (MDRB Review)】\n機器が現場に到着し、製造記録図書（MDRB）の最終審査を行っています。配管の材質証明書（MTC）が数ページ不足していることがわかりました。メーカー（Vendor）はすでに95％の支払いを回収しているため、非常に非協力的な態度で探そうとしません。どうしますか？',
            en: "【Chapter 7: MRB Review】\nThe equipment arrived at the site. During the Manufacturing Record Book (MDRB / MRB) review, you find a few piping Material Test Certificates (MTC) missing. Since the vendor has already collected 95% of the payment, they are highly unresponsive and lazy. What will you do?"
        },
        choices: [
            {
                text: {
                    zh: '多方协同主动施压：给制造厂发函提醒，同时联合采购部门（Procurement），以扣留最后 5% 尾款为杠杆，敦促厂家补齐。',
                    ja: '多角的に協同し能動的に施圧する：メーカーに督促状を送ると同時に、調達部（Procurement）と連携し、残り5%の尾款の保留を交渉材料にして速やかな提出をメーカーに促す。',
                    en: 'Leverage other teams: Send a notice to the vendor and coordinate with Procurement to hold the remaining 5% retention payment as leverage to urge submission.'
                },
                nextId: 'happy_clear'
            },
            {
                text: {
                    zh: '按规矩被动挂起：仅在 MDRB 流程中写明批注【少 MTC】，然后被动挂起流程，等待 Vendor 提交下一版本。',
                    ja: '規程通り受動的にペンディングする：MDRBレビューに「MTC不足」とだけ書いてコメント付きでシステム上で差し戻し、メーカーの自主的な更新を待つ。',
                    en: "Halt passively: Simply comment 'Missing MTC' in the MDRB system, freeze the workflow, and wait for the vendor to submit a revision."
                },
                nextId: 'ch7_bad'
            }
        ]
    },

    ch7_bad: {
        avatar: 'crying',
        npcAvatar: 'strict',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "【Bad Ending 7: 纸上谈兵的泥潭】\n对于已经拿到 95% 尾款的消极 Vendor，不做任何实质推动，他们根本不会管系统上的批注。MDRB 图书被无限期挂起。直到业主最终审查，因为缺失关键管线材质证书而拒绝投运，整个项目卡在收尾结款阶段，业主大发雷霆！",
            ja: "【Bad Ending 7: 紙の上の泥沼】\nすでに95%の金を回収したメーカーは、システムにコメントを書かれた程度では動きません。MDRBは放置され続けました。プロジェクト完了時に、客先が材質証明書不足を見つけて運転開始を拒否。プロジェクトはクローズできず、客先は大激怒！",
            en: "【Bad Ending 7: Paperwork Purgatory】\nFor passive vendors with 95% payment in hand, a system comment is easily ignored. The MDRB was shelved indefinitely. During final audit, the client found the missing MTCs and refused plant commissioning, halting project closeout and payment."
        },
        tip: {
            zh: "💡 胜田前辈的提示：竣工资料（MRB）是法定质量交付件，缺失 MTC 会导致巨大的合规与投运风险。面对消极 Vendor，单纯走流程是纸上谈兵。必须运用商业杠杆，协同采购部卡扣尾款，主动打破僵局！",
            ja: "💡 勝田先輩のアドバイス：製造記録（MRB）はプラント引き渡し時の法定証明書であり、MTCの欠如は大きな法令・安全リスクとなる。非協力的なメーカーに対し、ただ手順通りに待つだけでは無能だ。調達部と連携して『残金支払い留保』という実質的なレバレッジをかけて能動的に解決せよ！",
            en: "💡 Katsuda-senpai's Hint: The MDRB is the legal certification of plant quality, and missing MTCs create severe compliance and safety risks. For uncooperative vendors, merely halting the system workflow is passive. You must cooperate with Procurement to use retention payments as leverage to actively break the deadlock!"
        },
        isEnding: true,
        endingType: 'bad',
        image: 'assets/ending_bad_ch7.jpg'
    },

    happy_clear: {
        avatar: 'happy',
        npcAvatar: 'smiling',
        charName: {
            zh: "胜田前辈",
            ja: "勝田先輩",
            en: "Katsuda-senpai"
        },
        dialogue: {
            zh: "太棒了！小Q！在你强有力的协调和敏锐的项目管理意识下，所有的质量难关都被顺利攻克！MDRB 成功移交，项目顺利通关！你已经真正掌握了 QC 工作的精髓，赢得了业主和 PM 的赞赏。恭喜你，你已经成为了大名鼎鼎的 Great QC Manager！",
            ja: "素晴らしいぞ、小Q（キューちゃん）！君の強力な調整力とプロアクティブなプロジェクト管理意識のおかげで、すべての品質課題が見事に解決された！MDRBの提出も無事完了し、プラントは無事稼働した！君はもうQC業務の本質を掴んだ。客先からもPMからも絶賛されているぞ。おめでとう、立派な『Great QC Manager』の誕生だ！",
            en: "Fantastic! Q-chan! Under your powerful coordination and proactive project management awareness, all quality issues were resolved smoothly! The MDRB was handed over, and the project succeeded! You have truly mastered the essence of QC work and won praise from both client and PM. Congratulations, you are now a Great QC Manager!"
        },
        isEnding: true,
        endingType: 'good',
        image: 'assets/ending_happy.jpg'
    }
};

// --- 2. GAME STATE MANAGEMENT ---
let gameState = {
    currentId: "start",
    lang: "zh",
    visitedNodes: ["start"], // Track visited node IDs
    path: ["start"] // Track active route history
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
    optionsPanel: document.getElementById("optionsPanel")
};

// --- 4. RENDER GAME STEP ---
function renderGameStep() {
    const node = STORY_DATA[gameState.currentId];
    if (!node) return;

    // A. Clean Animations
    els.gameStage.classList.remove("showing-ending");
    els.qchanSprite.className = "character-sprite sprite-left hidden";
    els.npcSprite.className = "character-sprite sprite-right hidden";
    els.endingCard.classList.add("hidden");

    if (window.endingCardTimeout) {
        clearTimeout(window.endingCardTimeout);
        window.endingCardTimeout = null;
    }

    // B. Character Avatars & Styles
    if (node.avatar && node.avatar !== 'hidden') {
        els.qchanImg.src = `assets/qchan_${node.avatar}.jpg`;
        els.qchanSprite.classList.remove("hidden");
        setTimeout(() => els.qchanSprite.classList.add("active"), 50);

        // Dynamic motion based on mood
        if (node.avatar === 'panicked') {
            els.qchanSprite.classList.add("sprite-shake");
        } else if (node.avatar === 'happy' || node.avatar === 'crying') {
            els.qchanSprite.classList.add("sprite-bounce");
        }
    }

    // NPC (Katsuda-senpai)
    if (node.npcAvatar && node.npcAvatar !== 'hidden') {
        els.npcImg.src = `assets/katsuda_${node.npcAvatar}.jpg`;
        els.npcSprite.classList.remove("hidden");
        setTimeout(() => els.npcSprite.classList.add("active"), 50);
    }

    // C. Dialogue & Name Tag
    els.charName.textContent = node.charName[gameState.lang] || "???";
    
    // Typewriter or instant render (with styling support)
    const rawText = node.dialogue[gameState.lang] || "";
    els.dialogueText.innerHTML = rawText.replace(/\n/g, "<br>");

    // D. Endings
    if (node.isEnding) {
        els.gameStage.classList.add("showing-ending");
        els.endingCard.classList.remove("hidden");
        els.endingCardImg.src = node.image;
        
        if (node.endingType === 'bad') {
            els.stageBg.style.backgroundColor = "#ffccd5";
        } else {
            els.stageBg.style.backgroundColor = "#d8f3dc";
            triggerConfetti();
        }
    } else {
        els.stageBg.style.backgroundColor = "#e3f2fd";
    }

    // E. Render Options
    els.optionsList.innerHTML = "";
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.textContent = choice.text[gameState.lang];
            btn.addEventListener("click", () => selectChoice(choice.nextId));
            els.optionsList.appendChild(btn);
        });
    }

    // If it's a Bad Ending, render Katsuda's tip and a Time Travel retry button
    if (node.isEnding && node.endingType === 'bad' && node.tip) {
        // Append Katsuda's Tip in speech box
        const tipDiv = document.createElement("div");
        tipDiv.style.marginTop = "12px";
        tipDiv.style.fontWeight = "bold";
        tipDiv.style.color = "#d90429";
        tipDiv.style.borderTop = "2px dashed #ffb5a7";
        tipDiv.style.paddingTop = "8px";
        tipDiv.textContent = node.tip[gameState.lang];
        els.dialogueText.appendChild(tipDiv);

        // Append Retry/Time Travel Button
        const retryBtn = document.createElement("button");
        retryBtn.className = "option-btn retry-btn";
        const retryText = {
            zh: "⏰ 时光倒流 (重新选择)",
            ja: "⏰ タイムトラベル（選択をやり直す）",
            en: "⏰ Time Travel (Re-choose)"
        };
        retryBtn.textContent = retryText[gameState.lang];
        
        // Find parent nodes to travel back to the last question
        const parentId = findParentNodeId(gameState.currentId);
        retryBtn.addEventListener("click", () => {
            if (parentId) {
                timeTravelTo(parentId);
            } else {
                timeTravelTo("start");
            }
        });
        els.optionsList.appendChild(retryBtn);
    }
}

// --- 5. GAME ACTIONS ---
function selectChoice(nextId) {
    gameState.currentId = nextId;
    
    // Track unique visited nodes
    if (!gameState.visitedNodes.includes(nextId)) {
        gameState.visitedNodes.push(nextId);
    }
    
    // Append to path
    gameState.path.push(nextId);
    
    renderGameStep();
}

function findParentNodeId(childId) {
    for (const key in STORY_DATA) {
        const node = STORY_DATA[key];
        if (node.choices) {
            for (const choice of node.choices) {
                if (choice.nextId === childId) {
                    return key;
                }
            }
        }
    }
    return null;
}

// Time Travel: Jump back to a visited point, reset downstream paths
function timeTravelTo(nodeId) {
    if (!gameState.visitedNodes.includes(nodeId)) return;
    
    gameState.currentId = nodeId;
    
    // Truncate path history back to this node
    const index = gameState.path.indexOf(nodeId);
    if (index !== -1) {
        gameState.path = gameState.path.slice(0, index + 1);
    } else {
        gameState.path = [nodeId];
    }
    
    // If it's a dialog modal, close it
    els.treeDialog.close();
    
    renderGameStep();
}

// Restart entire game
function restartGame() {
    gameState.currentId = "start";
    gameState.path = ["start"];
    // Keep visitedNodes so player can jump anytime in the tree
    renderGameStep();
}

// Switch Languages
function switchLanguage(newLang) {
    gameState.lang = newLang;
    
    // Update Header Text Languages
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

    renderGameStep();
}

// --- 6. PLOT TREE RENDER ENGINE (DYNAMIC SVG & DOM) ---
// Chapters & Tree Nodes Map
const TREE_STRUCTURE = [
    {
        chapterName: { zh: "序章", ja: "プロローグ", en: "Prologue" },
        nodes: [{ id: "start", label: { zh: "部门欢迎", ja: "部門歓迎", en: "Welcome" } }]
    },
    {
        chapterName: { zh: "Ch 1: 技术评估", ja: "Ch 1: 技術評価", en: "Ch 1: Evaluation" },
        nodes: [
            { id: "ch1_intro", label: { zh: "评估泵要求", ja: "Requisition評価", en: "Pump Req" } },
            { id: "ch1_bad", label: { zh: "💥 现场重熔", ja: "💥 現場再溶接", en: "💥 Re-weld" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 2: 启动会议", ja: "Ch 2: 起動会議", en: "Ch 2: KOM & PIM" },
        nodes: [
            { id: "ch2_intro", label: { zh: "协调 PIM", ja: "PIM調整", en: "PIM Setup" } },
            { id: "ch2_bad", label: { zh: "💥 铲焊返工", ja: "💥 溶接鏟取", en: "💥 Gouge Weld" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 3: 图书审查", ja: "Ch 3: 図書レビュー", en: "Ch 3: Doc Review" },
        nodes: [
            { id: "ch3_intro", label: { zh: "审查 WPS/PQR", ja: "WPS施工要領", en: "WPS Review" } },
            { id: "ch3_bad", label: { zh: "💥 现场开裂", ja: "💥 低温割れ", en: "💥 Brittle Leak" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 4: 检验协调", ja: "Ch 4: 検査調整", en: "Ch 4: Coordination" },
        nodes: [
            { id: "ch4_intro", label: { zh: "QOI 检验员", ja: "QOI検査員", en: "QOI Inspector" } },
            { id: "ch4_bad", label: { zh: "💥 隐形漏洞", ja: "💥 検査見落し", en: "💥 Audit Leak" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 5: 不符合项", ja: "Ch 5: 不適合管理", en: "Ch 5: NCR Repair" },
        nodes: [
            { id: "ch5_intro", label: { zh: "处理板厚超差", ja: "不適合処理", en: "NCR Case" } },
            { id: "ch5_bad", label: { zh: "💥 甩锅背锅", ja: "💥 責任押しつけ", en: "💥 Blamed QC" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 6: 检验放行", ja: "Ch 6: 出荷許可", en: "Ch 6: IRC Release" },
        nodes: [
            { id: "ch6_intro", label: { zh: "表面微小瑕疵", ja: "軽微不具合", en: "Minor Flaws" } },
            { id: "ch6_bad", label: { zh: "💥 滞港延期", ja: "💥 出荷滞る", en: "💥 Demurrage" }, isBad: true }
        ]
    },
    {
        chapterName: { zh: "Ch 7: MRB 竣工", ja: "Ch 7: MRB最終レビュー", en: "Ch 7: MDRB Audit" },
        nodes: [
            { id: "ch7_intro", label: { zh: "审查材质证书", ja: "資料レビュー", en: "MDRB Audit" } },
            { id: "ch7_bad", label: { zh: "💥 挂起停工", ja: "💥 無限保留", en: "💥 Process Stalled" }, isBad: true },
            { id: "happy_clear", label: { zh: "🏆 Great PQCM!", ja: "🏆 Great PQCM!", en: "🏆 Great PQCM!" }, isGood: true }
        ]
    }
];

function buildPlotTreeUI() {
    els.treeNodesContainer.innerHTML = "";
    
    // Generate DOM structure
    TREE_STRUCTURE.forEach(chapter => {
        const row = document.createElement("div");
        row.className = "tree-chapter-row";
        
        const titleDiv = document.createElement("div");
        titleDiv.className = "tree-chapter-title";
        titleDiv.textContent = chapter.chapterName[gameState.lang];
        row.appendChild(titleDiv);
        
        const listDiv = document.createElement("div");
        listDiv.className = "tree-nodes-list";
        
        chapter.nodes.forEach(nodeData => {
            const nodeDiv = document.createElement("div");
            nodeDiv.className = "tree-node";
            nodeDiv.id = `tree-node-${nodeData.id}`;
            nodeDiv.textContent = nodeData.label[gameState.lang];
            
            // Determine Node Status
            const isVisited = gameState.visitedNodes.includes(nodeData.id);
            const isActive = gameState.currentId === nodeData.id;
            
            if (nodeData.isBad) {
                nodeDiv.classList.add("bad_ending");
            } else if (nodeData.isGood) {
                nodeDiv.classList.add("good_ending");
            }
            
            if (isActive) {
                nodeDiv.classList.add("active");
                nodeDiv.classList.remove("locked");
            } else if (isVisited) {
                nodeDiv.classList.add("visited");
                nodeDiv.classList.remove("locked");
                // Allow Time Travel on click
                nodeDiv.addEventListener("click", () => timeTravelTo(nodeData.id));
            } else {
                nodeDiv.classList.add("locked");
            }
            
            listDiv.appendChild(nodeDiv);
        });
        
        row.appendChild(listDiv);
        els.treeNodesContainer.appendChild(row);
    });

    // Draw SVG Connections dynamically after elements render
    setTimeout(drawTreeConnections, 100);
}

function drawTreeConnections() {
    const svg = els.treeSvg;
    svg.innerHTML = "";
    
    const svgRect = svg.getBoundingClientRect();
    
    // Connection lines rules (parent-child dependencies)
    const connections = [
        { from: "start", to: "ch1_intro" },
        { from: "ch1_intro", to: "ch1_bad" },
        { from: "ch1_intro", to: "ch2_intro" },
        
        { from: "ch2_intro", to: "ch2_bad" },
        { from: "ch2_intro", to: "ch3_intro" },
        
        { from: "ch3_intro", to: "ch3_bad" },
        { from: "ch3_intro", to: "ch4_intro" },
        
        { from: "ch4_intro", to: "ch4_bad" },
        { from: "ch4_intro", to: "ch5_intro" },
        
        { from: "ch5_intro", to: "ch5_bad" },
        { from: "ch5_intro", to: "ch6_intro" },
        
        { from: "ch6_intro", to: "ch6_bad" },
        { from: "ch6_intro", to: "ch7_intro" },
        
        { from: "ch7_intro", to: "ch7_bad" },
        { from: "ch7_intro", to: "happy_clear" }
    ];

    connections.forEach(conn => {
        const fromEl = document.getElementById(`tree-node-${conn.from}`);
        const toEl = document.getElementById(`tree-node-${conn.to}`);
        
        if (fromEl && toEl) {
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();
            
            // Calculate coordinates relative to SVG
            const x1 = (fromRect.left + fromRect.width / 2) - svgRect.left;
            const y1 = (fromRect.top + fromRect.height / 2) - svgRect.top;
            
            const x2 = (toRect.left + toRect.width / 2) - svgRect.left;
            const y2 = (toRect.top + toRect.height / 2) - svgRect.top;
            
            const isPathActive = gameState.path.includes(conn.from) && gameState.path.includes(conn.to);
            const isConnectionVisited = gameState.visitedNodes.includes(conn.from) && gameState.visitedNodes.includes(conn.to);
            
            // Create SVG line/path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            // Smooth bezier curve for vertical/diagonal paths
            let d;
            if (Math.abs(x1 - x2) < 5) {
                // Straight vertical line
                d = `M ${x1} ${y1} L ${x2} ${y2}`;
            } else {
                // Curved transition
                const controlY = y1 + (y2 - y1) / 2;
                d = `M ${x1} ${y1} C ${x1} ${controlY}, ${x2} ${controlY}, ${x2} ${y2}`;
            }
            
            path.setAttribute("d", d);
            
            // Highlight connections along current route, color unlock paths
            if (isPathActive) {
                path.setAttribute("stroke", "#ff7ea5");
                path.setAttribute("stroke-width", "4");
                path.setAttribute("stroke-dasharray", "none");
            } else if (isConnectionVisited) {
                path.setAttribute("stroke", "#a2d2ff");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("stroke-dasharray", "none");
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

// Fallback for native dialog closing on outside click (light-dismiss)
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

// --- 7. CONFETTI ANIMATION (CANVAS SYSTEM) ---
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

// --- 8. INITIALIZE LISTENERS ---
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => switchLanguage(btn.getAttribute("data-lang")));
});

els.treeBtn.addEventListener("click", () => {
    buildPlotTreeUI();
    els.treeDialog.showModal();
});

els.closeTreeBtn.addEventListener("click", () => els.treeDialog.close());
els.restartBtn.addEventListener("click", restartGame);

// Load the start node
renderGameStep();
