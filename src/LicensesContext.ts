import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { License } from './License';

export interface ILicenseContext {
    licenses: License[],
    setLicenses: Dispatch<SetStateAction<License[]>>
}
export const LicensesContext = createContext<ILicenseContext| undefined>(undefined);

export function useLicensesContext() {
    const licensesContext: ILicenseContext |undefined = useContext(LicensesContext);

    if (!licensesContext) {
        throw new Error('useLicensesContext must be used inside a LicenseContextProvider')
    }
    return licensesContext;
}