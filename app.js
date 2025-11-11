document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: "NBAで最も多くの優勝回数を誇るチームはどこ？",
      choices: ["ロサンゼルス・レイカーズ", "ボストン・セルティックス", "シカゴ・ブルズ", "ゴールデンステート・ウォリアーズ"],
      correct: "ボストン・セルティックス"
    },
    {
      question: "1試合でコートに立てるバスケットボールの選手の人数は？（1チームあたり）",
      choices: ["3人", "4人", "5人", "6人"],
      correct: "5人"
    },
    {
      question: "スリーポイントラインの外から決めたシュートは何点？",
      choices: ["1点", "2点", "3点", "4点"],
      correct: "3点"
    },
    {
      question: "「エア・ジョーダン」の愛称で知られる伝説的選手は？",
      choices: ["レブロン・ジェームズ", "マイケル・ジョーダン", "コービー・ブライアント", "ステフィン・カリー"],
      correct: "マイケル・ジョーダン"
    },
    {
      question: "日本代表の男子バスケチームの愛称は？",
      choices: ["サムライブルー", "アカツキファイブ", "なでしこジャパン", "サムライジャパン"],
      correct: "アカツキファイブ"
    },
    {
      question: "バスケットボールを考案した人物は誰？",
      choices: ["ジェームズ・ネイスミス", "ウィルト・チェンバレン", "ラリー・バード", "カリーム・アブドゥル＝ジャバー"],
      correct: "ジェームズ・ネイスミス"
    },
    {
      question: "NBAで最も多くの得点を記録した選手（2024年時点）は？",
      choices: ["マイケル・ジョーダン", "レブロン・ジェームズ", "カリーム・アブドゥル＝ジャバー", "コービー・ブライアント"],
      correct: "レブロン・ジェームズ"
    },
    {
      question: "バスケットボールの試合で『ダブルドリブル』とは何？",
      choices: [
        "2人で同時にドリブルすること",
        "一度止めたドリブルをもう一度始める反則",
        "2回連続でゴールを決めること",
        "ドリブル中にパスを出すこと"
      ],
      correct: "一度止めたドリブルをもう一度始める反則"
    },
    {
      question: "日本の女子バスケットボール代表が銀メダルを獲得したオリンピックは？",
      choices: ["リオデジャネイロ大会", "東京大会", "北京大会", "ロンドン大会"],
      correct: "東京大会"
    },
    {
      question: "ステフィン・カリーが所属するチームは？（2024年時点）",
      choices: ["ロサンゼルス・レイカーズ", "ボストン・セルティックス", "ゴールデンステート・ウォリアーズ", "マイアミ・ヒート"],
      correct: "ゴールデンステート・ウォリアーズ"
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const progressElement = document.getElementById("progress");
  const feedbackElement = document.getElementById("feedback");

  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    progressElement.textContent = `Q${currentQuestionIndex + 1} / ${quizData.length}`;
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    feedbackElement.textContent = '';

    currentQuestion.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => selectAnswer(choice));
      choicesElement.appendChild(button);
    });

    nextButton.style.display = "none";
  }

  function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll("#choices button");

    buttons.forEach(btn => btn.disabled = true);

    if (choice === currentQuestion.correct) {
      feedbackElement.textContent = "✅ 正解！";
      feedbackElement.style.color = "green";
      score++;
    } else {
      feedbackElement.textContent = `❌ 不正解（正解: ${currentQuestion.correct}）`;
      feedbackElement.style.color = "red";
    }

    nextButton.style.display = "block";
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
