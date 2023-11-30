export interface friendsAnswersType{
    id?:string ,
    userName: string, 
    userLogo: string,
    userAnswers: [
        {
            id: number,
            answers: string[],
            color: string,
            currentAnswer: string,
            title: string,
            userAnswer: string
        }
    ]
}