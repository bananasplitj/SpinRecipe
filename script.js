// 팝업 열기 함수
function showPopup(type) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");

  // 팝업 내용 설정
  if (type === "ingredients") {
    popupText.innerHTML = `
      <ul class="popup-list">
        <li>1 pound penne rigate</li>
        <li>3 Tablespoons olive oil</li>
        <li>3 cloves garlic</li>
        <li>1/4 teaspoon crushed red pepper flakes (depending on how spicy you want it)</li>
        <li>1 28-ounce can whole peeled tomatoes (or 1 ½ cups fresh chopped tomatoes)</li>
      </ul>
    `;
  } else if (type === "instructions") {
    popupText.innerHTML = `
      <ol class="popup-list">
        <li>Cook pasta in a large pot of boiling water, according to package instructions, until tender.</li>
        <li>Meanwhile, heat olive oil in a large skillet over medium heat. Add garlic and crushed red pepper; cook, stirring for 30 seconds.</li>
        <li>Add tomatoes, crushing them roughly with the back of a wooden spoon, and tomato paste.</li>
        <li>Bring to a simmer over low heat and cook for 5-10 minutes. Remove from heat and add fresh chopped basil.</li>
        <li>When pasta is cooked, drain the water and add it to the sauce. Toss well. Taste and add more red pepper flakes or salt and pepper, if needed.</li>
        <li>Serve immediately topped with a generous portion of grated pecorino or parmesan cheese and fresh chopped parsley.</li>
      </ol>
    `;
  } else if (type === "spin") {
    popupText.textContent = "Spinning for a new recipe!";
  }

  // 팝업 보이기
  popup.style.display = "flex";
}

// 팝업 닫기 함수
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
