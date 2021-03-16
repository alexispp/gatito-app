import { memo } from "react";

const withMemo = (Component:any, checkedProps:any) => {
  function areEqual(prevProps:any, nextProps:any) {
    let isEqual = true;
    for (let i = 0; i < checkedProps.length; i++) {
      const checkedProp = checkedProps[i];
      if (
        JSON.stringify(prevProps[checkedProp]) !==
        JSON.stringify(nextProps[checkedProp])
      ) {
        isEqual = false;
        break;
      }
    }
    console.log('memo')
    return isEqual;
  }

  return memo(Component, areEqual);
};

export default withMemo;