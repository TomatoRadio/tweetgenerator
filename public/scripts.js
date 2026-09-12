function getRandomText(type) {
    return new Promise((resolve) => {
        setTimeout(() => {
            playSound("tick");
            switch (type) {
                case 'subject': resolve(subjectAdjectives.random()+" "+subjectNouns.random());
                case 'verb': resolve(transitiveVerbs.random()+" "+verbNouns.random());
                case 'adj': resolve(adjectives.random());
                default: resolve("ERROR");
            };
        }, 100)
    });
};

async function generateTweet() {
    document.getElementById('button').disabled = true;
    console.log('inactive');
    const tweet1 = document.getElementById("tweet1");tweet1.innerHTML = "___";
    const tweet2 = document.getElementById("tweet2");tweet2.innerHTML = "___";
    const tweet3 = document.getElementById("tweet3");tweet3.innerHTML = "___";
    for (let i = 0; i < 10; i++) {tweet1.innerHTML = await getRandomText("subject");};
    playSound("bell");
    for (let i = 0; i < 10; i++) {tweet2.innerHTML = await getRandomText("verb");};
    playSound("bell");
    for (let i = 0; i < 10; i++) {tweet3.innerHTML = await getRandomText("adj");};
    playSound("bell");
    document.getElementById('button').disabled = false;
    playSound("applause");
    console.log('active');
};

function toggleSound() {
    const button = document.getElementById('sound');
    if (button.value === 'off') {
        button.value = 'on';
        button.innerHTML = "Disable Sound";
    } else {
        button.value = 'off';
        button.innerHTML = "Enable Sound";
    };
};

function isSoundEnabled() {
    return document.getElementById('sound').value === 'on'
};

function playSound(id) {
    if (isSoundEnabled()) document.getElementById(id).play();
};

Array.prototype.random = function() {
    return this[Math.floor(this.length*Math.random())];
};

const subjectAdjectives = [
    'hot','cold','young','old','sexy','gay','tough','adorable','agreeable','amused','annoying','ashamed','awful','better','bloody','doctor','silly','stupid','female','male','nonbinary','heterosexual','reddit','autistic','underaged','elderly','middeaged','criminal','twitter','uneployed','dying','charming','romantic','aroace','trans','evil','christian','perfect','prickly','candid','vigilant','jovial','metallic','systemic','orthodox','quirky','maternal','indescript','forgotten','blue-eyed','23-year old','tall','short','married','divorced','drunk','sober','merry','chilly','ugly','fat','dead','undead','optimistic','bright','friendly','swimming','?????','cute','blind','yellow'
];

const subjectNouns = [
    'people','women','men','rulers','frogs','rabbits','tv hosts','presidents','gamers','birds','humans','aliens','non-humans','dogs','firefighters','children','kings','flowers','queens','americans','painters','musicians','yankovics','students','professors','couples','polycules','qprs','therapists','paramedics','pirates','landlubbers','cult leaders','robots','fish','people named joe','priests','baristas','tinder users','wives','husbands','ghosts','vampires','cats','friends','swimmers','alcoholics','?????','skeletons'
];

const transitiveVerbs = [
    'eat','drink','poison','love','kiss','marry','kill','talk about','dream about','date','advertise','collect','like','make human ocs of','play with','larp','?????','lie about','are responsible for','give birth to','shred','write about','ride','piggyback','purchase','sell','bet on','act maternal to','are',
];

const verbNouns = [
    'croissants','their husbands','mice','rats','dinner','computers','frogs','rabbits','tv hosts','humans','aliens','non-humans','dogs','cats','ghosts','apples','bananas','one singlular chicken nugget','fish','games','their tv','microphones','textbooks','glue sticks','hairbrushs','treasure chests','eggs','their friends','their wives','anchovies','cars','ships','swimmers','?????','cakes','things','deer','spiders',
];

const adjectives = [
    'dangerous','malicious','sweet','hot','awesome','queer','into men','not cool','old','sexy','gay','tough','adorable','agreeable','annoying','awful','better','silly','stupid','female','male','nonbinary','heterosexual','autistic','underaged','elderly','middeaged','criminal','uneployed','dying','charming','romantic','aroace','trans','evil','christian','perfect','jovial','orthodox','quirky','tall','short','married','divorced','ugly','fat','dead','bright','?????','liars','kenwayish','cute','morons'
];