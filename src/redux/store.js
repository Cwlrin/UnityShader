import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducer";

/**
 * 设置并返回一个配置好的 store。
 *
 * 本函数通过传递一个包含 reducer 的对象给 configureStore 函数，
 * 来配置并创建一个 Redux store。reducer 是用来更新应用状态的函数。
 * configureStore 是 Redux 库提供的用于配置 store 的高级函数，
 * 它封装了 store 的创建过程，并允许开发者传递中间件、状态还原器等配置项。
 *
 * @returns {Object} 返回一个配置好的 Redux store 对象，该对象用于存储应用的状态
 * 并提供 dispatch 方法来触发状态更新。
 */
const store = configureStore({
    reducer
});

export default store;