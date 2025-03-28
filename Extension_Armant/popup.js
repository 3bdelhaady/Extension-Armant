const armantFacts = [
    "أرمنت كانت مدينة مقدسة عند الفراعنة، وكانت مركزًا لعبادة الإله منتو، إله الحرب.",
    "الاسم القديم لأرمنت هو 'إيونت'، وظهر في النقوش المصرية القديمة كمدينة ذات أهمية دينية.",
    "كانت أرمنت عاصمة إقليم واست خلال فترات مختلفة من العصور الفرعونية.",
    "المعبد الرئيسي في أرمنت بُني في عهد الأسرة الحادية عشرة، واستمر العمل عليه حتى العصر الروماني.",
    "تشتهر أرمنت بمعبد الإله منتو، والذي يحتوي على نقوش تصور الملوك وهم يقدمون القرابين.",
    "في العصر الروماني، كانت أرمنت مركزًا دينيًا رئيسيًا، وكان لها مكانة خاصة في الطقوس الدينية.",
    "توجد في أرمنت مقابر ملكية وأثرية تعود لعصور مختلفة، مما يدل على أهميتها التاريخية.",
    "تقع أرمنت على الضفة الغربية لنهر النيل في محافظة الأقصر، وهي إحدى المدن التاريخية العريقة.",
    "تبعد أرمنت حوالي 25 كم جنوب الأقصر، مما يجعلها وجهة سياحية قريبة من أشهر المعالم الأثرية.",
    "تتميز أرمنت بأراضيها الزراعية الخصبة، حيث تُزرع بها محاصيل رئيسية مثل قصب السكر.",
    "أنجبت أرمنت العديد من الشخصيات المؤثرة، مثل عبدالباسط عبدالصمد ومحمود عبدالهادي إلى جانب نخبة من الأسماء البارزة في مختلف المجالات"
];

const defaultMessage = "Fact about Armant!";

function updateFact(forceUpdate = false) {
    const lastUpdate = localStorage.getItem("lastUpdate");
    const now = Date.now();

    if (forceUpdate || !lastUpdate || now - lastUpdate >= 10800000) {
        const randomIndex = Math.floor(Math.random() * armantFacts.length);
        const newFact = armantFacts[randomIndex];

        localStorage.setItem("currentFact", newFact);
        localStorage.setItem("lastUpdate", now);
    }
    
    return localStorage.getItem("currentFact");
}

document.addEventListener('DOMContentLoaded', function() {
    const contentParagraph = document.querySelector('.content p');
    const actionButton = document.getElementById('actionButton');

    contentParagraph.textContent = defaultMessage;

    actionButton.addEventListener('click', function() {
        contentParagraph.textContent = updateFact(true);
    });

    setTimeout(() => {
        contentParagraph.textContent = updateFact();
    }, 1000);
});