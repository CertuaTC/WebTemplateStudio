import React from '../../assets/React.svg';
import Vue from '../../assets/VueJS.svg';
import Angular  from '../../assets/Angular.svg';

import { Option } from '../../types/option';

const options: Array<Option> = [
    {
        svgUrl: React,
        title: "React",
        body: "React is a JavaScript library created by Facebook to help developers build UI components",
        selected: false
    },
    {
        svgUrl: Vue,
        title: "Vue.JS",
        body: "Vue.JS is an open-source JavaScript framework for building user interfaces and single page applications.",
        selected: false
    },
    {
        svgUrl: Angular,
        title: "AngularJS",
        body: "AngularJS is an open-source, front-end web application maintained by Google to develop single-page applications.",
        selected: false
    }
]

export default options;