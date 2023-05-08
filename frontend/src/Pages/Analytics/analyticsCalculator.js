export const averageCalculator = (data) => {
    return data.reduce((sum, num) => num.moodRate !== null ? sum + num.moodRate : sum + 0 , 0) / data.length ;
}