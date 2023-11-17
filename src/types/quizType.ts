export interface quizType{
    id?: string,
    friendsAnswers: string[],
    questions: [
        {
            id: number,
            answers: string[],
            color: string,
            currentAnswer: string,
            title: string
        }
    ],
    title: string
}