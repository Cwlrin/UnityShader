import React, {Component} from 'react';
import Base from './Base';
import {connect} from 'react-redux';
import DigitButton from './calculator/DigitButton';
import ACTIONS from './../../redux/actions';
import OperationButton from './calculator/OperationButton';

/**
 * 计算器组件，继承自Component，用于显示和处理计算器的界面和逻辑。
 */
class Calculator extends Component {
    /**
     * 初始化状态，设置数字格式化对象。
     */
    state = {
        formater: Intl.NumberFormat('en-us')
    };

    /**
     * 格式化数字。
     * @param {string} number - 需要格式化的数字字符串。
     * @returns {string} 格式化后的数字字符串。
     */
    format = number => {
        const [integer, decimal] = number.split('.');
        if (decimal === undefined) return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`;
    }

    /**
     * 渲染计算器的UI。
     * @returns {JSX.Element} 计算器的 UI 组件。
     */
    render() {
        return (<Base>
                <div className="calculator">
                    <div className="output">
                        <div className='last-output'>
                            {this.format(this.props.lastOperand)}{this.props.operation}
                        </div>
                        <div className='current-output'>
                            {this.format(this.props.currentOperand)}
                        </div>
                    </div>
                    <button onClick={this.props.clear}>AC</button>
                    <button onClick={this.props.delete_digit}>Del</button>
                    <button>x^2</button>
                    <OperationButton operation="/"/>
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <OperationButton operation={"*"}/>
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <OperationButton operation={"-"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <DigitButton digit={"1"}/>
                    <OperationButton operation={"+"}/>
                    <OperationButton operation={"+/-"}/>
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={"."}/>
                    <button onClick={this.props.evaluate}>=</button>
                </div>
            </Base>);
    }
}

/**
 * 将应用程序状态中的相关数据映射到组件的属性上。
 *
 * 此函数的目的是从全局状态（例如 Redux 存储）中提取出当前操作数、上一个操作数和当前操作，
 * 并将这些数据作为属性提供给 React 组件。这样做可以使组件根据全局状态的变化，
 * 自动更新其显示的当前操作数、上一个操作数和操作符，而无需直接与全局状态管理逻辑耦合。
 *
 * @param {Object} state - 应用程序的全局状态对象。包含当前操作数、上一个操作数和当前操作等数据。
 * @param {Object} props - 组件的属性对象。此函数不使用props中的数据，但props必须作为参数传入，
 *                         因为这是React高阶组件或Redux连接器调用此函数的约定。
 * @returns {Object} 返回一个对象，其中包含了需要传递给组件的属性：currentOperand（当前操作数）、
 *                   lastOperand（上一个操作数）和operation（当前操作）。这些属性将被用于组件中
 *                   显示和处理计算逻辑。
 */
const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand, lastOperand: state.lastOperand, operation: state.operation,
    }
};

/**
 * 映射 dispatch 操作到组件的 props 上。
 * 这个对象定义了组件如何触发 redux store 中的 actions。
 * 每个函数都对应一个特定的 action 类型，当函数被调用时，会 dispatch 相应的 action。
 */
const mapDispatchToProps = {
    /**
     * 删除数字 action 的生成器。
     * 调用这个函数会触发一个类型为 ACTIONS.DELETE_DIGIT 的 action。
     * 用于在计算器应用中删除当前显示的数字。
     */
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT
        }
    },
    /**
     * 清空操作 action 的生成器。
     * 调用这个函数会触发一个类型为 ACTIONS.CLEAR 的 action。
     * 用于在计算器应用中清空当前显示的数字和操作历史。
     */
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    /**
     * 评估操作 action 的生成器。
     * 调用这个函数会触发一个类型为 ACTIONS.EVALUATE 的 action。
     * 用于在计算器应用中对当前显示的表达式进行计算并显示结果。
     */
    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);