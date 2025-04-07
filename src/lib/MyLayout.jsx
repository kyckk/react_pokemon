import React from "react";
import BackDrop from "../component/BackDrop"
import Dialog from "../component/Dialog";
export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: <Dialog/>,
    };
  }

  render() {
    const value = {
      dialog: this.state.dialog,
    };
    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}

export const DialogContainer = () => (
  <layoutContext.Consumer>
    {({ dialog }) => dialog && <BackDrop>{dialog}</BackDrop>}
  </layoutContext.Consumer>
);

