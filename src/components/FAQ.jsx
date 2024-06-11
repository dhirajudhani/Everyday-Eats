
const FAQ = ({ title, description, showItems, setShowItems }) => {
    const handleClick = () => {
      setShowItems();
    };
  
    return (
      <div className="border border-gray-300 rounded-lg w-full sm:w-auto sm:max-w-sm mx-auto p-4 mt-4">
        <div className="pt-1 pb-1" onClick={handleClick}>
          <h3>{title}</h3>
          {showItems ? (
            <i className={`fa-solid fa-chevron-up`}></i>
          ) : (
            <i className={`fa-solid fa-chevron-down`}></i>
          )}
        </div>
        {showItems && <p className="border-t border-solid border-gray-300 w-full transition-all duration-600 ease-in-out overflow-hidden py-2">{description}</p>}
      </div>
    );
  };
  
  export default FAQ;
  