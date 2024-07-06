function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const result = document.getElementById('result');

    let score = 0;

    if (q1 && q1.value === '14') {
        score++;
    }
    if (q2 && q2.value === 'Ice Wizard') {
        score++;
    }
    if (q3 && q3.value === '6') {
        score++;
    }

    result.textContent = `You scored ${score} out of 3.`;
    result.style.color = score === 3 ? 'green' : 'red';
}
