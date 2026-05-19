const initialState = () => ({
  san: 100,
  hype: 0,
  codeStatus: "绝赞难产中",
  sceneId: "scene1",
});

const scenes = {
  scene1: {
    act: "第一幕",
    title: "组队广场的底层博弈",
    timer: "11小时55分",
    alerts: [
      "赞助商正在派发第 6 轮红牛，血糖和心率同步爆表。",
      "大屏倒计时每跳一下，就有一支队伍临时拆伙重组。",
      "有 HR 假装志愿者混进场地，专挑黑眼圈最深的选手递名片。",
    ],
    body: [
      { type: "meta", text: "大厅广播循环播放洗脑电子乐，空气里混着红牛、免费披萨和工业除臭剂的诡异气味。你端着一杯已经化成常温的冰美式，被倒计时和人群一层层推向尴尬中心。" },
      { text: "周围的人都在亮简历、拼战绩、当场背诵自己在大厂压过多少次线上的火。只有你，简历上赫然写着“精通 PPT 制作与拉偏架”，像一张对技术尊严的公开挑衅。" },
      { text: "你很清楚，黑客松不是找队友，是找能被你在最后时刻顺势架空的生产资料。真正高级的战术，不是站队，而是让所有人都以为你在帮他。" },
      { type: "system", text: "抉择节点 1：命运的敲门砖" },
    ],
    options: [
      {
        title: "A. 靠近那个用 Vim 盲打、黑眼圈深得像线上事故残留的大腿男生",
        effect: "精神值 -5 / 吹嘘指数 +2 / 成功入队",
        next: "scene2",
        changes: { san: -5, hype: 2, codeStatus: "临时抱团成功，队内冲突蓄势待发" },
      },
      {
        title: "B. 直奔正在吃披萨的大厂黄金队，试图靠工牌混进去",
        effect: "当场触发破防结局",
        next: "ending_elbow",
      },
      {
        title: "C. 走向主席台喝茶的导师，试图一步跳过写代码环节",
        effect: "当场触发隐藏彩蛋",
        next: "ending_ascend",
      },
    ],
  },
  scene2: {
    act: "第二幕",
    title: "凌晨2点的 Idea 绞肉机",
    timer: "7小时00分",
    alerts: [
      "凌晨 2 点 17 分，隔壁队已经因为要不要上区块链吵到摔显示器。",
      "赞助商临时宣布 API 调用额度减半，现场传来一片克制的脏话。",
      "某大厂 HR 在茶水间挖人：'你们项目做不完没关系，简历我先看看。'",
    ],
    body: [
      { type: "meta", text: "深夜 2 点，整栋楼像赛博修仙现场。你们四个人围在赛场角落的马扎上，项目方向还没定，情绪却已经定格在爆炸前一秒。" },
      { text: "小船两眼血红，坚持要用最硬核的技术栈写一个“基于去中心化高并发架构的超级贪吃蛇”，话里话外都像在暗示不会写分布式的人不配呼吸。" },
      { text: "小菜板子拍桌而起，辣条油差点飞上屏幕：“黑客松要有情绪价值！做东北澡堂子大乱斗，社交、冲突、体感、烟火气，一把梭哈评委共鸣。”" },
      { text: "小陈憋红了脸，小声提出“方言大乱斗”，温州话和东北话对喷触发音波攻击。你看着这三份方案，意识到自己可以不讲理，只讲胜率。" },
      { text: "你推了推眼镜，像在给别人宣读死刑：“黑客松的尽头是消费主义和死宅幻觉。我们做 Galgame，而且要做成连队友都觉得离谱的那种。”" },
      { type: "system", text: "抉择节点 2：教父级的拱火艺术" },
    ],
    options: [
      {
        title: "A. 站小船，硬刚其他两人的创意",
        effect: "精神值 -30 / 项目直接内爆",
        next: "ending_implode_ship",
      },
      {
        title: "B. 力挺小菜板子，赌情绪价值压过技术洁癖",
        effect: "精神值 -30 / 项目直接内爆",
        next: "ending_implode_bath",
      },
      {
        title: "C. 保护小陈，试图把会议变成温情调解局",
        effect: "精神值 -30 / 项目直接内爆",
        next: "ending_implode_chen",
      },
      {
        title: "D. 谁也不支持，直接开启离间计，把队友情绪榨成生产力",
        effect: "精神值 -15 / 吹嘘指数 +18 / 缝合怪正式立项",
        next: "scene3",
        changes: { san: -15, hype: 18, codeStatus: "怨念 Galgame 已立项，队友被迫上链式开工" },
      },
    ],
  },
  scene3: {
    act: "第三幕",
    title: "凌晨5点的背水一战与玄学救世",
    timer: "2小时30分",
    alerts: [
      "凌晨 5 点 08 分，隔壁元宇宙队开始公放 3D 引擎启动音，像给所有人送终。",
      "有赞助商代表来巡场，边拍照边问：'你们这个方向后续能商业化收割哪类用户？'",
      "主办方突然提醒：'路演时间缩短 30%，请各队把废话和人生理想一并删掉。'",
    ],
    body: [
      { type: "meta", text: "天刚泛白，整层楼的程序员都散发出一种“随时可以原地圆寂”的安详死气。你把队友们吵架后的残兵败将状态，强行改造成流水线劳工模式。" },
      { text: "然而黑客松的终极诅咒还是降临了。刚才打架时飞溅的口水污染了键盘和神智，项目打包时疯狂报错，Demo 一跑就黑屏，进度卡在 40% 像被资本掐住喉咙。" },
      { text: "你盯着屏幕，意识到现在不是修代码，是修叙事。只要故事包装得够狠、够疯、够像一种领先时代半步的病，评委就未必分得清 Bug 和 feature。" },
      { type: "system", text: "抉择节点 3：清晨的修仙豪赌" },
    ],
    options: [
      {
        title: "A. 抓现行，铁血管理，全场巡逻抓摸鱼",
        effect: "吹嘘指数 +25 / 触发全球开源流量奇迹",
        next: "ending_open_source",
        changes: { hype: 25, codeStatus: "项目靠神秘外部流量续命成功" },
      },
      {
        title: "B. 放弃修 Bug，直接启动降智缝合大法，把报错包装成卖点",
        effect: "精神值 -20 / 吹嘘指数 +35 / 医疗赛道离谱夺冠",
        next: "ending_medical",
        changes: { san: -20, hype: 35, codeStatus: "Bug 已被包装为跨学科创新体验" },
      },
      {
        title: "C. 全砍掉，只保留能跑通的极简文本版，活到最后就是胜利",
        effect: "精神值 +10 / 吹嘘指数 +8 / 靠同行暴毙躺赢",
        next: "ending_survivor",
        changes: { san: 10, hype: 8, codeStatus: "极简纯文本 Demo 稳定运行中" },
      },
    ],
  },
  ending_elbow: {
    act: "破防结局",
    title: "黑客松肘击狂魔",
    timer: "11小时54分",
    alerts: [
      "保安系统检测到场馆内出现非技术性高强度冲突。",
      "主办方提醒：'请勿使用铁肘优化其他队伍的交付节奏。'",
    ],
    ending: true,
    badge: "Bad End / 社死与物理清场",
    body: [
      { text: "你堆起笑脸刚亮工牌，对方主架构师就用看低端代码的眼神扫了你一遍：“不好意思，我们满员了。我们组只要熟练掌握 Rust、能连熬 48 小时、并且看起来已经没有心跳的赛博僵尸。”" },
      { text: "四周几十双眼睛齐刷刷看向你。你的体面在 0.2 秒内完成 GC，留下的只有愤怒的裸指针。你当场红温，大吼一声：“不让我组队是吧，那谁都别想正常敲代码！”" },
      { text: "接下来十分钟，你化身赛场铁肘狂魔，连撞十二桌、掀翻机械键盘若干、顺手拔掉五台服务器电源。最终你被六名手持防爆盾的保安锁喉拖出会场，终身取消参赛资格。" },
    ],
    result: "你没有写出一个 Demo，但你成功让整层楼记住了什么叫“社交型 DDOS”。",
  },
  ending_ascend: {
    act: "隐藏彩蛋",
    title: "白日飞升",
    timer: "11小时53分",
    alerts: [
      "资本侧雷达捕捉到高浓度不要脸天赋，正在快速靠近。",
      "本场唯一一个完全不写代码却升维出局的选手已出现。",
    ],
    ending: true,
    badge: "Secret End / 资本直通车",
    body: [
      { text: "你一巴掌拍在导师的红牛罐子上：“导师，我看凡夫俗子的代码配不上您的审美。不如咱俩一队，直接颠覆行业。”" },
      { text: "导师手里的茶杯轻轻一颤，眼里瞬间迸出资本的圣光：“好家伙，这么多年，终于又见到一个把不自量力说得这么像战略的人。”" },
      { text: "他当场拉着你退赛，免试签进投资公司。伴随着场馆内一片嫉妒和脏话，一道金光闪过，你不需要写任何一行代码，直接飞升进入资本阶级。" },
    ],
    result: "你跳过了黑客松最苦的部分，进入了更高级也更抽象的修仙副本。",
  },
  ending_implode_ship: {
    act: "团灭结局",
    title: "讲道理讲到删库",
    timer: "5小时48分",
    alerts: [
      "Git 仓库检测到高浓度情绪化提交：`final_final_really_final.zip`。",
      "凌晨 3 点，某大厂 HR 正在门口安慰被你吵哭的队友。",
    ],
    ending: true,
    badge: "Bad End / 技术洁癖爆炸",
    body: [
      { text: "你试图和小船讲道理，结果被一连串你听不懂的后端术语按在地上公开处刑。三分钟后，讨论会从产品会议退化成了“谁更不配碰 main 函数”的人格审判。" },
      { text: "小菜板子甩下耳机走人，小陈眼泪在眼眶里打转，小船红着眼把数据库脚本和半成品一起扬了。后台告警像消防演习一样狂响，项目还没立项就先办了追悼会。" },
    ],
    result: "你证明了一件事：在黑客松里，支持某一个人，往往等于得罪全部人。",
  },
  ending_implode_bath: {
    act: "团灭结局",
    title: "情绪价值把队伍烧穿",
    timer: "5小时41分",
    alerts: [
      "赞助商已悄悄撤下“通宵友好型 API”海报，现场士气再降 10%。",
      "旁边队伍已经开始用白板记录谁欠谁一句道歉。",
    ],
    ending: true,
    badge: "Bad End / 队伍现场散架",
    body: [
      { text: "你刚开口力挺小菜板子，小船就露出一种“我迟早要把这群不懂技术的人从代码里抹掉”的表情。小陈也被带偏，以为你在暗示他的想法不值一提。" },
      { text: "本来只是一场需求讨论，硬是被你推成了三方会战。半小时后，现场只剩下辣条碎、冷掉的咖啡和一块写着“散伙吧”的白板。" },
    ],
    result: "你没做出澡堂子大乱斗，却提前让队伍体验了公开互搓。",
  },
  ending_implode_chen: {
    act: "团灭结局",
    title: "温情调解局当场翻车",
    timer: "5小时37分",
    alerts: [
      "主办方友情提醒：'团队沟通不计分，但团队崩溃会显著影响交付。'",
      "凌晨 3 点 06 分，保安正在走廊里劝架。",
    ],
    ending: true,
    badge: "Bad End / 善意毫无意义",
    body: [
      { text: "你想保护小陈，把会议扭成温情路线。问题是，黑客松凌晨两点半最缺的就是温情，最不缺的是熬夜之后的自尊和误解。" },
      { text: "小船觉得你在拉偏架，小菜板子觉得你在装好人，小陈则因为承受不了所有人的目光直接沉默下线。三个人互相破防，项目在深夜 3 点提前夭折。" },
    ],
    result: "你一度想当调停者，最后却当成了全队一起坠机的副驾驶。",
  },
  ending_open_source: {
    act: "神话结局",
    title: "全员躺赢，神仙流量加成",
    timer: "0小时32分",
    alerts: [
      "全球开源社区突然开始转发一个名字非常抽象的音频压缩工具。",
      "评委席正在紧急补课：Anti-Capitalism-Compressor 到底是什么东西？",
    ],
    ending: true,
    badge: "True End / 流量把你抬进决赛圈",
    body: [
      { text: "你拿着搓澡巾巡逻时逮到小陈在副屏偷偷敲字，本以为他在找女朋友求救，结果他哆哆嗦嗦坦白：为了压缩超大的方言配音文件，他把自己临时写的极简工具发到了国外技术论坛求助。" },
      { text: "更要命的是，他给这个工具取名叫 Anti-Capitalism-Compressor。清晨 6 点，这个名字被 Linux 社区的大 V 顺手转发，直接在全球开源圈炸穿流量池。" },
      { text: "三十分钟内，你们项目主页像遭遇黑客攻击一样涌入访问量。那款立绘还拿红牛罐子凑数的半成品方言 Galgame，硬是被社区当成了某种反资本主义艺术宣言。" },
      { text: "早上 9 点，你们刚站上路演台，评委都还没插 U 盘，赞助商和投资人已经起立鼓掌：'天才！不给你们一等奖，我们今天开盘就得解释为什么错过了社区神迹。'" },
    ],
    result: "你没有修好项目，但你成功让全世界替你脑补了它本该有的伟大。",
  },
  ending_medical: {
    act: "离谱结局",
    title: "冷门赛道，降维打击夺冠",
    timer: "0小时18分",
    alerts: [
      "项目已被误投到“硬核医疗与大健康”赛道，系统暂不支持撤回。",
      "赞助商代表正在台下疯狂点头，虽然他看起来也没看懂。",
    ],
    ending: true,
    badge: "Legend End / 把 Bug 说成学科突破",
    body: [
      { text: "你的精神值正式归零，一脚踩上椅子宣布：“不调了，Bug 就是特色。报错全部改成粉色，就说是美少女的心之弹幕。”" },
      { text: "随后你们开始量子缝合：贪吃蛇的死亡判定接上澡堂搓澡频率，方言尖叫被塞进表白配音，项目分类甚至从“恋爱游戏”改成了“区块链硬核皮肤病医疗与多语言心理诊疗大健康生态”。" },
      { text: "路演时，台下医疗赛道院士和专家先是死寂三秒，接着一位老院士颤抖起身疯狂鼓掌：'天才！你们用恋爱多巴胺、线性循迹算法和方言音波疗法，完成了赛博中医皮肤科与心理学的跨界突破！'" },
    ],
    result: "你把所有漏洞包装成方法论，最后赢的不是作品，而是评委的想象力。",
  },
  ending_survivor: {
    act: "冠军结局",
    title: "内卷风暴，同行衬托登顶",
    timer: "0小时05分",
    alerts: [
      "隔壁元宇宙队显卡冒烟，现场已经有人开始喷灭火器。",
      "某大模型队在最后 5 分钟被自己的 AI 当众辱骂，队长情绪崩坏。",
    ],
    ending: true,
    badge: "Win End / 活着就是第一生产力",
    body: [
      { text: "你像个冷血杀手一样宣布：'黑客松比的不是谁造火箭，是谁活到最后。把花里胡哨的全砍了，只留能跑的文本。'" },
      { text: "于是你们顶着队友怨气删掉几乎所有炫技代码，做出一个黑底白字、朴素得像终端窗口的纯文本 Galgame。早上 7 点，四个人往长椅上一躺，盖着充气床垫集体冬眠。" },
      { text: "随后黑客松历史上最惨烈的一幕发生了。做元宇宙的显卡烧了，做大模型的 AI 觉醒反社会人格，十几支队伍因内耗和硬件问题在最后两分钟内集体出局。" },
      { text: "当评委面色铁青地走到你们桌前，看到的是全场唯一一个能点开、有画面、还能正常翻到下一页的完整作品。总冠军就这样砸到了四个睡着的人头上。" },
    ],
    result: "你没有赢在炫技，而是赢在比所有人都更早接受现实。",
  },
};

const ui = {
  sceneTag: document.getElementById("sceneTag"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneTimer: document.getElementById("sceneTimer"),
  storyBody: document.getElementById("storyBody"),
  optionsList: document.getElementById("optionsList"),
  sanValue: document.getElementById("sanValue"),
  hypeValue: document.getElementById("hypeValue"),
  codeStatus: document.getElementById("codeStatus"),
  sanMeter: document.getElementById("sanMeter"),
  hypeMeter: document.getElementById("hypeMeter"),
  tickerText: document.getElementById("tickerText"),
  restartButton: document.getElementById("restartButton"),
};

let state = initialState();
let tickerIndex = 0;
let tickerTimerId = null;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function applyChanges(changes = {}) {
  state.san = clamp(state.san + (changes.san || 0), 0, 100);
  state.hype = clamp(state.hype + (changes.hype || 0), 0, 100);
  if (changes.codeStatus) {
    state.codeStatus = changes.codeStatus;
  }
}

function renderStats() {
  ui.sanValue.textContent = state.san;
  ui.hypeValue.textContent = state.hype;
  ui.codeStatus.textContent = state.codeStatus;
  ui.sanMeter.value = state.san;
  ui.hypeMeter.value = state.hype;
}

function buildParagraph(entry) {
  const p = document.createElement("p");
  p.textContent = entry.text;
  if (entry.type) {
    p.classList.add(entry.type);
  }
  return p;
}

function renderScene(sceneId) {
  state.sceneId = sceneId;
  const scene = scenes[sceneId];
  ui.sceneTag.textContent = scene.act;
  ui.sceneTitle.textContent = scene.title;
  ui.sceneTimer.textContent = scene.timer;

  ui.storyBody.replaceChildren();
  scene.body.forEach((entry) => {
    ui.storyBody.appendChild(buildParagraph(entry));
  });

  if (scene.ending) {
    const badge = document.createElement("div");
    badge.className = "ending-badge";
    badge.textContent = scene.badge;
    ui.storyBody.appendChild(badge);

    const resultPanel = document.createElement("div");
    resultPanel.className = "result-panel";
    resultPanel.textContent = scene.result;
    ui.storyBody.appendChild(resultPanel);
  }

  ui.optionsList.replaceChildren();

  if (scene.ending) {
    const replayButton = document.createElement("button");
    replayButton.type = "button";
    replayButton.className = "option-button";
    replayButton.innerHTML = `
      <span class="option-title">重新修仙</span>
      <span class="option-effect">回到第一幕，尝试另一条更疯的路线</span>
    `;
    replayButton.addEventListener("click", restartGame);
    ui.optionsList.appendChild(replayButton);
  } else {
    scene.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.innerHTML = `
        <span class="option-title">${option.title}</span>
        <span class="option-effect">${option.effect}</span>
      `;
      button.addEventListener("click", () => {
        applyChanges(option.changes);
        renderStats();
        renderScene(option.next);
      });
      ui.optionsList.appendChild(button);
    });
  }

  rotateTicker(true);
}

function rotateTicker(forceReset = false) {
  const scene = scenes[state.sceneId];
  if (!scene) {
    return;
  }

  if (forceReset) {
    tickerIndex = 0;
    if (tickerTimerId) {
      window.clearInterval(tickerTimerId);
    }
  }

  if (!scene.alerts || scene.alerts.length === 0) {
    ui.tickerText.textContent = "暂无高压播报。";
    return;
  }

  ui.tickerText.textContent = scene.alerts[tickerIndex % scene.alerts.length];

  if (forceReset) {
    tickerTimerId = window.setInterval(() => {
      tickerIndex += 1;
      const currentScene = scenes[state.sceneId];
      if (!currentScene || !currentScene.alerts || currentScene.alerts.length === 0) {
        ui.tickerText.textContent = "暂无高压播报。";
        return;
      }
      ui.tickerText.textContent = currentScene.alerts[tickerIndex % currentScene.alerts.length];
    }, 3200);
  }
}

function restartGame() {
  state = initialState();
  renderStats();
  renderScene("scene1");
}

ui.restartButton.addEventListener("click", restartGame);

renderStats();
renderScene(state.sceneId);
