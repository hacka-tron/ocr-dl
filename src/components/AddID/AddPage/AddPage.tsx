import { Link } from "react-router-dom";
import './AddPage.css';

function AddIdPage() {
    return (
        <div className='add-select'>
            <div className='add-prompt'>How would you like to enter your liscense info?</div>
            <div className="add-btns">
                <Link to='/add/scan' className="btn-link">
                    <button type="button" className="base-button ">Scan License</button>
                </Link>
                <Link to='/add/manual' className="btn-link">
                    <button type="button" className="base-button ">Enter Manually</button>
                </Link>
            </div>
        </div>
    )
}

export default AddIdPage;