const express = require('express')
const app = express()

// 导入 Express GraphQL 相关
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql');

// 创建 schema 查询和类型
const schema = buildSchema(`
    type User {
        name: String
        age: Int
    }

    type Query {
        user: User
    }
`)

// 定义 schema 的对应处理器 resolver
const rootValue = {
    user: () => ({
        name: () => "Andy",
        age: () => 28,
    })
}

// 挂载 graphql 中间件
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true, // 开启浏览器的 Graphql IDE 调试工具
}))


const port = 8080
app.listen(port, () => {
    console.log(`GraphQL API server running at http://localhost:${port}`);
    console.log(`GraphQL IDE running at http://localhost:${port}/graphql`);
})