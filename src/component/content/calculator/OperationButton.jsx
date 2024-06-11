import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../../../redux/actions';

/**
 * OperationButton 类继承自 Component，用于渲染一个操作按钮。
 * 该按钮的功能是，当被点击时，触发 choose_operation 方法，并传递当前操作。
 */
class OperationButton extends Component {
    // 初始化状态，这里没有特定的状态需要设置，因此保持为空对象
    state = {}

    /**
     * 渲染方法，用于生成按钮的UI。
     * @returns {React.Element} 返回一个按钮元素，该按钮的点击事件绑定于 choose_operation 方法。
     */
    render() {
        // 返回一个按钮元素，按钮的文本内容为 this.props.operation。
        // 点击按钮时，会调用 this.props.choose_operation 方法，并传入 this.props.operation 作为参数。
        return (<button
            onClick={() => {
                this.props.choose_operation(this.props.operation);
            }}
        >
            {this.props.operation}
        </button>);
    }
}

/**
 * 映射dispatch到props，用于操作选择
 *
 * 该对象定义了如何将来自操作choose_operation的行动类型和操作数据映射到Redux store的dispatch方法。
 * 它使得在组件中可以直接调用choose_operation方法，而无需手动创建action对象。
 */
const mapDispatchToProps = {
    /**
     * 选择操作的行动创建器
     *
     * @param {string} operation - 要选择的操作
     * @returns {Object} - 返回一个包含行动类型和操作的action对象
     *
     * 该函数的目的是为了创建一个特定类型的action，即选择操作的action。
     * 它接受一个操作名作为参数，并返回一个包含类型为ACTIONS.CHOOSE_OPERATION和操作名的action对象。
     * 这样做是为了简化组件中触发Redux store更新的逻辑，组件可以直接调用这个方法来选择操作，
     * 而不需要关心如何构建这个action的具体细节。
     */
    choose_operation: operation => {
        return {
            type: ACTIONS.CHOOSE_OPERATION, operation: operation,
        }
    }
}


export default connect(null, mapDispatchToProps)(OperationButton);