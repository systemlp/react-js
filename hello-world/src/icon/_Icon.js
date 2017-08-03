import React, {Component} from 'react';
import {Icon} from 'antd';

export default class _Icon extends Component {
    render() {
        return (
            <div>
                <dl>
                    <dt>
                        <h2>Icon图标</h2>
                        详情请参考<a href="https://ant.design/components/icon-cn/" target="_blank">antd图标</a>
                    </dt>
                    <dd>
                        <Icon type="apple" style={{fontSize: 18}}/>&nbsp;
                        <Icon type="chrome" spin/>
                    </dd>
                </dl>
            </div>
        )
    }
}
