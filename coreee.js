const SHOP="https://bebodywise.com",B=SHOP+"/product/";
const KEEP="Not seeing a change? Keep applying consistently and reach out to customer care.";
/* ---------- areas and concerns (the quiz uses these) ---------- */
const AR=[["face","Face"],["body","Body"],["hair","Hair"],["nutrition","Nutrition and wellness"],["brows","Brows and lashes"]];
const CC={
face:[["f-acne","Face acne"],["f-pig","Pigmentation, tan and dark spots"],["f-aging","Fine lines, dullness and under-eye"],["f-dry","Dry, rough or flaky skin"],["f-sun","Sun protection"]],
body:[["b-acne","Body acne and bumpy skin"],["b-pig","Pigmentation, tan and dark spots"],["b-dry","Dry, rough or flaky skin"],["b-underarm","Underarm odour and darkness"],["b-chafe","Chafing and rashes"],["b-sun","Sun protection"],["b-stretch","Stretch marks"]],
hair:[["h-fall","Hair fall and thinning"],["h-frizz","Frizzy hair or hard water"],["h-dand","Dandruff"]],
nutrition:[["n-well","Nutrition and wellness"]],
brows:[["brow","Brows and lashes"]]};
const C=Object.values(CC).flat();
const lab=v=>(C.find(c=>c[0]===v)||[])[1]||v;
/* ---------- how to use / when to expect results, by product type ---------- */
const FEW="A few weeks of consistent use.";
const TPL={
wash:["Massage on wet skin for 30 to 60 seconds, then rinse. Once or twice a day. Begin with once a day if your skin is sensitive.",FEW,1],
leave:["Apply a thin layer on clean skin, usually at night. Start on alternate nights, then build up. Use sunscreen in the morning.",FEW+" Active ingredients can take longer.",1],
moist:["Apply on damp skin after your bath, once or twice daily.",FEW,1],
sun:["Apply generously 15 minutes before going out. Reapply every 2 to 3 hours if you are outdoors.","Protection starts as soon as it is applied. Use it every day for lasting skin benefit.",0],
bwash:["Lather on wet skin, leave 1 to 2 minutes on problem areas, rinse. Daily, or on alternate days if skin feels tight.",FEW,1],
scrub:["Use 1 to 2 times a week, not daily. Moisturise afterwards.",FEW+" Smoother texture builds with regular weekly use.",1],
heel:["Roll on clean, dry heels and feet daily, ideally at night.","Cracked heels soften over a few weeks of daily use.",1],
rash:["Apply a thin layer on clean, dry skin where rubbing happens, whenever you expect friction.","Works as a barrier when applied. Reapply as needed.",0],
uroll:["Apply on clean, dry underarms after your shower. Wait a day after shaving or waxing before the first use.","Odour control works from day one. For darker underarms, apply daily for a few weeks.",1],
hserum:["Apply on clean, dry scalp once daily and massage lightly. Evenings work well.","Retailer listings suggest around 8 to 12 weeks of daily use for fuller-looking hair. Hair fall may ease sooner.",1],
huse:["Use as directed on the pack, after washing or on the scalp or lengths as the label says.",FEW,1],
shamp:["Wet hair, massage into scalp for 2 to 3 minutes, rinse. Use 2 to 3 times a week or as the label says.",FEW,1],
water:["Use as directed on the pack when washing your hair.","Hair often feels softer from the first few washes.",1],
gummy:["Take one gummy a day.","Changes in hair and nails are gradual. Give it around 2 to 3 months of daily use.",1],
brow:["Apply on brows or lash line at night as directed on the pack.","Gradual change. Think a few months of regular use.",0],
stretch:["Roll onto the area daily and massage in.","Works gradually and results vary from person to person. Read the brand's claims on the product page.",0]};
/* ---------- products. flags: x=exfoliating acid, r=retinoid, b=benzoyl peroxide, g=gentle, h=hydrating, s=sunscreen ---------- */
const P=[];
const add=(id,name,cat,tpl,good,act,fl,slot,price,url)=>{const t=TPL[tpl];P.push({id,name,cat,tpl,price:price||0,url:url||SHOP+"/all-products",list:url?0:1,concerns:good,actives:act,when:slot,use:t[0],wh:t[1],about:t[1]+(t[2]?" "+KEEP:""),ex:/x/.test(fl)?1:0,ret:/r/.test(fl)?1:0,bp:/b/.test(fl)?1:0,gentle:/g/.test(fl)?1:0,hyd:/h/.test(fl)?1:0,sp:/s/.test(fl)?1:0})};
/* FACE */
add("fw1","1% Salicylic Acid Face Wash","face","wash",["f-acne"],["Salicylic Acid 1%"],"x","am");
add("fw2","2% Salicylic Acid Face Wash","face","wash",["f-acne"],["Salicylic Acid 2%"],"x","am");
add("fbp","2.5% Benzoyl Peroxide Face Wash","face","wash",["f-acne"],["Benzoyl Peroxide 2.5%"],"b","am");
add("facw","Acne Control Foaming Wash","face","wash",["f-acne"],["Acne-control formula"],"","am");
add("fha","Hyaluronic Acid Face Wash","face","wash",["f-dry"],["Hyaluronic Acid"],"gh","am");
add("fcb","2% Salicylic Acid Cleansing Balm","face","wash",["f-acne"],["Salicylic Acid 2%"],"x","am");
add("fgel","2% Salicylic Acid Gel","face","leave",["f-acne"],["Salicylic Acid 2%"],"x","pm");
add("fspot","Acne Spot Correction Gel","face","leave",["f-acne"],["Spot-correction formula"],"","pm");
add("fni","5% Niacinamide Serum","face","leave",["f-acne","f-pig"],["Niacinamide 5%"],"g","pm");
add("fvc","20% Vitamin C Serum","face","leave",["f-pig","f-aging"],["Vitamin C 20%"],"","pm");
add("feye","2% Bio Retinol Under Eye Cream","face","leave",["f-aging"],["Bio Retinol 2%"],"r","pm");
add("fret","1% Retinol Skin Regenerate Night Cream","face","leave",["f-aging"],["Retinol 1%"],"r","pm");
add("fhyp","Hyperpigmentation Removal Cream","face","leave",["f-pig"],["Pigmentation-care formula"],"","pm");
add("fpc","1% Peptide & Ceramide Moisturiser","face","moist",["f-dry","f-aging"],["Peptides 1%","Ceramides"],"gh","after");
add("fspf","0.1% Probiotic Sunscreen","face","sun",["f-sun"],["Probiotic 0.1%","SPF"],"gs","out");
add("fs30","Broad Spectrum SPF 30 Sunscreen","face","sun",["f-sun"],["SPF 30"],"gs","out");
add("ftint","Tinted Sunscreen","face","sun",["f-sun"],["SPF"],"gs","out");
/* BODY (first ten keep their prices and links from your original site) */
add("cer","1% Salicylic Ceramide Body Wash","body","bwash",["b-acne","b-dry"],["Salicylic Acid 1%","Ceramides"],"xgh","shower",549,B+"salicylic-ceramide-bodywash");
add("sal","1% Salicylic Acid Body Wash","body","bwash",["b-acne"],["Salicylic Acid 1%"],"x","shower",399,B+"1-salicylic-acid-body-wash-350ml");
add("aha","5% AHA BHA Exfoliating Body Wash","body","bwash",["b-acne","b-pig"],["AHA","BHA"],"x","shower",649,B+"5-aha-bha-bodywash-700ml");
add("milk","Triple Milk Deep Hydrating Body Wash","body","bwash",["b-pig","b-dry"],["Milk-based hydrating formula"],"gh","shower",499,B+"triple-milk-deep-hydrating-bodywash-xp");
add("roll","6% AHA BHA Advanced Underarm Roll On","body","uroll",["b-underarm"],["AHA","BHA"],"x","after",499,B+"6-aha-bha-underarm-roll-on-flora-75ml");
add("u10","10% Urea Body Lotion","body","moist",["b-dry"],["Urea 10%"],"gh","after",399,B+"10-urea-lotion");
add("u20","20% Urea Lotion","body","moist",["b-dry"],["Urea 20%"],"h","after",569,B+"20-urea-lotion-xp");
add("heel","20% Urea Heel & Feet Roll On","body","heel",["b-dry"],["Urea 20%"],"h","after",399,B+"20-urea-roll-on-50ml");
add("spf","De-Tan SPF 50+ Body Sunscreen Lotion","body","sun",["b-sun"],["SPF 50+"],"gs","out",549,B+"body-sunscreen-lotion-with-spf-50");
add("str","Anti-Stretch Mark Serum Roll-On","body","stretch",["b-stretch"],["Regeneryl"],"g","after",599,B+"anti-stretch-mark-roll-on");
add("r4","4% AHA BHA Underarm Roll On","body","uroll",["b-underarm"],["AHA","BHA"],"x","after");
add("aha2","2% AHA Body Wash","body","bwash",["b-acne","b-pig"],["AHA 2%"],"x","shower");
add("bbp","2.5% Benzoyl Peroxide Body Wash","body","bwash",["b-acne"],["Benzoyl Peroxide 2.5%"],"b","shower");
add("bni","5% Niacinamide Body Wash","body","bwash",["b-pig"],["Niacinamide 5%"],"g","shower");
add("bhw","Hyaluronic Acid Body Wash","body","bwash",["b-dry"],["Hyaluronic Acid"],"gh","shower");
add("bscr","10% AHA Body Scrub","body","scrub",["b-acne","b-pig"],["AHA 10%"],"x","shower");
add("bstk","7% Glycolic Acid Exfoliating Body Stick","body","scrub",["b-acne","b-pig"],["Glycolic Acid 7%"],"x","after");
add("bspy","3% AHA BHA Back & Body Spray","body","leave",["b-acne"],["AHA","BHA"],"x","after");
add("bbut","4% AHA BHA Body Butter","body","moist",["b-dry","b-pig"],["AHA","BHA"],"xh","after");
add("bcer","0.5% Ceramide Body Lotion","body","moist",["b-dry"],["Ceramide 0.5%"],"gh","after");
add("bnl","10% Niacinamide Body Lotion","body","moist",["b-pig","b-dry"],["Niacinamide 10%"],"gh","after");
add("blac","5% Lactic Acid Body Lotion","body","moist",["b-dry","b-acne"],["Lactic Acid 5%"],"xh","after");
add("bmag","10% Magnesium Body Lotion","body","moist",["b-dry"],["Magnesium 10%"],"h","after");
add("bspr","Body Sunscreen Spray SPF 50","body","sun",["b-sun"],["SPF 50"],"gs","out");
add("bspf","Body Lotion with SPF","body","sun",["b-sun","b-dry"],["SPF"],"ghs","out");
add("rash","Anti Rash and Chafing Gel","body","rash",["b-chafe"],["Anti-chafing barrier"],"g","out");
/* HAIR */
add("hrose","Rosemary Hair Growth Serum Roll On","hair","hserum",["h-fall"],["Rosemary"],"","hair");
add("hadv","Advanced Hair Growth Serum Roll On","hair","hserum",["h-fall"],["Aminexil","Redensyl","Procapil"],"","hair");
add("hcon","Hair Growth Concentrate","hair","hserum",["h-fall"],["Hair growth actives"],"","hair");
add("hstr","Hair Strengthening Serum","hair","huse",["h-fall"],["Strengthening serum"],"","hair");
add("hred","1% Redensyl Hair Oil","hair","huse",["h-fall"],["Redensyl 1%"],"","hair");
add("hser","Hair Serum","hair","huse",["h-frizz"],["Smoothing serum"],"h","hair");
add("hcond","Deep Moisturizing Conditioner","hair","huse",["h-frizz"],["Conditioner"],"h","hair");
add("hpep","0.5% Peptide Bond Repair Shampoo","hair","shamp",["h-frizz"],["Peptides 0.5%"],"h","hair");
add("hwat","Chelate Water Softener","hair","water",["h-frizz"],["Chelating agents"],"","hair");
add("hdan","Anti Dandruff Shampoo","hair","shamp",["h-dand"],["Anti-dandruff formula"],"","hair");
add("hket","1% Ketoconazole Dandruff Shampoo","hair","shamp",["h-dand"],["Ketoconazole 1%"],"","hair");
add("hdas","Anti Dandruff Serum","hair","huse",["h-dand"],["Anti-dandruff formula"],"","hair");
/* WELLNESS AND BROWS */
add("nbio","Biotin Hair Gummies","wellness","gummy",["n-well","h-fall"],["Biotin"],"","in");
add("nshi","Shilajit Gold Gummies","wellness","gummy",["n-well"],["Shilajit"],"","in");
add("brow","Brow and Lash Serum","brows","brow",["brow"],["Brow and lash serum"],"","brow");
const CATS=[["all","All"],["face","Face"],["body","Body"],["hair","Hair"],["wellness","Wellness"],["brows","Brows and lashes"]];
/* ---------- quiz ---------- */
const has=a=>S.a.areas.includes(a);
const Q=[
{id:"areas",t:"Which areas are you shopping for?",multi:1,o:AR},
{id:"concerns",t:"What would you like help with?",multi:1,o:()=>S.a.areas.map(a=>[(AR.find(x=>x[0]===a)||[])[1],CC[a]])},
{id:"skin",t:"What is your skin type?",if:()=>has("face")||has("body"),o:[["oily","Oily"],["dry","Dry"],["combination","Combination"],["normal","Normal"]]},
{id:"sens",t:"How sensitive is your skin?",if:()=>has("face")||has("body"),o:[["very","Very sensitive"],["some","Sometimes reacts"],["no","Not sensitive"]]},
{id:"acids",t:"Do you already use exfoliating acids (salicylic, AHA, BHA, glycolic) or retinol?",if:()=>has("face")||has("body"),o:[["yes","Yes"],["no","No"],["unsure","Not sure"]]},
{id:"hair",t:"How would you describe your hair and scalp?",if:()=>has("hair"),o:[["dry","Dry or frizzy"],["oily","Oily scalp"],["normal","Normal"]]},
{id:"diet",t:"Any food preference? (helps with gummies)",if:()=>has("nutrition"),o:[["any","No preference"],["veg","Vegetarian"],["vegan","Vegan"],["nonveg","Non-vegetarian"]]},
{id:"life",t:"How are your sleep and stress these days?",if:()=>has("nutrition")||has("hair"),o:[["good","Pretty good"],["poor","Poor sleep or high stress"],["both","Both are a struggle"]]},
{id:"n",t:"How many products do you want to start with?",o:[["2","1 or 2"],["3","About 3"],["5","Show me more"],["8","Show me everything"]]}];
const QS=()=>Q.filter(q=>!q.if||q.if());
const SLOTS=[["shower","In the shower"],["am","Face, morning"],["pm","Face or body, night"],["after","After the shower"],["out","Before going out"],["hair","Hair care"],["in","Nutrition (daily)"],["brow","Brows and lashes, night"]];
let S={view:"home",step:0,open:null,routine:[],a:{concerns:[],areas:[],skin:"",sens:"",acids:"",hair:"",diet:"",life:"",n:""}};
try{const x=JSON.parse(localStorage.getItem("bw2")||"null");if(x){Object.assign(S.a,x.a);S.routine=(x.routine||[]).filter(id=>P.some(p=>p.id===id))}}catch(e){}
const save=()=>{try{localStorage.setItem("bw2",JSON.stringify({a:S.a,routine:S.routine}))}catch(e){}};

function rank(){const a=S.a;return P.map(p=>{let s=0,why=[],warn=[];
const hit=p.concerns.filter(c=>a.concerns.includes(c));s+=hit.length*5;
if(hit.length)why.push("Targets: "+hit.map(lab).join(", "));
const skinP=p.cat==="face"||p.cat==="body",strong=p.ex||p.ret||p.bp;
const dry=p.cat==="hair"?a.hair==="dry":a.skin==="dry";
if(dry&&(skinP||p.cat==="hair")){if(p.hyd){s+=2;why.push(p.cat==="hair"?"Moisturising, which suits dry hair":"Hydrating, which suits dry skin")}else if(p.ex){s-=1;warn.push("Exfoliating products can feel drying. Follow with a moisturiser.")}}
if(a.skin==="oily"&&p.ex&&hit.some(c=>c.endsWith("acne"))){s+=1;why.push("Exfoliating formulas suit oily, acne-prone skin")}
if(a.sens&&a.sens!=="no"&&skinP){if(strong){s-=4;warn.push("Contains active ingredients (acids, retinol or benzoyl peroxide). Patch test first and start on alternate days.")}else if(p.gentle){s+=2;why.push("A gentler formula for sensitive skin")}}
if(a.acids==="yes"&&(p.ex||p.ret)){s-=1;warn.push("You already use acids or retinol, so don't layer this with them.")}
if(p.cat==="wellness"&&(a.diet==="veg"||a.diet==="vegan"))warn.push("You prefer "+(a.diet==="vegan"?"vegan":"vegetarian")+" food, so confirm the ingredients on the product page.");
return{...p,s,why,warn,hit}}).filter(p=>p.hit.length).sort((x,y)=>y.s-x.s)}

function compat(list){const n=[],ex=list.filter(p=>p.ex),ret=list.filter(p=>p.ret),bp=list.filter(p=>p.bp),sun=list.some(p=>p.sp);
if(ex.length>=2)n.push(["warn",ex.map(p=>p.name).join(" + ")+" all contain exfoliating acids. Use them on alternate days rather than together."]);
if(ret.length&&ex.length)n.push(["warn","Retinol and exfoliating acids can irritate together. Use them on different nights."]);
if(bp.length&&(ex.length||ret.length))n.push(["warn","Benzoyl peroxide with acids or retinol can dry and irritate skin. Use them at different times or on different days."]);
if(S.a.acids==="yes"&&(ex.length||ret.length))n.push(["warn","You already use acids or retinol. Add new ones one at a time."]);
if(ex.length&&list.some(p=>p.id==="u20"))n.push(["tip","A 20% urea lotion and exfoliating acids can be a lot for sensitive skin. Use them on different days."]);
if(list.some(p=>p.tpl==="uroll"))n.push(["tip","If your underarms feel irritated after shaving, give them a day before using the roll-on."]);
if((ex.length||ret.length)&&!sun)n.push(["tip","Acids and retinol can make skin more sun-sensitive. A sunscreen before going out pairs well."]);
if(list.length&&!n.length)n.push(["ok","No conflicts found between these products."]);return n}

function offers(res){const a=S.a,c=a.concerns,o=[];
if(res.some(p=>p.tpl==="uroll"))o.push(["Advanced Underarm Pigmentation Kit","A kit of 2 underarm roll-ons, listed at ₹859 (₹998 before discount). Handy if you plan to stay with it.",B+"advanced-underarm-pigmentation-kit"]);
if(c.some(x=>x.endsWith("sun")))o.push(["Sun Care Duo for Face and Body","A kit of 2 for de-tan and sun protection, listed at ₹949 (₹1098 before discount).",B+"sun-care-duo-head-to-toe"]);
if(c.includes("b-dry")||c.includes("f-dry"))o.push(["Daily Hydration Kit","For very dry skin and cracked heels, listed at ₹1071 (₹1098 before discount).",B+"daily-hydration-kit"]);
if(c.some(x=>x.startsWith("h-")))o.push(["Hair care at Be Bodywise","Check the hair page for current kits, packs and prices.",SHOP+"/hair"]);
if(c.includes("n-well"))o.push(["Gummies","Check Be Bodywise for current pack sizes and prices.",SHOP+"/all-products"]);
if(a.sens&&a.sens!=="no")o.push(["Start with one","With sensitive skin, try a single product first before building a full routine.",SHOP+"/shop/body-care"]);
o.push(["See current deals","Prices and offers change, so check the live offers page before you buy.",SHOP+"/shop/offer-zone"]);return o}
