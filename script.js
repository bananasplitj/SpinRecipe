// 팝업 열기 함수
function showPopup(type) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");

  // 팝업 내용 설정
 
 if (type === "spin") {
    popupText.textContent = "Spinning for a new recipe!";
  }

  // 팝업 보이기
  popup.style.display = "flex";
}

// 팝업 닫기 함수
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

