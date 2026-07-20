// Dynamic Trilingual Story Database for Great PQCM Adventure
// Generated automatically from PQCMQuest.numbers. Do not edit manually unless updating the text fields.

const STORY_DATA = {
  "1.1": {
    "chapter": "1.1",
    "desc": {
      "ja": "プロジェクトQCセットアップの第一歩、契約図書のReview時に検査申請の30日前Noticeの要求を見つけた",
      "zh": "【项目质量策划第一步】在审查合同时，我发现要求在检验前30天通知。",
      "en": "[The First Step of Project QC Setup] When design review and revisioning the contract, I found a request for a notice 30 days before the inspection."
    },
    "selections": [
      {
        "id": "1.1.1",
        "desc": {
          "ja": "要求事項なので、そのまま運営する",
          "zh": "既然是合同要求，那我们就必须遵守。",
          "en": "Since it is a requirement, we will execute it as is."
        },
        "influence": {
          "ja": "後々、立ち行かなくなる",
          "zh": "以后续执行将陷入极大被动",
          "en": "You won't be able to stand it later"
        },
        "flags": [
          "4.2-A"
        ],
        "score": 3
      },
      {
        "id": "1.1.2",
        "desc": {
          "ja": "2週間前の申請期間でチャレンジする",
          "zh": "试着问问业主能不能接受【检验日两周前提交申请】。",
          "en": "Try asking the client if they can accept submitting the request \"2 weeks before the inspection date\"."
        },
        "influence": {
          "ja": "客先立会時に限り一旦30日前Noticeを出し、2週間前にFixすることを合意した",
          "zh": "我们同意在客户参与见证时，提前30天发通知，并在检验日两周前确定检验的实施日。",
          "en": "We agreed to issue a notice 30 days in advance and fix it 2 weeks in advance only when the customer was present."
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "1.1.3",
        "desc": {
          "ja": "JGC標準の2週間前を適用する",
          "zh": "按我方的标准，指示厂家在检验日两周前发通知。",
          "en": "Apply company standard \"2 weeks in advance\""
        },
        "influence": {
          "ja": "後々、Letterをもらう",
          "zh": "后续将收到业主的正式警告信",
          "en": "You will receive formal contractual warning letter later"
        },
        "flags": [
          "4.2-B"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "对合同的理解",
      "ja": "契約の理解",
      "en": "Contract Understanding"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "1.2": {
    "chapter": "1.2",
    "desc": {
      "ja": "プロジェクトをやり切れる強いQCチームを組織したいが、他ジョブの影響もあり、部内の人財不足で思うようにチームができない",
      "zh": "由于其他工作的影响，部门内部人力资源匮乏，无法按预期组建团队。",
      "en": "Due to the influence of other jobs, it is not possible to organize the team as expected due to a lack of human resources within the department."
    },
    "selections": [
      {
        "id": "1.2.1",
        "desc": {
          "ja": "部門が良い人を配員するのを待つ",
          "zh": "等待部门指派工作人员。",
          "en": "Waiting for department to arrange staff."
        },
        "influence": {
          "ja": "中々組織ができず序盤で苦しむ",
          "zh": "因为组织不齐人员，在项目早期陷入困境。",
          "en": "Struggling in the early stages due to lack of staff"
        },
        "flags": [
          "3.1-A",
          "3.2-A"
        ],
        "score": 3
      },
      {
        "id": "1.2.2",
        "desc": {
          "ja": "新規のProject契約のエンジニアをドンドン入れてもらう",
          "zh": "尽快招募新的项目契约工程师。",
          "en": "Bring in new project-contract engineers as soon as possible."
        },
        "influence": {
          "ja": "チームの質が下がってミスが出る",
          "zh": "团队水平不足，出现失误",
          "en": "The quality of the team decreases and mistakes occur"
        },
        "flags": [
          "3.2-B",
          "3.4-A",
          "4.2-C",
          "5.1-A"
        ],
        "score": 5
      },
      {
        "id": "1.2.3",
        "desc": {
          "ja": "グループ会社（MOC/COC）や、過去一緒に業務したプロジェクト契約のエンジニアへ声をかけて探す",
          "zh": "联系集团公司（MOC/COC），或之前合作过的项目契约工程师。",
          "en": "Search by asking group companies (MOC/COC) or project-contract engineers we worked with in the past."
        },
        "influence": {
          "ja": "何とかQC遂行できるチームを組織できた",
          "zh": "我组织了一个可以以某种方式实现项目目标的团队。",
          "en": "I organized a team that could somehow carry it out."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "项目团队组建",
      "ja": "プロジェクトチーム組成",
      "en": "Project Team Formation"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "1.3": {
    "chapter": "1.3",
    "desc": {
      "ja": "プロジェクトマネジメントチームから見積り時の90%のBudgetが配賦された",
      "zh": "项目管理部（PMT）（Project Management Team）分给我们的预算，只有我们通过计算得出的预算的90%。",
      "en": "90% of the estimated budget will be allocated by Project Management Team (PMT)"
    },
    "selections": [
      {
        "id": "1.3.1",
        "desc": {
          "ja": "Budgetを見直して、必要な追加分をプロジェクトマネジメントチームと合意する",
          "zh": "审查预算并与 项目管理部（PMT） 就任何必要的补充达成一致",
          "en": "Review the budget and agree on any necessary additions with the Project Management Team (PMT)"
        },
        "influence": {
          "ja": "プロジェクトマネジメントチームと合意にこぎつけ、必要な工数でジョブを開始できた",
          "zh": "与项目管理部（PMT）达成协议，并在确保所需工时的情况下启动了项目。",
          "en": "Reach agreement with Project Management Team (PMT) and start JOB with required man-hours"
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "1.3.2",
        "desc": {
          "ja": "見直す時間が無いので、そのままジョブを開始する",
          "zh": "既然是上游项目部给定的预算，应按项目部给定的预算执行。出了事让项目部承担责任。",
          "en": "Since it is the budget set by the upper project management team, we should execute it accordingly. If anything goes wrong, the management team will take responsibility."
        },
        "influence": {
          "ja": "後々、工数が枯渇する",
          "zh": "工时稍后会耗尽",
          "en": "man-hours will be depleted later"
        },
        "flags": [
          "4.2-D",
          "4.3-A"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "预算工时",
      "ja": "予算工数",
      "en": "Budget Man-hours"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "2.1": {
    "chapter": "2.1",
    "desc": {
      "ja": "セットアップは完成しました。これからチームを運営するにあたって、Quality Policyとして何に重きを置きますか？",
      "zh": "【项目质量策划完成】在今后运营团队时， 您想要强调什么质量方针？",
      "en": "[Project Setup Completed] When running the team from now on, What do you place emphasis on as a quality policy?"
    },
    "selections": [
      {
        "id": "2.1.1",
        "desc": {
          "ja": "プロダクトとサービスの質",
          "zh": "产品和服务质量",
          "en": "Quality of products and services"
        },
        "influence": {
          "ja": "素晴らしいPolicyです、高品質のQC遂行を目指しましょう！",
          "zh": "非常优秀的方针，让我们以高质量的 QC 执行为目标吧！",
          "en": "Excellent policy, let's aim for high-quality QC execution!"
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "2.1.2",
        "desc": {
          "ja": "コスト/スケジュールを意識したQC遂行",
          "zh": "质量控制执行时考虑成本/进度",
          "en": "QC execution with cost/schedule in mind"
        },
        "influence": {
          "ja": "素晴らしいPolicyです、高品質のQC遂行を目指しましょう！",
          "zh": "非常优秀的方针，让我们以高质量的 QC 执行为目标吧！",
          "en": "Excellent policy, let's aim for high-quality QC execution!"
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "2.1.3",
        "desc": {
          "ja": "チーム員の育成",
          "zh": "帮助团队成员成长。",
          "en": "Developing team members"
        },
        "influence": {
          "ja": "素晴らしいPolicyです、高品質のQC遂行を目指しましょう！",
          "zh": "非常优秀的方针，让我们以高质量的 QC 执行为目标吧！",
          "en": "Excellent policy, let's aim for high-quality QC execution!"
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "质量方针",
      "ja": "品質方針",
      "en": "Quality Policy"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "3.1-A": {
    "chapter": "3.1-A",
    "desc": {
      "ja": "プロジェクトの序盤です。設計から引き合い要求書 Reviewが来たがチーム員不足で対応できない",
      "zh": "【项目初期阶段】由于团队成员不足而无法及时回复设计团队发起的询价要求书审查要求。",
      "en": "[Early Stage of Project] Requisition Review came from the design team, but it could not be responded to due to lack of team members."
    },
    "selections": [
      {
        "id": "3.1-A.1",
        "desc": {
          "ja": "仕事を止めないために、十分なReviewが出来て無くても返却する",
          "zh": "为了不让工作停滞，即使没有足够的时间审图，也要先把图纸返回。",
          "en": "In order to not stop working, return the item even if there is not enough review."
        },
        "influence": {
          "ja": "後々、追加要求してVendorからクレーム",
          "zh": "在下订单后，我不得不对厂家提出了额外的要求，因此厂家向我们公司投诉了我。",
          "en": "In the after order stage, I gave additional request to the vendor, and received a complaint from the vendor."
        },
        "flags": [
          "3.3-A",
          "4.1-A"
        ],
        "score": 3
      },
      {
        "id": "3.1-A.2",
        "desc": {
          "ja": "残業してでも現有勢力でやり切る",
          "zh": "让现有团队加班完成。",
          "en": "Even if it means working overtime, we will get through it with our current strength."
        },
        "influence": {
          "ja": "引き合い遅れで設計/プロキュアからのクレームとチーム員のデモチベーションが発生した",
          "zh": "因团队人员回复不及时而引起设计、采购部门的投诉。",
          "en": "Complaints from design/procure due to delay in inquiries and demonstration of team members"
        },
        "flags": [],
        "score": 4
      },
      {
        "id": "3.1-A.3",
        "desc": {
          "ja": "直ちにチームの増員をかけ、濃淡を付けて引き合い要求書 Reviewを実施する",
          "zh": "立即增加团队人员的数量，并根据询价询价要求书的轻重缓急来按顺序返回文件。",
          "en": "Immediately increase team staff, and return documents sequentially based on the priority of the Requisitions."
        },
        "influence": {
          "ja": "若干の遅れはあるものの何とか乗り切ることができた",
          "zh": "虽然进度稍有延误，但总算勉强度过了难关。",
          "en": "Although there were some delays, we managed to get through it."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "询价要求书审查 (危机 A)",
      "ja": "引き合い要求書レビュー (危機 A)",
      "en": "Requisition Review (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.1": {
    "chapter": "3.1",
    "desc": {
      "ja": "プロジェクトの序盤です。早速設計から引き合い要求書 Reviewが来始めたが、社内標準のままでProject固有の要求が取り込まれていない",
      "zh": "【项目初期阶段】其他部门已经开始让我们审批询价书了，但询价书上并没有反映项目要求。仅采用了我们公司的标准格式。",
      "en": "[Early Stage of Project] Requisition Reviews have started coming in, but the company standard remains the same and project-specific requests are not incorporated."
    },
    "selections": [
      {
        "id": "3.1.1",
        "desc": {
          "ja": "担当するチーム員の知見を優先してReviewを各人に任せる",
          "zh": "相信团队人员的实力，让他们各自批改询价书。",
          "en": "Give priority to the knowledge of the team members in charge and leave reviews to each person."
        },
        "influence": {
          "ja": "後々、Review漏れが見つかる",
          "zh": "稍后会发现审核遗漏",
          "en": "Review omissions will be found later"
        },
        "flags": [
          "4.2-E"
        ],
        "score": 3
      },
      {
        "id": "3.1.2",
        "desc": {
          "ja": "引き合い要求書の標準Check Listを作成し、各チーム員が個別にプロジェクト要求を盛り込んで返却する",
          "zh": "为询价书创建标准检查清单，让团队成员根据需要在每个询价书上反映项目要求。",
          "en": "Create a standard check list for Requisition, and each team member individually includes their project requests and returns it."
        },
        "influence": {
          "ja": "Reviewは完了したが、時間を要し引き合い開始に遅れが生じた",
          "zh": "最终虽然完成了审核询价书，但是花了不少时间。导致向厂商询价晚了。",
          "en": "The review was completed, but it took time and there was a delay in starting inquiries."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "3.1.3",
        "desc": {
          "ja": "設計に引き合い要求書のBlank Formにプロジェクト要求を盛り込んでもらい、チーム内のCheck Listを用いてReviewを実施する",
          "zh": "指示上游人员修改询价书的空白表格，在空白表格上反映项目的要求。并在收到询价书审核通知时，审查询价书是否反映了项目要求。",
          "en": "Have Design incorporate project requirements into the Requisition blank form, and conduct reviews using the team's internal checklist."
        },
        "influence": {
          "ja": "チーム員のレベルを標準化し効率的なReviewを実施した",
          "zh": "实现询价书审核的标准化，有效率地审核了询价书。",
          "en": "Standardized the level of team members and conducted efficient reviews"
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "询价要求书审查",
      "ja": "引き合い要求書レビュー",
      "en": "Requisition Review"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "3.2-A": {
    "chapter": "3.2-A",
    "desc": {
      "ja": "技術評価（Technical Evaluation）を担当する品質管理エンジニアが足りずQuality分だけ進まない",
      "zh": "由于负责Technical Evaluation（技术评估）的质量控制工程师人手不足，导致技术评估返回时间赶不上项目进度要求。",
      "en": "Due to a shortage of Quality Control Engineers in charge of Technical Evaluation, the return of Technical Evaluation cannot keep up with the project schedule requirements."
    },
    "selections": [
      {
        "id": "3.2-A.1",
        "desc": {
          "ja": "直ちに増員をかけて、シニアの知見も借りて技術評価（Technical Evaluation）を実施する",
          "zh": "立即增加团队成员数量，并利用前辈的知识实施 技术评估（Technical Evaluation）。",
          "en": "Immediately increase staffing and conduct Technical Evaluation with support from senior engineers."
        },
        "influence": {
          "ja": "追加の工数は発生するが、何とか技術評価（Technical Evaluation）を乗り切った",
          "zh": "虽然产生了额外的工时，但是好歹度过了危机。",
          "en": "Although additional man-hours occurred, we managed to get through it."
        },
        "flags": [],
        "score": 9
      },
      {
        "id": "3.2-A.2",
        "desc": {
          "ja": "仕事を止めないために、ほとんど技術評価（Technical Evaluation）をしない",
          "zh": "为了不让工作停滞，对于不重要的设备，让组员减少technical evaluation的时间，保证项目进度。",
          "en": "I rarely do tech evas in order to not stop working."
        },
        "influence": {
          "ja": "後々、Vendor標準で進められて不適合報告書（NCR）連発",
          "zh": "稍后，供应商将按供应商标准执行项目，导致出现了很多不符合项报告（NCR）。",
          "en": "Later, it will be proceeded with Vendor standard and Non-Conformance Report (NCR) will be fired"
        },
        "flags": [
          "4.3-B"
        ],
        "score": 3
      },
      {
        "id": "3.2-A.3",
        "desc": {
          "ja": "残業してでも現有勢力でやり切る",
          "zh": "让现在的团队成员多加加班。毕竟加人一定会超过现有预算。",
          "en": "Even if it means working overtime, we will get through it with our current strength."
        },
        "influence": {
          "ja": "PO.遅れで設計/プロキュアからのクレームとチーム員のデモチベーションが発生した",
          "zh": "团队成员收到很多来自采购部门和设计部门投诉，导致团队士气下降。",
          "en": "Purchase Order (PO).Delayed design/complaints from Procure and demo of team members"
        },
        "flags": [],
        "score": 4
      }
    ],
    "title": {
      "zh": "技术评估 (危机 A)",
      "ja": "技術評価 (危機 A)",
      "en": "Technical Evaluation (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.2-B": {
    "chapter": "3.2-B",
    "desc": {
      "ja": "技術評価（Technical Evaluation）の質が低く設計からコメントをもらう",
      "zh": "由于Technical Evaluation（技术评估）的水平太差，设计人员向我方投诉，这极大地增加了他们审核图纸的时间。",
      "en": "The quality of Technical Evaluation was so poor that the design team complained to us, which significantly increased their review time."
    },
    "selections": [
      {
        "id": "3.2-B.1",
        "desc": {
          "ja": "チーム内で技術評価（Technical Evaluation）勉強会を実施して底上げを図る",
          "zh": "在团队内举办 技术评估（Technical Evaluation） 学习课程以提高标准。",
          "en": "Hold Technical Evaluation study sessions within the team to raise standards."
        },
        "influence": {
          "ja": "何とか技術評価（Technical Evaluation）を乗り切った",
          "zh": "勉强度过了难关。",
          "en": "somehow survive"
        },
        "flags": [],
        "score": 9
      },
      {
        "id": "3.2-B.2",
        "desc": {
          "ja": "担当するチーム員の知見を尊重して、そのまま任せる",
          "zh": "相信团队人员的水平，维持现状，毕竟做什么都会影响项目预算。",
          "en": "Respect the knowledge of the team member in charge and leave it to them as is."
        },
        "influence": {
          "ja": "後々、Vendor標準で進められて不適合報告書（NCR）連発",
          "zh": "之后，分包商（Subcontractor）将按他们自己的标准执行项目，导致发生很多不符合项报告（NCR）。",
          "en": "Later, it will be proceeded with Vendor standard and Non-Conformance Report (NCR) will be fired"
        },
        "flags": [
          "4.3-B"
        ],
        "score": 3
      },
      {
        "id": "3.2-B.3",
        "desc": {
          "ja": "KOMですべてのプロジェクト要求を確認することとし、技術評価（Technical Evaluation）はミニマムにする",
          "zh": "为了避免延误，跟设计部门商量，不在technical evaluation 时做太多澄清，而在kickoff meeting澄清所有项目要求。",
          "en": "All project requests will be confirmed by Kick-off Meeting (KOM), and Technical Evaluation will be kept to a minimum."
        },
        "influence": {
          "ja": "後々、キックオフミーティング（KOM）が紛糾し追加を支払う",
          "zh": "导致在kick off meeting时与厂家产生纠纷，厂家要求我方额外付钱才能进行项目。",
          "en": "Later, Kick-off Meeting (KOM) will confuse and pay additional amount"
        },
        "flags": [
          "3.3-B"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "技术评估 (危机 B)",
      "ja": "技術評価 (危機 B)",
      "en": "Technical Evaluation (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.2": {
    "chapter": "3.2",
    "desc": {
      "ja": "技術評価（Technical Evaluation）が始まり、本プロジェクトでは耐圧部材のType-3.2の素材要求があることを認識していた",
      "zh": "【技术评估已开始】技术评估（Technical Evaluation） 已经开始，该项目认识到耐压构件需要 Type-3.2 材料。",
      "en": "[Technical Evaluation Begun] Technical Evaluation has begun, and this project recognizes that there is a requirement for Type-3.2 materials for pressure-resistant members."
    },
    "selections": [
      {
        "id": "3.2.1",
        "desc": {
          "ja": "関連図書は引き合い要求書に含まれており、Bidderは知ってるはずなので、改めて確認する必要はない",
          "zh": "确认了相关要求已经写在了询价书上。无论发生什么事，起码我们是占理的。",
          "en": "The relevant documents are included in the Requisition and the Bidder should know them, so there is no need to confirm again."
        },
        "influence": {
          "ja": "後々、要求漏れが見つかる",
          "zh": "之后发现厂家没有执行这项需求。",
          "en": "Missing requirements will be discovered later"
        },
        "flags": [
          "4.1-B"
        ],
        "score": 3
      },
      {
        "id": "3.2.2",
        "desc": {
          "ja": "技術評価（Technical Evaluation）での確認で、Bidderは\"Noted\"と回答してきたので理解してると判断する",
          "zh": "厂家在Technical Evaluation的表格中对这项回复Noted，所以我认为他已经理解了。",
          "en": "When I checked with Technical Evaluation, Bidder replied \"Noted\", so I assumed that he understood it."
        },
        "influence": {
          "ja": "後々、要求漏れが見つかる",
          "zh": "最终发现厂家没有执行这项要求。",
          "en": "Missing requirements will be discovered later"
        },
        "flags": [
          "4.1-B"
        ],
        "score": 4
      },
      {
        "id": "3.2.3",
        "desc": {
          "ja": "大きくコストに影響する項目なので、技術評価（Technical Evaluation）Meetingで直接確認する",
          "zh": "由于这是对成本影响极大的条款，所以我们直接在技术评估（Technical Evaluation）会议上确认了这一点。",
          "en": "Since this is an item that greatly affects costs, we confirmed it directly at the Technical Evaluation Meeting."
        },
        "influence": {
          "ja": "Type3.2の素材要求を関係者間で確認できた",
          "zh": "3.2型的材料要求已由相关各方确认。",
          "en": "The material requirements for Type 3.2 were confirmed among the parties involved."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "技术评估",
      "ja": "技術評価",
      "en": "Technical Evaluation"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "3.3-A": {
    "chapter": "3.3-A",
    "desc": {
      "ja": "KOMでプロジェクト要求を確認しようとしたが、引き合い要求書に記載が無いのでベンダーと紛糾、Full Complyだと見積もりベースと異なるのでChangeだと主張された",
      "zh": "我尝试在开工会上要求供应商（vendor）执行项目独有的要求，但是供应商说：【因为询价书（Requisition）里面没写，所以报价时没考虑这一点，如果需要完全满足项目要求，必须要加钱】",
      "en": "I tried to ask the vendor to execute project-specific requirements during the Kick-off Meeting, but the vendor said: 'Since it was not specified in the Requisition, we did not consider it in our quotation. If we need to fully satisfy the project requirements, additional costs will be required.'"
    },
    "selections": [
      {
        "id": "3.3-A.1",
        "desc": {
          "ja": "引き合い要求書で要求してないので、ベンダー標準で進める",
          "zh": "由于询价书中没有要求，因此按照供应商标准进行。",
          "en": "Since it is not requested in Requisition, proceed with Vendor standard."
        },
        "influence": {
          "ja": "後々、プロジェクト要求からの逸脱でLetterをもらう",
          "zh": "稍后，您将收到一封因违反 项目 要求 的信件",
          "en": "Later, you will receive formal contractual warning letter for deviating from the project requirements"
        },
        "flags": [
          "4.2-E"
        ],
        "score": 3
      },
      {
        "id": "3.3-A.2",
        "desc": {
          "ja": "個別に議論を重ね、必要な分は追加を払ってベンダーに適用させる",
          "zh": "在公司内部讨论哪些要求必须实现，哪一些要求可以缓和。对于必须实现的要求，支付额外费用让供应商（Vendor）实现该要求。",
          "en": "Discuss internally within the company which requirements are mandatory and which can be relaxed. For mandatory ones, pay additional fees to have the vendor implement them."
        },
        "influence": {
          "ja": "追加コストでプロジェクトの採算に影響を与えた",
          "zh": "产生追加费用，对项目的收益率造成了负面影响。",
          "en": "Additional costs were incurred, impacting the project profitability."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "启动会议 (危机 A)",
      "ja": "キックオフミーティング (危機 A)",
      "en": "Kick-off Meeting (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.3-B": {
    "chapter": "3.3-B",
    "desc": {
      "ja": "KOMでプロジェクト要求を確認しようとしたが、技術評価（Technical Evaluation）不足でベンダーと紛糾、Full Complyだと見積もりベースとことなるのでChangeだと主張された",
      "zh": "我在开工会（启动会议KOM）上让供应商确认是否能满足项目特有的要求，供应商说你在技术评估（Technical Evaluation）阶段没有提出来，因此这个要求应算作项目变更，需要额外追加预算。",
      "en": "During the Kick-off Meeting (KOM), I asked the vendor to confirm if they could meet the project-specific requirements. The vendor replied that since we did not specify it during the Technical Evaluation, this requirement should be treated as a project change, and additional budget would be required."
    },
    "selections": [
      {
        "id": "3.3-B.1",
        "desc": {
          "ja": "すべての要求は引き合い要求書のApplicable図書になってことを理由に、すべてベンダーに適用させる",
          "zh": "告诉供应商，我方已经在询价书（Requisition）里面写了，满足询价书的要求是供货商应尽的责任。",
          "en": "Tell the vendor that our company has already specified it in the Requisition, and meeting the Requisition requirements is the vendor's obligation."
        },
        "influence": {
          "ja": "後々、V-Docが固まらず、検査前打合せ（PIM）が開催できない",
          "zh": "后来V-Doc不固化，检验前会议（PIM）无法持有",
          "en": "Later, V-Doc does not solidify and Pre-Inspection Meeting (PIM) cannot be held"
        },
        "flags": [
          "4.1-C"
        ],
        "score": 3
      },
      {
        "id": "3.3-B.2",
        "desc": {
          "ja": "個別に議論を重ね、必要な分は追加を払ってベンダーに適用させる",
          "zh": "针对每一个特殊要求，在公司内部讨论。对于某些必须实现的要求，付一些钱，让供货商实现这些要求。",
          "en": "Discuss each special requirement internally within the company. For certain mandatory requirements, pay some fees to have the vendor implement them."
        },
        "influence": {
          "ja": "追加コストでプロジェクトの採算に影響を与えた",
          "zh": "产生追加费用，对项目的收益率造成了负面影响。",
          "en": "Additional costs were incurred, impacting the project profitability."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "启动会议 (危机 B)",
      "ja": "キックオフミーティング (危機 B)",
      "en": "Kick-off Meeting (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.3": {
    "chapter": "3.3",
    "desc": {
      "ja": "KOMで、ベンダーが未経験のSubvendorで主要機器の製作を計画していることが分かった",
      "zh": "在 启动会议（KOM），据悉该供应商正计划与缺乏经验的转包商一起制造主要设备。",
      "en": "At Kick-off Meeting (KOM), it was learned that the vendor was planning to manufacture major equipment with inexperienced subvendors."
    },
    "selections": [
      {
        "id": "3.3.1",
        "desc": {
          "ja": "代替の有力Subvendorに切り替えさせる",
          "zh": "让供应商换一家更有能力的分包商。",
          "en": "Switched to a powerful alternative Subvendor"
        },
        "influence": {
          "ja": "有力Subvendorを採用することになったが追加コストが発生した",
          "zh": "我们决定雇用一家有前途的转包商，但产生了额外的成本。",
          "en": "We decided to hire a promising subvendor, but additional costs were incurred."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "3.3.2",
        "desc": {
          "ja": "ベンダーの提案を受け入れる",
          "zh": "接受供应商建议",
          "en": "Accepted Vendor's proposal"
        },
        "influence": {
          "ja": "後々、不適合報告書（NCR）多発",
          "zh": "后来出现了很多不符合项报告（NCR）",
          "en": "Later, many Non-Conformance Report (NCR)s"
        },
        "flags": [
          "4.3-C"
        ],
        "score": 4
      },
      {
        "id": "3.3.3",
        "desc": {
          "ja": "直ちに関連部門によるショップサーベイを実施し、条件付きで認める",
          "zh": "立即组织关联部门进行制造厂考察（Shop Survey），并给予有条件批准。",
          "en": "Immediately organize relevant departments to conduct a shop survey and grant conditional approval."
        },
        "influence": {
          "ja": "若干の追加工数は発生するが、検査を強化して管理することとした",
          "zh": "虽然会产生一些额外的工时，但决定通过加强检验来进行管理。",
          "en": "Although some additional man-hours will occur, we decided to strengthen inspection management."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "启动会议",
      "ja": "キックオフミーティング",
      "en": "Kick-off Meeting"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "3.4-A": {
    "chapter": "3.4-A",
    "desc": {
      "ja": "新人品質管理エンジニアが多くベンダー図書にPoorなコメントが多いとベンダーからクレームが出た",
      "zh": "很多经验不足的质量控制工程师在供应商图纸（vendor document）上提了很多不合理的修改意见，导致供货商向我们公司抱怨。",
      "en": "Many inexperienced Quality Control Engineers raised unreasonable comments on vendor documents, leading to complaints from the vendor."
    },
    "selections": [
      {
        "id": "3.4-A.1",
        "desc": {
          "ja": "PoorでもコメントはコメントとしてベンダーにFollowさせる",
          "zh": "考虑到自家工程师的士气，跟供货商说他们是无理取闹。让供货商按照修改意见修改文件。",
          "en": "Considering the morale of our own engineers, tell the vendor that they are making trouble out of nothing. Force the vendor to modify the documents according to the comments."
        },
        "influence": {
          "ja": "後々、検査前打合せ（PIM）の開始が遅れ、Vendorの信頼も損ねる",
          "zh": "这导致检验前会议（PIM）的启动被延迟，并失去了供货商的信任。",
          "en": "This delayed the start of the Pre-Inspection Meeting (PIM) and lost the vendor's trust."
        },
        "flags": [
          "4.1-D"
        ],
        "score": 3
      },
      {
        "id": "3.4-A.2",
        "desc": {
          "ja": "チーム内でコメントのレベルを調整し、必要なコメントだけを付けるようにする",
          "zh": "花些时间教育团队内部的年轻工程师，告诉他们哪些修改意见是合理的，哪些修改意见是不合理的。",
          "en": "Take some time to educate the young engineers within the team, telling them which comments are reasonable and which are not."
        },
        "influence": {
          "ja": "クレームも減り、何とかベンダー図書 Reviewが軌道に乗る",
          "zh": "投诉减少了，而且不知何故 V-Doc 也减少了。审查重回正轨。",
          "en": "Complaints have decreased, and somehow V-Doc. Review is back on track."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "3.4-A.3",
        "desc": {
          "ja": "クレームが来たベンダーと個別にコメントReview Meetingを開催し合意を得る",
          "zh": "作为领导亲自下场跟发起投诉的供货商（Vendor）好好谈谈，确认哪些修改意见是合理的，哪些是不合理的。",
          "en": "As a leader, personally hold a meeting with the complaining sub-vendor to confirm which comments are reasonable and which are not."
        },
        "influence": {
          "ja": "検査前打合せ（PIM）の開始が遅れ、スケジュールインパクトが発生した",
          "zh": "检验前会议（PIM） 启动延迟，并对进度产生影响。",
          "en": "The start of Pre-Inspection Meeting (PIM) was delayed and schedule impact occurred."
        },
        "flags": [],
        "score": 6
      }
    ],
    "title": {
      "zh": "供应商图纸审查 (危机 A)",
      "ja": "ベンダー図書レビュー (危機 A)",
      "en": "Vendor Document Review (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "3.4": {
    "chapter": "3.4",
    "desc": {
      "ja": "ベンダー図書 Reviewのピークがきて、各チーム員のバックログが溜まり出した",
      "zh": "项目进入高峰期，每个团队成员都积压了很多未审批的供应商图纸及技术文件。",
      "en": "V-Doc. Review has reached its peak, and each team member's backlog has accumulated."
    },
    "selections": [
      {
        "id": "3.4.1",
        "desc": {
          "ja": "短期的に補強を入れてバックログを捌く",
          "zh": "短期内引入外部增援来清理积压文件。",
          "en": "Bring in short-term support to clear the document backlog."
        },
        "influence": {
          "ja": "若干の追加工数は発生したが、何とかベンダー図書を捌いた",
          "zh": "虽然产生了一些额外的工时，但总算把供应商图纸处理完毕。",
          "en": "Although some additional man-hours occurred, we managed to process the vendor drawings."
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "3.4.2",
        "desc": {
          "ja": "残業してでも現有勢力でやり切る",
          "zh": "让现有团队加班解决，毕竟增加团队成员会影响预算。",
          "en": "Rely on the current team working overtime, as adding more members will affect the budget."
        },
        "influence": {
          "ja": "検査前打合せ（PIM）遅れでプロジェクトメンバーからのクレームとチーム員のデモチベーションが発生した",
          "zh": "因为处理不了项目文件，延误了检验前会议（PIM）。遭到其他部门投诉，且团队成员士气下降。",
          "en": "The Pre-Inspection Meeting (PIM) was delayed because project documents could not be processed in time. We received complaints from other departments, and the team's morale declined."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "3.4.3",
        "desc": {
          "ja": "仕事を止められないので、見れる分だけ見て返却する",
          "zh": "因为不想耽误工期，让现有人员不管看没看完，先把文件返回去。",
          "en": "To avoid delaying the project schedule, return the documents even if they haven't been fully reviewed."
        },
        "influence": {
          "ja": "後々、不適合報告書（NCR）多発",
          "zh": "后来出现了很多不符合项报告（NCR）",
          "en": "Later, many Non-Conformance Report (NCR)s"
        },
        "flags": [
          "4.3-D"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "供应商图纸审查",
      "ja": "ベンダー図書レビュー",
      "en": "Vendor Document Review"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "3.5": {
    "chapter": "3.5",
    "desc": {
      "ja": "今後の検査に向けて品質管理検査員を配員しますが、対象POのカテゴリーでベンダー 工場のエリアにCapableな検査員が見つからない",
      "zh": "【为后续检验做准备】在为后续检验调配检验员时， 在目标 采购订单 类别的供应商制造厂区域中找不到有能力的检验员。",
      "en": "[Preparing for Future Inspections] Although we are assigning inspectors for future inspections, Capable inspectors cannot be found in the Vendor Shop area in the target Purchase Order (PO) category."
    },
    "selections": [
      {
        "id": "3.5.1",
        "desc": {
          "ja": "未経験の検査員を採用し指導する",
          "zh": "招聘无经验的检验员并进行指导培训。",
          "en": "Hire and train inexperienced inspectors"
        },
        "influence": {
          "ja": "後々、検査漏れが見つかる",
          "zh": "检查遗漏稍后会发现",
          "en": "Inspection omissions will be discovered later"
        },
        "flags": [
          "4.2-F"
        ],
        "score": 6
      },
      {
        "id": "3.5.2",
        "desc": {
          "ja": "他エリアから経験のある検査員を派遣する",
          "zh": "从其他地区派遣经验丰富的检验人员",
          "en": "Dispatch experienced inspectors from other areas"
        },
        "influence": {
          "ja": "良い検査員が派遣出来たが追加コストが発生した",
          "zh": "成功派驻了优秀的检验员，但产生了额外的成本。",
          "en": "Successfully dispatched an experienced inspector, but additional costs occurred."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "3.5.3",
        "desc": {
          "ja": "新たに検査員を採用するべく候補者のインタビューを実施する",
          "zh": "询问业主，让他们推荐一些检验员并面试。",
          "en": "Ask the client to recommend inspectors and conduct interviews."
        },
        "influence": {
          "ja": "運よく良い検査員を探すことができた",
          "zh": "运气好，成功找到了优秀的检验员。",
          "en": "Luckily, we found a good inspector."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "检验员选定",
      "ja": "検査員選定",
      "en": "Inspector Selection"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "4.1-A": {
    "chapter": "4.1-A",
    "desc": {
      "ja": "プロジェクトの最盛期で検査前打合せ（PIM）が始まりました。引き合い要求書に盛り込み忘れた要求事項を協議するも、ベンダーから追加だとクレームを受けた",
      "zh": "【项目高峰期，PIM已启动】我们跟供应商讨论了一些忘了加在询价要求书（Requisition）里面的项目要求。供货商说可以满足，但是必须要加钱。",
      "en": "[Peak of Project, PIM Begun] We discussed some project requirements forgotten to be included in the Requisition with the vendor. The vendor said they could meet them, but additional costs would be required."
    },
    "selections": [
      {
        "id": "4.1-A.1",
        "desc": {
          "ja": "追加を支払って要求事項を満足する",
          "zh": "支付额外费用以满足项目要求。",
          "en": "Pay additional fees to satisfy the requirements."
        },
        "influence": {
          "ja": "プロジェクトからのクレームと追加コストが発生した",
          "zh": "低头请求项目管理部（PMT）增加预算，遭到项目管理团队一顿数落，并产生了额外费用。",
          "en": "Humbly asked the Project Management Team (PMT) for additional budget, and was severely scolded by the PMT, resulting in additional costs."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.1-A.2",
        "desc": {
          "ja": "ベンダー標準のまま進める",
          "zh": "考虑到预算，让供应商按照供应商标准执行。",
          "en": "Considering the budget, allow the vendor to execute according to vendor standards."
        },
        "influence": {
          "ja": "後々、Letterをもらう",
          "zh": "后续将收到业主的正式警告信",
          "en": "You will receive formal contractual warning letter later"
        },
        "flags": [
          "4.2-E"
        ],
        "score": 3
      },
      {
        "id": "4.1-A.3",
        "desc": {
          "ja": "客先のDeviaitionを出してベンダー標準を認めてもらう",
          "zh": "向业主提出【项目偏离（deviation）】，让业主接受供应商按供应商标准执行。",
          "en": "Submit a project deviation request to the client to accept the vendor executing according to vendor standards."
        },
        "influence": {
          "ja": "いくつかは認めてもらえたが、否認された分は追加コストを払って履行させた",
          "zh": "业主同意了一些项目偏离（deviation），但对于被否决的偏离，最终还是追加了预算，让供应商按项目要求执行。",
          "en": "The client approved some project deviations, but for the rejected ones, additional costs were paid to have the vendor execute them."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验前会议 (危机 A)",
      "ja": "検査前打合せ (危機 A)",
      "en": "Pre-Inspection Meeting (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.1-B": {
    "chapter": "4.1-B",
    "desc": {
      "ja": "プロジェクトの最盛期で検査前打合せ（PIM）が始まりました。その場で技術評価（Technical Evaluation）不足でType-3.2の素材要求の見逃しが発覚した",
      "zh": "【项目高峰期，PIM已启动】因为在技术评估（Technical Evaluation）阶段没有提醒供货商，导致供货商没有采购符合Type-3.2材质证明书（MTC）要求的材料。",
      "en": "[Peak of Project, PIM Begun] Because the vendor was not reminded during the Technical Evaluation, the vendor failed to purchase materials with Type-3.2 Material Test Certificates (MTC)."
    },
    "selections": [
      {
        "id": "4.1-B.1",
        "desc": {
          "ja": "引き合い要求書には盛り込まれてるので、ベンダーの落ち度として素材を再調達させる",
          "zh": "因为询价书（Requisition）里面写明了该项要求，所以这完全是供货商的错，坚决要求他们重新采购符合Type-3.2要求的材料。",
          "en": "Since it was specified in the Requisition, it is entirely the vendor's fault. Force them to procure Type-3.2 materials immediately."
        },
        "influence": {
          "ja": "大きなスケジュールインパクトが発生した",
          "zh": "发生了重大的进度影响。",
          "en": "A major schedule impact occurred."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.1-B.2",
        "desc": {
          "ja": "客先にDeviaitonを出して、要求事項を取り下げてもらう",
          "zh": "向业主提交项目偏离（deviation）申请，要求业主缓和该项材料要求。",
          "en": "Submit a project deviation request to the client to relax the requirements."
        },
        "influence": {
          "ja": "一部の素材は認めてもらえたが、概ね否認され再調達、スケジュールインパクトが発生した",
          "zh": "部分材料获得业主批准，但其余材料必须重新采购，这对项目进度产生了负面影响。",
          "en": "Some materials were approved by the client, but the rest had to be re-procured, affecting the project schedule."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.1-B.3",
        "desc": {
          "ja": "スケジュールが間に合わないので、要求を無視して進める",
          "zh": "重新采购必然影响进度。因此无视Type 3.2材料的要求，继续进行项目。",
          "en": "Re-procurement will definitely affect the schedule, so ignore the Type-3.2 material requirement and proceed."
        },
        "influence": {
          "ja": "客先からクレームを受けDisqualify",
          "zh": "收到业主严重投诉，直接导致撤职清退（取消资格）。",
          "en": "Scolded by the client and was disqualified from the project."
        },
        "flags": [
          "Game Over"
        ],
        "score": 1
      }
    ],
    "title": {
      "zh": "检验前会议 (危机 B)",
      "ja": "検査前打合せ (危機 B)",
      "en": "Pre-Inspection Meeting (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.1-C": {
    "chapter": "4.1-C",
    "desc": {
      "ja": "プロジェクトの最盛期で検査前打合せ（PIM）の時期が来ましたが、技術評価（Technical Evaluation）不足からベンダー図書が固まらず、いつまで経っても検査前打合せ（PIM）が開催できない",
      "zh": "【项目高峰期，PIM已到期】由于技术评估（Technical Evaluation）进行得不充分，导致在项目正式进行时，供应商提交了好几版图纸（vendor document）也没法满足项目要求，检验前会议（PIM）迟迟无法召开。",
      "en": "[Peak of Project, PIM Due] Because the Technical Evaluation was insufficient, the vendor submitted multiple revisions of vendor documents (V-Docs) but still could not satisfy the project requirements, and the Pre-Inspection Meeting (PIM) could not be held."
    },
    "selections": [
      {
        "id": "4.1-C.1",
        "desc": {
          "ja": "時間が無いので、ベンダー図書が固まらないまま検査前打合せ（PIM）を実施する",
          "zh": "因为时间不够，在供应商图纸（vendor document）未冻结的情况下先召开检验前会议（PIM），以符合项目的进度计划。",
          "en": "Due to lack of time, hold the Pre-Inspection Meeting (PIM) before the vendor documents are finalized to meet the project schedule."
        },
        "influence": {
          "ja": "客先からLetterをもらい信頼を損ねた",
          "zh": "收到客户的来信而失去信任",
          "en": "Losing trust by receiving letters from customers"
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "4.1-C.2",
        "desc": {
          "ja": "ベンダー図書が固まるまで議論を続ける",
          "zh": "继续讨论，直到供应商图纸（vendor document）符合项目要求并冻结。",
          "en": "Continue the discussion until the vendor documents meet the project requirements and are finalized."
        },
        "influence": {
          "ja": "大きなスケジュールインパクトが発生した",
          "zh": "发生了重大的进度影响。",
          "en": "A major schedule impact occurred."
        },
        "flags": [],
        "score": 5
      },
      {
        "id": "4.1-C.3",
        "desc": {
          "ja": "ベンダーに乗り込んでF2Fでベンダー図書 Review Meetingを開催し、承認してから検査前打合せ（PIM）を実施する",
          "zh": "在执行检验前会议（PIM）之前，让负责的质量控制工程师出差去供货商办公室，尽快冻结供应商图纸（vendor document）。",
          "en": "Before conducting the Pre-Inspection Meeting (PIM), have the engineer travel to the vendor's office to finalize the vendor documents as soon as possible."
        },
        "influence": {
          "ja": "最小限のスケジュールインパクトで押さえることができた",
          "zh": "我们按计划进行并发布了检验放行证（IRC）。",
          "en": "We were able to achieve this with minimal schedule impact."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验前会议 (危机 C)",
      "ja": "検査前打合せ (危機 C)",
      "en": "Pre-Inspection Meeting (Crisis C)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.1-D": {
    "chapter": "4.1-D",
    "desc": {
      "ja": "プロジェクトの最盛期で検査前打合せ（PIM）の時期が来ましたが、ベンダー図書 Review時からベンダーとの関係が悪化し、検査前打合せ（PIM）でも非協力的な態度を取られた",
      "zh": "【项目高峰期，PIM已到期】在供应商图纸审核（Vendor Document Review）阶段，和供货商的关系搞得很差，导致供货商修改文件不积极，马上要赶不上召开检验前会议（PIM）了。",
      "en": "[Peak of Project, PIM Due] During the Vendor Document Review stage, the relationship with the vendor became very poor, leading to a lack of active document revision by the vendor, making it almost impossible to hold the Pre-Inspection Meeting (PIM) on schedule."
    },
    "selections": [
      {
        "id": "4.1-D.1",
        "desc": {
          "ja": "契約に則って彼らにすべての要求事項を履行させる",
          "zh": "邀请采购部门合作，强硬地要求分包商履行合同中的所有要求。",
          "en": "Cooperate with the Procurement department and strongly demand that the subcontractor fulfill all contract requirements."
        },
        "influence": {
          "ja": "→後々、Shortcutしてトラブル発生",
          "zh": "供货商开启【已读不回】模式，导致之后出现质量问题。",
          "en": "The vendor adopted a 'read but ignore' response mode, leading to subsequent quality issues."
        },
        "flags": [
          "4.2-G"
        ],
        "score": 2
      },
      {
        "id": "4.1-D.2",
        "desc": {
          "ja": "検査前打合せ（PIM）前にAlignment Meetingを開催して、これまでの関係に関するLLを議論して、今後の関係改善に繋げる",
          "zh": "在检验前会议（PIM）之前召开协调会议，共同反省在项目上沟通不到位的情况，尽量和供货商改善关系。",
          "en": "Hold an alignment meeting before the Pre-Inspection Meeting (PIM) to reflect on the lack of communication on the project and try to improve relations with the vendor."
        },
        "influence": {
          "ja": "何とか関係を改善し、検査前打合せ（PIM）も実施して機器製作に繋げた",
          "zh": "改善了和供货商的关系，成功按项目进度要求举行了检验前会议（PIM）。 产生了一些额外的工时。",
          "en": "Improved relations with the vendor and successfully held the Pre-Inspection Meeting (PIM) according to the project schedule. Some additional man-hours occurred."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.1-D.3",
        "desc": {
          "ja": "今後、機器製作時に手抜きをされるリスクを考慮して、検査員を増やすなど対策を取る",
          "zh": "未来，考虑到制造设备时存在偷工减料的风险，我们将采取增加检验人员数量等措施。",
          "en": "In the future, we will take measures such as increasing the number of inspectors in consideration of the risk of cutting corners when manufacturing equipment."
        },
        "influence": {
          "ja": "追加工数が発生した",
          "zh": "产生了一些额外的工时。",
          "en": "Some additional man-hours occurred."
        },
        "flags": [],
        "score": 5
      }
    ],
    "title": {
      "zh": "检验前会议 (危机 D)",
      "ja": "検査前打合せ (危機 D)",
      "en": "Pre-Inspection Meeting (Crisis D)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.1": {
    "chapter": "4.1",
    "desc": {
      "ja": "プロジェクトの最盛期で検査前打合せ（PIM）が始まりました。検査前打合せ（PIM）の工場 Visit時に、溶接棒が適切に管理されていない状況が確認された",
      "zh": "【项目高峰期，PIM已启动】在走访 检验前会议（PIM） 车间期间，证实焊条没有得到妥善管理。",
      "en": "[Peak of Project, PIM Begun] During a Pre-Inspection Meeting (PIM) shop visit, it was confirmed that welding rods were not being managed properly."
    },
    "selections": [
      {
        "id": "4.1.1",
        "desc": {
          "ja": "コメントの上、改善を要求し機器製作時に検査員にチェックさせる",
          "zh": "提出意见并要求改进，并在设备制造过程中由检验员进行检查。",
          "en": "Comment and request improvements to be checked by inspectors during equipment manufacturing."
        },
        "influence": {
          "ja": "改善を確認し、適切に溶接品質を管理できた",
          "zh": "我们能够确认改进并适当管理焊接质量。",
          "en": "We were able to confirm the improvement and manage welding quality appropriately."
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "4.1.2",
        "desc": {
          "ja": "ベンダー内での管理方法を尊重する",
          "zh": "尊重供应商内部的管理方法",
          "en": "Respect management methods within Vendors"
        },
        "influence": {
          "ja": "→後々、溶接欠陥多発",
          "zh": "→后期会出现很多焊接缺陷",
          "en": "→There will be many welding defects later"
        },
        "flags": [
          "4.2-H"
        ],
        "score": 3
      },
      {
        "id": "4.1.3",
        "desc": {
          "ja": "直ちに不適合報告書（NCR）を発行、再発防止を徹底させる",
          "zh": "因为业主也在场，为了表明我司保证质量的决心，当场开具不符合项报告（NCR）。",
          "en": "Since the client was also present, to demonstrate our commitment to quality, we issued a Non-Conformance Report (NCR) on the spot."
        },
        "influence": {
          "ja": "ベンダーはFollowするが関係が悪化した",
          "zh": "供应商紧随其后，但关系恶化",
          "en": "Vendor follows, but relationship deteriorates"
        },
        "flags": [],
        "score": 6
      }
    ],
    "title": {
      "zh": "检验前会议",
      "ja": "検査前打合せ",
      "en": "Pre-Inspection Meeting"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "4.2-A": {
    "chapter": "4.2-A",
    "desc": {
      "ja": "検査コーディネーションにおいて、ベンダーが30日前の検査申請を出せず、立会検査がたびたび客先からRejectされた",
      "zh": "【检验协调阶段】由于供应商未能提前30天提交检验申请，立会检验屡次被业主驳回。",
      "en": "[Inspection Coordination Stage] The vendor failed to submit the inspection notice 30 days prior, and the witness inspections were repeatedly rejected by the client."
    },
    "selections": [
      {
        "id": "4.2-A.1",
        "desc": {
          "ja": "要求事項なのでそのまま運用する",
          "zh": "因为是合同要求，所以必须遵守。跟我方见证人员与供货商强调，必须提前30天提交检验通知。",
          "en": "Since it is a contract requirement, we must comply with it. Emphasize to our witness inspectors and the vendor that the inspection notice must be submitted 30 days in advance."
        },
        "influence": {
          "ja": "検査コーディネーションが混乱しベンダーからクレームを受けた",
          "zh": "发生了重大的进度影响，并收到了 项目管理部（PMT） 的投诉。",
          "en": "A major schedule impact occurred and a complaint was received from the Project Management Team (PMT)."
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "4.2-A.2",
        "desc": {
          "ja": "今から客先にDevitionを出して、申請期間を短縮してもらう",
          "zh": "立即向客户提交 Devition，并要求他们缩短申请周期。",
          "en": "Submit Devition to customers now and ask them to shorten the application period."
        },
        "influence": {
          "ja": "部分的に認めてもらいインパクトを低減できた",
          "zh": "部分要求获得了业主批准，降低了进度方面的影响。",
          "en": "We obtained partial approval from the client, reducing the schedule impact."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.2-A.3",
        "desc": {
          "ja": "ベンダーに駐在検査員を派遣するなど機器製作を徹底管理する",
          "zh": "让检验员驻场，这样不管什么时候检验，都有人在。",
          "en": "Station the inspector at the vendor's shop so that someone is always present whenever inspections occur."
        },
        "influence": {
          "ja": "スケジュールインパクトは小さくできたが大きな追加コストが発生した",
          "zh": "对进度的影响减少了，但产生了大量的额外成本。",
          "en": "The schedule impact was reduced, but large additional costs were incurred."
        },
        "flags": [],
        "score": 6
      }
    ],
    "title": {
      "zh": "检验协调 (危机 A)",
      "ja": "検査調整 (危機 A)",
      "en": "Inspection Coordination (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-B": {
    "chapter": "4.2-B",
    "desc": {
      "ja": "検査コーディネーションにおいて、契約要求に反して2週間前の検査申請を出していたため客先から不適合報告書（NCR）が発行された",
      "zh": "【检验协调阶段】由于违反合同要求在检验前2周才提交检验申请，业主开具了不符合项报告（NCR）。",
      "en": "[Inspection Coordination Stage] An NCR was issued by the client because the inspection application was submitted only 2 weeks prior, in violation of the contract requirements."
    },
    "selections": [
      {
        "id": "4.2-B.1",
        "desc": {
          "ja": "契約要求の30日前に検査申請に切り替える",
          "zh": "将检验通知周期切换为合同要求的【在检验日一个月前提交检验通知】，并通知各分包商（subcontractor）执行。",
          "en": "Switch to the contractually required 'submitting inspection notice one month in advance' and notify all subcontractors to execute it."
        },
        "influence": {
          "ja": "検査コーディネーションが混乱しベンダーからクレームを受けた",
          "zh": "检查协调受到干扰，并收到了供应商的投诉。",
          "en": "Inspection coordination was disrupted and complaints were received from vendors."
        },
        "flags": [],
        "score": 5
      },
      {
        "id": "4.2-B.2",
        "desc": {
          "ja": "今から客先にDevitionを出して、申請期間を短縮してもらう",
          "zh": "立即向客户提交 Devition，并要求他们缩短申请周期。",
          "en": "Submit Devition to customers now and ask them to shorten the application period."
        },
        "influence": {
          "ja": "部分的に客先に認めてもらい、インパクトを低減できた",
          "zh": "部分材料获得业主批准，减小了对项目进度的影响。",
          "en": "Obtained partial approval from the client, reducing the schedule impact."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验协调 (危机 B)",
      "ja": "検査調整 (危機 B)",
      "en": "Inspection Coordination (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-C": {
    "chapter": "4.2-C",
    "desc": {
      "ja": "新規品質管理エンジニアの検査コーディネーションミスで、立会検査（H）に検査員を派遣できない",
      "zh": "因质量控制工程师的协调错误，导致没有及时派遣检验员参加Hold（必须见证）试验。",
      "en": "Due to a coordination error by the Quality Control Engineer (QCE), we failed to dispatch an inspector to attend a mandatory witness (Hold) point."
    },
    "selections": [
      {
        "id": "4.2-C.1",
        "desc": {
          "ja": "検査日時をリスケしてもらう",
          "zh": "让制造厂重新安排检验，另约时间。",
          "en": "Ask the vendor to reschedule the inspection date."
        },
        "influence": {
          "ja": "出荷に影響しロジからクレームを受けた",
          "zh": "这影响了发货，并收到了我们公司物流部门的投诉。",
          "en": "Affected shipment and received complaints from our company's logistics department."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.2-C.2",
        "desc": {
          "ja": "検査の立会をWaiveする",
          "zh": "考虑到对项目工期的影响，豁免（waive）这个见证点（Hold point）。",
          "en": "Considering the impact on the project schedule, waive this witness point (Hold point)."
        },
        "influence": {
          "ja": "Hポイントの急なWaiveで客先から不適合報告書（NCR）を受けた",
          "zh": "因为没有按项目要求执行见证点（Hold point），我司收到了业主开具的不符合项报告（NCR）。",
          "en": "Received a Non-Conformance Report (NCR) from the client because the Hold point was not executed in accordance with the project requirements."
        },
        "flags": [],
        "score": 4
      },
      {
        "id": "4.2-C.3",
        "desc": {
          "ja": "急遽担当品質管理エンジニアが出張して検査に立ち会う",
          "zh": "让负责这个设备的质量控制工程师赶快出差去现场参加检验见证。",
          "en": "Have the Quality Control Engineer (QCE) in charge of this equipment travel immediately to witness the inspection."
        },
        "influence": {
          "ja": "何とか検査は乗り切るが追加コストが発生した",
          "zh": "我们设法通过了检查，但产生了额外的费用。",
          "en": "We managed to survive the inspection, but additional costs were incurred."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验协调 (危机 C)",
      "ja": "検査調整 (危機 C)",
      "en": "Inspection Coordination (Crisis C)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-D": {
    "chapter": "4.2-D",
    "desc": {
      "ja": "カットされたBudgetで運営していたため、検査工数が枯渇した",
      "zh": "在项目后期发现，检验工时（man-hour）预算不够了。",
      "en": "Discovered in the late stage of the project that the inspection man-hour budget has run out."
    },
    "selections": [
      {
        "id": "4.2-D.1",
        "desc": {
          "ja": "プロジェクト管理部から指摘されるまで検査を続ける",
          "zh": "反正是项目管理部（PMT）强加给我的工时预算，他们应该知道已经超支了，不需要我另外告诉他们，继续进行检验工作。",
          "en": "Since the man-hour budget was imposed on me by the Project Management Team (PMT), they should already know it has run out. There is no need for me to inform them separately; just continue the inspections."
        },
        "influence": {
          "ja": "プロジェクト管理部からクレームを受けて大きく信頼を損ねた",
          "zh": "收到项目管理部（PMT）投诉，极大失去信任",
          "en": "Receive complaints from Project Management Team (PMT) and lose trust greatly"
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "4.2-D.2",
        "desc": {
          "ja": "直ちにプロジェクト管理部に追加検査工数を申請する",
          "zh": "立即向项目管理部（PMT）申请追加检验工时。",
          "en": "Immediately apply to the Project Management Team (PMT) for additional inspection man-hours."
        },
        "influence": {
          "ja": "突然の工数増加に莫大な説明を求められるが、何とか追加は認めてもらえた",
          "zh": "工时的突然增加需要向项目管理部进行大量解释说明，但最终还是同意了追加申请。",
          "en": "We had to provide extensive explanations for the sudden increase in man-hours, but we managed to get the additional budget approved."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验协调 (危机 D)",
      "ja": "検査調整 (危機 D)",
      "en": "Inspection Coordination (Crisis D)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-E": {
    "chapter": "4.2-E",
    "desc": {
      "ja": "SNT-TC-1Aの資格が認められないプロジェクト要求を引き合い要求書に盛り込み忘れたままNDEを実施し、記録Review時に発見される",
      "zh": "在供应商已经做完无损检测（NDE）的情况下，发现项目不允许仅持有SNT-TC-1A资格的技术人员执行无损检测。且在审查检验报告（Inspection Report）时发现相关人员仅有SNT-TC-1A资格。回头核对询价书，发现里面漏写了这一条。",
      "en": "After the vendor completed the NDE, it was discovered that the project does not permit technicians holding only SNT-TC-1A qualifications to perform NDE. Upon reviewing the Inspection Report, it was confirmed that the personnel only held SNT-TC-1A. Checking the Requisition, we found this clause was missed."
    },
    "selections": [
      {
        "id": "4.2-E.1",
        "desc": {
          "ja": "少なくともSNT-TC-1Aの検査員が実施しているので、そのまま承認する",
          "zh": "SNT-TC-1A资格也是正规资格，考虑对工期和成本的影响，批准并同意检验报告的结果。",
          "en": "SNT-TC-1A qualification is also a formal qualification. Considering the impact on schedule and cost, approve the inspection report results."
        },
        "influence": {
          "ja": "客先に発見され不適合報告書（NCR）を出されるとともに信頼を損ねた",
          "zh": "最终业主发现了这一点，开具了不符合项报告（NCR）并要求我司整改，从此我司失去了业主的信任。",
          "en": "Ultimately the client discovered this, issued a Non-Conformance Report (NCR) demanding our rectification, and we lost the client's trust."
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "4.2-E.2",
        "desc": {
          "ja": "ISO9712の検査員による再NDEを実施する",
          "zh": "让供货商寻找ISO 9712的检验员重新进行检验。",
          "en": "Instruct the vendor to find ISO 9712 qualified technicians to perform the NDE again."
        },
        "influence": {
          "ja": "ベンダーに追加コストをクレームされた",
          "zh": "供应商虽然照做了，但在之后提交了合同变更，要求我们公司支付这笔费用。",
          "en": "The vendor complied, but subsequently submitted a contract variation demanding our company pay for this cost."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.2-E.3",
        "desc": {
          "ja": "客先にDeviaitonを出して、SNT-TC-1Aの検査員による記録を認めてもらう",
          "zh": "向业主提交项目偏离（deviation）申请，要求认可SNT-TC-1A体系下的检验报告有效性。",
          "en": "Submit a project deviation request to the client to accept the validity of the inspection reports under the SNT-TC-1A system."
        },
        "influence": {
          "ja": "Deviationは否認され、ISO9712の検査員による再NDEを実施し、ベンダーからクレームされた",
          "zh": "业主拒绝了该项目偏离申请。结果还是让供货商找了ISO 9712的检验员重新进行检测，最后供货商提交了合同变更，要求我们公司支付这笔钱。",
          "en": "The deviation request was rejected by the client. We had to ask the vendor to perform the NDE again with ISO 9712 inspectors, and subsequently the vendor submitted a contract variation demanding our company cover this expense."
        },
        "flags": [],
        "score": 6
      }
    ],
    "title": {
      "zh": "检验协调 (危机 E)",
      "ja": "検査調整 (危機 E)",
      "en": "Inspection Coordination (Crisis E)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-F": {
    "chapter": "4.2-F",
    "desc": {
      "ja": "検査員の力量不足により、IRがPoorで実際の検査状況が分からない",
      "zh": "由于派驻检验人员的能力不足，检验报告（Inspection Report）写得不够清楚，无法判断实际检验的具体情况。",
      "en": "Due to the lack of capability of the dispatched inspector, the Inspection Report (IR) is not written clearly enough to judge the actual inspection status."
    },
    "selections": [
      {
        "id": "4.2-F.1",
        "desc": {
          "ja": "直ちに検査員を交代する",
          "zh": "立即更换检验员。",
          "en": "Immediately replace the inspector."
        },
        "influence": {
          "ja": "新規検査員への指導や引継ぎなどで追加工数が発生した",
          "zh": "由于指导和移交新检查员，发生了额外的 工时。",
          "en": "Additional man-hours occurred due to guidance and handover to new inspectors."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.2-F.2",
        "desc": {
          "ja": "IRの書き方を検査員に指導する",
          "zh": "亲自下场指导检验员如何写检验报告（Inspection Report）。",
          "en": "Personally guide the inspector on how to write the Inspection Report."
        },
        "influence": {
          "ja": "IRが改善され検査状況がプロジェクト関係者で共有できた",
          "zh": "IR 已得到改进，检查状态可以与相关方共享",
          "en": "IR has been improved and inspection status can be shared with related parties"
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.2-F.3",
        "desc": {
          "ja": "検査員の力量を尊重してそのまま継続する",
          "zh": "考虑到工时 and 成本，维持现有的检验员不变，要求检验公司多加指导督促该检验员。",
          "en": "Considering man-hours and cost, maintain the current inspector and ask the inspection agency to provide more guidance."
        },
        "influence": {
          "ja": "検査状況が分からないまま出荷し、現場でトラブル多発",
          "zh": "在不了解检验情况的状态下直接发货，导致现场问题频发。",
          "en": "Shipped without clear understanding of the inspection status, leading to frequent issues at the site."
        },
        "flags": [
          "5.3-A"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "检验协调 (危机 F)",
      "ja": "検査調整 (危機 F)",
      "en": "Inspection Coordination (Crisis F)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-G": {
    "chapter": "4.2-G",
    "desc": {
      "ja": "ベンダーとの関係が悪化し、立会検査時にJGC検査員の工場への入場が拒否された",
      "zh": "与供应商的关系恶化，我方 检查员被拒绝进入工厂。",
      "en": "The relationship with the vendor deteriorated and our inspectors were refused entry to the factory."
    },
    "selections": [
      {
        "id": "4.2-G.1",
        "desc": {
          "ja": "検査員を帰宅させて検査をWaiveする",
          "zh": "因为不是见证点（Hold point），豁免此处检验见证的要求。",
          "en": "Since it is not a Hold point, waive the requirement for inspection witness here."
        },
        "influence": {
          "ja": "検査をしないまま出荷して、現場でトラブル発生",
          "zh": "因为发货前未进行检验，导致在安装现场出现状况。",
          "en": "Because no inspection was performed before shipment, problems arose at the construction site."
        },
        "flags": [
          "5.3-B"
        ],
        "score": 3
      },
      {
        "id": "4.2-G.2",
        "desc": {
          "ja": "検査員に強引に入場させ検査を実施する",
          "zh": "供货商瞒着我方，肯定是做了违规操作，强行让检验员进入厂房实施检验。",
          "en": "The vendor is hiding things from us, which means they must have performed non-conforming operations. Force the inspector to enter and conduct the inspection."
        },
        "influence": {
          "ja": "検査員が工場でケガをした",
          "zh": "检验员因强行进入厂房，在车间内意外受伤。",
          "en": "The inspector was unexpectedly injured in the shop while forcing entry for inspection."
        },
        "flags": [
          "Game Over"
        ],
        "score": 1
      },
      {
        "id": "4.2-G.3",
        "desc": {
          "ja": "プロジェクト管理部/プロキュアと協力してベンダーマネジメントを通して検査を実施してもらう",
          "zh": "与项目管理部（PMT）、采购部门配合，通过对供应商的高层管理施压来实施检验。",
          "en": "Cooperate with the Project Management Team (PMT) and Procurement department to conduct the inspection through vendor management."
        },
        "influence": {
          "ja": "何とか検査を実施するがプロジェクト管理部から大きなクレームを受ける",
          "zh": "虽然最终在我方检验员见证下完成了检验并出货，但事后收到了项目管理部（PMT）的强烈投诉。",
          "en": "Although we managed to witness the inspection and ship it, we subsequently received heavy complaints from the Project Management Team."
        },
        "flags": [],
        "score": 7
      }
    ],
    "title": {
      "zh": "检验协调 (危机 G)",
      "ja": "検査調整 (危機 G)",
      "en": "Inspection Coordination (Crisis G)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2-H": {
    "chapter": "4.2-H",
    "desc": {
      "ja": "ベンダー 工場での溶接棒管理不全から、終盤のRTフィルムReviewで多数の欠陥が見つかる",
      "zh": "由于供应商制造厂的焊条管理不善，在后期的射线检测（RT）胶片审查中发现了大量不合格缺陷。",
      "en": "Due to poor welding rod management in the vendor shop, a large number of defects were found during the RT film review in the final stage."
    },
    "selections": [
      {
        "id": "4.2-H.1",
        "desc": {
          "ja": "全て溶接補修して健全な機材を出荷する",
          "zh": "我们通过焊接修复一切并运送健康的设备。",
          "en": "We repair everything by welding and ship healthy equipment."
        },
        "influence": {
          "ja": "スケジュールインパクトはあったが何とか出荷した",
          "zh": "虽然进度受到影响，但我们还是成功发货了。",
          "en": "Although there was a schedule impact, we managed to ship it."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.2-H.2",
        "desc": {
          "ja": "時間が無いからそのまま出荷する",
          "zh": "由于项目的工期非常紧，且一定的缺陷是ASME标准允许的，因此决定先发货再说。",
          "en": "Due to the extremely tight project schedule and because certain defects are permissible under ASME standards, we decided to ship it as is."
        },
        "influence": {
          "ja": "客先に発見され不適合報告書（NCR）を出されるとともにDisqualify",
          "zh": "被业主发现并开具不符合项报告（NCR），且我方被业主直接撤换（Disqualify）。",
          "en": "Discovered by the client, who issued an NCR and disqualified our company."
        },
        "flags": [
          "Game Over"
        ],
        "score": 1
      },
      {
        "id": "4.2-H.3",
        "desc": {
          "ja": "運転条件などを確認して、重み付けをして、Criteriaを客先と見直す",
          "zh": "根据ASME标准确认哪条焊缝是重要的，哪条焊缝是不重要。劝说供货商修补重要焊缝中缺陷较多的部分。",
          "en": "Identify which welds are critical based on ASME standards. Persuade the vendor to repair the critical welds containing more defects."
        },
        "influence": {
          "ja": "客先と合意した最小限の補修をして出荷できた",
          "zh": "在进行了最低限度的补修后发货。",
          "en": "The product was shipped after making the minimum repairs agreed upon with the customer."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验协调 (危机 H)",
      "ja": "検査調整 (危機 H)",
      "en": "Inspection Coordination (Crisis H)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.2": {
    "chapter": "4.2",
    "desc": {
      "ja": "検査コーディネーションにおいて、ベンダーによるSubvendor管理不足でタイムリーに検査申請が出ない",
      "zh": "【检验协调阶段】由于供应商缺乏对转包商的管理，未及时提交验货申请。",
      "en": "[Inspection Coordination Stage] Inspection applications are not submitted in a timely manner due to lack of subvendor management by the vendor."
    },
    "selections": [
      {
        "id": "4.2.1",
        "desc": {
          "ja": "検査員/Expeditorを派遣して、製作状況を管理して検査申請を出させる",
          "zh": "派遣检验员/催交员管理生产状态并提交检验请求",
          "en": "Dispatch inspectors/Expeditors to manage production status and submit inspection requests"
        },
        "influence": {
          "ja": "追加工数は発生したがスケジュールは守り、後日ベンダーにBack Chargeした",
          "zh": "虽然产生了额外的工时，但保证了项目进度，并在事后向供应商索赔（Back-charge）。",
          "en": "Although additional man-hours occurred, the schedule was maintained, and we back-charged the vendor later."
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "4.2.2",
        "desc": {
          "ja": "検査申請が出たら検査を実施する",
          "zh": "一旦供应商发出检验申请，就立即进行检验工作。",
          "en": "Perform the inspection immediately when the inspection request is issued."
        },
        "influence": {
          "ja": "スケジュールインパクトが発生し建設からクレームを受けた",
          "zh": "因影响进度而受到施工投诉",
          "en": "Complaint from construction due to schedule impact"
        },
        "flags": [],
        "score": 3
      }
    ],
    "title": {
      "zh": "检验协调",
      "ja": "検査調整",
      "en": "Inspection Coordination"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "4.3-A": {
    "chapter": "4.3-A",
    "desc": {
      "ja": "バルク品の不適合報告書（NCR）が発生し、水平展開で膨大なバックチェックが必要となるが工数不足で対応できない",
      "zh": "大宗产品出现不符合项报告（NCR），横向部署需要大量回查，但因缺乏工时而无法处理",
      "en": "Non-Conformance Report (NCR) of bulk products occurs, and a huge amount of back-checking is required for horizontal deployment, but it cannot be handled due to lack of man-hours"
    },
    "selections": [
      {
        "id": "4.3-A.1",
        "desc": {
          "ja": "現有勢力で乗り切る",
          "zh": "多加加班，尽量完成。",
          "en": "Work extra overtime and try our best to complete it."
        },
        "influence": {
          "ja": "バックチェックに時間を要し、大きなスケジュールインパクトとチーム員のデモチベーションが発生した",
          "zh": "回溯需要时间，对进度造成很大影响，并破坏团队成员。",
          "en": "Back-checking takes time, causing a big impact on the schedule and demolishing team members."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.3-A.2",
        "desc": {
          "ja": "短期的に補強を入れてチェックする",
          "zh": "短期内引入外部增援来协助复核。",
          "en": "Bring in short-term support to assist with the checking."
        },
        "influence": {
          "ja": "水平展開は完了したが、追加工数が発生した",
          "zh": "虽然产生了额外的工时，但保证了项目进度，并在事后向供应商索赔（Back-charge）。",
          "en": "Although additional man-hours occurred, the schedule was maintained, and we back-charged the vendor later."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "4.3-A.3",
        "desc": {
          "ja": "全数見直す時間が無いので、抜き取りでチェックする",
          "zh": "没有时间全部重新审查，因此进行抽样检查。",
          "en": "Since there is no time to review all of them, perform a sampling check."
        },
        "influence": {
          "ja": "抜き取り漏れがあり、現場でさらに不適合報告書（NCR）発生",
          "zh": "存在漏检情况，导致在施工现场进一步开具了不符合项报告（NCR）。",
          "en": "There was a sampling omission, leading to further Non-Conformance Reports (NCR) on site ."
        },
        "flags": [
          "5.3-C"
        ],
        "score": 3
      }
    ],
    "title": {
      "zh": "不符合项处理 (危机 A)",
      "ja": "不適合管理 (危機 A)",
      "en": "Non-Conformance Report (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.3-B": {
    "chapter": "4.3-B",
    "desc": {
      "ja": "技術評価（Technical Evaluation）不足により、出荷前に官庁立会を実施していない不適合報告書（NCR）が発生した",
      "zh": "因为在技术评估（Technical Evaluation）阶段没有提醒供货商，导致供货商忘记在出货前进行政府办公室见证。我们向供货商发了不符合项报告（NCR）。之后应该怎么处理？",
      "en": "Because the vendor was not reminded during the Technical Evaluation stage, they forgot to conduct the government office witnessing before shipment. We issued a Non-Conformance Report (NCR) to the vendor. What should be done next?"
    },
    "selections": [
      {
        "id": "4.3-B.1",
        "desc": {
          "ja": "客先にDeviationを出し、官庁の立会を免除してもらう",
          "zh": "同时向业主提交项目偏离（deviation）申请，询问业主是否可以免除政府办公室的见证检查。",
          "en": "Submit a project deviation request to the client to ask if they can exempt the government office witnessing."
        },
        "influence": {
          "ja": "Deviationは否認され、官庁立会を実施し大きなスケジュールインパクトが発生した",
          "zh": "业主拒绝了该偏离申请，我方必须执行政府见证，对项目进度造成了严重影响。",
          "en": "The deviation request was rejected by the client, forcing us to conduct the government witnessing and causing a significant schedule impact."
        },
        "flags": [],
        "score": 4
      },
      {
        "id": "4.3-B.2",
        "desc": {
          "ja": "今から官庁の立会をアレンジする",
          "zh": "尽快安排一个政府办公室的检验员参与见证。",
          "en": "Arrange a government office inspector to attend and witness the inspection as soon as possible."
        },
        "influence": {
          "ja": "大きなスケジュールインパクトが発生した",
          "zh": "发生了重大的进度影响。",
          "en": "A major schedule impact occurred."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.3-B.3",
        "desc": {
          "ja": "客先にDeviationを出し、現場で官庁立会を実施する",
          "zh": "向业主提出项目偏离（deviation）申请，询问是否可以在设备运抵现场后再进行政府办公室的检查。",
          "en": "Submit a project deviation request to the client to ask if the government office inspection can be conducted after the equipment arrives at the site."
        },
        "influence": {
          "ja": "Deviationは認められ、現場で官庁立会を実施するが追加コストが発生した",
          "zh": "偏差获得批准并进行了现场政府见证，但产生了额外费用。",
          "en": "Deviation was approved and an on-site government witness was conducted, but additional costs were incurred."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "不符合项处理 (危机 B)",
      "ja": "不適合管理 (危機 B)",
      "en": "Non-Conformance Report (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.3-C": {
    "chapter": "4.3-C",
    "desc": {
      "ja": "未経験のSubvendorに主要機器製作を丸投げしたので、材質間違い、寸法間違い、ワークマンシップなど不適合報告書（NCR）が多発した",
      "zh": "由于将主要设备制造完全转包给缺乏经验的分包商，导致材料错误、尺寸错误、工艺不良等不符合项报告（NCR）频发。",
      "en": "Because the production of major equipment was completely outsourced to an inexperienced subvendor, Non-Conformance Reports (NCRs) occurred frequently due to incorrect materials, incorrect dimensions, and poor workmanship."
    },
    "selections": [
      {
        "id": "4.3-C.1",
        "desc": {
          "ja": "あくまでベンダーに管理させ、リキダメを最大限取り立てる",
          "zh": "要求供货商加强管理。至于管理不好的部分，根据合同条款，要求供货商支付赔偿金（Liquidated Damages）。",
          "en": "Let the vendor manage it, and demand the vendor pay Liquidated Damages according to the contract clauses."
        },
        "influence": {
          "ja": "リキダメによりコストインパクトは限定的だが、甚大なスケジュールインパクトが発生した",
          "zh": "虽然通过索赔（Liquidated Damages）索要到了一些赔偿，但也对项目工期造成了严重延误。",
          "en": "Although some compensation was recovered via Liquidated Damages, it caused severe project schedule delays."
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "4.3-C.2",
        "desc": {
          "ja": "設計/工程/QCでチームを作ってSubvendorに投入し、何とか出荷する",
          "zh": "由设计、采购和QC部门组成专项攻坚团队派驻分包商工厂，确保设备按期发货。",
          "en": "Form a joint team of Design, Procurement, and QC to intervene at the subcontractor's shop to secure shipment."
        },
        "influence": {
          "ja": "スケジュールインパクトは限定的だが、大きな追加工数が発生した",
          "zh": "尽管对进度的影响有限，但还是发生了大量额外的 工时。",
          "en": "Although the schedule impact was limited, a large additional man-hours occurred."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "4.3-C.3",
        "desc": {
          "ja": "機器製作の継続は不可能と判断して、発注替えする",
          "zh": "评估认为分包商无法继续完成设备制造，果断决定更换供应商。",
          "en": "Judged that the continuation of equipment fabrication was impossible and decided to change the vendor."
        },
        "influence": {
          "ja": "スケジュール・コストともにインパクトはあったが、プロジェクト全体では何とか吸収できた",
          "zh": "这对进度和成本都产生了影响，但整个项目成功地吸收了影响。",
          "en": "There was an impact on both schedule and cost, but the project as a whole managed to absorb it."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "不符合项处理 (危机 C)",
      "ja": "不適合管理 (危機 C)",
      "en": "Non-Conformance Report (Crisis C)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.3-D": {
    "chapter": "4.3-D",
    "desc": {
      "ja": "ベンダー図書 Review漏れで、Flange Faceの防錆不全の不適合報告書（NCR）発生した",
      "zh": "因为供应商图纸审核（Vendor Document Review）不够充分，导致供货商未按项目要求进行法兰面的防锈处理。我方已向分包商发行了不符合项报告（NCR）。之后应该怎么处理？",
      "en": "Because the Vendor Document Review was insufficient, the vendor failed to perform rust prevention treatment on the flange face in accordance with project requirements. We issued a Non-Conformance Report (NCR) to the subcontractor. What should be done next?"
    },
    "selections": [
      {
        "id": "4.3-D.1",
        "desc": {
          "ja": "時間が無いのでそのまま出荷するが、現場受入時にサブコンによる防錆処理を依頼する",
          "zh": "为了避免影响到进度，让供货商先出货。最后以【在现场进行防锈处理】的形式关闭了这个NCR。",
          "en": "To avoid delaying the project schedule, allow the vendor to ship first. Close this NCR with a plan to perform rust prevention treatment on-site."
        },
        "influence": {
          "ja": "スケジュールは守れたが、現場でサブコンから巨額のクレームを受けた",
          "zh": "虽然保住了项目工期，但是收到了来自现场分包商（subcontractor）的大量投诉。",
          "en": "Although the project schedule was maintained, we received a large volume of complaints from the subcontractors on site."
        },
        "flags": [],
        "score": 5
      },
      {
        "id": "4.3-D.2",
        "desc": {
          "ja": "バッチを小分けにして優先順位順に適切な防錆処理をして出荷する",
          "zh": "批量分为小批量，并按优先顺序进行适当的防腐处理后发货。",
          "en": "Batch is divided into small batches and shipped with appropriate anti-corrosion treatment in order of priority."
        },
        "influence": {
          "ja": "スケジュールインパクトを最小限に抑えた",
          "zh": "最大限度地减少对日程的影响",
          "en": "Minimized schedule impact"
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "不符合项处理 (危机 D)",
      "ja": "不適合管理 (危機 D)",
      "en": "Non-Conformance Report (Crisis D)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "4.3": {
    "chapter": "4.3",
    "desc": {
      "ja": "検査記録Review時に偽造材質証明書（MTC）が見つかる",
      "zh": "在审查检验记录时，发现供应商伪造了材质证明书（MTC）。",
      "en": "A forged Material Test Certificate (MTC) was discovered during the inspection records review."
    },
    "selections": [
      {
        "id": "4.3.1",
        "desc": {
          "ja": "時間が無いのでそのまま出荷する",
          "zh": "我没有时间，所以我就按原样发货了。",
          "en": "I didn't have time so I shipped it as is."
        },
        "influence": {
          "ja": "技術者倫理に抵触し、客先/プロジェクト管理部からDisqualify",
          "zh": "因触犯工程师职业道德，被业主/项目管理团队（PMT）直接解雇清退。",
          "en": "Disqualified and dismissed by the client/Project Management Team (PMT) due to violation of engineering ethics."
        },
        "flags": [
          "Game Over"
        ],
        "score": 1
      },
      {
        "id": "4.3.2",
        "desc": {
          "ja": "対象部材にPMI、硬さ試験などを実施して合格を確認して出荷する",
          "zh": "按照国际标准对目标零件进行PMI、硬度测试等，确认该材料符合规范要求，于是放行了这批材料。",
          "en": "We conduct PMI, hardness tests, etc. on the target parts according to international standards and confirm that they pass before shipping."
        },
        "influence": {
          "ja": "後々、現場で客先からさらに追及を受ける",
          "zh": "在材料运抵安装现场之后，业主会针对此事对我司产生严重的不信任。",
          "en": "After the materials arrive at the site, the client will harbor serious distrust toward our company regarding this matter."
        },
        "flags": [
          "5.3-D"
        ],
        "score": 5
      },
      {
        "id": "4.3.3",
        "desc": {
          "ja": "対象材料を取り換える",
          "zh": "拒绝接收并要求更换材料。",
          "en": "Reject acceptance and demand replacement of the materials."
        },
        "influence": {
          "ja": "コスト・スケジュールインパクトは発生したが健全な機材を出荷した",
          "zh": "尽管项目成本 and 进度受到了很大的负面影响，但我们最终为施工现场提供了符合项目要求的合格材料。",
          "en": "Although there was a major impact on cost and schedule, we shipped conforming materials to the site."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "不符合项处理",
      "ja": "不適合管理",
      "en": "Non-Conformance Report"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "5.1-A": {
    "chapter": "5.1-A",
    "desc": {
      "ja": "プロジェクトも終盤ですが、新規エンジニアの経験不足で、バルク材の材質証明書（MTC）が無いままIRCだけ発行した",
      "zh": "【项目已进入尾声】由于新外包团队人员经验不足，在未收到材质证明书（MTC）的情况下，他就发行了检验放行证（IRC），放行了这批材料。",
      "en": "[The Project is in its Final Stages] Due to the lack of experience of the new outsourcing team, they issued the Inspection Release Certificate (IRC) without receiving the Material Test Certificate (MTC) for the bulk materials."
    },
    "selections": [
      {
        "id": "5.1-A.1",
        "desc": {
          "ja": "ベンダーが製造記録書（MRB）を出すのを待つ",
          "zh": "反正之后都会汇总放在竣工资料（MRB）里面，等供货商提供竣工资料（MRB）就行了。",
          "en": "Since it will be compiled into the Manufacturing Data Record (MDR) later, just wait for the vendor to submit the MDR."
        },
        "influence": {
          "ja": "後々、現場からクレーム",
          "zh": "随后收到了来自施工现场的强烈投诉。",
          "en": "Subsequently received complaints from the construction site."
        },
        "flags": [
          "5.3-E"
        ],
        "score": 3
      },
      {
        "id": "5.1-A.2",
        "desc": {
          "ja": "直ちに現場とのプロトコルを確立して材質証明書（MTC）を共有する",
          "zh": "跟现场工作人员制定交换材质证明书（MTC）的规则，并告知质量控制（QC）团队内的人员，让他们以后注意。",
          "en": "Establish rules for sharing Material Test Certificates (MTC) with site staff, and instruct the QC team members to pay attention to this in the future."
        },
        "influence": {
          "ja": "配管工場 Fab.開始当初は混乱したが、徐々に改善した",
          "zh": "管道工厂预制（Shop Fabrication）开始之初有些混乱，但随着规则建立已逐步改善。",
          "en": "At the beginning of piping Shop Fabrication, there was confusion, but it gradually improved."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "检验放行证发行 (危机 A)",
      "ja": "検査放行証発行 (危機 A)",
      "en": "Inspection Release Certificate (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.1": {
    "chapter": "5.1",
    "desc": {
      "ja": "プロジェクトも終盤ですが、IRC発行直前のFinal Inspectionで大量のパンチがついた",
      "zh": "【项目已进入尾声】在发行检验放行证（IRC）之前的最终检查（final inspection）中，发现了很多待整改的问题（punch）。",
      "en": "[The Project is in its Final Stages] During the final inspection just before issuing the Inspection Release Certificate (IRC), we found many pending punch list items."
    },
    "selections": [
      {
        "id": "5.1.1",
        "desc": {
          "ja": "設計/建設と協議してCarry Over Wrokを決めて、最小限のパンチを潰して出荷する",
          "zh": "与设计和施工部门协商确定残留尾项（Carry-over Items），清理完最小限度的尾项后发货。",
          "en": "Discuss with Design and Construction to determine Carry-over Work, clear the minimum punch items, and ship."
        },
        "influence": {
          "ja": "スケジュールインパクトは限定的だが、現場でサブコンからクレームを受けた",
          "zh": "虽然对进度的影响有限，但收到了现场分包商（subcontractor）的强烈投诉。",
          "en": "Although the schedule impact was limited, we received complaints from the subcontractors on site."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "5.1.2",
        "desc": {
          "ja": "ベンダーがパンチを潰すのを待つ",
          "zh": "等待供应商解决所有的待解决事项（Punch）。",
          "en": "Wait for the vendor to clear all pending punch items."
        },
        "influence": {
          "ja": "甚大なスケジュールインパクトが発生した",
          "zh": "导致了极大的项目进度拖延。",
          "en": "A huge schedule impact occurred."
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "5.1.3",
        "desc": {
          "ja": "追加の検査員を投入して、集中的にパンチを潰して出荷する",
          "zh": "增派检验员协助，集中力量清理尾项（punch list）后发货。",
          "en": "Deploy additional inspectors to intensively clear the punch items and ship."
        },
        "influence": {
          "ja": "スケジュールインパクトは限定的だが、追加の検査工数が発生した",
          "zh": "虽然项目进度上没有发生大的延迟，但增加了不少额外的工时（man-hour）成本。",
          "en": "Although the schedule impact was limited, additional inspection man-hours occurred."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "IRC",
      "ja": "IRC",
      "en": "IRC"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "5.2": {
    "chapter": "5.2",
    "desc": {
      "ja": "ジョブの終盤を迎えるもベンダーが中々製造記録書（MRB）を提出しない",
      "zh": "即使作业已接近最后阶段，供应商也不会提交 MRB。",
      "en": "Vendor does not submit MRB even though the JOB is nearing its final stage."
    },
    "selections": [
      {
        "id": "5.2.1",
        "desc": {
          "ja": "ベンダーが提出するのを待つ",
          "zh": "等待供应商提交。",
          "en": "Wait for vendor to submit"
        },
        "influence": {
          "ja": "いつまでも製造記録書（MRB）が終わらず、プロジェクト管理部からクレームを受けた",
          "zh": "MRB永无休止并收到项目管理部（PMT）的投诉",
          "en": "MRB never ends and receives complaints from Project Management Team (PMT)"
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "5.2.2",
        "desc": {
          "ja": "設計/プロキュアのサポートをもらいながら多方面から督促する",
          "zh": "在设计和采购部门的支持下，从多渠道向供应商施压催缴竣工资料（MRB）。",
          "en": "Expedite the vendor from multiple angles with support from Design and Procurement."
        },
        "influence": {
          "ja": "何とか全製造記録書（MRB）を取り寄せた",
          "zh": "最终在各方努力下，顺利完成了竣工资料（MRB）的提交。",
          "en": "In the end, through everyone's efforts, the Manufacturing Data Record (MDR) was successfully compiled."
        },
        "flags": [],
        "score": 10
      },
      {
        "id": "5.2.3",
        "desc": {
          "ja": "これまでの検査記録から製造記録書（MRB）を自主制作する",
          "zh": "根据过去收集的检验记录，尝试自行编制竣工资料（MRB）。",
          "en": "Independently create MRB from past inspection records."
        },
        "influence": {
          "ja": "足りない記録もあるが、とりあえず全数提出した",
          "zh": "虽然缺失部分检验记录，但还是先将已有的文件全部提交。",
          "en": "Submit all available records first, even if some parts are missing."
        },
        "flags": [],
        "score": 6
      }
    ],
    "title": {
      "zh": "竣工资料审查",
      "ja": "竣工図書レビュー",
      "en": "Manufacturing Data Record"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "5.3-A": {
    "chapter": "5.3-A",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。IR Review不足により現場に届いたVesselにClipが取り付けられていない事例が散見された",
      "zh": "【现场支持也是PQCM的职责】由于检验报告（Inspection Report）审批得不够充分，导致某些压力容器（vessel）运抵施工现场后，发现上面缺少了支撑管卡（clip）。",
      "en": "[Site Support is also PQCM's Job] Due to insufficient review of the Inspection Report (IR), there were cases where clips were not attached to the vessels that arrived at the construction site."
    },
    "selections": [
      {
        "id": "5.3-A.1",
        "desc": {
          "ja": "Vesselをベンダーに送り返して補修させる",
          "zh": "将容器（Vessel）送回供应商工厂，责令供应商进行修补整改。",
          "en": "Send the Vessel back to the Vendor's factory for repair."
        },
        "influence": {
          "ja": "甚大なスケジュールインパクトが発生した",
          "zh": "这导致了极大的项目进度拖延。",
          "en": "A huge schedule impact occurred."
        },
        "flags": [],
        "score": 7
      },
      {
        "id": "5.3-A.2",
        "desc": {
          "ja": "現場でサブコンが補修しR Stampを押す",
          "zh": "安排现场分包商（subcontractor）修补容器并重新打上 R Stamp 钢印，且事后向供货商索赔费用。",
          "en": "Have the subcontractor on site repair the vessel instead of the vendor, and back-charge the vendor for the cost."
        },
        "influence": {
          "ja": "スケジュールインパクトが発生し、サブコンからのクレームを受けた",
          "zh": "虽然保证了项目工期，但收到了现场承包商的强烈投诉。",
          "en": "Although the schedule was maintained, we received complaints from the subcontractor."
        },
        "flags": [],
        "score": 6
      },
      {
        "id": "5.3-A.3",
        "desc": {
          "ja": "客先にDeviationを出し、付着物の構造を改造しClip無しのままとする",
          "zh": "向业主提交项目偏离（deviation）申请，要求业主接受没有支撑管卡（clip）的设计，并修改一部分施工图纸。",
          "en": "Submit a project deviation request to the client to accept the design without the clip, and modify part of the construction drawings."
        },
        "influence": {
          "ja": "Deviationは認められたが、Model Reviewのやり直しなど多数の追加ワークによる甚大なスケジュールインパクトが発生した",
          "zh": "尽管业主接受了偏离申请，但因为需要重新进行模型审查等设计变更工作，对项目进度造成了很大影响。",
          "en": "Although the deviation request was approved, a lot of additional design changes like redoing model review caused a significant schedule impact."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "现场响应 (危机 A)",
      "ja": "現場対応 (危機 A)",
      "en": "Site Response (Crisis A)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.3-B": {
    "chapter": "5.3-B",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。検査の無いまま出荷したので、現場でルーズパーツなどがどこにあるか分からない",
      "zh": "【现场支持也是PQCM的职责】由于发货前未进行检验，导致在施工现场不清楚散供件（loose parts）的具体位置。",
      "en": "[Site Support is also PQCM's Job] Since it was shipped without inspection, it is unclear where the loose parts are located on site."
    },
    "selections": [
      {
        "id": "5.3-B.1",
        "desc": {
          "ja": "ベンスペを現場に招聘してパーツを管理させる",
          "zh": "邀请供应商现场代表（Vendor Supervisor）到施工现场进行散供件管理指导。",
          "en": "Invite the Vendor Supervisor to the site to manage the loose parts."
        },
        "influence": {
          "ja": "ベンダーとの関係が完全に冷え込み、まともな対応をしてもらえずプロジェクトが大混乱となった",
          "zh": "因为和供应商的关系很差。因此在发出邀请后，过了很久，供应商才做出回复。在此期间，混乱的现场管理已经在工期上对项目造成了影响。",
          "en": "The relationship with the vendor completely cooled down, and the project schedule was affected as they did not respond for a long time during chaotic site management."
        },
        "flags": [],
        "score": 4
      },
      {
        "id": "5.3-B.2",
        "desc": {
          "ja": "ベンダーと現場にエンジニアを派遣してパーツの有無を管理する",
          "zh": "要求供货商的人员指导我方现场人员进行散供件管理的指导。",
          "en": "Instruct our site staff to perform loose parts management under the vendor's guidance."
        },
        "influence": {
          "ja": "非協力的なベンダーとの界面を調整しつつ何とか取りまとめるが甚大なスケジュールインパクトと追加工数が発生した",
          "zh": "在与不合作的供应商艰苦协调界面的同时，勉强理顺了工作，但已经造成了巨大的工期延误与额外的工时开支。",
          "en": "Somehow coordinated the interfaces with the uncooperative vendor, but it resulted in a huge schedule delay and additional man-hours."
        },
        "flags": [],
        "score": 7
      },
      {
        "id": "5.3-B.3",
        "desc": {
          "ja": "不明なパーツは全て現場で再購入する",
          "zh": "所有未知零件将在现场重新购买。",
          "en": "All unknown parts will be repurchased on site."
        },
        "influence": {
          "ja": "膨大な追加コストが発生するもベンダーから回収できなかった",
          "zh": "产生了巨额的追加费用，且无法向供应商成功索赔收回。",
          "en": "Huge additional costs were incurred and could not be recovered from the vendor."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "现场响应 (危机 B)",
      "ja": "現場対応 (危機 B)",
      "en": "Site Response (Crisis B)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.3-C": {
    "chapter": "5.3-C",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。バルク品の不適合報告書（NCR）が出荷前に処理しきれず、現場でも同様に発見される",
      "zh": "【现场支持也是PQCM的职责】散装材料的不符合项报告（NCR）在出厂发货前未能处理完毕，在施工现场同样被发现了。",
      "en": "[Site Support is also PQCM's Job] The Non-Conformance Report (NCR) for bulk materials could not be fully resolved before shipment, and the same issues were discovered on site."
    },
    "selections": [
      {
        "id": "5.3-C.1",
        "desc": {
          "ja": "ベンスペを現場に招聘して全数対応させる",
          "zh": "邀请供应商现场代表（Vendor Supervisor）到施工现场对所有不合格品进行处理。",
          "en": "Invite the Vendor Supervisor to the site to resolve all non-conformances."
        },
        "influence": {
          "ja": "現場工事が止まってサブコンからクレームを受けた",
          "zh": "导致现场施工停滞，遭到了安装分包商（subcontractor）的强烈投诉。",
          "en": "Site construction was halted, and we received complaints from the subcontractor."
        },
        "flags": [],
        "score": 7
      },
      {
        "id": "5.3-C.2",
        "desc": {
          "ja": "現場研修生に全数確認させる",
          "zh": "安排现场实习生对所有散装材料进行全数确认。",
          "en": "Assign site trainees to perform a 100% check on all materials."
        },
        "influence": {
          "ja": "現場工事を止めずに何とか対応するが現場研修生がデモチベートした",
          "zh": "勉强在不中断现场施工的情况下完成了处理，但现场实习生的积极性受到了严重打击（Demotivated）。",
          "en": "Managed to handle the issue without stopping site works, but the site trainees were demotivated."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "5.3-C.3",
        "desc": {
          "ja": "不適合品が見つかるたびにサブコンに処理させる",
          "zh": "让分包商（Subcontractor）处理发现的每个不合格产品。",
          "en": "Have the subcontractor deal with each nonconforming product found."
        },
        "influence": {
          "ja": "サブコンからクレームを受けた",
          "zh": "遭到分包商（Subcontractor）的强烈投诉并索赔。",
          "en": "Received complaints and claims from the subcontractor."
        },
        "flags": [],
        "score": 5
      }
    ],
    "title": {
      "zh": "现场响应 (危机 C)",
      "ja": "現場対応 (危機 C)",
      "en": "Site Response (Crisis C)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.3-D": {
    "chapter": "5.3-D",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。偽造材質証明書（MTC）に関して現場客先担当者から材料のTraceabiltyに関してコメントを受ける",
      "zh": "【现场支持也是PQCM的职责】收到现场业主代表关于伪造材质证明书（MTC）材料追溯性的质疑意见。",
      "en": "[Site Support is also PQCM's Job] Received comments from the on-site client representative regarding material traceability concerns due to the forged Material Test Certificate (MTC)."
    },
    "selections": [
      {
        "id": "5.3-D.1",
        "desc": {
          "ja": "客先立会で全対象部材に追加検査を実施した",
          "zh": "在业主在场的情况下对所有目标零部件进行了追加检验。",
          "en": "Conducted additional inspections on all target components in the presence of the client."
        },
        "influence": {
          "ja": "甚大なスケジュールインパクトが発生した",
          "zh": "造成了极其巨大的项目进度拖延。",
          "en": "A huge schedule impact occurred."
        },
        "flags": [],
        "score": 8
      },
      {
        "id": "5.3-D.2",
        "desc": {
          "ja": "客先にDeviationを出し、ベンダーにConfirmation Letterを出させてUse-as-isとする",
          "zh": "向业主提交项目偏离（deviation）申请，并让供应商出具确认信，要求按现状接收（Use-as-is）。",
          "en": "Submit a project deviation request to the client and have the vendor issue a confirmation letter to accept it Use-as-is."
        },
        "influence": {
          "ja": "客先から否認され再製作、甚大なスケジュール・コストインパクトが発生した",
          "zh": "该申请被业主直接拒绝，不得不重新制造，导致巨大的进度和成本影响。",
          "en": "The request was rejected by the client and had to be remanufactured, causing huge schedule and cost impacts."
        },
        "flags": [],
        "score": 3
      }
    ],
    "title": {
      "zh": "现场响应 (危机 D)",
      "ja": "現場対応 (危機 D)",
      "en": "Site Response (Crisis D)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.3-E": {
    "chapter": "5.3-E",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。いつまで経っても材質証明書（MTC）が来ないので、現場でサブコンに配管材料を払い出せない",
      "zh": "【现场支持也是PQCM的职责】无论过了多久，材质证明书（MTC）都没有送达，所以我们无法在现场向分包商（Subcontractor）发放管道材料。",
      "en": "[Site Support is also PQCM's Job] No matter how much time passes, the Material Test Certificate (MTC) does not arrive, so we cannot release piping materials to the subcontractor on site."
    },
    "selections": [
      {
        "id": "5.3-E.1",
        "desc": {
          "ja": "待てないので材質証明書（MTC）無しのままPacking Listをベースに配管材料を払い出してもらう",
          "zh": "等不及材质证明书（MTC）了，直接根据装箱单（Packing List）向分包商发放管道材料。",
          "en": "Cannot wait. Issue piping materials based on the Packing List without the Material Test Certificate (MTC)."
        },
        "influence": {
          "ja": "配管材料のHeat No.が追えず現場で大混乱となった",
          "zh": "导致无法追踪管道材料 of 炉批号（Heat Number），施工现场陷入极度混乱。",
          "en": "Failed to trace the Heat Numbers of the piping materials, throwing the construction site into total chaos."
        },
        "flags": [],
        "score": 3
      },
      {
        "id": "5.3-E.2",
        "desc": {
          "ja": "大至急検査員をベンダーに派遣し、材質証明書（MTC）を集めて現場に共有する",
          "zh": "大至急派人前往供应商工厂，收集材质证明书（MTC）并发送至现场共享。",
          "en": "Immediately dispatch inspectors to the vendor's shop to collect MTCs and share them on-site."
        },
        "influence": {
          "ja": "サブコンの手待ちをミニマムにするが、追加工数が発生した",
          "zh": "将分包商（Subcontractor）的工时等待时间降至最低，但产生了一些额外的工时。",
          "en": "Minimized the waiting time for the subcontractor, but additional man-hours occurred."
        },
        "flags": [],
        "score": 8
      }
    ],
    "title": {
      "zh": "现场响应 (危机 E)",
      "ja": "現場対応 (危機 E)",
      "en": "Site Response (Crisis E)"
    },
    "avatar": "thinking",
    "npcAvatar": "strict",
    "charName": {
      "zh": "K前辈",
      "ja": "K先輩",
      "en": "K-senpai"
    }
  },
  "5.3": {
    "chapter": "5.3",
    "desc": {
      "ja": "現場サポートもPQCMの仕事です。現場受入時に機器のノズルの曲がりが報告される",
      "zh": "【现场支持也是PQCM的职责】现场开箱检验（Material Receipt Inspection）时，发现设备的接管（nozzle）弯曲偏位。",
      "en": "[Site Support is also PQCM's Job] During Material Receipt Inspection at site, a bent nozzle was reported."
    },
    "selections": [
      {
        "id": "5.3.1",
        "desc": {
          "ja": "時間が無いの現場でサブコンに補修してもらう",
          "zh": "由于工期紧迫，安排现场分包商（subcontractor）直接进行修补。",
          "en": "Due to tight schedule, have the subcontractor repair it on site."
        },
        "influence": {
          "ja": "サブコンからクレームを受けた",
          "zh": "遭到分包商（subcontractor）的强烈投诉并索赔。",
          "en": "Received complaints and claims from the subcontractor."
        },
        "flags": [],
        "score": 5
      },
      {
        "id": "5.3.2",
        "desc": {
          "ja": "機器と取り合う配管で調整してもらう",
          "zh": "让配管工程师调整连接管路以进行匹配适配。",
          "en": "Have the piping team adjust the connecting pipes to fit."
        },
        "influence": {
          "ja": "配管設計の追加工数が発生した",
          "zh": "导致了额外的管道设计工时。",
          "en": "Resulted in additional piping design man-hours."
        },
        "flags": [],
        "score": 7
      },
      {
        "id": "5.3.3",
        "desc": {
          "ja": "IRを見直して出荷時の状況を確認し、輸送中のダメージであることを突き止めて保険求償する",
          "zh": "复查检验报告（IR）确认发货出厂时的状况，查明该损坏发生于物流运输过程中，并据此进行保险索赔。",
          "en": "Review the Inspection Report (IR) to confirm the shop status, identify that the damage occurred during transportation, and file an insurance claim."
        },
        "influence": {
          "ja": "現場で追加作業は発生するも全て保険で補った",
          "zh": "虽然在现场产生了额外的修补作业，但所有费用均由保险赔付覆盖。",
          "en": "Although additional work was generated on site, all costs were fully covered by insurance."
        },
        "flags": [],
        "score": 10
      }
    ],
    "title": {
      "zh": "现场响应",
      "ja": "現場対応",
      "en": "Site Response"
    },
    "avatar": "normal",
    "npcAvatar": "hidden",
    "charName": {
      "zh": "旁白",
      "ja": "ナレーション",
      "en": "Narrator"
    }
  },
  "4.1-R1": {
  "chapter": "4.1-R1",
  "desc": {
    "zh": "【检验前会议突发事件】在检验前会议（PIM）上，业主代表突然提出了一项合同外的新规范解释，供货商表示配合该解释需要额外的工时和补偿费用。",
    "ja": "【PIM突発事態】PIM会議において、オーナー代表が突然契約外の新たな仕様解釈を提示し、ベンダーはこれに対応するために追加工数と費用補填を要求した。",
    "en": "[PIM Sudden Event] During the PIM meeting, the Owner representative suddenly presented a new specification interpretation outside the contract, and the vendor requested additional man-hours and cost compensation to comply."
  },
  "selections": [
    {
      "id": "4.1-R1.1",
      "desc": {
        "ja": "追加を支払って要求事項を満足する",
        "zh": "支付额外费用以满足项目要求。",
        "en": "Pay additional fees to satisfy the requirements."
      },
      "influence": {
        "ja": "プロジェクトからのクレームと追加コストが発生した",
        "zh": "低头请求项目管理部（PMT）增加预算，遭到项目管理团队一顿数落，并产生了额外费用。",
        "en": "Humbly asked the Project Management Team (PMT) for additional budget, and was severely scolded by the PMT, resulting in additional costs."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.1-R1.2",
      "desc": {
        "ja": "ベンダー標準のまま進める",
        "zh": "考虑到预算，让供应商按照供应商标准执行。",
        "en": "Considering the budget, allow the vendor to execute according to vendor standards."
      },
      "influence": {
        "ja": "後々、Letterをもらう",
        "zh": "后续将收到业主的正式警告信",
        "en": "You will receive formal contractual warning letter later"
      },
      "flags": [
        "4.2-E"
      ],
      "score": 3
    },
    {
      "id": "4.1-R1.3",
      "desc": {
        "zh": "同项目管理部（PMT）商量，向业主提出变更单（change order）的申请。",
        "ja": "プロジェクト管理部（PMT）と相談し、オーナーに設計変更（change order）を申請する。",
        "en": "Consult with the Project Management Team (PMT) and submit a change order request to the Owner."
      },
      "influence": {
        "zh": "业主最终同意了变更单（change order），使用变更单的资金支付给了厂家，并且我司借此还赚取了一笔额外的利润。",
        "ja": "オーナーが最終的に設計変更（change order）を承認し、その資金でベンダーへの支払いを賄うことができ、さらに追加の利益を得ることができた。",
        "en": "The Owner ultimately approved the change order, allowing us to pay the vendor using those funds while earning an extra profit for our company."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：对合同的理解 (危机 A)",
    "ja": "突発事態：契約の理解 (危機 A)",
    "en": "Sudden Event: Contract Understanding (Crisis A)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.1-R2": {
  "chapter": "4.1-R2",
  "desc": {
    "zh": "【检验前会议突发事件】供应商由于产能负荷过重，无暇在会前处理完所有制造文件（vendor document）。为了不延误工期，供应商建议先召开检验前会议（PIM），之后再补齐相关文件。",
    "ja": "【PIM突発事態】ベンダーの負荷が高すぎるため、会議前に製造図書（vendor document）をすべて処理する余裕がないとして、スケジュール遅延を防ぐためにPIM会議を先に行い、後から図書を補正することを提案してきた。",
    "en": "[PIM Sudden Event] The vendor is overloaded and has no time to process all vendor documents before the meeting. To avoid schedule delays, they suggest holding the PIM first and completing the vendor documents later."
  },
  "selections": [
    {
      "id": "4.1-R2.1",
      "desc": {
        "ja": "時間が無いので、ベンダー図書が固まらないまま検査前打合せ（PIM）を実施する",
        "zh": "因为时间不够，在供应商图纸（vendor document）未冻结的情况下先召开检验前会议（PIM），以符合项目的进度计划。",
        "en": "Due to lack of time, hold the Pre-Inspection Meeting (PIM) before the vendor documents are finalized to meet the project schedule."
      },
      "influence": {
        "ja": "客先からLetterをもらい信頼を損ねた",
        "zh": "收到客户的来信而失去信任",
        "en": "Losing trust by receiving letters from customers"
      },
      "flags": [],
      "score": 3
    },
    {
      "id": "4.1-R2.2",
      "desc": {
        "ja": "ベンダー図書が固まるまで議論を続ける",
        "zh": "继续讨论，直到供应商图纸（vendor document）符合项目要求并冻结。",
        "en": "Continue the discussion until the vendor documents meet the project requirements and are finalized."
      },
      "influence": {
        "ja": "大きなスケジュールインパクトが発生した",
        "zh": "发生了重大的进度影响。",
        "en": "A major schedule impact occurred."
      },
      "flags": [],
      "score": 5
    },
    {
      "id": "4.1-R2.3",
      "desc": {
        "ja": "ベンダーに乗り込んでF2Fでベンダー図書 Review Meetingを開催し、承認してから検査前打合せ（PIM）を実施する",
        "zh": "在执行检验前会议（PIM）之前，让负责的质量控制工程师出差去供货商办公室，尽快冻结供应商图纸（vendor document）。",
        "en": "Before conducting the Pre-Inspection Meeting (PIM), have the engineer travel to the vendor's office to finalize the vendor documents as soon as possible."
      },
      "influence": {
        "ja": "最小限のスケジュールインパクトで押さえることができた",
        "zh": "我们按计划进行并发布了检验放行证（IRC）。",
        "en": "We were able to achieve this with minimal schedule impact."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：对合同的理解 (危机 C)",
    "ja": "突発事態：契約の理解 (危機 C)",
    "en": "Sudden Event: Contract Understanding (Crisis C)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.1-R3": {
  "chapter": "4.1-R3",
  "desc": {
    "zh": "【检验前会议突发事件】受地缘政治因素影响，供应商所在国与我国的关系急剧恶化。在当地社会舆论的影响下，供应商管理层和工厂人员对我们的态度变得十分冷淡且消极配合。",
    "ja": "【PIM突発事態】地政学的要因により、ベンダー所在国と我が国との関係が急速に悪化した。現地の世論の影響を受け、ベンダーの管理職や工場スタッフの弊社に対する態度が極めて冷淡になり、非協力的な姿勢を示している。",
    "en": "[PIM Sudden Event] Due to geopolitical factors, the relationship between the vendor's country and ours has deteriorated rapidly. Under the influence of local public opinion, the vendor's management and shop personnel have become cold and uncooperative toward us."
  },
  "selections": [
    {
      "id": "4.1-R3.1",
      "desc": {
        "ja": "契約に則って彼らにすべての要求事項を履行させる",
        "zh": "邀请采购部门合作，强硬地要求分包商履行合同中的所有要求。",
        "en": "Cooperate with the Procurement department and strongly demand that the subcontractor fulfill all contract requirements."
      },
      "influence": {
        "ja": "→後々、Shortcutしてトラブル発生",
        "zh": "供货商开启【已读不回】模式，导致之后出现质量问题。",
        "en": "The vendor adopted a 'read but ignore' response mode, leading to subsequent quality issues."
      },
      "flags": [
        "4.2-G"
      ],
      "score": 2
    },
    {
      "id": "4.1-R3.2",
      "desc": {
        "ja": "検査前打合せ（PIM）前にAlignment Meetingを開催して、これまでの関係に関するLLを議論して、今後の関係改善に繋げる",
        "zh": "在检验前会议（PIM）之前召开协调会议，共同反省在项目上沟通不到位的情况，尽量和供货商改善关系。",
        "en": "Hold an alignment meeting before the Pre-Inspection Meeting (PIM) to reflect on the lack of communication on the project and try to improve relations with the vendor."
      },
      "influence": {
        "ja": "何とか関係を改善し、検査前打合せ（PIM）も実施して機器製作に繋げた",
        "zh": "改善了和供货商的关系，成功按项目进度要求举行了检验前会议（PIM）。 产生了一些额外的工时。",
        "en": "Improved relations with the vendor and successfully held the Pre-Inspection Meeting (PIM) according to the project schedule. Some additional man-hours occurred."
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "4.1-R3.3",
      "desc": {
        "ja": "今後、機器製作時に手抜きをされるリスクを考慮して、検査員を増やすなど対策を取る",
        "zh": "未来，考虑到制造设备时存在偷工减料的风险，我们将采取增加检验人员数量等措施。",
        "en": "In the future, we will take measures such as increasing the number of inspectors in consideration of the risk of cutting corners when manufacturing equipment."
      },
      "influence": {
        "ja": "追加工数が発生した",
        "zh": "产生了一些额外的工时。",
        "en": "Some additional man-hours occurred."
      },
      "flags": [],
      "score": 5
    }
  ],
  "title": {
    "zh": "突发事件：对合同的理解 (危机 D)",
    "ja": "突発事態：契約の理解 (危機 D)",
    "en": "Sudden Event: Contract Understanding (Crisis D)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.2-R1": {
  "chapter": "4.2-R1",
  "desc": {
    "zh": "【检验协调突发事件】由于地区大暴雪导致交通中断，我们原定的资深驻厂检验员被困机场，而次日的压力试验必须有我方代表见证。我们必须寻找应急替代方案。",
    "ja": "【検査調整突発事態】現地の記録的な大雪により交通網が遮断され、手配していたシニア常駐検査員が空港で足止めされたが、翌日には代表立ち会い必須の耐圧試験が控えている。",
    "en": "[Inspection Coordination Sudden Event] Due to a record blizzard, our senior resident inspector is stranded at the airport, while a mandatory witness pressure test is scheduled for tomorrow."
  },
  "selections": [
    {
      "id": "4.2-R1.1",
      "desc": {
        "ja": "検査日時をリスケしてもらう",
        "zh": "让制造厂重新安排检验，另约时间。",
        "en": "Ask the vendor to reschedule the inspection date."
      },
      "influence": {
        "ja": "出荷に影響しロジからクレームを受けた",
        "zh": "这影响了发货，并收到了我们公司物流部门的投诉。",
        "en": "Affected shipment and received complaints from our company's logistics department."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.2-R1.2",
      "desc": {
        "ja": "検査の立会をWaiveする",
        "zh": "考虑到对项目工期的影响，豁免（waive）这个见证点（Hold point）。",
        "en": "Considering the impact on the project schedule, waive this witness point (Hold point)."
      },
      "influence": {
        "ja": "Hポイントの急なWaiveで客先から不適合報告書（NCR）を受けた",
        "zh": "因为没有按项目要求执行见证点（Hold point），我司收到了业主开具的不符合项报告（NCR）。",
        "en": "Received a Non-Conformance Report (NCR) from the client because the Hold point was not executed in accordance with the project requirements."
      },
      "flags": [],
      "score": 4
    },
    {
      "id": "4.2-R1.3",
      "desc": {
        "ja": "急遽担当品質管理エンジニアが出張して検査に立ち会う",
        "zh": "让负责这个设备的质量控制工程师赶快出差去现场参加检验见证。",
        "en": "Have the Quality Control Engineer (QCE) in charge of this equipment travel immediately to witness the inspection."
      },
      "influence": {
        "ja": "何とか検査は乗り切るが追加コストが発生した",
        "zh": "我们设法通过了检查，但产生了额外的费用。",
        "en": "We managed to survive the inspection, but additional costs were incurred."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：检验协调 (危机 C)",
    "ja": "突発事態：検査調整 (危機 C)",
    "en": "Sudden Event: Inspection Coordination (Crisis C)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.2-R2": {
  "chapter": "4.2-R2",
  "desc": {
    "zh": "【检验协调突发事件】供应商的主要分包商所在地突发严重自然灾害，导致整体工期受到严重波及。为了现场催交，我方派遣的驻厂检验员工作时间大幅增加，工时数（man-hours）即将超出预算。",
    "ja": "【検査調整突発事態】ベンダーの主要なサブベンダーの地域で深刻な自然災害が発生し、全体の工期に大きな影響が出た。現地での催促のため、弊社が派遣した常駐検査員の稼働時間が大幅に増え、工数（man-hours）が予算オーバー寸前となっている。",
    "en": "[Inspection Coordination Sudden Event] A severe natural disaster struck the area of the vendor's main subvendor, heavily impacting the overall schedule. Due to intense expediting, the man-hours of our resident inspector are about to exceed the budget."
  },
  "selections": [
    {
      "id": "4.2-R2.1",
      "desc": {
        "zh": "因为这次自然灾害的影响非常广泛且众所周知，项目人员应该都心知肚明，没必要特意告知项目管理部（PMT），毕竟后续想办法追赶还是有挽回余地的。",
        "ja": "今回の自然災害の影響は非常に大きく周知の事実であるため、プロジェクトメンバーも当然把握しているはずである。わざわざPMTに報告する必要はなく、後から挽回する余地もあるため、そのまま検査を継続する。",
        "en": "Since the impact of the natural disaster is widespread and well-known, project members should already be aware of it. There is no need to specifically inform the PMT, especially since there is still a chance to recover the schedule later."
      },
      "influence": {
        "ja": "プロジェクト管理部からクレームを受けて大きく信頼を損ねた",
        "zh": "收到项目管理部（PMT）投诉，极大失去信任",
        "en": "Receive complaints from Project Management Team (PMT) and lose trust greatly"
      },
      "flags": [],
      "score": 3
    },
    {
      "id": "4.2-R2.2",
      "desc": {
        "ja": "直ちにプロジェクト管理部に追加検査工数を申請する",
        "zh": "立即向项目管理部（PMT）申请追加检验工时。",
        "en": "Immediately apply to the Project Management Team (PMT) for additional inspection man-hours."
      },
      "influence": {
        "ja": "突然の工数増加に莫大な説明を求められるが、何とか追加は認めてもらえた",
        "zh": "工时的突然增加需要向项目管理部进行大量解释说明，但最终还是同意了追加申请。",
        "en": "We had to provide extensive explanations for the sudden increase in man-hours, but we managed to get the additional budget approved."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：检验协调 (危机 D)",
    "ja": "突発事態：検査調整 (危機 D)",
    "en": "Sudden Event: Inspection Coordination (Crisis D)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.2-R3": {
  "chapter": "4.2-R3",
  "desc": {
    "zh": "【检验协调突发事件】项目质量规定中明确禁止仅持有 SNT-TC-1A 资质的人员批准无损检测（NDT）报告。厂家虽然在质量程序书（procedure）中做出了相应承诺，但在实际操作中仍然指派了仅有 SNT-TC-1A 资质的检验员签署报告。我方在批阅检验报告时发现了这一违规行为。",
    "ja": "【検査調整突発事態】プロジェクトの品質規定では、SNT-TC-1Aの資格しか持たない者が非破壊検査（NDT）報告書を承認することは明確に禁止されている。ベンダーは手順書（procedure）ではその旨を約束していたものの、実務上はSNT-TC-1A資格のみの検査員に報告書を署名させており、弊社が報告書をレビューした際にこれを発見した。",
    "en": "[Inspection Coordination Sudden Event] The project quality specification explicitly prohibits NDT reports from being approved by personnel holding only SNT-TC-1A qualification. Although the vendor committed to this in their procedures, in practice they still assigned an inspector with only SNT-TC-1A qualification to sign the reports, which we discovered during our report review."
  },
  "selections": [
    {
      "id": "4.2-R3.1",
      "desc": {
        "ja": "少なくともSNT-TC-1Aの検査員が実施しているので、そのまま承認する",
        "zh": "SNT-TC-1A资格也是正规资格，考虑对工期和成本的影响，批准并同意检验报告的结果。",
        "en": "SNT-TC-1A qualification is also a formal qualification. Considering the impact on schedule and cost, approve the inspection report results."
      },
      "influence": {
        "ja": "客先に発見され不適合報告書（NCR）を出されるとともに信頼を損ねた",
        "zh": "最终业主发现了这一点，开具了不符合项报告（NCR）并要求我司整改，从此我司失去了业主的信任。",
        "en": "Ultimately the client discovered this, issued a Non-Conformance Report (NCR) demanding our rectification, and we lost the client's trust."
      },
      "flags": [],
      "score": 3
    },
    {
      "id": "4.2-R3.2",
      "desc": {
        "ja": "ISO9712の検査員による再NDEを実施する",
        "zh": "让供货商寻找ISO 9712的检验员重新进行检验。",
        "en": "Instruct the vendor to find ISO 9712 qualified technicians to perform the NDE again."
      },
      "influence": {
        "ja": "ベンダーに追加コストをクレームされた",
        "zh": "供应商虽然照做了，但在之后提交了合同变更，要求我们公司支付这笔费用。",
        "en": "The vendor complied, but subsequently submitted a contract variation demanding our company pay for this cost."
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "4.2-R3.3",
      "desc": {
        "ja": "客先にDeviaitonを出して、SNT-TC-1Aの検査員による記録を認めてもらう",
        "zh": "向业主提交项目偏离（deviation）申请，要求认可SNT-TC-1A体系下的检验报告有效性。",
        "en": "Submit a project deviation request to the client to accept the validity of the inspection reports under the SNT-TC-1A system."
      },
      "influence": {
        "ja": "Deviationは否認され、ISO9712の検査員による再NDEを実施し、ベンダーからクレームされた",
        "zh": "业主拒绝了该项目偏离申请。结果还是让供货商找了ISO 9712的检验员重新进行检测，最后供货商提交了合同变更，要求我们公司支付这笔钱。",
        "en": "The deviation request was rejected by the client. We had to ask the vendor to perform the NDE again with ISO 9712 inspectors, and subsequently the vendor submitted a contract variation demanding our company cover this expense."
      },
      "flags": [],
      "score": 6
    }
  ],
  "title": {
    "zh": "突发事件：检验协调 (危机 E)",
    "ja": "突発事態：検査調整 (危機 E)",
    "en": "Sudden Event: Inspection Coordination (Crisis E)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.2-R4": {
  "chapter": "4.2-R4",
  "desc": {
    "zh": "【检验协调突发事件】由于出差预算限制，我们在北非当地聘用了一名本地检验员进行驻厂。然而，此人专业水平相当有限，我们收到的检验报告中充斥着各类常识性错误，导致我们根本无法掌握厂里的真实生产与质量状况。",
    "ja": "【検査調整突発事態】出張予算制限のため、北アフリカ現地でローカル検査員を採用し常駐させた。しかし、この検査員の技術レベルが極めて低く、送られてくる検査報告書は多くの間違いだらけで、現地の実際の生産や品質状況が全く把握できない状態に陥った。",
    "en": "[Inspection Coordination Sudden Event] Due to travel budget constraints, we hired a local inspector in North Africa. However, this inspector's technical competence is extremely limited, and the reports we receive are riddled with common errors, making it impossible to know the actual shop production and quality status."
  },
  "selections": [
    {
      "id": "4.2-R4.1",
      "desc": {
        "ja": "直ちに検査員を交代する",
        "zh": "立即更换检验员。",
        "en": "Immediately replace the inspector."
      },
      "influence": {
        "ja": "新規検査員への指導や引継ぎなどで追加工数が発生した",
        "zh": "由于指导和移交新检查员，发生了额外的 工时。",
        "en": "Additional man-hours occurred due to guidance and handover to new inspectors."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.2-R4.2",
      "desc": {
        "ja": "IRの書き方を検査員に指導する",
        "zh": "亲自下场指导检验员如何写检验报告（Inspection Report）。",
        "en": "Personally guide the inspector on how to write the Inspection Report."
      },
      "influence": {
        "ja": "IRが改善され検査状況がプロジェクト関係者で共有できた",
        "zh": "IR 已得到改进，检查状态可以与相关方共享",
        "en": "IR has been improved and inspection status can be shared with related parties"
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "4.2-R4.3",
      "desc": {
        "ja": "検査員の力量を尊重してそのまま継続する",
        "zh": "考虑到工时 and 成本，维持现有的检验员不变，要求检验公司多加指导督促该检验员。",
        "en": "Considering man-hours and cost, maintain the current inspector and ask the inspection agency to provide more guidance."
      },
      "influence": {
        "ja": "検査状況が分からないまま出荷し、現場でトラブル多発",
        "zh": "在不了解检验情况的状态下直接发货，导致现场问题频发。",
        "en": "Shipped without clear understanding of the inspection status, leading to frequent issues at the site."
      },
      "flags": [
        "5.3-A"
      ],
      "score": 3
    }
  ],
  "title": {
    "zh": "突发事件：检验协调 (危机 F)",
    "ja": "突発事態：検査調整 (危機 F)",
    "en": "Sudden Event: Inspection Coordination (Crisis F)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.2-R5": {
  "chapter": "4.2-R5",
  "desc": {
    "zh": "【检验协调突发事件】在进行射线检测底片审查（RT Film Review）时，我们发现大量底片显影模糊且存在大量水渍伪像。经核实，这可能是近期极端潮湿闷热天气对暗室胶片冲洗和保存环境造成的湿度影响导致的。",
    "ja": "【検査調整突発事態】放射線透過検査のフィルムレビュー（RT Film Review）において、現像が不鮮明で水滴によるノイズが大量に発生しているフィルムが多数見つかった。調査の結果、近年の極端な高温多湿の気候が暗室での現像・保管環境に悪影響を及ぼした可能性が高いと判明した。",
    "en": "[Inspection Coordination Sudden Event] During RT Film Review, we found many films were blurry with significant water artifacts. Investigation showed this was likely caused by the humidity impact of recent extreme hot and humid weather on the darkroom film processing and storage environment."
  },
  "selections": [
    {
      "id": "4.2-R5.1",
      "desc": {
        "zh": "认为这只是表面的伪像，不影响实际焊接质量，要求检验员继续使用现有暗室设备完成底片评定。",
        "ja": "これは表面上の疑似模様に過ぎず、実際の溶接品質には影響しないと判断し、検査員に現行の暗室設備を用いてフィルム評価を継続するよう指示する。",
        "en": "Deem it as surface artifacts that do not affect the actual weld quality, and instruct the inspector to continue film evaluation using the current darkroom equipment."
      },
      "influence": {
        "ja": "スケジュールインパクトはあったが何とか出荷した",
        "zh": "虽然进度受到影响，但我们还是成功发货了。",
        "en": "Although there was a schedule impact, we managed to ship it."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.2-R5.2",
      "desc": {
        "zh": "为了彻底查清原因，下令关停供应商所有的焊接和检测工作，要求全面重做并更换整套暗室显影设备。",
        "ja": "原因を徹底究明するため、ベンダーのすべての溶接および検査作業の一時停止を命じ、全面的にやり直した上で、暗室の現像設備一式を交換するよう要求する。",
        "en": "To thoroughly investigate the cause, order a complete shutdown of all welding and inspection work at the vendor's shop, demanding a full remake and replacement of the entire darkroom equipment."
      },
      "influence": {
        "ja": "客先に発見され不適合報告書（NCR）を出されるとともにDisqualify",
        "zh": "被业主发现并开具不符合项报告（NCR），且我方被业主直接撤换（Disqualify）。",
        "en": "Discovered by the client, who issued an NCR and disqualified our company."
      },
      "flags": [
        "Game Over"
      ],
      "score": 1
    },
    {
      "id": "4.2-R5.3",
      "desc": {
        "zh": "紧急派遣公司高级无损检测（NDT）专家驻厂指导，协助分析极端天气的湿度影响，并重新规范暗室的温湿度控制和冲洗流程。",
        "ja": "本社のシニア非破壊検査（NDT）専門家を緊急派遣して現地指導にあたらせ、極端な気候の湿度影響を分析し、暗室の温湿度管理とフィルム現像プロセスを再規定する。",
        "en": "Urgently dispatch a senior NDT expert to the shop to guide the team, analyze the humidity impact of the extreme weather, and re-standardize the temperature/humidity control and processing procedures in the darkroom."
      },
      "influence": {
        "ja": "客先と合意した最小限の補修をして出荷できた",
        "zh": "在进行了最低限度的补修后发货。",
        "en": "The product was shipped after making the minimum repairs agreed upon with the customer."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：检验协调 (危机 H)",
    "ja": "突発事態：検査調整 (危機 H)",
    "en": "Sudden Event: Inspection Coordination (Crisis H)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.3-R1": {
  "chapter": "4.3-R1",
  "desc": {
    "zh": "【出运前夕突发事件】在设备装船出运前夕，供应商的文档管理服务器突然遭遇勒索软件病毒攻击，导致之前所有已经签署审核意见（comment）的关键制造文件丢失。部分文件必须在发货前重新进行审查和签署意见。",
    "ja": "【出荷前夕突発事態】機器の船積み直前、ベンダーの図書管理サーバーが突如ランサムウェア攻撃を受け、以前に承認コメントを付与したすべての主要製造図書が消失した。一部の図書は出荷前に再レビューし、コメントを付与し直す必要がある。",
    "en": "[Pre-shipping Sudden Event] On the eve of shipment, the vendor's document server suffered a ransomware attack, losing all previously reviewed manufacturing documents. Some documents must be re-reviewed and re-commented before shipping."
  },
  "selections": [
    {
      "id": "4.3-R1.1",
      "desc": {
        "ja": "現有勢力で乗り切る",
        "zh": "多加加班，尽量完成。",
        "en": "Work extra overtime and try our best to complete it."
      },
      "influence": {
        "ja": "バックチェックに時間を要し、大きなスケジュールインパクトとチーム員のデモチベーションが発生した",
        "zh": "回溯需要时间，对进度造成很大影响，并破坏团队成员。",
        "en": "Back-checking takes time, causing a big impact on the schedule and demolishing team members."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.3-R1.2",
      "desc": {
        "ja": "短期的に補強を入れてチェックする",
        "zh": "短期内引入外部增援来协助复核。",
        "en": "Bring in short-term support to assist with the checking."
      },
      "influence": {
        "ja": "水平展開は完了したが、追加工数が発生した",
        "zh": "虽然产生了额外的工时，但保证了项目进度，并在事后向供应商索赔（Back-charge）。",
        "en": "Although additional man-hours occurred, the schedule was maintained, and we back-charged the vendor later."
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "4.3-R1.3",
      "desc": {
        "ja": "全数見直す時間が無いので、抜き取りでチェックする",
        "zh": "没有时间全部重新审查，因此进行抽样检查。",
        "en": "Since there is no time to review all of them, perform a sampling check."
      },
      "influence": {
        "ja": "抜き取り漏れがあり、現場でさらに不適合報告書（NCR）発生",
        "zh": "存在漏检情况，导致在施工现场进一步开具了不符合项报告（NCR）。",
        "en": "There was a sampling omission, leading to further Non-Conformance Reports (NCR) on site ."
      },
      "flags": [
        "5.3-C"
      ],
      "score": 3
    }
  ],
  "title": {
    "zh": "突发事件：不符合项报告 (危机 A)",
    "ja": "突発事態：不適合報告書 (危機 A)",
    "en": "Sudden Event: Non-Conformance Report (Crisis A)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.3-R2": {
  "chapter": "4.3-R2",
  "desc": {
    "zh": "【出运前夕突发事件】受地缘政治因素影响，当地政府突然发布紧急通告，要求对在该国生产并出口的特定工业设备强制增加一项政府官厅的官方见证检查，否则不予放行出运。",
    "ja": "【出荷前夕突発事態】地政学的要因により、現地政府が突如緊急通達を出し、当該国で製造・輸出される特定の工業設備に対し、政府官庁による公式立会検査の追加を義務付け、これを受けなければ出荷を許可しないとした。",
    "en": "[Pre-shipping Sudden Event] Due to geopolitical factors, the local government suddenly issued an emergency decree requiring a mandatory official government witness inspection for specific industrial equipment manufactured in that country before granting export clearance."
  },
  "selections": [
    {
      "id": "4.3-R2.1",
      "desc": {
        "ja": "客先にDeviationを出し、官庁の立会を免除してもらう",
        "zh": "同时向业主提交项目偏离（deviation）申请，询问业主是否可以免除政府办公室的见证检查。",
        "en": "Submit a project deviation request to the client to ask if they can exempt the government office witnessing."
      },
      "influence": {
        "ja": "Deviationは否認され、官庁立会を実施し大きなスケジュールインパクトが発生した",
        "zh": "业主拒绝了该偏离申请，我方必须执行政府见证，对项目进度造成了严重影响。",
        "en": "The deviation request was rejected by the client, forcing us to conduct the government witnessing and causing a significant schedule impact."
      },
      "flags": [],
      "score": 4
    },
    {
      "id": "4.3-R2.2",
      "desc": {
        "ja": "今から官庁の立会をアレンジする",
        "zh": "尽快安排一个政府办公室的检验员参与见证。",
        "en": "Arrange a government office inspector to attend and witness the inspection as soon as possible."
      },
      "influence": {
        "ja": "大きなスケジュールインパクトが発生した",
        "zh": "发生了重大的进度影响。",
        "en": "A major schedule impact occurred."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.3-R2.3",
      "desc": {
        "ja": "客先にDeviationを出し、現場で官庁立会を実施する",
        "zh": "向业主提出项目偏离（deviation）申请，询问是否可以在设备运抵现场后再进行政府办公室的检查。",
        "en": "Submit a project deviation request to the client to ask if the government office inspection can be conducted after the equipment arrives at the site."
      },
      "influence": {
        "ja": "Deviationは認められ、現場で官庁立会を実施するが追加コストが発生した",
        "zh": "偏差获得批准并进行了现场政府见证，但产生了额外费用。",
        "en": "Deviation was approved and an on-site government witness was conducted, but additional costs were incurred."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：不符合项报告 (危机 B)",
    "ja": "突発事態：不適合報告書 (危機 B)",
    "en": "Sudden Event: Non-Conformance Report (Crisis B)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.3-R3": {
  "chapter": "4.3-R3",
  "desc": {
    "zh": "【出运前夕突发事件】关键分包商的创始老板因为炒股投机破产，被迫将工厂转手。然而，买下该厂的新老板整天也沉迷于炒股，对工厂的实际生产和催交事务不管不问，导致零件制造进度失控。",
    "ja": "【出荷前夕突発事態】重要なサブベンダーの元オーナーが株取引で破産し、工場を譲渡せざるを得なくなった。しかし、新しく工場を買収した新オーナーも毎日株取引に没頭し、工場の製造進捗や管理に全く関心を示さず、部品製造スケジュールが制御不能に陥った。",
    "en": "[Pre-shipping Sudden Event] The original owner of a key subvendor went bankrupt due to stock speculation and sold the shop. The new owner, however, also spends all day trading stocks and completely ignores the production floor, leaving the manufacturing schedule out of control."
  },
  "selections": [
    {
      "id": "4.3-R3.1",
      "desc": {
        "ja": "あくまでベンダーに管理させ、リキダメを最大限取り立てる",
        "zh": "要求供货商加强管理。至于管理不好的部分，根据合同条款，要求供货商支付赔偿金（Liquidated Damages）。",
        "en": "Let the vendor manage it, and demand the vendor pay Liquidated Damages according to the contract clauses."
      },
      "influence": {
        "ja": "リキダメによりコストインパクトは限定的だが、甚大なスケジュールインパクトが発生した",
        "zh": "虽然通过索赔（Liquidated Damages）索要到了一些赔偿，但也对项目工期造成了严重延误。",
        "en": "Although some compensation was recovered via Liquidated Damages, it caused severe project schedule delays."
      },
      "flags": [],
      "score": 3
    },
    {
      "id": "4.3-R3.2",
      "desc": {
        "ja": "設計/工程/QCでチームを作ってSubvendorに投入し、何とか出荷する",
        "zh": "由设计、采购和QC部门组成专项攻坚团队派驻分包商工厂，确保设备按期发货。",
        "en": "Form a joint team of Design, Procurement, and QC to intervene at the subcontractor's shop to secure shipment."
      },
      "influence": {
        "ja": "スケジュールインパクトは限定的だが、大きな追加工数が発生した",
        "zh": "尽管对进度的影响有限，但还是发生了大量额外的 工时。",
        "en": "Although the schedule impact was limited, a large additional man-hours occurred."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "4.3-R3.3",
      "desc": {
        "ja": "機器製作の継続は不可能と判断して、発注替えする",
        "zh": "评估认为分包商无法继续完成设备制造，果断决定更换供应商。",
        "en": "Judged that the continuation of equipment fabrication was impossible and decided to change the vendor."
      },
      "influence": {
        "ja": "スケジュール・コストともにインパクトはあったが、プロジェクト全体では何とか吸収できた",
        "zh": "这对进度和成本都产生了影响，但整个项目成功地吸收了影响。",
        "en": "There was an impact on both schedule and cost, but the project as a whole managed to absorb it."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：不符合项报告 (危机 C)",
    "ja": "突発事態：不適合報告書 (危機 C)",
    "en": "Sudden Event: Non-Conformance Report (Crisis C)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "4.3-R4": {
  "chapter": "4.3-R4",
  "desc": {
    "zh": "【出运前夕突发事件】我们收到可靠情报，出运港口的码头工会计划举行大规模罢工，且罢工的起始日期比我们原定的设备出货船期还要早。这批常压容器面临被无限期积压在港口的重大延误危机。",
    "ja": "【出荷前夕突発事態】出荷港の港湾労組が大規模ストライキを計画しており、その開始日が我々の当初の出荷予定日よりも早いという確実な情報を得た。これにより、常圧容器が港で長期滞留するリスクが極めて高くなった。",
    "en": "[Pre-shipping Sudden Event] We received reliable intelligence that the port union plans a major strike, and the strike start date is earlier than our scheduled shipping date, risking indefinite delay of the pressure vessels at the port."
  },
  "selections": [
    {
      "id": "4.3-R4.1",
      "desc": {
        "ja": "時間が無いのでそのまま出荷するが、現場受入時にサブコンによる防錆処理を依頼する",
        "zh": "为了避免影响到进度，让供货商先出货。最后以【在现场进行防锈处理】的形式关闭了这个NCR。",
        "en": "To avoid delaying the project schedule, allow the vendor to ship first. Close this NCR with a plan to perform rust prevention treatment on-site."
      },
      "influence": {
        "ja": "スケジュールは守れたが、現場でサブコンから巨額のクレームを受けた",
        "zh": "虽然保住了项目工期，但是收到了来自现场分包商（subcontractor）的大量投诉。",
        "en": "Although the project schedule was maintained, we received a large volume of complaints from the subcontractors on site."
      },
      "flags": [],
      "score": 5
    },
    {
      "id": "4.3-R4.2",
      "desc": {
        "ja": "バッチを小分けにして優先順位順に適切な防錆処理をして出荷する",
        "zh": "批量分为小批量，并按优先顺序进行适当的防腐处理后发货。",
        "en": "Batch is divided into small batches and shipped with appropriate anti-corrosion treatment in order of priority."
      },
      "influence": {
        "ja": "スケジュールインパクトを最小限に抑えた",
        "zh": "最大限度地减少对日程的影响",
        "en": "Minimized schedule impact"
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：不符合项报告 (危机 D)",
    "ja": "突発事態：不適合報告書 (危機 D)",
    "en": "Sudden Event: Non-Conformance Report (Crisis D)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "5.3-R1": {
  "chapter": "5.3-R1",
  "desc": {
    "zh": "【现场移交突发事件】在对现场压力容器（Vessel）进行就位前最终检查时，我们赫然发现由于运输中的剧烈颠簸和挤压，容器外壁焊接的几处支撑管卡（Clip）发生了断裂脱落，且现场缺少备用件。",
    "ja": "【現地引渡突発事態】現地で圧力容器（Vessel）を据え付ける前の最終検査中、輸送中の激しい振動と衝撃により、容器外壁に溶接されていたサポート用管カ（Clip）が数箇所破断して脱落しており、現場に予備部品もないことが判明した。",
    "en": "[Site Handover Sudden Event] During the final inspection of the pressure vessel before installation at the site, we discovered that several support clips welded to the outer wall of the vessel had fractured and fallen off due to severe vibrations and impact during transit, and there are no spare parts on site."
  },
  "selections": [
    {
      "id": "5.3-R1.1",
      "desc": {
        "ja": "Vesselをベンダーに送り返して補修させる",
        "zh": "将容器（Vessel）送回供应商工厂，责令供应商进行修补整改。",
        "en": "Send the Vessel back to the Vendor's factory for repair."
      },
      "influence": {
        "ja": "甚大なスケジュールインパクトが発生した",
        "zh": "这导致了极大的项目进度拖延。",
        "en": "A huge schedule impact occurred."
      },
      "flags": [],
      "score": 7
    },
    {
      "id": "5.3-R1.2",
      "desc": {
        "ja": "現場でサブコンが補修しR Stampを押す",
        "zh": "安排现场分包商（subcontractor）修补容器并重新打上 R Stamp 钢印，且事后向供货商索赔费用。",
        "en": "Have the subcontractor on site repair the vessel instead of the vendor, and back-charge the vendor for the cost."
      },
      "influence": {
        "ja": "スケジュールインパクトが発生し、サブコンからのクレームを受けた",
        "zh": "虽然保证了项目工期，但收到了现场承包商的强烈投诉。",
        "en": "Although the schedule was maintained, we received complaints from the subcontractor."
      },
      "flags": [],
      "score": 6
    },
    {
      "id": "5.3-R1.3",
      "desc": {
        "ja": "客先にDeviationを出し、付着物の構造を改造しClip無しのままとする",
        "zh": "向业主提交项目偏离（deviation）申请，要求业主接受没有支撑管卡（clip）的设计，并修改一部分施工图纸。",
        "en": "Submit a project deviation request to the client to accept the design without the clip, and modify part of the construction drawings."
      },
      "influence": {
        "ja": "Deviationは認められたが、Model Reviewのやり直しなど多数の追加ワークによる甚大なスケジュールインパクトが発生した",
        "zh": "尽管业主接受了偏离申请，但因为需要重新进行模型审查等设计变更工作，对项目进度造成了很大影响。",
        "en": "Although the deviation request was approved, a lot of additional design changes like redoing model review caused a significant schedule impact."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：现场响应 (危机 A)",
    "ja": "突発事態：現場対応 (危機 A)",
    "en": "Sudden Event: Site Response (Crisis A)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "5.3-R2": {
  "chapter": "5.3-R2",
  "desc": {
    "zh": "【现场移交突发事件】在现场开箱检查时，我们发现一台高压电机的轴承在海运途中由于防潮干燥剂失效，发生了轻微的锈蚀。这导致业主拒绝在该电机的试运转申请单上签字。",
    "ja": "【現地引渡突発事態】現地開梱検査時、海上輸送中の防湿乾燥剤の機能喪失により、高圧モーターのベアリングに軽微な発錆が確認され、オーナーが試運転の承認署名を拒否した。",
    "en": "[Site Handover Sudden Event] During site unpacking inspection, we found minor rust on a high-voltage motor bearing due to desiccant failure during sea transport, and the Owner refused to sign the run-test permit."
  },
  "selections": [
    {
      "id": "5.3-R2.1",
      "desc": {
        "ja": "ベンスペを現場に招聘して全数対応させる",
        "zh": "邀请供应商现场代表（Vendor Supervisor）到施工现场对所有不合格品进行处理。",
        "en": "Invite the Vendor Supervisor to the site to resolve all non-conformances."
      },
      "influence": {
        "ja": "現場工事が止まってサブコンからクレームを受けた",
        "zh": "导致现场施工停滞，遭到了安装分包商（subcontractor）的强烈投诉。",
        "en": "Site construction was halted, and we received complaints from the subcontractor."
      },
      "flags": [],
      "score": 7
    },
    {
      "id": "5.3-R2.2",
      "desc": {
        "ja": "現場研修生に全数確認させる",
        "zh": "安排现场实习生对所有散装材料进行全数确认。",
        "en": "Assign site trainees to perform a 100% check on all materials."
      },
      "influence": {
        "ja": "現場工事を止めずに何とか対応するが現場研修生がデモチベートした",
        "zh": "勉强在不中断现场施工的情况下完成了处理，但现场实习生的积极性受到了严重打击（Demotivated）。",
        "en": "Managed to handle the issue without stopping site works, but the site trainees were demotivated."
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "5.3-R2.3",
      "desc": {
        "ja": "不適合品が見つかるたびにサブコンに処理させる",
        "zh": "让分包商（Subcontractor）处理发现的每个不合格产品。",
        "en": "Have the subcontractor deal with each nonconforming product found."
      },
      "influence": {
        "ja": "サブコンからクレームを受けた",
        "zh": "遭到分包商（Subcontractor）的强烈投诉并索赔。",
        "en": "Received complaints and claims from the subcontractor."
      },
      "flags": [],
      "score": 5
    }
  ],
  "title": {
    "zh": "突发事件：现场响应 (危机 C)",
    "ja": "突発事態：現場対応 (危機 C)",
    "en": "Sudden Event: Site Response (Crisis C)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "5.3-R3": {
  "chapter": "5.3-R3",
  "desc": {
    "zh": "【现场移交突发事件】在设备最终移交前，现场安装团队在进行接地系统测试时，发现设备底座上的接地极（Earthing Boss）在工厂制造时被错误地涂上了防腐漆，导致接地导通性不合格。若不进行处理，业主监理将禁止接线。",
    "ja": "【現地引渡突発事態】機器の最終引き渡し前、現地施工チームが接地システムのテストを行った際、機器ベースの接地ボス（Earthing Boss）に工場製造時に誤って防錆塗装が施されており、接地導通試験が不合格となった。このままではオーナーの監理官から配線接続を禁止される。",
    "en": "[Site Handover Sudden Event] Before final handover, the installation team tested the grounding system and found that the earthing boss on the equipment base had been mistakenly painted with anti-corrosive paint at the factory, causing the grounding continuity test to fail. If left unresolved, the Owner's inspector will prohibit wiring connection."
  },
  "selections": [
    {
      "id": "5.3-R3.1",
      "desc": {
        "zh": "安排现场分包商彻底打磨剥落接地极表面的防腐漆，暴露出金属导电面，并在业主代表见证下重新进行接地电阻测试。",
        "ja": "現地サブコンに指示して接地ボス表面の防錆塗装を完全に削り落とし、金属導電面を露出させ、オーナー代表の立ち会いのもとで接地抵抗試験を再実施する。",
        "en": "Instruct the site subcontractor to completely grind off the anti-corrosive paint from the earthing boss surface to expose the metal, and re-test the grounding resistance in the presence of the client representative."
      },
      "influence": {
        "zh": "虽然进行了额外的工作，但彻底解决了接地不导电的安全隐患，项目最终顺利完成移交。",
        "ja": "追加の作業は発生したものの、接地不良という安全上の重大な懸念を完全に解決し、プロジェクトは最終的に無事引き渡された。",
        "en": "Although additional work occurred, the grounding conductivity issue was resolved, and the project was successfully handed over."
      },
      "flags": [],
      "score": 10
    },
    {
      "id": "5.3-R3.2",
      "desc": {
        "zh": "为了不增加现场工时，向业主提交项目偏离（deviation）申请，要求按现状接收（Use-as-is）或使用金属螺栓强行压接导电。",
        "ja": "現地の追加工数を避けるため、オーナーにプロジェクト偏差（deviation）を申請し、現状のまま受領（Use-as-is）するか、金属ボルトで強制的に圧着して導通させることを提案する。",
        "en": "To avoid additional on-site man-hours, submit a project deviation request to the client to accept the earthing boss Use-as-is, or attempt to force electrical continuity using metal bolts."
      },
      "influence": {
        "zh": "该申请被业主安全监理直接拒绝，指出这是严重的防雷与电气安全隐患，并要求对全场设备接地逐一进行重新检查，造成严重的进度和成本影响。",
        "ja": "申請はオーナーの安全監査官から一蹴された。重大な雷撃・電気保安上のリスクであると指摘され、全設備の接地ボスの再監査を命令され、甚大なスケジュールとコストインパクトが発生した。",
        "en": "The request was rejected by the client safety auditor as a severe safety risk, demanding a full audit of all equipment earthing bosses, causing huge schedule and cost impacts."
      },
      "flags": [],
      "score": 3
    }
  ],
  "title": {
    "zh": "突发事件：现场响应 (危机 D)",
    "ja": "突発事態：現場対応 (危機 D)",
    "en": "Sudden Event: Site Response (Crisis D)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
},
  "5.3-R4": {
  "chapter": "5.3-R4",
  "desc": {
    "zh": "【现场移交突发事件】在设备最终交接文档审查中，由于供应商的文档服务器被勒索软件攻击，其补交的部分材料制造厂检验证书（MTR）签名清晰度不足，业主文控拒绝归档。",
    "ja": "【現地引渡突発事態】最終図書レビュー時、ベンダーのサーバーがランサムウェア攻撃を受けた影響で、再提出された材料検査証明書（MTR）の署名が一部不鮮明になり、オーナーの図書管理部門が受領を拒否した。",
    "en": "[Site Handover Sudden Event] During final documentation review, some Mill Test Reports (MTRs) re-submitted by the vendor were slightly blurry due to a ransomware attack on the vendor's server, and the Owner's document control refused to file them."
  },
  "selections": [
    {
      "id": "5.3-R4.1",
      "desc": {
        "ja": "待てないので材質証明書（MTC）無しのままPacking Listをベースに配管材料を払い出してもらう",
        "zh": "等不及材质证明书（MTC）了，直接根据装箱单（Packing List）向分包商发放管道材料。",
        "en": "Cannot wait. Issue piping materials based on the Packing List without the Material Test Certificate (MTC)."
      },
      "influence": {
        "ja": "配管材料のHeat No.が追えず現場で大混乱となった",
        "zh": "导致无法追踪管道材料 of 炉批号（Heat Number），施工现场陷入极度混乱。",
        "en": "Failed to trace the Heat Numbers of the piping materials, throwing the construction site into total chaos."
      },
      "flags": [],
      "score": 3
    },
    {
      "id": "5.3-R4.2",
      "desc": {
        "ja": "大至急検査員をベンダーに派遣し、材質証明書（MTC）を集めて現場に共有する",
        "zh": "大至急派人前往供应商工厂，收集材质证明书（MTC）并发送至现场共享。",
        "en": "Immediately dispatch inspectors to the vendor's shop to collect MTCs and share them on-site."
      },
      "influence": {
        "ja": "サブコンの手待ちをミニマムにするが、追加工数が発生した",
        "zh": "将分包商（Subcontractor）的工时等待时间降至最低，但产生了一些额外的工时。",
        "en": "Minimized the waiting time for the subcontractor, but additional man-hours occurred."
      },
      "flags": [],
      "score": 10
    }
  ],
  "title": {
    "zh": "突发事件：现场响应 (危机 E)",
    "ja": "突発事態：現場対応 (危機 E)",
    "en": "Sudden Event: Site Response (Crisis E)"
  },
  "avatar": "thinking",
  "npcAvatar": "strict",
  "charName": {
    "zh": "K前辈",
    "ja": "K先輩",
    "en": "K-senpai"
  }
}
};