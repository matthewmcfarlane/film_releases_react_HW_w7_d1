const Film = ({name, children}) => {

    return (
        <>
            <ul>
                <li>
                <a href={children}>{name}</a>
                </li>
            </ul>
        </>
    );
    
}

export default Film