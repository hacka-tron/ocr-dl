import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManuallyAddPage.css';
import { License, licenseLS } from '../../../License.d';
import { useLicensesContext } from '../../../LicensesContext';

function ManuallyAddPage() {
    let errors: string[] = [];
    const [formData, setFormData] = useState({
        state: '', licenseNo: '', issDate: '', expDate: '', fullName: '', errors
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const validateFormAndCreateLicense = (formData: any) => {
        errors = []
        if (!formData.state) {
            errors.push('Missing state.');
        }
        if (!formData.licenseNo) {
            errors.push('Missing license number.');
        }
        if (formData.licenseNo.length < 8) {
            errors.push('License number not complete. It should be at least 8 characters.');
        }
        if (!formData.fullName) {
            errors.push('Missing full name.');
        }
        if (!formData.issDate) {
            errors.push('Missing issue date.');
        }
        if (!formData.expDate) {
            errors.push('Missing expiration date.');
        }
        const license: License ={
            state: formData.state,
            licenseNo: formData.licenseNo,
            fullName: formData.fullName,
            issDate: formData.issDate,
            expDate: formData.expDate
        }
        setFormData((prevState) => ({...prevState, errors}));
        return errors.length === 0 ? license: false;
    }

    const {licenses, setLicenses} = useLicensesContext();

    const submitLicense = (license: License) => {
        licenses.push(license);
        setLicenses(licenses);
        localStorage.setItem(licenseLS, JSON.stringify(licenses));
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const license = validateFormAndCreateLicense(formData);
        if (license){
            submitLicense(license);
        }
    };


    return (
        <div className='manual-form'>
            <ul className='form-errors'>
                {formData.errors.map((error, i) =>(
                    <li key={i}>{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor='state'>State</label>
                    <select name='state' value={formData.state} onChange={handleChange}>
                        <option value=""></option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className='form-item'>
                    <label htmlFor='licenseNo'>License No. </label>
                    <input name='licenseNo' type='text' placeholder='License No.' value={formData.licenseNo} onChange={handleChange} />
                </div>
                <div className='form-item'>
                    <label htmlFor='fullName'>Full Name </label>
                    <input name='fullName' type='text' placeholder='First Middle Last' value={formData.fullName} onChange={handleChange} />
                </div>
                <div className='form-item'>
                    <label htmlFor='issDate'>Issuance Date </label>
                    <input name='issDate' type='date' value={formData.issDate} onChange={handleChange} />
                </div>
                <div className='form-item'>
                    <label htmlFor='expDate'>Expiration Date </label>
                    <input name='expDate' type='date' value={formData.expDate} onChange={handleChange} />
                </div>
                <div className='form-item form-buttons'>
                    <Link to='/add' className="btn-link back">
                        <button type="button" className='base-button back-button'>BACK</button>
                    </Link>
                    <input type="submit" value="Submit" className='base-button submit'></input>
                </div>
            </form>
        </div>
    )
}

export default ManuallyAddPage;