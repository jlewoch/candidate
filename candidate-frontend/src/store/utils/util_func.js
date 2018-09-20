export const checkRemainder = (obj) => {
    return 100 - (Object.keys(obj).reduce((acc,next)=> acc + next))
}