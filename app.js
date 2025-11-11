document.addEventListener('DOMContentLoaded', () => {
  // クイズの質問と選択肢を表示するコード
  const quizData = [
    { question: "オーストラリアの首都はどこでしょう？", choices: ["シドニー", "キャンベラ", "オークランド", "メルボルン"], correct: "キャンベラ" },
    { question: "日本の首都はどこでしょう？", choices: ["大阪", "東京", "京都", "札幌"], correct: "東京" },
    { question: "アメリカの首都はどこでしょう？", choices: ["ロサンゼルス", "ニューヨーク", "ワシントンD.C.", "シカゴ"], correct: "ワシントンD.C." }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const headerElement = document.querySelector("h1"); // 質問番号を表示するための要素

  // 現在の質問を表示
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    // 質問番号を表示 (Q1, Q2, Q3...)
    headerElement.textContent = `Q${currentQuestionIndex + 1}`;

    questionElement.textContent = currentQuestion.question;

    // 選択肢をリセット
    choicesElement.innerHTML = '';

    // 選択肢をボタンとして追加
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => selectAnswer(choice));
      choicesElement.appendChild(button);
    });
  }

  // 答えを選択
  function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (choice === currentQuestion.correct) {
      alert("正解！");
      score++;
    } else {
      alert("不正解。正解は " + currentQuestion.correct + " です。");
    }

    // 次へボタンを表示
    nextButton.style.display = "block";
  }

  // 次の質問に進む
  function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }

    nextButton.style.display = "none";
  }

  // クイズの結果を表示
  function showResults() {
    questionElement.textContent = `クイズ終了！あなたのスコアは ${score} / ${quizData.length} です。`;
    choicesElement.innerHTML = '';
    headerElement.textContent = "結果"; // 最後に質問番号の代わりに "結果" を表示
    nextButton.style.display = "none";
  }

  // 次の質問に進むボタンのイベントリスナー
  nextButton.addEventListener("click", nextQuestion);

  // 初回の質問を表示
  showQuestion();
});
