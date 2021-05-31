var hiraganaCharacters = {
    'あ' : 'a',
    'い' : 'i',
    'う' : 'u',
    'え' : 'e',
    'お' : 'o',

    'か' : 'ka',
    'き' : 'ki',
    'く' : 'ku',
    'け' : 'ke',
    'こ' : 'ko',

    'が' : 'ga',
    'ぎ' : 'gi',
    'ぐ' : 'gu',
    'げ' : 'ge',
    'ご' : 'go',

    'さ' : 'sa',
    'し' : 'si',
    'す' : 'su',
    'せ' : 'se',
    'そ' : 'so',

    'ざ' : 'za',
    'じ' : 'ji',
    'ず' : 'zu',
    'ぜ' : 'ze',
    'ぞ' : 'zo',

    'た' : 'ta',
    'ち' : 'chi',
    'つ' : 'tsu',
    'て' : 'te',
    'と' : 'to',

    'だ' : 'da',
    'ぢ' : 'dji',
    'づ' : 'dzu',
    'で' : 'de',
    'ど' : 'do',

    'な' : 'na',
    'に' : 'ni',
    'ぬ' : 'nu',
    'ね' : 'ne',
    'の' : 'no',

    'は' : 'ha',
    'ひ' : 'hi',
    'へ' : 'he',
    'ほ' : 'ho',
    'ふ' : 'fu',

    'ば' : 'ba',
    'び' : 'bi',
    'べ' : 'be',
    'ぼ' : 'bo',
    'ぶ' : 'bu',

    'ぱ' : 'pa',
    'ぴ' : 'pi',
    'ぺ' : 'pe',
    'ぽ' : 'po',
    'ぷ' : 'pu',

    'ま' : 'ma',
    'み' : 'mi',
    'め' : 'me',
    'も' : 'mo',
    'む' : 'mu',

    'や' : 'ya',
    'ゆ' : 'yu',
    'よ' : 'yo',

    'ら' : 'ra',
    'り' : 'ri',
    'れ' : 're',
    'ろ' : 'ro',
    'る' : 'ru',

    'わ' : 'wa',
    'ゐ' : 'wi',
    'ゑ' : 'we',
    'を' : 'wo',

    'ん' : 'n'
}
var getRandhiraganaChar = function(){
    hiraganaArray = Object.keys(hiraganaCharacters)
    var randomIndex = Math.floor(Math.random() * hiraganaArray.length)
    var randomChar = hiraganaArray[randomIndex]
    return randomChar
}
var resetTextField = function(){
    document.hiragana.userHiragana.value = ''
}
var resetIncorrect = function(){
    document.getElementById('incorrect').style.opacity = 0
    document.getElementById('incorrect').innerHTML = 'Incorrect'
}

var displayRandomCharacter = function(){
    var randomCharacterContainer = document.getElementById('hiraganaCharContainer')

    randomCharacterContainer.innerHTML = ""
    resetTextField()
    resetIncorrect()
    
    randomCharacterContainer.innerHTML += `${getRandhiraganaChar()}`
}    

document.addEventListener('load', displayRandomCharacter())

document.hiragana.onsubmit = () => {
    // console.log('form submitted')
    resetIncorrect()

    var userCharInput = document.hiragana.userHiragana.value

    if(userCharInput === ''){
        
    }
    else{
        var displayedHiraganaChar = document.getElementById('hiraganaCharContainer').innerHTML
        var correctChar = hiraganaCharacters[displayedHiraganaChar]
        
        if(userCharInput === correctChar){
            displayRandomCharacter()
        }
        else{
            document.getElementById('incorrect').style.opacity = 1
            document.getElementById('incorrect').innerHTML += `. Correct answer: ${correctChar}`
            resetTextField()
        }
    }

    return false
}
