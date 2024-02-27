export interface License {
    state: string,
    licenseNo: string,
    issDate: Date,
    expDate: Date,
    fullName: string,
}

export const licenseLS = 'ocr-dl-licenses';