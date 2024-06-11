import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../../../redux/actions';

/**
 * 数字按钮组件
 *
 * 该组件继承自Component，用于渲染一个可点击的按钮。按钮的文本内容是由其属性digit决定的，
 * 当按钮被点击时，会调用传入的add_digit函数，将digit作为参数传递给它。
 */
class DigitButton extends Component {
    // 初始化组件状态
    state = {};

    /**
     * 渲染函数
     *
     * 该函数返回一个按钮元素。按钮的点击事件被绑定到一个箭头函数上，该箭头函数会调用
     * add_digit方法，并传入digit属性作为参数。按钮的显示文本即为digit属性的值。
     *
     * @returns {React.Element} 返回一个React元素，具体为一个带有点击事件的按钮。
     */
    render() {
        return (<button onClick={() => this.props.add_digit(this.props.digit)}
        >
            {this.props.digit}
        </button>);
    }
}


/**
 * 映射dispatch到组件的props，用于将操作直接绑定到组件的UI交互上。
 * 这样做是为了分离组件的逻辑与状态管理，让组件更专注于渲染逻辑。
 *
 * @namespace mapDispatchToProps
 */

const mapDispatchToProps = {
    /**
     * 将数字添加到当前的展示数字上。
     * 此函数的目的是为了简化action的创建过程，通过dispatch这个action来改变state。
     *
     * @function add_digit
     * @param {number} digit - 需要添加的数字。
     * @returns {object} - 包含type和digit属性的对象，用于描述这个action。
     */
    add_digit: digit => {
        return {
            type: ACTIONS.ADD_DIGIT, digit: digit,
        }
    }
}


export default connect(null, mapDispatchToProps)(DigitButton);