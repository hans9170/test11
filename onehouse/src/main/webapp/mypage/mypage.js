document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("editInfoModal");
    const btn = document.getElementById("editInfoBtn");
    const closeBtn = document.getElementById("closeModal1");

    btn.onclick = function(){
        modal.style.display = "block";
    }
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("compareModal");
    const btn = document.getElementById("compareBtn");
    const closeBtn = document.getElementById("closeModal2");

    btn.onclick = function() {
        modal.style.display = "block";
    }
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
});


document.querySelectorAll(".heart").forEach((heart) => {
    heart.addEventListener("click", function () {
        if (this.src.includes("heart.svg")) {
            this.src = "../icon/heart_fill.svg"; // 찜하기 상태
        } else {
            this.src = "../icon/heart.svg"; // 다시 원래 상태로
        }
    });
});

const compareBtn = document.getElementById('compareBtn');
const checkboxes = document.querySelectorAll('.compare-checkbox');

// 비교하기 버튼 클릭 시 체크박스를 나타내고, 텍스트를 변경
compareBtn.addEventListener('click', function () {
  // 체크박스 보이기
  checkboxes.forEach(checkbox => checkbox.style.display = 'block');

  // 버튼 텍스트 변경
  compareBtn.textContent = '비교함';
  compareBtn.removeEventListener('click', arguments.callee);  // 버튼 클릭 이벤트 제거 (다시 클릭하면 동작 안 함)
  compareBtn.addEventListener('click', function () {
    const selectedItems = [];
    document.querySelectorAll('.compare-checkbox:checked').forEach(checkbox => {
      selectedItems.push(checkbox.dataset.id); // 체크된 아이템의 ID 수집
    });

    // 선택된 아이템을 비교 페이지로 전달
    if (selectedItems.length > 0) {
      window.location.href = `compare.html?items=${selectedItems.join(',')}`;
    }
  });
});

// 체크박스 상태에 따라 버튼 활성화/비활성화
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const selectedCheckboxes = document.querySelectorAll('.compare-checkbox:checked');
    if (selectedCheckboxes.length > 0) {
      compareBtn.disabled = false; // 체크박스가 하나라도 선택되면 버튼 활성화
    } else {
      compareBtn.disabled = true;  // 체크박스가 하나도 선택되지 않으면 버튼 비활성화
    }
  });
});
