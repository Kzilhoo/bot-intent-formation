import { formation } from './formation'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = formation[Math.floor(Math.random() * formation.length)];
    const newMessage = Object.assign($message.message, { content: response })

    resolve(newMessage)
    })
}


