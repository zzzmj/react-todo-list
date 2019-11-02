## todo-list

这是一个简单的todo-list应用，之前写过几次，是打了一下基础知识，这次写这个应用主要是考虑设计思想，思路等

锻炼React思维方式

## 组件划分原则

1. 解耦：降低单一模块/组件的复杂度
2. 复用：保证组件一致性，提升开发效率
3. 组件颗粒度需要避免过大或过小

## 什么是State

代表UI的完整且最小状态集合

如何判断？
1. 是否通过父组件props传入？
如果是父组件传入那么就不是

2. 是否不会随着时间，交互操作变化？
如果是一个不变的量，那么它不应该是state

3. 是否可以通过其他state或props计算得到
那么它是一个冗余的状态，不应该这样去得到

Todo State分析，应该有三部分
- 待办事项列表
- 新增输入框中的文本
- 当前筛选条件

## State的双层含义

- 代表应用UI的所有状态的集合
- 状态集合中的每一部分（待办事项列表，新增输入框中的文本，筛选条件）

## 分析State的保存位置

当一个State只存在于一个组件中，那很容易分析

当一个State存在于多个组件中，多个组件都要依赖于它
那做法是状态上移，寻找共同的父组件，将State存入共同的父组件中

## 添加交互行为

- 借助props，添加反向数据流
将父组件提供的方法传递给子组件，子组件调用父组件的方法，完成对state的修改

- 新增todo，修改todo状态，过滤显示



## Redux