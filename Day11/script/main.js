// 이전, 다음 버튼 클릭 시 동작
var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var current = 0; // 슬라이드 번호를 저장할 인덱스 변수(초기값 0으로 지정)


showSlides(current); // 현재 이미지 표시
prev.onclick = prevSlide; // 이전 이미지 표시
next.onclick = nextSlide; // 다음 이미지 표시

// n번째 슬라이드 이미지를 화면에 표시하는 함수
function showSlides(n) {
    for( var i=0; i < slides.length; i++ ) {
        slides[i].style.display = "none"; // 모든 이미지를 화면에서 감춤
    }
    slides[n].style.display = "block"; // n번째 이미지만 화면에 표시
};

// '이전' 버튼을 클릭하면 동작하는 함수
function prevSlide() {
    if(current > 0) current -= 1;
    else current = slides.length - 1; // current=0(첫번째 이미지)이면 이전 버튼 클릭시 마지막 위치로(photo-3)
    showSlides(current);
}

// '다음' 버튼을 클릭하면 동작하는 함수
function nextSlide() {
    if(current < slides.length - 1) current += 1;
    else current = 0; // current=2(마지막 이미지)이면 다음 버튼 클릭시 첫번째 위치로(photo-1)
    showSlides(current);
}


// 버튼 없이 자동으로 바꿔서 보여주는 방법
// html의 button 태그, css의  button 관련 style 없애기 필요
// var current = 0;

// showSlides();

// function showSlides() {
//     var slides = document.querySelectorAll('#slides > img');
//     for(let i=0; i<slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     current++;
//     if(current > slides.length)
//         current=1;
//     slides[current-1].style.display = 'block';
//     setTimeout(showSlides, 3000)
// }