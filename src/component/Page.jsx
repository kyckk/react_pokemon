import * as MyLayout from "../lib/MyLayout"
const Page = ({ header,children }) => {
  console.log(header)
    return (
      <div>
        {header}
        {children}
        <MyLayout.DialogContainer />
      </div>
    );
  };
  export default Page;