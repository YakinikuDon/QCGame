# 🎮 QC Quest：伟大质量经理的诞生 (QC Quest: Birth of a Quality Manager)
### *An Interactive JRPG-style AVG Game for Quality Control Onboarding*

[![Language Support: CN/JA/EN](https://img.shields.io/badge/Language-CN%20%7C%20JA%20%7C%20EN-ff7ea5.svg)](#-language-switching)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Web / Mobile](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20Portrait-green.svg)](#-mobile-friendliness)

一款专为**品质管理（QC/QA）部门新人**量身定制的日系 JRPG 风格 AVG（视觉小说）培训游戏。游戏旨在通过生动有趣、带有业务对抗的情境模拟，帮助新人快速熟悉国际工程项目中从技术评估（Technical Evaluation）到 MDRB 归档审查的完整 QC 工作流与最佳实践。

---

## 🌟 核心特色 (Key Features)

1. **📚 真实业务场景 AVG 叙事**
   游戏包含 43 个核心关卡（共 119 行剧情故事线），完整对应 QC 的真实核心工作节点，并在剧情中融入了进度（Schedule）与经费（Budget）冲突等逼真对抗场景。
   * **关卡 1**: 契约与预算 (Contract & Budget)
   * **关卡 2**: 质量方针 (Quality Policy)
   * **关卡 3**: 技术评估与启动会议 (Technical Evaluation & KOM)
   * **关卡 4**: 检验前会议与检验协调 (PIM & Inspection Coordination)
   * **关卡 5**: 不符合项、放行证发行与竣工资料审查 (NCR, IRC & MDRB Review)

2. **⚔️ JRPG 像素风开屏页 (Dragon Quest Style Title Screen)**
   开屏页采用经典勇者斗恶龙（Dragon Quest）风格的 3D 立体大标题“QC Quest”，配有象征质量法则的晶莹蓝色水晶剑插图，背景为黄昏下充满科技感的精细化工厂装置群画作，展现高品质的 JRPG 视听仪式感。

3. **🌲 动态互动剧情树 (SVG Interactive Plot Tree & Time Travel)**
   集成自适应绘制的 SVG 剧情结构树，清晰呈现玩家的解锁足迹。玩家可以点击任何已访问的节点进行**“时空倒流 (Time Travel)”**，快速回到之前的分叉点重新做出正确抉择。若出现多支线并发，将按字母顺序依次触发，并且多支线关卡得分进行平均计算。

4. **📜 结算荣誉证书与本地分享 (Settlement Certificate & PNG Share Card)**
   通关或达成结局时，将根据最终得分（最高 150 分）生成不同级别的**品质管理经理荣誉证书**。点击“生成分享图”即可将证书容器渲染为高分辨率的 PNG 格式图片，自动触发本地文件下载，方便玩家保存并分享成就。

5. **🎨 搞笑画风与导师指导 (Funny Endings & Mentor System)**
   选错选项会触发极具戏剧冲突的坏结局（如*“纸糊的安全帽与打瞌睡检验员”*、*“冷凝器爆裂惨剧”*、*“触犯职业操守直接解雇”*），并由严格的 **胜田前辈 (Katsuda-senpai)** 给出富有针对性的质量提示（QC 黄金法则）。

6. **🌐 三语无缝切换 (CN / JA / EN)**
   支持**中文、日本語、English**三种语言的一键即时切换。保留国际工程项目中的核心专业术语与规范性汉化（如 *Vendor, Subvendor, WPS/PQR, NCR, MDRB, ASME R-Stamp* 等），大幅度提升行业沉浸感。

7. **📱 完美的移动端竖屏适配 (Mobile Portrait Responsiveness)**
   * **叠层景深效果**：移动端结局展示自动切换为叠层布局，大图清晰，立绘交错重叠，具备动漫镜头感。
   * **单列触控操作**：选项折叠为垂直单列，大尺寸高灵敏度，单手握持点选舒适。

8. **🎉 精致的视听仪式感**
   完美通关将触发 Canvas 七彩落花漫天飞舞特效、扫光黄金荣誉证书，极具仪式感。

---

## 👥 登场角色 (Characters)

| 角色立绘 | 角色名称 | 简介 |
| :---: | :---: | :--- |
| **小Q (Q-chan)** | 新人质量经理 | 怀抱热情加入 QC 部门的新人，性格可爱但容易受到项目经理（PM）的工期施压而产生动摇。 |
| **胜田前辈 (Katsuda-senpai)** | 资深 QC 专家 | 严格且非常可靠的资深 QC 前辈，总能在坏结局中及时点醒小Q，并传授 QC 黄金法则。 |

---

## 📂 项目结构 (Project Structure)

```text
├── index.html          # 游戏主结构与 HTML5 骨架
├── style.css           # 包含磨砂玻璃、分屏漫画和移动自适应的 Vanilla CSS
├── game.js            # 数据驱动的游戏逻辑引擎、三语词典与 SVG 剧情树逻辑
└── assets/            # 游戏美术资产包（小Q和胜田前辈的表情立绘、搞笑坏结局插图）
```

---

## 🚀 快速上手与本地运行

该项目采用纯原生前端技术构建，无需编译，可直接部署在任何静态服务器上。

### 本地运行
1. 克隆或下载本项目至本地：
   ```bash
   git clone <your-repository-url>
   cd QCGame
   ```
2. 启动轻量级本地服务器（例如使用 Python）：
   ```bash
   python3 -m http.server 8000
   ```
3. 在浏览器中打开：👉 `http://localhost:8000`

### 🌐 一键上线 GitHub Pages
本项目对 GitHub Pages 极为友好：
1. 在 GitHub 上新建一个 Repository 并推代码；
2. 进入 Repository 的 **Settings -> Pages**；
3. 将 **Build and deployment** 的 source 设为 `Deploy from a branch`，分支选择 `main` (或 `master`)，目录选择 `/ (root)`，保存；
4. 等待几十秒，即可在 GitHub 给出的免费链接上在线游玩！

---

## 📄 开源协议 (License)

本项目采用 [MIT License](LICENSE) 协议开源。
 
  
   
