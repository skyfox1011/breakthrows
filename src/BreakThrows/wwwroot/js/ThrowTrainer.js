function startGame() {
    $('.canvasContainer').on('click', '.playButton, .tryAgainButton', function () {
        $('.menu').remove();
        $('#canvas').focus();
        lives = 5;
        throwCount = 0;
        breakCount = 0;
        unbreakCount = 0;
        oneLifeAdditionCount = 0;
        fourLivesAdditionCount = 0;

        //var scoreBoard = '<div class="scoreBoard">Chance(s):<span class="lifeCount">' + lives + '</span>&nbsp&nbsp&nbsp&nbsp# of Throws Broken:<span class="breakCount">' + breakCount + '</span></div>';
        var scoreBoard = '<div class="scoreBoard"># of Throws Unbroken:<span class="lifeCount">' + unbreakCount + '</span>&nbsp&nbsp&nbsp&nbsp# of Throws Broken:<span class="breakCount">' + breakCount + '</span></div>';
        $('.canvasContainer').append(scoreBoard);
        startThrowing();
    });

    $(document).on('keydown', evaluateThrowBreak);

    init();
}

var openToBreak = false;
var lives = 0;
var throwCount = 0;
var breakCount = 0;
var unbreakCount = 0;
var oneLifeAdditionCount = 0;
var oneLifeMax = 4;
var fourLivesAdditionCount = 0;
var fourLivesMax = 10;
var Videos = [];

function Video(throwVid, breakVid, beginTime, endTime) {
    this.throwSrc = throwVid;
    this.breakSrc = breakVid;
    this.beginTime = beginTime;
    this.endTime = endTime;
}

function init() {
    Videos.push(new Video('/Videos/left_side_one_throw.mp4', '/Videos/left_side_one_break.mp4', 1.4, 1.6));
    Videos.push(new Video('/Videos/left_side_two_throw.mp4', '/Videos/left_side_two_break.mp4', 1.5, 1.7));
    Videos.push(new Video('/Videos/left_side_both_throw.mp4', '/Videos/left_side_both_break.mp4', 1.36, 1.56));

    var html =
        '<video id="cachedVideo1">' +
        '   <source src="/videos/left_side_both_break.mp4" type="video/mp4" />' +
        '</video>' +
        '<video id="cachedVideo2">' +
        '   <source src="/videos/left_side_one_break.mp4" type="video/mp4" />' +
        '</video>' +
        '<video id="cachedVideo3">' +
        '   <source src="/videos/left_side_two_break.mp4" type="video/mp4" />' +
        '</video>' +
        '<video id="video" autoplay="true" loop="true">' +
        '   <source src="/videos/Introduction.mp4" type="video/mp4" />' +
        '</video>' +
        '<audio id="audio" src="/audio/Tekken_Paris_Song.mp3" controls>' +
        '   Your browser does not support the audio element.' +
        '</audio>';

    $('.videoContainer').html(html);

    var menu =
        '<div class="menu">' +
        '   <pre class="menuText">' +
        '       Press 1 break left hand grab.\n' +
        '       Press 2 or 3 to break right hand grab.\n' +
        '       Press both to break double hand grab.\n' +
        '   </pre>' +
        '   <div class="playButton"></div>' +
        '</div>';

    $('.canvasContainer').append(menu);

    var audio = $('#audio').get(0);

    if (audio != undefined) {
        audio.volume = 0.3;
        audio.play();
    }

    renderVideo();
}

function displayEndResults() {
    $('.scoreBoard').remove();

    var html =
        '<video id="video" autoplay="true" loop="true">' +
        '   <source src="/Videos/Introduction.mp4" type="video/mp4" />' +
        '</video>';

    $('.videoContainer').html(html);

    var menu =
        '<div class="menu">' +
        '   <pre class="menuText">' +
        '       <b>Game Over!</b>\n' +
        '\n' +
        '       You broke ' + breakCount + ' out of ' + throwCount + ' throws.' +
        '   </pre>' +
        '   <div class="tryAgainButton"></div>' +
        '</div>';

    $('.canvasContainer').append(menu);

    renderVideo();
}

function startThrowing() {
    if (lives > 0) {
        openToBreak = true;
        var index = Math.floor(Math.random() * 3);

        var html =
            '<video id="video" autoplay="true" data-index="' + index + '">' +
            '   <source src="' + Videos[index].throwSrc + '" type="video/mp4" />' +
            '</video>';

        $('.videoContainer').html(html);

        document.getElementById('video').addEventListener('ended', function () {
            //lives--;
            unbreakCount++;
            oneLifeAdditionCount = 0;
            fourLivesAdditionCount = 0;
            //$('.lifeCount').html(lives);
            $('.lifeCount').html(unbreakCount);
            startThrowing();
        }, false)

        throwCount++;
        renderVideo();
    }
    else {
        displayEndResults();
    }
}

function breakTheThrow(startTime, breakSrc) {
    var html =
        '<video id="video" autoplay="true">' +
        '   <source src="' + breakSrc + '" type="video/mp4" />' +
        '</video>';

    $('.videoContainer').html(html);

    document.getElementById('video').addEventListener('loadedmetadata', function () {
        this.currentTime = startTime;
    }, false)

    document.getElementById('video').addEventListener('ended', function () {
        startThrowing();
    }, false)

    breakCount++;
    oneLifeAdditionCount++;
    fourLivesAdditionCount++;

    if (oneLifeAdditionCount == 4) {
        lives++;
        oneLifeAdditionCount = 0;
        $('.lifeCount').html(lives);
    }

    if (fourLivesAdditionCount == 10) {
        lives = lives + 4;
        fourLivesAdditionCount = 0;
        $('.lifeCount').html(lives);
    }

    $('.breakCount').html(breakCount);

    renderVideo();
}

function renderVideo() {
    var v = $('#video').get(0);
    var canvas = $('#canvas').get(0);
    var context = canvas.getContext('2d');
    var cw = Math.floor(canvas.clientWidth);
    var ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;
    v.addEventListener('play', function () {
        draw(this, context, cw, ch);
    }, false);
}

function draw(v, c, w, h) {
    if (v.paused || v.ended) return false;
    c.drawImage(v, 0, 0, w, h);
    setTimeout(draw, 20, v, c, w, h);
}

var answers = [];

function evaluateThrowBreak(e) {
    var videoSelector = $('#video');
    var time = videoSelector.get(0).currentTime;
    var index = videoSelector.data('index');

    if (openToBreak && (time > Videos[index].beginTime && time < Videos[index].endTime)) {

        var keys = {};
        keys[e.which] = true;
        for (var i in keys) {
            answers.push(i);
        }

        if (index == 0 || index == 1) {
            openToBreak = false;

            if ((index == 0 && (answers[0] === '49' || answers[0] === '97')) || (index == 1 && (answers[0] === '50' || answers[0] === '51' || answers[0] === '98' || answers[0] === '99'))) {
                answers = [];
                breakTheThrow(time, Videos[index].breakSrc);
            }
        }
        else {
            if (answers.length > 1) {
                openToBreak = false;

                if ((answers.indexOf('97') !== -1 && answers.indexOf('98') !== -1) || (answers.indexOf('97') !== -1 && answers.indexOf('99') !== -1) || (answers.indexOf('49') !== -1 && answers.indexOf('50') !== -1) || (answers.indexOf('49') !== -1 && answers.indexOf('51') !== -1)) {
                    answers = [];
                    breakTheThrow(time, Videos[index].breakSrc);
                }
            }
        }
    }
    else {
        answers = [];
    }
}