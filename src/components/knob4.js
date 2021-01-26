import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Knob } from "react-rotary-knob";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
// import '../App.css';
import './knob4.css';
import logo from '../logo.svg';
import ring1 from '../assets/img/ring1.png';
import ring2 from '../assets/img/ring2.png';
import ring3 from '../assets/img/ring3.png';
import ringToggled1 from '../assets/img/ringToggled1.png';
import ringToggled2 from '../assets/img/ringToggled2.png';
import ringToggled3 from '../assets/img/ringToggled3.png';

import ringMobile1 from '../assets/img/ringMobile1.png';
import ringMobile2 from '../assets/img/ringMobile2.png';
import ringMobile3 from '../assets/img/ringMobile3.png';
import ringToggledMobile1 from '../assets/img/ringToggledMobile1.png';
import ringToggledMobile2 from '../assets/img/ringToggledMobile2.png';
import ringToggledMobile3 from '../assets/img/ringToggledMobile3.png';

import firstHouseImg from '../assets/img/infoImages/1stHouse.png';
import secondHouseImg from '../assets/img/infoImages/2ndHouse.png';
import thirdHouseImg from '../assets/img/infoImages/3rdHouse.png';
import fourthHouseImg from '../assets/img/infoImages/4thHouse.png';
import fifthHouseImg from '../assets/img/infoImages/5thHouse.png';
import sixthHouseImg from '../assets/img/infoImages/6thHouse.png';
import seventhHouseImg from '../assets/img/infoImages/7thHouse.png';
import eigthHouseImg from '../assets/img/infoImages/8thHouse.png';
import ninthHouseImg from '../assets/img/infoImages/9thHouse.png';
import tenthHouseImg from '../assets/img/infoImages/10thHouse.png';
import eleventhHouseImg from '../assets/img/infoImages/11thHouse.png';
import twelfthHouseImg from '../assets/img/infoImages/12thHouse.png';
import aquariusImg from '../assets/img/infoImages/aquarius.png';
import ariesImg from '../assets/img/infoImages/aries.png';
import taurusImg from '../assets/img/infoImages/taurus.png';
import geminiImg from '../assets/img/infoImages/gemini.png';
import cancerImg from '../assets/img/infoImages/cancer.png';
import leoImg from '../assets/img/infoImages/leo.png';
import virgoImg from '../assets/img/infoImages/virgo.png';
import libraImg from '../assets/img/infoImages/libra.png';
import scorpioImg from '../assets/img/infoImages/scorpio.png';
import sagittariusImg from '../assets/img/infoImages/sagittarius.png';
import capricornImg from '../assets/img/infoImages/capricorn.png';
import piscesImg from '../assets/img/infoImages/pisces.png';
import ascendantImg from '../assets/img/infoImages/ascendant.png';
import sunImg from '../assets/img/infoImages/sun.png';
import moonImg from '../assets/img/infoImages/moon.png';
import mercuryImg from '../assets/img/infoImages/mercury.png';
import venusImg from '../assets/img/infoImages/venus.png';
import marsImg from '../assets/img/infoImages/mars.png';
import jupiterImg from '../assets/img/infoImages/jupiter.png';
import saturnImg from '../assets/img/infoImages/saturn.png';
import uranusImg from '../assets/img/infoImages/uranus.png';
import neptuneImg from '../assets/img/infoImages/neptune.png';
import plutoImg from '../assets/img/infoImages/pluto.png';
import northNodeImg from '../assets/img/infoImages/northNode.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faTimesCircle,
  faCompass,
  faCode,
  faCodeBranch,
  faArchive,
  faExternalLinkAlt,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

import Controls from './controls'
import RingInfo from './ringInfo'
import RingInfoClick from './ringInfo2'


class Knob4 extends Component {

  state = {
    mobile: false,
    ringSizes: [0,300,450,645],
    ring1Size: 330,
    ring2Size: 530,
    ring3Size: 730,
    rings: [1,2,3],
    selectedRing: 1,
    selectedRingName: 'planet',
    toggledRing: '',
    rot1: 360,
    rot2: 360,
    rot3: 360,
    currentRot: null,
    canvasClass1: 'canvas1',
    canvasClass2: 'canvas2',
    canvasClass3: 'canvas3',
    planet: null,
    sign: null,
    house: null,
    planetArray: [
      {value: 'empty', img: '', desc: '......'},
      {value: 'ascendant', img: ascendantImg, desc: '...The Ascendant defines, in part, the first impression we make on others in a personal rather than professional sense. It represents our physical appearance, our physical bodies and overall health, and the body ego. It is our natural and personal defense mechanisms that we use to adapt to, and cope with, our environment...'},
      {value: 'sun', img: sunImg, desc: '...Represents: Our identity, our ego, and what we strive to be In the chart, the position of the Sun by zodiac sign represents the native’s life purpose and the style in which they leave their mark in the world. Rules the sign of Leo. Exalted in Aries, in its detriment in Aquarius, and in its fall in Libra...'},
      {value: 'moon', img: moonImg, desc: '...In the natal chart, the position of the Moon by sign shows how we emote and respond to our environment, as well as our instinctual habits, especially in our homes and in private. How do we instinctively react or respond to problems? What do we feel we need for a sense of security?...'},
      {value: 'mercury', img: mercuryImg, desc: '...Mercury’s action is to take things apart and put them back together again. look to Mercury in the chart to reveal how individuals get their point across, how they study, and how they process information. Mercury by sign shows an individual’s style of communication...'},
      {value: 'venus', img: venusImg, desc: '...We look to Venus in the natal chart to see how we approach relationships of the heart, as well as what gives us pleasure. Venus rules attachments to others. It rules attractiveness–both the ability to attract and attraction to others (and things)...'},
      {value: 'mars', img: marsImg, desc: '...Mars rules our animal instincts for aggression, anger, and survival. Our sexual desires come under the rule of Mars. Mars is the push that gets us out of bed in the morning, our drive and desire nature, and our active energy. In the chart, the position of Mars by sign shows our basic sexual nature, how we express our anger (our temper), what makes us angry, and our first instinct to act...'},
      {value: 'jupiter', img: jupiterImg, desc: '...Jupiter has generally been associated with good luck and bounty. Optimism and growth (including mental and spiritual growth) come under its rule. In the chart, the position of Jupiter by sign reveals how we express our generosity and tolerance. It shows how we go about trusting others and improving our lives. Where do we look for wisdom and understanding...'},
      {value: 'saturn', img: saturnImg, desc: '...Saturn is often associated with our fathers or father/authority figures. In the chart, the position of Saturn by sign and house reveals our own limitations, fears, and sense of responsibility. Saturn brings definition, and often limitation, to the planets it aspects...'},
      {value: 'uranus', img: uranusImg, desc: '...The position of Uranus shows where individuals look to stir things up, put a new spin on situations, and go against established thought or order.Uranus aspecting other planets in the chart color those energies with some willfulness, quirkiness, and originality. Where we find Uranus in the chart is where we see some refusal to blend in with others (and situations), and some erratic life patterns....'},
      {value: 'neptune', img: neptuneImg, desc: '...By house, Neptune’s position shows where intuition, dreams, and psychic sensitivity come into play. Natives may be able to rise above the demands of the ego in the areas of Neptune’s influence...'},
      {value: 'pluto', img: plutoImg, desc: '...In the chart, the position of Pluto by sign will be shared with other people in the same generation due to the comparatively slow movement of Pluto, the outermost planet, in the heavens. By house, the position of Pluto shows where individuals search for truths and deeper meaning. This area of life may be associated with change, upheaval, power struggles, and issues of control...'},
      {value: 'north node', img: northNodeImg, desc: '...The Nodes of the Moon represent points of personal karmic imbalance. The North Node represents the kinds of experiences that we must work to develop in order to work with our karma and to grow spiritually. The South Node represents those experiences and qualities that come naturally to us, that are over-developed, and that we tend to fall back on....'},
    ],
    signArray: [
      {value: 'empty', img: '', desc: '......'},
      {value: 'aries', img: ariesImg, desc: `...Aries is Cardinal Fire, and the first sign of the zodiac. It’s the sign of action, new beginnings, and initiative. It likes to plunge right into things without planning. The Aries sign is high energy. The birth chart house with Aries on the cusp is where you’ll tend to be active, energetic, and take initiative. Aries is the archetype of the warrior. Planets in Aries will be highly charged, expressing themselves strongly in your life...`},
      {value: 'taurus', img: taurusImg, desc: `...Taurus is a practical sign, and will not make a move unless it is assured that the person, situation, or relationship will be of use. It is sensual, perceiving through the physical senses, mostly touch. But the need for security extends to emotional security. Like a bull, Taurus plods along, dull, apathetic, and slow to anger, but once provoked, it can be cruel and malicious. Taurus is methodical and resistant to change...`},
      {value: 'gemini', img: geminiImg, desc: `...The Gemini sign is mutable air, flitting about from place to place. Gemini has expert speaking and writing skills, able to charm the uncharmable. It captures its environment, responds immediately, and moves to a new environment. Gemini is the sign of networking and communications, gathering bits of information here and there and spreading them to others who can benefit from them...`},
      {value: 'cancer', img: cancerImg, desc: `...The Cancer sign is cardinal water. As such, it is something of a contradiction. As a cardinal zodiac sign, Cancer is assertive, a self-starter, and a "go-getter." These qualities are good for business. As water, Cancer is intuitive, feeling, and nurturing. These qualities are traditionally good for being a homemaker, among other things...`},
      {value: 'leo', img: leoImg, desc: `...The Leo sign is the fixed one of the fire signs. It is forceful, magnetic, generous, and impulsive. It has a strong and ardent love nature. Leo is moved through the heart rather than through reason. Like the lion, Leo is commanding, resolute, courageous, and high-spirited, sometimes boastfully asserting his superiority. Leo's warmth and kindness is of the type which a good king has towards its subjects. Leo is a loyal friend or a noble enemy...`},
      {value: 'virgo', img: virgoImg, desc: `...The Virgo sign is mutable Earth. It is critical, discriminating, fastidious about food, alert, inquisitive, ingenious, studious, industrious, smart, neat and orderly. Virgo is characterized by spontaneous helpfulness, humility, and a need to serve. Virgo works meticulously and efficiently, continually refining its efforts and skills to develop technique leading to mastery within a chosen field...`},
      {value: 'libra', img: libraImg, desc: `...The Libra sign is cardinal air. It is intuitive, perceptive (ability to see both sides of any situation), impartial, just, fair, harmonious, amiable and diplomatic. Libra is always comparing and reasoning. Because of this, Libra seeks a balanced exchange in one-on-one partnerships and marriage, and seeks harmony in groups. Thanks to its ruling planet, Venus, Libra has finesse. Libra uses diplomacy and tact to make social efforts effective...`},
      {value: 'scorpio', img: scorpioImg, desc: `...The Scorpio sign is fixed water. It is a potent, powerful sign, characterized by an ardent love nature, tremendous staying power, intense emotions, compulsive desires, secrecy, and stinging revenge. Scorpio is extremely loyal with loved ones, but when hurt, it becomes self-centered ever ready with stinging sarcasm. Scorpio is industrious, strong willed, and self-assertive, while silent, subtle, tricky...`},
      {value: 'sagittarius', img: sagittariusImg, desc: `...Sagittarians are very restless. They are visionaries, and they need to seek out new horizons. Whatever life throws at them, they go around with a bold and optimistic attitude. To them, life is a trip full of adventures. They are positive and enthusiastic, and many times fortune smiles at them. When faced with the whims of destiny, they always react with generosity, tolerance and joy...`},
      {value: 'capricorn', img: capricornImg, desc: `...Capricorn are ambitious, aspiring to reach the very top. They carefully plan the climb to the top and work tirelessly until they get what they want. They proceed at a regular pace and cling to their goals with determination and tenacity. As soon as they conquer a goal with success, instead of getting comfortable, they continue scanning the horizon in search of new goals...`},
      {value: 'aquarius', img: aquariusImg, desc: `...Aquarians have a strong and independent personality that encourages them to rebel against conventional and restrictive attitudes. They are bright and restless and have an open character. Idealists and innovators, they always have an original point of view. Fascinated by the idea of a global village, Aquarius finds it difficult to adopt a single point of view. When they feel restricted, they rebel immediately...`},
      {value: 'pisces', img: piscesImg, desc: `...Dreamers, sensitive and intuitive, Pisces are an endless wellspring of contradictory emotions. They retreat into the world of feelings. They have a fickle character that drifts, dragged by its internal tides. They have an overflowing imagination that sometimes prevents them from distinguishing fantasy from reality. Pisceans need time to get to know themselves thoroughly...`},
    ],
    houseArray: [
      {value:'empty', img: '', desc: '.......'},
      {value:'1st', img: firstHouseImg, desc: `....The first House is the House of self. This includes self-awareness, the physical body, personality, appearance, personal views on life, self-identity, self-image, early environment, and beginnings; how we initiate, how we're impulsive...`},
      {value:'2nd', img: secondHouseImg, desc: `...The second House refers to your own money and possessions, what you value, your hidden talents, sense of self-worth, self-esteem. The 2nd house specifies how you gain and spend your own money, your attitude towards wealth and material possessions, and your potential for accumulating it/them...`},
      {value:'3rd', img: thirdHouseImg, desc: `...The third House is that of communication, which by extension includes one's immediate environment: siblings, neighbors, short journeys, and all forms of transportation. The 3rd house also includes the intellect, the lower mind, thinking patterns, and early education. Communication includes messages, deliveries, gossip, phone calls, visits, reading and writing ...`},
      {value:'4th', img: fourthHouseImg, desc: `...The fourth House refers to the home and everything associated with it (both the childhood home & the current home):  family, land, personal foundations (inner emotional security), your roots. Any planets in the 4th house affect your home life, your emotions, your subconscious, and possibly your relationship with your parents...`},
      {value:'5th', img: fifthHouseImg, desc: `...The fifth House refers to children, creativity, and the pursuit of pleasure. This includes personal interests, love affairs, sports, hobbies, speculation, risk-taking, teaching, drama, creative self-expression, love given, gambling.  Romance, dating, love affairs, and sexual relationships are ruled by this house...`},
      {value:'6th', img: sixthHouseImg, desc: `...The sixth House refers to daily work, service, diet, health and physical sickness, physical ability to work, employees. This includes volunteer labor, civil service work, caretaking, and mundane daily tasks. The 6th house really involves the quality of your work, the quality of the jobs you perform, as opposed to an actual career....`},
      {value:'7th', img: seventhHouseImg, desc: `...The seventh House is sometimes referred to as the House of marriage, but it encompasses all one-to-one relationships: marriage, business partnerships, contracts, cooperative relationships, and also divorce, separation, quarrels, open enemies, and law suits. The 7th house includes the way you relate to those closest to you. Planets in this house will influence your manner of relating...`},
      {value:'8th', img: eigthHouseImg, desc: `...The 8th house rules what a relationship owns (joint finances). This House governs death, regeneration, taxes, inheritances, wills & legacies, sex (the actual act of sex), latent occult ability, joint resources, your partner’s money and possessions, spouse's money, bankruptcy, losses, personal sacrifices, alimony, clairvoyance....`},
      {value:'9th', img: ninthHouseImg, desc: `... The ninth House refers to philosophy, religion, law, learning, higher education (as opposed to early education by the 3rd House), ethics, morals, long journeys, travel, foreign countries and interests, spiritual urges, dreams, visions, higher mind, ideas, understanding and wisdom, books, publishing, ceremonies, and rituals. This is the House of big thoughts and big ideas...`},
      {value:'10th', img: tenthHouseImg, desc: `...The tenth House is the House of status, honor, community power, prestige, reputation, and professional career. This house includes social foundations (as opposed to personal home foundations in the 4th), recognition, personal achievements, social responsibilities, sense of duty, authority figures, politicians. This House encompasses the most public areas of one's life, and the career that you grow into...`},
      {value:'11th', img: eleventhHouseImg, desc: `...The eleventh House is the House of community, large groups, and friends. It refers to memberships, hopes, goals, ambitions, wishes, social groups, associations, humanitarian interests. It also refers to self-realization, liberty, legislation and regulation...`},
      {value:'12th', img: twelfthHouseImg, desc: `...The twelfth House refers to the subconscious, the hidden self that exists apart from our physical everyday reality. This includes the unconscious mind, subconscious memory, subconscious habit patterns from the past, mental illness, karmic debts, self-deception, escapism, spiritual realization, limitations, frustration, and ultimately our self-undoing...`},
    ],
    ringClickInfo: {
      ring: '',
      coords: {
        x: '',
        y: '',
      },
      target: '',
      img: '',
      desc: '',
    },
    clickInfoState: true,
    ringInfoState: true,
    planetInterpArray: [
      {planet: 'ascendant', words: ['appearnace','body','life approach','first impression','appearance to others','world view','early life','entry point'] },
      {planet: 'sun', words: ['attitude to Life', 'authority', 'confidence', 'consciousness', 'creative energy', 'creative self-expression', 'creative potential', 'creativity', 'ego', 'father', 'gold', 'heart', 'hope', 'individuality', 'life force', 'male role models', 'masculine side of self', 'personal identity', 'physical vitality', 'potential', 'power', 'ʀᴇᴄᴏɢɴɪᴛɪᴏɴ', 'sᴇʟғ-ᴇxᴘʀᴇssɪᴏɴ', 'sᴇʟғ-ɪɴᴛᴇɢʀᴀᴛɪᴏɴ', 'sᴇɴsᴇ ᴏғ sᴇʟғ', 'ᴠɪᴛᴀʟɪᴛʏ', 'well-being'] },
      {planet: 'moon', words: ['ancestral inheritance', 'belonging', 'body', 'breasts', 'childhood', 'conditioning', 'cycles', 'emotions', 'emotional response', 'eternal feminine', 'family', 'feelings', 'female role models', 'feminine side of self', 'food', 'fluctuation', 'habits', 'heritage', 'home', 'instincts', 'maternal instincts', 'memory', 'moods', 'mother', 'nourishment', 'nuturing', 'passivity', 'past', 'receptivity', 'reflection', 'responsiveness', 'roots', 'safety', 'security', 'silver', 'stomach', 'subconscious', 'survival instincts', 'tides', 'unconscious response'] },
      {planet: 'mercury', words: ['agile', 'brain', 'communication', 'coordination', 'cunning', 'dexterous', 'eloquence', 'expressive', 'flexibility', 'gossip', 'guile', 'information', 'intellect', 'internet', 'intuition', 'knowledge', 'learning', 'logic', 'memory', 'messenger', 'mind', 'nervous system', 'perception', 'rationality', 'reactivity', 'reason', 'respiration', 'speech', 'thinking', 'thought process', 'transport', 'travel', 'trickster', 'wit', 'writing', 'youthfulness'] },
      {planet: 'venus', words: ['adaptation', 'aesthetic tastes', 'affections', 'arts', 'attraction', 'attractiveness', 'beauty', 'charm', 'closeness', 'compromise', 'connection', 'emotional life', 'enjoyment', 'eroticism', 'female archetype', 'femininity', 'finances', 'glamour', 'happiness', 'harmony', 'hedonism', 'intimacy', 'love', 'money', 'pleasure', 'relationships', 'seduction', 'self-worth', 'sensuality', 'femail sexuality', 'social ease', 'sociability', 'vanity', 'voluptuous'] },
      {planet: 'mars', words: ['action', 'aggression', 'anger', 'animal instincts', 'animus', 'assertiveness', 'competence', 'competitive', 'conquest', 'courage', 'drive', 'dynamic', 'force', 'goal oriented', 'heat', 'impatient', 'impulsiveness', 'initiative', 'libido', 'lust', 'machismo', 'male archetype', 'masculinity', 'passion', 'potency', 'rage', 'self-preservation', 'sex drive', 'male sexuality', 'strength', 'temper', 'violence', 'virility', 'willfulness', 'willpower'] },
      {planet: 'jupiter', words: ['abundance', 'aspirations', 'belief system', 'chance', 'cheerful', 'conceit', 'creative visualization', 'education', 'excess', 'expansiveness', 'extravagance', 'faith', 'fortune', 'future', 'gambling', 'generosity', 'grace', 'growth', 'higher learning', 'higher mind', 'hope', 'inflation', 'jovial', 'lergesse', 'lawlessness', 'luck', 'magnanimous', 'new horizons', 'optimism', 'opulence', 'philosophy', 'religion', 'ritual', 'seeker', 'self-improvement', 'study', 'success', 'travel', 'trust', 'truth', 'wastage', 'wealth', 'wisdom'] },
      {planet: 'saturn', words: ['ambition', 'authority figures', 'boundaries', 'career', 'caution', 'coldness', 'conservation', 'consolidation', 'contraction', 'control', 'cynicism', 'defensiveness', 'denial', 'destiny', 'discipline', 'duty', 'effort', 'excellence', 'fear', 'inhibition', 'job', 'karma', 'law and order', 'limiting', 'long-term plans', 'mastery', 'material security', 'old age', 'organization', 'patience', 'practicality', 'prudence', 'reality check', 'reliability', 'resilience', 'responsibility', 'self-restriction', 'seriousness', 'shadow', 'status', 'status quo', 'strength', 'structure', 'thrift', 'vocation', 'work'] },
      {planet: 'uranus', words: ['breakdown', 'breakthrough', 'change', 'chaos', 'creativity', 'desire for change', 'detachment', 'deviance', 'eccentric', 'electricity', 'excitement', 'experimentation', 'extremism', 'fellowship', 'freedom', 'future expectations', 'genius', 'higher mind', 'humanity', 'impatience', 'independence', 'individuality', 'innovation', 'inspiration', 'intuition', 'inventive', 'liberation', 'noncomformity', 'originality', 'outsider', 'rebelliousness', 'restlessness', 'revolutionary', 'science', 'social awareness', 'sudden change', 'technology', 'truthfulness', 'unexpected', 'unorthodox', 'unpredictable', 'upheaval'] },
      {planet: 'neptune', words: ['addiction', 'anxiety', 'compassion', 'confusion', 'deception', 'disillusionment', 'disintegration', 'dreams', 'ecstasy', 'elusive', 'enlightenment', 'escapism', 'fantasy', 'fascination', 'glamour', 'guilt', 'ideals', 'illusions', 'imagination', 'impressionable', 'inspiration', 'intangible', 'madness', 'martyr complex', 'mysticism', 'nebulousness', 'oneness', 'psychic sensetivity', 'sacrifice', 'self-sacrifice', 'sensetivity', 'spiritual values', 'subtlety', 'transcendence', 'uncertainty', 'universal love', 'visionary', 'weak boundaries'] },
      {planet: 'pluto', words: ['abuse', 'birth-death-rebirth', 'collective shadow', 'collective unconscious', 'compulsions', 'dark drives', 'death', 'decay', 'destruction', 'elimination', 'empowerment', 'endings', 'envy', 'evolution', 'fanaticism', 'fearlessness', 'hidden gifts', 'jealousy', 'manipulation', 'misuse of power', 'obsession', 'psychoanalysis', 'radical change', 'regeneration', 'relentless', 'renewal', 'repressed feelings', 'resentment', 'sex', 'subtelty', 'subversion', 'survival instinct', 'sustainability', 'taboos', 'transformation', 'transmutation', 'unconscious mind', 'underworld', 'violent', 'volcanic'] },
      {planet: 'north node', words: ['karmic imbalance', 'destiny', 'past life lessons', 'fate', 'necessary learning', 'unfinished business', 'fear of self', 'lifelong challenge', 'leaving comfort zone'] },
    ],
    signInterpArray: [
      {sign: 'aries', words: ['child-like', 'fast-paced', 'impatient', 'fearless', 'exciting', 'natural', 'temperamental', 'active', 'fun-loving', 'enthusiastic', 'self-involved', 'adventurous', 'inconsiderate', 'lively']},
      {sign: 'taurus', words: ['slow-paced', 'teacher', 'thoughtful', 'five senses', 'material', 'pleasure', 'sensuality', 'beauty', 'stubborn', 'self-indulgent', 'lazy', 'relaxed', 'possessive', 'patient', 'persistent']},
      {sign: 'gemini', words: ['witty', 'quick', 'fast-paced', 'irritable', 'easily bored', 'excitable', 'chaotic', 'multi-faceted', 'versatile', 'adjustable', 'inconsistent', 'unfocused', 'nervous']},
      {sign: 'cancer', words: ['moody', 'sensitive', 'empathic', 'nurturing', 'caring', 'fun-loving', 'spontaneous', 'creative', 'protective', 'clingy', 'needy', 'manipulative', 'complaining']},
      {sign: 'leo', words: ['arrogant', 'vibrant', 'enthusiastic', 'humourous', 'melodramatic', 'vain', 'fun', 'big-hearted', 'generous', 'brave', 'loyal', 'egoistic', 'thin-skinned', 'dominating', 'impatient']},
      {sign: 'virgo', words: ['critical', 'careful', 'thoughtful', 'mentally active', 'meticulous', 'anaylsing', 'reliable', 'modest', 'fussy', 'harsh', 'judgemental', 'caring', 'zany', 'humanitarian']},
      {sign: 'libra', words: ['fairness', 'manners', 'tactful', 'romantic', 'diplomatic', 'peaceful', 'mediating', 'passive', 'judgmental', 'superficial', 'unreliable', 'detached', 'laid back', 'charming', 'self-absorbed', 'humourous']},
      {sign: 'scorpio', words: ['brave', 'focused', 'obsessive', 'controlling', 'power', 'intuitive', 'balanced', 'strong', 'jealous', 'manipulative', 'secretive', 'mysterious', 'resentful']},
      {sign: 'sagittarius', words: ['sanguine', 'friendly', 'philosophical', 'superficial', 'all-knowing', 'inconsistent', 'big-hearted', 'moral', 'generous', 'courageous', 'impatient', 'judgemental', 'relaxed yet rigid']},
      {sign: 'capricorn', words: ['hardworking', 'practical', 'reliable', 'disciplined', 'sensible', 'mature', 'unimaginative', 'robotic', 'patient', 'ambitious', 'cautious', 'pessimistic', 'calculating', 'shy', 'self-centred', 'stubborn', 'moody', 'detached']},
      {sign: 'aquarius', words: ['humanitarian', 'friendly', 'socially conscious', 'universally oriented', 'detached', 'interpersonally unaware', 'sarcastic', 'witty', 'affectionate', 'aloof', 'progressive', 'rebellious', 'individualistic', 'zany']},
      {sign: 'pisces', words: ['vulnerable', 'brave', 'emotional', 'sensitive', 'empathic', 'sympathetic', 'imaginative', 'devoted', 'sacrificing', 'escapist', 'accepting', 'adaptable', 'compassionate', 'self-pitying', 'lazy', 'weak-willed']},
    ],
    houseInterpArray: [
      {house: '1st', words: ['self', 'appearnaces', 'beginnings', 'the body', '1st impressions', 'attitude', 'identity', 'approach to life']},
      {house: '2nd', words: ['money', 'work', 'income', 'daily routine', 'values', 'material possesion', 'habits', 'job', 'work ethic']},
      {house: '3rd', words: ['mind', 'thinking', 'communication', 'siblings', 'social activity', 'travel', 'neighbors', 'early education', 'money']},
      {house: '4th', words: ['home', 'roots', 'family', 'self-care', 'emotions', 'foundations', 'mother', 'children', 'women', 'femininity']},
      {house: '5th', words: ['romance', 'love', 'affairs', 'play', 'creativity', 'fertility', 'child-like spirit', 'joy', 'self-expression', 'drama']},
      {house: '6th', words: ['health', 'fitness', 'systems', 'analytical nature', 'pets', 'work habits', 'organization', 'sense of usefullness', 'service given']},
      {house: '7th', words: ['relationships', 'marriage', 'contracts', 'business partners', 'equality', 'sharing', 'interpersonal style', 'socialization', 'other people' ]},
      {house: '8th', words: ['merging', 'sex', 'imtimacy', 'shared finances', 'inheritances', 'taxes', 'loans, assets', 'joint ventures', 'mystery', "partner's resources"]},
      {house: '9th', words: ['travel', 'wisdom', 'philosophy', 'higher education', 'law & religion', 'cross-cultural relations', 'learning', 'ethics']},
      {house: '10th', words: ['career', 'long-term goals', 'structure', 'status', 'reputation', 'public image', 'masculinity', 'men', 'fathers', 'experts', 'fame']},
      {house: '11th', words: ['groups', 'friends', 'social awareness', 'humanitarianism', 'technology', 'hopes for the future', 'rebellion', 'memberships', 'large groups' ]},
      {house: '12th', words: ['endings', 'healing', 'closure', 'spirituality', 'solitude', 'karma',' old age', 'afterlife', 'the hidden', 'limiting beliefs', 'subconsciousness']},
    ],
    planetCoordArray: [
      {coords: {x: 156,y: 41}, position: 12, mobileCoords: {x: 80, y: 19}},
      {coords: {x: 102,y: 56.5}, position: 1, mobileCoords: {x: 48, y: 27}},
      {coords: {x: 55,y: 100}, position: 2, mobileCoords: {x: 25, y: 50}},
      {coords: {x: 38,y: 159}, position: 3, mobileCoords: {x: 17, y: 81}},
      {coords: {x: 57,y: 214}, position: 4, mobileCoords: {x: 28 , y: 111}},
      {coords: {x: 100,y: 258}, position: 5, mobileCoords: {x: 50, y: 133}},
      {coords: {x: 157,y: 272}, position: 6, mobileCoords: {x: 81, y: 140}},
      {coords: {x: 213,y: 259}, position: 7, mobileCoords: {x: 110, y: 134}},
      {coords: {x: 254,y: 219}, position: 8, mobileCoords: {x: 133, y: 112}},
      {coords: {x: 273,y: 160}, position: 9, mobileCoords: {x: 142, y: 81}},
      {coords: {x: 256,y: 99}, position: 10, mobileCoords: {x: 133, y: 52}},
      {coords: {x: 219,y: 57}, position: 11, mobileCoords: {x: 112, y: 28}},
    ],
    signCoordArray: [
      {coords: {x: 129,y: 70}, position: 1, mobileCoords: {x: 66, y: 38}},
      {coords: {x: 58,y: 144}, position: 2, mobileCoords: {x: 31, y: 75}},
      {coords: {x: 36,y: 233}, position: 3, mobileCoords: {x: 21, y: 120}},
      {coords: {x: 66,y: 328}, position: 4, mobileCoords: {x: 36, y: 166}},
      {coords: {x: 128,y: 390}, position: 5, mobileCoords: {x: 66, y: 198}},
      {coords: {x: 224,y: 412}, position: 6, mobileCoords: {x: 112, y: 207}},
      {coords: {x: 316,y: 385}, position: 7, mobileCoords: {x: 158, y: 193}},
      {coords: {x: 384,y: 324}, position: 8, mobileCoords: {x: 190, y: 163}},
      {coords: {x: 411,y: 240}, position: 9, mobileCoords: {x: 204, y: 112}},
      {coords: {x: 388,y: 140}, position: 10, mobileCoords: {x: 193, y: 84}},
      {coords: {x: 321,y: 67}, position: 11, mobileCoords: {x: 161, y: 38}},
      {coords: {x: 225,y: 40}, position: 12, mobileCoords: {x: 113, y: 25}},
    ],
    houseCoordArray: [
      {coords: {x: 183,y: 98}, position: 1, mobileCoords: {x: 115, y: 77}},
      {coords: {x: 82,y: 202}, position: 2, mobileCoords: {x: 66, y: 125}},
      {coords: {x: 52,y: 334}, position: 3, mobileCoords: {x: 51, y: 190}},
      {coords: {x: 98,y: 477}, position: 4, mobileCoords: {x: 73, y: 251}},
      {coords: {x: 192,y: 565}, position: 5, mobileCoords: {x: 121, y: 298}},
      {coords: {x: 321,y: 590}, position: 6, mobileCoords: {x: 180, y: 309}},
      {coords: {x: 449,y: 565}, position: 7, mobileCoords: {x: 242, y: 301}},
      {coords: {x: 550,y: 471}, position: 8, mobileCoords: {x: 289, y: 255}},
      {coords: {x: 589,y: 333}, position: 9, mobileCoords: {x: 210, y: 188}},
      {coords: {x: 561,y: 194}, position: 10, mobileCoords: {x: 297, y: 122}},
      {coords: {x: 461,y: 100}, position: 11, mobileCoords: {x: 250, y: 72}},
      {coords: {x: 321,y: 52}, position: 12, mobileCoords: {x: 182, y: 54}},
    ],
    switch: false,
  }
  // added combined arrays eg [{sign: 'x',planet:'y',phrases:['xyx']}] ???


  constructor(props) {
    super(props);
    this.rot = this.state.rot;
    this.canvasRef1 = React.createRef();
    this.canvasRef2 = React.createRef();
    this.canvasRef3 = React.createRef();
    this.canvasRefMobile1 = React.createRef();
    this.canvasRefMobile2 = React.createRef();
    this.canvasRefMobile3 = React.createRef();
    this.selectedRing = 1;
    this.planet = 'north nodex';
    this.sign = 'pisces';
    this.house = '12th';
    this.interpretation = {
      planet: {state: false, interp: ''},
      sign: {state: false, interp: ''},
      house: {state: false, interp: ''},
    };
    this.rot1 = 360;
    this.rot2 = 360;
    this.rot3 = 360;
    this.clickInfoState = false;
    this.ringClickInfo = {
      ring: '',
      coords: {
        x: '',
        y: '',
      },
      target: '',
      img: 'empty',
      desc: '',
    };
    this.activeRings = [1,2,3];
    this.mobile = false;
    this.ring1Size =
    this.ring1Size = 300;
    this.ring2Size = 450;
    this.ring3Size = 645;
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    console.log('window dimensions:', window.innerWidth, window.innerHeight);
    let mobile = false;
    if (window.innerWidth < 750) {
      this.mobile = true;
      mobile = true;
    }
    document.addEventListener("keypress", e => {
      console.log('gotcha',e.key);
      // this.canvasListeners();
    });

    this.setState({
      currentRot: 0,
    })

    this.resetHighlights();

    const canvas1 = this.canvasRef1.current;
    const canvas2 = this.canvasRef2.current;
    const canvas3 = this.canvasRef3.current;
    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');
    const context3 = canvas3.getContext('2d');
    const img1 = this.refs.image1;
    const img2 = this.refs.image2;
    const img3 = this.refs.image3;
    const imgMobile1 = this.refs.imageMobile1;
    const imgMobile2 = this.refs.imageMobile2;
    const imgMobile3 = this.refs.imageMobile3;

    if (mobile === true) {
      // let elem = document.getElementsByClassName('canvasBox2');
      // elem[0].classList.add('canvasBox2Mobile');

      canvas1.width = 150;
      canvas2.width = 230;
      canvas3.width = 365;
      canvas1.height = 150;
      canvas2.height = 230;
      canvas3.height = 365;

      imgMobile3.onload=function(){
        context1.drawImage(imgMobile1,canvas1.width/2-imgMobile1.width/2,canvas1.height/2-imgMobile1.width/2);
        context2.drawImage(imgMobile2,canvas2.width/2-imgMobile2.width/2,canvas2.height/2-imgMobile2.width/2);
        context3.drawImage(imgMobile3,canvas3.width/2-imgMobile3.width/2,canvas3.height/2-imgMobile3.width/2);
      }
    }

    if (mobile === false) {
      img3.onload=function(){
        context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
        context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
        context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);
      }
    }

    this.checkStats();
    this.canvasListeners()

  }

  init = () => {

    // this.setState({
    //   switch: true
    // })
    console.log('mobile init',this.mobile,this.state.mobile);

    const canvas1 = this.canvasRef1.current;
    const canvas2 = this.canvasRef2.current;
    const canvas3 = this.canvasRef3.current;

    // console.log('1',canvas1.width,'2',canvas2.width,'3',canvas3.width);
    // console.log('1a',this.ring1Size,'2a',this.ring2Size,'3a',this.ring3Size);
    // console.log('1b',this.state.ring1Size,'2b',this.state.ring2Size,'3b',this.state.ring3Size);
    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');
    const context3 = canvas3.getContext('2d');
    context1.clearRect(0, 0, canvas1.width, canvas1.height)
    context2.clearRect(0, 0, canvas2.width, canvas2.height)
    context3.clearRect(0, 0, canvas3.width, canvas3.height)

    // canvas1.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });
    // canvas2.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });
    // canvas3.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });

    if (this.mobile === true) {

      let elem = document.getElementsByClassName('canvasBox2');
      elem[0].classList.add('canvasBox2Mobile');
      canvas1.width = 150;
      canvas2.width = 230;
      canvas3.width = 365;
      canvas1.height = 150;
      canvas2.height = 230;
      canvas3.height = 365;

      const imgMobile1 = this.refs.imageMobile1;
      const imgMobile2 = this.refs.imageMobile2;
      const imgMobile3 = this.refs.imageMobile3;
      // console.log('1',imgMobile1,'2',imgMobile2,'3',imgMobile3);

      // imgMobile3.onload = function(){
        context1.drawImage(imgMobile1,canvas1.width/2-imgMobile1.width/2,canvas1.height/2-imgMobile1.width/2);
        context2.drawImage(imgMobile2,canvas2.width/2-imgMobile2.width/2,canvas2.height/2-imgMobile2.width/2);
        context3.drawImage(imgMobile3,canvas3.width/2-imgMobile3.width/2,canvas3.height/2-imgMobile3.width/2);

      // }

      // this.canvasMobileListeners()
    } else {


      let elem = document.getElementsByClassName('canvasBox2');
      elem[0].classList.remove('canvasBox2Mobile');
      canvas1.width = 300;
      canvas2.width = 450;
      canvas3.width = 645;
      canvas1.height = 300;
      canvas2.height = 450;
      canvas3.height = 645;

      const img1 = this.refs.image1;
      const img2 = this.refs.image2;
      const img3 = this.refs.image3;

      context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
      context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
      context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);

    }

    this.checkStats();
    this.canvasListeners();
    this.resetHighlights();

  }

  canvasListeners = () => {
    console.log('adding canvas listeners');
    let canvas1 = this.canvasRef1.current;
    let canvas2 = this.canvasRef2.current;
    let canvas3 = this.canvasRef3.current;

    canvas1.addEventListener("click", e => {
      // console.log('planet click',e);
        let mousePos = this.getMousePos(canvas1, e);
        console.log('planet ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'planet',
          ringNo: 1,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
        }
        this.setClickInfo(clickInfo);
    });
    canvas2.addEventListener("click", e => {
      // console.log('sign click',e);
        let mousePos = this.getMousePos(canvas2, e);
        console.log('sign ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'sign',
          ringNo: 2,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
        }
        this.setClickInfo(clickInfo);
    });
    canvas3.addEventListener("click", e => {
      // console.log('house click',e);
        let mousePos = this.getMousePos(canvas3, e);
        console.log('house ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'house',
          ringNo: 3,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
        }
        // this.setState({
        this.setClickInfo(clickInfo);
    });

  }

  setClickInfo = (args) => {
    console.log('setting click info');
    this.setState({
      // clickInfoState: false,
      ringClickInfo: {
        ring: '',
        coords: {
          x: '',
          y: '',
        },
        target: '',
        img: 'empty',
        desc: '',
      }
    })
    // this.clickInfoState = false;

    if (args.ring === 'house') {
      // console.log('clickset house');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 30;

      if (this.mobile === true) {
        rad = 15;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {
        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }
    if (args.ring === 'sign') {
      // console.log('clickset sign');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 25;

      if (this.mobile === true) {
        rad = 10;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {
        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }
    if (args.ring === 'planet') {
      // console.log('clickset planet');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 20;

      if (this.mobile === true) {
        rad = 7;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {

        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }

    // this.setState({
    //   clickInfoState: true,
    //   ringClickInfo: args,
    // })
    // this.clickInfoState = true;

    // this.[this.state.selectedRingName]

    // let rect = {x:x1 ,y:y1 ,width: 80,height:50}
    // console.log('rectBound',x>rect.x && x<rect.x+rect.width && y>rect.y && y<rect.y+rect.height);
    // console.log('circBound',this.circlePointCheck(x, y, x3, y3, rad));
  }

  circlePointCheck = (x, y, x3, y3, rad) => {
    let dist_points = (x - x3) * (x - x3) + (y - y3) * (y - y3);
    rad *= rad;
    if (dist_points < rad) {
        return true;
    }
    return false;
  }

  toggleClickInfo = () => {
    if (this.state.clickInfoState === true) {
      this.clickInfoState = false
      this.setState({
        clickInfoState: false
      })
    } else {
      this.clickInfoState = true
      this.setState({
        clickInfoState: true
      })
    }

  }
  toggleRingInfo = () => {
    if (this.state.ringInfoState === true) {
      this.setState({
        ringInfoState: false
      })
    } else {
      this.setState({
        ringInfoState: true
      })
    }

  }

  componentWillUnmount() {

  }

  getMousePos = (canvas, evt) => {
      let rect = canvas.getBoundingClientRect();
      return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
      };
  }

  controlsInput = (args) => {
    console.log('controlsInput');
    if (args.type === 'select') {
      this.selectRing(args.value);
    } else if (args.type === 'rotate') {
      this.rotateRing(args.value)
    } else if (args.type === 'select2') {
      this.selectRing2(args.value)
    }
  }

  selectRing2 = (args) => {
    console.log('selecting ring 2');
    this.selectedRing = args
    this.setState({
      selectedRing: args
    })

    this.resetHighlights();
    this.ringNameUpdate()
  }

  selectRing = (args) => {
    let currentRing = this.state.selectedRing;
    console.log('selecting ring');
    // console.log('1a',this.selectedRing);
    // console.log('2a',this.state.selectedRing);

    if (args === 'next') {
      if ( currentRing === 3 ) {
        currentRing = 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      } else {
        currentRing = currentRing + 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      }

    }

    if (args === 'prev') {
      if ( currentRing === 1 ) {
        currentRing = 3;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      } else {
        currentRing = currentRing - 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      }

    }

    // console.log('1b',this.selectedRing);
    // console.log('2b',this.state.selectedRing);
    this.resetHighlights();
    this.ringNameUpdate()

  }

  ringNameUpdate = () => {
    switch(this.selectedRing) {
       case 1: {
          this.setState({
            selectedRingName: 'planet',
          })
          break;
       }
       case 2: {
          this.setState({
            selectedRingName: 'sign',
          })
          break;
       }
       case 3: {
          this.setState({
            selectedRingName: 'house',
          })
          break;
       }
       default: {
          break;
       }
    }

  }

  resetHighlights = () => {
    // console.log('1c',this.selectedRing);
    // console.log('2c',this.state.selectedRing);

    if (this.selectedRing === 1) {
      this.setState({
        canvasClass1: 'canvas1 borderedRing',
        canvasClass2: 'canvas2',
        canvasClass3: 'canvas3',
      })
    }
    if (this.selectedRing === 2) {
      this.setState({
        canvasClass2: 'canvas2 borderedRing',
        canvasClass1: 'canvas1',
        canvasClass3: 'canvas3',
      })
    }
    if (this.selectedRing === 3) {
      this.setState({
        canvasClass3: 'canvas3 borderedRing',
        canvasClass2: 'canvas2',
        canvasClass1: 'canvas1',
      })
    }

  }

  rotateRing = (args) => {
    console.log('rotating ring');

    if (args === 'right') {
      let newRot;
      if (this.state.selectedRing === 1) {
        newRot = this.state.rot1+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.rot1 = newRot;
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.rot2 = newRot;
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.rot3 = newRot;
        this.setState({
          rot3: newRot,
        })
      }
      this.drawRotated(newRot)
    }

    if (args === 'left') {
      let newRot;
      if (this.state.selectedRing === 1) {
        newRot = this.state.rot1-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.rot1 = newRot;
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.rot2 = newRot;
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.rot3 = newRot;
        this.setState({
          rot3: newRot,
        })
      }
      this.drawRotated(newRot)
    }

    // this.checkStats();
  }

  checkStats = () => {
    console.log('checking stats');

    const rings = [1,2,3];
    for (const elem of rings) {

      let inc = this.['rot'+ elem]/30;
      // console.log(elem,inc);

      switch(elem) {
         case 1: {
           // console.log('planet @',this.state.planetArray[inc].value);
            this.planet = this.state.planetArray[inc].value;

            break;
         }
         case 2: {
           // console.log('sign @',this.state.signArray[inc].value);
            this.sign = this.state.signArray[inc].value;

            break;
         }
         case 3: {
           // console.log('house @',this.state.houseArray[inc].value);
            this.house = this.state.houseArray[inc].value;

            break;
         }
         default: {
            break;
         }
      }

    }

    let toInterpret = [];
    for (const elem of this.activeRings) {
      if (elem === 1) {
        toInterpret.push({type:'planet',value:this.planet})
      }
      if (elem === 2) {
        toInterpret.push({type:'sign',value:this.sign})
      }
      if (elem === 3) {
        toInterpret.push({type:'house',value:this.house})
      }
    }

    // console.log('generate interpretation for ',toInterpret);

    this.generateInterpetation(toInterpret)

  }

  generateInterpetation = (toInterpret) => {

    // check toInterpret for combo descriptions as well as exaltation, detriment and domicile

    let interpretation = [
      {key: 'planet', val: '', values: []},
      {key: 'sign', val: '', values: []},
      {key: 'house', val: '', values: []},
    ]

    let thisInterpretation = {
      planet: {state: false, interp: ''},
      sign: {state: false, interp: ''},
      house: {state: false, interp: ''},
    };
    let thisInterpretation2 = {
      planet: {state: false, interp: {
        a: '',
        b: '',
        c: '',
        d: '',
      }},
      sign: {state: false, interp: {
        a: '',
        b: '',
        c: '',
        d: '',
      }},
      house: {state: false, interp: {
        a: '',
        b: '',
      }},
    };

    for (const elem of toInterpret) {
      if (elem.type === 'planet') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        for (const item of preDictionary) {
          if (item.planet === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'planet') {
                interpElem.val = item.planet;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.planet.state = true;
        thisInterpretation2.planet.state = true;
      }
      if (elem.type === 'sign') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.sign === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'sign') {
                interpElem.val = item.sign;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.sign.state = true;
        thisInterpretation2.sign.state = true;
      }
      if (elem.type === 'house') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.house === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'house') {
                interpElem.val = item.house;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.house.state = true;
        thisInterpretation2.house.state = true;
      }

    }

    console.log('...finalInterpretation...',interpretation);
    if (thisInterpretation.planet.state === true ) {
      thisInterpretation.planet.interp = `Your ${interpretation[0].val}: which represents ${interpretation[0].values[0][0]}, ${interpretation[0].values[0][1]}, ${interpretation[0].values[0][3]}...`;
      thisInterpretation2.planet.interp.a = 'Your ';
      thisInterpretation2.planet.interp.b = ' '+interpretation[0].val+' ';
      thisInterpretation2.planet.interp.c = 'which represents the following aspects of your personality' ;
      thisInterpretation2.planet.interp.d = [interpretation[0].values[0][0],interpretation[0].values[0][1],interpretation[0].values[0][2],interpretation[0].values[0][3],interpretation[0].values[0][4],interpretation[0].values[0][5],interpretation[0].values[0][6]];
    }
    if (thisInterpretation.sign.state === true ) {
      thisInterpretation.sign.interp = `Being in ${interpretation[1].val}: any of the above will be expressed ${interpretation[1].values[0][0]}, ${interpretation[1].values[0][1]}, ${interpretation[1].values[0][3]}...`;
      thisInterpretation2.sign.interp.a = 'Being in ';
      thisInterpretation2.sign.interp.b = ' '+interpretation[1].val+' ';
      thisInterpretation2.sign.interp.c =  ': any of the above will be expressed with the following "flavours" ';
      thisInterpretation2.sign.interp.d = [interpretation[1].values[0][0],interpretation[1].values[0][1],interpretation[1].values[0][2],interpretation[1].values[0][3],interpretation[1].values[0][4],interpretation[1].values[0][5],interpretation[1].values[0][6]];
    }
    if (thisInterpretation.house.state === true ) {
      thisInterpretation.house.interp = `particularly in these areas of life ${interpretation[2].values[0][0]}, ${interpretation[2].values[0][1]}, ${interpretation[2].values[0][3]}...`;
      thisInterpretation2.house.interp.a = ' particularly in these areas of life ';
      thisInterpretation2.house.interp.b = [interpretation[2].values[0][0],interpretation[2].values[0][1],interpretation[2].values[0][2],interpretation[2].values[0][3],interpretation[2].values[0][4],interpretation[2].values[0][5],interpretation[2].values[0][6]];
    }
    // this.interpretation = thisInterpretation;
    this.interpretation = thisInterpretation2;

    // this.interpretation =`
    //   Your ${interpretation[0].val}: which represents ${interpretation[0].values[0][0]}, ${interpretation[0].values[0][1]}, ${interpretation[0].values[0][3]}... \n
    //
    //   Being in ${interpretation[1].val}: has the qualities of ${interpretation[1].values[0][0]}, ${interpretation[1].values[0][1]}, ${interpretation[1].values[0][3]}...
    //
    //   particularly in these areas of life ${interpretation[2].values[0][0]}, ${interpretation[2].values[0][1]}, ${interpretation[2].values[0][3]}...
    // `;

  }

  drawRotated = (degrees) => {
    // console.log('draw',this.state.selectedRing,'draw',degrees);
    // console.log('drawing rotated',degrees,this.state.selectedRing)

    const canvas = this.['canvasRef'+this.state.selectedRing+''].current;
    const context = canvas.getContext('2d');
    let image;
    image = this.refs.['image'+this.state.selectedRing];

    if (this.mobile === true) {
      image = this.refs.['imageMobile'+this.state.selectedRing];
    }

    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate(degrees*Math.PI/180);
    context.drawImage(image,-image.width/2,-image.width/2);
    context.restore();

    this.checkStats();
}

  toggleRing = () => {
  console.log('toggling ring');

  let toToggle = this.selectedRing;
  let index = this.activeRings.indexOf(toToggle)

  if (this.activeRings.includes(toToggle) === true) {
    this.activeRings.splice(index,1)
    this.toggleDraw(toToggle,'remove')
  } else {
    this.activeRings.push(toToggle);
    this.toggleDraw(toToggle,'add')
  }

  this.setState({
    toggledRing: toToggle
  })


  this.checkStats();
}

  toggleDraw = (toToggle,action) => {

  const canvas = this.['canvasRef'+toToggle+''].current;
  const context = canvas.getContext('2d');

  if (action == 'remove') {
    let img;
    if (this.mobile === true ) {
      img = this.refs.['imageTogggledMobile'+toToggle+''];
    } else {
      img = this.refs.['imageTogggled'+toToggle+''];
    }
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }
  if (action == 'add') {
    let img;
    if (this.mobile === true ) {
      img = this.refs.['imageMobile'+toToggle+''];
    } else {
      img = this.refs.['image'+toToggle+''];
    }
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }

}

  toggleMobile = () => {
    if (this.state.mobile === true || this.mobile === true) {
      this.setState({
        mobile: false,
        ring1Size: 300,
        ring2Size: 450,
        ring3Size: 645,
      })
      this.mobile = false;
      this.ring1Size = 300;
      this.ring2Size = 450;
      this.ring3Size = 645;
      this.init()
    } else {
      this.setState({
        mobile: true,
        ring1Size: 150,
        ring2Size: 230,
        ring3Size: 365,
      })
      this.mobile = true;
      this.ring1Size = 150;
      this.ring2Size = 230;
      this.ring3Size = 365;
      this.init()
    }
    // window.location.reload(false);
    // if (this.state.mobile) {
    //   console.log('gooper');
    // }

  }

  render() {

    return (


        <div className="KnobBoxTop">

          <Controls
            controlsInput={this.controlsInput}
            ringToggle={this.toggleRing}
            toggleMobile={this.toggleMobile}
            ringInfoState={this.state.ringInfoState}
            toggleRingInfo={this.toggleRingInfo}
            selectedRing={this.state.selectedRing}
            selectedRingName={this.state.selectedRingName}
          />

          {this.state.ringInfoState === true && (
            <RingInfo
              planet={this.planet}
              sign={this.sign}
              house={this.house}
              interpretation={this.interpretation}
              activeRings={this.activeRings}
              selectedRingName={this.state.selectedRingName}
              toggleRingInfo={this.toggleRingInfo}
            />
          )}


          {this.state.clickInfoState === true && (
            <RingInfoClick
              data={this.state.ringClickInfo}
              toggleClickInfo={this.toggleClickInfo}
              state={this.state.clickInfoState}
            />
          )}


          <div className="canvasBox">
            <div className="pointerBox">

              <FontAwesomeIcon icon={faCaretDown} className="pointerIcon" size="5x"/>
            </div>

            <div className="canvasBox2">
            <canvas
              width="645"
              height="645"
              ref={this.canvasRef3}
              className={this.state.canvasClass3}
            />
            <canvas
              width="450"
              height="450"
              ref={this.canvasRef2}
              className={this.state.canvasClass2}
            />
            <canvas
              width="300"
              height="300"
              ref={this.canvasRef1}
              className={this.state.canvasClass1}
            />
            </div>


            <div className="controlsBox">

              <div>
                <img src={ring1} className='mainKnob' ref="image1" alt="logo" />
                <img src={ring2} className="mainKnob" ref="image2" alt="logo" />
                <img src={ring3} className="mainKnob" ref="image3" alt="logo" />
                <img src={ringToggled1} className='mainKnob' ref="imageTogggled1" alt="logo" />
                <img src={ringToggled2} className="mainKnob" ref="imageTogggled2" alt="logo" />
                <img src={ringToggled3} className="mainKnob" ref="imageTogggled3" alt="logo" />
              </div>


              <div>
                <img src={ringMobile1} className='mainKnob' ref="imageMobile1" alt="logo" />
                <img src={ringMobile2} className="mainKnob" ref="imageMobile2" alt="logo" />
                <img src={ringMobile3} className="mainKnob" ref="imageMobile3" alt="logo" />
                <img src={ringToggledMobile1} className='mainKnob' ref="imageTogggledMobile1" alt="logo" />
                <img src={ringToggledMobile2} className="mainKnob" ref="imageTogggledMobile2" alt="logo" />
                <img src={ringToggledMobile3} className="mainKnob" ref="imageTogggledMobile3" alt="logo" />
              </div>


            </div>

          </div>

        </div>

    )
  }

}

export default Knob4;
