function caesar() {
    const banList = ["кы", "кя", "кё", "кю","гы", "гя", "гё", "гю", "чы", "чя", "чю","шы", "шя", "шю",
                    "аь", "аы", "аъ", "вэ", "гф", "гх", "гъ", "гь", "гэ", "ёъ", "ёь", "ёы", "ёэ", "еъ",
                    "еь", "еы", "еэ", "ёя", "жф", "жх", "жш", "жщ", "зщ", "иь", "иы", "иъ", "йа", "йё",
                    "йж", "ёи", "ёе", "ёё", "ёа", "жй", "зй", "йй", "йь", "йы", "йъ", "йэ", "кй", "кщ",
                    "кь", "къ", "лй", "лъ", "лэ", "мй", "мъ", "нй", "оъ", "оы", "оь", "пв", "пг", "пж",
                    "пз", "пй", "пъ", "ръ", "сй", "тй", "уъ", "уы", "уь", "фб", "фз", "фж", "фй", "фп",
                    "фх", "фц", "фъ", "фэ", "хё", "хж", "хй", "хщ", "хы", "хь", "хю", "хя", "цб", "цё",
                    "цж", "цй", "цф", "цх", "цч", "цщ", "цъ", "ць", "ця", "чб", "чг", "чз", "чй", "чп",
                    "чф", "чщ", "чъ", "чы", "шд", "шж", "шз", "шй", "шш", "шщ", "шъ", "шы", "щб", "щг",
                    "щд", "щж", "щз", "щй", "щп", "щт", "щф", "щх", "щц", "щч", "щш", "щщ", "щъ", "ъа",
                    "ъб", "ъв", "ъг", "ъд", "ъж", "ъз", "ъи", "ъй", "ък", "ъл", "ъм", "ън", "ъо", "ъп",
                    "ър", "ъс", "ът", "ъу", "ъф", "ъх", "ъц", "ъч", "ъш", "ъщ", "ъъ", "ъы", "ъь", "ъэ",
                    "ыа", "ыё", "ыо", "ыф", "ыь", "ыы", "ыъ", "ыэ", "ьа", "ьй", "ьл", "ьу", "ьъ", "ьы",
                    "ьъ", "эа", "эе", "эё", "эц", "эч", "эъ", "эы", "эь", "ээ", "эю", "юу", "юь", "юы",
                    "юь", "яа", "яё", "яо", "яъ", "яы", "яь", "яэ",
                    "жы", "жя", "жю", "хы", "хя", "хё", "хю", "ця", "цё", "цю", "що","щы", "щя", "щю"];
    
    const key = 12;

    function toEncodeText(text) {
        let textResult = '';
        for (i = 0; i < key; i++) {
            let j = i;
            while (j < text.length) {
                textResult += text[j];
                j += key;
            }
        }
        return textResult;
    }

    function toDecodeText(text) {
        let textMatr = [];
        let strokeLen = Math.floor(text.length / key);
        let tail = text.length % key;
        
        let startIndex = 0;

        for (i = 0; i < key; i++) {
            let len = strokeLen;
            if (tail > 0) {
                len ++;
                tail --;
            }
            textMatr.push(text.slice(startIndex, startIndex + len).split(''));
            startIndex += len;
        }
        let resultText = '';
        
        for (let i = 0; i < strokeLen + 1; i++) {
            for (let j = 0; j < key; j++) {
                if (textMatr[j][i]) {
                    resultText += textMatr[j][i];
                }
            }
        }
        return resultText;
    }
    
    function toHackText(text) {
        for (let hackedKey = 2; hackedKey < text.length; hackedKey++) {
            let textMatr = [];
            let strokeLen = Math.floor(text.length / hackedKey);
            let tail = text.length % hackedKey;
            
            let startIndex = 0;

            for (i = 0; i < hackedKey; i++) {
                let len = strokeLen;
                if (tail > 0) {
                    len ++;
                    tail --;
                }
                textMatr.push(text.slice(startIndex, startIndex + len).split(''));
                startIndex += len;
            }
            let resultText = '';
            
            for (let i = 0; i < strokeLen + 1; i++) {
                for (let j = 0; j < hackedKey; j++) {
                    if (textMatr[j][i]) {
                        resultText += textMatr[j][i];
                    }
                }
            }
            let notContainProhibComb = true;
            for (let i = 0; i < resultText.length - 1; i++) {
                if (banList.includes(`${resultText[i]}${resultText[i+1]}`)) {
                    notContainProhibComb = false;
                    break;
                }
            }
            if (notContainProhibComb) {
                return resultText;
            }
        }
    }

    const encodeButton = document.querySelector('#encodeButton');
    const decodeButton = document.querySelector('#decodeButton');
    const hackingButton = document.querySelector('#hackingButton');
    
    const areaOfOrigText = document.querySelector('#originalText');
    const areaOfResultText = document.querySelector('#resultText');
    
    encodeButton.addEventListener('click', () => {
        var origText = areaOfOrigText.value;
        if(origText) {
            const resultText = toEncodeText(origText);
            areaOfResultText.innerHTML = '';
            areaOfResultText.innerHTML = resultText;
        }
    });
    
    decodeButton.addEventListener('click', () => {
        var text = areaOfOrigText.value;
        if(text) {
            const resultText = toDecodeText(text);
            areaOfResultText.innerHTML = '';
            areaOfResultText.innerHTML = resultText;
        }
    });
    
    hackingButton.addEventListener('click', () => {
        var text = areaOfOrigText.value;
        if(text) {
            const resultText = toHackText(text);
            areaOfResultText.innerHTML = '';
            areaOfResultText.innerHTML = resultText;
        }
    })

}

caesar()