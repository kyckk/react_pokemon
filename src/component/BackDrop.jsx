const BackDrop = ({ children, onClick }) => {
    return (
      <div className="BackDrop" onClick={onClick}>
        {children}
      </div>
    );
  };
  
  export default BackDrop;