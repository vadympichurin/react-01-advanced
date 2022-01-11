import React, { Component, PureComponent } from "react";

class Tabs extends PureComponent {
  state = {
    activeTabIndex: 0,
  };

//   shouldComponentUpdate(nextProps, nextState){
//       return nextState.activeTabIndex !== this.state.activeTabIndex;
//   }

  setActiveTab = (idx) => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIndex];

    return (
      <>
        <div>
          {items.map((item, index) => (
            <button 
                type="button" 
                key={item.label} 
                onClick={() => this.setActiveTab(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
            <h2>{activeTab.label}</h2>
            <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
};


export default Tabs;
