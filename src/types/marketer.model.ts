export interface MarketerInfoValue {
    firstName: string
    lastName: string
    description: string
    avatarSimpleAccessFile: AvatarSimpleAccessFileValue
    rating: number
    moneyTransferred: number,
    location: string,
    registerDate: string
    signedUrl: string
}

export interface AvatarSimpleAccessFileValue {
    id: string,
    filename: string,
    size: number,
    signedUrl: string
}

 