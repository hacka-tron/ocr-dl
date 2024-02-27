import { useLicensesContext } from "../../LicensesContext";

function ViewPage() {
    let licenseContext = useLicensesContext();
    return (
        <div>
            <ul>
                {licenseContext.licenses.map((license,i) =>(
                    <li key={i}>{license.licenseNo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ViewPage;