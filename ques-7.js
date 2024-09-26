function calculateFinalGrades(students){
    return students
    .map(student => {
        const sumOfScores = student.scores.reduce((sum, score) => sum + score, 0);
        const numberOfScores = student.scores.length;

        const finalGrade = numberOfScores === 0 ? 0 : Math.round(sumOfScores / numberOfScores);

        return {
            id: student.id,
            name: student.name,
            finalGrade: finalGrade
        };
    })
    .filter(student => student.finalGrade >= 70);
}

const students = [
    {
        id: 1,
        name: "Rajneesh",
        scores: [85,90,92]
    },
    {
        id: 2,
        name: "Shweta",
        scores: [70,68,72]
    },
    {
        id: 3,
        name: "Aryan",
        scores: [60,65,58]
    },
    {
        id: 4,
        name: "Shubham",
        scores: [75,80,78]
    }
];
const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);
