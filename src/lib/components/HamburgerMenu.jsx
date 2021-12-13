import PropTypes from 'prop-types';
import './styles/styles.css'
import React, {useEffect} from 'react';

const HamburgerMenu = (props) => {

    let {children, options, callback, history} = props;

    /**
     * Options Array Structure
     * options: [
     *     {
     *          name: "" | String, Required
     *          icon: "" | String, Optional
     *          callback: () => {} | Function, Optional
     *      }
     *      or 
     *      For predefined values, "view", "delete", "edit"
     * ],
     * Callback is directly assotiated with Delete Option,
     * History is only accessible when parent props are passed to the component as {...props} or {...this.props}
     * children are the items enclosed in the component & require no additional params.
     **/

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
        script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
        script.crossOrigin = "anonymous"
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    if (options && !Array.isArray(options))
        return <span className="text-danger" title="Invalid Type option, Required array">
            <i className="ri-alert-fill text-danger fs-6"></i>
        </span>

    return <div className=" dropstart tableActions">
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script> */}
        <button type="button" className="p-0 btn btn-outline-primary" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-2-fill" /></button>
        <ul className="dropdown-menu m-0 p-0" style={{minWidth: 200}}>
            {children}
            {options && options.map((item, idx) => {
                switch (typeof item === 'string' ? item : item?.name) {
                    case 'view':
                        return <li key={idx} className="pointer-cursor">
                            <a href className="dropdown-item" title="View" onClick={() => history.push(item.url ? item.url : '/')}>
                                <i className="ri-eye-fill me-2 fixRemixPosition" /> View
                            </a>
                        </li>
                    case 'edit':
                        return <li key={idx} className="pointer-cursor">
                            <a href className="dropdown-item" title="Edit" onClick={() => history.push(item.url ? item.url : '/')}>
                                <i className="ri-pencil-fill me-2 fixRemixPosition" /> Edit
                            </a>
                        </li>
                    case 'delete':
                        return <li key={idx} className="pointer-cursor">
                            <a href className="dropdown-item" title="Delete" onClick={callback}>
                                <i className="ri-delete-bin-6-fill me-2 fixRemixPosition" /> Delete
                            </a>
                        </li>
                    case typeof item === 'object' ? item.name : '':
                        return <li key={idx} className="pointer-cursor">
                            <a href className="dropdown-item" title={item?.name} onClick={item?.callback}>
                                <i className={`${item?.icon} me-2 fixRemixPosition`} /> {item?.name}
                            </a>
                        </li>
                    default:
                        return null;
                }
            })}
        </ul>
    </div>
}

HamburgerMenu.propTypes = {
    children: PropTypes.any.isRequired,
    options: PropTypes.array,
    url: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default HamburgerMenu;