import * as React from 'react';

import SelectOption from '../SelectOption';

import options from './optionsData';

class SelectWebApp extends React.Component {
    public render() {
        return (
            <div>
                <SelectOption title="2. Select a front-end framework for your project." options={options} />
            </div>
        )
    }
}

export default SelectWebApp;