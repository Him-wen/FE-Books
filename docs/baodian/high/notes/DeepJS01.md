# 深入JS之作用域链
## 作用域链
在 变量对象 中提及到，当查找变量的时候，会先从当前执行上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由*多个执行上下文的变量对象构成的链表*就叫做作用域链。
