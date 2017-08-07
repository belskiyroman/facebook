#!/bin/bash

PATH_TO_COMPONENT="src/`dirname $1`"
COMPONENT_FILE_NAME=`basename $1`
COMPONENT_NAME=`echo $COMPONENT_FILE_NAME | perl -pe 's/(^|-)./uc($&)/ge;s/-//g'`
COMPONENT_DIR="$PATH_TO_COMPONENT/$COMPONENT_FILE_NAME"

mkdir -p $COMPONENT_DIR

echo ".$COMPONENT_NAME {

}" > "$COMPONENT_DIR/$COMPONENT_NAME.scss"

echo "import React, { Component } from 'react';
import './$COMPONENT_NAME.css';

class $COMPONENT_NAME extends Component {

  render() {
    return  (
      <h3 className=\"$COMPONENT_NAME\">$COMPONENT_NAME is worked</h3>
    );
  }

}

export default $COMPONENT_NAME;" > "$COMPONENT_DIR/$COMPONENT_NAME.js"


printf "\ninstalling component
  \e[32m create\e[39m $COMPONENT_DIR/$COMPONENT_NAME.js
  \e[32m create\e[39m $COMPONENT_DIR/$COMPONENT_NAME.css
\n\n"
