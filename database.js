// ============================================================================
// ◈ OUTFIT PROMPT SYSTEM - 終極核心數據庫 (v8.2 Full Database — 飾品+情緒+光影強化)
// ============================================================================

window.OPS_DB = {
  MAKEUP: [
    // ── 經典與運動日常 ──
    { id:"m1", label:"台灣職棒啦啦隊妝", zh:"台灣職棒啦啦隊妝容，甜美活力的偶像笑容，眼下閃爍碎鑽高光，元氣蜜桃腮紅，水光晶瑩珊瑚唇，無瑕抗汗底妝", en:"Taiwanese baseball cheerleader makeup, sweet vibrant idol smile, sparkling under-eye diamond glitter, energetic peachy blush, glossy crystal coral lips, flawless sweat-proof base" },
    { id:"m2", label:"運動後微濕透氧妝", zh:"高強度運動後的微濕妝容，臉頰帶有自然發熱的紅暈，幾滴超寫實汗珠滑落臉頰，微暈染的光澤唇，充滿生命力的呼吸感膚質", en:"post-routine dewy makeup, cheeks flushed naturally from heat and exertion, hyper-realistic sweat beads rolling down cheek, slightly smudged glossy lips, vibrant breathing skin texture" },
    { id:"m3", label:"韓系女團打歌妝", zh:"韓系愛豆打歌服妝容，飽滿明亮的臥蠶，精緻上揚的貓眼線，漸層咬唇妝，極致反光的玻璃發光肌", en:"K-pop idol stage performance makeup, bright and full aegyo sal, precise sharp winged cat eyeliner, gradient bitten lips, extreme reflective glass skin" },
    { id:"m4", label: "美式校園活力妝", zh: "經典美式校園啦啦隊長妝容，自信挑眉，霧面立體修容，陽光親吻過的仿雀斑，飽滿的經典正紅霧面唇膏", en: "classic American varsity cheerleader makeup, confident arched brows, matte 3D contour, sun-kissed faux freckles, full classic matte red lips" },
    { id:"m5", label: "日曬元氣戶外妝", zh: "戶外陽光啦啦隊妝容，曬傷感大面積橘色腮紅橫跨鼻樑，健康透亮膚質，果汁感橘紅唇彩，自然毛流感野生眉", en: "outdoor sunny cheerleader makeup, sunburn-style large orange blush across the nose bridge, healthy translucent skin, juicy orange-red lip tint, natural bushy wild brows" },
    { id:"m6", label: "夜間球場霓虹妝", zh: "夜間體育場表演妝容，大顆粒星片亮片點綴於顴骨，在探照燈下產生強烈反光，極具舞台戲劇張力", en: "night stadium performance makeup, chunky star glitter embellished on cheekbones causing intense specular reflection under searchlights, highly dramatic stage tension" },
    
    // ── 專屬特效與寶石妝容 ──
    { id:"m7", label:"Gem 璀璨寶石妝", zh:"極致華麗的 Gem 寶石碎鑽妝容，眼周與顴骨鑲嵌微小的幻彩水鑽，底妝散發如精靈般的寶石光澤，強烈的鏡面高光反射", en:"ultra-gorgeous Gem rhinestone makeup, iridescent micro-crystals embedded around the eyes and cheekbones, fairy-like gemstone glowing skin base, intense specular highlight reflections" },
    { id:"m8", label:"人魚眼淚珍珠妝", zh:"眼下黏貼真實的細小天然珍珠，宛如人魚落淚的瞬間，搭配波光粼粼的偏光眼影與水潤透明唇釉，深海夢幻感", en:"tiny natural pearls glued under eyes like mermaid tears, shimmering iridescent polarized eyeshadow, clear glossy lip tint, deep sea dreamy vibe" },
    { id:"m9", label:"金箔點綴富貴妝", zh:"眼角與眉骨處隨意點綴著零碎的真實純金金箔，啞光高級感底妝，低調奢華的復古皇室氣場", en:"real pure gold leaf fragments randomly accented at eye corners and brow bone, high-end matte base, understated luxury vintage royal aura" },
    { id:"m10", label:"3D蝴蝶幻彩貼片", zh:"眼角兩側裝飾著立體的微小幻彩蝴蝶貼片，隨光線變換顏色，夢幻的精靈系立體彩妝", en:"3D miniature iridescent butterfly decals decorating eye corners, color-shifting under light, dreamy elven 3D makeup" },

    // ── 辦公室與都會日常 (OL / Clean Girl) ──
    { id:"m11", label:"現代時尚上班OL妝", zh:"現代時尚辦公室OL妝容，乾淨俐落的極簡內眼線，低調的奶茶色系眼影，霧面絲絨質感的豆沙色唇膏，知性專業且精緻", en:"modern stylish office OL makeup, clean minimal inner eyeliner, understated milk-tea tone eyeshadow, matte velvet rose-bean lip color, intellectual professional and refined" },
    { id:"m12", label:"白開水清透裸妝", zh:"極致清透的偽素顏白開水妝容，保留肌膚真實的微小瑕疵與毛孔紋理，無色高保濕潤唇膏，極簡自然感", en:"ultra-clear no-makeup makeup look, retaining real skin micro-imperfections and pore texture, clear high-moisture lip balm, minimal natural feel" },
    { id:"m13", label:"莫蘭迪冷調氣質妝", zh:"低飽和度的莫蘭迪灰冷色調妝容，灰棕色修容強調骨相，冷淡風的肉桂色唇彩，充滿距離感的高級知性美", en:"low-saturation Morandi cool-toned makeup, gray-brown contour emphasizing bone structure, cold cinnamon lip color, high-end intellectual beauty with a sense of distance" },
    { id:"m14", label:"法式慵懶微醺妝", zh:"法式女孩的慵懶妝容，沒有刻意邊界的暈染紅唇，微微凌亂的野生眉，臉頰帶有曬過太陽般的自然紅暈", en:"French girl lazy makeup, smudged red lips with no harsh boundaries, slightly messy wild brows, natural sun-kissed flush on cheeks" },
    { id:"m15", label:"日系通勤無辜妝", zh:"日系通勤妝容，強調飽滿柔軟的臥蠶，眼尾微微下垂營造無辜感，透明水光感的蜜桃色唇釉", en:"Japanese commuter makeup, emphasizing full soft aegyo sal, slightly downturned eyeliner for innocent look, sheer watery peach lip tint" },

    // ── 高階時尚與超模 (High Fashion / Editorial) ──
    { id:"m16", label:"90年代超模霧面妝", zh:"90年代經典超模妝容，全啞光無瑕底妝，強烈對比的深棕色唇線筆勾勒唇形，充滿力量感與氣場", en:"90s classic supermodel makeup, full matte flawless base, strongly contrasting dark brown lip liner defining lips, powerful and authoritative aura" },
    { id:"m17", label:"歐美截斷式修容妝", zh:"戲劇性的歐美 Cut-crease 截斷式眼妝，極致強烈的立體顴骨修容，濃密誇張的假睫毛，吃土色豐潤厚唇", en:"dramatic Western cut-crease eye makeup, extreme 3D cheekbone contour, thick exaggerated false lashes, plump nude-brown matte lips" },
    { id:"m18", label:"野生眉骨相立體妝", zh:"強調面部骨骼結構的立體妝容，根根分明且充滿毛流感的野生眉，幾乎沒有色彩僅靠光影塑造立體度", en:"bone-structure makeup emphasizing facial architecture, distinct brushed-up wild brows with strong hair texture, almost zero color using only light and shadow for volume" },
    { id:"m19", label:"雀斑加州陽光妝", zh:"跨越鼻樑的真實日曬雀斑，顴骨帶有強烈的金色高光，仿若剛在加州海灘衝浪後的健康小麥肌光澤", en:"realistic sun-baked freckles across the nose bridge, intense gold highlight on cheekbones, healthy tanned skin glow like just surfing at a California beach" },
    { id:"m20", label:"前衛幾何白線條妝", zh:"時裝週常見的前衛彩妝，眼部使用純白色眼線液畫出銳利的幾何線條，極簡卻具有強烈視覺衝擊力", en:"fashion week avant-garde makeup, sharp geometric lines drawn with pure white liquid eyeliner around the eyes, minimal yet carrying strong visual impact" },

    // ── 復古與年代感 (Vintage / Y2K) ──
    { id:"m21", label:"復古港風紅唇妝", zh:"80年代復古香港電影妝容，烏黑濃密的毛髮對比極致飽和的復古啞光正紅唇，半包圍式眼線，自帶柔光濾鏡感", en:"80s vintage Hong Kong cinematic makeup, dense black hair contrasting with extremely saturated retro matte red lips, semi-enclosed eyeliner, built-in soft-focus filter feel" },
    { id:"m22", label:"Y2K千禧幻彩霜妝", zh:"千禧年Y2K風格，眼皮大面積塗抹冰藍色或銀色的霜狀珠光眼影，果凍感透明唇彩，充滿千禧復古未來感", en:"millennium Y2K style, large area of frosted ice-blue or silver pearlescent cream eyeshadow, clear jelly lip gloss, retro-futuristic millennium vibe" },
    { id:"m23", label:"70s迪斯可亮片妝", zh:"70年代 Disco 派對妝，眼影採用大膽的對比色拼撞，眼下與顴骨撒滿誇張的彩色大亮片，復古狂歡氣息", en:"70s Disco party makeup, bold contrasting color-blocked eyeshadow, under-eyes and cheekbones dusted with exaggerated chunky colorful glitter, retro rave atmosphere" },
    { id:"m24", label:"古典東方丹鳳眼妝", zh:"極具東方韻味的古典妝容，細長上揚的丹鳳眼線，眼尾微抹櫻花粉色，柳葉細眉，婉約而神祕", en:"classical makeup with deep Oriental charm, elongated upward phoenix eyeliner, subtle cherry blossom pink at the outer corners, willow-leaf thin brows, elegant and mysterious" },
    { id:"m25", label:"瑪麗蓮夢露經典妝", zh:"好萊塢黃金時代經典妝容，標誌性的極致挑眉，深邃眼窩，飽滿正紅色豐唇與臉頰標誌性的性感黑痣", en:"Hollywood golden age classic makeup, iconic extreme arched brows, deep eye sockets, full classic red lips and iconic sensual beauty mark on the cheek" },

    // ── 情緒氛圍與病嬌感 (Emotional / Grunge) ──
    { id:"m26", label:"微醺凍傷氛圍妝", zh:"彷彿在雪地凍傷或微醺的真實紅暈，大面積莓果色腮紅橫跨臉頰與微紅的鼻尖，純欲且惹人憐愛", en:"drunk or frostbite atmosphere makeup, large berry blush across cheeks and slightly reddened nose tip, innocent sensual and arousing pity" },
    { id:"m27", label:"病嬌眼下泛紅妝", zh:"病嬌系妝容，眼下刻意暈染大面積的紅色系眼影，眼神帶有偏執與迷離，蒼白底妝對比強烈", en:"yandere style makeup, intentionally smudged large area of red eyeshadow under the eyes, paranoid and hazy gaze, strong contrast with pale base" },
    { id:"m28", label:"清冷破碎淚痕妝", zh:"剛哭過般的破碎感妝容，睫毛微濕結塊，臉頰上帶有兩道反光的真實淚痕，楚楚可憐的清冷氛圍", en:"fragile post-crying makeup, slightly wet clumped eyelashes, two reflective realistic tear streaks on cheeks, pitiful cold and fragile atmosphere" },
    { id:"m29", label:"哥德暗黑煙燻妝", zh:"暗黑哥德風格，極度深邃的黑色煙燻眼妝包裹整個眼眶，暗紫紅色或純黑色霧面唇膏，散發危險氣息", en:"dark gothic style, extremely deep black smokey eyes encompassing the whole orbit, dark purplish-red or pure black matte lips, emitting a dangerous aura" },
    { id:"m30", label:"黑化復仇女王妝", zh:"氣場全開的黑化妝容，銳利上揚的劍眉，深酒紅色唇彩，眼神如刀刃般冰冷銳利，不怒自威", en:"darkened revenge queen makeup, sharp upward sword brows, deep burgundy lip color, gaze cold and sharp as a blade, naturally authoritative" },
    { id:"m31", label:"楚楚可憐咬唇妝", zh:"嘴唇內部呈現深紅色漸層向外暈染變淡的咬唇妝，唇面帶有水潤光澤，彷彿剛被用力咬過，性感且脆弱", en:"pitiful bitten lip makeup, deep red gradient fading outward from the inner lip, watery glossy surface, looking as if just bitten hard, sensual and fragile" },

    // ── 科幻、賽博與未來 (Cyberpunk / Sci-Fi) ──
    { id:"m32", label:"賽博龐克霓虹眼線", zh:"賽博龐克風格，眼線採用螢光粉色或螢光綠色，在暗光或UV光下會發出強烈螢光，夜之城叛逆美學", en:"cyberpunk style, eyeliner using neon pink or neon green, emitting strong fluorescence under dark or UV light, Night City rebellious aesthetic" },
    { id:"m33", label:"未來感金屬高光妝", zh:"未來主義妝容，臉部高光使用液態銀色或液態金屬塗料，在光源下呈現機械般冰冷的反光質感", en:"futuristic makeup, face highlight using liquid silver or liquid metal paint, presenting a cold mechanical reflective texture under light sources" },
    { id:"m34", label:"仿生人極限未來妝", zh:"彷彿無機物的仿生人妝容，毫無血色的極致蒼白底妝，接縫處畫有極細的金屬分割線，完美但令人不安的對稱感", en:"inorganic android makeup, bloodless extremely pale base, ultra-fine metallic panel lines drawn at seams, perfect yet unsettling symmetry" },
    { id:"m35", label:"全息數據流光妝", zh:"臉頰兩側帶有彷彿全息投影般的閃爍數據條碼彩繪，微光折射出藍紫色調，駭客任務的數位美感", en:"holographic data stream makeup, glowing data barcode face paint on cheeks like a hologram, refracting blue-purple tones, Matrix digital aesthetic" },
    { id:"m36", label:"宇宙星空暈染妝", zh:"眼部至太陽穴大面積暈染深邃的藏藍與紫羅蘭色，並點綴極細小的白色星點，宛如將整個銀河系畫在臉上", en:"universe starry sky blended makeup, deep navy and violet largely blended from eyes to temples, dotted with tiny white stars, like painting the galaxy on the face" },

    // ── 奇幻、精靈與特效 (Fantasy / Special FX) ──
    { id:"m37", label:"神聖天使光環妝", zh:"充滿神聖感的妝容，全臉散發溫暖的珍珠白柔光，眼窩與鼻頭帶有神聖的金色反光，不可侵犯的聖潔感", en:"divine angelic makeup, entire face radiating warm pearl-white soft glow, holy gold reflections on eye sockets and nose tip, inviolable holy feel" },
    { id:"m38", label:"吸血鬼伯爵血漿妝", zh:"萬聖節吸血鬼特效妝，蒼白底妝，嘴角殘留一抹極其逼真的暗紅色血漿痕跡，高貴與血腥的結合", en:"vampire count special FX makeup, pale base, a highly realistic streak of dark red blood trailing from the corner of the mouth, noble meets bloody" },
    { id:"m39", label:"冰雪女王霜凍妝", zh:"睫毛與眉毛上帶有逼真的白色霜凍結冰特效，冷藍色調的眼影與蒼白唇色，極寒氣候下的冰冷女王", en:"ice queen frost makeup, realistic white frost and ice crystal effects on eyelashes and eyebrows, cold blue eyeshadow and pale lips, freezing queen in extreme cold" },
    { id:"m40", label:"魅惑小惡魔特效妝", zh:"眼尾畫出尖銳的惡魔尾巴形狀眼線，眼下點綴一顆性感的紅色淚痣，調皮且帶著致命誘惑力", en:"seductive little demon FX makeup, eyeliner ending in a sharp demon tail shape, a sensual red beauty mark under the eye, playful with fatal temptation" },
    { id:"m41", label:"奇幻精靈落淚妝", zh:"精靈系妝容，耳朵邊緣帶有微閃的金粉，眼下至臉頰有不規則的閃銀色落淚軌跡，森林仙境的神秘存在", en:"fantasy elven tear makeup, ear edges dusted with shimmering gold powder, irregular sparkling silver tear tracks from eyes to cheeks, forest wonderland mysterious presence" },

    // ── 色彩大膽與藝術感 (Colorful / Artistic) ──
    { id:"m42", label:"芭比多巴胺粉色妝", zh:"極致飽和的多巴胺穿搭專屬妝容，眼影、腮紅到唇膏全採用高亮度的芭比熱粉色，視覺衝擊力強烈", en:"Barbie dopamine pink makeup, eyeshadow, blush, and lips all using high-brightness hot Barbie pink, intense visual impact for dopamine dressing" },
    { id:"m43", label:"迷幻油畫色彩妝", zh:"如印象派油畫般的藝術彩繪妝，眼周大膽混搭橘色、湖水綠與明黃色，色彩邊界如水彩般柔和交融", en:"psychedelic oil painting makeup, bold mix of orange, teal, and bright yellow around the eyes, color boundaries softly blending like watercolors" },
    { id:"m44", label:"落日餘暉漸層眼妝", zh:"眼妝模仿夏日黃昏的漸層，從內眼角的明黃色過渡到眼尾的深橘紅與紫灰色，極具電影場景的浪漫氛圍", en:"sunset gradient eyeshadow makeup, imitating summer dusk, transitioning from bright yellow at inner corners to deep orange-red and purple-gray at outer corners, highly cinematic romantic vibe" },
    { id:"m45", label:"水墨暈染中國風妝", zh:"寫意水墨畫風格，眼尾帶有彷彿毛筆一筆帶過的黑色暈染，留白極多，充滿東方禪意的空靈感", en:"ink wash Chinese style makeup, freehand brushwork style, outer eyes featuring black smudging like a single brush stroke, heavy negative space, Zen-like ethereal emptiness" },

    // ── 特殊質感與小眾審美 (Niche / Textural) ──
    { id:"m46", label:"欲態水光玻璃唇妝", zh:"妝容焦點全在嘴唇，使用極限高反光的透明唇蜜，打造如糖葫蘆外層糖衣般的玻璃唇，讓人忍不住想親吻", en:"sensual water-light glass lip makeup, focus entirely on lips, using extreme high-reflection clear gloss to create glass lips like tanghulu candy coating, irresistible kissable look" },
    { id:"m47", label:"極致濃睫洋娃娃妝", zh:"刻意強調上下睫毛的存在感，畫出如60年代Twiggy般根根分明且誇張的下睫毛，復古洋娃娃的驚悚甜美", en:"extreme thick lashes doll makeup, intentionally emphasizing upper and lower lashes, distinct and exaggerated lower lashes like 60s Twiggy, retro doll's eerie sweetness" },
    { id:"m48", label:"無性別中性清冷妝", zh:"打破性別界限的中性妝容，加深眼部輪廓的陰影，模糊唇線邊界，整體呈現雌雄莫辨的清冷高級感", en:"genderless androgynous cold makeup, breaking gender boundaries, deepening eye contour shadows, blurred lip lines, presenting an ambiguous cold high-end feel" },
    { id:"m49", label:"櫻花粉嫩幼態妝", zh:"極度減齡的幼態妝容，縮短中庭視覺比例，大面積使用低飽和櫻花粉色橫掃面中，看起來宛如嬰兒般稚嫩", en:"cherry blossom youthful baby-face makeup, visually shortening the mid-face, large sweeping of low-saturation sakura pink across the central face, looking innocent and tender like a baby" },
    { id:"m50", label:"悲傷彩色流淚妝", zh:"眼下帶著刻意畫上的彩色眼淚軌跡，如霓虹溶解在臉上的悲傷，具有極強的MV敘事感與前衛藝術性", en:"sad colorful crying makeup, intentionally drawn colorful tear tracks under the eyes, like neon melting into sadness on the face, strong music video narrative and avant-garde artistry" },
    // ── AI 智能擴寫：高密度細節妝容 (High-Density Detail Makeup) ──
    { 
      id: "m51", 
      label: "極簡白開水清透妝", 
      zh: "極簡白開水清透妝，極簡自然風格，透亮水光底妝保留真實肌膚紋理，隱形毛孔但散發自然光澤，中性灰褐色眼影輕微修飾眼型，捲翹且根根分明的自然睫毛，向上梳理的毛流感野生眉，與肌膚完美融合的微弱膏狀腮紅，透明高反光護唇油，毫不費力、健康、水潤發光的妝容", 
      en: "clean girl aesthetic makeup, ultra-minimalist natural style, sheer dewy foundation revealing real skin texture, invisible pores but natural glow, neutral taupe eyeshadow contouring eye shape, curled natural lashes without clumps, brushed-up feathery clear eyebrows, subtle cream blush blending into skin, clear high-shine lip oil, effortless, healthy, hydrated glowing makeup" 
    },
    { 
      id: "m52", 
      label: "韓系C位水光愛豆妝", 
      zh: "韓系C位水光愛豆妝，舞台魅惑風格，無瑕冷白皮爆水光底妝，極致細膩的高光打在鼻尖與眉骨，微珠光粉橘色漸層眼影，存在感極強的飽滿臥蠶，倒三角形假睫毛放大雙眼，精緻平挑淺棕眉，眼下橫掃的蜜桃腮紅，鏡面果汁感漸層唇釉，閃耀、迷人、極具舞台吸引力的妝容", 
      en: "K-pop center stage water-light makeup, alluring idol style, flawless cool-toned explosive glass skin base, ultra-fine highlighter on nose tip and brow bone, micro-shimmer pink-orange gradient eyeshadow, highly emphasized plump aegyo-sal, inverted triangle false lashes enlarging eyes, precise straight-arched light brown brows, peach blush swept across under-eyes, mirror-like juicy gradient lip tint, sparkling, captivating, highly stage-attractive makeup" 
    },
    { 
      id: "m53", 
      label: "好萊塢復古經典紅唇", 
      zh: "好萊塢復古經典妝容，優雅老錢風，全霧面絲絨無瑕底妝，極致平整的肌膚紋理，大地色深邃截斷式眼影，眼尾上揚的銳利黑眼線，濃密羽毛感假睫毛，標誌性高挑俐落挑眉，修飾顴骨的高級灰棕修容，邊界清晰的極致飽和正紅色霧面唇膏，高貴、復古、電影女主角妝容", 
      en: "classic Hollywood retro makeup, elegant old money style, full matte velvet flawless base, extremely smooth skin texture, earth-toned deep cut-crease eyeshadow, sharp winged black eyeliner, dense feathery false lashes, iconic sharp highly-arched brows, high-end taupe contour enhancing cheekbones, sharp-edged highly saturated classic red matte lips, noble, vintage, movie heroine makeup" 
    },
    { 
      id: "m54", 
      label: "日系微醺宿醉氛圍妝", 
      zh: "日系微醺宿醉妝，純欲無辜風格，微霧光奶油肌底妝，帶有一點真實的雀斑細節，暖粉色眼影大面積暈染至眼眶外，下垂的無辜眼線，柔軟稀疏的下睫毛，無邊界的柔和淺褐眉，橫跨鼻樑的明顯微醺紅色腮紅，水潤欲滴的櫻桃粉色唇蜜，惹人憐愛、性感、微醺氛圍妝容", 
      en: "Japanese Igari hangover makeup, innocent sensual style, soft-matte cream base makeup, featuring realistic micro-freckles, warm pink eyeshadow widely blended outside the orbit, downturned innocent eyeliner, soft sparse lower lashes, borderless soft light brown brows, prominent flushed red blush crossing the nose bridge, dripping wet cherry-pink lip gloss, endearing, sexy, tipsy mood makeup" 
    },
    { 
      id: "m55", 
      label: "千禧Y2K冰藍金屬妝", 
      zh: "千禧Y2K風格妝容，復古未來派，輕薄霧面底妝搭配強烈顴骨高光，大面積塗抹的冰藍色霜狀金屬眼影，眼頭點綴銀白色閃粉，濃密誇張的蜘蛛腳睫毛，極細的90年代復古挑眉，冷色調紫粉色腮紅，帶有深色唇線邊界的透明果凍唇，叛逆、科技感、千禧年流行妝容", 
      en: "millennium Y2K style makeup, retro-futuristic, lightweight matte base with intense cheekbone highlight, large application of ice-blue metallic cream eyeshadow, silver-white glitter dotted at inner corners, thick exaggerated spidery lashes, ultra-thin 90s skinny arched brows, cool-toned purple-pink blush, clear jelly lips with dark lip liner boundary, rebellious, tech-vibe, millennium pop makeup" 
    },
    { 
      id: "m56", 
      label: "清冷疏離灰粉玫瑰妝", 
      zh: "清冷疏離灰粉妝，高級厭世風格，半啞光素肌底妝，低飽和灰粉色眼影深邃眼窩，模糊邊界的內眼線，纖長但不濃密的自然睫毛，帶有毛流感的冷灰色野生眉，大面積暈染的收斂色玫瑰腮紅，低飽和度的霧面枯玫瑰唇泥，知性、距離感、高級定製妝容", 
      en: "cold alienated dusty rose makeup, high-end resting bitch face style, semi-matte bare-skin base, low-saturation dusty pink eyeshadow deepening the sockets, blurred inner eyeliner, lengthening but sparse natural lashes, cool-gray wild brows with hair-like strokes, widely blended contouring rose blush, low-saturation matte dead-rose lip mud, intellectual, distant, haute couture makeup" 
    },
    { 
      id: "m57", 
      label: "賽博龐克霓虹光影妝", 
      zh: "賽博龐克霓虹妝，夜之城科幻風格，零瑕疵仿生人光澤底妝，眼下植入微小的全息反光亮片，螢光粉與青藍色撞色眼影，極具幾何切割感的鋒利眼線，螢光色睫毛膏點綴，機械感銳利劍眉，帶有偏光折射的立體腮紅，金屬質感的紫黑色反光唇彩，前衛、未來感、科幻電影妝容", 
      en: "cyberpunk neon makeup, Night City sci-fi style, zero-flaw android glowing base, holographic reflective micro-sequins implanted under eyes, neon pink and cyan color-blocking eyeshadow, sharp geometrically cut eyeliner, neon mascara accents, mechanical sharp sword brows, 3D blush with polarized refraction, metallic purple-black reflective lip gloss, avant-garde, futuristic, sci-fi movie makeup" 
    },
    { 
      id: "m58", 
      label: "泰式混血立體野生妝", 
      zh: "泰式混血立體妝，深邃熱帶風格，高遮瑕啞光小麥色底妝，極強的骨相修容與立體鼻影，大地橘棕色全包式暈染眼影，上揚濃黑眼線，誇張濃密且極度捲翹的混血感假睫毛，根根直立的濃密黑棕色野生眉，太陽穴延伸至顴骨的古銅色腮紅，豐厚飽滿的奶茶棕色絲絨唇，熱情、混血感、高立體度妝容", 
      en: "Thai-style mixed feature sculpted makeup, deep tropical style, high-coverage matte tanned base makeup, extremely strong bone contouring and nose shadow, earth-orange-brown fully enclosed blended eyeshadow, winged bold black eyeliner, exaggerated thick and extremely curled mixed-blood false lashes, dense black-brown wild brows standing straight up, bronze blush extending from temples to cheekbones, plump milk-tea brown velvet lips, passionate, Eurasian-vibe, highly sculpted makeup" 
    },
    { 
      id: "m59", 
      label: "歐美截斷式辣妹深邃妝", 
      zh: "歐美截斷式辣妹妝，IG網紅風格，極致無瑕的全覆蓋霧面底妝，高對比的明暗修容，極其銳利的 Cut-Crease 截斷式深邃眼妝，濃黑的戲劇性貓眼線，濃密且極端纖長的戲劇化假睫毛，邊緣極度乾淨的漸層挑眉，明顯的歐美提亮高光，裸色深邊界豐唇蜜，強勢、性感、極致精緻妝容", 
      en: "Western cut-crease baddie makeup, IG influencer style, extreme flawless full-coverage matte base, high-contrast light and dark contouring, extremely sharp deep cut-crease eyeshadow, bold dramatic cat eyeliner, thick and extremely long dramatic false lashes, gradient arched brows with extremely clean edges, obvious Western brightening highlight, nude plump lip gloss with dark lined boundary, fierce, sexy, ultra-refined makeup" 
    },
    { 
      id: "m60", 
      label: "破碎感哭紅眼眶妝", 
      zh: "破碎感哭紅眼妝，情緒電影風格，極度通透帶有真實瑕疵的蒼白底妝，無高光，眼下與眼尾大面積暈染真實的微紅血絲感眼影，無眼線，睫毛因為沾濕而微微結塊，微微下垂的柔弱眉形，鼻頭與臉頰帶有些微凍傷或哭過的紅暈，邊界模糊的微亮水潤透明唇，脆弱、敘事感、引人憐愛的妝容", 
      en: "shattered post-cry red-rimmed makeup, emotional cinematic style, extremely transparent pale base revealing real flaws, no highlight, realistic reddish bloodshot-like eyeshadow largely blended under and around the outer eyes, no eyeliner, eyelashes slightly clumped as if wet, slightly downturned fragile brow shape, tip of nose and cheeks showing slight redness from crying or frostbite, blurred-edge slightly shiny watery clear lips, fragile, narrative, pity-arousing makeup" 
    },
    { 
      id: "m61", 
      label: "法式慵懶浪漫紅唇妝", 
      zh: "法式慵懶浪漫妝，巴黎女孩風格，保留肌膚質感的自然微光底妝，眼部僅用陰影色加深輪廓不見明顯眼影，極細且隨意的內眼線，輕刷的自然捲翹睫毛，未經刻意修剪的野生雜亂眉，如同剛運動完的自然血色腮紅，邊界隨性暈染的經典法式正紅霧面唇，慵懶、自信、毫不費力的優雅妝容", 
      en: "French lazy romantic makeup, Parisian girl style, natural soft-glow base preserving skin texture, eyes deepened with contour shade only without obvious eyeshadow, ultra-fine and casual inner eyeliner, lightly brushed naturally curled lashes, unplucked wild messy brows, natural blood-color blush like just finished exercising, classic French matte red lips with casually smudged edges, lazy, confident, effortlessly elegant makeup" 
    },
    { 
      id: "m62", 
      label: "陽光親吻加州雀斑妝", 
      zh: "陽光親吻加州妝，海灘度假風格，帶有強烈健康光澤的古銅色底妝，橫跨鼻樑的高密度真實感仿真雀斑，暖金色眼影點綴眼皮中央，不畫眼線僅強調深邃眼窩，根根分明的自然睫毛，陽光漂白過的淺棕色毛流眉，大面積的曬傷感橘棕色腮紅，水光感豐潤蜜桃唇，陽光、健康、戶外活力的妝容", 
      en: "sun-kissed California makeup, beach vacation style, bronzed base makeup with intense healthy glow, high-density realistic faux freckles across the nose bridge, warm gold eyeshadow dotted in the center of the lids, no eyeliner just emphasizing deep sockets, distinct natural lashes, sun-bleached light brown feathery brows, large area of sunburned orange-brown blush, watery plump peach lips, sunny, healthy, outdoor vibrant makeup" 
    },
    { 
      id: "m63", 
      label: "運動後心機微濕妝", 
      zh: "運動後心機微濕妝，健身房氧氣女孩風格，極度輕薄防汗的微光底妝，額頭與鼻尖帶有極其逼真的微細汗珠反光，無眼影僅用透明亮澤膏打底，無眼線，防暈染的自然捲翹睫毛，野生毛流眉帶有微濕結塊感，臉頰透出真實運動後的血液循環潮紅，自然微張的粉潤呼吸唇，充滿生命力、微濕、純欲健康的妝容", 
      en: "post-workout dewy glow makeup, gym oxygen girl style, extremely sheer sweat-proof soft-glow base, forehead and nose tip featuring extremely realistic micro-sweat bead reflections, no eyeshadow using only clear gloss primer, no eyeliner, smudge-proof naturally curled lashes, wild feathery brows with slightly wet clumped texture, cheeks showing real post-exercise blood circulation flush, naturally parted pink breathing lips, full of vitality, slightly wet, innocent-healthy makeup" 
    },
    { 
      id: "m64", 
      label: "純欲水光琉璃嘟嘟唇妝", 
      zh: "純欲水光琉璃妝，甜美誘惑風格，白淨透亮的奶油肌底妝，眼部極簡留白，僅用珠光輕掃臥蠶，下垂狗狗眼線，清純的纖長睫毛，淺色柔和彎眉，微弱的低飽和粉色腮紅，極致高反光的超厚塗透明唇蜜，打造如糖葫蘆般的立體琉璃嘟嘟唇，晶瑩剔透、想讓人親吻的純欲妝容", 
      en: "innocent lust glass plump lip makeup, sweet seductive style, pure white translucent cream base, eyes kept minimal with negative space, only sweeping pearl shimmer on aegyo-sal, downturned puppy eyeliner, innocent lengthening lashes, light soft curved brows, subtle low-saturation pink blush, extreme high-reflection over-applied clear lip gloss, creating 3D glass plump lips like tanghulu candy coating, crystal clear, kissable innocent-lust makeup" 
    },
    { 
      id: "m65", 
      label: "哥德暗黑煙燻惡女妝", 
      zh: "哥德暗黑煙燻妝，搖滾惡女風格，毫無血色的極端蒼白啞光底妝，極度深邃的全包圍式黑色暈染煙燻眼妝，延伸至眼尾的狂野黑眼線，濃密且具攻擊性的下睫毛，極細且高挑的黑色鋒利眉，臉頰深陷的灰黑色修容，如中毒般的深紫黑色霧面唇膏，危險、致命、極具攻擊性的暗黑妝容", 
      en: "dark gothic smokey makeup, rock baddie style, bloodless extreme pale matte base, extremely deep fully enclosed black smudged smokey eyes, wild black eyeliner extending to the outer corners, thick and aggressive lower lashes, ultra-thin and highly arched sharp black brows, sunken cheek gray-black contour, poisoned-like deep purple-black matte lips, dangerous, fatal, highly aggressive dark makeup" 
    },
    { 
      id: "m66", 
      label: "精靈系碎鑽落淚妝", 
      zh: "精靈系碎鑽落淚妝，奇幻仙境風格，閃爍著珍珠冷光的通透底妝，眼皮大面積暈染夢幻紫粉色，眼下至臉頰黏貼真實的不規則立體碎鑽與細小亮片，模擬冰晶落淚軌跡，極長且捲翹的白色或淺金色假睫毛，透明感極強的淺色羽毛眉，粉藍色偏光高光打在蘋果肌，閃耀星鑽光澤的透明玻璃唇，空靈、夢幻、非人類的仙氣妝容", 
      en: "ethereal elven diamond tear makeup, fantasy wonderland style, translucent base shimmering with pearl cold light, lids widely blended with dreamy purple-pink, realistic irregular 3D crushed diamonds and micro-sequins glued from under-eyes to cheeks, simulating ice crystal tear tracks, extremely long curled white or light gold false lashes, highly transparent light-colored feathery brows, pink-blue polarized highlight on apple cheeks, clear glass lips sparkling with starlight, ethereal, dreamy, non-human fairy makeup" 
    },
    { 
      id: "m67", 
      label: "90年代超模全霧面妝", 
      zh: "90年代超模妝，極致復古高級風格，零反光的極致全霧面粉底，眼窩使用冷灰色深邃暈染，模糊的炭黑色眼線，不刻意夾翹的濃密黑睫毛，強調毛流感且根根分明的野生英氣眉，極度強調顴骨下方的強烈修容，使用深棕色唇線筆勾勒邊界，搭配裸棕色全啞光唇膏，充滿力量感、冷酷、極致立體的骨相妝容", 
      en: "90s supermodel makeup, extreme retro high-end style, zero-reflection extreme full matte foundation, eye sockets deeply blended with cool gray, blurred charcoal eyeliner, uncurled thick black lashes, wild heroic brows emphasizing hair strokes and distinctness, extreme contouring intensely highlighting under the cheekbones, dark brown lip liner outlining borders, paired with nude-brown full matte lipstick, full of power, ruthless, extremely sculpted bone-structure makeup" 
    },
    { 
      id: "m68", 
      label: "溫柔知性辦公室通勤妝", 
      zh: "溫柔知性通勤妝，現代職場OL風格，服貼持久的微霧面底妝，低調不浮誇的香檳金與大地色眼影，緊貼睫毛根部的深棕色內眼線，自然纖長但不結塊的睫毛，修剪整齊的柔和標準眉，提升氣色的杏桃色淡腮紅，絲絨質感的豆沙色或乾燥玫瑰色唇彩，專業、幹練、無攻擊性的親和妝容", 
      en: "soft intellectual commuter makeup, modern workplace OL style, well-adhering long-lasting soft-matte base, understated unexaggerated champagne gold and earth-tone eyeshadow, deep brown inner eyeliner close to the lash root, natural lengthening clump-free lashes, neatly trimmed soft standard brows, pale apricot blush enhancing complexion, velvet texture dusty rose or dried rose lip color, professional, competent, non-aggressive approachable makeup" 
    },
    { 
      id: "m69", 
      label: "冬季雪地清冷凍傷妝", 
      zh: "冬季雪地凍傷妝，極寒清冷風格，冷白皮清透底妝，眉毛與睫毛上沾染著逼真的細小白色冰霜，眼周帶有一圈淡淡的冷藍色調眼影，大面積的莓果色腮紅橫掃鼻尖與雙頰邊緣，模擬真實的凍傷紅暈，微光且帶有冷調的透明淡粉色唇彩，清冷、孤獨、充滿雪地電影氛圍的妝容", 
      en: "winter snowy frostbite makeup, extreme cold style, cool-white clear base makeup, eyebrows and eyelashes tainted with realistic micro white frost, eyes surrounded by a faint cool-blue toned eyeshadow, large berry-colored blush swept across nose tip and cheek edges, simulating realistic frostbite flush, subtle-glow cool-toned clear pale pink lip color, cold, lonely, makeup full of snowy cinematic vibe" 
    },
    { 
      id: "m70", 
      label: "多巴胺元氣果汁妝", 
      zh: "多巴胺元氣果汁妝，極致色彩女團風格，透亮且白皙的光澤底妝，眼妝使用大膽的高明度亮黃色與橘紅色漸層，眼尾畫出俏皮的彩色眼線，纖長捲翹的太陽花睫毛，淺色明亮的平眉，極其顯色的西柚橘色大面積打在蘋果肌最高處，如果汁爆漿般的水潤亮橘紅玻璃唇，極度歡樂、高飽和度、充滿夏日活力的妝容", 
      en: "dopamine energetic juicy makeup, extreme color idol style, clear and fair glowing base, eyes using bold high-brightness bright yellow and orange-red gradient, playful colored eyeliner at the outer corners, lengthening curled sunflower lashes, light-colored bright straight brows, highly pigmented grapefruit-orange massively applied on the highest point of apple cheeks, watery bright orange-red glass lips like bursting juice, extremely joyful, high-saturation, full of summer energy makeup" 
    },
    { 
      id: "m71", 
      label: "液態金屬未來仿生妝", 
      zh: "液態金屬未來妝，仿生人科幻風格，如陶瓷般毫無瑕疵的無血色底妝，眼皮上大面積塗抹流動感極強的液態銀色眼影，極致銳利的幾何形狀眼線，沒有明顯睫毛，被完全遮蓋或漂白的眉毛，顴骨處使用液態水銀塗料作為極端高光，帶有金屬光澤的冷銀色唇彩，無機物、冷酷、極具未來美學的妝容", 
      en: "liquid metal futuristic makeup, android sci-fi style, ceramic-like flawless bloodless base, lids widely painted with highly fluid liquid silver eyeshadow, extremely sharp geometric eyeliner, no obvious eyelashes, completely concealed or bleached eyebrows, liquid mercury paint used as extreme highlight on cheekbones, cool silver lip color with metallic luster, inorganic, ruthless, makeup with extreme future aesthetics" 
    },
    { 
      id: "m72", 
      label: "復古港風柔光濾鏡妝", 
      zh: "復古港風柔光妝，王家衛電影風格，自帶朦朧柔焦感的啞光偏黃底妝，強調眼眶深邃度的大地色微煙燻，半包圍式微粗黑眼線，烏黑濃密的野生自然睫毛，毛髮濃密且帶有英氣的濃黑挑眉，修飾下顎線的立體修容，極具風情的暗紅色或磚紅色啞光豐唇，充滿故事感、迷離、極致東方復古的妝容", 
      en: "vintage Hong Kong soft-focus makeup, Wong Kar-wai cinematic style, matte slightly yellow base with built-in hazy soft-focus feel, earth-tone soft smokey emphasizing orbit depth, semi-enclosed slightly thick black eyeliner, jet-black dense wild natural lashes, dense black arched brows with heroic spirit, 3D contour shaping the jawline, highly charming dark red or brick-red matte plump lips, full of storytelling, hazy, ultimate Oriental retro makeup" 
    },
    { 
      id: "m73", 
      label: "慵懶剛睡醒迷離妝", 
      zh: "慵懶剛睡醒妝，私密居家風格，幾乎素顏的極輕薄透明底妝，保留微微的黑眼圈與眼袋細節，完全不畫眼線，未夾翹的自然下垂睫毛，未經打理的微亂毛茸茸眉毛，臉頰剛從枕頭上離開的自然溫熱微紅，沒有明顯唇線邊界的乾燥自然唇色，極度放鬆、私密、毫無防備的真實感妝容", 
      en: "morning bedhead hazy makeup, intimate home style, almost bare-skin ultra-sheer clear base, retaining slight dark circles and eye bag details, absolutely no eyeliner, uncurled natural drooping lashes, unkempt slightly messy fuzzy brows, natural warm redness on cheeks as if just leaving the pillow, dry natural lip color without obvious lip line boundaries, extremely relaxed, intimate, unguarded realistic makeup" 
    },
    { 
      id: "m74", 
      label: "舞台強光大閃片女團妝", 
      zh: "舞台強光閃片妝，極致打歌服風格，抗強光與流汗的超持久高遮瑕底妝，眼皮中央與眼下點綴著肉眼可見的超大顆粒七彩閃片，在強光下產生極限爆閃折射，極度飛揚的黑色粗眼線，誇張的單簇仙子假睫毛，清晰鋒利的染淺色眉，高亮度的強烈粉色腮紅，如同鏡面般的高反光果凍唇彩，極度閃耀、華麗、專為舞台探照燈設計的妝容", 
      en: "stage light chunky glitter makeup, extreme performance style, anti-glare and sweat-proof ultra-long-lasting high-coverage base, center of lids and under-eyes dotted with visible ultra-large chunky iridescent glitter, producing extreme explosive refraction under strong light, extremely winged thick black eyeliner, exaggerated individual fairy false lashes, clear sharp light-dyed brows, high-brightness intense pink blush, mirror-like high-reflection jelly lip gloss, extremely sparkling, gorgeous, makeup designed specifically for stage searchlights" 
    },
    { 
      id: "m75", 
      label: "高訂秀場濕骨感眼妝", 
      zh: "高訂秀場濕眼妝，前衛時尚雜誌風格，完美無瑕且具有極高光澤感的玻璃肌底妝，眼皮塗滿透明唇蜜打造極致濕潤反光的「濕眼妝（Glossy Lids）」效果，無眼線，睫毛因為透明膠狀物而凝結成簇，被透明眉膠向上梳理定型的根根分明眉毛，顴骨帶有水潤光澤的高光，全透明裸色唇蜜，前衛、水感、極具藝術張力的妝容", 
      en: "haute couture glossy lid makeup, avant-garde fashion editorial style, flawless and highly glossy glass skin base, eyelids covered in clear lip gloss creating an extremely wet reflective 'Glossy Lids' effect, no eyeliner, eyelashes clumped together due to clear gel, distinct brows brushed up and set with clear brow gel, cheekbones featuring watery glossy highlight, fully transparent nude lip gloss, avant-garde, watery, makeup with extreme artistic tension" 
    },
    { 
      id: "m76", 
      label: "魅惑狐狸眼極致上揚妝", 
      zh: "魅惑狐狸眼妝，極致勾人風格，強調面部提拉感的光澤底妝，內眼角向下勾勒延伸，外眼角眼線極度向上且向外拉長，形成極具魅惑感的狐狸眼型（Siren Eyes），眼尾加長的濃密假睫毛，眉尾同樣向上飛揚的凌厲挑眉，顴骨上方的高位腮紅，裸棕色系豐厚且邊緣清晰的性感唇妝，極致性感、狡黠、視覺提拉的妝容", 
      en: "seductive foxy eye makeup, extremely alluring style, glowing base emphasizing facial lift, inner corners extended downwards, outer eyeliner pulled extremely upwards and outwards, forming a highly seductive Siren Eyes shape, dense false lashes elongated at the outer corners, sharp arched brows with tails also flying upwards, high-placement blush above the cheekbones, nude-brown plump and clear-edged sexy lip makeup, extremely sexy, sly, visually lifted makeup" 
    },
    { 
      id: "m77", 
      label: "蜜桃烏龍純真初戀妝", 
      zh: "蜜桃烏龍初戀妝，校園青春風格，透氣且帶有微絨毛感的無瑕粉底，眼影使用極低飽和度的杏桃色打底，隱形的棕色內眼線，捲翹且極度自然的纖長睫毛，毛茸茸沒有攻擊性的平緩淺色柔眉，大面積暈染於面中的蜜桃色氣色腮紅，水潤但不黏膩的蜜桃色唇膏，極度減齡、甜美、讓人心動的初戀氛圍妝容", 
      en: "peach oolong innocent first love makeup, campus youth style, breathable flawless foundation with a slight peach-fuzz feel, eyeshadow using extremely low-saturation apricot peach as a base, invisible brown inner eyeliner, curled and extremely natural lengthening lashes, fuzzy non-aggressive flat light-colored soft brows, peach complexion blush widely blended in the center of the face, hydrated but non-sticky peach lipstick, extremely age-reducing, sweet, heart-fluttering first love vibe makeup" 
    },
    { 
      id: "m78", 
      label: "玫瑰金落日餘暉漸層妝", 
      zh: "玫瑰金落日妝，浪漫華麗風格，閃耀著微弱金光的健康底妝，眼妝完美模擬黃昏落日，從內眼角的香檳金漸層過渡到眼尾的深玫瑰紅與暖紫棕色，閃粉細膩過渡，深棕色柔和眼線，濃密捲翹的紅棕色睫毛，帶有紅棕調的立體眉形，顴骨處的玫瑰金色高光，帶有細閃的玫瑰豆沙色豐潤唇，極致浪漫、色彩豐富、如油畫般的妝容", 
      en: "rose gold sunset gradient makeup, romantic gorgeous style, healthy base shining with faint gold light, eye makeup perfectly simulating dusk sunset, gradient transition from champagne gold at inner corners to deep rose red and warm purple-brown at outer corners, fine shimmer transition, soft dark brown eyeliner, thick curled red-brown lashes, 3D brow shape with red-brown tones, rose gold highlight on cheekbones, plump rose-bean lips with fine shimmer, extremely romantic, colorful, oil painting-like makeup" 
    },
    { 
      id: "m79", 
      label: "陶瓷洋娃娃精緻無瑕妝", 
      zh: "陶瓷洋娃娃妝，極致非現實精緻風格，宛如精美白瓷般毫無毛孔與瑕疵的極致霧面底妝，眼眶深邃且圓潤，上下眼線刻意放大雙眼，下眼瞼畫出明顯的假睫毛陰影（Twiggy風格），極度濃密捲翹的上下假睫毛，精緻無比的細長彎眉，蘋果肌正中央的圓形洋紅色腮紅，縮小唇部範圍的精緻櫻桃紅唇，詭異的完美、復古、極致洋娃娃妝容", 
      en: "porcelain doll flawless makeup, extreme unreal delicate style, extreme matte base with zero pores and flaws like exquisite white porcelain, deep and rounded eye sockets, upper and lower eyeliner deliberately enlarging eyes, lower eyelids drawn with obvious false lash shadows (Twiggy style), extremely thick and curled upper and lower false lashes, extremely delicate thin curved brows, perfectly round magenta blush in the exact center of apple cheeks, delicate cherry red lips with reduced lip area, eerily perfect, retro, ultimate doll makeup" 
    },
    { 
      id: "m80", 
      label: "狂野搖滾金屬煙燻妝", 
      zh: "狂野搖滾金屬妝，重金屬龐克風格，出油微光的頹廢感底妝，極度濃烈且邊界粗糙的黑色與深金屬色混合煙燻眼妝，眼線隨性暈染到下眼瞼，呈現剛哭過或狂歡後的斑駁感，厚重且微微結塊的蜘蛛睫毛，濃黑狂野的上挑劍眉，面部幾乎沒有腮紅，僅有凌厲的修容，擦著帶有金屬光澤的暗紅色或純黑色唇膏，狂野、叛逆、極具舞台爆發力的妝容", 
      en: "wild grunge metallic smokey makeup, heavy metal punk style, oily slight-glow decadent base, extremely intense black and deep metallic mixed smokey eyes with rough edges, eyeliner casually smudged to lower eyelids presenting a mottled look like post-cry or post-rave, heavy and slightly clumped spidery lashes, deep black wild highly-arched sword brows, almost no blush on the face, only sharp contouring, wearing dark red or pure black lipstick with metallic luster, wild, rebellious, makeup with extreme stage explosive power" 
    }
  ],

  FABRIC: [
    { id:"f1",  label:"米色細羅紋V領", zh:"米色細羅紋V領貼身短版上衣", en:"beige fine rib knit V-neck fitted crop top" },
    { id:"f2",  label:"白色薄burnout長袖", zh:"白色超薄burnout棉質貼身長袖上衣", en:"white ultra-thin burnout cotton long-sleeve fitted top" },
    { id:"f3",  label:"灰薄針織Polo長袖", zh:"灰色薄針織Polo領貼身長袖上衣", en:"gray thin knit polo collar long-sleeve fitted top slight sheen" },
    { id:"f4",  label:"深紅羅紋Henley長袖", zh:"深紅色羅紋Henley領貼身長袖上衣", en:"deep red rib knit Henley neckline long-sleeve form-fitting top" },
    { id:"f5",  label:"白色全蕾絲長袖罩衫", zh:"白色全身蕾絲長袖罩衫薄透貼身", en:"white all-over lace long-sleeve overlay sheer fitted top" },
    { id:"f6",  label:"深棕鉤針開放網眼", zh:"深棕色鉤針鏤空開放式網眼上衣", en:"dark brown open-stitch crochet cut-out top mesh pattern" },
    { id:"f7",  label:"深棕莫代爾bodycon裙", zh:"深棕色莫代爾彈性包臀超短裙", en:"dark brown modal jersey bodycon mini dress ultra-soft stretch" },
    { id:"f8",  label:"灰羅紋mock-neck連身裙", zh:"灰色羅紋高領長袖貼身中長連身裙",en:"gray rib knit mock neck long-sleeve form-fitting midi dress" },
    { id:"f9",  label:"軍綠莫代爾連身裙", zh:"軍綠色莫代爾無袖寬肩帶包臀中長裙", en:"army green modal sleeveless bodycon midi dress wide-strap" },
    { id:"f10", label:"鼠尾草綠深U羅紋背心", zh:"鼠尾草綠深U領羅紋貼身背心低胸露肩", en:"sage green deep-U ribbed tank top low-cut neckline exposed upper" },
    { id:"f11", label:"米白一字領off-shoulder", zh:"米白色一字領鬆緊針織off-shoulder上衣",en:"off-white off-shoulder elasticated neckline fitted knit top" },
    { id:"f12", label:"炭灰V領羅紋開衫", zh:"炭灰色V領羅紋針織開衫貼身長袖", en:"charcoal gray V-neck rib knit open cardigan form-fitting long-sleeve" },
    { id:"f13", label:"芥末黃羅紋Henley長袖", zh:"芥末黃Henley領羅紋貼身長袖上衣",en:"mustard yellow Henley neckline rib knit fitted long-sleeve top" },
    { id:"f14", label:"白色深U+灰肩帶外露", zh:"白色深U短版上衣灰色bralette肩帶外露分層", en:"white deep-U crop top with visible gray bralette strap layered" },
    { id:"f15", label:"灰網眼off-shoulder", zh:"灰色大開口蜂巢網眼off-shoulder超長袖毛衣，極薄透", en:"gray open-mesh honeycomb knit off-shoulder long-sleeve oversized sweater ultra-sheer loose drape" },
    { id:"f16", label:"奶白粗羅紋bardot毛衣", zh:"奶白色粗羅紋bardot一字領長袖毛衣，厚實結構感", en:"cream white thick chunky rib knit bardot off-shoulder long-sleeve sweater structured oversized sleeves" },
    { id:"f17", label:"摩卡棕Henley蕾絲接片", zh:"摩卡棕棉質短袖Henley上衣，棕色蕾絲拼接領口與下擺", en:"mocha brown cotton short-sleeve Henley top brown lace trim neckline and hem vintage sweet layered" },
    { id:"f18", label:"暗黑天鵝絨上衣", zh:"哥德式暗黑天鵝絨解構緊身衣服飾", en:"gothic dark velvet deconstructed tight top" },
    // ── Quiet Luxury / Old Money ────────────────────────────────────────────
    { id:"f19",  label:"奶油白絲緞馬甲", zh:"奶油白色100%真絲緞面馬甲，斜裁剪型，光滑冷感布料貼合軀幹，低調奢華的老錢美學", en:"cream white 100% silk satin slip vest, bias-cut silhouette, cool smooth fabric hugging torso, quiet luxury old money aesthetic" },
    { id:"f20",  label:"米色喀什米爾圓領衫", zh:"極細支數喀什米爾羊毛米色圓領毛衣，手感如雲，自然下垂的修身廓形，無聲的財富宣言", en:"ultra-fine cashmere beige crewneck sweater, cloud-like handfeel, naturally draping slim silhouette, silent wealth statement" },
    { id:"f21",  label:"駝色輕薄羊絨polo", zh:"駝色輕薄羊絨polo領長袖上衣，義大利工藝細節，極致柔滑光澤，低調極簡主義顛峰", en:"camel light cashmere polo long-sleeve top, Italian craftsmanship details, ultra-smooth sheen, minimalism peak" },
    { id:"f22",  label:"白色寬鬆亞麻襯衫", zh:"白色100%亞麻材質寬鬆版型男友風長袖襯衫，自然的皺褶紋理，度假風優雅從容", en:"white 100% linen oversized boyfriend fit long-sleeve shirt, natural wrinkle texture, vacation elegant ease" },
    { id:"f23",  label:"奶油鬆緊束腰針織衫", zh:"奶油色寬版V領針織毛衣，腰部可束進高腰褲製造法式tucked-in，垂墜感極好", en:"cream oversized V-neck knit sweater, tucked into high-waist pants French-style, excellent drape" },
    { id:"f24",  label:"象牙白細肩絲質上衣", zh:"象牙白真絲細肩帶合身上衣，液態金屬般的流光感，沿著身體輪廓如水流淌", en:"ivory silk thin-strap fitted top, liquid metallic flowing sheen, following body contours like flowing water" },
    { id:"f25",  label:"棕色細條紋職業襯衫", zh:"棕咖色與奶白相間細直條紋棉質職業襯衫，義大利式領口，精英知識分子氛圍", en:"brown and cream fine pinstripe cotton dress shirt, Italian collar, elite intellectual atmosphere" },
    { id:"f26",  label:"深海軍藍雙排扣西裝外套", zh:"深海軍藍色精紡羊毛雙排扣短版西裝外套，金色扣子，英倫老錢海洋俱樂部氣質", en:"deep navy fine wool double-breasted cropped blazer, gold buttons, British old money yacht club aesthetic" },
    { id:"f27",  label:"米白格紋Chanel風外套", zh:"米白色粗花呢格紋短版無領外套，鍊條腰帶點綴，法式精品屋復刻的時尚敘事", en:"off-white tweed check boucle collarless cropped jacket, chain belt accent, French couture house revival" },
    { id:"f28",  label:"奶油色絲絨修身背心", zh:"奶油色絲絨合身無袖背心，天鵝絨表面吸光柔和，製造低調的感官奢華質感", en:"cream velvet fitted sleeveless vest, soft light-absorbing velvet surface, understated sensual luxury" },
    // ── Coquette / Romantic / Bow ───────────────────────────────────────────
    { id:"f29",  label:"粉白蕾絲花邊corset上衣", zh:"粉白色多層蕾絲花邊的緊身corset造型上衣，胸前垂掛蕾絲花瓣細節，洛可可少女美學巔峰", en:"pink-white multi-layer lace ruffle corset-style top, dangling lace petal details at chest, Rococo girlish aesthetic peak" },
    { id:"f30",  label:"嬰兒粉緞帶蝴蝶結crop", zh:"嬰兒粉色緞帶大蝴蝶結裝飾的短版上衣，細肩帶，Coquette美學的標誌性視覺符號", en:"baby pink satin ribbon oversized bow crop top, thin straps, iconic visual symbol of coquette aesthetic" },
    { id:"f31",  label:"薰衣草色碎花泡泡袖", zh:"薰衣草紫色印花碎花圖案泡泡短袖上衣，浪漫甜膩的田園夢幻感，袖口縮束蓬起", en:"lavender ditsy floral print puff sleeve top, romantically sweet pastoral dreaminess, gathered cuffs puffing up" },
    { id:"f32",  label:"奶粉色開衩緞面吊帶裙上衣", zh:"奶粉色絲緞吊帶短版上衣，低胸V領以細緞帶蝴蝶結收束，法式情緒少女感", en:"milk pink silk satin cami crop, V-neckline tied with ribbon bow, French emotional girlish aesthetic" },
    { id:"f33",  label:"白色刺繡英格蘭領口上衣", zh:"白色棉質白色smocked刺繡蜂窩織法領口農家女孩短版上衣，vintage農場浪漫", en:"white cotton smocked embroidery honeycomb neckline peasant crop top, vintage farm romance" },
    { id:"f34",  label:"玫瑰粉羽毛邊緣背心", zh:"玫瑰粉色絨面針織背心，下擺與領口飾以真實羽毛邊緣裝飾，夢幻奢靡的少女幻想", en:"rose pink velvet knit vest trimmed with real feather edges at hem and neckline, dreamlike luxurious girlish fantasy" },
    { id:"f35",  label:"奶白色珍珠鈕扣開領上衣", zh:"奶白色絲質飄逸上衣，一排珍珠扣從領口至腰部，輕盈浪漫的優雅女人味", en:"off-white silk flowing blouse, row of pearl buttons from collar to waist, light romantic feminine elegance" },
    { id:"f36",  label:"淡粉色透視蕾絲長袖上衣", zh:"淡粉色全透視蕾絲貼花圖案長袖上衣，花卉貼花遮蓋關鍵部位，薄透與遮蔽的感官遊戲", en:"blush pink fully sheer lace appliqué long-sleeve top, floral motifs strategically covering, sensory play of sheer and conceal" },
    // ── Y2K / 2000s Revival ─────────────────────────────────────────────────
    { id:"f37",  label:"銀色亮面tube top", zh:"銀色金屬感亮面極短tube top，反光材質在光下如流動水銀，千禧年電子舞廳標誌", en:"silver metallic ultra-mini tube top, reflective material like flowing mercury under light, millennium club icon" },
    { id:"f38",  label:"千禧年彩虹條紋針織背心", zh:"Y2K風格彩虹多色橫條紋短版針織背心，露臍設計，充滿90至00年代的張揚活力感", en:"Y2K rainbow multi-color horizontal stripe knit crop vest, navel-baring, full of 90s-00s bold energy" },
    { id:"f39",  label:"低腰貼身印花短T", zh:"低腰緊身圖案印花短版T恤，搭配低腰底褲或低腰牛仔褲，千禧年低腰革命復刻", en:"low-rise fitted graphic print crop tee, worn with low-rise underwear or jeans, millennium low-rise revolution revival" },
    { id:"f40",  label:"粉藍色velour運動短外套", zh:"粉藍色天鵝絨velour拉鍊運動短外套，Juicy Couture式千禧年名媛度假廓形", en:"powder blue velour zip-up track jacket, Juicy Couture-style millennium socialite vacation silhouette" },
    { id:"f41",  label:"水晶鑲嵌透明PVC上衣", zh:"半透明PVC材質短版上衣，表面鑲嵌施華洛世奇水晶裝飾，千禧年太空未來感", en:"semi-transparent PVC crop top with Swarovski crystal embellishments, millennium space-age futurism" },
    { id:"f42",  label:"橘紅色細肩帶蕾絲內衣式上衣", zh:"橘紅色蕾絲貼身細肩帶上衣，內衣式外穿設計，Y2K最具挑釁性的穿搭符號", en:"orange-red lace fitted thin-strap lingerie-as-outerwear top, Y2K most provocative styling symbol" },
    { id:"f43",  label:"迷彩印花緊身運動上衣", zh:"軍事迷彩印花彈性合身運動背心上衣，2000年代嘻哈/都市風格的標誌性單品", en:"military camo print stretch fitted athletic crop, iconic 2000s hip-hop urban style staple" },
    { id:"f44",  label:"亮橘色緊身LOGO上衣", zh:"亮橘色緊身棉質短版LOGO印字T恤，品牌logomania精神，Y2K色彩爆炸美學", en:"bright orange fitted cotton crop logo tee, brand logomania spirit, Y2K color-explosion aesthetic" },
    // ── Dark Academia / Gothic ───────────────────────────────────────────────
    { id:"f45",  label:"深酒紅色格紋馬甲", zh:"深酒紅色與黑色格紋精紡羊毛馬甲，排扣設計，英倫文學社團的智識氛圍", en:"deep burgundy black plaid fine wool vest, button front, British literary society intellectual atmosphere" },
    { id:"f46",  label:"森林綠燈芯絨長袖", zh:"深森林綠色細燈芯絨質地長袖上衣，肘部有縫線細節，學院教授風格知識分子美感", en:"deep forest green fine corduroy long-sleeve top, elbow seam detail, academic professor intellectual aesthetic" },
    { id:"f47",  label:"深棕色蕾絲High Neck上衣", zh:"深棕色蕾絲材質高領維多利亞式上衣，複雜的蕾絲花紋覆蓋全身，暗黑學院派哥德浪漫", en:"dark brown lace Victorian high-neck top, intricate lace pattern all-over, dark academia gothic romance" },
    { id:"f48",  label:"黑色排扣Nehru領上衣", zh:"黑色Nehru立領排扣修身長袖上衣，異域神秘的智識感，暗黑神秘主義美學符號", en:"black Nehru mandarin collar button-front fitted long-sleeve top, exotic mysterious intellectual, dark mysticism symbol" },
    { id:"f49",  label:"暗綠色薄絨蝴蝶結領結上衣", zh:"暗草綠色細絨面上衣附搭配絲緞領結，學院制服感的精英符號學，優雅的智識階層感", en:"dark moss green fine velvet top with matching silk bow-tie, prep school elite semiotics, elegant intellectual class aesthetic" },
    { id:"f50",  label:"磚紅色羊毛紋理polo", zh:"磚紅色羊毛混紡質地polo領長袖上衣，飽和磚紅色調喚起秋日圖書館氛圍", en:"brick red wool-blend texture polo long-sleeve top, saturated brick hue evoking autumn library atmosphere" },
    // ── Streetwear / Urban ──────────────────────────────────────────────────
    { id:"f51",  label:"超大廓形印花帽T", zh:"超大廓形厚棉衛衣帽T，背部大型圖案印刷，袖口與帽口螺紋收束，街頭核心單品", en:"oversized heavyweight cotton graphic hoodie, large back print, ribbed cuffs and hood, core streetwear essential" },
    { id:"f52",  label:"洗水做舊短版帽T", zh:"短版洗水做舊感棉質帽T，暴露腰部線條，男友風衣感的街頭柔軟中性風格", en:"crop washed distressed cotton hoodie, exposing waist, boyfriend-feel soft streetwear androgynous style" },
    { id:"f53",  label:"機能風防水外套短版", zh:"短版機能防水夾克外套，多個功能口袋，防水拉鍊細節，Urban Outdoor機能主義美學", en:"crop technical waterproof jacket, multiple functional pockets, waterproof zip details, urban outdoor functionalism aesthetic" },
    { id:"f54",  label:"黑色緊身長袖壓印上衣", zh:"黑色彈性緊身長袖上衣，帶有立體壓印LOGO或圖形，如第二層肌膚的都市戰士造型", en:"black stretch fitted long-sleeve top with 3D embossed logo or graphic, second-skin urban warrior look" },
    { id:"f55",  label:"白色oversize衛衣厚版", zh:"純白色重磅棉質Oversize衛衣，寬鬆落肩，厚實的磅數如建築般有存在感", en:"pure white heavyweight cotton oversized crewneck sweatshirt, wide dropped shoulder, thick weight with architectural presence" },
    { id:"f56",  label:"彩色拼接風衣式夾克", zh:"多色幾何色塊拼接的短版風衣式夾克，Colorblock設計製造強烈的視覺衝擊感", en:"multi-color geometric colorblock cropped windbreaker jacket, bold visual impact through color blocking" },
    { id:"f57",  label:"黑白棋盤格合身長袖", zh:"黑白棋盤格圖案彈性合身長袖上衣，Mod風格的視覺振動效果", en:"black-white checkerboard pattern stretch fitted long-sleeve top, Mod-style optical vibration effect" },
    // ── Balletcore / Cottagecore ─────────────────────────────────────────────
    { id:"f58",  label:"白色芭蕾緞帶交叉上衣", zh:"純白色芭蕾舞者式緞帶交叉綁帶crop上衣，修長的頸部視覺效果，舞蹈教室的空靈美感", en:"pure white ballet dancer ribbon cross-lace crop top, lengthening neck visual effect, dance studio ethereal beauty" },
    { id:"f59",  label:"粉色芭蕾針織毛衣短版", zh:"粉色細羅紋針織短版套頭衫，仿芭蕾暖身服設計，袖口有拇指洞，舞蹈系少女日常", en:"pink fine rib knit crop pullover, ballet warm-up top inspired, thumbhole cuffs, dance-girl daily life" },
    { id:"f60",  label:"奶白色棉紗卷邊短版上衣", zh:"奶白色棉紗材質自然卷邊超短版上衣，Cottagecore田園仙子的輕盈日常", en:"off-white cotton gauze naturally rolled raw-hem ultra-crop top, cottagecore fairy light daily aesthetic" },
    { id:"f61",  label:"淡粉色蕾絲邊罩衫", zh:"淡粉色輕薄罩衫，全身布滿米色蕾絲刺繡裝飾，田園牧歌的浪漫女性主義美感", en:"blush pink sheer overlay blouse, all-over cream lace embroidery, pastoral romantic feminine aesthetic" },
    { id:"f62",  label:"草綠色荷葉邊短版上衣", zh:"草地綠色雪紡荷葉邊短版上衣，層層疊疊的荷葉邊如春日花圃，Cottagecore最浪漫的意象", en:"grass green chiffon tiered ruffle crop top, layered ruffles like spring garden, most romantic cottagecore imagery" },
    // ── Techwear / Futuristic ────────────────────────────────────────────────
    { id:"f63",  label:"賽博龐克反光科技布短版", zh:"銀色反光科技感布料短版夾克，可拆卸袖子，多個隱藏拉鍊口袋，賽博朋克戰術女孩", en:"silver reflective technical fabric crop jacket, removable sleeves, hidden zip pockets, cyberpunk tactical girl" },
    { id:"f64",  label:"黑色防水Taslan機能短版", zh:"黑色輕量Taslan防水布料短版機能外套，立體縫線結構，未來主義的幾何廓形", en:"black lightweight Taslan waterproof crop technical jacket, 3D seam construction, futuristic geometric silhouette" },
    { id:"f65",  label:"半透明網眼機能背心", zh:"半透明黑色網眼結構機能背心，與科技布料拼接，展示身體輪廓的未來軍事美學", en:"semi-transparent black mesh structural athletic vest, technical fabric splice, body-revealing futuristic military aesthetic" },
    { id:"f66",  label:"全身熱壓合縫科技上衣", zh:"無縫熱壓合縫黑色科技面料合身長袖上衣，沒有車縫線的光滑表面，仿生第二層皮膚", en:"seamless heat-bonded black technical fabric fitted long-sleeve, smooth surface with zero visible seams, bionic second skin" },
    { id:"f67",  label:"銀灰色立領機能拉鍊上衣", zh:"銀灰色高立領前拉鍊機能彈性上衣，荷葉形肩部線條設計，Matrix式近未來賽博美感", en:"silver-gray high stand-collar front-zip technical stretch top, flared shoulder line detail, Matrix-style near-future cyberpunk" },
    // ── Korean Fashion / K-fashion ───────────────────────────────────────────
    { id:"f68",  label:"韓版燈籠袖白色上衣", zh:"韓版白色燈籠袖縮束方形衫，方形領口設計，清新自然的韓系OL風格", en:"Korean white puff balloon sleeve square-neck blouse, square neckline, fresh natural Korean OL style" },
    { id:"f69",  label:"米色韓版寬版V領針織", zh:"米色寬鬆V領中長款針織開衫，袖子略長遮手背，首爾日常的慵懶知性風格", en:"beige oversized V-neck midi-length knit cardigan, slightly long sleeves past hands, Seoul daily lazy intellectual style" },
    { id:"f70",  label:"粉膚色絲質抽皺上衣", zh:"粉膚色輕盈絲質感抽皺短版上衣，韓系女生日常的溫柔清透感，透著光的薄透質感", en:"blush silk-feel shirred crop top, Korean girl daily gentle translucent feel, light-filtering sheer texture" },
    { id:"f71",  label:"白色細肩帶拼接蕾絲上衣", zh:"白色棉質細肩帶上衣，胸口部分拼接蕾絲透視，韓系女孩微露肌膚的甜美分寸感", en:"white cotton thin-strap top with lace sheer panel at chest, Korean-girl subtle skin-reveal sweet balance" },
    { id:"f72",  label:"韓系格紋學院背心", zh:"黑白或棕米色格紋短版學院風背心，套疊長袖白色襯衫，首爾學院風的標誌穿搭公式", en:"black-white or brown-beige check crop schoolgirl vest, layered over long-sleeve white shirt, Seoul preppy formula" },
    { id:"f73",  label:"莫蘭迪色澤罩衫外套", zh:"莫蘭迪灰藍或灰綠色輕薄罩衫式長版外套，朦朧色調韓系極簡主義日常", en:"Morandi gray-blue or gray-green sheer overshirt long jacket, misty tonal Korean minimalism daily" },
    { id:"f74",  label:"奶茶色針織polo短版", zh:"奶茶色細羅紋針織polo領短版上衣，首爾清潔女孩美學的核心基本款", en:"milk tea color fine rib knit polo crop top, core basic of Seoul clean girl aesthetic" },
    // ── Indie / Alternative / Grunge ────────────────────────────────────────
    { id:"f75",  label:"格紋法蘭絨襯衫外搭", zh:"經典紅黑或藍黑格紋法蘭絨重磅襯衫，敞開穿搭於緊身上衣外層，90年代Grunge美感", en:"classic red-black or blue-black plaid heavyweight flannel shirt, worn open over fitted top, 90s grunge aesthetic" },
    { id:"f76",  label:"黑色Ripped緊身長袖", zh:"黑色破損撕裂細節的緊身長袖上衣，肩部與手臂有刻意的破洞裂口，頹廢indie精神", en:"black ripped torn-detail fitted long-sleeve, intentional tears at shoulder and arm, decadent indie spirit" },
    { id:"f77",  label:"灰色樂隊印花寬版T", zh:"做舊磨舊感灰色搖滾樂隊印花寬版短版T恤，充滿故事感的磨損痕跡", en:"worn-washed gray band graphic oversized crop tee, story-rich distressed wear marks" },
    { id:"f78",  label:"黑色蕾絲半透明長袖", zh:"黑色蕾絲花紋半透明長袖上衣，哥德式indie風格，蕾絲肌膚的暗黑誘惑", en:"black lace semi-transparent long-sleeve top, gothic indie style, dark seduction of lace-on-skin" },
    // ── Coastal / Resort / Boho ──────────────────────────────────────────────
    { id:"f79",  label:"白色抽繩棉質罩衫", zh:"白色棉質輕盈罩衫，V領抽繩收束，海灘度假的最完美上衣，在陽光下透出絕美光感", en:"white cotton lightweight coverup blouse, V-neck drawstring gather, perfect beach vacation top, glowing in sunlight" },
    { id:"f80",  label:"珊瑚橘鉤針蕾絲short top", zh:"珊瑚橘色手工鉤針蕾絲材質短版上衣，Boho海灘美學，每個網眼都透著海風氣息", en:"coral orange handmade crochet lace crop top, boho beach aesthetic, ocean breeze through every open stitch" },
    { id:"f81",  label:"蔚藍橫條紋法式水手衫", zh:"蔚藍白橫條紋Breton式法式水手領條紋T恤，地中海沿岸休閒渡假的永恆優雅", en:"cobalt-white Breton stripe mariniere top, Mediterranean coastal casual vacation eternal elegance" },
    { id:"f82",  label:"大地色流蘇邊雪紡上衣", zh:"大地棕色雪紡飄逸短版上衣，下擺與袖口有流蘇裝飾，Coachella波西米亞沙漠音樂節感", en:"earth brown chiffon flowy crop top, fringe trim at hem and sleeves, Coachella bohemian desert festival vibe" },
    { id:"f83",  label:"薄荷綠棉紗漁網上衣", zh:"薄荷綠色鬆垮棉紗漁網編織短版上衣，海灘趴體必備的隨性透氣感，幾乎讓一切透見", en:"mint green loose cotton gauze fishnet-weave crop top, essential beach party carefree breathable, almost nothing hidden" },
    // ── Clean Girl / Minimalist ──────────────────────────────────────────────
    { id:"f84",  label:"白色緊身寬肩背心", zh:"白色極簡修身寬肩背心，平整無紋路面料，清潔感美學的絕對基本款", en:"white minimal fitted wide-shoulder tank, smooth no-texture fabric, absolute clean-girl aesthetic basic" },
    { id:"f85",  label:"黑色精緻細肩帶背心", zh:"黑色輕薄精緻細肩帶合身背心，光滑面料在光下有微弱光澤，極簡女神感", en:"black lightweight fine thin-strap fitted cami, smooth fabric with subtle sheen under light, minimalist goddess feel" },
    { id:"f86",  label:"淺灰色短版套頭衫", zh:"淺灰色輕磅棉質短版圓領套頭衫，寬鬆落肩廓形，清潔女孩最日常的舒適感", en:"light gray lightweight cotton crop crewneck pullover, wide dropped-shoulder silhouette, clean girl most daily comfort" },
    { id:"f87",  label:"奶油色緊身無袖高領", zh:"奶油色緊身無袖高領上衣，光滑彈性面料，極簡到近乎空洞的純粹美學力量", en:"cream fitted sleeveless turtleneck, smooth stretch fabric, minimalism almost approaching void pure aesthetic power" },
    { id:"f88",  label:"黑色無袖圓領貼身衫", zh:"黑色合身無袖圓領棉質上衣，無多餘細節的純粹剪裁，都市極簡主義的堅定宣言", en:"black fitted sleeveless crew neck cotton top, pure minimal cut with zero excess details, urban minimalism firm statement" },
    // ── Barbiecore / Dopamine Dressing ──────────────────────────────────────
    { id:"f89",  label:"芭比粉色亮面緊身上衣", zh:"芭比粉色亮面彈性緊身短版上衣，飽和的熱粉色製造視覺多巴胺爆炸效果", en:"Barbie pink glossy stretch fitted crop, saturated hot pink creating visual dopamine explosion" },
    { id:"f90",  label:"亮黃色露肩緊身衫", zh:"螢光亮黃色off-shoulder緊身彈性上衣，快樂多巴胺穿搭的視覺衝擊中心", en:"neon bright yellow off-shoulder stretch fitted top, visual impact center of happy dopamine dressing" },
    { id:"f91",  label:"熱粉色荷葉邊迷你連衣裙", zh:"熱情芭比粉色荷葉邊超短連身裙，飽和色調與誇張蓬量打造視覺多巴胺體驗", en:"hot Barbie pink ruffle micro mini dress, saturated hue with exaggerated volume creating dopamine visual experience" },
    { id:"f92",  label:"電藍色金屬感短版外套", zh:"電光藍色金屬感亮面短版外套，電影質感的飽和藍色讓任何畫面都充滿衝擊力", en:"electric blue metallic sheen crop jacket, cinematic saturated blue making every shot impactful" },
    // ── Mob Wife / Maximalist ────────────────────────────────────────────────
    { id:"f93",  label:"豹紋絲絨緊身上衣", zh:"豹紋或虎紋印花絲絨緊身短版上衣，強勢的動物紋與絲絨質感碰撞，豪奢女王美學", en:"leopard or tiger print velvet fitted crop top, powerful animal print meets velvet texture, lavish queen aesthetic" },
    { id:"f94",  label:"黑色皮草滾邊深V上衣", zh:"黑色緊身深V上衣，領口與袖口飾以人造皮草滾邊裝飾，Mob Wife寒冬奢靡風格", en:"black fitted deep-V top with faux fur trim at neckline and cuffs, Mob Wife winter opulence style" },
    { id:"f95",  label:"印花絲綢寬版衫", zh:"大花卉或幾何圖案印花真絲或仿絲寬版長版上衣，色彩豐富奢靡，義大利假日放縱感", en:"large floral or geometric print silk or silk-like oversized long top, richly opulent colors, Italian holiday indulgence" },
    { id:"f96",  label:"亮片全身緊身長袖", zh:"全身密布亮片的緊身長袖上衣，在任何光源下都發出萬道金光，紅毯走道的奪目衝擊", en:"all-over sequin embellished fitted long-sleeve top, reflecting gold light from every source, red carpet blinding impact" },
    // ── Gorpcore / Outdoor ───────────────────────────────────────────────────
    { id:"f97",  label:"橘色抓絨Fleece短外套", zh:"橘色或青苔綠色抓絨Fleece材質短版夾克，戶外品牌美學，城市叢林探索者廓形", en:"orange or moss green fleece crop jacket, outdoor brand aesthetic, urban jungle explorer silhouette" },
    { id:"f98",  label:"米色排汗速乾運動背心", zh:"米色或卡其色排汗速乾技術布料跑步背心，Gorpcore核心單品的機能美學", en:"beige or khaki moisture-wicking quick-dry technical running vest, gorpcore core piece functional beauty" },
    { id:"f99",  label:"藍色格紋棉質工裝外套", zh:"藍白格紋或素色棉質工裝式短版外套，多口袋設計，戶外城市功能主義精神", en:"blue plaid or solid cotton workwear cropped jacket, multi-pocket design, outdoor-meets-urban functionalism spirit" },
    { id:"f100", label:"螢光綠反光條安全背心", zh:"螢光黃綠色反光條工人安全背心，Gorpcore最具顛覆性的時尚符號，被重新詮釋的工作服", en:"neon yellow-green reflective stripe worker safety vest, gorpcore most subversive fashion symbol, reinterpreted workwear" },
    // ── Bridgerton / Regencycore ─────────────────────────────────────────────
    { id:"f101", label:"白色燈籠袖泡泡袖連衣", zh:"純白色超誇張泡泡燈籠袖短版緊身上衣，袖子巨大如雲朵，Regencycore帝政時代浪漫", en:"pure white dramatically oversized puff balloon sleeve crop top, sleeves huge as clouds, Regencycore Empire era romance" },
    { id:"f102", label:"粉藍色蕾絲直領束胸", zh:"粉藍色精工蕾絲直領束胸式上衣，模仿攝政時代宮廷女性服飾，現代高定的歷史對話", en:"powder blue fine lace square-neck corseted top, simulating Regency era court ladies' dress, modern couture historical dialogue" },
    // ── Sport Luxe ───────────────────────────────────────────────────────────
    { id:"f103", label:"黑色緊身運動bralette", zh:"黑色彈性高支撐力運動bralette，簡潔交叉背帶，既是運動內衣也是獨立外穿單品", en:"black stretch high-support sports bralette, clean cross-back straps, worn standalone as outerwear statement" },
    { id:"f104", label:"米色緊身長袖運動壓力衫", zh:"米色彈性高壓力感緊身長袖運動上衣，完美描繪身體每條線條，運動奢華融合美學", en:"beige stretch high-compression fitted long-sleeve sport top, perfectly mapping every body line, sport luxe fusion aesthetic" },
    { id:"f105", label:"白色網眼透氣運動背心", zh:"白色透氣蜂巢網眼運動背心，透過網眼隱約顯露底部運動bra，疊穿的立體機能美感", en:"white breathable honeycomb mesh athletic vest, sports bra subtly visible through mesh, layered dimensional functional beauty" },
    // ── Coastal Grandmother ───────────────────────────────────────────────────
    { id:"f106", label:"藍白橫條紋亞麻上衣", zh:"藍白條紋100%亞麻長版上衣，寬鬆下擺可束入也可外放，海岸祖母的從容生活美學", en:"blue-white stripe 100% linen long top, worn tucked or untucked, coastal grandmother's unhurried life aesthetic" },
    { id:"f107", label:"奶白色蓬鬆泡泡紗上衣", zh:"奶白色棉質起泡紗（Seersucker）質地上衣，透氣而有立體肌理，夏日避暑渡假的質感底蘊", en:"off-white cotton seersucker texture top, breathable with dimensional surface texture, summer resort quality foundation" },
    // ── Fairy / Whimsigoth / Fantasy ─────────────────────────────────────────
    { id:"f108", label:"仙氣薄紗多層罩衫", zh:"多層薄如蟬翼的透明薄紗罩衫，隨動作飄動如仙女裙，超自然靈性美感的頂點", en:"multi-layer ultra-sheer organza overlay blouse, floating like fairy wings with movement, supernatural spiritual beauty peak" },
    { id:"f109", label:"暗黑星空印花緊身衫", zh:"深黑色宇宙星空銀河印花緊身上衣，仿佛穿上宇宙本身，Whimsigoth魔幻幻想的夜空表達", en:"deep black cosmic galaxy starfield print fitted top, like wearing the universe itself, whimsigoth magical night sky expression" },
    { id:"f110", label:"翡翠綠薄紗燈籠袖上衣", zh:"翡翠綠薄紗材質超大燈籠袖飄逸上衣，童話女巫氣質，每個動作都充滿施法的神秘感", en:"jade green organza oversized puff sleeve flowing top, fairytale witch aesthetic, every movement filled with spellcasting mystery" },
    // ── Business Professional / Power Dressing ───────────────────────────────
    { id:"f111", label:"白色裁剪精準無袖上衣", zh:"白色精準裁剪無袖翻領上衣，硬挺結構感，女性權力裝扮的純粹與精確", en:"white precisely tailored sleeveless lapel top, structured stiff silhouette, pure precision of female power dressing" },
    { id:"f112", label:"黑色肩墊誇張西裝外套", zh:"黑色強化肩墊結構誇張廓形西裝外套，80年代職場女戰士的現代復刻，力量即時尚", en:"black exaggerated padded shoulder structured blazer, modern revival of 80s career-woman warrior, power is fashion" },
    { id:"f113", label:"藏青色雙面呢修身外套", zh:"藏青色精製雙面呢修身西裝外套，內外兩面皆可穿著，高效率精英女性的智慧選擇", en:"navy blue fine double-face wool fitted blazer, reversible inside and out, high-efficiency elite woman's smart choice" },
    // ── Cut-out / Deconstructed ───────────────────────────────────────────────
    { id:"f114", label:"不對稱單肩切割上衣", zh:"不對稱單肩設計的切割感合身上衣，幾何切割裸露一側肩膀與部分側腰，解構主義美感", en:"asymmetric one-shoulder cut-out fitted top, geometric cut exposing one shoulder and partial side waist, deconstructivism aesthetic" },
    { id:"f115", label:"腰側鏤空緊身上衣", zh:"腰側兩側各有幾何形鏤空設計的緊身上衣，切割感裸露側腰肌膚，現代感強烈的解構美", en:"fitted top with geometric cutout windows at both side waists, exposing side-waist skin, strongly modern deconstructed beauty" },
    { id:"f116", label:"後背裸露繫帶設計上衣", zh:"前面似普通上衣，背面大面積裸露以細繫帶交叉固定，顛覆前後視覺期待的設計巧思", en:"appears regular from front, back fully exposed held by thin crossing ties, subverting front-back visual expectation design" },
    { id:"f117", label:"垂領斜肩不對稱上衣", zh:"單側垂墜領口的不對稱斜肩設計上衣，布料如液體在身上自然流淌的優雅解構感", en:"single-side draped neckline asymmetric one-shoulder top, fabric flowing like liquid in natural elegant deconstruction" },
    // ── Mesh / Sheer ─────────────────────────────────────────────────────────
    { id:"f118", label:"黑色細網眼緊身長袖", zh:"黑色極細密網眼緊身長袖上衣，肌膚在網格之後隱若可見，曖昧透視的強烈誘惑", en:"black ultra-fine mesh fitted long-sleeve, skin faintly visible behind mesh grid, ambiguously sheer intense seduction" },
    { id:"f119", label:"白色大網眼透視上衣", zh:"白色大格網眼編織短版上衣，每個網格都是一扇小窗，透視感極其直接而大膽", en:"white large-grid mesh woven crop top, each cell an open window, very direct and bold sheer statement" },
    { id:"f120", label:"全透視雪紡波點上衣", zh:"全透明雪紡材質上衣，帶有水玉波點印花，如薄霧般的輕盈布料包裹身體", en:"fully sheer chiffon top with polka dot print, mist-like delicate fabric enveloping the body" },
    // ── Denim Tops ───────────────────────────────────────────────────────────
    { id:"f121", label:"做舊牛仔短版夾克", zh:"做舊水洗淺藍色短版牛仔夾克，袖口做破損處理，永恆的美式街頭基本單品", en:"distressed light-wash cropped denim jacket, frayed cuffs, timeless American street staple" },
    { id:"f122", label:"深藍牛仔緊身合身外套", zh:"深靛藍色牛仔布合身腰身設計外套，精緻的牛仔布工藝展示，都市都市高端街頭感", en:"deep indigo denim fitted waist-defining jacket, refined denim craftsmanship showcase, urban high-end street feel" },
    { id:"f123", label:"白色牛仔上衣改造款", zh:"白色洗水牛仔布重新改造設計上衣，不對稱剪裁或解構拼接，後現代牛仔布再詮釋", en:"white washed denim reworked design top, asymmetric cut or deconstructed splice, postmodern denim reinterpretation" },
    // ── Leather & Faux Leather ───────────────────────────────────────────────
    { id:"f124", label:"黑色皮革摩托夾克", zh:"黑色真皮或仿皮摩托車夾克，不對稱拉鍊，金屬五金細節，永恆的叛逆符號", en:"black real or faux leather motorcycle jacket, asymmetric zipper, metal hardware details, timeless rebellion symbol" },
    { id:"f125", label:"棕色皮革短版合身外套", zh:"棕色皮革質感短版合身外套，單排扣設計，奢華西部牛仔遇見義式精品的跨界", en:"brown leather-texture cropped fitted jacket, single-button front, luxury Western cowboy meets Italian fashion crossover" },
    { id:"f126", label:"黑色亮面皮革crop bra top", zh:"黑色亮面仿皮革材質的短版bra top，金屬圓環裝飾，Dominatrix式的強勢時尚符號", en:"black glossy faux leather crop bra top, metal O-ring accents, Dominatrix-inspired assertive fashion statement" },
    // ── Knitwear ─────────────────────────────────────────────────────────────
    { id:"f127", label:"焦糖色粗紡寬鬆毛衣", zh:"焦糖棕色粗紡羊毛寬鬆厚重毛衣，超大版型搭配緊身下裝，秋冬必備的溫暖雕塑感", en:"caramel brown chunky wool oversized bulky sweater, oversized paired with fitted bottom, essential autumn-winter warm sculpture" },
    { id:"f128", label:"米色透花鏤空針織衫", zh:"米色薄款透花鏤空針織短版上衣，複雜的鏤空圖案製造豐富的光影肌理，夏日透氣奢華", en:"beige thin openwork lace-knit crop top, complex openwork pattern creating rich light-shadow texture, summer breathable luxury" },
    { id:"f129", label:"深棕色縐紋螺旋紋針織", zh:"深棕色特殊縐紋螺旋肌理針織毛衣，立體的表面結構製造豐富的視覺深度", en:"dark brown crinkle spiral texture knit sweater, dimensional surface structure creating rich visual depth" },
    { id:"f130", label:"亮橘色粗線圓領毛衣", zh:"亮橘色粗線鬆垮圓領毛衣，色彩飽和鮮明，大廓形製造悠閒的秋日藝術家感", en:"bright orange chunky-yarn loose crewneck sweater, saturated vivid color, oversized silhouette creating relaxed autumn artist feel" },
    // ── Crop Tops - Specific Styles ──────────────────────────────────────────
    { id:"f131", label:"白色細肩帶抹胸", zh:"白色彈性細肩帶寬型抹胸，極簡低調的夏日基礎單品，配任何下裝", en:"white stretch wide-strap tube top, minimal understated summer foundation piece, versatile with any bottom" },
    { id:"f132", label:"棕色系帶腰部繫帶上衣", zh:"棕色前中腰部繫帶蝴蝶結設計短版上衣，強調腰線細節，甜美中帶性感", en:"brown front-center waist bow-tie crop top, emphasizing waist detail, sweetness with a touch of sensuality" },
    { id:"f133", label:"條紋薄棉短版上衣", zh:"多色細條紋薄棉質短版上衣，乾淨輕盈的法式基本款，百搭的夏日核心", en:"multi-color fine stripe thin cotton crop top, clean light French basic, versatile summer core essential" },
    { id:"f134", label:"深V前繫帶緊身上衣", zh:"深V領口以細繫帶打結固定的緊身上衣，V字形裸露的拉伸視覺效果，性感而精準", en:"deep-V neckline tied-knot centre fitting top, V-shaped reveal with lengthening visual effect, sensual and precise" },
    { id:"f135", label:"奶白色抹胸綁帶連衣", zh:"奶白色平口抹胸上衣搭配側邊細繫帶設計，希臘女神式的垂墜綁帶感", en:"off-white strapless tube with side-lacing tie detail, Greek goddess draping lace-up sensation" },
    // ── Vintage / Retro ─────────────────────────────────────────────────────
    { id:"f136", label:"70年代棕色翻領收腰外套", zh:"70年代復古棕色大翻領收腰長袖外套，誇張的領子設計，復古disco時代的奔放", en:"70s retro brown large-lapel waist-cinching long-sleeve jacket, exaggerated collar, vintage disco era free spirit" },
    { id:"f137", label:"復古方格紋泡泡袖上衣", zh:"復古草綠色或橘色方格紋泡泡袖上衣，70年代鄉村音樂式的甜美復古情懷", en:"vintage chartreuse or orange gingham puff-sleeve top, 70s country music-style sweet retro nostalgia" },
    { id:"f138", label:"奶油色蕾絲高領維多利亞衫", zh:"奶油白色精工蕾絲維多利亞式高領長袖上衣，充滿文學感的19世紀浪漫符號", en:"cream white fine lace Victorian high-neck long-sleeve top, literary 19th century romantic symbol" },
    // ── Special Fabric / Texture ─────────────────────────────────────────────
    { id:"f139", label:"全身鏡面亮片緊身衫", zh:"全身鋪滿小鏡面亮片的緊身上衣，如活動的迪斯可球反射萬道光線，極致視覺震撼", en:"all-over small mirror sequin encrusted fitted top, like a walking disco ball reflecting countless light beams, ultimate visual shock" },
    { id:"f140", label:"藍色水洗紮染上衣", zh:"手工藍色紮染Tie-dye印花短版上衣，獨一無二的圖案，嬉皮自由靈魂的藝術表達", en:"hand-dyed blue tie-dye print crop top, one-of-a-kind pattern, hippie free-spirit artistic expression" },
    { id:"f141", label:"銀色全息PVC透明外套", zh:"銀色全息鐳射效果PVC透明材質短版外套，隨角度變幻彩虹色，賽博節日的狂歡符號", en:"silver holographic laser PVC transparent crop jacket, angle-shifting rainbow iridescence, cyber festival celebration symbol" },
    { id:"f142", label:"軍綠色仿軍裝短版夾克", zh:"軍綠色仿軍裝風格多口袋短版外套，肩章細節，女性戰士力量的時尚詮釋", en:"army green military-inspired multi-pocket crop jacket, epaulette detail, feminine warrior power fashion interpretation" },
    { id:"f143", label:"奶白荷葉垂墜肩線上衣", zh:"奶白色荷葉邊不對稱肩線設計飄逸上衣，布料如月光在肩部流淌，詩性的解構美學", en:"off-white asymmetric ruffle shoulder flowy top, fabric flowing like moonlight over shoulders, poetic deconstructed beauty" },
    { id:"f144", label:"深灰色男友風超大針織衫", zh:"深灰色超大男友風針織長袖毛衣，袖子超長遮過手背，慵懶性感的家居外出兩用美學", en:"dark gray boyfriend-oversized knit long-sleeve sweater, extra-long sleeves past hands, lazy sensual indoor-outdoor versatile aesthetic" },
    { id:"f145", label:"白色流蘇邊扎克風上衣", zh:"白色棉質短版上衣，下擺有長流蘇裝飾，Zac Posen式的流動藝術感，動起來如瀑布飛濺", en:"white cotton crop with long fringe hem trim, flowing artistic quality, moving like a waterfall splash" },
    { id:"f146", label:"金色金屬感合身背心", zh:"金色亮面金屬感彈性合身背心，如液態黃金澆鑄在身上，夜場女王的終極武器", en:"gold glossy metallic stretch fitted cami vest, like liquid gold cast over the body, nightlife queen's ultimate weapon" },
    { id:"f147", label:"深紫色天鵝絨bardot", zh:"深紫色天鵝絨材質bardot一字領短版上衣，天鵝絨吸光的神秘深邃感，哥德式優雅", en:"deep purple velvet bardot off-shoulder crop top, velvet's light-absorbing mysterious depth, gothic elegance" },
    { id:"f148", label:"橄欖綠絲綢斜裁背心", zh:"橄欖綠100%真絲斜裁飄逸背心，斜裁讓布料沿著曲線自然懸掛，90年代超模必備", en:"olive green 100% silk bias-cut flowing camisole, bias cut making fabric hang naturally along curves, 90s supermodel essential" },
    { id:"f149", label:"玫瑰磚紅色縱橫格紋馬甲", zh:"玫瑰磚紅色縱橫格紋羊毛馬甲排扣款，秋冬層次穿搭的核心結構件，英倫輕奢精品感", en:"rose brick vertical-horizontal plaid wool button-front vest, core layering piece for autumn-winter, British light luxury quality" },
    { id:"f150", label:"冰藍色絲質印花罩衫", zh:"冰藍色水彩暈染印花真絲飄逸罩衫，如穿上一幅水墨畫，東方詩意的現代詮釋", en:"ice blue watercolor wash print silk flowing overshirt, like wearing an ink painting, Eastern poetic modern interpretation" },
    { id:"f151", label:"奶茶色棉麻寬版外套", zh:"奶茶色棉麻混紡寬鬆長版外套，隨意繫腰帶，首爾街頭的層次輕鬆感", en:"milk-tea cotton-linen blend oversized long overshirt, casually belted, Seoul street layered effortless feel" },
    { id:"f152", label:"藍白格紋水手領短版衫", zh:"藍白方格紋附白色水手領設計短版上衣，法式少女日常的清新碰撞感", en:"blue-white gingham with white sailor collar crop top, French girl daily fresh collision" },
    { id:"f153", label:"銅棕色金屬鱗片上衣", zh:"銅棕色金屬鱗片仿魚鱗紋彈性緊身上衣，閃爍的金屬質感如神話海洋生物的鱗甲", en:"copper bronze metallic fish-scale texture stretch fitted top, shimmering metallic like mythological sea creature's scales" },
    { id:"f154", label:"奶油色格紋長版西裝外套", zh:"奶油白色細格紋精紡羊毛長版西裝外套，Old Money的核心外套，知識精英的衣櫃脊梁", en:"cream fine-grid fine-wool long blazer, Old Money core outerwear, intellectual elite wardrobe backbone" },
    { id:"f155", label:"紅色緊身肋骨羅紋短上衣", zh:"飽和正紅色羅紋彈性緊身短版上衣，經典的視覺核心，任何造型的致命武器", en:"saturated classic red rib stretch fitted crop, classic visual center, lethal weapon for any look" },
    { id:"f156", label:"灰黑色格紋紋理Biker夾克", zh:"灰黑色格紋紋理皮革感Biker機車夾克，斜拉鍊與金屬鉚釘裝飾，都市遊俠的力量感", en:"gray-black textured grid leather-feel biker motorcycle jacket, diagonal zipper and metal stud details, urban ranger power feel" },
    { id:"f157", label:"白色蕾絲嵌入式背心", zh:"白色合身背心，胸口與肩部有精緻蕾絲嵌入拼接，甜美與日常之間的完美中間地帶", en:"white fitted cami with delicate lace inset panels at chest and shoulder, perfect midpoint between sweet and everyday" },
    { id:"f158", label:"嫩黃色雙層罩衫外套", zh:"嫩黃色雙層薄棉質飄逸罩衫外套，在微風中輕盈飄動，春日陽光的具象化表達", en:"tender yellow double-layer thin cotton flowy overshirt, floating lightly in breeze, spring sunshine made tangible" },
    { id:"f159", label:"深黑色皮草感短版外套", zh:"深黑色長絨毛人造皮草短版外套，富有戲劇性的蓬鬆廓形，夜晚出行的最強存在感", en:"deep black long-pile faux fur crop jacket, dramatically voluminous silhouette, strongest presence for nighttime outings" },
    { id:"f160", label:"銀色彈性腰帶設計上衣", zh:"白色或米色上衣搭配一體式銀色金屬感彈性腰帶，強調腰線的結構設計感", en:"white or beige top with integrated silver metallic elastic waistband, structural waist-defining design" },
    { id:"f161", label:"紫羅蘭色薄毛衣一字領", zh:"紫羅蘭色輕薄針織一字領短版毛衣，優雅的肩部裸露，莫蘭迪系的空靈美感", en:"violet thin knit off-shoulder bardot crop sweater, elegant shoulder reveal, Morandi tonal ethereal beauty" },
    { id:"f162", label:"褪色淺灰做舊感Polo衫", zh:"褪色做舊效果淺灰色Polo領短版上衣，vintage感的細微舊感肌理，懷舊美學的日常表達", en:"faded vintage-treated light gray polo crop top, subtle aged texture, nostalgic aesthetic daily expression" },
    { id:"f163", label:"印度碎花棉質繫帶上衣", zh:"印度棉多色碎花印花細肩帶前繫帶短版上衣，異域手工藝感，波西米亞旅行美學", en:"Indian cotton multi-color ditsy floral print tie-front cami crop, exotic handcraft feel, bohemian travel aesthetic" },
    { id:"f164", label:"冷灰色磨砂質感合身連衣", zh:"冷灰色啞光磨砂質感彈性合身中長連衣裙，如高科技陶瓷表面的質感，極簡雕塑美學", en:"cool gray matte frosted-texture stretch fitted midi dress, like high-tech ceramic surface, minimal sculpture aesthetic" },
    { id:"f165", label:"珠光米白色緞面長袖衫", zh:"珠光米白色緞面長袖上衣，輕微的珠母貝光澤，在任何光源下散發低調神秘的輝光", en:"pearlescent off-white satin long-sleeve top, subtle mother-of-pearl sheen, quietly mysterious glow under any light" },
    { id:"f166", label:"撞色拼接短版運動風外套", zh:"黑色搭配鮮豔撞色條紋的拼接短版運動外套，運動奢華跨界，動感十足的設計張力", en:"black with bright contrasting stripe spliced crop sport jacket, sport luxe crossover, vibrant design tension" },
    { id:"f167", label:"綠色植物印花輕薄罩衫", zh:"熱帶植物葉片大型印花飄逸輕薄罩衫，夏日度假的視覺衝擊感，異域植物園的奔放", en:"tropical botanical oversized-leaf print lightweight flowy overshirt, summer vacation visual impact, exotic botanical garden exuberance" },
    { id:"f168", label:"深橄欖綠Bodycon合身連衣裙", zh:"深橄欖綠色彈性貼身Bodycon中長連衣裙，極簡俐落的都市約會造型核心單品", en:"deep olive green stretch bodycon midi dress, minimal clean urban date-night core piece" }
  ],

  BOTTOM: [
    { id:"b1", label:"淡藍闊腿牛仔褲", zh:"淡藍色闊腿直筒牛仔褲", en:"light wash wide-leg straight denim jeans" },
    { id:"b2", label:"銀藍亮片超短褲", zh:"銀藍亮片超短褲閃亮表面", en:"silver-blue sequin micro shorts sparkling surface" },
    { id:"b3", label:"做舊牛仔鉚釘迷你裙", zh:"做舊牛仔布金屬鉚釘迷你裙超大金屬扣", en:"ultra-distressed denim mini skirt metal stud rivets oversized buckle harness" },
    { id:"b4", label:"黑色高腰合身長褲", zh:"黑色高腰緊身長褲貼腿剪裁", en:"black high-waist skinny trousers fitted leg" },
    { id:"b5", label:"深色牛仔迷你裙", zh:"深色水洗牛仔迷你裙原邊設計", en:"dark wash denim mini skirt raw hem" },
    { id:"b6", label:"黑色皮革迷你裙", zh:"黑色仿皮革高腰合身迷你裙", en:"black faux leather mini skirt high-waist fitted" },
    { id:"b7", label:"卡其色寬鬆短褲", zh:"卡其色寬鬆工裝短褲中腿長", en:"khaki loose cargo shorts mid-thigh" },
    { id:"b8", label:"黑直條紋百褶mini裙", zh:"黑色細直條紋百褶網球裙高腰設計搭配黑色褲襪", en:"black fine pinstripe pleated tennis mini skirt high-waist with black sheer tights" },
    { id:"b9", label:"咖啡棕雙層荷葉超短裙", zh:"深咖啡棕雙層荷葉邊超短裙分層蓬蓬設計", en:"dark coffee brown double-layer ruffle tiered micro mini skirt cute voluminous silhouette" },
    // ── Denim Bottoms ────────────────────────────────────────────────────────
    { id:"b10",  label:"高腰直筒淺藍牛仔褲",   zh:"高腰直筒版型淺水洗牛仔褲，腰部完美包裹，九分褲長，90年代超模日常復刻", en:"high-waist straight-leg light-wash denim jeans, waist-hugging, ankle-length, 90s supermodel daily revival" },
    { id:"b11",  label:"媽媽褲深藍做舊牛仔",   zh:"Mom Jeans深靛藍水洗高腰寬鬆版型牛仔褲，輕微做舊細節，舒適而有型的街頭休閒感", en:"Mom Jeans deep indigo high-waist relaxed-fit denim, subtle distressing, comfortable yet stylish street casual" },
    { id:"b12",  label:"超短Daisy Dukes牛仔熱褲",zh:"極短切割牛仔布熱褲，原邊毛邊設計，Daisy Dukes式的美式夏日鄉村浪漫", en:"ultra-short cut-off denim hot shorts, raw frayed hem, Daisy Dukes American summer country romance" },
    { id:"b13",  label:"中腰細直條紋西褲",     zh:"中腰細白直條紋深海軍藍西裝長褲，直筒設計，職場精英與街頭時尚的完美交會", en:"mid-rise fine white pinstripe navy wide-leg dress trousers, straight cut, perfect junction of professional and street fashion" },
    { id:"b14",  label:"白色高腰闊腿褲",       zh:"純白色高腰闊腿直筒長褲，修長比例創造無限腿長視覺效果，夏日度假純白美學", en:"pure white high-waist wide-leg straight trousers, elongating proportion creating infinite leg-length visual effect, summer resort pure white aesthetic" },
    { id:"b15",  label:"銀白色緞面開叉長裙",   zh:"銀白色緞面側高開叉超長裙，液態金屬感布料搭配高開衩，行走間若隱若現的腿部剪影", en:"silver-white satin high-slit maxi skirt, liquid metallic fabric with high slit, glimpses of leg silhouette in motion" },
    { id:"b16",  label:"奶油色高腰喇叭褲",     zh:"奶油色高腰喇叭寬褲，褲腳從膝蓋以下大幅展開，70年代復古喇叭的現代詮釋", en:"cream high-waist wide-flare trousers, dramatically flaring from knees down, 70s retro flare modern interpretation" },
    { id:"b17",  label:"豹紋高腰迷你裙",       zh:"豹紋印花彈性高腰合身迷你裙，動物本能的野性與時尚符號的強勢融合", en:"leopard print stretch high-waist fitted mini skirt, fusion of animal instinct wildness and fashion symbol assertiveness" },
    { id:"b18",  label:"黑白格子百褶裙",       zh:"黑白千鳥格子圖案高腰百褶中長裙，學院格子的標誌性視覺符號，清新而有力", en:"black-white houndstooth check high-waist pleated midi skirt, iconic preppy plaid visual symbol, fresh yet powerful" },
    { id:"b19",  label:"深藍牛仔Straight短褲", zh:"深藍色直筒版型五分牛仔短褲，略微寬鬆的廓形，舒適而有型的日常選擇", en:"deep blue straight-fit 5-inch denim shorts, slightly relaxed silhouette, comfortable yet stylish daily choice" },
    { id:"b20",  label:"軍綠色多口袋工裝長褲", zh:"軍綠色多口袋戰術機能工裝長褲，鬆緊束腳設計，Gorpcore機能主義的街頭表達", en:"army green multi-pocket tactical cargo trousers, cinched ankle design, gorpcore functionalism street expression" },
    { id:"b21",  label:"磚紅色燈芯絨直筒褲",   zh:"磚紅色細燈芯絨質地直筒長褲，柔軟觸感與豐富肌理，秋冬文藝知識分子的溫暖選擇", en:"brick red fine corduroy straight-leg trousers, soft texture with rich surface, warm choice for autumn-winter artistic intellectuals" },
    { id:"b22",  label:"流動黑色雙層雪紡長裙",  zh:"黑色雙層雪紡飄逸長裙，隨步伐飄動如黑色輕霧，哥德式優雅的晚裝女神感", en:"black double-layer chiffon flowing maxi skirt, drifting like dark mist with each step, gothic elegant evening goddess feel" },
    { id:"b23",  label:"焦糖色皮革鉛筆裙",     zh:"焦糖棕色皮革質感高腰鉛筆窄裙，在臀部與大腿之間完美展示女性曲線，都市女王", en:"caramel brown leather-texture high-waist pencil skirt, perfectly showcasing feminine curves from hip to thigh, urban queen" },
    { id:"b24",  label:"粉色緞面中長半裙",     zh:"玫瑰粉色緞面拋光面料A字型中長裙，光滑冷感布料的優雅下垂，少女女神雙重美感", en:"rose pink satin polished A-line midi skirt, elegantly draping smooth cool fabric, girlish-yet-goddess dual beauty" },
    { id:"b25",  label:"白色棉紗流蘇波西米亞長裙",zh:"白色棉紗多層次流蘇裝飾波西米亞超長裙，裙擺及地，步伐間流蘇隨風搖曳", en:"white cotton gauze multi-tier fringe boho maxi skirt, hem to ground, fringe swaying in every step" },
    { id:"b26",  label:"深藍高腰工裝短裙",     zh:"深海軍藍色高腰工裝風格迷你短裙，功能性口袋與D型扣環裝飾，帥氣機能美學", en:"deep navy high-waist utility mini skirt, functional pockets and D-ring accents, cool functional aesthetic" },
    { id:"b27",  label:"淡藍牛仔超闊腿褲",     zh:"淡水洗藍色超闊腿牛仔褲，褲腳寬度近乎達到裙子效果，最前衛的當代牛仔廓形", en:"light-wash blue ultra-wide-leg jeans, leg width nearly reaching skirt proportion, most avant-garde contemporary denim silhouette" },
    { id:"b28",  label:"裸膚色彈性Bodycon長裙", zh:"裸膚色彈性高貼身Bodycon中長裙，幾乎與膚色融為一體的視覺效果，雕塑感第二肌膚", en:"nude beige stretch high-bodycon midi dress-skirt, nearly merging visually with skin tone, sculptural second skin" },
    { id:"b29",  label:"酒紅色絲絨A字半裙",     zh:"酒紅色絲絨材質高腰A字型短裙，天鵝絨的深邃吸光感製造豐富的陰影層次", en:"burgundy velvet high-waist A-line mini skirt, velvet's deep light-absorbing quality creating rich shadow layers" },
    { id:"b30",  label:"黑色網眼透視長裙",     zh:"黑色細密網眼材質透視超長裙，穿在膚色打底褲或緊身短褲外層，雙重材質的強烈張力", en:"black fine-mesh sheer maxi skirt, worn over nude tights or bodysuit, strong tension between dual fabric layers" },
    // ── Mini Skirts ─────────────────────────────────────────────────────────
    { id:"b31",  label:"格紋羊毛迷你短裙",     zh:"經典黑白或棕米色格紋精紡羊毛迷你短裙，學院派符號的時髦化身", en:"classic black-white or brown-beige plaid fine wool mini skirt, preppy symbol's fashionable incarnation" },
    { id:"b32",  label:"亮黃色緊身彈力迷你裙",  zh:"螢光亮黃色超高腰彈性緊身迷你裙，多巴胺視覺爆炸的核心單品", en:"neon bright yellow super high-waist stretch fitted mini skirt, core piece of dopamine visual explosion" },
    { id:"b33",  label:"皮革細褶吊帶迷你裙",   zh:"黑色仿皮革細褶不規則剪裁吊帶迷你裙，解構主義的邊緣感，Rock女孩的必備戰甲", en:"black faux leather fine-pleat irregular-cut spaghetti-strap mini skirt, deconstructed edgy feel, rock girl essential armor" },
    { id:"b34",  label:"奶白色彈性羊毛混紡迷你裙",zh:"奶白色輕量彈性羊毛混紡超短迷你裙，簡潔優雅，Clean Girl Aesthetic的完美下裝", en:"off-white lightweight stretch wool-blend ultra-mini skirt, clean elegant, perfect Clean Girl Aesthetic bottom" },
    { id:"b35",  label:"紅色波點迷你裙",       zh:"飽和正紅色與白色波點印花高腰迷你裙，俏皮復古的視覺衝擊，Mod時代的歡樂符號", en:"saturated classic red with white polka-dot high-waist mini skirt, playful retro visual impact, Mod era joyful symbol" },
    // ── Midi & Maxi Skirts ────────────────────────────────────────────────────
    { id:"b36",  label:"卡其色開叉中長裙",     zh:"卡其米色高腰合身中長裙，前中側開叉至膝上，簡潔俐落的職場優雅", en:"khaki beige high-waist fitted midi skirt, front or side slit above knee, clean elegant professional look" },
    { id:"b37",  label:"深棕色皮質中長裙",     zh:"深棕色仿皮革質感A字中長裙，秋冬季節的奢靡質感，MobWife風格的時裝武器", en:"dark brown faux-leather texture A-line midi skirt, autumn-winter opulent texture, mob wife style fashion weapon" },
    { id:"b38",  label:"薄荷綠棉紗超長裙",     zh:"薄荷綠色棉紗超長飄逸裙，隨風飄動的仙氣裙擺，田園女神的浪漫代言人", en:"mint green cotton gauze extra-long flowing skirt, wind-catching ethereal hem, pastoral goddess romantic representative" },
    { id:"b39",  label:"黑白垂直條紋中長裙",   zh:"黑白細垂直條紋高腰中長裙，修身顯高的視覺延伸效果，法式優雅的永恆基本款", en:"black-white fine vertical stripe high-waist midi skirt, slimming height-extending visual effect, French elegant eternal basic" },
    { id:"b40",  label:"奶油色針織鬆緊長裙",   zh:"奶油白色針織材質鬆緊腰圍A字長裙，Coastal Grandmother的舒適精緻日常", en:"cream white knit elastic-waist A-line maxi skirt, coastal grandmother's comfortable refined daily life" },
    // ── Wide Leg / Palazzo ────────────────────────────────────────────────────
    { id:"b41",  label:"黑色寬鬆Palazzo長褲",  zh:"黑色超寬鬆Palazzo長褲，垂墜布料製造宮殿般的優雅廓形，行走間如裙擺飄動", en:"black ultra-wide palazzo trousers, draping fabric creating palace-like elegant silhouette, moving like a skirt hem" },
    { id:"b42",  label:"奶白色麻料寬腿褲",     zh:"奶白色亞麻或棉麻混紡超寬腿長褲，度假海島氛圍，極簡主義寬鬆廓形", en:"off-white linen or linen-cotton ultra-wide-leg trousers, island vacation atmosphere, minimalist relaxed silhouette" },
    { id:"b43",  label:"深紫色緞面寬腿褲",     zh:"深紫色緞面材質寬鬆流動長褲，奢華絲滑的布料在腿間飛舞，極盡女性化的曲線", en:"deep purple satin wide-leg flowing trousers, luxuriously silky fabric dancing between legs, ultimate feminine curves" },
    { id:"b44",  label:"焦糖色皮革感寬腿褲",   zh:"焦糖棕色皮革質感中高腰寬腿長褲，現代騎士感，秋冬奢靡造型的主角", en:"caramel brown leather-texture mid-high-waist wide-leg trousers, modern equestrian feel, autumn-winter opulent look protagonist" },
    // ── Trousers / Pants ──────────────────────────────────────────────────────
    { id:"b45",  label:"米色高腰直筒西褲",     zh:"米白色高腰精裁直筒西裝褲，乾淨俐落的極簡主義職場美學，搭配任何上衣皆完美", en:"off-white high-waist precisely-cut straight dress trousers, clean minimal professional aesthetic, perfect with any top" },
    { id:"b46",  label:"海軍藍高腰寬鬆短褲",   zh:"海軍藍棉質高腰寬鬆Bermuda五分短褲，夏日輕鬆的都市街頭感", en:"navy blue cotton high-waist relaxed bermuda shorts, easy urban street summer feel" },
    { id:"b47",  label:"黑色皮革緊身褲",       zh:"黑色仿皮革或真皮高腰緊身長褲，皮光感的緊繃質感，都市女戰士的第二層皮膚", en:"black faux or real leather high-waist skinny trousers, tight leather-sheen tension, urban female warrior second skin" },
    { id:"b48",  label:"灰色雙褶寬腿西褲",     zh:"中灰色雙前褶寬鬆高腰西裝寬腿褲，復古運動感的現代詮釋，男裝女穿的性感中性感", en:"medium gray double-pleat relaxed high-waist suit wide-leg trousers, retro athletic modern interpretation, menswear-for-women sensual androgyny" },
    { id:"b49",  label:"奶油色緞帶綁帶長褲",   zh:"奶油色腰部或裙管處有緞帶綁帶細節的長褲，甜美精緻的少女Coquette感", en:"cream ribbon-tie detail at waist or ankle trousers, sweetly refined girlish coquette feel" },
    { id:"b50",  label:"深綠色格紋蘇格蘭毛呢褲",zh:"深森林綠色蘇格蘭格紋精紡毛呢高腰長褲，Dark Academia的核心下裝，圖書館聖品", en:"deep forest green Scottish plaid fine-wool high-waist trousers, dark academia core bottom, library sacred item" },
    // ── Shorts ───────────────────────────────────────────────────────────────
    { id:"b51",  label:"自行車底褲cycling shorts", zh:"黑色彈性緊身自行車底褲，搭配寬鬆上衣的都市運動混搭，Kim K式的街頭穿搭公式", en:"black stretch fitted cycling shorts, urban athletic mix paired with oversized top, Kim K street styling formula" },
    { id:"b52",  label:"白色網球百褶短裙褲",    zh:"白色網球百褶短裙式運動短褲，運動精英感的日常穿搭，Athleisure的標誌單品", en:"white tennis pleated skort, sporting elite feel daily wear, athleisure iconic piece" },
    { id:"b53",  label:"深綠色機能緊身短褲",    zh:"深軍綠色高腰機能彈性緊身短褲，Gorpcore與Sport Luxe的交叉點", en:"deep military green high-waist technical stretch shorts, gorpcore and sport luxe intersection" },
    { id:"b54",  label:"奶白色棉質寬鬆短褲",    zh:"奶白色寬鬆休閒棉質短褲，清潔女孩極簡美學的舒適日常下裝", en:"off-white relaxed casual cotton shorts, clean girl minimalist aesthetic comfortable daily bottom" },
    { id:"b55",  label:"亮橘色高腰迷你短褲",    zh:"亮橘色高腰彈性迷你熱褲，多巴胺穿搭的視覺炸彈，夏日活力的具象化", en:"bright orange high-waist stretch micro hot shorts, dopamine dressing visual bomb, summer vitality made tangible" },
    // ── Leggings / Tights ─────────────────────────────────────────────────────
    { id:"b56",  label:"黑色高腰瑜珈緊身褲",    zh:"黑色高腰包腹瑜珈彈性緊身長褲，第二層肌膚感的光滑布料，線條清晰", en:"black high-waist tummy-control yoga stretch leggings, second-skin smooth fabric, clean body lines" },
    { id:"b57",  label:"咖啡棕仿麂皮緊身長褲",  zh:"咖啡棕色仿麂皮質感彈性緊身長褲，絨面觸感，秋冬都市造型的奢華底色", en:"coffee brown faux suede stretch fitted trousers, suede-like texture, autumn-winter urban look luxurious base" },
    { id:"b58",  label:"銀灰色金屬感緊身褲",    zh:"銀灰色金屬反光彈性緊身長褲，賽博龐克的金屬肢體延伸，舞台或街頭皆震撼", en:"silver-gray metallic reflective stretch fitted trousers, cyberpunk metallic limb extension, stunning on stage or street" },
    // ── Special / Trending ────────────────────────────────────────────────────
    { id:"b59",  label:"粉色緞面百褶midi裙",    zh:"粉色緞面材質細百褶高腰中長裙，每個褶皺都閃爍著柔和光澤，芭蕾Coquette精髓", en:"pink satin fine-pleat high-waist midi skirt, each pleat shimmering with soft luster, ballet coquette essence" },
    { id:"b60",  label:"印花棉質smocked腰彈力裙",zh:"熱帶或碎花印花棉質smocked蜂窩腰頭彈力中長裙，隨性舒適的渡假感廓形", en:"tropical or ditsy print cotton smocked waistband midi skirt, effortlessly comfortable vacation silhouette" },
    { id:"b61",  label:"哥德蕾絲邊長裙",       zh:"深黑色多層蕾絲邊飾超長裙，每層裙擺有蕾絲裝飾，哥德式暗黑婚禮的終極主角", en:"deep black multi-layer lace-trimmed maxi skirt, each hem decorated with lace, dark gothic wedding ultimate protagonist" },
    { id:"b62",  label:"奶茶色格紋格呢A字裙",   zh:"奶茶米色大格紋粗花呢A字中長裙，秋冬最有質感的基本款，Old Money的下裝聖品", en:"milk-tea beige oversized plaid boucle tweed A-line midi skirt, most textural autumn-winter basic, Old Money bottom holy grail" },
    { id:"b63",  label:"黑白色拼接不對稱半裙",  zh:"黑白色幾何拼接不對稱裙擺設計半裙，解構主義的視覺張力，藝術科系女孩的宣言", en:"black-white geometric spliced asymmetric hem skirt, deconstructivist visual tension, art student girl's manifesto" },
    { id:"b64",  label:"奶白色針織短裙褲",     zh:"奶白色針織材質超短裙裙褲組合，針織延伸至大腿，特殊的穿著舒適度與視覺效果", en:"off-white knit ultra-short skirt-shorts combination, knit extending down thighs, special wearing comfort and visual effect" },
    { id:"b65",  label:"深黑色絲絨高腰窄裙",   zh:"深黑色絲絨高腰細長窄管型長裙，窄裙管製造一步裙的步態，黑色天鵝絨的優雅沉默", en:"deep black velvet high-waist slim tube maxi skirt, narrow skirt creating pencil-skirt stride, black velvet elegant silence" },
    { id:"b66",  label:"淡藍色細燈芯絨短褲",   zh:"淡藍色細燈芯絨材質高腰寬鬆短褲，細緻的燈芯絨紋路質感，秋日的柔軟俏皮感", en:"pale blue fine corduroy high-waist relaxed shorts, fine corduroy texture detail, autumn's soft playful feel" },
    { id:"b67",  label:"白色薄紗疊裙裙",       zh:"白色多層薄紗疊裙，如芭蕾舞者tutu般蓬鬆，夢幻仙女的視覺表達，行走如雲朵", en:"white multi-layer organza tutu skirt, as voluminous as ballet dancer's tutu, dreamlike fairy visual, moving like clouds" },
    { id:"b68",  label:"森林綠色仿麂皮短裙",   zh:"森林綠色仿麂皮質感高腰A字短裙，柔軟絨面製造豐富的受光效果，秋冬自然系美感", en:"forest green faux suede high-waist A-line mini skirt, soft nap creating rich light-catching effects, autumn-winter nature-inspired beauty" },
    { id:"b69",  label:"裂紋感皮革迷你短裙",   zh:"帶有獨特裂紋老化肌理的仿舊皮革迷你短裙，做舊裂紋質感如歲月留下的印記，朋克藝術感", en:"faux-aged crackle texture leather mini skirt, crackle patina like time's marks, punk artsy feel" },
    { id:"b70",  label:"奶油白色雙縐紗長裙",   zh:"奶油白色雙縐紗（Double crepe）質感高腰A字長裙，布料自然的微縐紋路，高訂感的空氣質感", en:"off-white double crepe texture high-waist A-line maxi skirt, fabric's natural micro-crinkle, haute couture airy quality" },
    { id:"b71",  label:"拼布牛仔闊腿褲",       zh:"多種不同水洗牛仔布塊拼布縫合的闊腿長褲，手工藝感的環保再造美學，每條獨一無二", en:"multi-wash denim patchwork wide-leg trousers, handcraft upcycle aesthetic, each pair one-of-a-kind" },
    { id:"b72",  label:"奶白色荷葉邊短裙",     zh:"奶白色多層荷葉邊超短迷你裙，豐盈的蓬量感，甜美少女浪漫主義的純粹視覺表達", en:"off-white multi-tier ruffle ultra-mini skirt, voluminous fullness, pure visual expression of sweet girlish romanticism" },
    { id:"b73",  label:"深灰色緊身中長連身裙",  zh:"深灰色彈性緊身Bodycon中長連衣裙，俐落的都市夜晚造型，沒有任何多餘的完美剪裁", en:"dark gray stretch bodycon midi dress, clean urban evening look, perfectly cut with nothing superfluous" },
    { id:"b74",  label:"深藍色毛呢高腰短褲",   zh:"深靛藍色精紡毛呢高腰寬鬆短褲，與同色外套套裝搭配，老錢秋冬套裝的精確詮釋", en:"deep indigo fine-wool high-waist relaxed shorts, paired with matching blazer as suit, old money autumn-winter suit precise interpretation" },
    { id:"b75",  label:"亮粉色絲緞側開衩中長裙",zh:"亮玫瑰粉色絲緞材質側高開衩中長裙，飽和色調搭配高開叉，Barbiecore的成熟版表達", en:"bright rose pink satin side high-slit midi skirt, saturated color with high slit, Barbiecore's mature expression" },
    { id:"b76",  label:"黑色緞帶圍裹式半裙",   zh:"黑色圍裹式半裙以緞帶在腰部打結固定，圍裹設計自然貼合各種身形，性感而優雅", en:"black wrap skirt secured with ribbon bow tie at waist, wrap design naturally flattering every figure, sensual yet elegant" },
    { id:"b77",  label:"白色棉質百褶長裙",     zh:"純白色棉質細百褶超長裙，地中海島嶼風情，簡單純粹的陽光夏日美學", en:"pure white cotton fine-pleat maxi skirt, Mediterranean island atmosphere, simply pure sunshine summer aesthetic" },
    { id:"b78",  label:"奶茶棕針織包臀裙",     zh:"奶茶棕色針織彈性包臀中長裙，柔軟的針織包裹完美呈現身體線條，慵懶性感", en:"milk-tea brown knit stretch bodycon midi skirt, soft knit wrapping perfectly revealing body lines, lazy sensual" },
    { id:"b79",  label:"皮革拼接棉質長褲",     zh:"黑色仿皮革側條紋拼接棉質長褲，運動感的側縫細節，Street Luxe的精準詮釋", en:"black faux leather side-stripe spliced cotton trousers, sporty side-seam detail, street luxe precise interpretation" },
    { id:"b80",  label:"奶油色喀什米爾緊身長褲",zh:"奶油色超細喀什米爾彈性修身長褲，無可比擬的奢華觸感，安靜奢華美學的下裝核心", en:"cream ultra-fine cashmere stretch slim trousers, incomparable luxury touch, quiet luxury aesthetic's bottom core" },
    { id:"b81",  label:"黑色印花絲絨寬腿褲",   zh:"深黑色大花卉或幾何印花絲絨寬腿長褲，光澤表面與大印花圖案的雙重視覺衝擊", en:"deep black oversized floral or geometric print velvet wide-leg trousers, dual visual impact of lustrous surface and large print" },
    { id:"b82",  label:"橄欖綠色束腳機能褲",   zh:"橄欖綠色束腳機能多口袋長褲，城市探索者的機能裝扮，舒適實用與時尚的極致融合", en:"olive green cinched-ankle technical multi-pocket trousers, urban explorer functional outfit, ultimate comfort-utility-fashion fusion" },
    { id:"b83",  label:"深紅色百褶前片裙",     zh:"深酒紅色僅前片有百褶的半裙，後片平整緊身，前後視覺的有趣對比設計", en:"deep burgundy front-pleat-only skirt, back smooth and fitted, interesting front-vs-back visual contrast design" },
    { id:"b84",  label:"奶白色輕薄層疊裙",     zh:"奶白色輕薄棉紗多層疊裙，每層若隱若現，如清晨霧氣般飄逸浪漫的視覺感", en:"off-white lightweight cotton gauze multi-layer tiered skirt, each layer translucent, drifting like morning mist romantic visual" },
    { id:"b85",  label:"電藍色光澤緊身褲",     zh:"電光藍色光澤彈性緊身長褲，在光下如活動的電光藍色霓虹，都市夜晚的電力十足", en:"electric blue lustrous stretch fitted trousers, like moving electric blue neon under light, charged urban nighttime energy" },
    { id:"b86",  label:"深棕色牛仔喇叭褲",     zh:"深棕色做舊牛仔布超誇張喇叭褲，褲管從膝蓋以下大幅張開，70年代再臨的率性", en:"dark brown distressed denim ultra-dramatic bell-bottom jeans, leg dramatically flaring below knee, 70s revival free spirit" },
    { id:"b87",  label:"印花緞面迷你裙",       zh:"大型熱帶或幾何圖案印花緞面高腰迷你裙，圖案與布料光澤的雙重視覺衝擊", en:"large tropical or geometric print satin high-waist mini skirt, dual visual impact of pattern and fabric sheen" },
    { id:"b88",  label:"米色系裝飾鈕扣A字裙",  zh:"米白色裝飾鈕扣排列成一排的A字中長裙，鈕扣線條引導視線，法式優雅的精緻細節感", en:"off-white decorative button-row A-line midi skirt, button line guiding gaze, French elegant refined detail feel" },
    { id:"b89",  label:"紅色格紋百褶超短裙",   zh:"鮮紅色格紋細百褶超短裙，比特犬格紋的叛逆版詮釋，Punk Prep的視覺宣言", en:"vivid red plaid fine-pleat ultra-mini skirt, punk interpretation of plaid, punk prep visual manifesto" },
    { id:"b90",  label:"奶油色荷葉邊長裙褲",   zh:"奶油色裙裝與長褲結合的創新設計，外觀似裙但實為寬鬆褲，穿著舒適的雙重身份", en:"cream skirt-trouser fusion innovative design, looks like skirt but actually wide trousers, comfortable dual identity" },
    { id:"b91",  label:"黑色絲絨迷你裙",       zh:"深黑色絲絨高腰短版迷你裙，天鵝絨材質讓最簡單的剪裁也具有奢華感", en:"deep black velvet high-waist mini skirt, velvet material giving even the simplest cut a luxurious quality" },
    { id:"b92",  label:"奶白色開衩背面長裙",   zh:"奶白色後背開衩設計中長裙，正面乾淨簡潔，背後高開叉創造行走間的驚喜", en:"off-white back-slit midi skirt, front clean and simple, rear high slit creating surprise in motion" },
    { id:"b93",  label:"深藍色印花絲質長裙",   zh:"深海軍藍色大波浪印花真絲或仿絲超長裙，富有動感的印花圖案讓每個動作都充滿故事", en:"deep navy large wave print silk or silk-like maxi skirt, dynamic print making every movement story-filled" },
    { id:"b94",  label:"銀色金屬感百褶短裙",   zh:"銀色金屬感材質細百褶超短裙，在燈光下如流動的液態銀，舞台或夜場的強力單品", en:"silver metallic fine-pleat ultra-mini skirt, like flowing liquid silver under lights, powerful piece for stage or nightlife" },
    { id:"b95",  label:"棕色皮革拼牛仔混搭褲",  zh:"棕色皮革局部拼接牛仔布的混搭長褲，兩種截然不同材質的設計融合，後現代時尚表達", en:"brown leather partial-splice denim mixed trousers, fusion of two completely different materials, postmodern fashion expression" },
    { id:"b96",  label:"奶白色飄逸連衣長裙",   zh:"奶白色絲質或棉質輕盈飄逸全長連衣裙，如仙氣飄飄的白色羽毛環繞全身，神聖優雅", en:"off-white silk or cotton lightweight flowing maxi dress, like ethereal white feathers enveloping the body, divine elegance" },
    { id:"b97",  label:"深紫色絨面迷你短裙",   zh:"深紫羅蘭色天鵝絨短版迷你裙，紫色與絨面的結合散發高貴神秘的皇室氣質", en:"deep violet velvet mini skirt, purple meets velvet radiating noble mysterious royal quality" },
    { id:"b98",  label:"格紋Preppy迷你百褶裙",  zh:"黑白或棕米格紋準學院風高腰百褶迷你裙，Preppy核心的視覺符號，俏皮知性雙重美感", en:"black-white or brown-beige plaid prep high-waist pleated mini skirt, core preppy visual symbol, playful intellectual dual beauty" },
    { id:"b99",  label:"奶油色燈籠泡泡褲裙",   zh:"奶油色寬鬆燈籠造型泡泡褲裙，褲管在膝蓋處收束產生泡泡感，Harajuku趣味廓形", en:"cream loose lantern bubble trouser-skirt, legs cinched at knee creating bubble shape, Harajuku playful silhouette" },
    { id:"b100", label:"巧克力棕色麂皮長裙",   zh:"巧克力棕色仿麂皮長版A字裙，超柔軟的仿麂皮質感，秋日暖調大地色的極致表達", en:"chocolate brown faux suede A-line maxi skirt, ultra-soft faux suede quality, autumn warm earthy tones ultimate expression" },
    { id:"b101", label:"白色棉緞前開扣長裙",   zh:"白色棉緞面料前排扣A字長裙，從頭到腳的扣子排列，Regencycore的清純浪漫", en:"white cotton-satin front-button-down A-line maxi skirt, buttons from top to bottom, Regencycore pure romance" },
    { id:"b102", label:"亮色幾何塊拼接短裙",   zh:"多色幾何色塊拼接設計超短裙，Colorblock藝術感的大膽宣言，視覺多巴胺的極值", en:"multi-color geometric colorblock mini skirt, bold colorblock artistic declaration, dopamine visual maximum" },
    { id:"b103", label:"深黑色雙層緞面長裙",   zh:"深黑色雙層緞面超長裙，外層緞面流光溢彩，行走時布料如黑色液體向後流淌", en:"deep black double-layer satin maxi skirt, outer layer shimmer and luster, fabric flowing like black liquid backward in motion" },
    { id:"b104", label:"奶白亞麻高腰寬鬆褲",   zh:"奶白色亞麻棉質高腰寬鬆七分褲，自然皺紋質感，沙灘渡假的極致輕盈感", en:"off-white linen-cotton high-waist relaxed cropped trousers, natural wrinkle texture, beach vacation ultimate lightness" },
    { id:"b105", label:"鈷藍色緊身合身長褲",   zh:"鈷藍色高飽和度彈性緊身長褲，強烈的色彩個性，多巴胺穿搭的視覺爆炸焦點", en:"cobalt blue high-saturation stretch fitted trousers, strong color personality, dopamine dressing visual explosion focal point" },
    { id:"b106", label:"奶油羽毛邊飾迷你裙",   zh:"奶油色直身迷你短裙，裙擺邊緣點綴豐盈的羽毛裝飾，夢幻奢靡的視覺享受", en:"cream straight mini skirt with voluminous feather trim at hem, dreamlike opulent visual indulgence" },
    { id:"b107", label:"黑色蕾絲疊裙半裙",     zh:"黑色蕾絲多層疊裙半裙，蕾絲的透視與層疊製造豐富的深度，哥德式浪漫美學", en:"black lace multi-tier layered skirt, sheer and layered lace creating rich depth, gothic romantic aesthetic" },
    { id:"b108", label:"駝色精裁修身長褲",     zh:"駝色精裁高腰修身直筒長褲，完美比例的Quiet Luxury下裝，每個細節都低調精準", en:"camel precisely-cut high-waist slim straight trousers, perfect proportion quiet luxury bottom, every detail understated precise" },
    { id:"b109", label:"銀白色金屬感緊身裙",   zh:"銀白色金屬感彈性緊身Bodycon中長裙，在燈光下發出凜冽的金屬光芒，冰冷的現代女神感", en:"silver-white metallic stretch bodycon midi skirt, emitting cold metallic radiance under lights, icy modern goddess feeling" }
  ],

  LIGHT: [
    { id:"l1", label:"UV黑光霓虹", zh:"UV黑光霓虹", en:"UV blacklight blue ambient rainbow neon point sources" },
    { id:"l2", label:"食攤45°側打燈", zh:"食攤45°側打燈", en:"warm incandescent food stall lamp 45-degree side angle" },
    { id:"l3", label:"地下通道頂燈", zh:"地下通道頂燈", en:"overhead spot light from ceiling fluorescent cold white" },
    { id:"l4", label:"黃金時刻逆光", zh:"黃金時刻逆光", en:"golden hour backlight rim halo warm orange lens flare" },
    { id:"l5", label:"夜間霓虹反光", zh:"夜間霓虹反光", en:"night neon sign reflection ambient pink purple mixed lighting" },
    { id:"l6", label:"攝影棚柔光箱", zh:"攝影棚柔光箱", en:"large softbox diffused front light zero shadow clean studio" },
    { id:"l7", label:"單側硬光打側影", zh:"單側硬光打側影", en:"single hard light source from side 90-degree deep shadow" },
    { id:"l8", label:"自然窗光散射", zh:"自然窗光散射", en:"natural window daylight diffused soft ambient overcast sky" },
    { id:"l_adv1", label:"水下折射焦散", zh:"陽光穿透水面產生的動態焦散光斑，波紋狀的高光在肌膚與布料上交織閃爍，呈現迷幻的深海光影", en:"underwater refraction caustics, dancing ripple light patterns on skin and fabric, shimmering specular highlights, cyan ambient depth" },
    { id:"l_adv2", label:"百葉窗條紋光", zh:"強烈午後陽光穿透百葉窗，在身體與場景拉出規律的條紋狀陰影，隨曲線產生寫實的幾何形變", en:"cinematic Venetian blind shadows, strong afternoon sun creating rhythmic striped patterns, geometric light distortion over body curves" },
    { id:"l_adv3", label:"倫勃朗三角光", zh:"經典繪畫採光，單側45度強光源在臉部陰影處留下倒三角形高光，極具層次感與戲劇張力的深邃陰影", en:"Rembrandt lighting, 45-degree key light, distinct triangle of light on the shadowed cheek, high-contrast chiaroscuro, dramatic depth" },
    { id:"l_adv4", label:"丁達爾效應聖光", zh:"光線穿過煙霧或塵埃形成的清晰光束（Tyndall effect），絲縷分明的立體光路，營造出神聖或史詩般的電影感", en:"Tyndall effect, visible light rays piercing through haze, atmospheric volumetric lighting, ethereal cinematic sunbeams" },
    { id:"l_adv5", label:"UV黑光螢光反差", zh:"UV紫光環境，使白色衣物發出強烈冷色螢光，與暗部肌膚形成極高反差的視覺震撼，強調邊界輪廓", en:"UV blacklight environment, white fabric fluorescent glow, extreme high-contrast against dark skin, vibrant purple and neon cyan accents" },
    { id:"l_adv6", label:"螢幕藍光反射", zh:"黑暗中唯一的顯示器藍光投射在受光面上，邊緣帶有銳利的冷色輪廓光，營造深夜科技感與私密氛圍", en:"digital screen blue light reflection, sharp cool rim light in darkness, high-tech moody atmosphere, soft glow on facial features" },
    { id:"l_adv7", label:"黃金時刻逆光暈", zh:"日落時分低角度強逆光，在髮絲邊緣產生發光的環繞暈影（Halo effect），溫暖的橙黃色調充滿懷舊濾鏡感", en:"golden hour strong backlight, luminous hair halo effect, warm amber lens flare, soft dreamy glow, nostalgic film aesthetic" },
    { id:"l_adv8", label:"不鏽鋼反射焦散", zh:"環境光經由金屬或不鏽鋼表面反射出的破碎焦散光，在衣物上形成隨機的閃爍高光與冷硬對比", en:"metallic surface reflection caustics, fractured light patterns from stainless steel, specular glitter on fabric, sharp industrial lighting" },
    { id:"l_adv9", label:"彩色玻璃過濾光", zh:"光線穿透教堂或歐式彩色玻璃，將繽紛的幾何色彩投影在人物身上，隨身體起伏產生斑斕的材質交互", en:"stained glass filtered light, vibrant geometric color projections, kaleidoscopic lighting, complex color interplay on textures" },
    { id:"l_adv10", label:"火焰暖調閃動光", zh:"動態跳躍的暖橘色火焰光，伴隨著寫實的煙霧漫射效果，在皮膚上產生次表面散射的紅暈質感", en:"flickering firelight glow, warm orange dynamic illumination, realistic smoke diffusion, subsurface scattering (SSS) on skin edges" }
  ],

  SCENE: [
    "台灣夜市食攤 — 木頭攤台暖色燈箱復古招牌",
    "台北101夜景 — 耶誕燈飾樹夜拍",
    "台灣老巷弄 — 復古建築盆栽散景",
    "戶外山景觀景台 — 藍天綠植",
    "UV霓虹塗鴉裝置 — 藍紫光室外夜間",
    "捷運高架走廊 — 鋼骨天花通勤散景",
    "地下行人穿越道 — 白色弧形天花頂燈",
    "台灣傳統市場 — 冷藏海鮮攤藍色招牌",
    "便利商店室內 — 全家螢光燈綠色招牌",
    "城市廢墟 — 斑駁混凝土柱剝落油漆",
    "暖調閱讀室 — 落地燈書架窗光",
    "夜間公園 — 粉紅霓虹拱門裝置",
    "台灣傳統市場 — 濕漉地面反射攤位紅光，空氣中飄散著滷肉與海鮮的複合氣息",
    "西門町行人徒步區 — 五彩斑斕的廣告看板，動態的人流散景，強烈的都市節奏",
    "老舊公寓頂樓 — 鐵皮加蓋與生鏽的水塔，遠處微弱的夕陽餘暉，充滿生活氣息",
    "雨後的信義區街頭 — 柏油路面的積水完美倒映著霓虹招牌，極致的高對比冷暖色調",
    "淡水河畔黃金時刻 — 水面波光粼粼的橘紅色反光，遠方觀音山的深藍剪影",
    "九份山城石階 — 兩旁紅燈籠亮起，狹窄巷弄內的陰影層次豐富",
    "質感灰色沙發客廳 — 落地燈柔和的橙色光暈，營造出寧靜且私密的居家氛圍",
    "凌亂卻有溫度的書房 — 書架上堆滿書籍，筆電螢幕微光照亮臉部輪廓",
    "充滿蒸氣的浴室鏡前 — 半透明的霧氣，局部反射的光線，濕潤的視覺質感",
    "深夜便利商店 — 螢光燈管的冷白光，落地窗外的黑暗與室內光影的強烈對比",
    "深夜加油站 — 亮藍色頂棚螢光燈，不鏽鋼機柱的強烈反光，地面的油漬彩色焦散效果",
    "台北大巨蛋走廊 — 弧形金屬天花板，極致對稱透視，高強度頂部強光俯衝",
    "雨夜露營區 — 帳篷內的溫暖營燈，外層帆布淋濕後的半透明層疊質感，冷暖色調劇烈衝擊",
    "現代健身房更衣室 — 全身落地大鏡面空間，極致的冷色調環繞光，強調肌肉與布料線條",
    "私人遊艇甲板 — 烈日下的強烈側光，白色玻璃纖維反射的耀眼高光，背景是深藍海平面",
    "地下防空洞廢墟 — 單一光源從上方投射，光柱內飛揚的微塵，大面積深邃陰影與輪廓光",
    "工業風透明電梯 — 隨上升變動的外界霓虹，金屬框架與玻璃表面的多層次反射",
    "日式極簡水泥空間 — 僅有一道細長天窗透出的束光，在水泥牆上產生銳利的明暗界線",
    "高空景觀餐廳入口 — 自動感應的動態暖色光牆，背景是模糊的城市百萬夜景燈火",
    "私人機車車庫 — 重機的金屬零件反光，帶著機油味的暗沉光澤，豐富的微觀材質對比",
    "深夜自動洗車機內部 — 藍色與紫色的強烈霓虹光，水霧與泡沫在玻璃上形成的折射光斑",
    "高壓配電室 — 工業風格的黃黑警告標示，儀表板微弱的紅色綠色燈光，強烈的金屬冷硬感",
    "私人影音室 — 大螢幕投射出的藍光照亮面部，周圍極致的黑暗，高對比的剪影效果",
    "日落時分的機場展望台 — 機場跑道的動態燈光，強烈的逆光橙色地平線，金屬護欄的長影子",
    "台北老舊眷村巷弄 — 鏽蝕的紅色大門，斑駁的綠色窗框，午後漏斗狀的束光穿過樹蔭",
    "高級飯店無邊際泳池 — 夜間池底的湛藍光芒，水面波紋產生的動態焦散，遠處燈火輝煌的散景",
    "廢棄冷戰碉堡 — 厚重的混擬土質感，單一裂縫透出的自然強光，產生戲劇性的明暗對比",
    "現代藝術畫廊噴泉前 — 水幕後方的半透視感，強烈射燈穿透水滴產生的閃爍高光",
    "深夜露天燒烤攤 — 炭火冒出的橘紅暖光與煙霧，不鏽鋼桌面的油光反射，充滿煙火氣的光影",
    "高空透明步道 — 腳下俯瞰深淵的垂直透視，玻璃表面的反射與透射重疊，產生強烈暈眩張力",
    "雨後深夜的西門町 — 霓虹燈招牌在積水路面的完美鏡面反射，強烈的冷青色與暖橘色對比，空氣中帶有寫實的濕氣霧感",
    "高空景觀餐廳玻璃窗邊 — 城市萬家燈火形成的點狀散景（Bokeh），室內蠟燭暖光與窗外深藍夜色的冷暖交界",
    "工業風水泥藝廊 — 單一線性射燈投射出銳利的陰影，漂浮的微小塵埃捕捉了光束線條，極簡主義的高對比光學",
    "日式竹林中的薄霧晨光 — 丁達爾效應（Tyndall effect）產生的絲縷光束，竹葉間隙形成的細碎斑駁光影（Komorebi）",
    "深夜復古酒吧吧檯 — 威士忌酒瓶產生的琥珀色焦散光斑，金屬裝飾的閃爍高光，局部受光的戲劇性倫勃朗採光",
    "科幻風格數據機房 — 密集的LED指示燈陣列光，深藍色與品紅色的環繞光效，金屬架表面的亞光反光",
    "廢棄工廠的大天窗下 — 午後強烈的側逆光，照亮了飛揚的粉塵與斑駁的牆面紋理，產生史詩般的電影敘事張力",
    "私人豪華放映室 — 投影幕強烈的冷白光作為主光源，在臉部與衣物邊緣勾勒出銳利的藍色輪廓光，背光處深邃黑階",
    "夏日午後的百葉窗室內 — 規律的條紋狀光影覆蓋在肌膚與衣物上，隨身體曲線產生幾何形變，極強的視覺張力",
    "台北老舊眷村巷弄黃昏 — 低角度的橘紅殘陽穿透電線桿，在地面拉出長長的黑影，溫暖而懷舊的膠卷色調"
  ],

  POSE: [
    // ── 站立與行走動態 (Walking & Standing) ──
    { id: "p1", label: "回眸微風抓拍", zh: "動態抓拍，正在轉身回眸的瞬間，髮絲與裙襬因為慣性而飄逸，呈現微小的動態模糊，自然且充滿生命力", en: "dynamic candid capture, the exact moment of turning back to look over the shoulder, hair and skirt fluttering due to inertia, slight motion blur, natural and full of vitality" },
    { id: "p2", label: "自信台步前行", zh: "彷彿走在伸展台上的自信步伐，單腳正向前邁出，重心轉移的瞬間，肩膀自然擺動，充滿氣場的動態行走", en: "confident catwalk stride, one foot stepping forward, the exact moment of weight transfer, natural shoulder sway, powerful dynamic walking" },
    { id: "p3", label: "隨性插袋站姿", zh: "慵懶隨性的站姿，單手或雙手插在口袋裡，重心偏向一側的臀部，呈現經典的 S 型放鬆曲線", en: "lazy and casual standing pose, one or both hands in pockets, weight shifted to one hip, presenting a classic relaxed S-curve" },
    { id: "p4", label: "迎風仰望伸展", zh: "站在高處迎著風，雙手微微向兩側張開，頭部微仰享受微風，胸腔自然擴張，充滿呼吸感與自由氛圍", en: "standing against the wind on high ground, arms slightly spread to the sides, head tilted back enjoying the breeze, chest naturally expanded, full of breath and freedom" },
    { id: "p5", label: "靠牆屈膝放鬆", zh: "背部隨性地靠在牆壁或欄杆上，單腳微微屈膝抵住牆面，雙臂交叉於胸前，眼神帶有一絲不羈", en: "casually leaning back against a wall or railing, one knee slightly bent with foot resting on the wall, arms crossed over chest, a hint of rebellious gaze" },

    // ── 互動與微動作 (Interactive Micro-Motions) ──
    { id: "p6", label: "撩髮微動作", zh: "高密度自然動作，單手不經意地將耳邊的碎髮撩到耳後，頭部微微傾斜，眼神自然流轉，展現極致的微動作細節", en: "high-density natural motion, casually tucking loose hair behind the ear with one hand, head slightly tilted, eyes shifting naturally, showing extreme micro-motion details" },
    { id: "p7", label: "低頭整理衣領", zh: "視線微微向下看，雙手正在細心整理衣領或拉鍊，手指關節與布料產生真實的物理互動，極具日常抓拍感", en: "looking slightly downward, hands carefully adjusting collar or zipper, realistic physical interaction between finger joints and fabric, highly candid everyday feel" },
    { id: "p8", label: "輕托下巴沉思", zh: "手肘撐在某個平面上，單手輕輕托住下巴，食指微微觸碰臉頰，眼神呈現放空的沉思狀態", en: "elbow resting on a surface, one hand gently supporting the chin, index finger lightly touching the cheek, lost in thought with a hazy gaze" },
    { id: "p9", label: "回頭遞物互動", zh: "身體微側，手裡拿著一杯咖啡或物件正要遞向鏡頭，彷彿與觀看者產生了第一人稱的親密互動", en: "body slightly turned, holding a cup of coffee or object offering it towards the camera lens, creating intimate first-person interaction with the viewer" },
    { id: "p10", label: "遮擋刺眼陽光", zh: "單手舉起在額頭上方，微微瞇起眼睛以遮擋刺眼的逆光，指縫間透出細微的光斑灑在臉上", en: "one hand raised above the forehead, eyes slightly squinted to block harsh backlighting, subtle light spots leaking through fingers onto the face" },

    // ── 坐姿與蹲姿 (Sitting & Squatting) ──
    { id: "p11", label: "優雅交疊雙腿坐姿", zh: "坐在高腳椅或沙發上，雙腿優雅地交疊，腳背自然向下延伸，雙手輕輕放在大腿上，端莊且修長", en: "sitting elegantly on a barstool or sofa, legs gracefully crossed, instep naturally extended downward, hands resting gently on thighs, dignified and elongated" },
    { id: "p12", label: "抱膝蜷縮坐姿", zh: "坐在地上或床上，雙腿彎曲併攏，雙手環抱著小腿，下巴輕輕抵在膝蓋上，充滿安全感與惹人憐愛的氛圍", en: "sitting on the floor or bed, legs bent and together, arms wrapping around the calves, chin resting gently on knees, feeling secure and evoking pity" },
    { id: "p13", label: "階梯隨性高低坐", zh: "坐在階梯上，雙腳踩在不同的台階上形成高低錯落的視覺層次，手肘隨性地撐在較高的膝蓋上", en: "sitting casually on stairs, feet on different steps creating staggered visual levels, elbows casually resting on the higher knee" },
    { id: "p14", label: "街頭酷感蹲姿", zh: "典型的街頭潮人蹲姿 (Asian Squat)，單腳全腳掌著地，另一腳微微踮起，雙手自然垂放或搭在膝蓋上，態度十足", en: "classic streetwear Asian squat, one foot flat on the ground, the other slightly on tiptoes, hands hanging naturally or resting on knees, full of attitude" },
    { id: "p15", label: "前傾托腮注視", zh: "坐在桌前，上半身大幅度向前傾斜，拉近與鏡頭的距離，雙手交疊托住臉頰，眼神專注地盯著觀看者", en: "sitting at a desk, upper body leaning heavily forward closing distance to the camera, hands overlapped supporting cheeks, staring intently at the viewer" },

    // ── 高動態與極限張力 (High Dynamic & Tension) ──
    { id: "p16", label: "半空躍起滯空", zh: "正在半空中跳躍的瞬間，四肢自然舒展，髮絲與衣物因為失重狀態而向上漂浮，精準凍結的最高點滯空動態", en: "mid-air jumping moment, limbs naturally extended, hair and clothing floating upwards due to weightlessness, precisely frozen at the peak of hang time" },
    { id: "p17", label: "狂奔急停轉身", zh: "在極速奔跑中突然煞車並轉身的瞬間，身體因為強大慣性而產生極具爆發力的物理傾斜，充滿腎上腺素的動作感", en: "the moment of suddenly braking and turning while sprinting, body physically tilting intensely due to powerful inertia, adrenaline-filled action" },
    { id: "p18", label: "後仰閃避防禦", zh: "上半身呈現極限向後仰的下腰姿勢，雙手舉起做出防禦或閃避的動作，展現強大的核心力量與身體柔韌度", en: "upper body leaning back in an extreme matrix-style dodge, hands raised in defense or evasion, showing powerful core strength and body flexibility" },
    { id: "p19", label: "前撲失重墜落", zh: "身體失去平衡向前撲倒或墜落的瞬間，雙手下意識地向前伸出尋找抓地力，極具驚險感與電影第一視角衝擊力", en: "the moment of losing balance and falling forward, hands subconsciously reaching out for grip, thrilling and highly impactful cinematic first-person view" },
    { id: "p20", label: "芭蕾極限延展", zh: "如同專業芭蕾舞者般的極限肢體延展，單腿高高踢起或向後延伸，雙臂呈現完美的幾何弧線，將力與美結合到極致", en: "extreme limb extension like a professional ballet dancer, one leg kicked high or extended backwards, arms forming perfect geometric arcs, combining ultimate power and beauty" },

    // ── 攝影視角與姿態配合 (Camera Angle Synergies) ──
    { id: "p21", label: "俯視仰望鏡頭", zh: "鏡頭由上往下俯拍，人物微微抬起頭，睜大眼睛無辜地看著鏡頭，呈現出楚楚可憐的弱勢感與親密感", en: "camera looking down from above, character slightly raising head, eyes wide open looking innocently into the lens, presenting a pitiful vulnerable and intimate feel" },
    { id: "p22", label: "仰視俯瞰眾生", zh: "鏡頭由下往上仰拍，人物下巴微微抬高，眼神向下睥睨著鏡頭，雙手抱胸，充滿不可一世的女王氣場", en: "camera looking up from below, character's chin slightly raised, looking down disdainfully at the lens, arms crossed, full of unstoppable queen-like aura" },
    { id: "p23", label: "側面回眸輪廓", zh: "完全側身的站姿，僅頭部轉向鏡頭方向，完美展現鼻樑、下顎線與脖頸的立體輪廓與光影過渡", en: "completely sideways standing pose, only the head turning towards the lens, perfectly showcasing the 3D contour and lighting transition of the nose bridge, jawline, and neck" },
    { id: "p24", label: "背影漸行漸遠", zh: "背對著鏡頭向前行走的背影，微微側過頭但看不見全臉，留下無限遐想的背部曲線與敘事感", en: "walking away with back facing the camera, head slightly turned but not showing the full face, leaving infinite imagination of the back curve and narrative feel" },
    { id: "p25", label: "貼地慵懶側臥", zh: "慵懶地側躺在地面或床上，單手撐住頭部，身體曲線沿著地面延伸，從極低角度捕捉的私密放鬆時刻", en: "lazily lying on the side on the floor or bed, one hand supporting the head, body curves extending along the surface, intimately relaxed moment captured from a very low angle" },

    // ── 情境互動與配件結合 (Prop & Scenario Interaction) ──
    { id: "p26", label: "雙手捧杯取暖", zh: "雙手緊緊捧著一杯熱騰騰的馬克杯貼近臉頰，肩膀微微聳起，試圖從杯子中汲取溫暖，充滿冬季的溫馨感", en: "holding a steaming mug tightly with both hands close to the cheek, shoulders slightly hunched, trying to draw warmth from the cup, full of cozy winter vibes" },
    { id: "p27", label: "推墨鏡犀利視線", zh: "單手的食指輕輕推著滑落的墨鏡邊框，視線從墨鏡上方犀利地透射出來，充滿精明與帥氣感", en: "index finger lightly pushing up the frame of slipping sunglasses, piercing gaze shooting over the top of the glasses, full of shrewdness and coolness" },
    { id: "p28", label: "拉扯外套邊緣", zh: "雙手不安分地拉扯著外套的拉鍊或衣擺，布料產生明顯的拉伸皺褶，帶有一點緊張或不耐煩的小動作", en: "hands restlessly pulling at the zipper or hem of a jacket, fabric showing obvious stretching wrinkles, a micro-motion conveying slight nervousness or impatience" },
    { id: "p29", label: "單手遮臉窺視", zh: "單手五指張開輕輕覆蓋在臉上，僅露出一隻眼睛透過指縫窺視著鏡頭，神秘且充滿心理學張力的姿態", en: "one hand with fingers spread gently covering the face, only one eye peeking through the gaps at the lens, mysterious pose full of psychological tension" },
    { id: "p30", label: "輕咬手指誘惑", zh: "食指或大拇指輕輕抵在嘴唇上或被牙齒微咬，眼神迷離，帶有強烈性暗示與純欲感的挑逗姿態", en: "index finger or thumb gently resting on lips or lightly bitten by teeth, hazy gaze, a teasing pose with strong sensual undertones and innocent-lust feel" },

    // ── 日常高密度微動作 (Everyday Micro-Actions) ──
    { id: "p31", label: "脫外套至一半", zh: "正在脫下外套的瞬間，外套褪至肩膀一半卡在手肘處，露出裡面的內搭，展現不經意的性感與層次感", en: "the moment of taking off a jacket, jacket halfway down the shoulders caught at the elbows, revealing the inner layer, showing unintentional sexiness and layering" },
    { id: "p32", label: "綁馬尾雙臂上舉", zh: "雙臂高高舉起正在腦後紮馬尾，胸腔自然挺起，腰部線條因拉伸而收緊，極具健康美感的日常瞬間", en: "arms raised high tying a ponytail behind the head, chest naturally lifted, waistline tightened due to stretching, an everyday moment full of healthy beauty" },
    { id: "p33", label: "穿鞋彎腰平衡", zh: "單腳站立，上半身彎腰正在調整另一隻腳的鞋帶或高跟鞋繫帶，身體微微搖晃保持平衡的生動感", en: "standing on one leg, upper body bent over adjusting the shoelace or heel strap of the other foot, vividly showing the slight swaying to maintain balance" },
    { id: "p34", label: "撐傘擋雨傾斜", zh: "單手握著雨傘的握把，傘面微微向迎風面傾斜，另一隻手護住胸前，對抗惡劣天氣的寫實體態", en: "holding an umbrella handle with one hand, umbrella slightly tilted towards the wind, the other hand protecting the chest, realistic posture fighting bad weather" },
    { id: "p35", label: "滑手機低頭族", zh: "雙手捧著手機，螢幕光反射在臉上，脖子微微前傾，現代人最標準且寫實的數位生活沉浸姿態", en: "holding a phone with both hands, screen light reflecting on the face, neck slightly leaning forward, the most standard and realistic digital life immersion posture of modern people" },

    // ── 舞蹈與極致流暢感 (Dance & Fluidity) ──
    { id: "p36", label: "旋轉裙襬如花", zh: "原地快速旋轉，柔軟的長裙因為離心力而完美綻放成一個圓盤，人物在中心保持絕對平衡，充滿歡愉感", en: "spinning quickly on the spot, soft long skirt blooming perfectly into a disk due to centrifugal force, character maintaining absolute balance in the center, full of joy" },
    { id: "p37", label: "下腰指尖觸地", zh: "展現驚人柔軟度的體操或現代舞動作，向後下腰直到指尖輕輕觸碰到地面，身體形成完美的拱門形狀", en: "gymnastics or modern dance move showing incredible flexibility, bending backward until fingertips gently touch the ground, body forming a perfect arch shape" },
    { id: "p38", label: "雙人探戈傾倒", zh: "彷彿在跳探戈，身體極度向後傾倒，完全將重量交給看不見的舞伴，頸部向後延伸，充滿張力與信任感", en: "as if dancing tango, body leaning extremely backward, completely surrendering weight to an invisible partner, neck extended backwards, full of tension and trust" },
    { id: "p39", label: "水袖揮舞動態", zh: "雙臂猛烈揮舞，長袖或披肩在空中畫出如水波般流暢的 S 型軌跡，將無形的風與力量具象化", en: "arms waving vigorously, long sleeves or shawl tracing fluid S-shaped water-like trajectories in the air, materializing invisible wind and power" },
    { id: "p40", label: "靜止的爆發前夕", zh: "如同獵豹蓄勢待發的蹲伏姿態，肌肉緊繃，重心壓低，處於絕對靜止卻隨時準備爆發衝刺的高壓瞬間", en: "crouching posture like a cheetah ready to pounce, muscles tense, center of gravity lowered, in absolute stillness but high-pressure moment ready to sprint at any second" }
  ],

  ACC: [
    { id:"a1", label:"哥德十字架多層鍊", zh:"黑色皮革頸鍊多層哥德十字架吊墜", en:"black leather choker layered gothic cross pendant chain fringe" },
    { id:"a2", label:"金色別針項鍊", zh:"金色安全別針吊墜鎖骨鍊", en:"gold safety pin pendant necklace collarbone" },
    { id:"a3", label:"銀色細鍊項鍊", zh:"細款銀色精緻鍊條項鍊", en:"thin silver delicate chain necklace" },
    { id:"a4", label:"灰藍編織鍊", zh:"灰藍色編織鍊條項鍊", en:"gray-blue braided chain necklace" },
    { id:"a5", label:"金屬鉚釘腰帶", zh:"金屬鉚釘低腰臀部腰帶", en:"metal studded belt low-rise hip" },
    { id:"a6", label:"黑色手提包", zh:"黑色結構感手提包手拿包", en:"black structured handbag clutch" },
    { id:"a7", label:"厚底黑靴", zh:"黑色厚底台灣靴及膝款", en:"black chunky platform boots knee-high" },
    { id:"a8", label:"金色安全別針", zh:"金色超大安全別針胸口別針", en:"gold oversized safety pin brooch chest" }
  ],

  BRA: [
    { en:"front button pulling under lateral tension — fabric gaping slightly at center bust", zh:"🔥 [緊] 鈕扣橫向拉扯 — 前襟鈕扣在胸部張力下緊繃，形成微小開口氣隙" },
    { en:"rib knit laterally expanded at maximum tension zone — geometric peak marker clearly widened", zh:"🎯 [緊] 羅紋峰值擴張 — 羅紋間距在曲線最高點被撐至最寬，展現拉伸極限" },
    { en:"side seam tension lines radiating from stress point — mechanical fabric physics visible", zh:"✨ [緊] 側縫放射張力線 — 側縫在最大應力點產生向外放射狀的緊繃皺褶" },
    { en:"zipper teeth straining against outward pressure — metallic line curving along body contour", zh:"⚡ [緊] 拉鍊咬合張力 — 金屬拉鍊在向外的物理壓力下緊繃，形成S型弧線" },
    { en:"cross-strap tension geometry — diagonal pressure lines deeply mapping the fabric surface", zh:"🔮 [緊] 交叉斜向拉力 — 肩帶的斜向拉力在布料表面產生深刻的幾何壓力線" },
    { en:"seam thread casting micro-shadow under extreme stretch — tailoring limits exposed", zh:"🪡 [緊] 車縫線微陰影 — 在極限拉伸下，車縫線微微浮凸並在布面上投下細小陰影" },
    { en:"clothing folds completely disappearing over the highest point of curvature — tension smoothing", zh:"🪞 [緊] 頂點無痕平滑 — 布料所有的抓皺與皺褶在曲線最高處被徹底撐平" },
    { en:"drawstring cinched tight creating radial outward tension folds across the abdomen", zh:"🎀 [緊] 抽繩放射皺褶 — 抽繩被拉緊，向外拉扯出強烈的放射狀動態皺褶" },
    { en:"waistband digging slightly into soft skin — flesh gently spilling over the compression line", zh:"⌛ [緊] 腰頭微肉擠壓 — 緊身褲腰頭微微勒入肌膚，上方擠出極其自然的微肉感" },
    { en:"garment twisting around the torso — diagonal drag lines showing rotational body movement", zh:"🌪️ [緊] 軀幹扭轉螺旋線 — 衣服隨身體轉動產生斜向的螺旋拉扯線條" },
    { en:"keyhole cutout stretching from a circle into an oval due to horizontal expansion", zh:"👁️ [緊] 鏤空幾何擴張 — 胸前的圓形鏤空剪裁，因橫向張力被撐成橢圓形" },
    { en:"latex/leather material producing extreme high-contrast specular highlights on peak curves", zh:"🖤 [緊] 乳膠極限高光 — 皮革材質在最突出的曲線上產生極度銳利的高光反射" },
    { en:"semi-sheer layer shadow visible — inner bra structure silhouette passing through outer fabric due to extreme stretch", zh:"🌊 [透] 透層疊影痕跡 — 極限拉伸使布料變薄，清晰透出內部內衣的深色陰影與邊界輪廓" },
    { en:"fabric stretched so thin the underlying skin tone dynamically shifts the garment color", zh:"🍑 [透] 張力變色效應 — 布料在最高處被撐至極薄，底層膚色透出改變了衣服色澤" },
    { en:"backlight revealing body silhouette through thin fabric — rim light wrapping the edges", zh:"🌅 [透] 逆光輪廓透視 — 強烈逆光穿透輕薄布料，身體真實輪廓被光線完美勾勒" },
    { en:"sweat-dampened fabric clinging to skin — semi-translucent wet look exposing underlying geometry", zh:"💧 [透] 微濕透視貼合 — 帶有水氣的布料緊貼肌膚，半透明水波質感展現底層起伏" },
    { en:"sunlight subsurface scattering through fine lace — warm skin glow radiating outward", zh:"☀️ [透] 蕾絲次表面散射 — 陽光穿透細緻蕾絲，肌膚的溫暖紅暈在布料下向外漫射" },
    { en:"fabric opacity gradient — turning from opaque at the waist to totally sheer at the bust", zh:"🪟 [透] 漸變透視厚度 — 布料厚度從腰部的完全不透光，漸變到高點的極度薄透" },
    { en:"flash photography exposing reflective threads in the fabric weave — paparazzi style lighting", zh:"📸 [透] 閃光燈反光絲線 — 強光直打暴露了布料纖維中的反光材質與微觀紋理" },
    { en:"chiffon light trapping — multiple translucent layers capturing and diffusing ambient light", zh:"🌫️ [透] 雪紡捕光效應 — 多層半透明雪紡層層疊加，捕捉並柔化了周圍的環境光" },
    { en:"lace trim boundary contrast against bare skin — intricate pattern resting on smooth surface", zh:"🌿 [透] 蕾絲邊界對比 — 繁複的蕾絲邊緣平貼在光滑的肌膚上，材質對比極度搶眼" },
    { en:"pocket lining faintly visible through tight denim stretched across the hip", zh:"👖 [透] 丹寧緊繃透印 — 緊身牛仔褲在臀部被極度撐開，內部口袋布邊緣隱約浮現" },
    { en:"UV fluorescent outline display — blacklight activates white fabric glow over dark skin", zh:"🌈 [透] 螢光高反差顯影 — UV黑光激發布料螢光，與暗部肌膚形成強烈明暗對比" },
    { en:"horizontal compression banding across the chest — fabric pressing flat against the curve apex", zh:"💎 [覆] 橫向壓縮張力 — 因前傾姿態，布料在最高點形成平坦的橫向壓迫張力帶" },
    { en:"from extreme high-angle, fabric tension maps 3D topography, emphasizing structural depth", zh:"🪐 [覆] 俯視立體深度 — 極端俯視角下，緊繃布料勾勒軀幹立體等高線，強調深度" },
    { en:"fabric pressed absolutely flat against upper breast contour — zero gap surface contact", zh:"🧊 [覆] 絕對零縫隙貼合 — 布料與上胸輪廓之間毫無空隙，如第二層肌膚般平整" },
    { en:"fabric separation forming visible air gap between breasts — physics of tension release", zh:"🌟 [覆] 中央懸空縫隙 — 布料在雙峰之間的張力釋放區形成無法貼合的空氣間隙" },
    { en:"micro-shadow crevice between fabric and skin at the neckline — surface depth indicator", zh:"🌺 [覆] 領口深邃微影 — 布料邊緣與胸口肌膚之間形成細微卻深邃的陰影縫隙" },
    { en:"inner bra outline creating subtle 3D relief on the fabric surface — structural emboss effect", zh:"🗿 [覆] 結構浮雕效應 — 內部結構將緊繃布料頂出，形成微小的立體浮雕痕跡與陰影" },
    { en:"neckline drape expanding downward under gravity — heavy fabric weight physics", zh:"🎭 [覆] 重力領口垂墜 — 布料因自身重量自然下垂，形成向下擴張的Ｕ型拉扯" },
    { en:"cowl neck fabric pooling between curves — elegant shadow accumulation in the folds", zh:"🦢 [覆] 蕩領垂墜積影 — 蕩領布料自然堆疊垂落，皺褶處積累了豐富的陰暗層次" },
    { en:"underbust band rolling up slightly due to torso movement — dynamic everyday wear realism", zh:"🔄 [覆] 下擺動態捲邊 — 上衣下擺因身體扭動而微微向上翻捲，捕捉真實生活動態" },
    { en:"heavy knit sweater sliding down one arm — exposing the contrast of delicate bralette strap", zh:"🧶 [覆] 粗針織滑落對比 — 厚重毛衣滑落單臂，暴露出內層極細緻的肩帶邊緣" },
    { en:"plunging V-neck sharply defined by invisible fabric tape — defying gravity structure", zh:"✂️ [覆] 逆重力深V邊界 — 深V領口邊緣異常服貼筆挺，宛如使用防走光貼的物理狀態" },
    { en:"cup separation ridge sharply visible through outer shirt — dual dome geometry", zh:"🪐 [覆] 雙穹頂分隔線 — 雙峰之間的分隔脊線透過外衣銳利顯現，精準定義內在幾何結構" },
    { en:"bust contour upper arc clearly defined through stretched fabric — distinct silhouette edge", zh:"🌙 [覆] 上緣弧線浮現 — 布料緊貼輪廓，胸線上緣的飽滿弧度在拉伸布面中清晰可辨" },
    { en:"thick ribbed fabric mapping the underbust curve — 3D topography of the torso", zh:"🗺️ [覆] 下胸圍等高線 — 厚實的布料完美順應並勾勒出下胸圍的內收立體結構" },
    { en:"corset boning pressing outward against the fabric covering — rigid structure vs soft body", zh:"🦴 [覆] 馬甲魚骨外擴 — 馬甲內建的硬質魚骨被向外撐起，在布面上形成垂直脊線" },
    { en:"spaghetti strap creating micro-indentation on shoulder skin — weight and pressure point visible", zh:"🏹 [細] 細肩帶微凹陷 — 極細肩帶在肩膀肌膚壓出微小的受力凹陷，展現物理重量" },
    { en:"off-shoulder fabric edge forming horizontal tension line along lower collarbone", zh:"🦋 [細] 鎖骨水平張力線 — 一字領沿鎖骨下緣形成緊繃橫向邊界，肩部骨感完全裸露" },
    { en:"one strap casually slipping off the shoulder — asymmetric gravity pull breaking composition", zh:"🥀 [細] 肩帶滑落失衡 — 單側肩帶不受控地滑落至上手臂，不對稱重力打破視覺平衡" },
    { en:"open-mesh hexagonal cells stretched and distorted at body curve peak — geometric deformation", zh:"🕸️ [細] 網眼極限畸變 — 蜂巢網眼在曲線峰值被撐開拉伸，網格規律性變形清晰可見" },
    { en:"Henley button placket vertical centerline — drawing the viewer's eye downward to the chest", zh:"🔲 [細] 扣門中軸視覺引導 — 排扣的排列形成垂直分割線，強制引導視線向深處聚焦" },
    { en:"micro-fuzz on the sweater catching rim light — enhancing the tactile softness of the chest area", zh:"🐑 [細] 邊緣絨毛捕光 — 毛衣表面的微小細絨毛捕捉了輪廓光，大幅增強觸覺柔軟度" },
    { en:"pendant necklace settling deeply into the cleavage crease — metal contrasting with soft shadow", zh:"✝️ [細] 墜飾深陷陰影 — 金屬項鍊墜飾自然滑落並深陷於深邃陰影中，冷硬與柔軟對比" },
    { en:"water droplets resting on the upper chest skin just above the fabric line — surface tension", zh:"💦 [細] 鎖骨水珠表面張力 — 汗水停留在布料邊緣上方的肌膚，水滴表面張力清晰可見" },
    { en:"goosebumps visible on bare shoulder skin reacting to cold ambient light — hyper-realism", zh:"🥶 [細] 溫差微豎毛孔 — 裸露的肌膚在冷色調環境光下浮現細微的雞皮疙瘩，極致寫實" },
    { en:"stray strand of hair caught under the bra strap — everyday accidental aesthetic", zh:"💇‍♀️ [細] 髮絲壓痕干涉 — 一縷散落的髮絲被不經意地壓在肩帶下方，極具生活感" },
    { en:"fabric pilling (bobbles) visible in high-friction areas — ultra-detailed texture rendering", zh:"🧶 [細] 摩擦起球細節 — 在布料經常摩擦的高點邊緣，能看見極為寫實的微小毛球紋理" },
    { en:"sharp contrast between matte skin powder and glossy lip/sweat reflecting ring light", zh:"💄 [細] 啞光與高光對比 — 身體肌膚的啞光粉感與局部汗水的高光反光形成質感碰撞" }
  ],

  CHARS: {
    arathi:{ name:"Arathi", color:"#ff6b35", en:"Arathi exotic striking beauty deep dark eyes defined bone structure warm complexion long dark hair powerful feminine", zh:"Arathi，異國風情強烈美感，深邃暗眸，輪廓分明，高對比暖膚色，深色長髮，強勢女性氣場" },
    sakura:{ name:"Sakura", color:"#ff85c2", en:"Sakura delicate soft beauty pale luminous skin gentle dark eyes graceful feminine elegant refined", zh:"Sakura，柔美細膩，白皙透亮肌膚，溫柔深眸，優雅女性氣質，精緻五官" },
    aitana:{ name:"Aitana", color:"#00bfa5", en:"Aitana Taiwanese soft-cute beauty long straight dark brown hair warm medium skin tone round soft face full cheeks doe expressive eyes natural brows pink lips petite curvy figure playful expressive personality", zh:"Aitana，台灣系軟萌美女，深棕色長直髮微波尾，暖色中等膚色，圓潤柔和臉型，飽滿臉頰，水汪汪大眼，自然眉形，粉嫩唇色，嬌小有料身材，表情豐富活潑俏皮" },
       gem:{ name:"Gem", color: "#a855f7", en: "Gem, stunning futuristic beauty, glowing flawless skin, striking eye makeup with gemstone accents, modern cyber-chic elegance, modern stylish office OL image, highly detailed face", zh: "Gem，令人驚豔的現代未來感美女，發光無瑕的肌膚，眼部帶有寶石碎鑽點綴，現代時尚上班OL的形象，極高細節的面部特徵" }
  },

  DIRECTION: {
    ref_prefix:[
      { id:"rp0", label:"不使用參考圖", zh:"", en:"" },
      { id:"rp1", label:"精確還原面部特徵", zh:"精確還原人物面部特徵、膚色與髮型", en:"perfectly preserve subject facial features, skin tone and hairstyle" },
      { id:"rp2", label:"完整保留人物外貌", zh:"完整保留人物外貌，面部與體型比例不變", en:"maintain subject complete appearance, face and body proportion unchanged" },
      { id:"rp3", label:"以參考圖人物為基礎", zh:"以參考圖人物為基礎", en:"based on reference photo subject" },
      { id:"rp4", label:"同一人物換裝", zh:"同一人物進行換裝，面部識別度完全保留", en:"same person outfit swap, facial identity fully preserved" }
    ],
    ref_core:[
      { id:"rc1", label:"穿著以下服裝造型", zh:"穿著以下服裝造型", en:"wearing the outfit described below" },
      { id:"rc2", label:"替換為以下服裝搭配", zh:"替換為以下服裝搭配", en:"outfit replaced with the following combination" },
      { id:"rc3", label:"呈現以下穿搭風格", zh:"呈現以下穿搭風格", en:"presenting the following styling look" }
    ],
    ref_suffix:[
      { id:"rs0", label:"不加後綴", zh:"", en:"" },
      { id:"rs1", label:"面部體型保持原樣", zh:"面部特徵與體型比例保持與參考圖完全一致", en:"facial features and body proportions remain exactly as reference" },
      { id:"rs2", label:"人物識別度完全保留", zh:"人物識別度完全保留，細節精確還原", en:"subject identity fully retained with precise detail reproduction" },
      { id:"rs3", label:"保持膚色髮型神情一致", zh:"保持膚色髮型與神情一致", en:"skin tone hairstyle and expression consistent with reference" }
    ],
    ratio:[
      { id:"r1", label:"9:16 豎版", zh:"9:16豎版比例", en:"9:16 vertical aspect ratio" },
      { id:"r2", label:"4:5 豎版", zh:"4:5豎版比例", en:"4:5 vertical aspect ratio" },
      { id:"r3", label:"2:3 豎版", zh:"2:3豎版比例", en:"2:3 vertical aspect ratio" },
      { id:"r4", label:"1:1 正方", zh:"1:1正方形構圖", en:"1:1 square composition" },
      { id:"r5", label:"16:9 橫版", zh:"16:9橫版比例", en:"16:9 horizontal aspect ratio" }
    ],
    person_size:[
      { id:"ps1", label:"人物佔滿高度", zh:"人物佔滿畫面全高，主體主導構圖", en:"subject fills full frame height dominant composition" },
      { id:"ps2", label:"人物佔75%以上", zh:"人物主體佔畫面75%以上", en:"subject fills over 75% of frame" },
      { id:"ps3", label:"半身特寫", zh:"半身特寫，人物靠近鏡頭", en:"half-body close-up subject near camera" },
      { id:"ps4", label:"超近強壓迫感", zh:"全身超近距離，強烈壓迫感", en:"full body extreme close distance strong compression feel" },
      { id:"ps6", label:"小人物大景", zh:"人物比例極小，廣闊宏大的場景刻畫，展現環境的壯麗與人物的渺小對比，極致細節的史詩感環境", en:"tiny character in a massive landscape, expansive macro scene depiction, contrasting the majestic environment with the tiny figure, highly detailed epic environment" },
      { id:"ps7", label:"螞蟻視角微縮", zh:"將人物縮小至場景邊緣，大面積留白的極簡環境構圖，強調空間的孤獨感與深邃感，電影級廣角遠景", en:"character positioned at the edge of the frame, minimalist environmental composition with massive negative space, emphasizing spatial loneliness and depth, cinematic wide-angle distant shot" }
    ],
    expression: [
      { id: "e0", label: "🚫 不指定", zh: "", en: "" },
      
      // ── 喜悅與生動笑容 (Joy & Vivid Smiles) ──
      { id: "e1", label: "✨ 陽光燦爛大笑", zh: "毫無防備的燦爛大笑，眼角擠出真實且自然的笑紋，露出整齊潔白的牙齒，臉頰蘋果肌飽滿隆起，充滿極具感染力的生命力", en: "unguarded radiant laugh, real and natural smile lines crinkling around the eyes, revealing neat white teeth, plump apple cheeks, full of highly infectious vitality" },
      { id: "e2", label: "🌸 溫柔甜美淺笑", zh: "嘴角勾起極致溫柔的弧度，眼神像是一汪春水般柔軟地注視著前方，散發著令人安心的甜美治癒感", en: "corners of the lips curving into an extremely gentle arc, gaze soft as spring water looking forward, radiating a reassuring sweet and healing vibe" },
      { id: "e3", label: "😏 戲謔自信邪笑", zh: "單邊眉毛微微上挑，嘴角勾起一抹玩世不恭的標誌性邪笑，眼神中帶著一絲挑釁與絕對的自信", en: "one eyebrow slightly raised, a cynical signature smirk on the corner of the mouth, gaze carrying a hint of provocation and absolute confidence" },
      { id: "e4", label: "🤭 憋笑微揚嘴角", zh: "努力克制笑意的微表情，嘴唇緊抿但嘴角不受控制地微微上揚，雙眼因為憋笑而變得亮晶晶的", en: "micro-expression of trying to suppress a laugh, lips pressed tightly but corners uncontrollably turning up, eyes sparkling bright from holding back laughter" },
      { id: "e5", label: "🥰 寵溺深情微笑", zh: "看著心愛之人的專屬表情，眼神深情且專注，帶著無盡的包容與寵溺，眼底閃爍著溫柔的微光", en: "exclusive expression looking at a loved one, gaze affectionate and focused, carrying endless tolerance and doting, gentle glimmer shining in the eyes" },
      { id: "e6", label: "🍷 慵懶微醺痴笑", zh: "帶著幾分醉意的微醺狀態，臉頰自然泛紅，眼神呈現失焦的迷離感，嘴角掛著慵懶且毫無防備的痴笑", en: "tipsy state with a bit of drunkenness, cheeks naturally flushed, gaze showing an unfocused hazy feel, a lazy and unguarded silly smile on the lips" },
      { id: "e7", label: "🫣 害羞低頭抿嘴", zh: "因為害羞而微微低下頭，下巴收緊，牙齒輕輕抿著下嘴唇，眼神由下往上怯生生地偷看，純情且惹人憐愛", en: "head slightly lowered out of shyness, chin tucked, teeth gently biting the lower lip, timidly peeking upwards, innocent and endearing" },
      { id: "e8", label: "😌 釋懷平靜微笑", zh: "歷經滄桑後徹底放下的釋然感，眉宇間的緊繃完全消失，嘴角帶著淡淡的、平靜如水般的高級感微笑", en: "sense of relief after experiencing hardships, tension between brows completely gone, a faint, calm, water-like high-end smile on the lips" },
      { id: "e9", label: "💫 回眸驚艷一笑", zh: "轉身回眸的瞬間剛好綻放的絕美笑容，髮絲還在空中飄動，眼神精準捕捉鏡頭，帶來心臟漏跳一拍的驚艷感", en: "stunningly beautiful smile blooming exactly at the moment of turning back, hair still floating in the air, gaze precisely catching the lens, bringing a heart-skipping stunning feel" },
      { id: "e10", label: "🤣 開懷露齒大笑", zh: "完全不顧形象的開懷大笑，嘴巴張開，頭部微微向後仰，眼睛笑成兩道彎月，極致的動態抓拍瞬間", en: "laughing heartily completely ignoring image, mouth open, head slightly tilted back, eyes smiling into two crescents, an extreme dynamic candid moment" },

      // ── 悲傷與脆弱感 (Sadness & Vulnerability) ──
      { id: "e11", label: "💧 楚楚可憐落淚", zh: "眼眶中蓄滿了打轉的淚水，鼻尖微微泛紅，嘴唇微微顫抖，一顆晶瑩的淚珠正從臉頰滑落，極致的脆弱感", en: "eyes brimming with swirling tears, tip of the nose slightly red, lips trembling slightly, a crystal tear drop rolling down the cheek, extreme vulnerability" },
      { id: "e12", label: "🥺 隱忍眼眶泛紅", zh: "強忍著不讓眼淚掉下來的微表情，眼眶一圈明顯的泛紅，下顎線因為咬緊牙關而緊繃，倔強得讓人心疼", en: "micro-expression of holding back tears, a distinct red rim around the eyes, jawline tense from clenching teeth, stubbornly heartbreaking" },
      { id: "e13", label: "🕳️ 絕望空洞失神", zh: "靈魂彷彿被抽乾的空洞眼神，瞳孔失去焦距與高光，面部肌肉完全放鬆下垂，呈現出極致的絕望與心死", en: "hollow gaze as if the soul has been drained, pupils losing focus and highlight, facial muscles completely relaxed and drooping, presenting extreme despair and dead heart" },
      { id: "e14", label: "🥀 憂鬱清冷低眸", zh: "長長的睫毛在眼下投射出陰影，視線憂鬱地看向斜下方，眉心有著微不可察的皺起，自帶一股與世隔絕的清冷感", en: "long eyelashes casting shadows under the eyes, gazing melancholically diagonally downward, an imperceptible furrow between the brows, carrying an isolated cold feel" },
      { id: "e15", label: "💔 破碎感無聲哭泣", zh: "沒有任何表情的大幅度扭曲，僅僅是安靜地流著淚，眼神中寫滿了難以言喻的悲傷故事，極強的電影破碎感", en: "no large facial distortion, just crying silently, eyes filled with an unspeakable sad story, extremely strong cinematic fragile shattered feel" },
      { id: "e16", label: "撇嘴微嗔委屈", zh: "像小動物般受委屈的微表情，下嘴唇微微向前撇出，眉毛下垂形成八字眉，帶著一點撒嬌與不滿", en: "aggrieved micro-expression like a small animal, lower lip slightly pouting forward, eyebrows drooping into an inverted V, carrying a bit of coquettishness and dissatisfaction" },
      { id: "e17", label: "痛苦欲絕閉眼", zh: "因為無法承受的痛苦而緊緊閉上雙眼，眉頭深鎖，臉部肌肉因悲傷而產生真實的抽搐與扭曲", en: "eyes squeezed tightly shut due to unbearable pain, brows deeply furrowed, facial muscles realistically twitching and distorting from sorrow" },
      { id: "e18", label: "倔強咬唇不屈", zh: "眼中雖然帶淚但眼神如刀般銳利直視前方，用力咬著下唇直到毫無血色，展現寧折不彎的強大意志力", en: "tears in eyes but gaze sharp as a knife looking straight ahead, biting the lower lip hard until bloodless, showing powerful unyielding willpower" },
      { id: "e19", label: "疲憊黯然神傷", zh: "眼皮沉重地半垂著，眼下有著淡淡的疲憊陰影，眼神黯淡無光，彷彿被生活重擔壓垮的真實疲憊感", en: "heavy half-drooping eyelids, faint shadows of fatigue under the eyes, gaze dull and lightless, a realistic sense of exhaustion as if crushed by life's burdens" },
      { id: "e20", label: "釋然淚光微笑", zh: "笑中帶淚的極致複雜情緒，眼眶含淚但嘴角卻釋懷地上揚，完美演繹了痛苦過後的成長與感動", en: "extremely complex emotion of smiling through tears, teary eyes but corners of the mouth relievedly turned up, perfectly interpreting growth and emotion after pain" },

      // ── 冷漠、憤怒與氣場 (Apathy, Anger & Aura) ──
      { id: "e21", label: "❄️ 冰冷睥睨俯視", zh: "下巴高高抬起，利用眼白較多的下三白眼由上往下俯視鏡頭，毫無溫度的絕對零度視線，看垃圾般的眼神", en: "chin raised high, looking down at the lens from above using sanpaku eyes with more sclera showing, absolute zero-degree sight with no warmth, looking at trash gaze" },
      { id: "e22", label: "🔥 憤怒凌厲怒視", zh: "瞳孔微微縮小，眉頭因為極度憤怒而死死皺在一起，眼神如燃燒的利劍般死盯著目標，極具攻擊性與壓迫感", en: "pupils slightly constricted, brows tightly knitted together in extreme anger, gaze staring dead at the target like a burning sharp sword, highly aggressive and oppressive" },
      { id: "e23", label: "👑 高傲不屑挑眉", zh: "單側眉毛高高挑起，眼神充滿了對一切事物的不屑與輕蔑，下顎線條凌厲，展現上位者的絕對高傲", en: "one eyebrow raised high, gaze full of disdain and contempt for everything, sharp jawline, showing the absolute arrogance of a superior" },
      { id: "e24", label: "🚬 疏離厭世冷漠", zh: "眼皮微垂，眼神死寂且對周遭一切漠不關心，面部肌肉極度放鬆，典型的厭世臉 (Resting Bitch Face)，散發高級距離感", en: "eyelids slightly drooping, dead gaze indifferent to everything around, facial muscles extremely relaxed, typical resting bitch face, radiating high-end distance" },
      { id: "e25", label: "🔪 殺氣鎖定眼神", zh: "宛如頂級殺手鎖定獵物的眼神，冷靜中透著極度危險的瘋狂，沒有多餘的表情，但視線讓人不寒而慄", en: "gaze like a top assassin locking onto prey, calmness revealing extremely dangerous madness, no extra expression, but the sight makes one shudder" },
      { id: "e26", label: "壓抑怒火咬牙", zh: "強烈壓抑怒火的微細節，鼻翼微微擴張，咬肌因為用力咬牙而明顯鼓起，暴風雨前夕的高壓寧靜", en: "micro-details of strongly suppressing anger, nostrils slightly flaring, masseter muscle obviously bulging from clenching teeth, high-pressure silence before the storm" },
      { id: "e27", label: "挑釁不屈直視", zh: "頭微微偏向一側，下巴微揚，眼神直勾勾地與鏡頭對峙，帶著「放馬過來」的強烈挑釁與不屈意味", en: "head slightly tilted to one side, chin slightly raised, gaze confronting the lens straight on, carrying a strong provocative 'bring it on' and unyielding meaning" },
      { id: "e28", label: "絕對掌控女王", zh: "從容不迫的微表情，嘴角帶著一抹若有似無的冷笑，眼神從容且深邃，彷彿一切盡在她的絕對掌控之中", en: "unhurried micro-expression, lips carrying a faint almost non-existent sneer, gaze calm and deep, as if everything is under her absolute control" },
      { id: "e29", label: "煩躁不耐微蹙", zh: "眉心微微皺起一個『川』字，眼神不耐煩地向旁邊游移，嘴唇緊閉，將日常生活中被打擾的煩躁感生動寫實化", en: "a slight '川' shape furrow between the brows, gaze shifting sideways impatiently, lips pressed tight, vividly realizing the irritation of being disturbed in daily life" },
      { id: "e30", label: "病嬌危險擴瞳", zh: "病嬌專屬的極端表情，瞳孔因為興奮而異常放大，嘴角帶著扭曲的迷戀微笑，美麗卻極度致命與瘋狂", en: "extreme expression exclusive to yandere, pupils abnormally dilated from excitement, corners of the mouth carrying a twisted infatuated smile, beautiful but extremely fatal and mad" },

      // ── 慾望、誘惑與親密 (Desire, Seduction & Intimacy) ──
      { id: "e31", label: "💋 純欲微張雙唇", zh: "眼神呈現微微失焦的迷離感，雙唇因為呼吸不經意地微微張開，露出隱約的牙齒邊緣，呼吸感極強的純欲誘惑", en: "gaze showing a slightly unfocused hazy feel, lips unintentionally slightly parted due to breathing revealing faint edges of teeth, innocent-lust temptation with a strong sense of breath" },
      { id: "e32", label: "🫦 輕咬下唇挑逗", zh: "潔白的牙齒輕輕咬著豐潤的下嘴唇，眼神從下睫毛的陰影中向上勾引著鏡頭，充滿了直接的性暗示與致命誘惑", en: "white teeth gently biting the plump lower lip, gaze seducing the lens upwards from the shadow of lower eyelashes, full of direct sexual tension and fatal temptation" },
      { id: "e33", label: "🛏️ 剛睡醒慵懶微瞇", zh: "帶著濃濃起床氣的慵懶感，雙眼微瞇無法完全睜開，眼神透著迷茫與無防備，散發著私密空間獨有的親暱氛圍", en: "lazy feel with heavy morning grogginess, eyes half-squinted unable to fully open, gaze revealing confusion and defenselessness, emitting an intimate vibe unique to private spaces" },
      { id: "e34", label: "魅惑勾人直視", zh: "眼波流轉的頂級魅惑眼神，瞳孔聚焦在觀看者身上，眼角帶著一抹媚態，彷彿能透過螢幕看穿靈魂", en: "top-tier seductive gaze with flowing glances, pupils focused on the viewer, corners of the eyes carrying a coquettish charm, as if seeing through the soul across the screen" },
      { id: "e35", label: "迷醉深情凝望", zh: "彷彿看著全世界最渴望的獵物，眼神深邃得快要滴出水來，瞳孔邊緣帶著慾望的微光，令人無法移開視線", en: "as if looking at the most desired prey in the world, gaze so deep it's about to drip water, pupil edges carrying the glimmer of desire, impossible to look away" },
      { id: "e36", label: "欲言又止微動作", zh: "嘴唇半張，舌尖若隱若現地觸碰唇瓣，彷彿有話想說卻又咽下，創造出極強的互動懸念與索吻的錯覺", en: "lips half-parted, tip of the tongue faintly touching the petals of the lips, as if having words to say but swallowing them, creating strong interactive suspense and the illusion of asking for a kiss" },
      { id: "e37", label: "呼吸急促微喘", zh: "胸腔起伏帶來的高動態面部反應，嘴巴張開微微喘氣，臉頰帶著運動或激動後的潮紅，極致的生理反應寫實", en: "high-dynamic facial response brought by chest heaving, mouth open slightly panting, cheeks carrying the flush of post-exercise or excitement, extreme physiological reaction realism" },
      { id: "e38", label: "濕漉小狗眼仰視", zh: "由下往上仰望，眼睛睜得大大的，瞳孔反射著大面積的高光，看起來像是一隻渴望被撫摸的濕漉漉小狗，激發強烈保護慾", en: "looking up from below, eyes opened wide, pupils reflecting large areas of highlight, looking like a wet puppy longing to be pet, inspiring strong protective desire" },
      { id: "e39", label: "調情舔唇瞬間", zh: "極高密度的微動作抓拍，舌尖輕輕舔過上唇或嘴角，眼神帶著肆無忌憚的調情意味，充滿野性與費洛蒙", en: "extreme high-density micro-motion candid, tip of the tongue gently licking the upper lip or corner of the mouth, gaze carrying unbridled flirting, full of wildness and pheromones" },
      { id: "e40", label: "極近距離索吻", zh: "面部極度靠近鏡頭，雙眼微微閉上或半睜，睫毛輕顫，雙唇呈現最放鬆柔軟的狀態，第一人稱極致親密接吻前夕", en: "face extremely close to the lens, eyes slightly closed or half-open, eyelashes fluttering gently, lips presenting the most relaxed and soft state, first-person extreme intimate moment right before a kiss" },

      // ── 驚訝、思考與微表情 (Surprise, Thought & Micro-expressions) ──
      { id: "e41", label: "❗ 震驚瞳孔地震", zh: "看到不可思議畫面的瞬間反應，雙眼陡然睜大，瞳孔劇烈收縮，嘴巴不自覺地微張倒吸一口涼氣", en: "instant reaction to seeing something unbelievable, eyes suddenly widening, pupils violently constricting, mouth unconsciously slightly opening gasping for air" },
      { id: "e42", label: "💡 恍然大悟微愣", zh: "大腦正在快速運轉的微表情，原本緊皺的眉頭突然舒展，眼神閃過一絲靈光與明了，停頓一秒的生動反應", en: "micro-expression of the brain spinning fast, originally furrowed brows suddenly relaxing, a flash of insight and clarity in the eyes, a vivid reaction pausing for a second" },
      { id: "e43", label: "🤔 專注深思微蹙", zh: "極度專注時的真實面貌，視線固定在某處虛空，眉心微微皺起，嘴唇緊抿，散發著認真工作時的知性智性美", en: "the real face of extreme concentration, sight fixed on a void somewhere, slight furrow between the brows, lips pressed tight, radiating the intellectual beauty of working seriously" },
      { id: "e44", label: "🦅 警覺微瞇雙眼", zh: "如同猛禽察覺危險時的反應，雙眼銳利地微瞇起來過濾光線，頭部微微偏轉傾聽動靜，充滿了高度警惕的神經質美感", en: "reaction like a bird of prey detecting danger, eyes sharply narrowed filtering light, head slightly turned listening for movement, full of highly vigilant neurotic beauty" },
      { id: "e45", label: "😜 調皮吐舌眨眼", zh: "充滿生命力的俏皮表情，單眼快速眨了一下 (Wink)，嘴角上揚的同時俏皮地吐出舌尖，打破次元壁的可愛互動", en: "vibrant playful expression, one eye winking quickly, corners of the mouth turned up while playfully sticking out the tip of the tongue, cute interaction breaking the fourth wall" },
      { id: "e46", label: "歪頭疑惑微思", zh: "因為不解而像小貓一樣微微歪著頭，眉毛一高一低，眼神中充滿了純真的探究與問號，生動且具故事性", en: "slightly tilting the head like a kitten out of incomprehension, one eyebrow higher than the other, gaze full of innocent exploration and question marks, vivid and narrative" },
      { id: "e47", label: "放空發呆神遊", zh: "靈魂短暫出竅的發呆瞬間，面部肌肉完全鬆弛，眼神空洞沒有焦點，嘴巴微張，極具日常放鬆的真實生活碎片感", en: "spacing out moment where the soul temporarily leaves, facial muscles completely relaxed, gaze hollow with no focus, mouth slightly open, highly realistic slice of daily relaxed life" },
      { id: "e48", label: "驚喜捂嘴張大眼", zh: "收到巨大驚喜的極致動態，雙手下意識地捂住嘴巴，雙眼因為喜悅與不可置信而睜到最大，眼眶甚至激動泛淚", en: "extreme dynamic of receiving a huge surprise, hands subconsciously covering the mouth, eyes widened to the max from joy and disbelief, eyes even tearing up from excitement" },
      { id: "e49", label: "傲嬌微抬下巴", zh: "口是心非的標準傲嬌臉，下巴微微抬高，視線刻意撇向一邊不看鏡頭，臉頰卻帶著可疑的微紅，反差萌十足", en: "standard tsundere face saying one thing meaning another, chin slightly raised, sight deliberately looking away avoiding the lens, but cheeks carrying a suspicious faint blush, full of gap moe" },
      { id: "e50", label: "無防備純真臉", zh: "剛來到這個世界般的純粹感，面部沒有任何社會化的防禦偽裝，眼神清澈透明地直視前方，令人產生極致的信賴與平靜", en: "pure feeling like just arriving in this world, face without any socialized defensive disguise, gaze clear and transparent looking straight ahead, generating extreme trust and peace" }
    ],
    comp_rule:[
      // ── 基礎法則
      { id:"cr1",  label:"三分置左",        zh:"三分構圖法，人物置於畫面左側黃金分割點", en:"rule-of-thirds, subject at left golden intersection" },
      { id:"cr2",  label:"三分置右",        zh:"三分構圖法，人物置於畫面右側黃金分割點", en:"rule-of-thirds, subject at right golden intersection" },
      { id:"cr3",  label:"對角線張力",      zh:"對角線斜向構圖，視線從畫面一角延伸至對角，製造強烈動感張力", en:"diagonal composition, gaze line extending corner to corner, strong dynamic tension" },
      { id:"cr5",  label:"居中對稱",        zh:"人物居中直立，完美對稱構圖，強烈的莊嚴儀式感", en:"subject perfectly centered upright, symmetrical composition, ceremonial gravity" },
      { id:"cr6",  label:"黃金螺旋",        zh:"以斐波那契黃金螺旋安排構圖，人物臉部落於螺旋核心，極具美學張力", en:"Fibonacci golden spiral composition, subject's face at spiral core, ultimate aesthetic tension" },
      { id:"cr7",  label:"負空間呼吸",      zh:"大面積留白負空間，人物偏角落，負空間引發強烈的孤獨或自由感", en:"large negative space, subject in corner, emptiness evoking intense solitude or freedom" },
      // ── 鏡頭視角
      { id:"cr8",  label:"極低仰角",        zh:"鏡頭貼近地面的極低仰角，強烈仰視透視壓縮，人物如神明般巨大崇高", en:"extreme low angle near ground level, severe upward perspective compression, subject towering godlike" },
      { id:"cr9",  label:"高機位俯角45°",   zh:"45度俯視角，平衡地呈現臉部與上半身，時尚攝影最常用的優雅視角", en:"45-degree overhead angle, balanced face and upper body reveal, most used elegant fashion photography angle" },
      { id:"cr10", label:"正頂俯拍",        zh:"正上方90度完全俯瞰，人物平躺或站立皆呈現為平面圖，打破立體空間感的強烈構圖", en:"directly overhead 90-degree flat-lay perspective, subject flattened into abstract plane, radical spatial disruption" },
      { id:"cr11", label:"荷蘭傾斜角",      zh:"相機傾斜10-30度拍攝（Dutch Angle），畫面歪斜製造不安、緊張或瘋狂的心理暗示", en:"camera tilted 10-30 degrees Dutch Angle, slanted frame creating unease, tension, or madness psychological cue" },
      { id:"cr12", label:"過肩構圖",        zh:"從另一人肩膀後方越過拍攝主角，製造窺視感與敘事深度，雙重焦點構圖", en:"over-the-shoulder shot past a foreground figure, voyeuristic intimacy and narrative depth, dual focus composition" },
      { id:"cr13", label:"魚眼廣角扭曲",    zh:"超廣角魚眼視角，邊緣大幅變形向外膨脹，誇張的空間感與迷幻的視覺扭曲", en:"ultra-wide fisheye lens, strong barrel distortion at edges, exaggerated spatial depth and psychedelic visual warp" },
      { id:"cr14", label:"長焦壓縮背景",    zh:"長焦鏡頭（85-200mm）壓縮前後景，背景與人物距離感消失，主體被奶油虛化背景環繞", en:"telephoto compression 85-200mm, foreground-background distance collapsed, subject surrounded by creamy bokeh dissolution" },
      { id:"cr15", label:"微距極近特寫",    zh:"微距鏡頭貼近拍攝細節，如眼眸、嘴唇、皮膚紋理等，放大到肉眼無法察覺的微觀美感", en:"macro lens extreme close-up of details like eyes, lips, or skin texture, magnifying micro-beauty invisible to naked eye" },
      // ── 框架與引導
      { id:"cr16", label:"框中框構圖",      zh:"利用門框、窗戶、拱門或人造框架嵌套人物，製造畫中畫的層次感與神秘被觀看感", en:"frame-within-frame using doorway, window, arch or object, nested layers of observation, mysterious voyeuristic depth" },
      { id:"cr17", label:"引導線匯聚",      zh:"場景中的平行線（走廊、路面、欄杆）向主角匯聚消失，強制視線引導，極致透視感", en:"parallel lines in scene converging toward subject vanishing point, forced gaze direction, extreme perspective depth" },
      { id:"cr18", label:"前景遮蔽窺探",    zh:"前景植物、窗簾、人群等局部遮蔽主角，製造偷窺式的隱密感與強烈的敘事距離感", en:"foreground foliage, curtains, or crowd partially obscuring subject, peeping-through intimacy and strong narrative distance" },
      { id:"cr19", label:"倒影鏡像構圖",    zh:"利用積水、鏡面或光滑地板的完美倒影，人物與鏡像形成上下對稱的超現實雙重空間", en:"perfect reflection in water, mirror, or polished floor, subject and reflection forming surreal symmetric dual space" },
      { id:"cr20", label:"剪影輪廓構圖",    zh:"強逆光環境，人物輪廓完全黑化成剪影，在明亮背景前展現純粹的形態美與神秘感", en:"strong backlight reducing subject to pure silhouette against bright background, form beauty and mystery at its most pure" },
      // ── 電影特效鏡頭
      { id:"cr21", label:"滑動變焦眩暈感",  zh:"滑動變焦效果（Dolly Zoom/Vertigo Effect），前景不動但背景急速縮放，製造強烈的心理眩暈感", en:"dolly zoom Vertigo effect, foreground static while background rapidly scales, intense psychological disorientation" },
      { id:"cr22", label:"運動模糊追焦",    zh:"低快門追蹤移動主角，主角清晰而背景形成流動的運動模糊，傳遞速度感與活力", en:"panning blur with slow shutter tracking moving subject, sharp subject against streaked background, speed and vitality" },
      { id:"cr23", label:"多重曝光疊加",    zh:"雙重或多重曝光效果，人物輪廓與場景影像疊合，夢境般的半透明敘事構圖", en:"double or multiple exposure overlay, figure silhouette merging with scene imagery, dreamlike translucent narrative" },
      { id:"cr24", label:"廣角近景壓迫",    zh:"廣角鏡頭（24-35mm）貼近主角拍攝，邊緣輕微失真，誇張的近大遠小製造強烈壓迫感", en:"wide angle 24-35mm close to subject, slight edge distortion, exaggerated near-large-far-small creating strong compression" },
      { id:"cr25", label:"CCTV監視視角",    zh:"模擬監視攝影機的偏高仰角俯視，帶有魚眼輕微扭曲，強烈的被監視與存在主義孤獨感", en:"simulated CCTV surveillance camera angle, slight fisheye distortion, intense being-watched existential solitude feeling" },
      { id: "cr26", label: "🌀 螺旋引導線", zh: "完美的黃金螺旋構圖 (費波那契數列)，透過場景物件的自然彎曲引導視覺，精準聚焦於人物面部，充滿和諧與古典數學美感的專業攝影構圖", en: "perfect golden spiral composition (Fibonacci sequence), guiding the eye through natural curves of scene objects, precisely focusing on the character's face, professional photography composition full of harmony and classical mathematical beauty" },
      { id: "cr27", label: "🪞 鏡面倒影對稱", zh: "利用水面或鏡面形成的完美上下對稱倒影構圖，人物與倒影相互輝映，虛實交錯，增強畫面的詩意與空間層次感", en: "perfect vertical symmetrical reflection composition utilizing water or mirror surfaces, the character and reflection complement each other, intertwining virtual and real, enhancing poetic and spatial depth" },
    { id: "cr28", label: "⬛ 畫中畫多重框景", zh: "畫中畫的多重框景構圖，透過門窗、裂縫或建築結構將人物包圍，創造出強烈的窺探感與多層次的三維空間縱深", en: "frame within a frame composition, enclosing the character through doors, windows, crevices, or architectural structures, creating a strong sense of voyeurism and multi-layered 3D spatial depth" }
    ],
    comp_bg:[
      { id:"cb1", label:"右側展示景深", zh:"右側展示背景景深", en:"right side showing background depth of field" },
      { id:"cb3", label:"背景大量虛化", zh:"背景大量虛化，人物主體銳利突出", en:"heavy background bokeh blur subject sharply isolated" },
      { id:"cb4", label:"前後景深壓縮", zh:"前後景深壓縮疊層，增加空間層次感", en:"foreground background depth compression layered spatial depth" },
      { id:"cb5", label:"自然景深", zh:"", en:"" }
    ]
  },

  // ── 飾品配件 ACCESSORIES (v8.2 擴充 250 組) ─────────────────────────────────
  ACC: [
    // ◆ 耳環系列
    { id:"a1",  label:"金色細圈耳環", zh:"極細的18K金色圓圈耳環，輕巧貼耳，在光線下發出低調的暖金色反光", en:"ultra-thin 18K gold hoop earring, minimal ear-hugging, warm gold specular highlight under light" },
    { id:"a2",  label:"銀色水滴耳環", zh:"銀色拉長水滴形耳墜，啞光表面帶有細微刷紋，隨動作輕微搖曳", en:"elongated silver teardrop earring, matte brushed surface finish, subtle sway with movement" },
    { id:"a3",  label:"珍珠滴耳環", zh:"單顆天然淡水珍珠耳墜，珠光圓潤飽滿，低垂於耳垂下方，優雅古典氣質", en:"single freshwater pearl drop earring, lustrous round surface, hanging below earlobe, classic elegance" },
    { id:"a4",  label:"碎鑽簇狀耳環", zh:"密集鑲嵌碎鑽的簇狀耳環，在強光下產生璀璨的多角度閃光，如星點散落", en:"pavé diamond cluster earring, intense multi-directional sparkle under strong light, star-scatter effect" },
    { id:"a5",  label:"黑曜石圓釘耳環", zh:"深黑色玻璃光澤的圓形釘狀耳環，極簡朋克風格，強烈的光點反射", en:"black obsidian glossy round stud earring, minimalist punk aesthetic, sharp specular reflection" },
    { id:"a6",  label:"長流蘇耳環", zh:"細金屬鏈層疊的長流蘇耳環，隨動作形成瀑布般的動態光影，長及肩膀", en:"layered fine chain tassel earring reaching shoulder, waterfall-like dynamic light play with movement" },
    { id:"a7",  label:"透明水晶耳環", zh:"透明切割水晶耳墜，稜面折射出彩虹色散射光，折光率極高如鑽石閃爍", en:"clear cut crystal drop earring, prism facets dispersing rainbow refraction, high refractive index sparkle" },
    { id:"a8",  label:"玫瑰金大圈耳環", zh:"玫瑰金大圓圈耳環，直徑約6cm，亮面拋光，框住臉部輪廓形成流行感框架", en:"rose gold oversized hoop 6cm diameter, high-polish finish, framing face silhouette as fashionable frame" },
    { id:"a9",  label:"黑色拼接方形耳釘", zh:"黑色啞光金屬方形大耳釘，幾何感強烈，邊緣鋒利，帶有工業冷感質地", en:"black matte square geometric stud earring, sharp angular edges, industrial cold material aesthetic" },
    { id:"a10", label:"月牙形耳掛", zh:"細薄銀色月牙形耳掛，貼合耳廓上緣弧度，俐落線條帶有仙女系氣質", en:"thin silver crescent ear cuff hugging upper helix, clean line with ethereal fairy aesthetic" },
    { id:"a11", label:"祖母綠小墜耳環", zh:"深綠色祖母綠寶石小墜耳環，銀色包鑲設計，散發復古奢華氣息", en:"deep green emerald gemstone drop earring, silver prong setting, vintage luxury aura" },
    { id:"a12", label:"多層次耳骨夾", zh:"三件式耳骨夾組合，沿耳廓分層排列，銀色細節複雜，帶有裝甲感", en:"3-piece ear cuff set along helix, complex silver detailing, armor-like ornamental aesthetic" },
    { id:"a13", label:"金色葉形耳環", zh:"18K金葉脈紋路耳墜，精細鑄造的葉脈紋理，輕薄如真葉片，優雅自然", en:"18K gold leaf vein earring, finely cast botanical texture, thin as real leaf, organic elegance" },
    { id:"a14", label:"紅珊瑚耳釘", zh:"天然紅珊瑚圓形小耳釘，飽和珊瑚紅色澤，表面微啞光，地中海異域風情", en:"natural coral round stud earring, saturated coral-red hue, slightly matte surface, Mediterranean exotic" },
    { id:"a15", label:"鑽石螺旋耳環", zh:"連續螺旋纏繞的細鑽耳環，從耳垂延伸至耳骨，如光之螺旋纏繞", en:"continuous spiral diamond-set ear crawler extending from lobe to helix, spiral of light effect" },
    // ◆ 項鍊 / 項圈系列
    { id:"a16", label:"細金項鍊", zh:"極細的18K黃金項鍊，幾近隱形地貼在鎖骨上，在光線下僅能看見微弱的光軌", en:"ultra-thin 18K gold chain barely visible on collarbone, faint light trail under illumination" },
    { id:"a17", label:"黑色皮質項圈", zh:"黑色啞光皮質緊身項圈，金屬D型扣環點綴，帶有強烈的BDSM時尚符號感", en:"black matte leather choker with metal D-ring accent, strong fashion BDSM aesthetic symbol" },
    { id:"a18", label:"多層次銀鏈項鍊", zh:"三至五層不同長度的細銀鏈疊戴，層次豐富地懸垂於鎖骨至胸口之間", en:"3-to-5 layered fine silver chains of varying lengths draped over collarbone to upper chest" },
    { id:"a19", label:"黃金鎖骨鏈", zh:"精緻的黃金鎖骨鏈，長度恰好沿著鎖骨延伸，如流動的金線勾勒鎖骨結構", en:"delicate gold collarbone chain following the collarbone line, golden thread tracing bone structure" },
    { id:"a20", label:"珍珠長鍊", zh:"天然淡水珍珠長鍊，長度垂至腰部，可單掛或繞頸雙圈配戴，復古名媛風格", en:"long freshwater pearl strand reaching waist, wearable single or double-wrapped, vintage glamour style" },
    { id:"a21", label:"十字架項鍊", zh:"銀色或黑化不鏽鋼十字架墜飾項鍊，中等長度垂於胸口，哥德式靈魂美學", en:"silver or blackened steel cross pendant necklace mid-chest length, gothic soul aesthetic" },
    { id:"a22", label:"蛇形金屬鏈項圈", zh:"立體蛇形紋路的金屬緊身項圈，光澤感強烈，貼合頸部線條，神秘異教氣質", en:"3D serpent-pattern metal choker tightly fitted at neck, intense sheen, mysterious pagan aesthetic" },
    { id:"a23", label:"寶石心形墜飾鍊", zh:"紅寶石或粉鑽心形墜飾銀鏈項鍊，少女感甜蜜符號，在光下折射彩色光點", en:"ruby or pink diamond heart pendant silver chain, sweet romantic symbol, colorful sparkle under light" },
    { id:"a24", label:"鑽石鎖形項圈", zh:"鑲嵌碎鑽的金色鎖具造型項圈，打開的鎖扣感設計，帶有時尚叛逆符號", en:"diamond-studded gold padlock choker, open lock clasp design, fashionable rebellious symbol" },
    { id:"a25", label:"黑色流蘇項鍊", zh:"黑色仿皮與金屬流蘇混合的中長項鍊，垂墜感強，隨動作有豐富的搖擺動態", en:"black faux leather and metal fringe mid-length necklace, strong drape, dynamic swing with movement" },
    { id:"a26", label:"水晶鎖骨鑽鏈", zh:"一排細密鑲嵌施華洛世奇水晶的項圈，緊貼鎖骨，在光下如一條流動的星河", en:"row of Swarovski crystal-set choker tight on collarbone, flowing galaxy of light effect under illumination" },
    { id:"a27", label:"骷髏頭骨墜鍊", zh:"精細鑄造的3D骷髏頭銀色墜飾項鍊，暗黑美學符號，高質感寫實細節", en:"finely cast 3D silver skull pendant necklace, dark aesthetic symbol, hyper-realistic fine detail" },
    { id:"a28", label:"極細鑽石單鍊", zh:"僅有一顆極小單鑽的極細白金項鍊，低調奢華的極簡主義，是最昂貴的低調", en:"single tiny diamond solitaire ultra-thin platinum chain, quiet luxury minimalism, subtly expensive" },
    { id:"a29", label:"霓虹管狀項圈", zh:"透明亞克力管狀項圈內填充霓虹色液體，發光質感強，賽博龐克裝飾美學", en:"transparent acrylic tube choker filled with neon-color liquid, glowing cyberpunk decorative aesthetic" },
    { id:"a30", label:"黃金名牌字母鍊", zh:"大寫字母金色吊牌項鍊，字母刻工精緻，嘻哈流行文化的金色宣言", en:"capital letter gold nameplate pendant necklace, precise engraving, hip-hop gold declaration of identity" },
    // ◆ 手飾 / 戒指系列
    { id:"a31", label:"滿指金屬指環", zh:"全手指覆蓋的金屬多節指環，如裝甲般包裹每個指節，女王征服感", en:"full-finger multi-knuckle metal ring set, armor-like wrapping each joint, queen-of-conquest aesthetic" },
    { id:"a32", label:"細銀戒指多枚疊戴", zh:"細銀戒指3-5枚疊戴於同一手指，各有不同紋理或寶石點綴，自由疊搭美學", en:"3-5 thin silver rings stacked on same finger, varied textures and gemstone accents, free-layering aesthetic" },
    { id:"a33", label:"黑色橡膠手環組", zh:"粗細不一的黑色橡膠或矽膠手環疊戴，帶有街頭青少年朋克氣息", en:"assorted width black rubber or silicone wristband stack, street youth punk vibe" },
    { id:"a34", label:"黃金蛇形手鐲", zh:"立體蛇形盤繞的18K黃金手鐲，精工雕刻蛇鱗紋路，神秘女神氣質", en:"3D serpent-coil 18K gold bangle, intricately carved scale texture, mysterious goddess aesthetic" },
    { id:"a35", label:"水晶念珠手鍊", zh:"天然白水晶或粉晶念珠手鍊，珠粒圓潤透明，帶有靈性冥想氣息", en:"natural clear quartz or rose quartz mala bracelet, smooth round beads, spiritual meditation energy" },
    { id:"a36", label:"皮革手腕帶", zh:"棕色植鞣皮革手腕帶，金屬鉚釘裝飾，帶有工藝感與粗獷西部風格", en:"brown vegetable-tanned leather wrist cuff with brass rivet accents, artisan craftsmanship western vibe" },
    { id:"a37", label:"幾何形金色耳夾", zh:"不對稱三角形或菱形黃金耳夾，幾何現代感，無需穿孔直接佩戴於耳垂", en:"asymmetric triangle or rhombus gold ear clip, geometric modern aesthetic, no piercing required" },
    { id:"a38", label:"細鑽戒指滿鑲", zh:"半圈或全圈滿鑲碎鑽的細白金戒指，持續發出細密的璀璨閃光，婚禮級精緻", en:"half or full eternity band pavé diamond thin platinum ring, continuous fine sparkling, bridal-level elegance" },
    { id:"a39", label:"銀色指甲戒", zh:"金屬指甲造型的超長戒指，覆蓋整個指尖，帶有哥德式或妖精系奇幻感", en:"metal fingernail-shaped elongated ring covering fingertip, gothic or elven fantasy aesthetic" },
    { id:"a40", label:"天青石手鍊", zh:"天然天青石珠粒手鍊，深邃的藍色帶有金色黃鐵礦閃光，如夜空濃縮在腕間", en:"natural lapis lazuli bead bracelet, deep blue with pyrite gold flecks, like the night sky at the wrist" },
    { id:"a41", label:"銀色手指甲戒指套", zh:"覆蓋多個指節的銀色手指甲戒指套，關節處有可活動的鉸鏈結構，機械感強烈", en:"silver knuckle duster ring with articulated hinge at each joint, strongly mechanical cyberpunk aesthetic" },
    { id:"a42", label:"金色多串手鍊", zh:"3-7條不同粗細的細金鍊疊戴於手腕，奢華堆疊感，每條輕微搖晃與碰撞", en:"3-7 mixed-gauge fine gold chain stack bracelet, luxurious layered look, delicate clink and shimmer" },
    // ◆ 腰帶 / 腰鏈系列
    { id:"a43", label:"細金屬腰鏈", zh:"極細金色金屬鏈條腰帶，低掛於臀部上方，隨步伐輕微晃動，性感精緻", en:"ultra-thin gold chain hip belt hanging low, delicate sway with each step, sensual and refined" },
    { id:"a44", label:"黑色皮革寬腰帶", zh:"黑色皮革寬版腰帶，金屬大扣環設計，強調腰身曲線，搖滾女王必備", en:"black leather wide belt with oversized metal buckle, waist-cinching silhouette, rock queen essential" },
    { id:"a45", label:"珠鍊多層腰鏈", zh:"多層不同珠粒的腰鍊，珠子材質混搭，貼合腰部曲線，波西米亞異域風情", en:"multi-strand mixed bead waist chain following hip curve, bohemian exotic aesthetic" },
    { id:"a46", label:"透明PVC腰帶", zh:"透明或半透明PVC材質腰帶，現代感強，在光線下折射有趣的光影效果", en:"transparent or semi-transparent PVC belt, striking modern aesthetic, interesting light refraction effects" },
    { id:"a47", label:"戰術腰帶掛飾", zh:"黑色戰術腰帶搭配各式掛飾，D型環、小掛包等，機能感強的街頭風格", en:"black tactical belt with assorted hanging accessories, D-rings, mini pouches, functional streetwear aesthetic" },
    { id:"a48", label:"鑽石裝飾細腰帶", zh:"細皮帶上密鑲水晶鑽石，全身閃光環繞腰際，奢華晚宴裝束必備", en:"thin belt fully pavé-set with crystals, full glittering halo around waist, luxury evening wear essential" },
    // ◆ 眼鏡 / 墨鏡系列
    { id:"a49", label:"細框貓眼墨鏡", zh:"極細金色邊框的復古貓眼形墨鏡，棕色漸層鏡片，歐式高貴復古氣質", en:"ultra-thin gold frame vintage cat-eye sunglasses, brown gradient lens, European vintage elegance" },
    { id:"a50", label:"圓形金框墨鏡", zh:"正圓形金屬框架墨鏡，黑色或深棕色鏡片，70年代復古波西米亞風格", en:"perfect circle metal frame sunglasses, black or dark brown lens, 1970s retro bohemian style" },
    { id:"a51", label:"橢圓窄框墨鏡", zh:"極窄橢圓細框墨鏡，金屬細框，賽博龐克矩陣風格，當代高科技冷感", en:"extremely narrow oval thin-frame sunglasses, metal frame, cyberpunk Matrix aesthetic, contemporary high-tech cool" },
    { id:"a52", label:"過大方框墨鏡", zh:"超大版本的正方形棕色玳瑁紋框墨鏡，誇張的遮臉尺寸，年代感名媛造型", en:"oversized square tortoiseshell frame sunglasses, dramatic face-covering size, retro glamour icon look" },
    { id:"a53", label:"翻轉彩色鏡片墨鏡", zh:"可翻折的彩色漸層鏡片墨鏡，粉色或藍色折光，強調幻夢派對感", en:"flip-up colorful gradient lens sunglasses in pink or blue, rave dreamy party aesthetic" },
    { id:"a54", label:"心形鏡片墨鏡", zh:"粉色或紅色心形鏡片細框太陽眼鏡，Y2K千禧年少女感審美", en:"pink or red heart-shaped lens thin-frame sunglasses, Y2K millennium girly aesthetic" },
    { id:"a55", label:"鏡面反射墨鏡", zh:"銀色或玫瑰金鏡面反射鏡片墨鏡，完全反射環境，隱藏眼神製造神秘感", en:"silver or rose gold mirrored reflective lens sunglasses, fully reflecting environment, eye-hiding mystique" },
    { id:"a56", label:"無框鑽石鍊眼鏡", zh:"無框水晶鑽石裝飾鏈條太陽眼鏡，鏡片由鑽鍊懸掛，戲劇性裝飾藝術感", en:"frameless diamond-chain suspended crystal sunglasses, lens held by diamond chains, dramatic Art Deco aesthetic" },
    // ◆ 髮飾系列
    { id:"a57", label:"蝴蝶結緞帶髮帶", zh:"寬版絲緞蝴蝶結髮帶，豐盈飄逸的緞帶雙翼，甜美洛麗塔與法式女孩美學", en:"wide satin ribbon bow headband, voluminous flowing ribbon wings, sweet Lolita and French girl aesthetic" },
    { id:"a58", label:"珍珠髮夾組", zh:"多個珍珠點綴的金色或銀色細髮夾，分散夾於髮間，星點般的珠光點綴", en:"multiple pearl-dotted gold or silver thin hair clips scattered through hair, starpoint lustrous accents" },
    { id:"a59", label:"黑色天鵝絨髮箍", zh:"寬版黑色天鵝絨面料髮箍，如絨面框起面部，強調臉部輪廓的古典美學", en:"wide black velvet headband framing face, emphasizing facial contours, classic aesthetic" },
    { id:"a60", label:"金屬鎖骨鍊髮圈", zh:"將細金屬鍊用作髮圈綁於馬尾，金鍊垂掛在髮絲間，奢華細節感", en:"fine metal chain used as hair tie for ponytail, gold chain draping through hair strands, luxurious micro-detail" },
    { id:"a61", label:"透明水晶髮夾", zh:"透明亞克力水晶造型大髮夾，折光如玻璃，簡潔現代的Claw clip美學", en:"oversized transparent acrylic crystal claw clip, glass-like refraction, minimal modern claw clip aesthetic" },
    { id:"a62", label:"鮮花頭冠", zh:"真實或仿真玫瑰、小雛菊編織的頭冠，仙氣飄飄的田園女神感，花瓣質感細膩", en:"real or faux rose and daisy woven floral crown, ethereal pastoral goddess aesthetic, delicate petal texture" },
    { id:"a63", label:"銀色星星髮夾", zh:"多顆銀色星星造型小髮夾點綴於髮際，少女感俏皮，星星金屬細節閃爍", en:"multiple silver star-shaped mini hair clips scattered along hairline, playful girlish shimmer" },
    { id:"a64", label:"黑色皮革寬髮帶", zh:"黑色仿皮革面料寬髮帶，搖滾感強，與黑色皮質造型高度契合", en:"black faux leather wide hairband, strong rock aesthetic, highly complementary to leather-based outfits" },
    { id:"a65", label:"復古鍍金鑲鑽髮夾", zh:"Art Deco風格的金色鑲嵌水晶大髮夾，裝飾主義設計，閃耀晚裝感", en:"Art Deco gold crystal-set statement hair clip, ornamental design, sparkling evening wear aesthetic" },
    { id:"a66", label:"Y2K塑膠彩色髮夾", zh:"千禧年Y2K風格的半透明彩色塑膠蝴蝶夾，多色混搭，童趣與流行融合", en:"Y2K translucent colorful plastic butterfly clips, multi-color mix, playful childhood meets fashion" },
    // ◆ 腿飾 / 襪子系列
    { id:"a67", label:"黑色網眼絲襪", zh:"黑色菱形網眼絲襪，細密的幾何圖案緊貼腿部線條，搭配短裙的絕配", en:"black diamond mesh stockings with fine geometric pattern tight on leg lines, perfect with mini skirts" },
    { id:"a68", label:"白色過膝絲襪", zh:"純白色過膝長筒絲襪，大腿處留白，與短裙之間形成強烈的白色肌膚對比", en:"pure white over-knee stockings with bare thigh gap against mini skirt, high-contrast skin reveal" },
    { id:"a69", label:"黑色豎條紋絲襪", zh:"復古黑色竪條紋紋路絲襪，在腿部產生垂直視覺拉伸，腿部顯長顯細", en:"vintage black vertical-stripe patterned stockings, elongating optical illusion on legs" },
    { id:"a70", label:"漁網絲襪", zh:"粗格漁網織法絲襪，強烈的暗黑搖滾或哥德風格符號，皮膚從格縫間顯露", en:"coarse fishnet stockings, strong dark rock or gothic style symbol, skin visible through grid gaps" },
    { id:"a71", label:"蝴蝶結過膝高筒", zh:"頂部裝飾蝴蝶結的白色或黑色過膝高筒棉質長筒襪，洛麗塔少女夢想", en:"white or black knee-high cotton stockings with bow accent at top, Lolita girly dream" },
    { id:"a72", label:"腳踝細鏈飾", zh:"極細金色或銀色腳踝鏈，貼合腳踝骨線條，輕微搖晃，是最被忽視的性感細節", en:"ultra-thin gold or silver ankle bracelet hugging ankle bone line, subtle shimmer, the most overlooked sensual detail" },
    { id:"a73", label:"黑色流蘇腿環", zh:"黑色金屬或皮革流蘇裝飾的大腿環，性感裝飾主義，隨步伐搖曳的黑色流蘇", en:"black metal or leather fringe thigh band, sensual ornamentalism, swaying black fringe with each step" },
    { id:"a74", label:"蕾絲吊帶腿環", zh:"精緻蕾絲面料的大腿腿環，搭配細吊帶連結腰帶，法式情趣與高級時裝交界", en:"delicate lace thigh band with thin garter connecting to waistband, French boudoir meets high fashion" },
    { id:"a75", label:"透明PVC過膝長靴", zh:"全透明PVC材質過膝長靴，鞋內腿部清晰可見，強烈的未來感與前衛時裝感", en:"fully transparent PVC over-knee boots, leg clearly visible inside, intense futuristic avant-garde fashion" },
    { id:"a76", label:"銀色厚底運動鞋", zh:"金屬銀色超厚底老爹鞋，反光面料，Y2K千禧年未來感的標誌性鞋款", en:"metallic silver chunky-sole dad sneakers, reflective material, iconic Y2K millennium futuristic footwear" },
    { id:"a77", label:"黑色漆皮高跟鞋", zh:"黑色漆面高跟鞋，強反光的鏡面鞋面，極端修長腿型效果，都市女王氣場", en:"black patent leather high heels, mirror-shine surface with strong specular reflection, elongating silhouette, urban queen energy" },
    { id:"a78", label:"細帶繫踝高跟涼鞋", zh:"極細皮革帶繫踝羅馬式高跟涼鞋，帶子纏繞小腿，露出足部線條，女神感造型", en:"strappy ankle-tie Roman high heel sandals, thin leather straps wrapping calf, exposing foot arch, goddess aesthetic" },
    { id:"a79", label:"黑色馬丁靴", zh:"黑色厚底8孔馬丁靴，堅實的黃色縫線，反傳統的龐克青年符號，氣場十足", en:"black 8-eyelet Dr. Martens chunky boots with yellow stitching, anti-establishment punk youth symbol" },
    { id:"a80", label:"白色帆布小白鞋", zh:"乾淨純白色低幫帆布運動鞋，極簡休閒基本款，輕盈透氣的日常感", en:"clean pure white low-top canvas sneakers, minimalist casual essential, lightweight airy everyday look" },
    // ◆ 包包系列
    { id:"a81", label:"迷你皮革鍊條包", zh:"小巧的黑色皮革金色鍊條斜挎包，可裝下手機的極簡尺寸，奢侈品符號感", en:"small black leather gold chain crossbody bag, phone-sized minimalist volume, luxury symbol aesthetic" },
    { id:"a82", label:"透明PVC托特包", zh:"全透明PVC托特購物包，內容物完全可見，混搭前衛透明美學與街頭實用主義", en:"fully transparent PVC tote bag, contents fully visible, avant-garde transparency meets street practicality" },
    { id:"a83", label:"Y2K銀色小挎包", zh:"銀色金屬感Y2K千禧年迷你挎包，反光材質，千禧年電子流行音樂節符號", en:"silver metallic Y2K mini crossbody bag, reflective material, millennium electronic music festival symbol" },
    { id:"a84", label:"黑色真皮大托特", zh:"大尺寸黑色頭層牛皮托特包，自然垂墜質感，帶有極簡奢華的都市感", en:"oversized black full-grain leather tote with natural drape, minimal luxury urban aesthetic" },
    { id:"a85", label:"流蘇皮革手拿包", zh:"棕色或黑色皮革流蘇裝飾的手拿包，波西米亞搖滾感，每步動作流蘇搖曳", en:"brown or black leather fringe clutch bag, bohemian rock vibe, fringe swaying with every movement" },
    { id:"a86", label:"賽博龐克腰掛包", zh:"黑色尼龍戰術腰掛包，多口袋設計，帶有強烈的機能主義與賽博龐克美學", en:"black nylon tactical hip bag with multiple pockets, strong functionalism and cyberpunk aesthetic" },
    { id:"a87", label:"木珠彩色手提包", zh:"圓形或半圓形木質珠框口金包，多彩幾何圖案，夏日度假俏皮感", en:"round or semicircle wood bead frame bag with colorful geometric pattern, playful summer vacation vibe" },
    // ◆ 帽飾系列
    { id:"a88", label:"黑色絨面棒球帽", zh:"黑色絨面材質棒球帽，帽簷略微壓低，街頭休閒感中帶有神秘遮臉效果", en:"black velvet baseball cap with slightly brim-down wear, street casual with mysterious face-shadow effect" },
    { id:"a89", label:"寬簷草帽", zh:"天然拉菲草寬簷草帽，配以細絲帶裝飾，午後陽光下投射出美麗的圓形陰影", en:"natural raffia wide-brim sun hat with thin ribbon trim, casting beautiful circular shadow in afternoon sun" },
    { id:"a90", label:"黑色貝雷帽", zh:"柔軟黑色羊毛氈貝雷帽，法式知識分子美學，斜戴方式強調藝術氣質", en:"soft black wool felt beret, French intellectual aesthetic, worn at angle emphasizing artistic personality" },
    { id:"a91", label:"白色針織毛線帽", zh:"白色或奶油色寬鬆針織毛線帽，帽口微微向外折邊，北歐冬日俏皮感", en:"white or cream loose knit beanie with slightly rolled brim, Nordic winter playful aesthetic" },
    { id:"a92", label:"金屬鍊條黑色遮陽帽", zh:"黑色棒球帽帽簷邊緣以金屬鍊條裝飾，低調奢華的街頭高定跨界美學", en:"black baseball cap with metal chain trim along brim edge, quiet luxury street haute couture fusion" },
    { id:"a93", label:"皮革牛仔帽", zh:"黑色或棕色皮革帽簷牛仔帽，帶有金屬裝飾，搖滾鄉村的強烈符號感", en:"black or brown leather-brim cowboy hat with metal accents, strong rock-country symbol aesthetic" },
    // ◆ 手套系列
    { id:"a94", label:"黑色短款皮革手套", zh:"短版黑色光面皮革手套，手指半截設計，露出指尖，精緻的都市感與戲劇性", en:"short black glossy leather fingerless gloves revealing fingertips, refined urban dramatic aesthetic" },
    { id:"a95", label:"白色蕾絲長手套", zh:"手臂長度的白色精工蕾絲手套，蕾絲圖案覆蓋整個手臂，復古晚禮服必備", en:"elbow-length white intricate lace gloves covering entire arm, vintage evening gown essential accessory" },
    { id:"a96", label:"黑色網眼手套", zh:"黑色透明網眼長手套，手指全露的版本，呈現肌膚與網格的質感對比", en:"black sheer fishnet long gloves with open fingers, skin-vs-mesh texture contrast aesthetic" },
    { id:"a97", label:"金色金屬指甲手套", zh:"覆蓋指背至指尖的黃金金屬裝飾手套，每個指甲位置有精緻的金屬尖端", en:"gold metal finger armor covering knuckles to tips, elaborate metal claw at each fingertip" },
    { id:"a98", label:"皮革手腕錶帶組合", zh:"黑色或棕色皮革腕錶錶帶搭配手鍊，儀表盤與手飾合一的實用美學", en:"black or brown leather watch strap combined with bracelet, wristwatch and jewelry hybrid practical aesthetic" },
    // ◆ 身體鏈 / 胸飾 / 其他
    { id:"a99",  label:"胸口黃金身體鍊", zh:"細黃金鍊條構成的Y字形胸口身體鍊，沿頸部延伸至胸部，在肌膚上形成光之路徑", en:"Y-shape fine gold chain body chain extending from neck over chest, golden light trail on skin surface" },
    { id:"a100", label:"菱形珠寶胸花", zh:"精緻的施華洛世奇水晶菱形胸花，別於衣物或直接別於肌膚，宮廷奢華符號", en:"Swarovski crystal rhombus brooch worn on garment or directly on skin, royal luxury symbol" },
    { id:"a101", label:"腰背黑色吊帶組", zh:"黑色皮革吊帶在背部交叉形成X型裝飾，既是功能性也是強烈的視覺符號", en:"black leather harness crossing in X pattern at the back, both functional and strongly visual statement" },
    { id:"a102", label:"臍環加腰鍊組合", zh:"細金屬臍環搭配腰鍊組合，凸顯腹部曲線，隱約的異域情調與時尚感", en:"fine metal navel ring combined with waist chain, highlighting abdominal curve, subtle exotic fashion appeal" },
    { id:"a103", label:"銀色玫瑰發卡", zh:"精緻銀色薔薇花形發卡，花瓣細節精工，仙女系唯美古典裝飾", en:"intricate silver rose hair pin with detailed petal craftsmanship, ethereal classical ornamental beauty" },
    { id:"a104", label:"羽毛耳環", zh:"天然鴕鳥或孔雀羽毛大型垂墜耳環，隨氣流輕微飄動，波西米亞自由靈魂感", en:"natural ostrich or peacock feather oversized drop earrings, gently floating in air currents, bohemian free spirit" },
    { id:"a105", label:"玻璃珠多串手鍊", zh:"多色精緻玻璃珠串成的寬版手鍊組合，色彩鮮豔多樣，非洲或地中海民族風情", en:"multi-color fine glass bead wide bracelet stack, vivid varied colors, African or Mediterranean ethnic inspiration" },
    { id:"a106", label:"蒸汽龐克護目鏡", zh:"銅色金屬框架圓形蒸汽龐克護目鏡，複雜的齒輪裝飾，搭載棕色氣泡玻璃鏡片", en:"copper-tone metal frame round steampunk goggles with gear decoration, amber bubble glass lenses" },
    { id:"a107", label:"黃金美人魚鱗腰鍊", zh:"金色魚鱗片串成的貼腰腰鍊，在光下如流動的液態金，傳說生物般的裝飾感", en:"gold fish-scale plate waist chain, flowing liquid gold effect under light, mythological creature ornament feel" },
    { id:"a108", label:"星座符文頸圈", zh:"黑色皮革或絲絨頸圈上刻有星座符文圖案，神秘主義巫女美學符號", en:"black leather or velvet choker engraved with zodiac rune pattern, mysticism witch aesthetic symbol" },
    { id:"a109", label:"彩色串珠長項鍊", zh:"多色彩色串珠構成的長型項鍊，繽紛的色彩組合，90年代復古慢活美學", en:"multi-color bead long necklace in vibrant color combination, 1990s retro laid-back aesthetic" },
    { id:"a110", label:"迷你耳骨釘", zh:"極小的單顆銀色或金色圓形或三角形耳骨釘，低調精緻，完美的基礎配件", en:"tiny single silver or gold round or triangle helix stud earring, understated refinement, perfect basic accessory" },
    { id:"a111", label:"金屬頭箍（鑲鑽款）", zh:"黑色或金色金屬硬頭箍，頂部鑲嵌一排鑽石，硬朗的頭部裝飾，有女王儀式感", en:"black or gold metal rigid headband with top diamond row, assertive crown-like head ornament with queen ceremony feel" },
    { id:"a112", label:"皮革+鍊條手腕帶", zh:"黑色皮革腕帶與細金屬鍊條組合的腕部飾品，融合兩種材質的強烈質感對比", en:"black leather wristband combined with fine metal chain cuff, strong material contrast combining two textures" },
    { id:"a113", label:"仿古銀瑪雅浮雕戒", zh:"仿古做舊銀色帶有瑪雅或阿茲特克圖騰浮雕的寬版戒指，原始部落藝術美感", en:"antiqued silver wide-band ring with Maya or Aztec totem relief carving, primal tribal art aesthetic" },
    { id:"a114", label:"霓虹色軟管手鍊", zh:"透明軟管內填充霓虹粉色或藍色液體的手鍊，賽博龐克或鋭舞（Rave）風格", en:"transparent soft tube bracelet filled with neon pink or blue liquid, cyberpunk or rave festival aesthetic" },
    { id:"a115", label:"銀色頸部多環項圈", zh:"多個不同寬度銀色金屬環套疊的頸部裝飾，如雕塑般的頸部修飾，未來時裝感", en:"multiple stacked silver metal rings of varying width as neck decoration, sculptural neck modification, futuristic fashion" },
    { id:"a116", label:"復古卡梅奧浮雕胸針", zh:"橢圓形貝殼底色的復古女性側臉浮雕胸針，鍍金邊框，維多利亞時代的時光機", en:"oval shell cameo brooch with female profile relief, gold-plated frame, Victorian time-capsule aesthetic" },
    { id:"a117", label:"水晶蝴蝶胸針", zh:"施華洛世奇水晶鑲嵌的大型蝴蝶造型胸針，每個翅膀區域都有不同色調的水晶", en:"large Swarovski crystal butterfly brooch with each wing zone in different crystal color, spectacular statement piece" },
    { id:"a118", label:"單肩鎧甲肩甲配件", zh:"金色或銀色金屬片構成的單側肩甲裝飾，如女武神般的戰甲披肩，史詩級造型", en:"gold or silver metal plate single shoulder armor pauldron decoration, Valkyrie battle armor aesthetic, epic statement" },
    { id:"a119", label:"黃金手臂螺旋環", zh:"纏繞上臂的黃金蛇形螺旋臂環，古埃及女神奧菲里斯靈感設計，壯觀而神秘", en:"gold serpent coil upper arm cuff wrapping around bicep, ancient Egyptian goddess Ophiris-inspired design, spectacular mystique" },
    { id:"a120", label:"指根手背鍊戒", zh:"連接戒指與手鍊的一體式手背鍊，形成覆蓋整個手背的金屬網絡裝飾", en:"ring-to-bracelet connected hand chain covering the entire back of the hand in metal network" },
    // 繼續擴充
    { id:"a121", label:"紅色細帶蝴蝶結髮圈", zh:"紅色絲緞細帶蝴蝶結髮圈，綁於馬尾或辮子末端，甜蜜的細節裝飾點", en:"red satin thin ribbon bow hair tie at ponytail or braid end, sweet detail accent" },
    { id:"a122", label:"黑色羅紋頸套", zh:"細黑色羅紋針織頸套，貼合頸部，半遮臉的神秘感，街頭時尚的實用美學", en:"fine black ribbed knit neck gaiter hugging the neck, mysterious half-face effect, street fashion practicality" },
    { id:"a123", label:"金屬格柵耳環", zh:"細金屬線編織成格柵狀的方形大耳環，幾何工業感強烈，帶有輕盈的通透感", en:"fine metal wire woven grid square large earrings, strong geometric industrial aesthetic with airy transparency" },
    { id:"a124", label:"貓耳金屬髮箍", zh:"金色或銀色金屬貓耳造型髮箍，既有少女俏皮感，又有精緻金屬感的反差萌", en:"gold or silver metal cat-ear headband, playful girlish contrast with sleek metal finish, charming moe aesthetic" },
    { id:"a125", label:"黑色細踝鍊", zh:"極細的黑色氧化銀踝鍊，在白皙腳踝上形成深色線條，低調的暗黑系細節", en:"ultra-thin blackened silver ankle bracelet on pale ankle, dark line contrast, understated dark aesthetic detail" }
  ],

  // ── 角色情緒細節 EMOTION DETAIL (v8.2 新增 250 組) ──────────────────────────
  EMOTION: [
    // ◆ 眼神系列
    { id:"em1",  label:"空洞凝視遠方", zh:"眼神空洞地凝視著鏡頭之外的遠方，瞳孔失焦，彷彿意識已飄離身體，靈魂出竅的迷失感", en:"hollow gaze drifting far beyond the camera, unfocused pupils, consciousness seemingly departed the body, soul-lost dissociation" },
    { id:"em2",  label:"眼底含著隱忍的淚", zh:"眼眶微紅，眼底積聚著盈滿卻未落的透明淚珠，牙關咬緊，是抑制崩潰的最後一道防線", en:"slightly reddened eye rims, brimming transparent tears held back refusing to fall, jaw clenched, last defense against breaking down" },
    { id:"em3",  label:"冷酷的審視目光", zh:"眼神如手術刀般冷靜精準地掃視鏡頭，眉峰微鎖，帶有評估一切的智識冷漠感", en:"scalpel-precise cold analytical gaze scanning the camera, slightly furrowed brow, intellectual detached assessment of everything" },
    { id:"em4",  label:"危險的半瞇眼誘惑", zh:"眼瞼慵懶地下垂至半瞇，眼神從眼縫中帶著危險的磁力射出，是主動進攻式的誘惑", en:"heavy eyelids drooping to half-lid, dangerous magnetic gaze piercing through the slit, proactive aggressive seduction" },
    { id:"em5",  label:"純粹無辜的大眼直視", zh:"雙眼完全睜開到最大，眼白清晰，瞳孔飽滿純粹，直視鏡頭帶有令人憐惜的無辜感", en:"eyes fully wide open, clear whites, full round pupils, direct camera gaze with disarming innocent vulnerability" },
    { id:"em6",  label:"狂喜後的空洞失神", zh:"笑容剛消退後的短暫空洞，嘴角仍保留著弧度的餘韻，眼神卻已飄向虛空，極具故事性", en:"brief hollow vacancy after the smile faded, mouth still holding the ghost of a curve, eyes drifted to void, deeply narrative" },
    { id:"em7",  label:"掠食者鎖定目標", zh:"雙眼聚焦如鷹隼般銳利地盯視鏡頭，輕微的眼角上揚，帶著非人類的專注獵食感", en:"eagle-sharp focused gaze locked on camera, slight upward eye corner, non-human hunter's concentration" },
    { id:"em8",  label:"溫柔彎彎的笑眼", zh:"雙眼因真誠的笑容而向上彎起成月牙形，眼角出現細紋，是最真實的快樂符號", en:"eyes curved up into crescents from genuine smile, fine crows feet at corners, the most authentic happiness symbol" },
    { id:"em9",  label:"眼角帶著輕蔑的淡漠", zh:"眼神看向鏡頭但帶有一絲「你不值得我全部注意力」的輕蔑淡漠，優越感油然而生", en:"gaze on camera with a hint of 'you don't deserve my full attention' dismissive contempt, effortless superiority complex" },
    { id:"em10", label:"突然受到驚嚇的瞬間", zh:"雙眼瞬間張大的驚嚇定格，瞳孔猛然收縮，眉毛上揚，嘴巴微張，捕捉到情緒的0.1秒", en:"eyes suddenly wide from shock, pupils sharply contracted, brows raised, mouth slightly parted, capturing emotion at 0.1s" },
    { id:"em11", label:"沉浸夢境的微睜眼", zh:"眼瞼微微張開透出一線光，像是介於夢境與清醒之間的臨界狀態，睫毛投影在眼白上", en:"eyelids barely parted revealing sliver of light, between dreaming and waking threshold, lashes casting shadow on sclera" },
    { id:"em12", label:"深思時的遠焦凝視", zh:"眼神非常深邃地注視著某個遙遠的點，帶有「正在解決一個複雜問題」的智識專注感", en:"deeply focused gaze on a distant invisible point, intellectual concentration of 'solving a complex problem' intensity" },
    { id:"em13", label:"悲憫溫柔的俯視", zh:"從略高角度俯視時帶有無限溫柔的憐憫，眼神像是想要保護一切脆弱之物", en:"downward gaze from slightly above carrying infinite gentle compassion, eyes wishing to protect all fragile things" },
    { id:"em14", label:"眼角下垂的哀愁", zh:"眼角微微向下垂，像是某種永恆的悲傷印記，即使試圖微笑，憂鬱依然揮之不去", en:"eye corners slightly downturned, like a permanent mark of sorrow, melancholy lingering even when attempting to smile" },
    { id:"em15", label:"興奮閃亮的眸光", zh:"瞳孔中帶有真實的激動光芒，眉毛略微揚起，是整個臉部都被喜悅點亮的真誠狀態", en:"genuine excitement light in pupils, brows slightly raised, entire face lit up by joy, completely authentic emotional state" },
    { id:"em16", label:"心虛側滑的眼神", zh:"眼珠向側邊滑動試圖逃避直視，是說謊或心虛時的本能行為，脆弱而真實的人性瞬間", en:"eyes sliding to the side avoiding direct gaze, instinctive behavior when lying or guilty, vulnerable authentic human moment" },
    { id:"em17", label:"病嬌式黏膩凝視", zh:"眼神黏稠如蜂蜜般固定在鏡頭上，帶有偏執的佔有欲，甜蜜的表面下藏著危險的執念", en:"gaze sticky as honey fixated on camera, possessive obsession, danger lurking beneath sweet surface" },
    { id:"em18", label:"輕挑挑眉的質問", zh:"單側眉毛優雅地上揚，眼神帶著「你確定嗎？」的智識質疑，自信優雅的挑戰者姿態", en:"one eyebrow elegantly raised, gaze carrying 'are you sure?' intellectual challenge, confident elegant challenger posture" },
    { id:"em19", label:"滿足閉目的愉悅", zh:"眼睛微閉帶有滿足感的表情，嘴角上揚，像是正在品味某種極致愉悅的感官體驗", en:"eyes slightly closed with expression of satisfaction, corners of mouth upturned, savoring some ultimate sensory pleasure" },
    { id:"em20", label:"羞澀低垂睫毛", zh:"眼瞼低垂，長睫毛形成扇形陰影投在臉頰上，是害羞無法對視的最動人瞬間", en:"eyelids lowered, long lashes casting fan-shadow on cheek, the most touching moment of shyness avoiding eye contact" },
    // ◆ 嘴唇 / 口部細節系列
    { id:"em21", label:"半張迷途的微張唇", zh:"嘴唇輕微張開，既不說話也不閉合，懸停在某個未完成的瞬間，像是話語凝固在喉頭", en:"lips slightly parted, neither speaking nor closing, suspended in an unfinished moment, words frozen in the throat" },
    { id:"em22", label:"用力咬住下唇", zh:"牙齒深深咬住下唇肉，唇色因受力而泛白，是集中精神或壓抑情緒時的強烈肢體訊號", en:"teeth deeply biting into lower lip, lip color whitening from pressure, intense physical signal of concentration or suppressed emotion" },
    { id:"em23", label:"輕舔嘴角的習慣動作", zh:"舌尖無意識地輕輕觸碰嘴角，滋潤嘴唇的無心之舉卻意外極具誘惑力", en:"tongue tip unconsciously lightly touching corner of mouth, an absentminded lip-moistening act unintentionally seductive" },
    { id:"em24", label:"冷笑時的嘴角上揚", zh:"只有嘴角單側輕微上揚的冷笑，帶有高度的智識優越感，是一種無需言語的嘲諷", en:"only one corner of mouth lifting in a smirk, carrying extreme intellectual superiority, a wordless mockery" },
    { id:"em25", label:"貝齒微露的天真笑", zh:"微笑時只露出上方一排細白貝齒，笑容純粹甜蜜，散發出無害的少女魅力", en:"smile revealing only upper row of perfect white teeth, pure sweet smile radiating harmless girlish charm" },
    { id:"em26", label:"噘嘴的嬌嗔表情", zh:"雙唇前噘形成誇張的嘟嘴，眉頭微皺，是撒嬌時最高效的武器，攻擊性的可愛", en:"lips pouched forward into exaggerated pout, brows slightly knitted, most effective weapon in acting spoiled, aggressively cute" },
    { id:"em27", label:"嘴角下垂的委屈感", zh:"嘴角微微向下彎，像是某種在努力壓抑卻壓不住的委屈正在漫出嘴角，令人心疼", en:"corners of mouth slightly drooping downward, suppressed grievance slowly leaking through the edges, heart-aching" },
    { id:"em28", label:"深吸一口氣的鼻翼張動", zh:"深吸空氣時鼻翼輕微張大，胸口起伏，這個微小的細節透露出極大的情緒累積", en:"nostrils slightly flaring on deep inhale, chest rising and falling, this tiny detail revealing enormous emotional accumulation" },
    { id:"em29", label:"滾動唇珠放鬆表情", zh:"嘴唇放鬆地輕輕滾動，是思考或等待時的無意識習慣，鬆弛中帶有私密感", en:"lips loosely and softly rolling, unconscious habit when thinking or waiting, relaxed intimate private moment" },
    { id:"em30", label:"微微張口的驚嘆", zh:"嘴巴不自主地微開，是「哇」這個音尚未說出口時的定格，眼睛同時放大，驚奇的剎那", en:"mouth instinctively falling slightly open, frozen 'wow' not yet vocalized, eyes widening simultaneously, moment of wonder" },
    { id:"em31", label:"壓低的性感耳語唇形", zh:"嘴唇微微壓低靠近鏡頭，仿佛正在對對方耳語某個秘密，極其私密的嘴型帶來巨大的視覺張力", en:"lips slightly pressed down toward camera as if whispering a secret, intensely intimate mouth shape creating enormous visual tension" },
    { id:"em32", label:"甜蜜吐舌調皮感", zh:"舌尖輕吐在上下牙齒之間，眼睛彎起，整張臉充滿了童真的惡作劇快樂", en:"tongue tip slightly between upper and lower teeth, eyes curving up, entire face full of childlike mischievous joy" },
    { id:"em33", label:"唇角的一絲若有若無的笑意", zh:"極其細微的嘴角上揚，不確定是否真的在笑，令人著迷的模糊情緒狀態，蒙娜麗莎效應", en:"extremely subtle corner of mouth upward, uncertain if actually smiling, fascinating ambiguous emotional state, Mona Lisa effect" },
    { id:"em34", label:"緊閉嘴唇的決心", zh:"雙唇緊緊閉合，唇線拉平，是「我已下定決心，任何人都無法改變我」的非語言宣言", en:"lips pressed firmly together, lip line flat, non-verbal declaration of 'I've decided and nothing can change my mind'" },
    { id:"em35", label:"興奮時快速吸氣的微開口", zh:"興奮驚喜時倒吸一口冷氣，嘴巴在吸氣瞬間微開，下唇輕微後縮，高度真實的情緒反應", en:"quick gasp of excitement, mouth briefly opening on the inhale, lower lip slightly drawing back, highly authentic emotional reaction" },
    // ◆ 臉部微表情細節
    { id:"em36", label:"皺眉頭的困惑思考", zh:"眉心輕微皺起形成小縱紋，是「我正在努力理解某件事」的誠實表情，充滿智識的可愛感", en:"brow center gently furrowed creating small vertical crease, honest 'I'm trying hard to understand' expression, intellectually adorable" },
    { id:"em37", label:"單側酒窩的偏心笑", zh:"笑時只有一側臉頰出現深深的酒窩，不對稱的笑容比完美更迷人，天然個性的印記", en:"only one cheek dimpling deeply when smiling, asymmetric smile more captivating than perfect symmetry, natural personality mark" },
    { id:"em38", label:"臉頰微微鼓起的隱忍", zh:"雙頰像是悄悄充氣般微微鼓起，是忍住不笑或忍住不說話的可愛物理反應", en:"cheeks subtly puffing out as if quietly inflated, adorable physical reaction of holding back a laugh or holding back words" },
    { id:"em39", label:"額頭貼著某物的親密", zh:"額頭輕輕靠向鏡頭的方向或某個想象的存在，是信任與溫柔的最小肢體表達", en:"forehead gently leaning toward camera direction or imagined presence, smallest physical expression of trust and tenderness" },
    { id:"em40", label:"臉頰漸染的羞紅", zh:"從顴骨向臉頰漫延的自然紅暈，不均勻的邊界線令其更加真實，完全不可控制的情緒生理反應", en:"natural flush spreading from cheekbones across cheeks, irregular boundary making it more authentic, completely uncontrollable physiological emotion" },
    { id:"em41", label:"皮膚微微發汗的真實感", zh:"幾顆細微的汗珠停留在上唇邊緣或眉間，帶有緊張、運動後或炎熱環境的超高真實感", en:"tiny sweat droplets resting at upper lip edge or between brows, hyper-realistic tension, post-exercise or heat environment" },
    { id:"em42", label:"下巴微微前推的挑釁", zh:"下巴略微前推，是一種「我準備好接受挑戰了」的無聲身體語言，帶有強烈的自信挑釁感", en:"chin slightly thrust forward, silent body language of 'I'm ready for the challenge', strongly confident provocative stance" },
    { id:"em43", label:"面部肌肉完全放鬆的空白", zh:"所有面部表情肌完全放鬆，臉部處於靜止的空白狀態，是情緒重置後的零時刻，具有佛系美感", en:"all facial muscles completely relaxed, face in still blank state, zero-moment after emotional reset, Zen-aesthetic beauty" },
    { id:"em44", label:"眼角細紋的笑意痕跡", zh:"即使笑容已收，眼角仍保留著剛才歡笑留下的細紋痕跡，是真實快樂的物理證明", en:"even after smile fades, fine lines remain at eye corners from the just-passed laughter, physical proof of genuine happiness" },
    { id:"em45", label:"側臉陰影下的輪廓美", zh:"側臉受到強側光照射，臉頰顴骨和下顎線條的陰影層次極為豐富，展現骨相之美", en:"side profile under strong sidelighting, shadow layers on cheekbones and jawline extremely rich, showcasing skeletal beauty" },
    { id:"em46", label:"專注時的微咬舌尖", zh:"極度專注於某事時，舌尖無意識地輕觸到門牙內側，是高度集中的可愛副作用", en:"tongue tip unconsciously touching back of front teeth when extremely concentrated, adorable side effect of intense focus" },
    { id:"em47", label:"感動時的鼻翼酸麻", zh:"鼻頭微微泛紅且輕微顫動，眼眶隨之濕潤，是被感動的最前期生理反應，感人至深", en:"nose tip slightly reddening and trembling, eye rims moistening in response, earliest physiological sign of being moved, deeply touching" },
    { id:"em48", label:"記憶遙遠的失焦眼神", zh:"眼神失焦如同正在觀看一部只有自己能看見的電影，是沉浸在遙遠記憶中的詩意狀態", en:"unfocused eyes watching a film only they can see, poetic state of being immersed in distant memories" },
    { id:"em49", label:"輕觸自己臉頰的細膩", zh:"指尖輕輕觸碰自己的臉頰，溫柔的自我接觸帶有強烈的私密性與自我感知的感性", en:"fingertip lightly touching own cheek, tender self-contact with strong intimacy and sensory self-awareness" },
    { id:"em50", label:"激動時顫抖的下唇", zh:"情緒激動時下唇出現不受控制的輕微顫抖，是情感洩洪前最後一刻的物理臨界點", en:"lower lip involuntarily trembling slightly in emotional intensity, physical tipping point just before emotional flood release" },
    // ◆ 身體情緒語言
    { id:"em51", label:"縮攏肩膀的自我保護", zh:"雙肩不自主地向前内縮，讓身體看起來更小，是本能的自我保護姿勢，透露內心的脆弱", en:"shoulders instinctively drawing inward, making body smaller, instinctive self-protective posture revealing inner vulnerability" },
    { id:"em52", label:"抬頭挺胸的宣示感", zh:"脊椎拉直，肩膀後展，胸口微微前挺，是「我在這裡，我不需要任何道歉」的有力宣示", en:"spine elongated, shoulders drawn back, chest slightly forward, powerful declaration of 'I am here and I apologize to no one'" },
    { id:"em53", label:"低頭略思時的頸部弧線", zh:"頭部微微低垂時，頸部後方呈現出脆弱而美麗的弧線，髮絲沿弧線落下，令人想要保護", en:"as head gently bows, the nape reveals a vulnerable beautiful arc, hair falling along the curve, evoking desire to protect" },
    { id:"em54", label:"手指無意識地拉扯衣角", zh:"手指無意識地不停撥弄或輕拉衣服的邊緣，是焦慮或緊張時的身體自我安慰行為", en:"fingers unconsciously repeatedly tugging or fidgeting with clothing hem, self-soothing body behavior during anxiety or nervousness" },
    { id:"em55", label:"深呼吸後胸口的起伏", zh:"深吸一口氣後胸口緩慢起伏的片段，帶有「正在平復激動情緒」的強烈敘事感", en:"chest slowly rising after a deep breath, strong narrative sense of 'calming intense emotions' breathing sequence" },
    { id:"em56", label:"緩緩低頭接受失落", zh:"頭部慢慢向下垂落，不是驕傲，而是接受了某個無法改變的事實，充滿靜默的詩意悲傷", en:"head slowly drooping downward, not in pride but accepting an unchangeable reality, full of silent poetic sorrow" },
    { id:"em57", label:"手輕放胸口的情感按壓", zh:"單手自然地輕放在胸口，是一種「我感受到了某種強烈的情緒正在這裡擊打」的本能手勢", en:"one hand naturally resting on chest, instinctive gesture of 'I feel something intensely striking here inside'" },
    { id:"em58", label:"腳趾緊扣的緊張細節", zh:"腳趾在鞋內或赤腳時緊緊扣緊，是整體緊張狀態傳導到末梢的最細微卻最真實的細節", en:"toes curling tightly inside shoes or bare, most subtle yet authentic detail of systemic tension reaching the extremities" },
    { id:"em59", label:"轉頭向後的懷念動作", zh:"回頭看一眼已經走過的路，眼神帶有眷戀，是告別或懷念的電影級情感動作", en:"looking back over shoulder at the path already traveled, gaze carrying nostalgia, cinematic emotional gesture of farewell or longing" },
    { id:"em60", label:"上身略微前傾的信任", zh:"身體重心向前傾斜，向著面對的方向，是「我信任你，我願意靠近」的無聲身體宣示", en:"body weight leaning forward toward what faces, silent body declaration of 'I trust you, I am willing to be closer'" },
    { id:"em61", label:"緩慢閉眼享受當下", zh:"眼睛以極慢的速度閉合，讓感官完全沉浸在某個聲音、觸覺或氣味中，是感官享樂主義的定格", en:"eyes closing at extremely slow speed, senses fully immersing in a sound, touch, or scent, captured moment of sensory hedonism" },
    { id:"em62", label:"握緊雙拳的決意姿態", zh:"雙手在身側或腰部緊握成拳，指關節微白，是「我已下定決心向前走」的強烈身體語言", en:"both hands clenched into fists at sides or waist, knuckles slightly whitening, strong body language of 'I have decided to move forward'" },
    { id:"em63", label:"突然靜止的驚嚇後凝固", zh:"受到驚嚇後身體完全靜止的0.1秒，像是動物的凍結反應，全身肌肉剎那間都蓄勢待發", en:"0.1 second of complete bodily freeze after a fright, like an animal's freeze response, every muscle primed and ready" },
    { id:"em64", label:"無力地靠牆滑落感", zh:"後背靠著牆壁緩緩向下滑落的動作，疲憊或心力交瘁時的本能，地心引力都成了一種隱喻", en:"slowly sliding down a wall, instinctive response to exhaustion or emotional depletion, gravity becoming metaphorical" },
    { id:"em65", label:"雙手交扣胸前的屏障", zh:"雙手在胸前交扣，形成一個無形的保護屏障，是對外界刺激防禦時的標準閉合姿態", en:"hands clasped together in front of chest, forming invisible protective barrier, standard closed posture against external stimuli" },
    // ◆ 氛圍情緒 / 場景情緒
    { id:"em66", label:"下雨前空氣的憂鬱感", zh:"臉上帶有雨前潮濕空氣般的憂鬱氣息，像是即將來臨的什麼讓人無法忽視它的重量", en:"face carrying the melancholy of humid pre-rain air, like an impending something whose weight cannot be ignored" },
    { id:"em67", label:"深夜孤獨清醒的疏離", zh:"深夜時分獨自清醒帶來的那種清醒性孤獨，與世界保持著某種微妙的玻璃隔閡感", en:"wakeful solitude of being the only one awake in the deep night, subtle glass-wall separation from the world" },
    { id:"em68", label:"盛夏午後的慵懶豐饒", zh:"盛夏午後的陽光慵懶地照在臉上，一種對「一切都足夠了」的感官滿足，飽和的幸福感", en:"summer afternoon sun lazily warming the face, sensory satisfaction that 'everything is enough', saturated happiness" },
    { id:"em69", label:"告別後轉身的背影情緒", zh:"轉身離去的背影中帶有的複雜情緒，不讓人看見的淚，收起的笑，是離開時最私密的樣子", en:"complex emotion in the back turning away, tears not shown, smile withdrawn, the most private self at the moment of leaving" },
    { id:"em70", label:"等待中的期待與焦慮", zh:"等待某件重要事情發生時的混合情緒，期待的興奮與害怕失望的焦慮同時在臉上流動", en:"mixed emotions of waiting for something important, excited anticipation and fear of disappointment flowing simultaneously on face" },
    { id:"em71", label:"久別重逢的熱淚盈眶", zh:"久別重逢的瞬間，情緒瞬間崩堤，眼眶猛然充盈，嘴角卻在哭泣中上揚，悲喜交雜的最高點", en:"moment of reunion after long separation, emotions instantly breaking, eyes suddenly filling, mouth curving upward through tears, peak of mixed grief and joy" },
    { id:"em72", label:"秘密被發現時的手足無措", zh:"秘密被揭穿那一刻的慌張，眼神四竄卻無處可逃，雙頰迅速飛上紅暈，手不知該往哪放", en:"panic at the moment of secret being revealed, eyes darting but nowhere to escape, cheeks flushing rapidly, hands not knowing where to go" },
    { id:"em73", label:"憤怒後的冷靜重整", zh:"激烈情緒過後恢復冷靜的過渡期，深呼吸、眼神重新聚焦、肌肉逐漸放鬆，是力量的重新凝聚", en:"transitional calm after intense anger, deep breath, eyes refocusing, muscles gradually relaxing, reconvergence of strength" },
    { id:"em74", label:"在陌生地方感到安心的瞬間", zh:"在陌生環境中突然感到「這裡是安全的」的瞬間，肩膀輕輕落下，呼吸變得更深，表情溫和", en:"sudden moment of feeling 'this place is safe' in unfamiliar surroundings, shoulders gently dropping, breath deepening, expression softening" },
    { id:"em75", label:"接受命運的安靜沉默", zh:"接受了某個無法改變的事實後的平靜，不是麻木而是真正的放下，眼神中帶有淡然的成熟", en:"quiet peace after accepting an unchangeable fact, not numbness but genuine release, eyes carrying serene maturity" },
    { id:"em76", label:"惡作劇成功的隱忍偷笑", zh:"成功惡作劇後強忍著不爆笑的掙扎表情，嘴角不受控制地一直想往上揚，整張臉閃閃發光", en:"struggling to hold back explosion of laughter after successful prank, mouth corners involuntarily wanting to rise, entire face glowing" },
    { id:"em77", label:"終於說出口後的如釋重負", zh:"說出了長久以來藏在心底的話後，臉上出現了如釋重負的輕盈，是情緒重量的物理卸載", en:"lightness appearing on face after finally saying words long held in heart, physical unloading of emotional weight" },
    { id:"em78", label:"看穿謊言後的輕蔑優雅", zh:"已看穿對方謊言但選擇保持優雅不戳破的從容，嘴角帶著「我知道了」的淺笑，高度自持", en:"composure of seeing through a lie and choosing elegant silence, mouth carrying 'I know' soft smile, extreme self-possession" },
    { id:"em79", label:"全力以赴後的極度疲憊", zh:"竭盡全力完成某件事後的極度疲憊，虛弱卻帶著滿足，眼神空洞但眼角有淡淡的驕傲", en:"extreme exhaustion after giving everything, weakened yet satisfied, hollow eyes with faint pride at the corners" },
    { id:"em80", label:"沉浸音樂時的輕微搖擺", zh:"被音樂完全帶走時身體的輕微不自主律動，閉眼或半瞇，是最放鬆的自我狀態", en:"subtle involuntary body sway when completely carried by music, eyes closed or half-lidded, most relaxed self-state" },
    // ◆ 複合情緒 / 進階情感
    { id:"em81", label:"笑著落淚的複雜情緒", zh:"明明哭泣卻在哭聲中浮現笑容，或明明在笑卻有一滴淚悄悄流下，最複雜的人類情感狀態", en:"smiling appearing within crying, or a tear quietly falling during laughter, the most complex human emotional state" },
    { id:"em82", label:"被遺忘後的落寞自尊", zh:"知道自己被遺忘了，但仍努力保持尊嚴的矛盾表情，傷心和驕傲在臉上拉扯", en:"contradictory expression of being forgotten yet struggling to maintain dignity, sadness and pride pulling at the face" },
    { id:"em83", label:"熟悉陌生感的迷失", zh:"明明熟悉的地方或人卻感到陌生的詭異感，眼神中帶有困惑和一絲不安的失落感", en:"eerie feeling of unfamiliarity in familiar place or person, gaze holding confusion and a hint of unsettling disorientation" },
    { id:"em84", label:"害怕被喜歡的不安", zh:"被某人喜歡卻因此感到不安的矛盾情緒，既渴望又恐懼，退縮與前進的心理拉鋸", en:"paradoxical anxiety from being liked by someone, desiring yet fearing, psychological tug-of-war between retreating and advancing" },
    { id:"em85", label:"不得不離開的不捨", zh:"明知道必須離開卻仍然不停回望的眷戀，每一步都重若千斤，是最高烈度的留戀情感", en:"yearning of knowing you must leave yet unable to stop looking back, each step weighing a thousand pounds, highest intensity of longing" },
    { id:"em86", label:"喜出望外的驚喜綻放", zh:"完全沒有預期的驚喜讓臉部在0.1秒內完成從平靜到狂喜的全速切換，極度真實的快樂爆發", en:"completely unexpected surprise making face switch full-speed from neutral to ecstasy in 0.1 seconds, extremely authentic joy eruption" },
    { id:"em87", label:"撒謊時的心虛勾唇", zh:"說謊時嘴角的不自然上揚，試圖用笑容掩蓋慌張，但眼神已經出賣了一切，真實脆弱的人性", en:"unnatural upward twist of lip corner when lying, trying to mask panic with smile, but gaze betraying everything, authentic human vulnerability" },
    { id:"em88", label:"初次戀愛的倉皇失措", zh:"第一次喜歡上一個人時的心跳加速與手足無措，不知道該把手放哪、不知道該把眼睛看哪", en:"racing heart and flustered helplessness of falling in love for the first time, not knowing where to put hands or where to look" },
    { id:"em89", label:"被公平對待時的感動", zh:"從不習慣被公平善待，突然受到公平善待時的不知所措，感動中帶有不敢相信的驚訝", en:"unfamiliar with fair treatment, disorientation at receiving it suddenly, moved with a disbelieving surprise" },
    { id:"em90", label:"與自己的和解時刻", zh:"終於與過去的自己和解，眼神中帶有一種歷經一切後浮現的平靜，既溫柔又堅強", en:"finally making peace with one's past self, eyes holding a calm that emerges after experiencing everything, both gentle and strong" },
    { id:"em91", label:"靜默中的強大存在感", zh:"不說話不動作，僅以靜默的存在感填滿空間，令周圍一切都顯得多餘，絕對的中心感", en:"filling space with mere silent presence without speaking or moving, making everything around seem unnecessary, absolute center of gravity" },
    { id:"em92", label:"知道自己被注視的表演性", zh:"察覺到自己正在被人偷偷注視，微微調整了姿態，多了一層若有若無的表演意識", en:"subtly adjusting posture upon noticing being secretly watched, adding a layer of performative self-awareness" },
    { id:"em93", label:"憤怒後沉默的凌厲", zh:"激烈爭吵後的沉默比剛才的怒吼更加凌厲，眼神如刀，空氣中帶有緊繃的裂縫感", en:"silence after heated argument more cutting than the shouting just ended, gaze like a blade, air carrying taut cracking tension" },
    { id:"em94", label:"面對鏡子時的自我探問", zh:"直視鏡中自己的眼睛，帶有「我是誰，我想要什麼」的深刻自我探問，是哲學性的內在對話", en:"directly meeting own eyes in mirror, deep self-inquiry of 'who am I and what do I want', philosophical internal dialogue" },
    { id:"em95", label:"輕描淡寫的過度表演", zh:"將一件並不重要的小事刻意渲染得極為戲劇性，眼神誇張翻轉，嘴角上揚的過度表演", en:"deliberately dramatizing something trivial to extreme, eyes rolling with exaggerated flair, corner of mouth upturned in over-performance" },
    { id:"em96", label:"被誤解時的疲憊解釋欲", zh:"試圖解釋自己但察覺對方根本不想聽的那一刻，說話的欲望緩緩熄滅，眼神中帶有倦怠的失落", en:"moment of realizing the other simply doesn't want to listen while trying to explain, desire to speak slowly extinguishing, tired disappointment in eyes" },
    { id:"em97", label:"成功後不敢相信的呆滯", zh:"達成夢想後的幾秒呆滯，大腦尚未處理這個好消息，面部還凝固在努力的表情裡", en:"seconds of blankness after achieving the dream, brain not yet processing the good news, face still frozen in the effort expression" },
    { id:"em98", label:"熟睡邊緣的半意識", zh:"即將進入睡眠的臨界狀態，眼瞼沉重半閉，眼神漫無目的地遊走，肌肉完全放鬆如液態", en:"threshold state just before sleep, heavy half-closed eyelids, gaze wandering aimlessly, muscles completely relaxed like liquid" },
    { id:"em99", label:"被觸碰到軟肋時的一怔", zh:"某句話準確擊中了心底最脆弱的地方，身體短暫地凝固了一下，眼神中閃過難以掩藏的觸動", en:"body briefly freezing when a word accurately hit the most vulnerable spot in the heart, undeniable fleeting reaction in eyes" },
    { id:"em100",label:"瀕臨崩潰前的強撐笑容", zh:"在即將崩潰的邊緣還在用力撐起一個笑容，笑容的邊緣帶有細微的顫抖，令人無法承受的心疼", en:"forcing a smile at the very edge of breaking down, subtle trembling at the edges of the smile, unbearably heartbreaking to witness" },
    // 繼續補充更多細節
    { id:"em101", label:"冷氣吹來時的肌膚反應", zh:"冷氣或冷風輕輕拂過皮膚時的細微一顫，手臂或頸部起了細密的雞皮疙瘩，感官敏銳的真實表現", en:"subtle shiver as air conditioning or cold breeze touches skin, fine goosebumps on arm or neck, authentic sensory sensitivity" },
    { id:"em102", label:"聞到熟悉氣味的追憶", zh:"某個熟悉的氣味觸發了深埋的記憶，眼神向上或向遠方飄移，是嗅覺觸發記憶的神經詩意", en:"familiar scent triggering deeply buried memories, gaze floating upward or away, neurological poetry of olfactory memory triggering" },
    { id:"em103", label:"被複雜問題問住的停頓", zh:"被一個複雜或尖銳的問題問住，沉默的瞬間帶有思考的重量，這個停頓本身就充滿了資訊", en:"stumped by a complex or sharp question, moment of silence carrying the weight of thought, the pause itself filled with information" },
    { id:"em104", label:"口渴時的無意識舔唇", zh:"感到口渴或緊張時，舌頭無意識地快速掃過嘴唇，這個細節讓整個人顯得更加真實可感", en:"tongue unconsciously quickly sweeping across lips when thirsty or nervous, this detail making the person feel more real and tactile" },
    { id:"em105", label:"喜悅難以掩藏的眼底光", zh:"即使努力保持冷靜或嚴肅，眼底深處仍透出一點快壓不住的喜悅光芒，藏不住的真心", en:"even when trying hard to stay calm or serious, inextinguishable joy light leaking from depth of eyes, a sincere heart that cannot be hidden" },
    { id:"em106", label:"想哭卻不願意哭的抵抗", zh:"淚腺完全激活卻用全部的意志力強制不讓眼淚落下，眼眶的顫動洩露了正在進行的內部戰爭", en:"tear glands fully activated yet all willpower forcing tears not to fall, trembling eye rims betraying the internal war in progress" },
    { id:"em107", label:"事後回想的靦腆微笑", zh:"想起了一件令自己臉紅的往事，在無人注意時嘴角悄悄上揚，是完全私人的甜蜜回憶時刻", en:"recalling something embarrassing, corner of mouth quietly lifting when no one is watching, completely private sweet memory moment" },
    { id:"em108", label:"說「沒事」時的刻意堅強", zh:"說著「沒事」卻全身散發著「其實很有事」的訊號，是善意謊言背後最孤獨的勇敢", en:"saying 'it's fine' while radiating all signals of 'actually it's not fine at all', loneliest courage behind a well-meaning lie" },
    { id:"em109", label:"某人走後的房間情緒", zh:"某人剛剛離開後的空曠感，空氣中還殘留著他/她的氣息，視線停留在剛才的位置", en:"emptiness after someone just left, their scent still lingering in the air, gaze still resting on where they just were" },
    { id:"em110", label:"深夜自言自語的模樣", zh:"深夜一個人輕聲說著話，嘴唇微動，可能是整理思緒、練習說詞或只是為了確認自己存在", en:"softly talking to oneself alone in the deep night, lips barely moving, perhaps organizing thoughts, rehearsing words, or confirming own existence" },
    { id:"em111", label:"挑戰剛開始時的緊張期待", zh:"站在某件挑戰性事物面前的最初一刻，緊張與期待等比例混合，腎上腺素讓眼神格外清醒", en:"very first moment standing before something challenging, tension and anticipation in equal proportion, adrenaline making eyes exceptionally clear" },
    { id:"em112", label:"看著老照片時的時光感", zh:"看著老照片時臉上浮現的複雜表情，那個人既熟悉又陌生，既是自己又不是自己", en:"complex expression floating on face while looking at old photos, that person both familiar and strange, both self and not-self" },
    { id:"em113", label:"忽然意識到被愛的錯愕", zh:"忽然意識到某人深深愛著自己時的錯愕，臉上閃過無法言說的驚訝，繼而是溫暖的漫溢", en:"shock at suddenly realizing someone deeply loves you, unspeakable surprise flashing across face, followed by overflowing warmth" },
    { id:"em114", label:"習以為常的幸福恍惚", zh:"在平凡的日常中突然意識到「原來我已經很幸福了」的恍惚，眼神柔和，微笑帶有感恩感", en:"sudden realization during ordinary daily life of 'I am already very happy', dazed soft eyes, smile carrying a quality of gratitude" },
    { id:"em115", label:"第一次的忐忑純粹", zh:"「第一次」某事帶來的那種特有的忐忑純粹感，緊張中帶有雀躍，是只屬於第一次的珍貴情緒", en:"unique tentative purity of experiencing something 'for the first time', nervous excitement, precious emotion belonging only to firsts" },
    // 更多細緻情緒
    { id:"em116", label:"過度思考的眉間凝聚", zh:"反覆思考同一件事導致眉間無意識地越收越緊，是大腦滿載的外在信號，美麗的智識皺紋", en:"unconsciously tightening brow crease from over-thinking the same thing, external signal of cognitive overload, beautiful intellectual wrinkle" },
    { id:"em117", label:"勇氣集結前的靜默秒", zh:"採取某個勇敢行動前的那最後一秒靜默，深吸氣，握緊某樣東西，然後縱身一躍", en:"last one second of silence before a brave act, deep breath, gripping something, then the leap" },
    { id:"em118", label:"說謊時的超速眨眼", zh:"在緊張說謊的瞬間眨眼頻率不自覺加快，是無法控制的生理訊號出賣了語言的謊言", en:"involuntarily increased blinking during tense lying, uncontrollable physiological signal betraying the verbal deception" },
    { id:"em119", label:"委屈中的強撐微笑", zh:"正在感受委屈或傷害，但因場合不允許而努力撐起微笑，笑容的張力比哭泣更令人心碎", en:"feeling wronged or hurt but forcing a smile because the situation demands it, the smile's tension more heartbreaking than tears" },
    { id:"em120", label:"一無所求的純淨平靜", zh:"不帶任何欲望或執念的純淨平靜，眼神清澈如洗，是修行者或孩子才有的純粹存在狀態", en:"pure peace without any desire or attachment, eyes clear as washed water, pure state of being only found in practitioners or children" }
  ],

  // ── 完整風格造型庫 OUTFIT_STYLE (250組完整造型) ──────────────────────────────
  OUTFIT_STYLE: [
    // ── Quiet Luxury / Old Money (20組) ────────────────────────────────────
    { id:"os1",  label:"Old Money海岸俱樂部",   zh:"象牙白細亞麻長褲搭配海軍藍雙排扣短版西裝外套，金色扣子，腳踩裸色楔型高跟，手提皮革手拿包", en:"ivory fine linen trousers, navy double-breasted cropped blazer, gold buttons, nude wedge heels, leather clutch" },
    { id:"os2",  label:"喀什米爾老錢日常",     zh:"駝色極細喀什米爾高領毛衣束進深米色高腰精裁長褲，棕色馬術靴，安靜奢華的頂點表達", en:"camel ultra-fine cashmere turtleneck tucked into deep beige high-waist tailored trousers, brown equestrian boots, quiet luxury peak" },
    { id:"os3",  label:"奶白格紋粗花呢套裝",   zh:"奶白色粗花呢無領短版外套搭配同布料高腰A字裙，珍珠項鍊，米色方頭高跟鞋，法式精品屋美學", en:"off-white boucle tweed collarless cropped jacket with matching high-waist A-line skirt, pearl necklace, beige square-toe heels, French couture aesthetic" },
    { id:"os4",  label:"米灰系極簡單色Look",   zh:"淺米灰色絲絨緊身高領搭配奶油色高腰闊腿精裁褲，手持迷你手拿包，全身同色系的無聲力量", en:"pale greige velvet fitted turtleneck with cream high-waist wide-leg tailored trousers, mini clutch, monochromatic silent power" },
    { id:"os5",  label:"倫敦精英格紋西裝套",   zh:"深藍黑色細格紋精紡羊毛西裝外套搭配同款直筒長褲，薄荷白色絲質細肩帶內搭，棕色Derby皮鞋", en:"deep navy-black fine-grid fine-wool blazer with matching straight trousers, mint white silk cami, brown Derby leather shoes" },
    { id:"os6",  label:"秋日馬術莊園裝",       zh:"深棕色皮革騎士馬靴，米白色燈芯絨寬腿褲，深酒紅色格紋圓領羊毛毛衣，棕色皮革腰帶", en:"deep brown leather equestrian boots, off-white corduroy wide-leg trousers, burgundy plaid crewneck wool sweater, brown leather belt" },
    { id:"os7",  label:"游艇派對白色套裝",     zh:"純白色精紡羊毛馬甲搭配同布料直筒短褲，金色配飾，裸膚色緊身背心打底，港口日正午的清爽貴族感", en:"pure white fine-wool vest with matching straight shorts, gold accessories, nude fitted cami base, harbor noon aristocratic freshness" },
    { id:"os8",  label:"奶油色修道院系Look",   zh:"奶油色長版亞麻罩衫搭配同色寬鬆長褲，棕色皮革涼鞋，素淡優雅的極簡修道院美學", en:"cream long linen overshirt with matching wide trousers, brown leather sandals, quietly elegant minimal monastic aesthetic" },
    { id:"os9",  label:"深海軍藍知識精英裝",   zh:"深海軍藍色精裁西裝外套搭配奶白色絲質上衣，深藍色直筒長褲，方頭黑色漆皮高跟，女律師式的力量感", en:"deep navy precisely-tailored blazer with off-white silk blouse, navy straight trousers, square-toe black patent heels, female lawyer power" },
    { id:"os10", label:"香草奶油全身漸層",     zh:"從淺至深的香草到焦糖奶油全身漸層造型，質感上衣搭配同色系長褲與外套，靜謐的內斂力量", en:"vanilla to caramel cream full-body gradient look, quality top with matching tonal trousers and jacket, quiet restrained power" },
    { id:"os11", label:"知性格紋馬甲套裝",     zh:"棕米色格紋馬甲搭配奶油白色長袖打底衫與棕色精裁長褲，深棕色Derby皮鞋，圖書館精英氣質", en:"brown-beige plaid vest over cream white long-sleeve base with brown tailored trousers, dark brown Derby shoes, library elite aura" },
    { id:"os12", label:"Hamptons夏日輕奢白",   zh:"全白亞麻直筒長褲搭配白色棉質寬鬆束腰長版衫，金色涼鞋，草編手提包，漢普頓夏日輕奢感", en:"all-white linen straight trousers with white cotton oversized belted long shirt, gold sandals, straw tote, Hamptons summer light luxury" },
    { id:"os13", label:"米色百搭極簡基礎款",   zh:"米色精紡羊毛圓領毛衣搭配深米色高腰窄裙，棕色細跟高跟鞋，極簡主義的永恆之美", en:"beige fine-wool crewneck sweater with deep beige high-waist pencil skirt, brown stiletto heels, minimalist eternal beauty" },
    { id:"os14", label:"秋冬輕奢棕色系",       zh:"焦糖棕色皮革短版外套搭配同色麂皮長裙，奶白色高領打底，棕色過膝靴，秋冬奢靡棕色系", en:"caramel brown leather cropped jacket with matching suede maxi skirt, off-white turtleneck base, brown OTK boots, autumn-winter opulent brown palette" },
    { id:"os15", label:"白色質感Off-Duty",     zh:"超大白色精裁棉質長版西裝外套搭配白色緊身長褲，金色細鏈，白色小皮鞋，Off-Duty的高端白色Look", en:"oversized white precisely-cut cotton long blazer with white fitted trousers, gold thin chain, white leather shoes, high-end off-duty white look" },
    { id:"os16", label:"深棕秋日森林系Look",   zh:"深棕色燈芯絨闊腿褲搭配深橄欖綠長版針織開衫，棕色厚底皮靴，手提棕色皮革托特包，知識分子秋日美學", en:"dark brown corduroy wide-leg trousers with deep olive long cardigan, brown chunky leather boots, brown leather tote, intellectual autumn aesthetic" },
    { id:"os17", label:"奶茶色修身連衣長裙",   zh:"奶茶棕色絲質垂墜感修身中長連衣裙，低調奢華的單品造型，搭配同色細跟高跟鞋一條到底", en:"milk-tea brown silk draping fitted midi dress, understated luxury single-piece look, matching nude stiletto heels head to toe" },
    { id:"os18", label:"灰色喀什米爾闊腿套裝", zh:"灰色超細喀什米爾v領毛衣搭配同色鬆弛闊腿長褲，裸色高跟穆勒，極致柔軟的安靜奢華套裝", en:"gray ultra-fine cashmere V-neck sweater with matching relaxed wide-leg trousers, nude heel mules, ultimate soft quiet luxury suit" },
    { id:"os19", label:"深藍印花絲質套裝",     zh:"深海軍藍絲質圖案印花鬆弛長版上衣搭配同布料寬鬆長褲套裝，渡假奢靡的輕鬆知性感", en:"deep navy silk pattern-print relaxed long top with matching wide trousers set, vacation opulence easy intellectual feel" },
    { id:"os20", label:"奶油色長版大衣造型",   zh:"奶油白色精紡羊毛長版大衣搭配同色緊身長褲與高領，棕色皮革手套，Quiet Luxury的終極冬日表達", en:"off-white fine-wool long coat with matching fitted trousers and turtleneck, brown leather gloves, quiet luxury ultimate winter expression" },
    // ── Coquette / Romantic (15組) ──────────────────────────────────────────
    { id:"os21", label:"嬰兒粉蝴蝶結全套Look", zh:"嬰兒粉色緞帶蝴蝶結短版上衣搭配粉白色細百褶緞面迷你裙，粉色蝴蝶結髮帶，白色瑪麗珍鞋，Coquette巔峰", en:"baby pink bow crop top with pink-white fine-pleat satin mini skirt, pink bow headband, white Mary Janes, coquette peak" },
    { id:"os22", label:"薰衣草紫色浪漫套裝",   zh:"薰衣草色泡泡袖棉質上衣搭配同色系細百褶迷你裙，紫色緞帶腰帶，白色刺繡船型鞋，田園浪漫氣質", en:"lavender puff-sleeve cotton top with matching pleated mini skirt, purple ribbon belt, white embroidered boat-shoe, pastoral romantic aesthetic" },
    { id:"os23", label:"玫瑰粉色蕾絲疊穿",     zh:"玫瑰粉色蕾絲細肩帶上衣疊穿白色蕾絲中長裙，珍珠飾品，粉色芭蕾平底鞋，法式浪漫少女感", en:"rose pink lace cami over white lace midi skirt, pearl accessories, pink ballet flats, French romantic girlish feel" },
    { id:"os24", label:"奶油白色緞帶甜美連衣", zh:"奶油白色棉質短版上衣附緞帶腰繫，搭配奶白色多層薄紗裙，頭戴珍珠髮夾，芭蕾公主感", en:"off-white cotton crop top with ribbon waist-tie, off-white multi-layer tulle skirt, pearl hair pins, ballet princess feel" },
    { id:"os25", label:"深粉色Coquette晚間Look",zh:"深粉色緞面細肩帶吊帶上衣搭配粉色絲絨迷你裙，粉色流蘇耳環，裸粉色細跟高跟鞋，夜晚Coquette女神", en:"deep pink satin cami with pink velvet mini skirt, pink tassel earrings, nude pink stilettos, evening coquette goddess" },
    { id:"os26", label:"白色浪漫農場女孩Look",  zh:"白色棉質smocked領口罩衫搭配白色棉紗多層長裙，草帽，棕色粗跟涼鞋，Cottagecore農場浪漫巔峰", en:"white cotton smocked blouse with white gauze multi-tier skirt, straw hat, brown block heel sandals, cottagecore farm romance peak" },
    { id:"os27", label:"淡藍色Dreamy飄逸Look", zh:"淡藍色薄紗燈籠袖飄逸上衣搭配白色亞麻長裙，藍色緞帶腰帶，白色平底鞋，仙氣少女夢境造型", en:"pale blue organza puff-sleeve flowy top with white linen maxi skirt, blue ribbon belt, white flats, ethereal girl dreamlike look" },
    { id:"os28", label:"奶白草莓甜心套裝",     zh:"白色附草莓刺繡圖案短版上衣搭配奶白色細百褶裙，草莓形狀配飾，粉色球鞋，甜蜜少女意象", en:"white strawberry embroidery crop top with off-white fine-pleat skirt, strawberry accessories, pink sneakers, sweet girl imagery" },
    { id:"os29", label:"紫羅蘭色少女仙子裝",   zh:"紫羅蘭色薄紗多層裙搭配深紫緊身細肩帶上衣，紫色晶鑽髮飾，銀色細跟高跟鞋，仙境少女感", en:"violet organza multi-layer skirt with deep purple fitted cami, purple crystal hair accessories, silver stilettos, wonderland girl feel" },
    { id:"os30", label:"奶白Regency風連衣裙",   zh:"奶白色棉質泡泡袖高腰Regencycore長洋裝，細緞帶腰帶於胸下繫結，珍珠耳環，白色繫帶平底涼鞋", en:"off-white cotton puff-sleeve empire-waist Regencycore maxi dress, thin ribbon tied below bust, pearl earrings, white lace-up flats" },
    { id:"os31", label:"嫩粉X白色蕾絲Mix",    zh:"嫩粉色棉質罩衫搭配白色蕾絲中長裙，粉白蕾絲邊裝飾頭箍，粉色厚底瑪麗珍鞋，清純浪漫混搭", en:"blush cotton blouse with white lace midi skirt, pink-white lace hairband, pink chunky Mary Janes, innocent romantic mix" },
    { id:"os32", label:"玫瑰金晚宴Coquette",   zh:"玫瑰金色亮片緊身上衣搭配玫瑰粉色緞面開叉中長裙，玫瑰金耳環，玫瑰金細跟高跟，晚宴Coquette女神", en:"rose gold sequin fitted top with rose pink satin slit midi skirt, rose gold earrings, rose gold stilettos, evening coquette goddess" },
    { id:"os33", label:"白X奶油色Dreamy全套",  zh:"白色蕾絲燈籠袖上衣搭配奶油色多層薄紗長裙，白色羽毛耳環，白色芭蕾舞鞋，夢境仙女全套造型", en:"white lace puff-sleeve top with cream multi-layer tulle maxi skirt, white feather earrings, white ballet shoes, dreamland fairy complete look" },
    { id:"os34", label:"淡桃色甜心Mini Look",  zh:"淡蜜桃粉色緊身細肩帶上衣搭配同色系緞面超短迷你裙，桃粉色蝴蝶結配飾，細跟高跟鞋，甜蜜巔峰造型", en:"peach fitted cami with matching satin micro mini skirt, peach bow accessories, stiletto heels, sweetness peak look" },
    { id:"os35", label:"丁香紫浪漫素描Look",   zh:"丁香紫色輕薄罩衫搭配同色亞麻寬鬆長褲，紫色草編包，白色涼鞋，清新浪漫的晴天詩意", en:"lilac sheer overshirt with matching linen wide trousers, purple straw bag, white sandals, fresh romantic sunny day poetry" },
    // ── Y2K / 2000s (15組) ──────────────────────────────────────────────────
    { id:"os36", label:"經典Y2K千禧組合",      zh:"銀色亮面tube top搭配低腰牛仔喇叭褲，腰部露出，水晶腰帶，銀色圓形太陽眼鏡，千禧年俱樂部最強Look", en:"silver metallic tube top with low-rise flare jeans, midriff exposed, crystal belt, silver round sunglasses, millennium club strongest look" },
    { id:"os37", label:"Y2K粉色全身Look",      zh:"熱粉色velour拉鍊短外套搭配同色velour低腰緊身短褲，水晶鑲嵌鬆緊腰帶，粉色運動厚底鞋", en:"hot pink velour zip track jacket with matching velour low-rise fitted shorts, crystal-studded elastic belt, pink chunky sneakers" },
    { id:"os38", label:"千禧年派對全套",       zh:"水晶鑲嵌PVC透明上衣搭配低腰銀藍亮片超短裙，大型圓環耳環，銀色厚底靴，Y2K夜晚派對女王", en:"crystal PVC sheer top with low-rise silver-blue sequin micro skirt, large hoop earrings, silver chunky boots, Y2K night party queen" },
    { id:"os39", label:"紫色Y2K未來感",        zh:"紫色金屬感低腰緊身短褲搭配紫色合身長袖V領，紫色水晶裝飾配件，銀色細跟高跟靴，Y2K未來紫色幻想", en:"purple metallic low-rise fitted shorts with purple V-neck fitted long-sleeve, purple crystal accessories, silver stiletto boots, Y2K future purple fantasy" },
    { id:"os40", label:"做舊迷彩Y2K套裝",      zh:"迷彩印花合身短版外套搭配同款低腰迷彩緊身短褲，腰部裸露，白色平底運動鞋，2000年代嘻哈街頭", en:"camo fitted crop jacket with matching low-rise camo fitted shorts, midriff showing, white athletic shoes, 2000s hip-hop street" },
    { id:"os41", label:"Y2K彩虹糖果色分層",    zh:"彩虹條紋針織短版背心搭配低腰粉藍細百褶迷你裙，彩虹髮夾，白色厚底運動鞋，糖果色千禧年視覺", en:"rainbow stripe knit crop vest with low-rise powder blue fine-pleat mini skirt, rainbow hair clips, white chunky sneakers, candy-color millennium visual" },
    { id:"os42", label:"銀色賽博Y2K Look",     zh:"銀色PVC短版夾克搭配銀色低腰超短裙，銀色緊身背心打底，銀色過膝靴，太空銀色Y2K幻想", en:"silver PVC crop jacket with silver low-rise micro skirt, silver fitted vest base, silver OTK boots, space silver Y2K fantasy" },
    { id:"os43", label:"Y2K糖果粉橘夏日",      zh:"橘色低腰緊身短版T搭配橘粉色低腰緊身迷你裙，橘色大圓環耳環，橘粉色厚底鞋，夏日多巴胺Y2K", en:"orange low-rise fitted crop tee with orange-pink low-rise mini skirt, orange large hoop earrings, orange-pink platform shoes, summer dopamine Y2K" },
    { id:"os44", label:"千禧年黑色性感套",     zh:"黑色蕾絲細肩帶上衣搭配黑色低腰皮革迷你裙，黑色漁網絲襪，黑色細跟過膝靴，千禧年黑色性感符號", en:"black lace cami with black low-rise leather mini skirt, black fishnet tights, black OTK stiletto boots, millennium black sensuality symbol" },
    { id:"os45", label:"Y2K運動名媛套裝",      zh:"淡藍色或粉色velour運動套裝（夾克+短褲），金色LOGO印字，白色SNEAKER，Juicy Couture名媛度假感", en:"powder blue or pink velour tracksuit jacket+shorts, gold logo lettering, white sneakers, Juicy Couture socialite vacation feel" },
    { id:"os46", label:"千禧年格紋組合",       zh:"粉紅色格紋緊身合身短版外套搭配同款超短迷你裙，粉紅色細跟踝靴，Cher Horowitz式的千禧學院時尚", en:"pink plaid fitted crop jacket with matching ultra mini skirt, pink ankle booties, Cher Horowitz-style millennium prep fashion" },
    { id:"os47", label:"千禧年水藍色組合",     zh:"水藍色緊身長袖上衣搭配水藍色低腰亮片超短裙，水晶腰帶，藍色大圓環耳環，銀色厚底鞋，千禧水藍夢幻", en:"aqua fitted long-sleeve with aqua low-rise sequin micro skirt, crystal belt, blue large hoops, silver platforms, millennium aqua dream" },
    { id:"os48", label:"橘紅色Y2K派對全套",    zh:"橘紅色蕾絲內衣式上衣搭配低腰橘色亮片迷你裙，橘色羽毛耳環，橘色細跟高跟鞋，Y2K派對的最亮點", en:"orange-red lingerie-style top with low-rise orange sequin mini skirt, orange feather earrings, orange stilettos, Y2K party brightest focal point" },
    { id:"os49", label:"Y2K銀色Cyber Look",   zh:"銀色全息PVC透明短版夾克搭配銀色超短裙，銀色緊身打底衫，銀色厚底靴，千禧年賽博幻想巔峰", en:"silver holographic PVC crop jacket with silver micro skirt, silver fitted base, silver platforms, millennium cyber fantasy peak" },
    { id:"os50", label:"粉藍白Y2K夏日甜心",   zh:"白色細肩帶上衣疊穿粉藍色透明網眼罩衫，搭配粉藍色低腰超短裙，白色厚底鞋，夏日千禧甜心", en:"white cami under powder blue sheer mesh overshirt, powder blue low-rise micro skirt, white platform shoes, summer millennium sweetheart" },
    // ── Streetwear / Hype (15組) ─────────────────────────────────────────────
    { id:"os51", label:"黑色街頭核心Look",     zh:"超大黑色印花帽T搭配黑色緊身自行車短褲，白色厚底球鞋，黑色棒球帽，街頭核心的終極黑色造型", en:"oversized black graphic hoodie with black cycle shorts, white chunky sneakers, black cap, ultimate black streetwear core look" },
    { id:"os52", label:"白色Oversized街頭造型",zh:"白色重磅Oversize衛衣搭配黑色寬鬆機能長褲，白色Air Force 1，黑色腰包，Clean街頭美學", en:"white heavyweight oversized sweatshirt with black relaxed cargo trousers, white Air Force 1, black waist bag, clean streetwear aesthetic" },
    { id:"os53", label:"彩色Colorblock街頭",  zh:"鮮豔幾何拼色短版Puffer外套搭配黑色緊身運動褲，白色球鞋，彩色小包，多巴胺街頭造型", en:"bright geometric colorblock cropped puffer jacket with black athletic leggings, white sneakers, colorful mini bag, dopamine street look" },
    { id:"os54", label:"迷彩機能都市Look",     zh:"軍綠迷彩印花機能外套搭配黑色工裝多口袋長褲，黑色厚底靴，機能腰包，城市叢林探索者", en:"army green camo technical jacket with black cargo multi-pocket trousers, black chunky boots, tactical waist bag, urban jungle explorer" },
    { id:"os55", label:"韓國街頭Unisex造型",  zh:"超大格紋法蘭絨束腰搭配黑色寬鬆工裝短褲，黑色長筒白色邊NIKE高筒球鞋，首爾街頭中性美", en:"oversized plaid flannel belted with black wide cargo shorts, black high-top Nike with white accents, Seoul street androgynous beauty" },
    { id:"os56", label:"白色極簡街頭Look",     zh:"白色oversize圓領衛衣搭配白色寬鬆機能短褲，白色球鞋，白色帽子，全白的Clean Streetwear巔峰", en:"white oversized crewneck sweatshirt with white relaxed shorts, white sneakers, white cap, all-white clean streetwear peak" },
    { id:"os57", label:"深黑機能戰術造型",     zh:"黑色機能戰術長版外套搭配黑色束腳工裝褲，黑色厚底軍靴，多個腰包配件，暗黑都市戰士", en:"black technical tactical long jacket with black cinched cargo trousers, black chunky boots, multiple waist bags, dark urban warrior" },
    { id:"os58", label:"橙色運動街頭Look",     zh:"橙色超大印花運動衫搭配黑色緊身運動褲，黑橙配色球鞋，橙色棒球帽，視覺衝擊力爆棚的街頭造型", en:"orange oversized graphic sportswear with black athletic leggings, black-orange sneakers, orange baseball cap, visually explosive street look" },
    { id:"os59", label:"格紋嘻哈美式街頭",    zh:"黑白格子花呢短版外套搭配寬鬆黑色工裝長褲，白色球鞋，金色鏈條項鍊，紐約嘻哈街頭的優雅版", en:"black-white houndstooth crop jacket with relaxed black cargo trousers, white sneakers, gold chain necklace, NYC hip-hop street elegant edition" },
    { id:"os60", label:"藍白Varsity學院街頭", zh:"藍白色Varsity夾克搭配白色緊身運動短褲，藍白色高筒球鞋，白色棒球帽，美式學院街頭的清爽組合", en:"blue-white varsity jacket with white fitted athletic shorts, blue-white high-top sneakers, white cap, American preppy street fresh combo" },
    { id:"os61", label:"賽博朋克紫色街頭",    zh:"深紫色機能夾克搭配黑色束腳機能褲，紫色高跟厚底靴，紫色霓虹細節飾品，賽博朋克女孩的都市存在", en:"deep purple technical jacket with black cinched trousers, purple chunky-heel boots, purple neon accent accessories, cyberpunk girl urban presence" },
    { id:"os62", label:"灰色系街頭Tonal Look", zh:"淺灰超大帽T搭配深灰鬆弛工裝寬褲，灰色系厚底球鞋，灰色小包，全灰色同色系的街頭高級感", en:"light gray oversized hoodie with dark gray relaxed cargo wide trousers, gray chunky sneakers, gray bag, all-gray tonal street elevated feel" },
    { id:"os63", label:"粉色Hypebae街頭裝",   zh:"粉色限量聯名帽T搭配粉白色運動短褲，粉色限定球鞋，粉色棒球帽，女性Hype圈的甜美街頭表達", en:"pink limited-edition collab hoodie with pink-white athletic shorts, pink exclusive sneakers, pink cap, female hype culture sweet street expression" },
    { id:"os64", label:"大地色工裝街頭Look",  zh:"橄欖綠工裝外套搭配大地棕工裝寬褲，棕色厚底工裝靴，卡其色腰包，都市探索者的實用美學", en:"olive cargo jacket with earth brown cargo wide trousers, brown platform work boots, khaki waist bag, urban explorer utilitarian aesthetic" },
    { id:"os65", label:"黑白棋盤格街頭Mix",   zh:"黑白棋盤格緊身合身長袖搭配黑色寬鬆工裝短褲，白色厚底VANS，棋盤配件，視覺衝擊的都市街頭", en:"black-white checkerboard fitted long-sleeve with black wide shorts, white platform Vans, checkered accessories, visually striking urban street" },
    // ── Dark Academia / Gothic (15組) ─────────────────────────────────────────
    { id:"os66", label:"哥德學院圖書館Look",   zh:"深棕色格紋馬甲搭配奶白色蕾絲高領長袖，棕色燈芯絨寬腿褲，深棕色厚底皮靴，Dark Academia巔峰", en:"dark brown plaid vest over off-white lace high-neck long-sleeve, brown corduroy wide-leg trousers, dark brown chunky boots, dark academia peak" },
    { id:"os67", label:"維多利亞哥德連衣裙",   zh:"深黑色多層蕾絲邊維多利亞式高領長袖連衣裙，黑色皮革過膝靴，黑色十字架項鍊，哥德式女王造型", en:"deep black multi-layer Victorian high-neck long-sleeve dress, black leather OTK boots, black cross necklace, gothic queen look" },
    { id:"os68", label:"深紅哥德夜晚造型",    zh:"深酒紅色天鵝絨緊身上衣搭配黑色多層蕾絲長裙，黑色皮草滾邊長外套，黑色細跟高跟鞋，哥德晚宴女王", en:"deep burgundy velvet fitted top with black multi-layer lace maxi skirt, black fur-trim long coat, black stilettos, gothic dinner queen" },
    { id:"os69", label:"暗黑學院格紋套裝",    zh:"黑色格紋精裁西裝外套搭配同款西裝長褲，奶白色精裁衫打底，深棕色Derby皮鞋，詩人一般的智識優雅", en:"black plaid tailored blazer with matching suit trousers, off-white tailored base, dark brown Derby shoes, poet-like intellectual elegance" },
    { id:"os70", label:"橄欖綠蕾絲黑色組合",  zh:"橄欖綠棉質圓領毛衣搭配黑色蕾絲疊裙與黑色皮革皮帶，黑色精緻皮靴，Whimsigoth的自然系融合", en:"olive crewneck sweater with black lace layered skirt and black leather belt, black fine leather boots, whimsigoth nature-fusion" },
    { id:"os71", label:"黑色全套哥德極簡",    zh:"黑色緊身高領長袖搭配黑色寬腿精裁長褲，黑色皮革厚底切爾西靴，黑色細鏈項鍊，純黑哥德極簡主義", en:"black fitted turtleneck with black wide-leg tailored trousers, black leather Chelsea boots, black thin chain necklace, pure black gothic minimalism" },
    { id:"os72", label:"深森林綠色文學造型",  zh:"深森林綠色燈芯絨長袖上衣搭配棕色格紋精裁長褲，深棕色馬術靴，金框圓眼鏡，文學教授的秋日美感", en:"deep forest green corduroy long-sleeve with brown plaid tailored trousers, dark brown equestrian boots, gold-frame round glasses, literary professor autumn beauty" },
    { id:"os73", label:"哥德式婚紗風格",      zh:"黑色多層薄紗長裙搭配黑色蕾絲緊身上衣，黑色皮草短版外套，黑色羽毛髮飾，深夜婚禮式的儀式美感", en:"black multi-layer tulle maxi skirt with black lace fitted top, black faux fur cropped jacket, black feather hair accessories, midnight wedding ceremonial beauty" },
    { id:"os74", label:"深藍色知識分子套裝",  zh:"深靛藍色格紋馬甲搭配深藍燈芯絨長袖與深藍色精裁長褲，棕色皮帶與Derby皮鞋，知識精英的完整一套", en:"deep indigo plaid vest over dark blue corduroy long-sleeve and dark blue tailored trousers, brown belt and Derby shoes, intellectual elite complete set" },
    { id:"os75", label:"暗紅色哥德浪漫",      zh:"暗酒紅色長版天鵝絨外套搭配黑色多層蕾絲裙，黑色高跟細跟踝靴，血紅色唇彩，哥德浪漫主義的敘事詩", en:"dark burgundy long velvet coat over black multi-tier lace skirt, black stiletto ankle boots, blood-red lips, gothic romanticism narrative poem" },
    { id:"os76", label:"灰棕色秋日知識分子",  zh:"灰棕色細格紋外套搭配同色系燈芯絨窄裙，奶白色蕾絲衫打底，深棕色粗跟踝靴，秋日圖書館女神", en:"gray-brown fine plaid jacket with matching corduroy pencil skirt, off-white lace shirt base, dark brown block-heel ankle boots, autumn library goddess" },
    { id:"os77", label:"黑色絲絨哥德優雅",    zh:"黑色天鵝絨細肩帶長裙搭配黑色薄紗多層罩裙，黑色皮草長版外套，黑色水晶項鍊，哥德優雅的絕對代言", en:"black velvet cami maxi dress with black organza multi-layer overlay, black faux fur long coat, black crystal necklace, absolute gothic elegance representative" },
    { id:"os78", label:"棕色系秋日學院完整Look",zh:"焦糖棕色格紋馬甲搭配奶白色長袖底衫與棕色燈芯絨長褲，棕色厚底皮靴，圓框金屬眼鏡，秋日學院美學全套", en:"caramel brown plaid vest over off-white long-sleeve and brown corduroy trousers, brown chunky boots, round metal glasses, autumn academic complete aesthetic" },
    { id:"os79", label:"黑白哥德摩登Look",    zh:"黑白直條紋長袖上衣搭配黑色皮革迷你裙，黑色緊身褲，黑色厚底皮靴，簡約的哥德摩登表達", en:"black-white stripe long-sleeve with black leather mini skirt, black tights, black chunky boots, simple gothic modern expression" },
    { id:"os80", label:"深綠絨面大衣造型",    zh:"深瓶綠色長版天鵝絨大衣搭配黑色緊身長褲與黑色精緻皮靴，黑色精緻皮革手提包，黑暗童話的成人版", en:"deep bottle green long velvet coat with black fitted trousers and black leather boots, black fine leather bag, dark fairy tale adult version" },
    // ── Barbiecore / Dopamine Dressing (10組) ───────────────────────────────
    { id:"os81", label:"全粉色Barbie套裝",     zh:"熱粉色短版緊身外套搭配同色超短迷你裙，粉色細跟高跟鞋，粉色包包，芭比夢想屋的視覺實現", en:"hot pink fitted crop blazer with matching ultra mini skirt, pink stilettos, pink bag, Barbie Dreamhouse vision made real" },
    { id:"os82", label:"亮黃色多巴胺Look",    zh:"螢光黃色off-shoulder緊身上衣搭配黃色超短迷你裙，白色厚底鞋，黃色髮飾，視覺多巴胺的最高點", en:"neon yellow off-shoulder fitted top with yellow ultra mini skirt, white platforms, yellow hair accessories, visual dopamine peak" },
    { id:"os83", label:"橘粉色夏日甜品Look",  zh:"橘粉色荷葉邊短版上衣搭配橘色高腰迷你百褶裙，白色芭蕾平底鞋，橘粉配件，夏日甜品色系的視覺饗宴", en:"orange-pink ruffle crop with orange high-waist pleated mini skirt, white ballet flats, orange-pink accessories, summer dessert palette visual feast" },
    { id:"os84", label:"電藍色未來主義Look",  zh:"電光藍色金屬感短版外套搭配電藍色超短裙，銀色厚底靴，藍色太陽眼鏡，未來主義電藍視覺衝擊", en:"electric blue metallic crop jacket with electric blue micro skirt, silver platforms, blue sunglasses, futuristic electric blue visual impact" },
    { id:"os85", label:"糖果紫色全套Look",    zh:"薰衣草色緊身上衣搭配深紫色迷你裙，紫色配件，白色厚底鞋，糖果色糖漿般的紫色飽和視覺", en:"lavender fitted top with deep purple mini skirt, purple accessories, white platforms, candy-color syrupy purple saturated visual" },
    { id:"os86", label:"玫紅X橙色撞色造型",   zh:"玫紅色緊身短版上衣搭配橙色高腰迷你裙，玫紅色細跟高跟鞋，撞色視覺張力的多巴胺最強表達", en:"fuchsia fitted crop with orange high-waist mini skirt, fuchsia stilettos, contrasting visual tension strongest dopamine expression" },
    { id:"os87", label:"草綠色清新春日Look",  zh:"草綠色輕薄短版上衣搭配草綠色高腰短裙，白色球鞋，春日自然系色彩的清新愉悅感", en:"grass green light crop with grass green high-waist mini skirt, white sneakers, spring natural palette fresh joyful feel" },
    { id:"os88", label:"亮珊瑚粉夏日Look",   zh:"亮珊瑚粉色無袖緊身上衣搭配同色系輕薄短裙，白色涼鞋，珊瑚色耳環，地中海夏日的活力衝擊", en:"bright coral sleeveless fitted top with matching light mini skirt, white sandals, coral earrings, Mediterranean summer vitality impact" },
    { id:"os89", label:"薄荷綠Dreamy Look",   zh:"薄荷綠色短版燈籠袖上衣搭配薄荷色細百褶中長裙，白色平底鞋，薄荷綠色耳環，清爽夢幻春日感", en:"mint green puff-sleeve crop with mint fine-pleat midi skirt, white flats, mint earrings, refreshing dreamlike spring feel" },
    { id:"os90", label:"全白Bridal能量Look",  zh:"純白色各式單品組合的全白造型，從白色緊身衫到白色百褶裙，白色厚底鞋，純白的力量與純粹感", en:"pure white all-white ensemble from white fitted top to white pleated skirt, white platforms, power of pure white" },
    // ── Techwear / Futurist (10組) ─────────────────────────────────────────
    { id:"os91", label:"全黑機能戰術套裝",    zh:"黑色科技布料短版機能夾克搭配黑色束腳工裝褲，黑色厚底戰術靴，多個黑色腰包，都市女戰士的完整裝備", en:"black technical crop jacket with black cinched cargo trousers, black chunky tactical boots, multiple black waist bags, urban female warrior complete gear" },
    { id:"os92", label:"銀色賽博未來Look",    zh:"銀色反光材質短版機能外套搭配銀色緊身褲，銀色厚底靴，銀灰護目鏡，賽博龐克未來主義的完整視覺表達", en:"silver reflective technical crop jacket with silver fitted trousers, silver platforms, gray visor goggles, cyberpunk futurism complete visual expression" },
    { id:"os93", label:"橄欖綠機能分層Look",  zh:"橄欖綠多口袋機能外套搭配黑色緊身運動褲與橄欖綠束腳機能褲疊穿，黑色厚底靴，機能分層大師", en:"olive multi-pocket technical jacket, black athletic leggings under olive cinched cargo trousers layered, black chunky boots, technical layering master" },
    { id:"os94", label:"白色未來主義科技Look", zh:"全白色科技布料短版夾克搭配白色高腰緊身彈性褲，白色厚底球鞋，白色護目鏡配件，無菌未來主義美學", en:"all-white technical crop jacket with white high-waist stretch fitted trousers, white chunky sneakers, white visor accessory, sterile futurism aesthetic" },
    { id:"os95", label:"深紫色機能都市Look",  zh:"深紫色科技布料夾克搭配黑色束腳機能褲，紫色高跟厚底靴，紫色霓虹配件，賽博朋克的紫色電子夢", en:"deep purple technical jacket with black cinched trousers, purple chunky-heel boots, purple neon accessories, cyberpunk purple electronic dream" },
    // ── Balletcore / Athletica (10組) ────────────────────────────────────────
    { id:"os96", label:"芭蕾少女完整套裝",    zh:"粉白色交叉綁帶芭蕾短版上衣搭配粉色細百褶紗裙，粉色緞帶芭蕾鞋，粉色蝴蝶結髮帶，芭蕾美學的視覺極致", en:"pink-white cross-lace ballet crop top with pink fine-pleat tulle skirt, pink ribbon ballet shoes, pink bow headband, ballet aesthetic visual pinnacle" },
    { id:"os97", label:"黑色芭蕾優雅Look",   zh:"黑色芭蕾短版合身上衣搭配黑色細百褶迷你裙，黑色緞帶芭蕾平底鞋，黑色珍珠飾品，暗色芭蕾的優雅磁力", en:"black ballet crop fitted top with black fine-pleat mini skirt, black ribbon ballet flats, black pearl accessories, dark ballet elegant magnetism" },
    { id:"os98", label:"白色Sport Luxe完整Look",zh:"白色高支撐運動bralette搭配白色高腰瑜珈緊身褲，白色運動外套，白色球鞋，運動奢華的完整表達", en:"white high-support sports bralette with white high-waist yoga leggings, white athletic jacket, white sneakers, sport luxe complete expression" },
    { id:"os99", label:"粉色網球俱樂部Look",  zh:"粉色網球百褶短裙搭配白色緊身運動上衣，粉白色網球鞋，粉色汗帶，網球俱樂部的甜蜜運動美感", en:"pink tennis pleated skirt with white fitted athletic top, pink-white tennis shoes, pink sweatband, tennis club sweet sporty beauty" },
    { id:"os100",label:"黑色Power Gym Look",  zh:"黑色緊身運動bralette搭配黑色高腰緊身運動長褲，黑色運動外套，黑色球鞋，Power Gym的黑色力量美學", en:"black sports bralette with black high-waist athletic leggings, black athletic jacket, black sneakers, power gym black strength aesthetic" },
    // ── Korean Fashion / OOTD (15組) ─────────────────────────────────────────
    { id:"os101",label:"首爾咖啡廳日常Look",  zh:"奶茶色寬鬆針織polo搭配深棕色皮革中長裙，棕色皮革厚底樂福鞋，棕色迷你包，首爾日常清新質感", en:"milk-tea oversized knit polo with dark brown leather midi skirt, brown leather chunky loafers, brown mini bag, Seoul daily fresh quality" },
    { id:"os102",label:"韓系層次穿搭組合",   zh:"白色細肩帶疊穿米白色針織開衫，搭配高腰牛仔直筒褲，白色迷你鞋，銀色飾品，首爾街頭的層次感", en:"white cami under beige knit cardigan, high-waist straight jeans, white shoes, silver accessories, Seoul street layered feel" },
    { id:"os103",label:"黑白極簡韓系Look",   zh:"黑色緊身細肩帶疊穿白色oversized長版衫，搭配黑色寬鬆長褲，白色球鞋，黑色小包，首爾極簡黑白對比", en:"black fitted cami under white oversized long shirt, black relaxed trousers, white sneakers, black small bag, Seoul minimal black-white contrast" },
    { id:"os104",label:"棕色系韓風全套Look",  zh:"焦糖棕色長版針織開衫搭配白色細肩帶打底與棕色格紋直筒褲，棕色皮靴，首爾秋日暖色系", en:"caramel long knit cardigan with white cami base and brown plaid straight trousers, brown boots, Seoul autumn warm palette" },
    { id:"os105",label:"韓系女孩清新夏日",   zh:"白色細肩帶棉質短版上衣搭配淡藍色高腰直筒牛仔褲，白色球鞋，白色大型帆布包，首爾夏日清爽少女感", en:"white cotton cami crop with light blue high-waist straight jeans, white sneakers, white canvas tote, Seoul summer fresh girl feel" },
    { id:"os106",label:"韓系OL職場粉彩Look",  zh:"粉藍色蓬袖上衣搭配米白色高腰A字中長裙，裸粉色高跟鞋，粉色迷你包，韓系OL的甜美職場美學", en:"powder blue puff-sleeve blouse with off-white A-line midi skirt, nude pink heels, pink mini bag, Korean OL sweet professional aesthetic" },
    { id:"os107",label:"首爾男孩風中性Look",  zh:"超大白色T恤搭配寬鬆深藍牛仔褲，白色老爹鞋，黑色小包，首爾中性街頭的俐落感", en:"oversized white tee with relaxed dark blue jeans, white dad shoes, black small bag, Seoul androgynous street clean feel" },
    { id:"os108",label:"韓風棉麻悠閒日常",   zh:"米色棉麻罩衫搭配奶白色棉麻寬鬆長褲，棕色涼鞋，草編帽，首爾慵懶週末日常的從容美感", en:"beige cotton-linen overshirt with off-white wide trousers, brown sandals, straw hat, Seoul lazy weekend leisurely beauty" },
    { id:"os109",label:"韓系深秋層次組合",   zh:"棕色細格紋毛呢外套搭配黑色毛衣打底與棕色皮革長裙，黑色過膝靴，秋日首爾的棕黑層次美感", en:"brown fine plaid wool jacket over black sweater with brown leather midi skirt, black OTK boots, autumn Seoul brown-black layered beauty" },
    { id:"os110",label:"首爾Clean Girl完整",  zh:"奶白色緊身無袖背心搭配奶白色高腰精裁長褲，白色平底樂福鞋，金色細飾品，首爾清潔女孩美學的完整詮釋", en:"off-white fitted sleeveless vest with off-white tailored trousers, white flat loafers, gold thin accessories, Seoul clean girl complete interpretation" },
    { id:"os111",label:"韓系甜美碎花日常",   zh:"白色碎花印花泡泡袖上衣搭配白色細百褶迷你裙，白色芭蕾平底鞋，首爾甜美女孩的花朵日常", en:"white ditsy floral puff-sleeve top with white fine-pleat mini skirt, white ballet flats, Seoul sweet girl floral daily" },
    { id:"os112",label:"首爾秋日格紋學院",   zh:"棕米色格紋短版外套搭配奶白色長袖打底與棕色燈芯絨直筒裙，棕色厚底樂福鞋，首爾知性秋日", en:"brown-beige plaid crop jacket over off-white long-sleeve with brown corduroy straight skirt, brown chunky loafers, Seoul intellectual autumn" },
    { id:"os113",label:"韓系莫蘭迪色系",     zh:"莫蘭迪灰藍色針織罩衫搭配淡灰藍色高腰長褲，灰白色慢跑鞋，莫蘭迪色系的朦朧詩意日常", en:"Morandi gray-blue knit overshirt with pale gray-blue high-waist trousers, gray-white runners, Morandi palette hazy poetic daily" },
    { id:"os114",label:"白色首爾街頭公式",   zh:"白色oversize上衣搭配白色寬鬆短褲，白色球鞋，銀色配件，首爾全白街頭的清爽公式", en:"white oversized top with white relaxed shorts, white sneakers, silver accessories, Seoul all-white street fresh formula" },
    { id:"os115",label:"韓系冬日大衣全Look", zh:"奶白色精紡羊毛長版大衣搭配黑色緊身褲與黑色精緻皮靴，金色鏈條手袋，首爾冬日奢華日常", en:"off-white fine-wool long coat with black fitted trousers and black fine boots, gold chain bag, Seoul winter luxurious daily" },
    // ── Summer / Resort (10組) ──────────────────────────────────────────────
    { id:"os116",label:"地中海白色度假Look", zh:"純白色棉質寬鬆長袖罩衫搭配白色棉紗超長裙，金色涼鞋，金色配件，地中海白色度假的空靈美感", en:"pure white cotton loose long overshirt with white gauze maxi skirt, gold sandals, gold accessories, Mediterranean white vacation ethereal beauty" },
    { id:"os117",label:"熱帶印花渡假Look",  zh:"熱帶大葉片印花飄逸罩衫搭配同款熱帶印花超短裙，咖啡棕色平底涼鞋，大型草編帽，熱帶渡假女神感", en:"tropical large-leaf print flowy overshirt with matching tropical print micro skirt, coffee flat sandals, oversized straw hat, tropical vacation goddess feel" },
    { id:"os118",label:"Boho海灘音樂節",    zh:"白色棉紗罩衫搭配大地色多層流蘇波西米亞長裙，棕色涼鞋，多層項鍊，波西米亞音樂節的自由靈魂", en:"white gauze coverup with earth-tone tiered fringe bohemian maxi skirt, brown sandals, layered necklaces, boho festival free spirit" },
    { id:"os119",label:"蔚藍法式條紋海灘",  zh:"蔚藍白Breton條紋水手上衣搭配白色亞麻高腰迷你裙，白色帆布鞋，藍白色草編帽，法式海岸永恆美感", en:"cobalt Breton stripe mariniere with white linen high-waist mini skirt, white canvas shoes, blue-white straw hat, French coastal timeless beauty" },
    { id:"os120",label:"粉橘色夏日水果Look",zh:"蜜桃橙色細肩帶短版上衣搭配粉橙色超短裙，白色涼鞋，橙色飾品，如夏日水果糖的甜蜜色彩", en:"peach orange cami crop with pink-orange micro skirt, white sandals, orange accessories, summer fruit candy sweet color" },
    // ── Vintage / Retro (10組) ──────────────────────────────────────────────
    { id:"os121",label:"70年代迪斯可女王",   zh:"深棕色大翻領收腰長袖外套搭配同色系超闊腿喇叭褲，金色厚底高跟，金色飾品，70年代Disco巔峰", en:"dark brown large-lapel waist-cinching jacket with matching super-wide flare trousers, gold platform heels, gold accessories, 70s disco pinnacle" },
    { id:"os122",label:"60年代Mod風格Look",  zh:"白色與黑色幾何印花短版無袖連衣裙，白色過膝靴，黑色圓型眼鏡，黑色頭箍，60年代Mod的完整再現", en:"white-black geometric print sleeveless mini dress, white OTK boots, black round glasses, black headband, 60s Mod complete revival" },
    { id:"os123",label:"50年代Rockabilly",  zh:"紅白波點短版上衣搭配紅色高腰大圓裙，紅色細跟高跟鞋，紅色蝴蝶結髮飾，50年代Rockabilly的活潑復古", en:"red-white polka dot crop with red high-waist circle skirt, red stilettos, red bow hair accessory, 50s rockabilly cheerful retro" },
    { id:"os124",label:"90年代超模日常Look", zh:"白色細肩帶疊穿寬鬆格紋法蘭絨外搭，搭配高腰淺藍色直筒牛仔褲，白色厚底運動鞋，90年代超模日常複刻", en:"white cami under oversized plaid flannel, high-waist light blue straight jeans, white platform sneakers, 90s supermodel daily revival" },
    { id:"os125",label:"80年代霓虹電力Look", zh:"螢光橙色超大肩墊短版外套搭配黑色緊身長褲，螢光橙色高跟鞋，金色大型飾品，80年代霓虹電力美學", en:"neon orange oversized shoulder cropped jacket with black skinny trousers, neon orange heels, gold oversized accessories, 80s neon power aesthetic" },
    // ── Coastal Grandmother (5組) ─────────────────────────────────────────
    { id:"os126",label:"海岸祖母週末午後",   zh:"奶白色棉紗寬鬆上衣搭配同色亞麻A字長裙，棕色涼鞋，草帽，大型帆布包，海岸放鬆午後", en:"off-white gauze loose top with matching linen A-line maxi skirt, brown sandals, straw hat, canvas tote, coastal relaxed afternoon" },
    { id:"os127",label:"藍白條紋亞麻優雅Look",zh:"藍白條紋亞麻寬鬆長版上衣搭配白色亞麻寬腿褲，棕色帆布鞋，草帽，老齡鑑賞家的海岸美感", en:"blue-white stripe linen long top with white linen wide trousers, brown canvas shoes, straw hat, connoisseur coastal beauty" },
    { id:"os128",label:"海岸祖母夏日白色Look",zh:"白色亞麻relaxed短版上衣搭配白色棉紗中長裙，棕色厚底涼鞋，大型金色耳環，海岸夏日從容的優雅", en:"white linen relaxed top with white gauze midi skirt, brown chunky sandals, oversized gold earrings, coastal summer effortless elegance" },
    // ── Grunge / Alternative (7組) ────────────────────────────────────────
    { id:"os129",label:"90s Grunge完整Look", zh:"格紋法蘭絨外搭緊身黑色細肩帶，搭配高腰做舊迷你牛仔裙，黑色漁網絲襪，黑色厚底馬丁靴，90年代Grunge", en:"plaid flannel over fitted black cami, high-waist distressed denim mini, black fishnet tights, black platform Docs, 90s grunge" },
    { id:"os130",label:"都市朋克完整套裝",   zh:"黑色皮革摩托車夾克搭配黑色Ripped緊身長褲，黑色網眼上衣，黑色厚底馬丁靴，金屬鍊飾品，都市朋克的完整武裝", en:"black leather moto jacket with black ripped fitted trousers, black mesh top, black platform Docs, chain accessories, urban punk complete armor" },
    { id:"os131",label:"Indie藝術系全套Look", zh:"做舊灰色樂隊印花超大T恤搭配黑色高腰直筒褲，白色厚底球鞋，黑色圓框眼鏡，indie藝術系低調美學", en:"worn-washed gray band graphic oversized tee with black high-waist straight trousers, white platform sneakers, black round glasses, indie art student low-key aesthetic" },
    { id:"os132",label:"深黑色全套Goth Look", zh:"黑色蕾絲長袖上衣搭配黑色皮革迷你裙，黑色漁網絲襪，黑色細跟過膝靴，黑色十字架配件，哥德風格的完整黑暗", en:"black lace long-sleeve with black leather mini, black fishnet tights, black OTK stiletto boots, cross accessories, gothic complete darkness" },
    { id:"os133",label:"紅黑格紋朋克學院",   zh:"紅黑格紋短版外套搭配黑色網眼上衣與黑色超短迷你裙，黑色厚底馬丁靴，Punk Prep的矛盾衝撞美學", en:"red-black plaid crop jacket with black mesh top and black micro mini, black platform Docs, punk prep contradiction collision aesthetic" },
    { id:"os134",label:"灰色做舊頹廢美學",   zh:"做舊灰色oversize衛衣搭配黑色緊身自行車短褲，黑色厚底切爾西靴，金屬環項鍊，頹廢美學的慵懶力量", en:"distressed gray oversized sweatshirt with black cycle shorts, black chunky Chelsea boots, ring-chain necklace, decadent aesthetic lazy power" },
    { id:"os135",label:"黑色格子朋克完整",   zh:"黑白格子連身裙外搭黑色皮革夾克，黑色漁網絲襪，黑色厚底馬丁靴，黑色皮革手環飾品，標準朋克完整組合", en:"black plaid dress with black leather jacket, black fishnet tights, black platform Docs, leather cuff accessories, standard punk complete combo" },
    // ── Workwear / Professional Power (8組) ──────────────────────────────
    { id:"os136",label:"女律師黑色Power套裝", zh:"黑色精裁緊身西裝外套搭配同款直筒長褲，白色絲質上衣，黑色方頭高跟鞋，黑色皮革公事包，法庭女王造型", en:"black precisely-cut fitted blazer with matching straight trousers, white silk blouse, black square-toe heels, leather briefcase, courtroom queen look" },
    { id:"os137",label:"深藍色知識精英套裝",  zh:"深海軍藍色細格紋西裝套裝，薄荷白絲質細肩帶打底，棕色牛津皮鞋，精英女性的精準力量裝扮", en:"deep navy fine-grid suit set, mint white silk cami base, brown Oxford shoes, elite female precise power dressing" },
    { id:"os138",label:"白色女性Power造型",   zh:"白色精裁寬肩西裝外套搭配白色高腰精裁長褲，裸膚色細跟高跟鞋，白色皮革手拿包，女性力量的純白宣言", en:"white structured padded-shoulder blazer with white tailored trousers, nude stilettos, white leather clutch, female power pure white declaration" },
    { id:"os139",label:"棕色複合材質套裝",    zh:"棕色皮革拼接精紡羊毛套裝外套搭配同色長褲，白色緊身上衣，棕色皮革踝靴，都市現代女性的混材套裝", en:"brown leather-spliced fine-wool jacket with matching trousers, white fitted top, brown ankle boots, urban modern woman mixed-material suit" },
    { id:"os140",label:"灰色系專業極簡Look",  zh:"中灰色精裁西裝外套搭配淺灰色高腰長褲，白色絲質上衣，灰色踝靴，職場極簡主義的精確表達", en:"medium gray tailored blazer with pale gray high-waist trousers, white silk top, gray ankle boots, professional minimalism precise expression" },
    { id:"os141",label:"酒紅色冬日職場Look",  zh:"酒紅色精裁厚呢短版外套搭配黑色高腰直筒長褲，白色打底衫，棕色皮革低跟踝靴，冬日職場的暖色強勢", en:"burgundy tailored thick-wool crop jacket with black straight trousers, white base, brown leather ankle boots, winter professional warm-tone assertiveness" },
    { id:"os142",label:"奶油色精英日常造型",  zh:"奶油色精裁燈籠袖白色外套搭配奶油色高腰直筒長褲，裸膚高跟鞋，奶油色皮革手拿包，精英日常的完整表達", en:"cream tailored balloon-sleeve jacket with cream high-waist straight trousers, nude heels, cream leather clutch, elite daily complete expression" },
    { id:"os143",label:"黑白條紋精裁套裝",   zh:"黑白細直條紋精裁外套搭配同款直筒長褲，黑色絲質上衣，黑色漆皮高跟，經典永恆的黑白條紋職場造型", en:"black-white fine stripe tailored jacket with matching straight trousers, black silk top, patent black heels, classic timeless black-white stripe professional look" },
    // ── Fairy / Whimsigoth / Fantasy (7組) ───────────────────────────────
    { id:"os144",label:"森林仙子完整Look",    zh:"深橄欖綠薄紗多層罩裙搭配棕色皮革緊身上衣，棕色綁帶平底鞋，花冠頭飾，森林仙子的完整視覺表達", en:"deep olive organza multi-layer overlay skirt with brown leather fitted top, brown lace-up flats, flower crown, forest fairy complete visual" },
    { id:"os145",label:"暗黑仙子Whimsigoth",  zh:"黑色多層薄紗裙搭配黑色緊身蕾絲上衣，黑色透明罩衫外搭，銀色星形飾品，黑色芭蕾鞋，暗黑仙子的視覺詩學", en:"black multi-tier tulle skirt with black fitted lace top, black sheer overshirt layer, silver star accessories, black ballet flats, dark fairy visual poetry" },
    { id:"os146",label:"藍紫色宇宙仙子Look",  zh:"藍紫色星空印花薄紗長裙搭配深藍色緊身上衣，銀色星形配件，銀色細跟高跟鞋，宇宙仙子的魔幻造型", en:"blue-purple galaxy tulle maxi skirt with navy fitted top, silver star accessories, silver stilettos, cosmic fairy magical look" },
    { id:"os147",label:"翡翠綠魔法師Look",   zh:"翡翠綠薄紗多層長裙搭配深綠色緊身上衣，金色蛇形飾品，深棕色靴子，翡翠綠女巫的魔幻造型", en:"jade green organza multi-tier skirt with deep green fitted top, gold serpent accessories, dark brown boots, jade green witch magical look" },
    { id:"os148",label:"奶白仙氣夢境Look",   zh:"奶白色多層薄紗裙搭配白色緊身上衣，白色羽毛飾品，白色細跟高跟鞋，如夢如幻的純白天使意象", en:"off-white multi-tier tulle skirt with white fitted top, white feather accessories, white stilettos, dreamlike pure white angel imagery" },
    { id:"os149",label:"薰衣草色仙境Look",   zh:"薰衣草紫色薄紗多層裙搭配淡紫色緊身上衣，紫色蝴蝶形飾品，白色芭蕾鞋，仙境蝴蝶仙子的夢幻意象", en:"lavender organza multi-tier skirt with pale purple fitted top, purple butterfly accessories, white ballet flats, wonderland butterfly fairy dreamlike imagery" },
    { id:"os150",label:"玫瑰粉色浪漫仙子",   zh:"玫瑰粉色多層薄紗中長裙搭配白色蕾絲細肩帶上衣，粉色珍珠飾品，粉色芭蕾平底鞋，如玫瑰花瓣環繞的仙子", en:"rose pink organza multi-tier midi skirt with white lace cami, pink pearl accessories, pink ballet flats, fairy surrounded by rose petals" },
    // ── Mob Wife / Maximalist (8組) ─────────────────────────────────────────
    { id:"os151",label:"豹紋Mob Wife全套",    zh:"豹紋絲絨緊身連衣裙搭配黑色皮草短版外套，黑色細跟高跟鞋，金色誇張飾品，Mob Wife美學的視覺頂點", en:"leopard velvet bodycon dress with black faux fur crop coat, black stilettos, gold statement accessories, Mob Wife aesthetic visual pinnacle" },
    { id:"os152",label:"豪奢皮草大衣造型",    zh:"奶油色長版人造皮草大衣搭配黑色緊身連衣裙，黑色細跟高跟靴，金色鏈條包，冬日奢靡的最強存在感", en:"cream long faux fur coat over black bodycon dress, black stiletto boots, gold chain bag, winter opulence ultimate presence" },
    { id:"os153",label:"金色全身亮片Look",    zh:"金色全身亮片緊身連衣裙，金色細跟高跟鞋，金色誇張耳環，如黃金雕塑的晚宴女神，Maximalist的頂點", en:"gold all-over sequin bodycon dress, gold stilettos, gold statement earrings, like gold sculpture evening goddess, maximalist pinnacle" },
    { id:"os154",label:"虎紋絲綢Luxe套裝",   zh:"虎紋印花真絲寬鬆長版上衣搭配同款虎紋直筒褲，金色配件，金色平底涼鞋，豪奢動物紋義大利渡假感", en:"tiger print silk relaxed long top with matching straight trousers, gold accessories, gold flat sandals, opulent animal print Italian vacation feel" },
    { id:"os155",label:"深紅色絲絨晚禮服Look",zh:"深酒紅色絲絨緊身連衣裙，金色細跟高跟鞋，金色皮草小手袋，酒紅×金色的Mob Wife晚宴視覺", en:"deep burgundy velvet bodycon dress, gold stilettos, gold faux fur mini bag, burgundy-gold Mob Wife dinner visual" },
    { id:"os156",label:"黑色皮草X鑽飾晚宴",  zh:"黑色緊身上衣搭配長版黑色皮草外套，黑色百褶長裙，鑽飾配件，黑色細跟高跟，最強晚宴黑色霸主", en:"black fitted top under long black faux fur coat, black pleated maxi skirt, diamond accessories, black stilettos, most powerful dinner black sovereign" },
    { id:"os157",label:"銀白色冰雪女王Look",  zh:"銀白色金屬感緊身連衣裙搭配白色長版人造皮草大衣，銀色細跟高跟靴，水晶飾品，冰雪女王的視覺降臨", en:"silver-white metallic bodycon dress under white long faux fur coat, silver stiletto boots, crystal accessories, ice queen visual descent" },
    { id:"os158",label:"紫色天鵝絨Diva Look",  zh:"深紫色天鵝絨緊身連衣裙搭配紫色皮草長版外套，金色誇張飾品，紫色細跟高跟，紫色天鵝絨的奢靡女神", en:"deep purple velvet bodycon dress with purple faux fur long coat, gold statement accessories, purple stilettos, velvet opulent goddess" },
    // ── Indie Sleaze / 2010s Revival (7組) ──────────────────────────────────
    { id:"os159",label:"2010s Indie Sleaze",  zh:"做舊格紋法蘭絨疊穿緊身黑色印花細肩帶，高腰做舊牛仔迷你裙，黑色漁網絲襪，厚底樂福鞋，2010年代Indie Sleaze復刻", en:"distressed flannel over fitted black graphic cami, high-waist denim mini, black fishnet tights, platform loafers, 2010s indie sleaze revival" },
    { id:"os160",label:"2013年Tumblr美學",    zh:"白色V領超短T恤疊穿長版黑色薄背心，黑色高腰皮革迷你裙，白色球鞋，黑色絲絨髮帶，Tumblr黃金時期美學", en:"white V-neck crop tee over long black tank, black high-waist leather mini, white sneakers, black velvet headband, Tumblr golden era aesthetic" },
    { id:"os161",label:"Hailey Bieber街頭風",  zh:"棕色皮夾克搭配白色緊身上衣，棕色皮革迷你裙，棕色過膝靴，金色飾品，當代最具影響力的街頭奢華公式", en:"brown leather jacket with white fitted top, brown leather mini, brown OTK boots, gold accessories, most influential contemporary street-luxe formula" },
    { id:"os162",label:"都市牛仔靴Cowgirl",   zh:"牛仔格紋短版外套搭配牛仔迷你裙，棕色真皮西部牛仔靴，皮草馬甲，西部Cowgirl的現代都市詮釋", en:"denim check cropped jacket with denim mini, brown leather western boots, fur vest, modern urban cowgirl interpretation" },
    { id:"os163",label:"Rosé首爾街拍Look",   zh:"黑色皮革短版外套搭配白色緊身T恤與黑色超短迷你裙，黑色厚底球鞋，首爾頂級街拍的標誌性組合", en:"black leather cropped jacket with white fitted tee and black ultra mini, black chunky sneakers, Seoul top street-snap iconic combo" },
    { id:"os164",label:"Indie Pop女孩造型",  zh:"彩色條紋針織短版上衣搭配高腰迷你牛仔裙，白色厚底鞋，超大圓框太陽眼鏡，Indie Pop的活潑少女感", en:"colorful stripe knit crop with high-waist denim mini, white platform shoes, oversized round sunglasses, indie pop lively girl feel" },
    { id:"os165",label:"Zara世代都市組合",   zh:"大地棕色長版外套搭配白色緊身T恤與深藍高腰牛仔直筒褲，白色小皮鞋，當代都市時尚消費美學", en:"earth brown long coat with white tee and dark blue straight jeans, white shoes, contemporary urban fashion consumer aesthetic" },
    // ── Coastal Cowgirl / Western (5組) ─────────────────────────────────────
    { id:"os166",label:"海岸牛仔女孩Look",   zh:"白色棉質罩衫搭配牛仔迷你裙，棕色西部牛仔靴，白色皮草馬甲，草帽，海岸Cowgirl的輕鬆浪漫", en:"white cotton coverup with denim mini, brown western boots, white fur vest, cowboy hat, coastal cowgirl easy romance" },
    { id:"os167",label:"西部牛仔式精品Look", zh:"棕色皮革緊身上衣搭配牛仔迷你裙，棕色西部靴，流蘇皮革細節，沙漠日落的暖調西部美感", en:"brown leather fitted top with denim mini, brown western boots, fringe leather detail, desert sunset warm western beauty" },
    { id:"os168",label:"現代Cowgirl全套",   zh:"米色鉤針短版上衣搭配高腰牛仔迷你短裙，白色西部牛仔靴，牛仔帽，波西米亞牛仔的當代組合", en:"beige crochet crop with high-waist denim mini-shorts, white western boots, cowboy hat, boho cowgirl contemporary combo" },
    { id:"os169",label:"棕色系西部層次裝",  zh:"棕色蕾絲短版上衣搭配棕色流蘇皮革腰帶與棕色超短牛仔裙，棕色牛仔靴，南方美人的層次西部美學", en:"brown lace crop with brown fringe leather belt and brown denim mini, brown cowboy boots, Southern belle layered western aesthetic" },
    { id:"os170",label:"白色夏日Cowgirl",   zh:"白色棉質細肩帶搭配白色牛仔迷你裙，棕色皮革牛仔靴，白色草帽，金色流蘇耳環，白色夏日西部美感", en:"white cotton cami with white denim mini, brown leather boots, white straw cowboy hat, gold fringe earrings, white summer western beauty" },
    // ── Minimalist / Capsule Wardrobe (8組) ─────────────────────────────────
    { id:"os171",label:"全黑極簡都市Look",   zh:"黑色緊身高領搭配黑色精裁闊腿長褲，黑色皮革小方包，黑色皮革踝靴，極簡主義的黑色都市女神", en:"black fitted turtleneck with black tailored wide trousers, black square leather bag, black ankle boots, minimalist black urban goddess" },
    { id:"os172",label:"全白純粹極簡Look",   zh:"白色棉質緊身上衣搭配白色高腰精裁長褲，白色球鞋，白色迷你皮革包，純白極簡主義的力量感", en:"white cotton fitted top with white high-waist tailored trousers, white sneakers, white leather mini bag, pure white minimalism power" },
    { id:"os173",label:"米色同色系Tonal",   zh:"米白色緊身上衣搭配同色系精裁中長裙，裸色細跟高跟鞋，米色皮革小手包，無聲奢華的同色系力量", en:"off-white fitted top with matching tailored midi skirt, nude stilettos, beige leather mini clutch, quiet luxury tonal power" },
    { id:"os174",label:"灰色系極簡通勤",   zh:"淺灰色針織上衣搭配深灰色精裁長褲，灰色皮革踝靴，灰色皮革小包，灰色調極簡主義的知性力量", en:"pale gray knit top with dark gray tailored trousers, gray ankle boots, gray leather small bag, gray minimalism intellectual power" },
    { id:"os175",label:"棕色膠囊衣橱核心",  zh:"棕色長版精裁外套搭配奶白色棉質上衣與棕色精裁長褲，棕色皮革樂福鞋，膠囊衣橱的完整棕色看板", en:"brown long tailored coat with off-white tee and brown tailored trousers, brown leather loafers, capsule wardrobe complete brown showcase" },
    { id:"os176",label:"海軍藍極簡完整",   zh:"深海軍藍精裁外套搭配同色系長褲，白色棉質上衣，棕色皮鞋，海軍藍的永恆極簡主義組合", en:"deep navy tailored blazer with matching trousers, white cotton top, brown leather shoes, navy timeless minimalism combo" },
    { id:"os177",label:"奶油色全身柔和Look", zh:"奶油色針織毛衣搭配奶油色精裁長褲，裸色芭蕾平底鞋，奶油色小皮包，全身奶油色的溫柔包圍感", en:"cream knit sweater with cream tailored trousers, nude ballet flats, cream leather small bag, all-cream gentle surrounding feel" },
    { id:"os178",label:"白黑對比極簡Look",  zh:"黑色緊身上衣搭配白色精裁寬腿長褲，黑色皮革踝靴，白色包包，黑白對比的極簡主義視覺節奏", en:"black fitted top with white tailored wide trousers, black ankle boots, white bag, black-white contrast minimalism visual rhythm" },
    // ── Date Night / Evening (8組) ────────────────────────────────────────
    { id:"os179",label:"黑色絲絨晚宴Look",  zh:"黑色絲絨細肩帶緊身連衣裙，黑色細跟高跟鞋，鑽石耳環，黑色絲絨小晚宴包，永恆的晚宴黑色女神", en:"black velvet fitted cami dress, black stilettos, diamond earrings, black velvet evening clutch, timeless dinner black goddess" },
    { id:"os180",label:"深紅色晚宴約會Look",zh:"深酒紅色緞面開叉中長裙搭配黑色緊身上衣，黑色細跟高跟鞋，金色飾品，深紅×黑的性感晚宴組合", en:"deep burgundy satin slit midi with black fitted top, black stilettos, gold accessories, burgundy-black sensual evening combo" },
    { id:"os181",label:"白色晚宴優雅Look",  zh:"白色絲質細肩帶連衣裙，白色細跟高跟鞋，金色細鏈飾品，白色迷你手拿包，純白晚宴的神聖優雅感", en:"white silk cami dress, white stilettos, gold thin chain accessories, white mini clutch, pure white evening divine elegance" },
    { id:"os182",label:"銀色閃光晚宴造型",  zh:"銀色全息亮片緊身連衣裙，銀色細跟高跟鞋，水晶飾品，銀色晚宴包，夜晚燈光下的銀色女神降臨", en:"silver holographic sequin bodycon dress, silver stilettos, crystal accessories, silver evening bag, silver goddess descending under night lights" },
    { id:"os183",label:"深藍色晚宴知性Look",zh:"深海軍藍色絲質流動長裙搭配深藍色精裁上衣，金色細跟高跟鞋，金色配件，深藍色晚宴的知性貴族感", en:"deep navy silk flowing skirt with matching tailored top, gold stilettos, gold accessories, navy evening intellectual aristocratic feel" },
    { id:"os184",label:"裸膚色感官晚宴",   zh:"裸膚色紗質疊層連衣裙，裸膚色細跟高跟鞋，鑽飾配件，如肌膚般的裸色製造雕塑般的感官視覺", en:"nude mesh-layered dress, nude stilettos, diamond accessories, skin-toned nude creating sculptural sensory visual" },
    { id:"os185",label:"玫瑰金色晚宴Look",  zh:"玫瑰金色亮片緊身連衣裙，玫瑰金細跟高跟鞋，玫瑰金飾品，玫瑰金色晚宴的溫暖奢華光澤", en:"rose gold sequin bodycon dress, rose gold stilettos, rose gold accessories, warm luxurious rose gold evening radiance" },
    { id:"os186",label:"翡翠綠晚宴造型",   zh:"翡翠綠色絲絨緊身連衣裙，金色細跟高跟鞋，金色飾品，翡翠綠×金的晚宴女王氣場", en:"jade green velvet bodycon dress, gold stilettos, gold accessories, jade-gold evening queen aura" },
    // ── Casual Everyday (7組) ───────────────────────────────────────────────
    { id:"os187",label:"週末咖啡廳日常",   zh:"白色寬鬆T恤搭配高腰棕色皮革迷你裙，白色球鞋，小型棕色側背包，週末咖啡廳的無拘輕鬆感", en:"white oversized tee with high-waist brown leather mini, white sneakers, small brown crossbody bag, weekend café effortless ease" },
    { id:"os188",label:"大學校園日常Look",  zh:"米白色寬鬆帽T搭配高腰藍色牛仔直筒褲，白色老爹鞋，咖啡色帆布包，大學校園最舒適的日常組合", en:"off-white oversized hoodie with high-waist blue straight jeans, white dad shoes, coffee canvas bag, most comfortable campus daily combo" },
    { id:"os189",label:"超市購物便裝Look",  zh:"奶白色針織罩衫搭配高腰黑色瑜珈緊身褲，白色SNEAKER，腋下手提包，Hailey-style的便裝精緻感", en:"off-white knit overshirt with high-waist black yoga leggings, white sneakers, armpit bag, Hailey-style casual refinement" },
    { id:"os190",label:"圖書館靜讀日常",   zh:"深棕色針織長版開衫搭配白色緊身T恤與藍色牛仔直筒褲，棕色皮靴，圖書館靜讀的溫暖知識感", en:"dark brown long knit cardigan with white tee and blue straight jeans, brown boots, warm intellectual library study feel" },
    { id:"os191",label:"公園散步輕鬆造型", zh:"白色棉質oversized短袖T搭配黑色高腰緊身自行車短褲，白色厚底球鞋，黑色棒球帽，公園散步的運動休閒感", en:"white oversized tee with black high-waist cycle shorts, white chunky sneakers, black baseball cap, park walk athletic casual feel" },
    { id:"os192",label:"春日戶外清新Look", zh:"粉色薄棉質短版上衣搭配高腰淺藍色牛仔闊腿褲，白色球鞋，粉白配件，春日戶外的清新甜美感", en:"pink thin cotton crop with high-waist light blue wide jeans, white sneakers, pink-white accessories, spring outdoor fresh sweet feel" },
    { id:"os193",label:"夏日市場採購Look", zh:"白色棉紗罩衫搭配高腰棉質短褲，草編包，白色涼鞋，草帽，夏日市場採購的輕鬆生活美學", en:"white gauze overshirt with high-waist cotton shorts, straw bag, white sandals, straw hat, summer market shopping easy life aesthetic" },
    // ── Monochrome Color Looks (10組) ────────────────────────────────────────
    { id:"os194",label:"全紅色多巴胺單色Look", zh:"正紅色緊身上衣搭配紅色高腰迷你裙，紅色細跟高跟鞋，紅色飾品，全身正紅的電力視覺衝擊", en:"classic red fitted top with red mini skirt, red stilettos, red accessories, all-red visual electric impact" },
    { id:"os195",label:"全深藍色沉穩海洋Look", zh:"深海軍藍色精裁外套搭配深藍緊身上衣與深藍長褲，深藍皮鞋，深藍皮革小包，深藍沉穩一致感", en:"deep navy tailored jacket over navy fitted top and trousers, navy shoes, navy leather bag, deep blue composed consistency" },
    { id:"os196",label:"全棕色系暖調Look",    zh:"焦糖棕色皮革外套搭配棕色針織上衣與棕色皮革長裙，棕色過膝靴，全棕色系的秋日暖調單色", en:"caramel leather jacket over brown knit and leather skirt, brown OTK boots, all-brown autumn warm tonal monochrome" },
    { id:"os197",label:"全粉色泡泡糖Look",    zh:"熱粉色短版外套搭配粉色緊身上衣與粉色迷你裙，粉色細跟高跟鞋，全粉色的甜蜜泡泡糖視覺", en:"hot pink crop jacket over pink top and mini, pink stilettos, all-pink sweet bubblegum visual" },
    { id:"os198",label:"全軍綠色機能Look",    zh:"軍綠色工裝外套搭配橄欖綠上衣與軍綠機能長褲，棕色靴子，全軍綠色的都市機能一致感", en:"army green cargo jacket over olive top and cargo trousers, brown boots, all-army-green urban functional consistency" },
    { id:"os199",label:"全米白Tonal輕奢",   zh:"米白色精裁西裝外套搭配米白色針織上衣與米白精裁長褲，裸色高跟，全米白系的靜謐奢華", en:"off-white tailored blazer over off-white knit and trousers, nude heels, all-off-white serene luxury" },
    { id:"os200",label:"全灰色城市極簡",    zh:"中灰色oversize外套搭配淺灰色上衣與深灰長褲，灰色球鞋，全灰色系的城市極簡美學", en:"medium gray oversized coat over light gray top and dark trousers, gray sneakers, all-gray urban minimalism aesthetic" },
    { id:"os201",label:"全黑色夜行者Look",   zh:"黑色皮夾克搭配黑色緊身上衣與黑色皮革迷你裙，黑色厚底靴，黑色配件，全黑的城市夜行者", en:"black leather jacket over black top and leather mini, black chunky boots, black accessories, all-black urban night wanderer" },
    { id:"os202",label:"全白清純天使Look",   zh:"白色針織上衣搭配白色高腰百褶迷你裙，白色厚底球鞋，白色飾品，全白系的清純天使感", en:"white knit top with white high-waist pleated mini, white platform sneakers, white accessories, all-white pure angel feel" },
    { id:"os203",label:"全橄欖綠大地系",    zh:"橄欖綠針織毛衣搭配橄欖綠高腰長褲，棕色皮靴，全橄欖綠的自然大地一致感", en:"olive knit sweater with olive high-waist trousers, brown leather boots, all-olive natural earth consistency" },
    // ── Sport Luxe Complete Looks (6組) ─────────────────────────────────────
    { id:"os204",label:"奢華Run Club Look",  zh:"奶白色高支撐運動bralette搭配奶白色高腰緊身運動長褲，白色頂級球鞋，奶白色運動夾克，奢華跑步俱樂部感", en:"off-white high-support sports bra with matching high-waist leggings, white top-end sneakers, off-white athletic jacket, luxury run club feel" },
    { id:"os205",label:"深黑色力量訓練Look", zh:"黑色緊身運動背心搭配黑色高腰訓練緊身褲，黑色訓練球鞋，黑色運動手腕帶，力量訓練女孩的黑色戰衣", en:"black athletic tank with black high-waist training leggings, black training sneakers, black wrist wraps, strength training girl black battle armor" },
    { id:"os206",label:"Pilates Studio美學",zh:"白色緊身Pilates背心搭配大地棕色高腰訓練緊身褲，白色訓練球鞋，棕色隨身包，Pilates工作室的乾淨優雅", en:"white fitted pilates tank with earth brown high-waist leggings, white training shoes, brown tote, pilates studio clean elegance" },
    { id:"os207",label:"運動X精品街頭融合",  zh:"白色緊身運動上衣疊穿精品品牌大廓形運動外套，黑色緊身自行車短褲，白色厚底球鞋，Sport Luxe頂峰", en:"white fitted athletic top under luxury brand oversized track jacket, black cycle shorts, white chunky sneakers, sport luxe pinnacle" },
    { id:"os208",label:"流行Yoga Girl Look", zh:"棕色印花緊身Yoga上衣搭配同款棕色印花Yoga長褲，棕色涼鞋，天然編織包，流行Yoga女孩的自然系美學", en:"brown printed yoga bralette with matching brown printed leggings, brown sandals, natural weave bag, trendy yoga girl natural aesthetic" },
    { id:"os209",label:"網球俱樂部白色全套", zh:"白色網球Polo衫搭配白色網球百褶短裙，白色網球鞋，白色運動短襪，白色網球包，Wimbledon純白美學", en:"white tennis polo with white pleated tennis skirt, white tennis shoes, white ankle socks, white racket bag, Wimbledon all-white aesthetic" },
    // ── Festival / Concert (6組) ────────────────────────────────────────────
    { id:"os210",label:"Coachella波西米亞",  zh:"白色鉤針短版上衣搭配米白色多層流蘇長裙，棕色涼鞋，多層項鍊，草帽，科切拉沙漠音樂節波西米亞女王", en:"white crochet crop with beige tiered fringe maxi skirt, brown sandals, layered necklaces, straw hat, Coachella desert festival boho queen" },
    { id:"os211",label:"電音節賽博Look",    zh:"銀色全息PVC透明上衣搭配銀色亮片超短裙，銀色厚底靴，霓虹配件，電子音樂節的賽博閃光女王", en:"silver holographic PVC sheer top with sequin micro skirt, silver platforms, neon accessories, electronic festival cyber flash queen" },
    { id:"os212",label:"搖滾音樂節全套",   zh:"黑色印花短版T搭配黑色高腰皮革迷你裙，黑色馬丁靴，黑色皮夾克，金屬配件，搖滾音樂節的完整姿態", en:"black graphic crop tee with black leather mini, black Docs, black leather jacket, metal accessories, rock festival complete attitude" },
    { id:"os213",label:"嘻哈慶典Look",     zh:"超大印花衛衣搭配自行車短褲，白色球鞋，棒球帽，金色鏈條，嘻哈慶典的舒適強勢感", en:"oversized graphic hoodie with cycle shorts, white sneakers, baseball cap, gold chain, hip-hop celebration comfortable assertiveness" },
    { id:"os214",label:"夜店舞廳女王Look",  zh:"金色亮片緊身連衣裙，金色細跟高跟鞋，金色飾品，金色迷你手包，夜店舞廳燈光下的金色女王", en:"gold sequin bodycon dress, gold stilettos, gold accessories, gold mini bag, nightclub dance floor gold queen under lights" },
    { id:"os215",label:"夏日花音樂節Look",  zh:"印花碎花短版上衣搭配高腰牛仔迷你短裙，白色厚底鞋，花環頭飾，多層飾品，夏日花音樂節的田野浪漫", en:"floral crop top with high-waist denim mini shorts, white platforms, floral headpiece, layered accessories, summer flower festival field romance" },
    // ── Normcore / Anti-Fashion (5組) ────────────────────────────────────────
    { id:"os216",label:"純粹Normcore Look",  zh:"白色平口T恤搭配藍色直筒牛仔褲，白色老爹鞋，無印良品式的極度平凡即是時尚，Anti-Fashion的宣言", en:"white crew tee with blue straight jeans, white dad shoes, Muji-style extreme ordinariness as fashion, anti-fashion statement" },
    { id:"os217",label:"工裝Normcore完整",   zh:"卡其色工裝寬鬆長褲搭配米白色純棉T恤，棕色工裝靴，反時尚的平凡主義美學巔峰", en:"khaki relaxed chinos with off-white plain tee, brown work boots, anti-fashion ordinarism aesthetic pinnacle" },
    { id:"os218",label:"Old Navy基本款一套", zh:"藍色格紋法蘭絨搭配白色T恤與深藍色直筒牛仔褲，白色運動鞋，美式中西部的誠實日常美感", en:"blue plaid flannel with white tee and dark jeans, white trainers, American Midwest honest daily beauty" },
    // ── Regencycore / Period Drama (4組) ────────────────────────────────────
    { id:"os219",label:"攝政時代宮廷晚禮",  zh:"奶白色帝政腰線長洋裝，超誇張泡泡袖，蕾絲邊飾，珍珠飾品，白色緞帶涼鞋，帝政時代的宮廷晚宴女神", en:"off-white Empire-waist gown, dramatically oversized puff sleeves, lace trim, pearl accessories, white ribbon sandals, Regency era court dinner goddess" },
    { id:"os220",label:"粉藍色攝政時代裝",  zh:"粉藍色輕薄棉質帝政腰線連衣裙，白色蕾絲領口，細緞帶腰帶，白色繫帶平底鞋，Jane Austen式的清純浪漫", en:"powder blue light cotton Empire dress, white lace neckline, ribbon waistband, white lace-up flats, Jane Austen pure romance" },
    { id:"os221",label:"Bridgerton花園派對",  zh:"花卉印花棉質泡泡袖連衣裙，淡黃色緞帶腰帶，白色手套，花卉髮飾，白色芭蕾鞋，Bridgerton花園派對", en:"floral cotton puff-sleeve dress, pale yellow ribbon sash, white gloves, floral hair piece, white ballet shoes, Bridgerton garden party" },
    { id:"os222",label:"維多利亞時代宮廷感",  zh:"深棕色天鵝絨緊身上衣搭配深棕色多層百褶長裙，黑色蕾絲手套，黑色過膝皮靴，維多利亞宮廷的貴族黑暗感", en:"dark brown velvet fitted top with tiered pleated maxi skirt, black lace gloves, black OTK boots, Victorian court aristocratic darkness" },
    // ── Mix & Match Experimental (7組) ──────────────────────────────────────
    { id:"os223",label:"正裝X球鞋混搭",    zh:"精裁西裝外套搭配白色緊身T恤與精裁長褲，但穿上白色厚底球鞋，High-Low混搭的都市時尚玩味", en:"tailored blazer with white tee and trousers, but worn with white chunky sneakers, high-low mix urban fashion playfulness" },
    { id:"os224",label:"晚禮裙X運動鞋",   zh:"黑色絲絨優雅連衣裙搭配白色復古運動鞋，Rei Kawakubo式的高低材質衝突混搭宣言", en:"black velvet elegant dress with white vintage sneakers, Rei Kawakubo-style high-low material clash mix manifesto" },
    { id:"os225",label:"格紋西裝X機能元素",zh:"格紋精裁西裝外套搭配黑色機能緊身褲與黑色厚底球鞋，高端職場美學與街頭運動的碰撞融合", en:"plaid tailored blazer with black technical fitted trousers and chunky sneakers, high-end professional meets street sport collision" },
    { id:"os226",label:"蕾絲X皮革的對話",  zh:"白色浪漫蕾絲長袖上衣搭配黑色皮革迷你裙，黑色馬丁靴，柔美蕾絲與強硬皮革的視覺張力對話", en:"white romantic lace long-sleeve with black leather mini, black Docs, visual tension dialogue between soft lace and hard leather" },
    { id:"os227",label:"正式套裝X牛仔底",  zh:"精裁黑色西裝外套搭配白色T恤與淺藍色牛仔直筒褲，白色小皮鞋，Smart Casual的完美詮釋", en:"tailored black blazer with white tee and light blue straight jeans, white shoes, smart casual perfect interpretation" },
    { id:"os228",label:"Sporty X Formal融合", zh:"白色緊身運動bralette搭配精裁白色高腰長褲，白色精品運動外套，白色厚底鞋，運動精品一體化美學", en:"white fitted sports bra with tailored white high-waist trousers, white luxury track jacket, white platforms, athletic-luxury unified aesthetic" },
    { id:"os229",label:"海灘仙子X都市街頭", zh:"白色棉紗飄逸長裙搭配白色緊身T恤與白色球鞋，金色配件，將沙灘飄逸感帶入都市街頭的創意混搭", en:"white gauze flowy skirt with white tee and sneakers, gold accessories, bringing beach ethereal feel into urban street creative mix" },
    { id:"os230",label:"復古牛仔X現代簡約", zh:"做舊淺藍色牛仔夾克搭配白色現代精裁長版T恤，白色寬鬆精裁長褲，白色球鞋，復古牛仔遇見現代極簡", en:"vintage light-wash denim jacket with white modern long tee, white relaxed tailored trousers, white sneakers, vintage denim meets modern minimal" },
    // ── Streetwear Femme (5組) ───────────────────────────────────────────────
    { id:"os231",label:"Femme Streetwear粉色",zh:"粉色超大帽T搭配黑色自行車短褲，粉白色球鞋，粉色棒球帽，Femme街頭的甜美力量表達", en:"pink oversized hoodie with black cycle shorts, pink-white sneakers, pink cap, femme streetwear sweet power expression" },
    { id:"os232",label:"裙子X厚底球鞋組合", zh:"奶白色細百褶迷你裙搭配白色緊身上衣，白色厚底球鞋，白色小包，裙裝與球鞋的都市Femme組合", en:"off-white fine-pleat mini with white fitted top, white platform sneakers, white mini bag, skirt-sneaker urban femme combo" },
    { id:"os233",label:"印花連衣裙X球鞋",   zh:"碎花印花緊身連衣裙搭配白色Chunky球鞋，白色球鞋將連衣裙的甜美中和出街頭感，Femme跨界", en:"ditsy floral bodycon dress with white chunky sneakers, sneakers neutralizing sweetness into street feel, femme crossover" },
    { id:"os234",label:"運動Bra X寬腿牛仔", zh:"黑色緊身運動bralette搭配寬鬆淺藍色寬腿牛仔褲，白色球鞋，銀色鏈條，運動上衣X寬鬆下裝的對比美", en:"black sports bra with relaxed light blue wide jeans, white sneakers, silver chain, tight top-loose bottom contrast beauty" },
    { id:"os235",label:"連帽外套X蕾絲下裝", zh:"米色寬鬆連帽衛衣搭配黑色蕾絲多層短裙，黑色皮革厚底靴，高低美學的有趣對話", en:"beige relaxed hoodie with black lace tiered mini skirt, black leather chunky boots, high-low aesthetic interesting dialogue" },
    // ── Transitional Season (5組) ─────────────────────────────────────────
    { id:"os236",label:"春秋過渡期層次看板", zh:"奶白色細肩帶搭配米色精裁長褲，加上奶油色薄款針織外套半敞開，裸膚色高跟，初春或晚秋的精準過渡感", en:"off-white cami with beige tailored trousers, cream thin knit cardigan half-open, nude heels, early spring or late autumn precise transitional feel" },
    { id:"os237",label:"秋日初涼層次美學",  zh:"棕色細肩帶搭配棕色高腰A字裙，外搭棕色長版針織毛衣，棕色踝靴，秋日初涼的溫暖層次美學", en:"brown cami with brown A-line skirt, brown long knit cardigan over, brown ankle boots, early autumn chill warm layering aesthetic" },
    { id:"os238",label:"夏末冬初疊搭公式",  zh:"白色緊身T恤搭配黑色牛仔迷你裙，疊穿黑色皮夾克，黑色馬丁靴，季節交替時的完美疊搭公式", en:"white fitted tee under black denim mini, black leather jacket layer, black Docs, perfect layering formula for seasonal transitions" },
    { id:"os239",label:"早秋奶茶色全Look",  zh:"奶茶棕色針織短版上衣搭配同色系皮革迷你裙，棕色過膝靴，奶茶棕的早秋全身暖調完整造型", en:"milk-tea brown knit crop with matching leather mini, brown OTK boots, milk-tea complete warm autumn tonal look" },
    { id:"os240",label:"深秋勃良第色系",   zh:"勃良第深酒紅色長版毛衣搭配深棕色皮革長裙，棕色厚底靴，深秋的暖調奢靡完整造型", en:"burgundy long sweater with dark brown leather maxi skirt, brown chunky boots, deep autumn warm opulent complete look" },
    // ── High Fashion / Editorial (5組) ──────────────────────────────────────
    { id:"os241",label:"先鋒派解構大衣Look", zh:"不對稱解構設計長版大衣搭配修身黑色長褲，黑色精緻皮靴，帽子，先鋒派的知識分子敘事美學", en:"asymmetric deconstructed long coat with slim black trousers, black fine boots, hat, avant-garde intellectual narrative aesthetic" },
    { id:"os242",label:"Editorial極限抽象", zh:"純白色精裁不對稱廓形外套搭配黑色緊身褲，裸色高跟，銀色配件，時尚大片的抽象服裝藝術表達", en:"pure white asymmetric sculptural jacket with black fitted trousers, nude heels, silver accessories, fashion editorial abstract clothing art expression" },
    { id:"os243",label:"日本先鋒派大廓形", zh:"超大廓形黑色寬鬆上衣搭配黑色寬腿精裁長褲，黑色平底鞋，極度輕量化的川久保玲式身體空間哲學", en:"oversized black voluminous top with black wide-leg tailored trousers, black flat shoes, ultra-minimal Rei Kawakubo-style body space philosophy" },
    { id:"os244",label:"量感對比大師造型",  zh:"超大廓形上衣對比緊身下裝，或緊身上衣配極寬鬆下裝，量感對比是時尚最高哲學的視覺實現", en:"oversized top contrasting fitted bottom, or fitted top with ultra-wide bottom, volume contrast as fashion's highest philosophy visual realization" },
    { id:"os245",label:"赤足海灘藝術裝置", zh:"白色極輕薄透視麻紗長裙搭配白色緊身上衣，赤足或白色涼鞋，如海灘藝術裝置的飄逸極限美感", en:"ultra-thin sheer linen maxi skirt with white fitted top, barefoot or white sandals, beach art installation ethereal extreme beauty" },
    // ── Seasonal / Holiday Special (5組) ────────────────────────────────────
    { id:"os246",label:"聖誕節紅色Party Look",zh:"紅色亮片或緞面緊身連衣裙，金色細跟高跟鞋，金色耳環，紅色X金色的聖誕節Party女神組合", en:"red sequin or satin bodycon dress, gold stilettos, gold earrings, red-gold Christmas party goddess combo" },
    { id:"os247",label:"跨年夜銀色倒數Look",  zh:"銀色全息亮片緊身連衣裙，銀色細跟高跟靴，銀色水晶配件，跨年夜倒數的銀色閃光女神", en:"silver holographic sequin bodycon dress, silver stiletto boots, silver crystal accessories, New Year countdown silver flash goddess" },
    { id:"os248",label:"萬聖節暗黑女巫",    zh:"黑色多層蕾絲長裙搭配黑色緊身上衣，黑色尖頭帽，黑色厚底靴，金屬飾品，萬聖節暗黑女巫的完整造型", en:"black multi-layer lace maxi with black fitted top, black witch hat, black chunky boots, metal accessories, Halloween dark witch complete look" },
    { id:"os249",label:"情人節玫瑰紅造型",   zh:"玫瑰紅色絲絨緊身連衣裙，深紅色細跟高跟鞋，玫瑰金飾品，情人節玫瑰紅的愛情美學表達", en:"rose red velvet bodycon dress, deep red stilettos, rose gold accessories, Valentine's Day rose red love aesthetic expression" },
    { id:"os250",label:"生日派對閃耀全套",   zh:"金色亮片短版上衣搭配金色迷你百褶裙，金色細跟高跟鞋，誇張金色耳環，生日派對的閃耀主角造型", en:"gold sequin crop top with gold pleated mini skirt, gold stilettos, statement gold earrings, birthday party shining protagonist look" }
  ],
  ACC_GROUPS: [
    { key:"ear",   label:"👂 耳飾",      ids:["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15"] },
    { key:"neck",  label:"📿 頸部",      ids:["a16","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a29","a30"] },
    { key:"hand",  label:"💍 手腕戒指",  ids:["a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42"] },
    { key:"waist", label:"🪡 腰帶腰鍊",  ids:["a43","a44","a45","a46","a47","a48"] },
    { key:"eye",   label:"🕶 眼鏡",      ids:["a49","a50","a51","a52","a53","a54","a55","a56"] },
    { key:"hair",  label:"💇 髮飾",      ids:["a57","a58","a59","a60","a61","a62","a63","a64","a65","a66"] },
    { key:"leg",   label:"🦵 腿足鞋靴",  ids:["a67","a68","a69","a70","a71","a72","a73","a74","a75","a76","a77","a78","a79","a80"] },
    { key:"bag",   label:"👜 包包",      ids:["a81","a82","a83","a84","a85","a86","a87"] },
    { key:"hat",   label:"🧢 帽飾",      ids:["a88","a89","a90","a91","a92","a93"] },
    { key:"glove", label:"🧤 手套手甲",  ids:["a94","a95","a96","a97","a98"] },
    { key:"body",  label:"⛓ 身體鏈飾",  ids:["a99","a100","a101","a102","a103","a104","a105","a106","a107","a108","a109","a110","a111","a112","a113","a114","a115","a116","a117","a118","a119","a120","a121","a122","a123","a124","a125"] }
  ],

  AI_GEN: {
    fabric: {
      pre: { zh:["超現實","賽博龐克","末日廢土","仿生","全息投影","液態","高階訂製","非歐幾何","量子態","哥德式"], en:["surreal","cyberpunk","post-apocalyptic","bionic","holographic","liquid","haute couture","non-Euclidean","quantum","gothic"] },
      core: { zh:["黃金流體","溫感變色","生物螢光","星空投影","反重力","暗黑天鵝絨","發光光纖","冰川折射","破壞邊緣","高反光乳膠"], en:["gold fluid","thermochromic","bioluminescent","starry projection","anti-gravity","dark velvet","glowing fiber","glacier refraction","distressed edge","high-reflective latex"] },
      suf: { zh:["絲緞上衣","科技布料","水母薄紗","網眼罩衫","氣凝膠緊身衣","無縫高領","立體裁切裙","排扣短T","深V背心","解構服飾"], en:["satin top","tech fabric","jellyfish tulle","mesh overlay","aerogel bodysuit","seamless turtleneck","3D cut dress","buttoned crop top","deep-V tank","deconstructed garment"] }
    },
    bottom: {
      pre: { zh:["解構主義","透明PVC拼接","重工業風","仿生龍鱗紋","漸層金屬","反重力幾何","霓虹排線","古典宮廷","超世代","不對稱"], en:["deconstructed","transparent PVC spliced","heavy industrial","bionic dragon scale","gradient metallic","anti-gravity geometric","neon ribbon","classical corset","next-gen","asymmetrical"] },
      core: { zh:["懸浮","戰術機能","極限緊身","微光折射","立體裁切","廢土融合","液態銀色","碳纖維","全息斑馬紋","磁流體"], en:["floating","tactical utility","extreme fitted","shimmering refraction","3D tailored","wasteland fusion","liquid silver","carbon fiber","holographic zebra","ferrofluid"] },
      suf: { zh:["長裙","多口袋工裝褲","瑜珈褲","百褶裙","束腰裙","迷你短裙","熱褲","吊帶裙","包臀裙","闊腿褲"], en:["maxi skirt","multi-pocket cargo pants","yoga leggings","pleated skirt","corset skirt","mini skirt","hot pants","slip dress","bodycon skirt","wide-leg pants"] }
    },
    pose: {
      pre: { zh:["極具張力的","失去重力般的","打破第四面牆的","被時間凍結的","極致S型的","充滿神秘儀式感的","從高處俯瞰的","抵抗狂風的","極度鬆弛的","充滿攻擊性的"], en:["tension-filled","weightless","fourth-wall breaking","time-frozen","extreme S-curve","mysterious ritualistic","looking down from above","resisting strong wind","extremely relaxed","aggressive"] },
      core: { zh:["回眸","漂浮延展","挑釁凝視","奔跑瞬間","柔體扭轉","雙手交織","冰冷姿態","重心前傾","慵懶伸展","防禦性抱胸"], en:["backward glance","floating extension","provocative stare","running moment","flexible spine twist","hands interwoven","cold posture","leaning forward","lazy stretch","defensive crossed-arms"] },
      suf: { zh:["，展現強大氣場","，充滿電影感","，彷彿定格動畫","，帶來強烈視覺壓迫","，透出危險氣息","，極致優雅","，充滿野性","，宛如神明降臨","，帶著一絲脆弱","，極具舞台張力"], en:[", showing powerful aura",", highly cinematic",", like stop-motion animation",", bringing strong visual compression",", radiating dangerous vibe",", extremely elegant",", full of wildness",", like a descending deity",", with a hint of fragility",", immense stage tension"] }
    },
    scene: {
      pre: { zh:["被發光植被吞噬的","超現實無垠的","重機具轟鳴的","煙霧繚繞且霓虹閃爍的","漂浮在雲端的","反烏托邦的","充滿全息投影的","陽光穿透彩色玻璃的","被冰雪覆蓋的","失重狀態下的"], en:["swallowed by glowing vegetation","surreal endless","with roaring heavy machinery","smoky and neon-flashing","floating in the clouds","dystopian","filled with holograms","sunlight piercing through stained glass","covered in ice and snow","in a zero-gravity state"] },
      core: { zh:["未來圖書館","淺水鏡面鹽湖","太空艙內部","地下爵士酒吧","幾何玻璃美術館","末日廢棄聖室","賽博東京雨夜街頭","廢棄教堂","地下實驗室","時空隧道"], en:["future library","shallow water mirror salt lake","space pod interior","underground jazz bar","geometric glass art gallery","post-apocalyptic abandoned sanctuary","cyber-Tokyo rainy night street","abandoned church","underground lab","space-time tunnel"] },
      suf: { zh:["，光影斑駁","，充滿末日美學","，環境光極其複雜","，帶有強烈故事性","，令人屏息的宏大場景","，細節豐富到極致","，散發著危險誘惑","，宛如夢境一般","，冰冷且孤獨","，充滿未知的神秘感"], en:[", dappled lighting",", full of doomsday aesthetics",", extremely complex ambient light",", with strong narrative",", breathtaking grand scene",", insanely rich in details",", emitting dangerous temptation",", like a dream",", cold and lonely",", full of unknown mystery"] }
    },
    makeup: {
      pre: { zh:["AI未來感","眼下星塵","末日廢土風","Y2K千禧復古","高階時尚","眼尾延伸的","極致反光的","暗黑哥德","仿生人","精靈系"], en:["AI futuristic","under-eye stardust","post-apocalyptic","Y2K millennium vintage","high-fashion","extending from eye corner","extreme reflective","dark gothic","android","elven"] },
      core: { zh:["賽博金屬液態妝","碎鑽與仿生淚滴","髒污戰損感","霓虹蝴蝶妝","無眉蒼白妝","量子數據流光眼影","玻璃水光肌與金箔唇","深邃煙燻暈染","幾何線條彩繪","微濕透氧裸妝"], en:["cyber metallic liquid makeup","diamond and bionic teardrop","dirt battle-damaged vibe","neon butterfly makeup","no-eyebrow pale makeup","quantum data stream eyeshadow","glass skin with gold foil lips","deep smudged smokey eyes","geometric line body paint","dewy breathing nude makeup"] },
      suf: { zh:["，強調立體輪廓","，眼神深邃","，極具戲劇張力","，完美貼合膚質","，散發非人類的美感","，極致魅惑","，充滿破碎感","，高冷傲慢","，元氣滿滿","，細緻到能看見毛孔"], en:[", emphasizing 3D contour",", deep piercing eyes",", highly dramatic",", perfectly blending with skin",", emitting non-human beauty",", extremely seductive",", full of fragility",", cold and arrogant",", full of energetic vibe",", detailed down to pores"] }
    },
    light: {
      pre: { zh:["深海生物發光","超新星爆發般的","賽博龐克藍紫","極致戲劇性的","帶有濃厚灰塵的","模擬日食邊緣的","冷暖色調強烈碰撞的","彩色玻璃過濾的","水波紋反射的","全息投影的"], en:["deep sea bioluminescence","supernova-like","cyberpunk blue-purple","extreme dramatic","thick dust-filled","simulating solar eclipse edge","strong warm-cold colliding","stained glass filtered","water ripple reflecting","holographic projection"] },
      core: { zh:["折射與焦散","強烈邊緣輪廓光","霓虹矩陣光","倫勃朗三角光","電影級丁達爾聖光","日冕高反差光暈","雙色側打光","迷幻漫射光","流動波光","立體幾何光束"], en:["refraction and caustics","intense rim light","neon matrix lighting","Rembrandt triangle lighting","cinematic Tyndall holy light","high-contrast corona halo","dual-color side lighting","psychedelic diffused light","flowing wave light","3D geometric light beams"] },
      suf: { zh:["，照亮了人物細節","，在肌膚上形成完美高光","，創造了深邃的陰影","，帶來極強的視覺衝擊","，完美勾勒出身體曲線","，營造出神秘氛圍","，充滿科幻電影感","，光影過渡極其柔和","，產生絕美的次表面散射","，讓畫面充滿情緒張力"], en:[", illuminating subject details",", creating perfect highlights on skin",", creating deep shadows",", bringing extreme visual impact",", perfectly tracing body curves",", creating a mysterious atmosphere",", full of sci-fi cinematic feel",", extremely soft light transition",", producing beautiful subsurface scattering",", filling the frame with emotional tension"] }
    },
    acc: {
      pre: { zh:["全息投影","液態金屬","神經鏈接","量子糾纏","仿生機械","反重力","透明霓虹","做舊黃銅","賽博龐克","異星生物"], en:["holographic","liquid metal","neural link","quantum entanglement","bionic mechanical","anti-gravity","transparent neon","distressed brass","cyberpunk","alien biological"] },
      core: { zh:["懸浮頸鍊","指環與指套","發光耳機","破碎幾何項鍊","脊椎外骨骼","金屬球","護目鏡","多層次十字架","機械義肢","水晶觸角"], en:["floating choker","rings and finger armor","glowing earpiece","shattered geometric necklace","spine exoskeleton","metal spheres","goggles","multi-layered crosses","mechanical prosthesis","crystal tentacles"] },
      suf: { zh:["，緊貼著肌膚","，在空中緩緩旋轉","，閃爍著微光","，極具未來科技感","，與服裝完美融合","，散發著危險氣息","，做工精緻複雜","，打破了常規物理定律","，成為視覺焦點","，極度奢華"], en:[", clinging tightly to skin",", slowly rotating in mid-air",", shimmering faintly",", highly futuristic tech vibe",", blending perfectly with outfit",", emitting dangerous aura",", exquisitely intricate craftsmanship",", breaking conventional physics",", becoming the visual focus",", extremely luxurious"] }
    },
    expr: {
      pre: { zh:["仿生人初次覺醒的","超然物外的","數據過載邊緣的","帶有致命誘惑的","看透一切的","野性難馴的","帶有輕蔑與嘲諷的","極度無辜且純潔的","充滿狂氣的","隱忍著強烈情感的"], en:["android's first awakening","transcendent divine","on the edge of data overload","with fatal temptation","seeing through everything","untamable feral","with contempt and mockery","extremely innocent and pure","full of madness","suppressing intense emotion"] },
      core: { zh:["迷惘與純真","冰冷神性俯視","狂熱笑容","微張紅唇","深邃慵懶半瞇眼","掠食者凝視","冷笑","淚眼汪汪","病嬌眼神","緊咬下唇"], en:["confusion and innocence","cold divine downward gaze","manic smile","slightly parted red lips","lazy half-lidded eyes","predator stare","smirk","tearful eyes","yandere gaze","biting lower lip tightly"] },
      suf: { zh:["，直擊靈魂","，令人無法移開視線","，帶著一絲詭異的美感","，充滿了故事性","，彷彿能看穿螢幕","，極具侵略性","，讓人心生憐憫","，情緒張力拉滿","，宛如電影女主角","，散發著無法抗拒的魅力"], en:[", piercing the soul",", impossible to look away",", with a hint of eerie beauty",", full of storytelling",", as if seeing through the screen",", highly aggressive",", arousing pity",", maxed out emotional tension",", like a movie heroine",", radiating irresistible charm"] }
    },
    comp: {
      pre: { zh:["非歐幾何扭曲的","第一人稱視角的","無限鏡像迴圈的","極端特寫強制聚焦的","彷彿閉路電視(CCTV)的","前景被遮擋的","強烈對稱與透視的","極低仰角的","上帝視角俯瞰的","魚眼廣角的"], en:["non-Euclidean distorted","first-person perspective","infinite mirror loop","extreme close-up forced focus","CCTV-like voyeuristic","foreground blocked","strong symmetrical and perspective","extreme low-angle","God's eye overhead","fisheye wide-angle"] },
      core: { zh:["空間視角","全息UI介面覆蓋","迴圈構圖","瞳孔反光特寫","偷窺視角","窺探構圖","消失點引導","仰視壓迫感","上帝視角","廣角變形"], en:["spatial perspective","holographic UI overlay","loop composition","pupil reflection close-up","peeking perspective","voyeuristic composition","vanishing point guidance","looking-up compression","God's perspective","wide-angle distortion"] },
      suf: { zh:["，徹底顛覆視覺習慣","，帶來極強的代入感","，營造出迷幻空間","，細節放大到極致","，充滿了懸疑氣氛","，增加了畫面的層次與深度","，引導視線直達主體","，極具視覺衝擊力","，展現了場景的宏大","，充滿了街頭潮酷感"], en:[", completely subverting visual habits",", bringing strong immersion",", creating psychedelic space",", magnifying details to the extreme",", full of suspenseful atmosphere",", adding layers and depth to the frame",", guiding eyes straight to subject",", highly visually impactful",", showing the grandeur of the scene",", full of street cool vibe"] }
    }
  }
};

// ============================================================================
// ◈ OPS v8.9.5 擴充引擎 - 50組專業手工光影 + 250組真實場景與光影矩陣
// ============================================================================
(function() {
  
  // ── 1. 獻爸專屬：50組 極致高階專業光影 (Premium Lighting) ──
  const premiumLights = [
    // 第一組：極致人像與美學
    { id: "pl1", label: "★ [人像] 柔和蝴蝶光", zh: "柔和蝴蝶光，純白光，大型柔光箱，打造無瑕疵的商業美妝肌膚", en: "Soft butterfly lighting, pure white, large softbox" },
    { id: "pl2", label: "★ [人像] 倫勃朗深邃光", zh: "倫勃朗光，溫暖琥珀色，燭光，經典、深邃、充滿故事感的情緒人像", en: "Rembrandt lighting, warm amber, candlelight" },
    { id: "pl3", label: "★ [人像] 高調粉嫩閃光", zh: "高調佈光，粉嫩色系，攝影棚閃光燈，明亮、青春、充滿活力的日系少女風格", en: "High-key lighting, pastel pink, studio flash" },
    { id: "pl4", label: "★ [人像] 神聖金色輪廓", zh: "輪廓光，金色，日落逆光，髮絲發光、神聖且充滿希望的氛圍", en: "Rim lighting, golden, sunset backlight" },
    { id: "pl5", label: "★ [人像] 霓虹對比分割", zh: "分割光，冷藍與暖橘對比，雙色霓虹燈牌，潮流、對比強烈的雙重性格表現", en: "Split lighting, cool blue and warm orange, dual neon signs" },
    { id: "pl6", label: "★ [人像] 自然環形窗光", zh: "環形光，自然白，窗戶反射，立體感適中，最自然的室內人像佈光", en: "Loop lighting, natural white, window reflection" },
    { id: "pl7", label: "★ [人像] 頂部舞台聚光", zh: "頂部聚光燈，戲劇性白光，頭頂舞台燈，強調孤獨感、罪惡感或舞台焦點", en: "Top-down spotlight, dramatic white, overhead stage light" },
    { id: "pl8", label: "★ [人像] 詭異恐懼底光", zh: "底光/鬼光，詭異綠色，下方手電筒，恐怖、懸疑、萬聖節主題", en: "Under lighting, eerie green, flashlight from below" },
    { id: "pl9", label: "★ [人像] 柔和寬光開放", zh: "寬光，柔和日光，開放式陰影，親切自然、柔和的臉部佈光", en: "Broad lighting, soft daylight, open shade" },
    { id: "pl10", label: "★ [人像] 雜誌封面魅力", zh: "魅力光，漫射光暈，雷達罩，強調眼神光，時尚雜誌封面質感", en: "Glamour lighting, diffuse glow, beauty dish" },

    // 第二組：電影敘事與氛圍
    { id: "pl11", label: "★ [電影] 經典青橙夜景", zh: "電影感佈光，青橙色調，路燈與月光，好萊塢最經典的夜間電影色調", en: "Cinematic lighting, teal and orange, street lamps and moonlight" },
    { id: "pl12", label: "★ [電影] 午後塵埃體積", zh: "體積光，塵埃暖色，透過窗戶的午後陽光，史詩感、記憶中的懷舊場景", en: "Volumetric lighting, dusty warm, hazy afternoon sun through window" },
    { id: "pl13", label: "★ [電影] 黑色電影百葉窗", zh: "黑色電影光影，高反差黑白，百葉窗投影，偵探、懸疑、復古犯罪片", en: "Film Noir lighting, high contrast black and white, venetian blinds gobo" },
    { id: "pl14", label: "★ [電影] 憂鬱低飽和藍", zh: "情緒化佈光，低飽和藍，陰天天空，憂鬱、冷靜、北歐犯罪劇質感", en: "Moody lighting, desaturated blue, overcast sky" },
    { id: "pl15", label: "★ [電影] 暮光深紫剪影", zh: "剪影光，深紫色，暮光地平線，神秘、強調肢體動作與輪廓", en: "Silhouette lighting, deep purple, twilight horizon" },
    { id: "pl16", label: "★ [電影] 門縫窺視強光", zh: "側光，強烈白光，半開的門，窺視、揭秘、緊張的劇情瞬間", en: "Side lighting, harsh white, half-open door" },
    { id: "pl17", label: "★ [電影] 深夜螢幕實景", zh: "實景光源，暖黃色，檯燈與螢幕微光，真實生活感、深夜工作或駭客場景", en: "Practical lighting, warm yellow, desk lamp and monitor glow" },
    { id: "pl18", label: "★ [電影] 神秘銀月穿霧", zh: "氛圍霧氣光，神秘銀色，穿透迷霧的月光，驚悚、未知、探索場景", en: "Atmospheric fog lighting, mystical silver, moonlight through mist" },
    { id: "pl19", label: "★ [電影] 旭日耀光起點", zh: "鏡頭耀光，鮮豔金色，山頂初升旭日，希望、開場、壯闊的旅程起點", en: "Lens flare, vibrant gold, sunrise peaking over mountains" },
    { id: "pl20", label: "★ [電影] 警報不祥紅光", zh: "低調佈光，不祥紅色，緊急警報燈，危險、科幻驚悚、緊張時刻", en: "Low-key lighting, ominous red, emergency siren" },

    // 第三組：賽博龐克與科幻
    { id: "pl21", label: "★ [科幻] 賽博霓虹全息", zh: "霓虹光，電光藍與洋紅，全息廣告牌，經典賽博龐克夜景", en: "Neon lighting, electric blue and magenta, holographic billboards" },
    { id: "pl22", label: "★ [科幻] 外星生物發光", zh: "生物發光，發光青色，外星植物，阿凡達風格、深海或異星球", en: "Bioluminescence, glowing cyan, alien flora" },
    { id: "pl23", label: "★ [科幻] 警戒雷射紅網", zh: "雷射光，銳利紅色，安全網格系統，高科技潛入、戰鬥場景", en: "Laser lighting, sharp red, security grid system" },
    { id: "pl24", label: "★ [科幻] 仿生電路金光", zh: "生化微光，內部電路金光，半透明皮膚，AI 機器人、未來人類細節", en: "Cybernetic glow, internal circuit gold, translucent skin" },
    { id: "pl25", label: "★ [科幻] 矩陣代碼流光", zh: "數據流光，矩陣綠色，程式碼雨，虛擬世界、駭客任務風格", en: "Data stream lighting, matrix green, falling code rain" },
    { id: "pl26", label: "★ [科幻] 組織次表面散射", zh: "次表面散射，肉色粉紅，強烈背光照射皮膚，強調真實皮膚質感或外星生物組織", en: "Subsurface scattering, fleshy pink, strong backlight on skin" },
    { id: "pl27", label: "★ [科幻] 紫外隱形螢光", zh: "紫外線/黑光，螢光紫，隱形塗料，夜店、派對、隱藏訊息", en: "Ultraviolet light (Blacklight), fluorescent purple, UV paint" },
    { id: "pl28", label: "★ [科幻] AR介面抬頭顯示", zh: "抬頭顯示器光，介面冷藍，AR 眼鏡，第一人稱視角、駕駛艙", en: "Hud glow, cool interface blue, augmented reality visor" },
    { id: "pl29", label: "★ [科幻] 脈衝反應堆光", zh: "反應堆光，不穩定橘色，脈衝能量源，工業科幻、危機邊緣", en: "Reactor core glow, unstable orange, pulsating energy source" },
    { id: "pl30", label: "★ [科幻] 數位色差故障", zh: "故障藝術光，色差效果，壞掉的螢幕閃爍，失真、崩壞、數位混亂感", en: "Glitch lighting, chromatic aberration, broken screen flicker" },

    // 第四組：自然與環境光
    { id: "pl31", label: "★ [自然] 蜂蜜黃金時刻", zh: "黃金時刻，蜂蜜暖色，低角度太陽，最通用的唯美戶外光", en: "Golden hour, warm honey, low angle sun" },
    { id: "pl32", label: "★ [自然] 靛藍魔法時刻", zh: "藍色時刻，深靛藍，日落後天空，寧靜、城市初燈華上", en: "Blue hour, deep indigo, post-sunset sky" },
    { id: "pl33", label: "★ [自然] 清新樹葉斑駁", zh: "斑駁光影，清新綠色，穿過樹葉的陽光，森林浴、野餐、放鬆感", en: "Dappled light, fresh green, sunlight through leaves" },
    { id: "pl34", label: "★ [自然] 陰天中性漫射", zh: "陰天柔光，中性灰，厚重雲層，柔和無陰影、適合展現物體真實色彩", en: "Overcast soft light, neutral gray, heavy clouds" },
    { id: "pl35", label: "★ [自然] 暴風雨震撼閃電", zh: "暴風雨光，戲劇性暗灰，閃電擊中，力量、震撼、自然災害", en: "Stormy lighting, dramatic dark grey, lightning strike" },
    { id: "pl36", label: "★ [自然] 浪漫冷銀月光", zh: "月光，冷銀色，滿月，浪漫夜晚、魔法儀式", en: "Moonlight, cold silver, full moon" },
    { id: "pl37", label: "★ [自然] 水下波紋焦散", zh: "水下焦散，水藍色，水面折射，海底世界、泳池、夢幻感", en: "Underwater caustics, aqua blue, refraction from surface" },
    { id: "pl38", label: "★ [自然] 黎明日照金山", zh: "高山輝/日照金山，紅粉色，黎明山峰，壯麗風景、登山題材", en: "Alpine glow (Alpenglow), reddish pink, mountain peaks at dawn" },
    { id: "pl39", label: "★ [自然] 搖曳溫暖營火", zh: "火光，搖曳橘色，營火，露營、溫暖、聚會", en: "Firelight, flickering orange, campfire" },
    { id: "pl40", label: "★ [自然] 北極奇蹟極光", zh: "極光，旋轉綠紫，北方天空，奇蹟、極地旅行", en: "Aurora borealis, swirling green and purple, northern sky" },

    // 第五組：藝術與創意質感
    { id: "pl41", label: "★ [藝術] 水晶稜鏡折射", zh: "稜鏡光，彩虹光譜，水晶折射，夢幻、迷幻、光學藝術", en: "Prismatic lighting, rainbow spectrum, crystal refraction" },
    { id: "pl42", label: "★ [藝術] 城市剪影雙曝", zh: "雙重曝光光影，疊加紋理，剪影中的城市光，意識流、記憶重疊", en: "Double exposure lighting, superimposed textures, city lights within silhouette" },
    { id: "pl43", label: "★ [藝術] 凍結頻閃迪斯可", zh: "頻閃光，凍結白光，迪斯可球反射，動感、舞蹈定格、派對狂歡", en: "Strobe lighting, freezing white, disco ball reflection" },
    { id: "pl44", label: "★ [藝術] 磷光綠化學反應", zh: "夜光，磷光綠，化學反應，實驗性、塗鴉藝術", en: "Glow-in-the-dark, phosphorescent green, chemical reaction" },
    { id: "pl45", label: "★ [藝術] 夢幻重度柔焦", zh: "柔焦光暈，夢幻白，重度柔光濾鏡，回憶殺、婚紗攝影、80年代風格", en: "Soft focus glow (Bloom), dreamy white, heavy diffusion filter" },
    { id: "pl46", label: "★ [藝術] 極簡幾何硬陰影", zh: "硬陰影光，圖形黑，正午直射陽光，幾何構圖、現代建築、極簡主義", en: "Hard shadow lighting, graphic black, direct noon sun" },
    { id: "pl47", label: "★ [藝術] 珍珠虹彩光澤", zh: "虹彩光，珍珠色，肥皂泡反射，細膩、精緻、奇幻", en: "Iridescent lighting, pearlescent colors, soap bubble reflection" },
    { id: "pl48", label: "★ [藝術] 骨骼白X光反轉", zh: "X光效果，骨骼白，反轉光譜，前衛時尚、醫療科幻", en: "X-ray lighting, skeletal white, inverted spectrum" },
    { id: "pl49", label: "★ [藝術] 幾何光雕投影", zh: "光雕投影，幾何圖案，數位投影機，臉部彩繪效果、前衛藝術", en: "Projection mapping, patterned geometry, digital projector" },
    { id: "pl50", label: "★ [藝術] 神聖金空靈光環", zh: "空靈光暈，神聖金，光環效果，天使、重生、超凡脫俗", en: "Ethereal glow, divine gold, halo effect" }
  ];

  // ── 2. 真實場景矩陣 (25地點 x 10氛圍 = 250組) ──
  const sceneLocs = [
    { zh: "東京澀谷霓虹十字路口", en: "neon-lit Shibuya crossing in Tokyo" },
    { zh: "巴黎塞納河畔露天咖啡座", en: "open-air cafe along the Seine in Paris" },
    { zh: "紐約曼哈頓高空頂層公寓", en: "high-rise Manhattan penthouse in New York" },
    { zh: "倫敦復古紅磚地鐵月台", en: "vintage red brick underground platform in London" },
    { zh: "賽博龐克風格的潮濕後巷", en: "cyberpunk style wet back alley" },
    { zh: "陽光灑落的現代極簡美術館", en: "sunlit modern minimalist art gallery" },
    { zh: "威尼斯古典華麗圖書館", en: "classical and ornate library in Venice" },
    { zh: "洛杉磯棕櫚樹濱海公路", en: "palm tree lined coastal highway in Los Angeles" },
    { zh: "京都傳統靜謐日式庭園", en: "traditional and serene Japanese garden in Kyoto" },
    { zh: "冰島黑沙灘與洶湧海浪", en: "black sand beach and crashing waves in Iceland" },
    { zh: "充滿煙火氣的亞洲夜市", en: "bustling Asian night market full of life" },
    { zh: "奢華的歐洲宮廷大劇院", en: "luxurious European royal grand theater" },
    { zh: "荒蕪的末日廢土廢墟", en: "desolate post-apocalyptic wasteland ruins" },
    { zh: "充滿綠意的歐式玻璃溫室", en: "lush European glass greenhouse" },
    { zh: "美式復古公路汽車旅館", en: "American retro highway motel" },
    { zh: "燈光昏暗的地下爵士酒吧", en: "dimly lit underground jazz bar" },
    { zh: "科技感十足的全息投影實驗室", en: "high-tech holographic projection lab" },
    { zh: "寧靜的北歐雪山小木屋", en: "peaceful Nordic snowy mountain cabin" },
    { zh: "繁忙的國際機場出境大廳", en: "busy international airport departure hall" },
    { zh: "充滿生活感的凌亂單身公寓", en: "messy studio apartment full of everyday life" },
    { zh: "陽光穿透樹冠的幽深森林", en: "deep forest with sunlight piercing the canopy" },
    { zh: "復古美式校園更衣室", en: "retro American high school locker room" },
    { zh: "高端時尚的精品店櫥窗前", en: "high-end fashion boutique window" },
    { zh: "波光粼粼的無邊際泳池畔", en: "sparkling infinity pool side" },
    { zh: "壯麗的峽谷懸崖邊緣", en: "magnificent canyon cliff edge" }
  ];

  const sceneAtmos = [
    { short: "晨霧冷光", zh: "清晨薄霧瀰漫，透出微亮的冷調晨光", en: "enveloped in morning mist, revealing faint cool morning light" },
    { short: "黃昏逆光", zh: "黃昏逢魔時刻，強烈的金黃色暖陽逆光", en: "magic hour at dusk, strong golden warm backlighting" },
    { short: "雨後霓虹", zh: "午夜大雨過後，地面水窪反射著城市霓虹", en: "after midnight heavy rain, ground puddles reflecting city neon" },
    { short: "烈日對比", zh: "烈日當空，光影斑駁交錯的強烈對比", en: "under scorching sun, strong contrast of mottled light and shadow" },
    { short: "陰天漫射", zh: "陰天多雲，呈現憂鬱且柔和的漫射均勻光", en: "cloudy overcast, presenting a melancholic and soft diffused even light" },
    { short: "賽博霓虹", zh: "迷幻的賽博龐克粉藍霓虹光暈渲染", en: "psychedelic cyberpunk pink and blue neon halo rendering" },
    { short: "青橙色調", zh: "帶有電影級的青橙色調與深邃陰影", en: "with cinematic teal and orange color grading, deep shadows" },
    { short: "大雪孤獨", zh: "濃烈的大雪紛飛，充滿冷峻的孤獨感", en: "heavy snow falling, full of a severe sense of loneliness" },
    { short: "溫馨暖光", zh: "溫暖的室內鎢絲燈光，營造私密溫馨氛圍", en: "warm indoor tungsten lighting, creating a private and cozy atmosphere" },
    { short: "丁達爾光", zh: "夢幻的丁達爾體積光束穿透空間", en: "dreamy Tyndall volumetric light beams piercing through the space" }
  ];

  const GENERATED_SCENES = [];
  sceneLocs.forEach(loc => {
    sceneAtmos.forEach(atmo => {
      GENERATED_SCENES.push(`${loc.zh} [${atmo.short}] — ${loc.en}, ${atmo.en}`);
    });
  });
  window.OPS_DB.SCENE = GENERATED_SCENES;

  // ── 3. 光線條件矩陣 (25光源 x 10修飾 = 250組) ──
  const lightCores = [
    { zh: "倫勃朗光", en: "Rembrandt lighting" },
    { zh: "蝴蝶光/派拉蒙光", en: "Butterfly/Paramount lighting" },
    { zh: "強烈側邊輪廓光", en: "Strong rim lighting" },
    { zh: "正面平光", en: "Frontal flat lighting" },
    { zh: "戲劇性側逆光", en: "Dramatic side backlighting" },
    { zh: "窗影百葉窗光", en: "Window blind slice shadows" },
    { zh: "頂部舞台聚光燈", en: "Top stage spotlight" },
    { zh: "底光/恐怖光", en: "Underlighting/monster lighting" },
    { zh: "霓虹雙色補光", en: "Neon bi-color fill light" },
    { zh: "環境漫射光", en: "Ambient diffused lighting" },
    { zh: "全局均勻光照", en: "Global even illumination" },
    { zh: "剪影背光", en: "Silhouette backlighting" },
    { zh: "柔光箱柔焦光", en: "Softbox soft focus lighting" },
    { zh: "樹葉斑駁漏光", en: "Dappled light leaking through leaves" },
    { zh: "車燈遠光燈直射", en: "Car high beam direct lighting" },
    { zh: "螢幕冷光反射", en: "Screen cool light reflection" },
    { zh: "火光/燭光搖曳", en: "Flickering firelight/candlelight" },
    { zh: "閃光燈直打", en: "Direct camera flash lighting" },
    { zh: "丁達爾體積光", en: "Volumetric god rays Tyndall effect" },
    { zh: "邊緣漏光與鏡頭光暈", en: "Edge light leaks and lens flare" },
    { zh: "水面反射波光", en: "Water surface caustic reflections" },
    { zh: "醫療室無影光", en: "Operating room shadowless lighting" },
    { zh: "俱樂部雷射光掃射", en: "Club laser light sweeping" },
    { zh: "黃金時刻太陽直射", en: "Golden hour direct sunlight" },
    { zh: "藍調時刻天光", en: "Blue hour ambient skylight" }
  ];

  const lightMods = [
    { short: "極柔漫射", zh: "搭配極致柔和的漫射，消除所有硬陰影", en: "with extremely soft diffusion, eliminating all hard shadows" },
    { short: "硬調對比", zh: "形成強烈對比的硬調戲劇性陰影，明暗界線銳利", en: "forming high-contrast hard dramatic shadows with sharp edges" },
    { short: "青橙色調", zh: "帶有極具電影張力的青橙色調", en: "with highly cinematic teal and orange color grading" },
    { short: "粉塵折射", zh: "創造出迷幻的空氣粉塵折射效應", en: "creating psychedelic air dust refraction effects" },
    { short: "水彩暈染", zh: "光線邊緣帶有水彩般的溫柔暈染過渡", en: "light edges with watercolor-like gentle blending transition" },
    { short: "復古濃郁", zh: "呈現王家衛電影般的復古濃郁色彩", en: "presenting Wong Kar-wai style retro rich colors" },
    { short: "白熾灼燒", zh: "高光區域如白熾般過曝灼燒，充滿破壞美學", en: "highlight areas incandescently overexposed and burning, full of destructive aesthetics" },
    { short: "冷藍陰影", zh: "陰影處帶有深邃的冷藍色反光", en: "shadows carrying deep cool blue reflections" },
    { short: "日系透明", zh: "畫面呈現低對比的日系空氣透明感", en: "image presenting a low-contrast Japanese airy transparent feel" },
    { short: "精準眼神", zh: "局部光斑精準打在人物眼眸，形成閃耀眼神光", en: "local light spot precisely hitting the character's eyes, forming sparkling catchlights" }
  ];

  const GENERATED_LIGHTS = [];
  let lightIndex = 1;
  lightCores.forEach(core => {
    lightMods.forEach(mod => {
      GENERATED_LIGHTS.push({
        id: "l" + lightIndex,
        label: `${core.zh} [${mod.short}]`,
        zh: `${core.zh}，${mod.zh}`,
        en: `${core.en}, ${mod.en}`
      });
      lightIndex++;
    });
  });

  // ── 4. 合併頂級光影與矩陣光影 ──
  // 將手工設定的 50 組放在最前面，後面接上生成的 250 組
  window.OPS_DB.LIGHT = [...premiumLights, ...GENERATED_LIGHTS];

})();