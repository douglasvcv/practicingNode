module.exports= {
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "19102012",
    database: "demodb",
    define: {
        timestamp: true, //cria duas colunas: createdAt, updateedAt
        underscored: true,
        underscoredAll: true,
        
    }
}