const Page = ({ header,children }) => {
  console.log(header)
    return (
      <div>
        {header}
        {children}
      </div>
    );
  };
  export default Page;