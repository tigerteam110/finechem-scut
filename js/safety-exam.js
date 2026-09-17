/**
 * Laboratory Safety Training and Examination System
 * 华南理工大学化学与化工学院 · 精细化工团队实验室安全与良好行为习惯考核系统
 * 
 * 考卷规则：
 * - 考生必须输入：姓名、学号
 * - 共 25 道日常行为规范与安全习惯题目（单选/判断题）
 * - 每题 4 分，满分 100 分
 * - 及格标准：100 分（培养自觉意识与良好习惯，错一题即须订正）
 * - 错题诊断：即时标红指出错误原因、严格规范出处（条款及页码）与标准操作解析
 * - 满分激励：100分通过后即时生成并颁发带有姓名、学号与防伪编号的《实验室安全准入合格证书》
 */

const SAFETY_EXAM_DATA = {
  zh: [
    {
      id: 1,
      type: "judge",
      question: "实验结束离开实验室前，或者在通风橱内不进行任何操作时，是否需要将通风橱调节门（移门）拉下至安全关闭位置？",
      options: [
        { key: "A", text: "需要（正确）。离开前必须将移门降至安全关闭位置，防止有害气体外溢并节能" },
        { key: "B", text: "不需要（错误）。通风橱一直大开着通风效果最好，无需拉下" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第6.3.7条",
      explanation: "离开实验室必须拉下通风橱移门；通风橱不用和使用时都应规范合上。移门降至低位不仅能维持最佳负压排风屏障、阻绝刺激性或有毒蒸气扩散，还能在突发飞溅时起到物理隔断保护作用，同时可节约高达50%以上的建筑暖通能耗。"
    },
    {
      id: 2,
      type: "judge",
      question: "为方便实验擦拭与取用，是否可以将大量吸水纸巾、塑料杯、塑料包装袋等轻质物品存放在通风橱内部？",
      options: [
        { key: "A", text: "可以（错误）。通风橱空间大，放纸巾和塑料袋随手取用很方便" },
        { key: "B", text: "严禁（正确）。纸巾、塑料薄膜等轻质物品极易被排风吸入管道造成风机卡死起火" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第6.3.7条",
      explanation: "规范第6.3.7条明确要求：通风橱内应避免放置过多器材，物品应距离门内侧15cm以上。实验室守则特别强调，通风橱内严禁放置塑料薄膜、纸巾、塑料杯等轻质物品，高速气流极易将其吸入排气主管道或风机叶轮，导致电机堵转烧毁并诱发火灾。"
    },
    {
      id: 3,
      type: "judge",
      question: "当事人最后离开实验室前，必须逐一检查并确认：关闭水龙头、切断实验设备电源、关闭气瓶阀门、关好窗户与照明灯？",
      options: [
        { key: "A", text: "必须逐一执行（正确）。做到关水、关电、关气、关灯、关窗，防范长流水与仪器损坏" },
        { key: "B", text: "没必要（错误）。大楼有物业巡逻，开着灯和窗户通风更安全" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第11.2.5条",
      explanation: "实验人员离开实验室必须断电、关水、关气、关窗、关灯。尤其要检查电化学实验室等仪器间的窗台必须关严，防止暴雨飘入浸泡损坏贵重精密仪器；水龙头未拧紧极易导致跑水淹楼，长通电存在过热短路隐患。"
    },
    {
      id: 4,
      type: "judge",
      question: "实验过程中产生的微量废酸、废碱、有机溶剂废液，用大量自来水稀释冲洗后可以直接倒入水池下水道？",
      options: [
        { key: "A", text: "可以（错误）。只要自来水开得足够大、稀释充分就可以直接冲入下水道" },
        { key: "B", text: "绝对严禁（正确）。实验废液必须严格分类收集倒入专用废液桶，严禁倾倒水池" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第8.7.6条",
      explanation: "《高等学校实验室安全检查项目表》第8.7.6条严禁向下水道倾倒废液。实验室配备有酸类、醇类、酯类、苯类专用废液桶。直排废液会腐蚀下水管网并释放剧毒挥发物，甚至因管内化学混合发生燃爆，必须分类归桶处置。"
    },
    {
      id: 5,
      type: "judge",
      question: "实验室废液收集桶平时应敞口放置以利于废气散发，且盛装量可以达到100%满瓶溢出？",
      options: [
        { key: "A", text: "错误（严禁敞口，且装量不得超过80%）。平时必须拧紧桶盖，盛装不得超过标线" },
        { key: "B", text: "正确。敞口可以防止桶内产生气压，装满可以节省收集桶" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第8.9.6条",
      explanation: "规范第8.9.6条要求：盛装废液桶不能过满（液面距离桶口应保持适当距离，盛装量严禁超过80%），平时必须盖紧桶盖并张贴规范分类标签。敞口会导致有毒溶剂持续挥发恶化室内空气；过满极易在热胀冷缩或搬运时溢出灼伤人体。"
    },
    {
      id: 6,
      type: "single",
      question: "实验中用过的废弃一次性手套、防护口罩、吸水纸巾以及一次性滴管，实验结束后应当如何处理？",
      options: [
        { key: "A", text: "直接遗留在公共实验台面上，等值日生晚上来收拾" },
        { key: "B", text: "立即扔进专门垃圾桶，如需重复使用应装入独立自封袋妥善收好，不占用公共台面" },
        { key: "C", text: "随手塞在实验台下方的木抽屉或通风橱角落里" },
        { key: "D", text: "顺手丢进公共洗涤水池内用水冲洗" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第5.3.2条",
      explanation: "实验室规范强调：不用的废弃手套口罩随手扔进垃圾桶，若还要使用建议装入自封袋自己保管，严禁随意抛弃在公共实验区域。遗留在台面不仅脏乱，还会导致不知情的他人接触手套残留危化品造成接触性灼伤与交叉污染。"
    },
    {
      id: 7,
      type: "judge",
      question: "实验室核心环境大原则是：“用完后保持实验室前后状况卫生一致，物品归位擦净台面，让后来人看不出有人来做过实验”？",
      options: [
        { key: "A", text: "正确（核心原则）。每个人自觉做好物品归位与台面保洁，是实验室安全运行的基石" },
        { key: "B", text: "错误。搞卫生是值日生一个人的事，做实验的人做完就走不需要收拾" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》大原则第一条；《高等学校实验室安全检查项目表》第5.3.2条",
      explanation: "实验室首要大原则：当事人用完实验室后要保持实验室前后状况卫生一致（至少做到物品归位，抹干净桌面），达到让后来人看不出有人做过实验的整洁标准。公共安全建立在每位科研人员严谨自律的基础之上。"
    },
    {
      id: 8,
      type: "single",
      question: "实验过程中如果需要使用某台精密仪器设备（如旋转蒸发仪、高速离心机、流变仪或干燥烘箱等），但本人未接受过该设备的正规培训或对操作规程不熟悉时，正确的做法是：",
      options: [
        { key: "A", text: "为了赶实验进度，直接通电开机，凭感觉摸索按键和加温加压，遇到报错再说" },
        { key: "B", text: "严格遵守“未经培训严禁擅自上机”原则，主动联系仪器负责人或经验丰富的师兄师姐，接受系统操作培训并考核合格后，方可独立开机操作" },
        { key: "C", text: "趁仪器管理员和他人不在场时偷偷操作，只要仪器没彻底损坏就不用声张" },
        { key: "D", text: "在网上随便搜一个类似机型的民间操作视频，盲目照搬操作" }
      ],
      answer: "B",
      citation: "《高等学校实验室安全检查项目表》第12.1.2条、第12.1.3条；《实验室安全规范与良好习惯建议》仪器管理规程",
      explanation: "高校实验室安全规范明确规定：大型精密仪器和特种设备必须建立严格的准入培训与授权考核制度，未经培训并获得许可的人员严禁擅自独立操作！盲目摸索极易造成精密元器件损毁、机械失控或引发高温高压安全事故。"
    },
    {
      id: 9,
      type: "single",
      question: "在实验室盛放配制的试剂、合成乳液或反应中间体等容器（烧杯、烧瓶、离心管），规范的要求是：",
      options: [
        { key: "A", text: "可以敞口无盖放置在公共试验台上，不用贴标签自己认得就行" },
        { key: "B", text: "必须加盖或封口，并在外壁用标签清晰注明样品名称、配制人姓名及时间" },
        { key: "C", text: "全部浸泡在洗涤水池中等待下周处理" },
        { key: "D", text: "随意摆放在通风橱门口排风挡板处" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第8.9.3条",
      explanation: "规范第8.9.3条要求：盛放试剂、合成品的烧杯和烧瓶不得无盖放置，标签信息必须明确完整。实验室守则特别强调：自己的样品若必须置于公共区域，须用胶布贴牢，用标签写好姓名和时间，既防值日生清理时误判污染，又能在发生异常时第一时间精准联系主人。"
    },
    {
      id: 10,
      type: "single",
      question: "关于实验室移动接线板（排插）的安全使用规范，下列哪种做法是正确的？",
      options: [
        { key: "A", text: "为延伸使用范围，将两到三个接线板首尾串接供电" },
        { key: "B", text: "将接线板藏在木质实验台抽屉内拉出电线使用" },
        { key: "C", text: "接线板固定在干燥台面上方，严禁直接置于地面易积水处，严禁串接，严禁置于抽屉内" },
        { key: "D", text: "直接将接线板平铺放置在通风橱内部经常倒废液的底面上" }
      ],
      answer: "C",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第7.1.4条",
      explanation: "第7.1.4条明文规定：禁止多个接线板串接供电，接线板不宜直接置于地面（防止实验水流渗漏触电短路）。实验室特别提醒：接线板绝不能放在密闭抽屉里，密闭空间散热极差，长时间积热会导致插头自燃起火；通风橱底板易积聚冷凝水和试剂，严禁在通风橱底板放置排插。"
    },
    {
      id: 11,
      type: "single",
      question: "关于鼓风干燥烘箱、马弗炉等加热设备的操作，下列哪项属于严重违规且极易引发爆炸火灾的行为？",
      options: [
        { key: "A", text: "采用不锈钢托盘或耐热陶瓷容器盛放耐温样品进行烘干" },
        { key: "B", text: "在烘箱内烘烤沾有大量乙醇、丙酮等易燃有机溶剂的滤纸，或在烘箱顶堆放纸箱等可燃物" },
        { key: "C", text: "烘箱设备周围预留充足的散热通风空间，实验完毕及时切断电源" },
        { key: "D", text: "烘箱门每次取放样品后随手关紧并锁扣好" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第12.5.7条",
      explanation: "规范第12.5.7条严格禁止：烘箱等加热设备内严禁烘烤易燃易爆试剂及有机溶剂！挥发的可燃性溶剂蒸气在烘箱密闭腔体内积聚，达到爆炸极限后遇加热管电火花会瞬时发生剧烈爆炸！烘箱顶部严禁堆放纸箱等可燃杂物（高温自燃）；严禁使用普通塑料筐盛放样品烘烤。"
    },
    {
      id: 12,
      type: "judge",
      question: "实验人员使用完明火电炉、电吹风、电热枪等加热工具后，仅关闭设备自带的开关即可，无需拔除电源插头？",
      options: [
        { key: "A", text: "错误（必须立即拔除插头）。电加热器具用毕必须随手拔掉插头，杜绝开关失灵隐患" },
        { key: "B", text: "正确。开关已经关了，拔不拔插头没有任何影响" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第12.6.4条",
      explanation: "规范第12.6.4条规定：电吹风、电热枪、电炉等用毕必须及时拔除电源插头。加热器具内置双金属片或电子开关在长期老化后极易出现触点粘连或误开启，离开不拔插头极易导致夜间持续干烧自燃引发重大火灾。"
    },
    {
      id: 13,
      type: "judge",
      question: "为了节省去食堂的时间或赶实验进度，是否可以在化学实验台边喝奶茶、吃午餐便当或存放水果零食？",
      options: [
        { key: "A", text: "可以。只要离试剂瓶远一点、吃完擦干净就可以" },
        { key: "B", text: "绝对严禁（错误）。实验室内严禁进食、饮水、吸烟以及存放任何食品和餐具" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第11.2.1条",
      explanation: "规范第11.2.1条明确要求：实验室内严禁饮食、吸烟或存放食品。化学实验室环境中弥漫着微量挥发性化学溶剂与气溶胶，实验人员的手部也易沾染微量有毒物质，在实验室内进食极易造成毒物经消化道摄入导致急性或慢性化学中毒。"
    },
    {
      id: 14,
      type: "single",
      question: "进入高分子与胶体材料实验室进行科研实验时，下列哪种着装符合个人安全防护要求？",
      options: [
        { key: "A", text: "夏天天气炎热，穿着短裤、洞洞鞋或人字拖，赤膊穿实验服" },
        { key: "B", text: "穿着质地合适的长袖实验服并扣齐扣子，下身穿长裤，脚穿包脚鞋（不露脚背）" },
        { key: "C", text: "穿着高跟鞋或露趾凉鞋，长发披散在胸前操作旋转机械" },
        { key: "D", text: "戴着沾有化学试剂的丁腈手套接听手机和握门把手" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第7.3.1条、第11.2.1条",
      explanation: "规范第7.3.1条要求：进入实验室必须穿质地合适的长袖实验服或防护服，严禁穿拖鞋、短裤、高跟鞋，长发必须挽起扎好。衣服与包脚鞋能在试剂溅落或玻璃器皿碎裂时起到关键的第一层阻隔保护；戴手套严禁触摸公共把手与手机。"
    },
    {
      id: 15,
      type: "judge",
      question: "在进行有机合成、挥发性化学试剂配制以及高温强酸强碱操作时，是否可以佩戴隐形眼镜？",
      options: [
        { key: "A", text: "可以。佩戴隐形眼镜不影响戴护目镜，视线更清晰" },
        { key: "B", text: "绝对严禁（正确）。进行化学实验时严禁佩戴隐形眼镜，必须佩戴专用安全护目镜" }
      ],
      answer: "B",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第7.3.4条",
      explanation: "第7.3.4条特别强调：进行化学、生物安全和高温实验时，不得佩戴隐形眼镜。隐形眼镜具有毛细吸附作用，能富集空气中的酸雾、溶剂蒸气并迅速与角膜紧密贴合甚至发生热变性黏连；一旦发生飞溅，不仅无法用水冲出，还会彻底阻碍眼部紧急冲洗导致严重失明事故。"
    },
    {
      id: 16,
      type: "judge",
      question: "正在进行加热、回流、搅拌等具有安全风险的实验时，实验人员不得擅自脱岗；严禁实验室大门敞开而室内无人的脱岗现象？",
      options: [
        { key: "A", text: "正确（必须在岗巡视）。实验不得脱岗，无人值守时严禁开着反应跑开" },
        { key: "B", text: "错误。只要设置好加热温度，回流过夜也不需要有人在场看守" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第5.3.3条、第7.4.2条",
      explanation: "规范第5.3.3条要求不存在门开着而无人的现象；第7.4.2条明确规定：实验时不能脱岗，通宵实验必须两人在场并严格执行事先审批制度。脱岗期间若发生冷凝水胶管脱落导致漏水爆沸或温控失灵，几分钟内即可演变为恶性火灾事故。"
    },
    {
      id: 17,
      type: "single",
      question: "实验室中的易制毒、易制爆及剧毒等管控类危险化学品，必须严格落实哪项安全管理要求？",
      options: [
        { key: "A", text: "存放在专用防爆危化品柜内，严格执行“双人双锁、专人专管”与台账登记" },
        { key: "B", text: "摆在个人实验台面上方便每天做实验取用" },
        { key: "C", text: "放在普通的木质书柜或杂物柜内即可" },
        { key: "D", text: "将钥匙交给没有经过培训的学生自由借用" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第8.5.2条",
      explanation: "规范第8.5.2条规定：易制毒、易制爆、剧毒品必须分类存放、专人保管，落实双人双锁、双人收发、双人领用、双人记账、双人保管的“五双”制度，做到账物严格相符，杜绝任何违规流失风险。"
    },
    {
      id: 18,
      type: "single",
      question: "化学实验室用于冷藏储存低沸点挥发性易燃易爆试剂（如乙醚、丙酮、石油醚）的冰箱，必须选用：",
      options: [
        { key: "A", text: "普通家用无霜冰箱" },
        { key: "B", text: "普通家用有霜双门冰箱" },
        { key: "C", text: "专业防爆冰箱（防爆认证或经正规防爆安全改装）" },
        { key: "D", text: "普通便携式车载电子冰箱" }
      ],
      answer: "C",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第12.4.1条",
      explanation: "规范第12.4.1条规定：储存危险化学品的冰箱必须为防爆冰箱或经过防爆改装，严禁使用普通无霜冰箱存放易燃易爆试剂。普通冰箱内部的温控开关和照明灯在开闭时会产生微弱电火花，遇挥发累积的易燃蒸气会瞬时引发剧烈爆轰炸毁冰箱与实验室！"
    },
    {
      id: 19,
      type: "judge",
      question: "高精度电子天平称量完毕后，实验人员应及时用毛刷清洁天平盘及周围遗洒的药粉，并将防风玻璃门严密合好？",
      options: [
        { key: "A", text: "正确。擦干净天平并合好盖子，保护传感器精度并不污染后续实验" },
        { key: "B", text: "错误。散落一点粉末没关系，防风门大开着方便后面同学直接称量" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》；《高等学校实验室安全检查项目表》第5.3.2条",
      explanation: "实验室规范指引：电子天平用完必须擦拭干净、合上防风罩盖子。化学粉末具有吸湿腐蚀性，遗撒在天平盘内会腐蚀精密的称重传感器导致精度报废；防风罩不关易引起气流吹落积尘损坏内部机械结构。"
    },
    {
      id: 20,
      type: "single",
      question: "依据实验室值日与安全台账管理制度，下列关于值日生职责的描述完全正确的是：",
      options: [
        { key: "A", text: "值日生负责当天晚上拖地、把垃圾倒干净；安全卫生台账由专人认真检查并双人督促记录，杜绝造假" },
        { key: "B", text: "值日生只需在学期末集中一次性补填所有台账记录" },
        { key: "C", text: "值日生可以把水池堆满脏烧杯留给下一位值日生洗" },
        { key: "D", text: "台账记录必须固定同一个人的字迹代签" }
      ],
      answer: "A",
      citation: "《实验室安全规范与良好习惯建议》安全责任制度；《高等学校实验室安全检查项目表》",
      explanation: "实验室明确规定：值日生交接前至少必须拖地一次并倒干净垃圾；日常检查记录本与安全卫生台账双人协同负责（一个打扫，一个检查督促填写），真实反映实验室安全环境状况，严禁造假应付，确保隐患及时发现并闭环清零。"
    },
    {
      id: 21,
      type: "judge",
      question: "关于化学试剂、实验样品和反应产物的存放与携带区域，是否可以将标称“无毒、无害、无挥发性”的药品或水溶液带进学生办公室、工位休息区分析或存放？",
      options: [
        { key: "A", text: "可以。只要试剂本身没有挥发性和毒性，带入办公室放在个人工位桌上没关系" },
        { key: "B", text: "绝对严禁（错误）。任何化学试剂、实验样品（不论是否标称无毒无害）均绝对严禁带入学生工位办公室、会议室等非实验生活区" }
      ],
      answer: "B",
      citation: "《高等学校实验室安全检查项目表》第8.2.3条、第11.2.1条；《实验室安全规范与良好习惯建议》",
      explanation: "实验室区域与办公生活区域必须实行严格的物理隔离！任何化学品、中间体和样品，不论其毒性高低，均严禁带入办公室、工位及自习区。带入办公区不仅破坏洁净环境，还存在容器倾翻、交叉污染与视觉误判误服等严重风险。"
    },
    {
      id: 22,
      type: "single",
      question: "在需要在实验室不同区域或公共走廊端拿腐蚀性试剂容器，或做实验过程中需要临时去开门时，应遵守的“一个手套”原则（One-glove rule）是指：",
      options: [
        { key: "A", text: "双手戴满污染手套，直接去拧公共走廊或实验室的大门把手" },
        { key: "B", text: "一只手戴手套稳妥拿持化学品容器，另一只未戴手套的干净手专门用于触碰门把手或开关；或者脱掉手套后再操作公共设施" },
        { key: "C", text: "实验全程双手只戴一只手套，左右手轮换戴以节约实验耗材" },
        { key: "D", text: "双手戴手套，用手肘或后背用力撞门，无视手套污染规范" }
      ],
      answer: "B",
      citation: "《高等学校实验室安全检查项目表》第7.3.1条；国际高校实验室通用安全防护准则",
      explanation: "“一个手套原则”（One-glove rule）是避免公共设施交叉污染的经典规范：当需要跨区域搬运样品或开门时，一只手戴手套持握盛有危险品的容器（防溅漏），另一只手保持不戴手套的绝对洁净状态专门用于开门、按电梯或扶门禁，确保公共接触面不沾染任何残留化学品。"
    },
    {
      id: 23,
      type: "judge",
      question: "实验人员佩戴丁腈或乳胶手套开展操作期间，是否可以使用戴手套的手去拧实验室门把手、按电梯按钮、使用个人手机或敲击公用电脑键盘？",
      options: [
        { key: "A", text: "可以。只要手套表面肉眼看起来很干净、没有滴落明显颜色就可以随意触摸" },
        { key: "B", text: "绝对严禁（错误）。戴手套的手严禁接触门把手、手机、公用键盘及电梯按钮等公共设施，防止交叉污染危害他人" }
      ],
      answer: "B",
      citation: "《高等学校实验室安全检查项目表》第7.3.1条、第11.2.1条；《实验室安全规范与良好习惯建议》",
      explanation: "实验手套表面极易吸附肉眼不可见的化学微滴、酸碱离子或纳米颗粒。戴手套触碰门把手、手机或公用键盘，会将有毒有害残留物转移至公共接触面，导致随后不戴手套的同学和老师通过皮肤接触发生吸收中毒或过敏灼伤，属于严重违规行为！"
    },
    {
      id: 24,
      type: "single",
      question: "关于长袖实验工作服（白大褂）的日常穿戴与脱卸规范，下列哪项属于严格禁止的违规行为？",
      options: [
        { key: "A", text: "离开实验室去学生工位区、会议室、食堂就餐或上洗手间时，继续穿着实验工作服随处走动" },
        { key: "B", text: "在实验室内开展实验操作时，将实验工作服所有纽扣扣齐、长袖完全放下" },
        { key: "C", text: "实验结束后在实验室出口处脱下工作服，规范悬挂在专用衣架上" },
        { key: "D", text: "工作服沾染大量腐蚀性试剂或有毒化学品后，立即脱下并按规定妥善处理更换" }
      ],
      answer: "A",
      citation: "《高等学校实验室安全检查项目表》第7.3.1条、第11.2.1条；《实验室安全规范与良好习惯建议》",
      explanation: "实验工作服是阻隔化学试剂喷溅的第一道防护屏障，织物纤维表面吸附着大量看不见的挥发性有机物与化学粉尘。将实验服穿出实验室、进入办公室、工位区、自习室或食堂，会直接将化学毒物扩散至公共生活环境，危害公共健康，严禁穿实验服离开实验区！"
    },
    {
      id: 25,
      type: "single",
      question: "实验过程中产生的废弃注射器针头、碎玻璃滴管、手术刀片、毛细管等尖锐废弃物，应当如何规范处理？",
      options: [
        { key: "A", text: "直接丢入普通的黑色或黄色塑料生活垃圾袋中，混入一般固废" },
        { key: "B", text: "必须直接放入耐穿刺、防渗漏的专用黄色硬质“利器盒”内封闭收集，严禁混入生活垃圾" },
        { key: "C", text: "随手丢弃在洗涤水池角落或通风橱排风挡板下方" },
        { key: "D", text: "塞进喝空的塑料矿泉水瓶里随手丢进走廊垃圾桶" }
      ],
      answer: "B",
      citation: "《高等学校实验室安全检查项目表》第8.7.4条、第8.7.5条；《实验室安全规范与良好习惯建议》",
      explanation: "废弃针头、刀片、碎玻璃等尖锐物品具有极高的机械刺伤风险。混入普通垃圾袋极易刺穿袋壁扎伤清运学生或后勤保洁师傅，引发严重的化学染毒甚至破伤风感染事故！所有锐器必须100%投入专用硬质利器盒集中回收处置。"
    }
  ],
  en: [
    {
      id: 1,
      type: "judge",
      question: "Before leaving the laboratory, or when no active operation is taking place inside the fume hood, must the sash be lowered to the safe closed position?",
      options: [
        { key: "A", text: "Yes (Required). The sash must be lowered to safe closed position to prevent vapor escape and conserve energy." },
        { key: "B", text: "No (Incorrect). Keeping the sash wide open offers maximum ventilation at all times." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 6.3.7.",
      explanation: "Personnel must close or lower the sash when walking away from the fume hood. Lowering the sash preserves face velocity containment, prevents toxic or irritant fumes from spilling into the room, shields users against unexpected splashes, and saves more than 50% of HVAC energy consumption."
    },
    {
      id: 2,
      type: "judge",
      question: "For convenient wiping, is it permissible to store bulk absorbent paper towels, plastic cups, or thin plastic bags inside the fume hood?",
      options: [
        { key: "A", text: "Yes (Incorrect). The interior of the fume hood is spacious and convenient for paper storage." },
        { key: "B", text: "Strictly Prohibited (Required). Lightweight items can be drawn into the exhaust duct and ignite the blower motor." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 6.3.7.",
      explanation: "Inspection item 6.3.7 mandates that fume hoods must remain clear of excess items, and equipment must sit at least 15 cm inside the sash. Thin films, plastic bags, and tissue paper can be pulled into the rear baffle and exhaust duct, jamming the impeller and creating serious fire hazards."
    },
    {
      id: 3,
      type: "judge",
      question: "Before the last person departs from the laboratory, must they verify that water taps, equipment power, gas valves, windows, and room lights are securely shut?",
      options: [
        { key: "A", text: "Must Be Verified (Required). Confirm shutoff of water, electricity, gas, lighting, and windows to prevent flooding and damage." },
        { key: "B", text: "Unnecessary (Incorrect). Security personnel patrol the building, so keeping windows open for ventilation is better." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 11.2.5.",
      explanation: "Personnel leaving the laboratory must turn off power, water, gas, lights, and windows. Windows in sensitive analytical rooms like the electrochemistry lab must stay shut against wind and rain, protecting precision instruments from moisture damage."
    },
    {
      id: 4,
      type: "judge",
      question: "Can small volumes of spent acid, base, or organic solvent wastes be poured directly into the sink after flushing with abundant tap water?",
      options: [
        { key: "A", text: "Permissible (Incorrect). Adequate dilution with running tap water makes drainage into public sewers safe." },
        { key: "B", text: "Strictly Prohibited (Required). Waste solutions must be segregated into designated carboys; drainage into sinks is banned." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 8.7.6.",
      explanation: "Item 8.7.6 strictly prohibits discharging chemical waste down drains. Laboratories maintain dedicated carboys for acids, alcohols, esters, and aromatics, with specialized containers for halogenated and ketone wastes. Drainage corrodes pipes, pollutes water systems, and risks exothermic gas release in sewer lines."
    },
    {
      id: 5,
      type: "judge",
      question: "Should chemical waste collection carboys be kept open to vent vapors, and can liquid levels fill up to 100% until overflowing?",
      options: [
        { key: "A", text: "False (Prohibited to leave open; volume must not exceed 80%). Caps must be tightly closed, and volume kept below the fill mark." },
        { key: "B", text: "True. Open necks prevent pressure buildup, and filling to 100% saves replacement containers." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 8.9.6.",
      explanation: "Regulation item 8.9.6 dictates that waste containers must never exceed 80% capacity, leaving vapor headspace to prevent overflow during thermal expansion. Caps must remain tightly sealed to stop toxic and volatile solvent evaporation into ambient room air."
    },
    {
      id: 6,
      type: "single",
      question: "How should discarded single-use nitrile gloves, face masks, paper wipes, and disposable pipettes be handled when concluding an experiment?",
      options: [
        { key: "A", text: "Leave them on the shared bench for the evening duty student to tidy up." },
        { key: "B", text: "Discard immediately into designated trash bins; store reusable items in clean individual zip bags." },
        { key: "C", text: "Stuff them into wooden desk drawers or rear fume hood corners." },
        { key: "D", text: "Drop them into the shared washing sink for soaking." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 5.3.2.",
      explanation: "Laboratory guidelines require discarded consumables to be thrown into waste receptacles right after use. Items intended for reuse must be stored in clean individual ziplock bags. Leaving contaminated gloves on shared benches exposes coworkers to chemical contact burns and sample cross-contamination."
    },
    {
      id: 7,
      type: "judge",
      question: "Is the core cleanliness principle of the laboratory: 'Maintain consistent sanitation before and after work, return items, wipe benches, so successors cannot tell experiments occurred'?",
      options: [
        { key: "A", text: "True (Core Principle). Voluntary item return and clean bench tops form the foundation of safe operations." },
        { key: "B", text: "False. Sanitizing is solely the responsibility of the daily duty student, not individual experimenters." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines, Principle 1; Safety Check Inspection Item 5.3.2.",
      explanation: "Principle 1 of laboratory guidelines requires experimenters to keep identical bench hygiene before and after experiments, returning tools and wiping counters spotless. Mutual civic courtesy and daily self-discipline constitute the frontline of lab safety."
    },
    {
      id: 8,
      type: "single",
      question: "When a researcher needs to operate an analytical instrument or experimental equipment without prior formal training or familiarity with operating protocols, what is the appropriate course of action?",
      options: [
        { key: "A", text: "Power on the unit and guess parameters through trial and error to meet experimental deadlines." },
        { key: "B", text: "Strictly adhere to the rule prohibiting unauthorized operation; contact the designated instrument manager or senior lab members for formal training and qualification before independent use." },
        { key: "C", text: "Operate the device covertly when managers are absent as long as it does not break completely." },
        { key: "D", text: "Follow unverified generic internet videos and guess the operational settings blindly." }
      ],
      answer: "B",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Items 12.1.2 and 12.1.3; Laboratory Safety Habit Guidelines.",
      explanation: "Laboratory regulations mandate that analytical instruments and high-risk equipment require systematic training and authorization. Unauthorized operation risks costly component failure, mechanical accidents, or severe personnel hazards."
    },
    {
      id: 9,
      type: "single",
      question: "What is the mandatory protocol for beakers, flasks, and centrifuge tubes holding prepared reagents or emulsion products in the laboratory?",
      options: [
        { key: "A", text: "They can remain unsealed on communal benches without labels as long as the owner recognizes them." },
        { key: "B", text: "They must be capped or sealed with Parafilm, with labels showing sample name, preparer name, and date." },
        { key: "C", text: "They should all be soaked in the communal washing sink until the next week." },
        { key: "D", text: "They should sit right along the front draft baffle of the fume hood." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 8.9.3.",
      explanation: "Item 8.9.3 mandates that reagent containers must never sit unsealed, and labeling must be clear and complete. Laboratory guidelines specify that samples placed in shared areas must carry tape labels with the researcher's name and time period, preventing accidental disposal and easing emergency tracing."
    },
    {
      id: 10,
      type: "single",
      question: "Which of the following describes the compliant electrical safety practice for movable power strips inside the laboratory?",
      options: [
        { key: "A", text: "Daisy-chaining two or three power strips together to extend power reach." },
        { key: "B", text: "Concealing the power strip inside closed wooden bench drawers while drawing wires out." },
        { key: "C", text: "Mounting the strip on dry bench elevations, never on wet floors, never daisy-chained, never in drawers." },
        { key: "D", text: "Laying the power strip directly on the bottom baseplate of the fume hood." }
      ],
      answer: "C",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 7.1.4.",
      explanation: "Item 7.1.4 strictly forbids daisy-chaining power strips and warns against placing them directly on wet floor areas. Laboratory rules highlight that power strips inside wooden drawers trap heat and induce fires, while fume hood baseplates accumulate spills and condensation, making power strips unsafe there."
    },
    {
      id: 11,
      type: "single",
      question: "Which operation involving drying ovens and high-temperature heating equipment constitutes a critical safety violation?",
      options: [
        { key: "A", text: "Using stainless steel pans or heat-resistant ceramic dishes to dry heat-tolerant specimens." },
        { key: "B", text: "Baking filter paper soaked in volatile ethanol or acetone inside ovens, or stacking cardboard boxes on top." },
        { key: "C", text: "Leaving adequate clearance around the oven for ventilation and cutting power after use." },
        { key: "D", text: "Latching the oven door securely after loading or unloading sample trays." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 12.5.7.",
      explanation: "Item 12.5.7 strictly prohibits drying items with flammable organic solvents in ovens. Volatile solvent vapors accumulate within closed heating chambers, and electrical heating coil sparks can trigger immediate explosions. Stacking cardboard boxes on oven tops introduces combustible fuel for fires."
    },
    {
      id: 12,
      type: "judge",
      question: "After utilizing hot air blowers, heat guns, or open coil heaters, is switching off the device switch sufficient without unplugging the power cord?",
      options: [
        { key: "A", text: "False (Unplugging is mandatory). Heating tools must have their plugs disconnected right after operation." },
        { key: "B", text: "True. The integrated toggle switch is already off, so unplugging produces no safety difference." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 12.6.4.",
      explanation: "Item 12.6.4 requires that heat guns, blowers, and portable heating elements have their power plugs removed from sockets after work. Aging mechanical switches can suffer contact welding, leading to unmonitored overnight heating and severe building fires."
    },
    {
      id: 13,
      type: "judge",
      question: "To save travel time or expedite experiments, may researchers consume bubble tea, eat lunch boxes, or store snack food beside chemical benches?",
      options: [
        { key: "A", text: "Permissible. Placing food a short distance from reagents and cleaning up crumbs afterwards is fine." },
        { key: "B", text: "Strictly Prohibited (Required). Eating, drinking, smoking, and storing human food or drink vessels are banned." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 11.2.1.",
      explanation: "Safety standard 11.2.1 forbids food consumption, drinking, and food storage in laboratories. Ambient laboratory air contains chemical vapors and aerosols, and glove-to-hand transfer can deposit toxic residues, causing acute or chronic poisoning upon oral ingestion."
    },
    {
      id: 14,
      type: "single",
      question: "Which of the following apparel meets laboratory personal protective equipment (PPE) criteria when working in the laboratory?",
      options: [
        { key: "A", text: "Wearing shorts, foam clog sandals, or flip-flops during hot summer days with an open lab coat." },
        { key: "B", text: "Wearing a properly buttoned long-sleeved lab coat, full-length trousers, and closed-toe shoes." },
        { key: "C", text: "Wearing high heels or open-toe sandals with loose hair dangling near rotating shafts." },
        { key: "D", text: "Wearing chemical-stained nitrile gloves while handling shared door knobs and cell phones." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Items 7.3.1 and 11.2.1.",
      explanation: "Inspection item 7.3.1 requires appropriate long-sleeved protective lab coats, full-length leg coverage, and closed-toe footwear. Lab coats and closed footwear provide the first barrier against dropped chemicals and broken glass. Contaminated gloves must never touch door handles or mobile devices."
    },
    {
      id: 15,
      type: "judge",
      question: "Is wearing contact lenses permitted during organic synthesis, volatile reagent handling, or high-temperature acid-base procedures?",
      options: [
        { key: "A", text: "Permitted. Contact lenses do not interfere with safety goggles and offer sharp visual focus." },
        { key: "B", text: "Strictly Prohibited (Required). Contact lenses are forbidden in chemical zones; dedicated safety goggles must be worn." }
      ],
      answer: "B",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 7.3.4.",
      explanation: "Item 7.3.4 strictly states that contact lenses must not be worn during chemical, biological, or high-temperature operations. Capillary suction traps solvent fumes and corrosive vapors behind the lens against the cornea, impeding emergency eye flushing and escalating corneal damage."
    },
    {
      id: 16,
      type: "judge",
      question: "When active heating, reflux, or exothermic reactions are in progress, is leaving the lab unattended with the door standing open permitted?",
      options: [
        { key: "A", text: "Prohibited (Attendance required). Experimenters must monitor operations; leaving doors open while absent is banned." },
        { key: "B", text: "Permitted. Once the temperature controller is set, reflux reactions require no supervision." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Items 5.3.3 and 7.4.2.",
      explanation: "Regulation items 5.3.3 and 7.4.2 ban leaving reactions unattended and forbid unlocked vacant rooms. Unmonitored reflux can suffer cooling hose detachment, bumping, or thermal runaway, generating dangerous flash fires within minutes without immediate human response."
    },
    {
      id: 17,
      type: "single",
      question: "How must regulated precursor, explosive-precursor, and acutely toxic chemicals be handled and stored in the laboratory?",
      options: [
        { key: "A", text: "In dedicated explosion-proof cabinets under dual-custody dual-lock control with rigorous usage logs." },
        { key: "B", text: "On individual bench shelves for easy daily retrieval during experiments." },
        { key: "C", text: "Inside ordinary wooden bookcases or stationery cabinets without locks." },
        { key: "D", text: "Keys handed freely to untrained students for unmonitored borrowing." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 8.5.2.",
      explanation: "Standard 8.5.2 mandates that regulated hazardous chemicals reside in secure specialty cabinets with dual custodians, dual locks, dual dispensing verification, and milligram-level ledger logging to prevent diversion or loss."
    },
    {
      id: 18,
      type: "single",
      question: "Which type of refrigerator is strictly required for preserving volatile, low-boiling flammable solvents such as diethyl ether or petroleum ether?",
      options: [
        { key: "A", text: "Standard domestic frost-free home refrigerator." },
        { key: "B", text: "Standard domestic direct-cool dual-door refrigerator." },
        { key: "C", text: "Certified explosion-proof refrigerator (certified intrinsically safe electrical design)." },
        { key: "D", text: "Portable thermoelectric car cooler." }
      ],
      answer: "C",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 12.4.1.",
      explanation: "Standard 12.4.1 dictates that flammable chemical storage requires intrinsically safe explosion-proof refrigerators. Standard household refrigerators feature internal thermostats and door light switches that spark, detonating accumulated vapor pockets."
    },
    {
      id: 19,
      type: "judge",
      question: "After utilizing analytical balances, must the user sweep clean stray reagent powders on the weighing pan and close the glass draft windshields?",
      options: [
        { key: "A", text: "True. Cleaning the pan and closing glass sashes preserves sensor accuracy and prevents contamination." },
        { key: "B", text: "False. Leaving traces of powder is harmless, and keeping sashes open benefits the next user." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines; Safety Check Inspection Item 5.3.2.",
      explanation: "Laboratory rules dictate that analytical balances must be brushed clean and shielded after every use. Hygroscopic and corrosive powders attack delicate electromagnetic sensors, and unclosed draft shields expose precision knives to air drafts and ambient dust."
    },
    {
      id: 20,
      type: "single",
      question: "According to the duty roster and ledger protocols of the laboratory, which statement accurately reflects student obligations?",
      options: [
        { key: "A", text: "Duty students must mop floors and empty bins nightly; safety logs are reviewed jointly with zero falsification." },
        { key: "B", text: "Duty students may backfill all semester inspection records in a single evening." },
        { key: "C", text: "Duty students can pile dirty glassware in sinks for the incoming rotation to wash." },
        { key: "D", text: "Ledger records must be forged using a single person's handwriting throughout the year." }
      ],
      answer: "A",
      citation: "Laboratory Safety Habit Guidelines, Principles 2 and 3.",
      explanation: "Laboratory guidelines mandate that duty personnel mop floors and empty garbage cans before shift handover. Two students collaborate as cleaning duty and safety inspector, recording real observations and avoiding fabricated entries to maintain lab hygiene."
    },
    {
      id: 21,
      type: "judge",
      question: "Is it permitted to bring chemical reagents, reaction products, test samples, or volatile solvents into student offices or study desks under the claim that they are non-toxic, odorless, or temporarily placed?",
      options: [
        { key: "A", text: "Permitted. Mild, non-toxic, or well-sealed chemicals may be placed beside office desks temporarily." },
        { key: "B", text: "Strictly Prohibited (Required). Bringing any chemical reagent or experimental sample into office and desk areas is banned without exception." }
      ],
      answer: "B",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Items 7.3.1 and 11.2.1; Laboratory Safety Habit Guidelines.",
      explanation: "Student offices and study cubicles are non-chemical public study zones. Bringing chemicals, synthetic samples, or unsealed test tubes into desks creates persistent inhalation hazards, chemical cross-contamination, and accidental ingestion risks. Experimental materials must strictly remain inside operational laboratory zones."
    },
    {
      id: 22,
      type: "single",
      question: "When a researcher needs to transport chemical samples or reagent bottles through public corridors, stairs, or doors between laboratories, which handling protocol must be strictly observed?",
      options: [
        { key: "A", text: "Wear gloves on both hands and turn door knobs or push corridor push-plates directly with gloved hands." },
        { key: "B", text: "Observe the 'one-glove rule' or use clean secondary containment; the gloved hand carries the container while the ungloved bare hand touches door handles and elevator buttons." },
        { key: "C", text: "Remove all gloves, hold the chemical container directly with bare hands, and walk through corridors." },
        { key: "D", text: "Put on double gloves and push public doors open with elbows or feet while holding bottles loosely." }
      ],
      answer: "B",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Item 7.3.1; Laboratory Safety Habit Guidelines.",
      explanation: "The 'one-glove rule' mandates that when transporting materials across public transit areas, the gloved hand holds the chemical or biological sample while the clean bare hand operates door knobs, elevator buttons, and access cards. Alternatively, use sealed clean secondary containers so that both hands remain ungloved, preventing contamination of public shared surfaces."
    },
    {
      id: 23,
      type: "judge",
      question: "While wearing nitrile or latex gloves during experimental procedures, is it permissible to operate laboratory door handles, tap personal mobile screens, use shared computer keyboards, or press elevator buttons?",
      options: [
        { key: "A", text: "Permissible. If the glove surface looks visually clean without visible stains or color drops, touching public items is fine." },
        { key: "B", text: "Strictly Prohibited (Required). Gloved hands must never contact door handles, phones, keyboards, or elevator buttons to prevent toxic cross-contamination." }
      ],
      answer: "B",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Items 7.3.1 and 11.2.1; Laboratory Safety Habit Guidelines.",
      explanation: "Experimental gloves trap invisible chemical residues, acidic droplets, and toxic particulates on their outer surfaces. Touching door handles, mobile phones, or communal keyboards transfers hazardous residue to public contact surfaces, causing contact dermatitis, chemical burns, or transdermal poisoning to subsequent unsuspecting users."
    },
    {
      id: 24,
      type: "single",
      question: "Regarding the compliant wearing and removal of protective lab coats, which of the following practices constitutes a severe safety violation?",
      options: [
        { key: "A", text: "Leaving the laboratory to visit student offices, meeting rooms, cafeterias, or restrooms while continuing to wear the lab coat." },
        { key: "B", text: "Fastening all buttons and keeping long sleeves rolled down during experimental procedures." },
        { key: "C", text: "Taking off the lab coat at the laboratory exit and hanging it neatly on designated coat racks after work." },
        { key: "D", text: "Removing and replacing the lab coat immediately when heavily contaminated with corrosive reagents." }
      ],
      answer: "A",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Items 7.3.1 and 11.2.1; Laboratory Safety Habit Guidelines.",
      explanation: "Lab coats serve as primary protective barriers against chemical splashes, adsorbing volatile organic compounds and chemical dust on fabric fibers. Wearing lab coats outside into office zones, study cubicles, or dining cafeterias directly spreads hazardous residues into public living environments and is strictly banned."
    },
    {
      id: 25,
      type: "single",
      question: "How must sharp wastes generated during experiments, such as syringe needles, broken glass pipettes, razor blades, and glass capillary tubes, be disposed of?",
      options: [
        { key: "A", text: "Discarded directly into standard plastic domestic garbage bags and mixed with normal municipal solid trash." },
        { key: "B", text: "Placed directly into puncture-proof, leak-resistant yellow rigid sharps containers and sealed tightly for hazardous collection." },
        { key: "C", text: "Left scattered in sink corners or beneath fume hood exhaust baffles." },
        { key: "D", text: "Stuffed into empty beverage bottles and thrown into corridor waste baskets." }
      ],
      answer: "B",
      citation: "Safety Inspection Standards for Higher Education Laboratories, Items 8.7.4 and 8.7.5; Laboratory Safety Habit Guidelines.",
      explanation: "Discarded needles, scalpel blades, and broken glass present extreme mechanical puncture and laceration risks. Mixing them with regular garbage easily punctures plastic bags and causes severe puncture injuries, blood-borne chemical poisoning, and infection hazards for custodial workers. All sharps must be placed in dedicated rigid sharps disposal boxes."
    }
  ]
};

// Exam state controller
class SafetyExamEngine {
  constructor() {
    this.currentLang = 'zh';
    this.questions = SAFETY_EXAM_DATA[this.currentLang];
    this.userAnswers = {};
    this.submitted = false;
    this.score = 0;
    this.totalScore = 100;
    this.passScore = 100; // 100分制满分合格
    this.studentName = '';
    this.studentId = '';
    this.isLoggedIn = false;
  }

  init() {
    this.updateViewState();

    // Login button handler
    const loginBtn = document.getElementById('examLoginBtn');
    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.login();
      });
    }

    // Support Enter key on login inputs
    const nameInput = document.getElementById('studentNameInput');
    const idInput = document.getElementById('studentIdInput');
    [nameInput, idInput].forEach(input => {
      if (input) {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.login();
          }
        });
      }
    });

    // Logout / Switch button handler
    const logoutBtn = document.getElementById('examLogoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    }
  }

  login() {
    const nameInput = document.getElementById('studentNameInput');
    const idInput = document.getElementById('studentIdInput');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const idVal = idInput ? idInput.value.trim() : '';

    if (!nameVal) {
      alert(this.currentLang === 'en' ? 'Please enter the examinee full name before starting the examination.' : '请输入考试人姓名！');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!idVal) {
      alert(this.currentLang === 'en' ? 'Please enter the SCUT student ID number.' : '请输入华南理工大学学号！');
      if (idInput) idInput.focus();
      return;
    }

    this.studentName = nameVal;
    this.studentId = idVal;
    this.isLoggedIn = true;

    this.updateViewState();
    this.renderExam();

    // Scroll to paper top
    const paperSec = document.getElementById('examPaperSection');
    if (paperSec) {
      paperSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.userAnswers = {};
    this.submitted = false;
    this.score = 0;
    this.updateViewState();

    const nameInput = document.getElementById('studentNameInput');
    if (nameInput) {
      nameInput.value = '';
      nameInput.focus();
    }
    const idInput = document.getElementById('studentIdInput');
    if (idInput) {
      idInput.value = '';
    }
  }

  updateViewState() {
    const loginSec = document.getElementById('examLoginSection');
    const paperSec = document.getElementById('examPaperSection');
    const nameDisplay = document.getElementById('examineeDisplayName');
    const idDisplay = document.getElementById('examineeDisplayId');

    if (this.isLoggedIn) {
      if (loginSec) loginSec.style.display = 'none';
      if (paperSec) paperSec.style.display = 'block';
      if (nameDisplay) nameDisplay.textContent = this.studentName;
      if (idDisplay) idDisplay.textContent = this.studentId;
    } else {
      if (loginSec) loginSec.style.display = 'block';
      if (paperSec) paperSec.style.display = 'none';
    }
  }

  setLanguage(lang) {
    this.currentLang = (lang === 'en') ? 'en' : 'zh';
    this.questions = SAFETY_EXAM_DATA[this.currentLang];
    if (this.isLoggedIn) {
      this.renderExam();
    }
  }

  setAnswer(questionId, selectedKey) {
    if (!this.isLoggedIn) return;
    this.userAnswers[questionId] = selectedKey;
    this.updateProgressUI();
  }

  updateProgressUI() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.questions.length;
    const progressFill = document.getElementById('examProgressFill');
    const progressText = document.getElementById('examProgressText');
    if (progressFill && progressText) {
      const pct = Math.round((answeredCount / totalCount) * 100);
      progressFill.style.width = pct + '%';
      if (this.currentLang === 'en') {
        progressText.textContent = `Progress: ${answeredCount} / ${totalCount} (${pct}%)`;
      } else {
        progressText.textContent = `答题进度：${answeredCount} / ${totalCount} 题（${pct}%）`;
      }
    }
  }

  submitExam() {
    if (!this.isLoggedIn) {
      alert(this.currentLang === 'en' ? 'Please log in with examinee name and student ID first.' : '请首先输入姓名与学号登录！');
      this.updateViewState();
      return false;
    }

    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.questions.length;

    if (answeredCount < totalCount) {
      const msg = this.currentLang === 'en' 
        ? `You have answered ${answeredCount} of ${totalCount} questions. Please answer all ${totalCount} questions before submitting.`
        : `您当前仅作答了 ${answeredCount} / ${totalCount} 题。本系统为实验室准入必修考核，请全部作答完毕后再行交卷。`;
      alert(msg);
      return false;
    }

    let correctCount = 0;
    this.questions.forEach(q => {
      if (this.userAnswers[q.id] === q.answer) {
        correctCount += 1;
      }
    });

    const pointsPerQuestion = Math.round(this.totalScore / this.questions.length);
    this.score = correctCount * pointsPerQuestion;
    this.submitted = true;
    this.renderExam();
    this.renderResultModal(correctCount, totalCount);
    return true;
  }

  resetExam() {
    this.userAnswers = {};
    this.submitted = false;
    this.score = 0;
    this.renderExam();
    this.updateProgressUI();
    const examSec = document.getElementById('examPaperSection');
    if (examSec) {
      examSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderExam() {
    if (!this.isLoggedIn) return;
    const container = document.getElementById('safetyQuestionsContainer');
    if (!container) return;

    const pointsPerQuestion = Math.round(this.totalScore / this.questions.length);

    let html = '';
    this.questions.forEach((q) => {
      const selected = this.userAnswers[q.id];
      const isCorrect = this.submitted && (selected === q.answer);
      const isWrong = this.submitted && (selected !== q.answer);

      let cardClass = 'exam-question-card';
      if (this.submitted) {
        cardClass += isCorrect ? ' card-correct' : ' card-wrong';
      }

      html += `
        <div class="${cardClass}" id="question_block_${q.id}">
          <div class="question-header">
            <span class="question-badge">${this.currentLang === 'en' ? 'Question' : '第'} ${q.id} ${this.currentLang === 'en' ? '' : '题'}</span>
            <span class="question-type-tag">${q.type === 'judge' ? (this.currentLang === 'en' ? 'Judgment / True-False' : '日常习惯判断') : (this.currentLang === 'en' ? 'Single Choice' : '日常安全单选')}</span>
            <span class="question-points">${this.currentLang === 'en' ? `${pointsPerQuestion} pts` : `${pointsPerQuestion}分`}</span>
            ${this.submitted ? (isCorrect 
                ? `<span class="verdict-tag verdict-pass"><i class="fas fa-check-circle"></i> ${this.currentLang === 'en' ? `Correct (+${pointsPerQuestion})` : `回答正确 (+${pointsPerQuestion})`}</span>`
                : `<span class="verdict-tag verdict-fail"><i class="fas fa-times-circle"></i> ${this.currentLang === 'en' ? 'Wrong (+0)' : '回答错误 (0分)'}</span>`
              ) : ''}
          </div>
          <h4 class="question-title">${q.question}</h4>
          
          <div class="options-list">
            ${q.options.map(opt => {
              const isChecked = selected === opt.key;
              let optClass = 'option-item';
              if (isChecked) optClass += ' selected';
              if (this.submitted) {
                if (opt.key === q.answer) optClass += ' option-real-correct';
                if (isChecked && !isCorrect) optClass += ' option-user-wrong';
              }
              return `
                <label class="${optClass}" onclick="safetyEngine.setAnswer(${q.id}, '${opt.key}')">
                  <input type="radio" name="q_${q.id}" value="${opt.key}" ${isChecked ? 'checked' : ''} ${this.submitted ? 'disabled' : ''}>
                  <span class="opt-indicator">${opt.key}</span>
                  <span class="opt-text">${opt.text}</span>
                </label>
              `;
            }).join('')}
          </div>

          ${this.submitted && isWrong ? `
            <div class="feedback-box feedback-error">
              <div class="feedback-header">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>${this.currentLang === 'en' ? 'Standard Protocol and Citation Reference' : '规范要求与严格出处诊断'}</strong>
              </div>
              <p class="citation-text"><strong>${this.currentLang === 'en' ? 'Official Source' : '规范条款出处'}：</strong>${q.citation}</p>
              <p class="explanation-text"><strong>${this.currentLang === 'en' ? 'Violation Reason and Rule Analysis' : '违规隐患提醒与解析'}：</strong>${q.explanation}</p>
            </div>
          ` : ''}

          ${this.submitted && isCorrect ? `
            <div class="feedback-box feedback-success">
              <div class="feedback-header">
                <i class="fas fa-check"></i>
                <strong>${this.currentLang === 'en' ? 'Correct Practice Verified' : '良好习惯规范确认'}</strong>
              </div>
              <p class="citation-text"><strong>${this.currentLang === 'en' ? 'Official Source' : '规范条款出处'}：</strong>${q.citation}</p>
              <p class="explanation-text">${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      `;
    });

    container.innerHTML = html;
    this.updateProgressUI();
  }

  renderResultModal(correctCount, totalCount) {
    const isPass = this.score >= this.passScore;
    const modalEl = document.getElementById('examResultModal');
    const modalBody = document.getElementById('examResultModalBody');
    if (!modalEl || !modalBody) return;

    let html = '';
    if (isPass) {
      const certNo = 'SCUT-FC-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
      html = `
        <div class="exam-result-summary pass">
          <div class="result-icon-badge pass"><i class="fas fa-award"></i></div>
          <h3>${this.currentLang === 'en' ? 'Congratulations! Full Score (100 pts) Achieved' : '恭喜！实验室安全习惯考核满分（100分）通过！'}</h3>
          <p class="result-lead">${this.currentLang === 'en' 
            ? `You have successfully answered all ${totalCount} safety habit questions correctly, demonstrating high safety awareness and rigorous laboratory discipline.` 
            : `您已全部答对${totalCount}道日常行为习惯题目，展现了优良的自觉安全意识与严谨作风，准予进入华南理工大学精细化工团队实验室开展科研工作！`}</p>
          
          <div class="cert-preview-card">
            <div class="cert-watermark">SCUT FINE CHEMICAL</div>
            <div class="cert-header">
              <span class="cert-title">${this.currentLang === 'en' ? 'LABORATORY SAFETY ACCESS CERTIFICATE' : '华南理工大学精细化工团队实验室安全准入凭证'}</span>
              <span class="cert-no">${certNo}</span>
            </div>
            <div class="cert-body">
              <p><strong>${this.currentLang === 'en' ? 'Examinee Name' : '考核人员姓名'}：</strong><span style="color:#0A2540; font-weight:700; font-size:15px;">${this.studentName}</span></p>
              <p><strong>${this.currentLang === 'en' ? 'SCUT Student ID' : '华南理工大学学号'}：</strong><span style="font-family:monospace; font-weight:700; font-size:15px; color:#0052CC;">${this.studentId}</span></p>
              <p><strong>${this.currentLang === 'en' ? 'Certified Room' : '准入实验室'}：</strong>华南理工大学化学与化工学院 精细化工团队实验室（高分子与胶体材料实验室）</p>
              <p><strong>${this.currentLang === 'en' ? 'Examination Result' : '考核成绩'}：</strong>100 / 100 ${this.currentLang === 'en' ? `(Full Marks, ${totalCount}/${totalCount} Correct)` : `（满分，${totalCount}题全部正确）`}</p>
              <p><strong>${this.currentLang === 'en' ? 'Affiliation' : '所属单位'}：</strong>华南理工大学化学与化工学院 · 广东省绿色化学产品技术重点实验室</p>
              <p><strong>${this.currentLang === 'en' ? 'Issue Date' : '签发日期'}：</strong>${new Date().toLocaleDateString()}</p>
            </div>
            <div class="cert-footer">
              <div class="cert-stamp">${this.currentLang === 'en' ? 'FINE CHEMICAL\nSAFETY PASS' : '精细化工团队\n安全准入合格'}</div>
              <div class="cert-sign">
                <span>${this.currentLang === 'en' ? 'Laboratory Director (PI): Prof. Xinya Zhang' : '实验室负责人（PI）：张心亚 教授'}</span>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn btn-primary" onclick="window.print()"><i class="fas fa-print"></i> ${this.currentLang === 'en' ? 'Print Certificate' : '打印准入凭证'}</button>
            <button class="btn btn-outline" onclick="safetyEngine.closeResultModal()">${this.currentLang === 'en' ? 'Review Answers' : '查看答卷详情'}</button>
          </div>
        </div>
      `;
    } else {
      const wrongCount = totalCount - correctCount;
      html = `
        <div class="exam-result-summary fail">
          <div class="result-icon-badge fail"><i class="fas fa-times-circle"></i></div>
          <h3>${this.currentLang === 'en' ? 'Passing Standard Not Met (Requires 100 pts)' : '未达到准入合格标准（要求 100 分满分）'}</h3>
          <p class="score-display">
            <strong>${this.studentName}</strong> (${this.studentId}): 
            ${this.currentLang === 'en' ? 'Your Score' : '当前得分'}：<strong>${this.score}</strong> / 100
          </p>
          <p class="result-lead">${this.currentLang === 'en' 
            ? `You answered ${correctCount} correctly and ${wrongCount} incorrectly. The laboratory enforces zero tolerance on basic safety habits. Please review the highlighted wrong answers, study the official regulations, and retake the test.` 
            : `您答对了 ${correctCount} 题，做错了 ${wrongCount} 题。实验室对日常安全习惯实行零容忍管理。系统已在答卷中逐题标红错误出处与解析，请认真研读后重新考核直至满分通过。`}</p>

          <div class="modal-actions">
            <button class="btn btn-primary" onclick="safetyEngine.closeResultModal()"><i class="fas fa-search"></i> ${this.currentLang === 'en' ? 'View Wrong Answers and Citations' : '立即查看错题与出处解析'}</button>
            <button class="btn btn-secondary" onclick="safetyEngine.resetExam(); safetyEngine.closeResultModal();"><i class="fas fa-redo"></i> ${this.currentLang === 'en' ? 'Retake Examination' : '重新答题考核'}</button>
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = html;
    modalEl.style.display = 'flex';
  }

  closeResultModal() {
    const modalEl = document.getElementById('examResultModal');
    if (modalEl) modalEl.style.display = 'none';
  }
}

// Global instance
window.safetyEngine = new SafetyExamEngine();
