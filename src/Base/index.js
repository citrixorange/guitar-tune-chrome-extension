import React from 'react';

let Div, Button, Img, Txt;

if(process.env.target == 'MOBILE') {

    let View = require('react-native').View;
    let Image = require('react-native').Image;
    let Text = require('react-native').Text;

    Div = (props) => {
        return <View {...props}/>;
    }

    Button = (props) => {
        return <View {...props}/>;
    }

    Img = (props) => {
        return <Image {...props}/>;
    }

    Txt = (props) => {
        return <Text {...props}/>;
    }


} else {
    Div = (props) => {
        return <div {...props}/>;
    }

    Button = (props) => {
        return <button {...props}/>;
    }

    Img = (props) => {
        return <img {...props}/>;
    }

    Txt = (props) => {
        return <div {...props}/>;
    }
}

export {
    Div,
    Img,
    Button,
    Txt
}