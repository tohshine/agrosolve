import React, { useState } from "react";

import { Text } from "../utilities";

export const ResponseMessage = (serverMsg) => {
  const message = () => {
    if (serverMsg && serverMsg.status === 200) {
      return (
        <Text bold color='green'>
          {serverMsg.message}
        </Text>
      );
    } else if (serverMsg) {
      return (
        <Text bold color='red'>
          {serverMsg.message}
        </Text>
      );
    }
  };

  return { message };
};
