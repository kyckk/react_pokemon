const BackDrop = ({ value,children, onClick }) => {
  console.log(value);
    return (
      
      <div className={`BackDrop ${value === "center" ? "" : "Side"}`} onClick={onClick}>
        {children}
      </div>
    );
  };
  
  export default BackDrop;