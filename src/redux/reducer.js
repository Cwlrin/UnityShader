import {act} from "react-dom/test-utils";
import ACTIONS from "./actions";

/**
 * 根据当前状态计算表达式结果。
 * @param {Object} state - 计算器的状态对象，包含上次操作数、当前操作数和运算符。
 * @returns {string} - 计算结果的字符串表示。
 */
const evaluate = state => {
    // 解构赋值，获取状态对象中的关键部分
    let {lastOperand, currentOperand, operation} = state;
    // 将上次操作数和当前操作数转换为浮点数，以确保计算的准确性
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);
    // 初始化结果变量
    let res = "";

    // 根据运算符进行不同的数学运算
    switch (operation) {
        case "+":
            res = last + current;
            break;
        case "-":
            res = last - current;
            break;
        case "*":
            res = last * current;
            break;
        case "/":
            res = last / current;
            break;
    }
    // 将结果转换为字符串并返回
    return res.toString();
}


/**
 * 简易计算器状态管理函数，使用 Reducer 模式处理不同操作。
 * @param {Object} state - 计算器的当前状态。
 * @param {Object} action - 触发的操作，包含类型和相关数据。
 * @returns {Object} - 返回新的状态对象。
 */
const reducer = (state = {
    currentOperand: "", lastOperand: "", operation: "", overwrite: false,
}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            /**
             * 处理添加数字的情况。
             * 如果当前设置为覆盖模式，则清空当前操作数并插入新数字。
             * 避免在当前操作数为 0 时再次添加 0，除非是添加小数点。
             * 如果当前操作数为空且非小数点，直接插入数字。
             * 如果当前操作数已包含小数点，再次添加小数点时不变。
             * 如果当前操作数为空且添加的是小数点，则初始化为 0.。
             * 其他情况下，将数字添加到当前操作数末尾。
             */
            if (state.overwrite) return {
                ...state, currentOperand: action.digit, overwrite: false,
            }
            if (state.currentOperand === '0' && action.digit === '0') return state;
            if (state.currentOperand === '0' && action.digit !== '.') return {
                ...state, currentOperand: action.digit
            }
            if (state.currentOperand.includes('.') && action.digit === '.') return state;
            if (state.currentOperand === "" && action.digit === '.') return {
                ...state, currentOperand: "0."
            };
            return {
                ...state, currentOperand: state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            /**
             * 处理删除数字的情况。
             * 如果处于覆盖模式，则清空当前操作数。
             * 如果当前操作数为空，则不做改变。
             * 否则，删除当前操作数的最后一个字符。
             */
            if (state.overwrite) return {
                ...state, currentOperand: "", overwrite: false,
            }
            if (state.currentOperand === "") return state;
            return {
                ...state, currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATION:
            /**
             * 处理选择操作符的情况。
             * 如果当前和上一个操作数都为空，则不做改变。
             * 如果上一个操作数为空，则记录当前操作数为上一个操作数，并设置操作符。
             * 如果当前操作数为空，则只设置操作符。
             * 否则，计算当前操作数和上一个操作数的结果，记录为上一个操作数，设置操作符，清空当前操作数。
             */
            if (state.lastOperand === "" && state.currentOperand === "") return state;
            if (state.lastOperand === "") return {
                ...state, lastOperand: state.currentOperand, operation: action.operation, currentOperand: "",
            }
            if (state.currentOperand === "") return {
                ...state, operation: action.operation
            }
            return {
                ...state, lastOperand: evaluate(state), operation: action.operation, currentOperand: "",//当前属性清空
            }
            return {
                ...state, operation: action.operation,
            }
        case ACTIONS.CLEAR:
            /**
             * 处理清除操作，清空当前和上一个操作数以及操作符。
             */
            return {
                ...state, currentOperand: "", lastOperand: "", operation: "",
            }
        case ACTIONS.EVALUATE:
            /**
             * 处理计算操作。
             * 如果上一个操作数、当前操作数或操作符有任何一个为空，则不做计算。
             * 否则，计算结果并更新状态。
             */
            if (state.lastOperand === "" || state.currentOperand === "" || state.operation === "") return state;
            return {
                ...state, currentOperand: evaluate(state), lastOperand: "", operation: "", overwrite: true,
            }
        default:
            /**
             * 对于未知操作，返回当前状态不变。
             */
            return state;
    }
}

export default reducer;