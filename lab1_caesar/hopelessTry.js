// const alfavit = ['о', 'е', 'а', 'и', 'н', 'т', 'с', 'р', 'в', 'л', 'к', 'м', 'д', 'п', 'у', 'я', 'ы', 'ь', 'г', 'з', 'б', 'ч', 'й', 'х', 'ж', 'ш', 'ю', 'ц', 'щ', 'э', 'ф', 'ъ', 'ё'];

// //const key = alfavit.slice(); 
// const key = alfavit.map(letter => [letter]);

// const banList = ["кы", "кя", "кё", "кю","гы", "гя", "гё", "гю", "чы", "чя", "чю","шы", "шя", "шю",
//     "аь", "аы", "аъ", "вэ", "гф", "гх", "гъ", "гь", "гэ", "ёъ", "ёь", "ёы", "ёэ", "еъ",
//     "еь", "еы", "еэ", "ёя", "жф", "жх", "жш", "жщ", "зщ", "иь", "иы", "иъ", "йа", "йё",
//     "йж", "ёи", "ёе", "ёё", "ёа", "жй", "зй", "йй", "йь", "йы", "йъ", "йэ", "кй", "кщ",
//     "кь", "къ", "лй", "лъ", "лэ", "мй", "мъ", "нй", "оъ", "оы", "оь", "пв", "пг", "пж",
//     "пз", "пй", "пъ", "ръ", "сй", "тй", "уъ", "уы", "уь", "фб", "фз", "фж", "фй", "фп",
//     "фх", "фц", "фъ", "фэ", "хё", "хж", "хй", "хщ", "хы", "хь", "хю", "хя", "цб", "цё",
//     "цж", "цй", "цф", "цх", "цч", "цщ", "цъ", "ць", "ця", "чб", "чг", "чз", "чй", "чп",
//     "чф", "чщ", "чъ", "чы", "шд", "шж", "шз", "шй", "шш", "шщ", "шъ", "шы", "щб", "щг",
//     "щд", "щж", "щз", "щй", "щп", "щт", "щф", "щх", "щц", "щч", "щш", "щщ", "щъ", "ъа",
//     "ъб", "ъв", "ъг", "ъд", "ъж", "ъз", "ъи", "ъй", "ък", "ъл", "ъм", "ън", "ъо", "ъп",
//     "ър", "ъс", "ът", "ъу", "ъф", "ъх", "ъц", "ъч", "ъш", "ъщ", "ъъ", "ъы", "ъь", "ъэ",
//     "ыа", "ыё", "ыо", "ыф", "ыь", "ыы", "ыъ", "ыэ", "ьа", "ьй", "ьл", "ьу", "ьъ", "ьы",
//     "ьъ", "эа", "эе", "эё", "эц", "эч", "эъ", "эы", "эь", "ээ", "эю", "юу", "юь", "юы",
//     "юь", "яа", "яё", "яо", "яъ", "яы", "яь", "яэ",
//     "жы", "жя", "жю", "хы", "хя", "хё", "хю", "ця", "цё", "цю", "що","щы", "щя", "щю"];

// // немного за структуру этого чудовища (тут только для пар):
// //  в каждом подмассиве subArr есть два массива subArr[0] и subArr[2] и посередине буква subArr[1]
// // subArr[1] - рассматриваемая буква
// // subArr[0] - список букв, которые могут идти ПЕРЕД рассматриваемой, они в порядке убывания вероятности появления ???? наверное всё таки наоборот
// // subArr[2] - список букв, которые могут идти ПОСЛЕ рассматриваемой, они в порядке убывания вероятности появления
// // ЛАДНО уже не по-порядку
// // const letterCombinations = [
// //     [['л', 'д', 'к', 'т', 'в', 'р', 'н', 'е', 'у', 'б', 'г', 'ж', 'з', 'и', 'м', 'о', 'п', 'с', 'ф', 'х', 'ч', 'ш'], 'а', ['л', 'н', 'с', 'т', 'р', 'в', 'к', 'м', я]],
// //     [['я', 'е', 'у', 'и', 'а', 'о'], 'б', ['о', 'ы', 'е', 'а', 'р', 'у']],
// //     [['я', 'т', 'а', 'е', 'и', 'о'], 'в', ['о', 'а', 'и', 'ы', 'с', 'н', 'л', 'р']],
// //     [['р', 'у', 'а', 'и', 'е', 'о'], 'г', ['о', 'а', 'р', 'л', 'и', 'в']],
// //     [['р', 'я', 'у', 'а', 'и', 'е', 'о'], 'д', ['е', 'а', 'и', 'о', 'н', 'у', 'р', 'в', 'й']],
// //     [['м', 'и', 'л', 'д', 'т', 'р', 'н'], 'е', ['н', 'т', 'р', 'с', 'л', 'в', 'м', 'и']],
// //     [['р', 'е', 'и', 'а', 'у', 'о'], 'ж', ['е', 'и', 'д', 'а', 'н']],
// //     [['о', 'е', 'а', 'и'], 'з', ['а', 'н', 'в', 'о', 'м', 'д']],
// //     [['р', 'т', 'м', 'и', 'о', 'л', 'н'], 'и', ['с', 'н', 'в', 'и', 'е', 'м', 'к', 'з']],
// //     [['ь', 'в', 'е', 'о', 'а', 'и', 'с'], 'к', ['о', 'а', 'и', 'р', 'у', 'т', 'л', 'е']],
// //     [['г', 'в', 'ы', 'и', 'е', 'о', 'а'], 'л', ['и', 'е', 'о', 'а', 'ь', 'я', 'ю', 'у']],
// //     [['я', 'ы', 'а', 'и', 'е', 'о'], 'м', ['и', 'е', 'о', 'у', 'а', 'н', 'п', 'ы']],
// //     [['д', 'ь', 'н', 'о'], 'н', ['о', 'а', 'и', 'е', 'ы', 'н', 'у']],
// //     [['р', 'п', 'к', 'в', 'т', 'н'], 'о', ['в', 'с', 'т', 'р', 'и', 'д', 'н', 'м']],
// //     [['в', 'с', 'у', 'а', 'и', 'е', 'о'], 'п', ['о', 'р', 'е', 'а', 'у', 'и', 'л']],
// //     [['и', 'к', 'т', 'а', 'п', 'о', 'е'], 'р', ['а', 'е', 'о', 'и', 'у', 'я', 'ы', 'н']],
// //     [['с', 'т', 'в', 'а', 'е', 'и', 'о'], 'с', ['т', 'к', 'о', 'я', 'е', 'ь', 'с', 'н']],
// //     [['ч', 'у', 'и', 'а', 'е', 'о', 'с'], 'т', ['о', 'а', 'е', 'и', 'ь', 'в', 'р', 'с']],
// //     [['п', 'т', 'к', 'д', 'н', 'м', 'р'], 'у', ['т', 'п', 'с', 'д', 'н', 'ю', 'ж']],
// //     [['н', 'а', 'е', 'о', 'и'], 'ф', ['и', 'е', 'о', 'а', 'е', 'о', 'а']],
// //     [['у', 'е', 'о', 'а', 'ы', 'и'], 'х', ['о', 'и', 'с', 'н', 'в', 'п', 'р']],
// //     [['е', 'ю', 'н', 'а', 'и'], 'ц', ['и', 'е', 'а', 'ы', 'у']],
// //     [['е', 'а', 'у', 'и', 'о'], 'ч', ['е', 'и', 'т', 'н']],
// //     [['ь', 'у', 'ы', 'е', 'о', 'а', 'и', 'в'], 'ш', ['е', 'и', 'н', 'а', 'о', 'л']],
// //     [['е', 'б', 'а', 'я', 'ю'], 'щ', ['е', 'и', 'а']],
// //     [['м', 'р', 'т', 'с', 'б', 'в', 'н'], 'ы', ['л', 'х', 'е', 'м', 'и', 'в', 'с', 'н']],
// //     [['н', 'с', 'т', 'л', 'в'], 'ь', ['я','н', 'к', 'в', 'п', 'с', 'е', 'о', 'и', 'ю']],
// //     [['з', 'д', 'б', 'т', 'с', 'н', 'в'], 'ъ', ['ю', 'ё', 'е', 'я']]
// //     [['с', 'ы', 'м', 'л', 'д', 'т', 'р', 'н'], 'э', ['н', 'т', 'р', 'с', 'к']],
// //     [['ь', 'о', 'а', 'и', 'л', 'у', 'н'], 'ю', ['д', 'т', 'щ', 'ц', 'н', 'п', 'ю']],
// //     [['о', 'н', 'р', 'л', 'а', 'и', 'с'], 'я', ['в', 'с', 'т', 'п', 'д', 'к', 'м', 'л']]
// // ];


// const popularPairs = [
// 'ст', 'то', 'но', 'на', 'по', 'ен', 'ни', 'ко', 'ра', 'ов', 'не', 'ро', 'пр', 'ал', 'го', 'ре', 'ос', 'ли', 'ка', 'во', 'ер', 'та', 'от', 'ва', 'ор', 'ол',
// 'ет', 'те', 'ом', 'ан', 'ел', 'од', 'ть', 'ла', 'он', 'ле', 'ло', 'ес', 'ат', 'ри', 'ль', 'де', 'ог', 'ве', 'ны', 'ти', 'за', 'ит', 'ск', 'да', 'ак', 'ой',
// 'ин', 'ме', 'ем', 'ил', 'че', 'об', 'ас', 'до', 'мо', 'ки', 'тр', 'ся', 'ед', 'со', 'ми', 'нн', 'се', 'ам', 'ис', 'ав', 'же', 'аз', 'ма', 'им', 'тв', 'ар',
// 'ви', 'ие', 'ру', 'бо', 'сл', 'из', 'вы', 'ди', 'бы', 'ия', 'ик', 'ег', 'пе', 'ив', 'чт', 'вс', 'ей', 'сь', 'ок', 'ьн', 'ое', 'ну', 'си', 'их', 'эт', 'хо',
// 'ад', 'ча', 'ож', 'ая', 'сп', 'ля', 'ев', 'ич', 'му', 'чи', 'ше', 'тс', 'дн', 'ку', 'уд', 'ых', 'са', 'ек', 'бе', 'оч', 'ий', 'па', 'ци', 'кр', 'зн', 'оп',
// 'ае', 'ду', 'ии', 'ще', 'ту', 'ые', 'ый', 'ир', 'ты', 'оз', 'вн', 'ыл', 'ры', 'ят', 'ут', 'тн', 'жи', 'нт', 'ус', 'сс', 'ши', 'ид', 'ым', 'ня', 'га', 'св',
// 'ез', 'лу', 'кт', 'мы', 'мн', 'ее', 'уж', 'ую', 'вл', 'ул', 'гр', 'пи', 'аж', 'бр', 'аб', 'уч', 'др', 'це', 'аю', 'еч', 'сн', 'ач', 'ги', 'чн', 'су', 'гл',
// 'лю', 'жн', 'ах', 'еб', 'бу', 'рн', 'ур', 'ьс', 'ыв', 'щи', 'нь', 'зв', 'пл', 'ап', 'жа', 'гд', 'ря', 'нс', 'ьк', 'уг', 'бл', 'ои', 'лс', 'жд', 'аш', 'ба',
// 'би', 'ум', 'иц', 'еп', 'рт', 'зд', 'ют', 'зо', 'еж', 'вр', 'дл', 'ук', 'уп', 'кл', 'ша', 'еш', 'ош', 'пу', 'см', 'аг', 'дв', 'ву', 'ке', 'тк', 'ац', 'йс',
// 'оя', 'ай', 'зи', 'ио', 'ды', 'уб', 'нк', 'ыс', 'ыт', 'иг', 'ех', 'ющ', 'ещ', 'ха', 'нд', 'дс', 'рм', 'ял', 'ге', 'ян', 'гу', 'ию', 'лы', 'уш', 'рс', 'фи',
// 'тя', 'ца', 'зы', 'вш', 'ох', 'иш', 'зм', 'фо', 'ьш', 'иа', 'нц', 'кс', 'ям', 'шк', 'ув', 'рь', 'зу', 'рг', 'иб', 'рв', 'яд', 'ср', 'зе', 'чу', 'шл', 'фе',
// 'мя', 'яв', 'ун', 'шь', 'лн', 'ью', 'рк', 'ье', 'чк', 'дь', 'ущ', 'ща', 'ыш', 'оо', 'ео', 'ух', 'бя', 'вк', 'сы', 'яс', 'вт', 'йн', 'зр', 'ец', 'юд', 'яз',
// 'бн', 'лк', 'бщ', 'уз', 'рж', 'вя', 'мп', 'кн', 'лл', 'дя', 'уе', 'кв', 'сч', 'шн', 'вз', 'юб', 'оц', 'иж', 'ип', 'яе', 'ья', 'пы', 'ащ', 'дк', 'рд', 'лж',
// 'оф', 'аи', 'хи', 'ящ', 'ях', 'хн', 'ощ', 'зл', 'фа', 'ыр', 'эк', 'вд', 'шо', 'бс', 'ын', 'зя', 'шу', 'зг', 'тл', 'ьм', 'вп', 'хр', 'мл', 'ьт', 'йт', 'жу', 
// 'гн', 'еа', 'пя', 'ык', 'рш', 'нг', 'бъ', 'ея', 'мм', 'ою', 'яю', 'ьз', 'ыб', 'цы', 'ъе', 'кц', 'сх', 'сд', 'ып', 'аф', 'чь', 'як', 'ау', 'юч', 'ищ', 'дп',
// 'рх', 'нч', 'мс', 'уа', 'фр', 'вь', 'цо', 'дц', 'ыч', 'йч', 'еф', 'тд', 'зб', 'ху', 'зк', 'лг', 'хв', 'пн', 'иф', 'вм', 'ню', 'дж', 'нф', 'оэ', 'йд', 'яж',
// 'пп', 'ыд', 'еи', 'шт', 'жк', 'юс', 'ею', 'мк', 'цу', 'яч', 'юр', 'рб', 'эл', 'дм', 'йк', 'сш', 'рю', 'сю', 'дт', 'рп', 'щу', 'хл', 'тч', 'яр', 'ъя', 'рр',
// 'чш', 'ьб', 'ыг', 'бк', 'йш', 'пт', 'мь', 'рч', 'тм', 'гк', 'зь', 'пк', 'рл', 'еу', 'ьц', 'нщ', 'яг', 'ьг', 'кж', 'пс', 'бх', 'уй', 'сб', 'цк', 'фу', 'мб',
// 'ьи', 'пь', 'лч', 'яя', 'сц', 'оу', 'тп', 'цв', 'яц', 'тт', 'эн', 'лт', 'ыз', 'щн', 'хе', 'тю', 'яб', 'дд', 'зж', 'сф', 'нр', 'яй', 'нв', 'дш', 'вв', 'йо',
// 'рц', 'юн', 'фл', 'ао', 'жо', 'хс', 'рф', 'дч', 'ьч', 'чо', 'эр', 'фф', 'вч', 'юз', 'лд', 'сё', 'эф', 'ьд', 'бю', 'бв', 'жб', 'уя', 'тц', 'нз', 'фт', 'вг',
// 'хм', 'чл', 'юм', 'дх', 'йм', 'дг', 'тб', 'йц', 'эм', 'эп', 'щь', 'вх', 'ёт', 'юк', 'яп', 'жч', 'оа', 'ыж', 'бм', 'рз', 'мр', 'эс', 'юл', 'ён', 'йл', 'кк',
// 'юц', 'вц', 'ыя', 'съ', 'щё', 'чр', 'дз', 'хт', 'кз', 'дъ', 'шв', 'иу', 'бь', 'ём', 'дб', 'юш', 'чё', 'жь', 'мв', 'юж', 'мч', 'мц', 'мг', 'уц', 'жс', 'лб',
// 'лп', 'уи', 'юю', 'нж', 'гч', 'сг', 'ьв', 'её', 'зс', 'пц', 'лё', 'яи', 'ёл', 'яш', 'уф', 'гс', 'аэ', 'фс', 'дю', 'лм', 'юг', 'рщ', 'вщ', 'ёр', 'эд', 'лз',
// 'гм', 'гв', 'дё', 'мф', 'зъ', 'шп', 'мэ', 'эв', 'пч', 'км', 'ьф', 'бж', 'тх', 'нш', 'эй', 'кп', 'уэ', 'гт', 'нб', 'ьо', 'бд', 'шм', 'кг', 'зч', 'шё', 'юх', 
// 'сж', 'бб', 'нё', 'кш', 'зз', 'тщ', 'фы', 'зц', 'гг', 'лх', 'йе', 'аа', 'тё', 'ьщ', 'ыи', 'тф', 'нх', 'тг', 'рэ', 'лв', 'бш', 'рё', 'вё', 'ьп', 'лр', 'зт',
// 'хх', 'йз', 'эз', 'чв', 'шр', 'ыщ', 'оё', 'вб', 'нп', 'кд', 'сэ', 'йб', 'жл', 'тъ', 'жм', 'бз', 'уо', 'жр', 'сз', 'жг', 'тз', 'жё', 'жж', 'фь', 'йф', 'пш',
// 'зю', 'иэ', 'эх', 'тэ', 'лш', 'бэ', 'йр', 'хг', 'бт', 'хш', 'гб', 'мт', 'йг', 'фн', 'нэ', 'тш', 'фг', 'аё',
// ];
// function generateKey() {
//     let length = key.length;
//     const randomNum = new Uint16Array(1); 
//     const indexes = Array.from({ length: length}, (_, i) => i);  //прикольная запись массива, я подсмотрела
//     for (let i = 0; i < length; i++) {
//         let j = window.crypto.getRandomValues(randomNum)[0] % (length - 1); 
//         [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
//     }
//     for (let i = 0; i < length; i++) {
//         if (indexes[i] == i) {
//             [indexes[i], indexes[length - i - 1]] = [indexes[length - i - 1], indexes[i]];
//         }
//     }
//     for (let i = 0; i < length; i++) {
//         key[i][1] = key[indexes[i]][0];
//     }
// }

// function toEncodeText(text) {
//     text = text.toLowerCase();
//     let textArray = text.split('');
//     for (let i = 0; i < text.length; i++) {
//         for (let j = 0; j < key.length; j++) {
//             if (text[i] === key[j][0]) {
//                 textArray[i] = key[j][1];
//             }
//         }
//     }
//     return textArray.join('');
// }

// function toDecodeText(text) {
//     text = text.toLowerCase();
//     let textArray = text.split('');
//     for (let i = 0; i < text.length; i++) {
//         for (let j = 0; j < key.length; j++) {
//             if (text[i] === key[j][1]) {
//                 textArray[i] = key[j][0];
//             }
//         }
//     }
//     return textArray.join('');
// }

// function toHackText(text) {
//     text = text.toLowerCase();
//     let usedLetters = alfavit.map(letter => [letter]);

//     for (let i = 0; i < usedLetters.length; i++) {
//         usedLetters[i][1] = 0;
//     }
//     for (let i = 0; i < text.length; i++) {
//         for (let j = 0; j < usedLetters.length; j++) {
//             if (text[i] === usedLetters[j][0]) {
//                     usedLetters[j][1]++;
//             }
//         }
//     }
//     usedLetters.sort((a, b) => b[1] - a[1]);  
//     let resultTextArray;
//     resultTextArray = text.split(''); 

//       //не получилось, я пыталась. часто прогоняются повторяющиеся запрещенные комбинации. я не понимаю как тут нормально изменять ключ !!!!!!!!!!!!!!!!!!!
//         //это по банлисту с изменением на ближайший 
//     /*
//     let containProhibComb = true;
//     while (containProhibComb) {
//         containProhibComb = false;
//         resultTextArray = text.split('');
    
//         for (let i = 0; i < text.length; i++) {
//             const index = usedLetters.findIndex(letter => text[i] === letter[0]);
//             if (index !== -1) {     // потому что при ненахождении записывается -1
//                 resultTextArray[i] = alfavit[index];
//             }
//         }
    
//         for (let i = 0; i < resultTextArray.length - 1; i++) {
//             if (banList.includes(`${resultTextArray[i]}${resultTextArray[i+1]}`)) {
//                 containProhibComb = true;
    
//                 const index1 = alfavit.findIndex(letter => resultTextArray[i] === letter);
//                 if (resultTextArray[i] !== resultTextArray[i+1]) {
//                     if (index1 == alfavit.length-1) {
//                         for (let j = index1 - 1; j >= 0; j--) {
//                             if (alfavit[j] !== resultTextArray[i+1]) {
//                                 if (!banList.includes(`${alfavit[j]}${resultTextArray[i+1]}`)) {
//                                     const a = usedLetters[j][0];
//                                     usedLetters[j][0] = usedLetters[index1][0];
//                                     usedLetters[index1][0] = a;
//                                     break;
//                                 }
//                             }                            
//                         }
//                     } else {
//                         for (let j = index1 + 1; j < alfavit.length; j++) {
//                             if (alfavit[j] !== resultTextArray[i+1]) {
//                                 if (!banList.includes(`${alfavit[j]}${resultTextArray[i+1]}`)) {
//                                     const a = usedLetters[j][0];
//                                     usedLetters[j][0] = usedLetters[index1][0];
//                                     usedLetters[index1][0] = a;
//                                     break;
//                                 }
//                             }                            
//                         }
//                     }
//                 } else {
//                     if (index1 == alfavit.length-1) {
//                         for (let j = index1 - 1; j >= 0; j--) {
//                             if (!banList.includes(`${alfavit[j]}${alfavit[j]}`)) {
//                                 const a = usedLetters[j][0];
//                                 usedLetters[j][0] = usedLetters[index1][0];
//                                 usedLetters[index1][0] = a;
//                                 break;
//                             }                           
//                         }
//                     } else {
//                         for (let j = index1 + 1; j <= alfavit.length; j++) {
//                             if (!banList.includes(`${alfavit[j]}${alfavit[j]}`)) {
//                                 const a = usedLetters[j][0];
//                                 usedLetters[j][0] = usedLetters[index1][0];
//                                 usedLetters[index1][0] = a;
//                                 break;
//                             }                            
//                         }
//                     }
//                 }
//             }
//         }
//     }
        
//    */
   
//     /* тут не каждый раз обновляется и прогоняется текст, и это еще хуже, всего 3 угаданных буквы
        
    
//         for (let i = 0; i < resultTextArray.length - 1; i++) {
//             if (alfavit.includes(text[i]) && alfavit.includes(text[i+1])) {
//                 let firstLet = alfavit[usedLetters.findIndex(letter => text[i] == letter[0])];
//                 let secondLet = alfavit[usedLetters.findIndex(letter => text[i+1] == letter[0])];
//                 if (banList.includes(`${firstLet}${secondLet}`)) {
        
//                     const index1 = alfavit.findIndex(letter => firstLet === letter);
//                     if (firstLet !== secondLet) {
//                         if (index1 == alfavit.length-1) {
//                             for (let j = index1 - 1; j >= 0; j--) {
//                                 if (alfavit[j] !== secondLet) {
//                                     if (!banList.includes(`${alfavit[j]}${secondLet}`)) {
//                                         const a = usedLetters[j][0];
//                                         usedLetters[j][0] = usedLetters[index1][0];
//                                         usedLetters[index1][0] = a;
//                                         break;
//                                     }
//                                 }                            
//                             }
//                         } else {
//                             for (let j = index1 + 1; j <= alfavit.length; j++) {
//                                 if (alfavit[j] !== secondLet) {
//                                     if (!banList.includes(`${alfavit[j]}${secondLet}`)) {
//                                         const a = usedLetters[j][0];
//                                         usedLetters[j][0] = usedLetters[index1][0];
//                                         usedLetters[index1][0] = a;
//                                         break;
//                                     }
//                                 }                            
//                             }
//                         }
//                     } else {
//                         if (index1 == alfavit.length-1) {
//                             for (let j = index1 - 1; j >= 0; j--) {
//                                 if (!banList.includes(`${alfavit[j]}${alfavit[j]}`)) {
//                                     const a = usedLetters[j][0];
//                                     usedLetters[j][0] = usedLetters[index1][0];
//                                     usedLetters[index1][0] = a;
//                                     break;
//                                 }                           
//                             }
//                         } else {
//                             for (let j = index1 + 1; j <= alfavit.length; j++) {
//                                 if (!banList.includes(`${alfavit[j]}${alfavit[j]}`)) {
//                                     const a = usedLetters[j][0];
//                                     usedLetters[j][0] = usedLetters[index1][0];
//                                     usedLetters[index1][0] = a;
//                                     break;
//                                 }                            
//                             }
//                         }
//                     }
//             }
//             }            
//         }

//         for (let i = 0; i < text.length; i++) {
//             const index = usedLetters.findIndex(letter => text[i] === letter[0]);
//             if (index !== -1) {     // потому что при ненахождении записывается -1
//                 resultTextArray[i] = alfavit[index];
//             }
//         }
//     */

//     /*   тоже не получилось (это для трех букв, неудобно анализировать повторяющиеся буквы)

//     for (let i = 0; i < resultTextArray.length - 2; i++) {        

//         //сверяться с обновленным ключом, если что изменять три буквы. в конце обновить текст еще раз

//         if (alfavit.includes(resultTextArray[i]) && alfavit.includes(resultTextArray[i+1]) && alfavit.includes(resultTextArray[i+2])) {
//             let index;
//             for (let x = 0; x <=2; x++) {
//                 index = usedLetters.findIndex(letter => text[i+x] === letter[0]);
//                 resultTextArray[i+x] = alfavit[index];
//             }

//             index = letterCombinations.findIndex(arr => arr[0].includes(resultTextArray[i]) && arr[1] == resultTextArray[i+1] && arr[2].includes(resultTextArray[i+2]));
//             if (index === -1) {
//                 // разные ситуации где буква какая-то не попала
//                 if (resultTextArray[i] === resultTextArray[i+2]) {
//                     let found = false;
//                     for (const [left, middle, right] of letterCombinations) {
//                         if (left.includes(resultTextArray[i]) && right.includes(resultTextArray[i+2])) {
//                             let x = alfavit.findIndex(letter => letter == resultTextArray[i+1]);
//                             let y = alfavit.findIndex(str => str[0] == middle);
//                             let a = usedLetters[x][0];
//                             usedLetters[x][0] = usedLetters[y][0];
//                             usedLetters[y][0] = a;
//                             found = true;
//                             break;
//                         }
//                     }
//                     if (!found) {
//                         //меняем обе буквы , оставляем на месте центральную
//                         x = letterCombinations.findIndex(arr => arr[1] === resultTextArray[i+1]);
//                         let found = false;
//                     for (let x =  letterCombinations[index][0].length - 1; x >= 0; x--) {
//                         for (let y = 0; y < letterCombinations[index][2].length; y++) {
//                             if (letterCombinations[index][0][x] === letterCombinations[index][2][y]) {
//                                 found = true;
//                                 break;
//                             }
//                         }
//                         if (found) {
//                             break;
//                         }
//                         }
//                         if (!found) {

//                         }
//                     } else if ( 1) { //ничто не совпало ?

//                 } else {
//                     //совпадает с центральной одна
//                 }
//             }  //дальше неудачные попытки, в общем закончи  (это я для себя пишу)

//             if (resultTextArray[i] === resultTextArray[i+2]) {
//                 const index = letterCombinations.findIndex(arr => resultTextArray[i+1] === arr[1]);
//                 if (!letterCombinations[index][0].includes(resultTextArray[i]) || !letterCombinations[index][2].includes(resultTextArray[i+2])) {
//                     let found = false;
//                     for (let x =  letterCombinations[index][0].length - 1; x >= 0; x--) {
//                         for (let y = 0; y < letterCombinations[index][2].length; y++) {
//                             if (letterCombinations[index][0][x] === letterCombinations[index][2][y]) {
//                                 found = true;
//                                 break;
//                             }
//                         }
//                         if (found) {
//                             break;
//                         }
//                     }
//                     if (!found) {

//                     }
//                 } else if (1) {}
//             }
//             for (const [left, middle, right] of letterCombinations) {                
//                 if (resultTextArray[i+1] === middle) {
//                     if (left.includes(resultTextArray[i]) && !right.includes(resultTextArray[i+2])) {
//                         if (resultTextArray[i] === resultTextArray[i+2])
//                         right.forEach(el => {
//                             if (el !== resultTextArray[i+2]) {


//                                 //resultTextArray[i+2] = el;
//                                 return;
//                             }
//                         });
//                     } else if (!left.includes(resultTextArray[i]) && right.includes(resultTextArray[i+2])) {
//                         left.forEach(el => {
//                             if (el !== resultTextArray[i]) {
//                                 resultTextArray[i] = el;
//                                 return;
//                             }
//                         })
//                     } else if (!left.includes(resultTextArray[i]) && !right.includes(resultTextArray[i+2])) {
//                         res
//                     }
//                    break; 
//                 }                
//             }
//         }
//         for (let i = 0; i < text.length; i++) {
//             const index = usedLetters.findIndex(letter => text[i] === letter[0]);
//             if (index !== -1) {  
//                 resultTextArray[i] = alfavit[index];
//             }
//         }
//     } 
//     */

//        // это с популярными парами 
//     let pairsOfUsedLetter = [];
//     for (let i = 0; i < resultTextArray.length - 1; i++) {
//         let isInUsed = false;
//         for (let j = 0; i < pairsOfUsedLetter.length; i++) {
//             if (pairsOfUsedLetter[i][0] === `${resultTextArray[i]}${resultTextArray[i+1]}`) {
//                 pairsOfUsedLetter[i][1] += 1;
//                 isInUsed = true;
//             }
//         }
//         if (!isInUsed) {
//             if (alfavit.includes(resultTextArray[i]) && alfavit.includes(resultTextArray[i+1])) {
//                 pairsOfUsedLetter.push([`${resultTextArray[i]}${resultTextArray[i+1]}`, 0]);
//             }
//         }        
//     }

//     pairsOfUsedLetter.sort((a, b) => { b[1] - a[1]});

//     for (let i = 0; i < pairsOfUsedLetter.length; i++) {
//         for () {
            
//         }
//     } 

    



//     let count = 0;
//     for (let i = 0; i < usedLetters.length; i++) {        
//         console.log(usedLetters[i], alfavit[i], key[i]);    
//         if (usedLetters[i][0] === key[i][1]) {   
//             count++  // сколько букв правильно взломано
//         }
//     }
//     console.log(count)
//     return resultTextArray.join('');
// }

// const encodeButton = document.querySelector('#encodeButton');
// const decodeButton = document.querySelector('#decodeButton');
// const hackingButton = document.querySelector('#hackingButton');

// const areaOfOrigText = document.querySelector('#originalText');
// const areaOfResultText = document.querySelector('#resultText');

// encodeButton.addEventListener('click', () => {
//     var origText = areaOfOrigText.value;
//     if(origText) {
//         generateKey();
//         const resultText = toEncodeText(origText);
//         areaOfResultText.innerHTML = '';
//         areaOfResultText.innerHTML = resultText;
//     }
// });

// decodeButton.addEventListener('click', () => {
//     var text = areaOfOrigText.value;
//     if(text && key[0][0]) {
//         const resultText = toDecodeText(text);
//         areaOfResultText.innerHTML = '';
//         areaOfResultText.innerHTML = resultText;
//     }
// });

// hackingButton.addEventListener('click', () => {
//     var text = areaOfOrigText.value;
//     if(text) {
//         const resultText = toHackText(text);
//         areaOfResultText.innerHTML = '';
//         areaOfResultText.innerHTML = resultText;
//     }
// })
