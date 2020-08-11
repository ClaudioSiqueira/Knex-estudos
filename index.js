let database = require('./database')

let dados = [{
    nome: 'Valorant',
    preco: 19.99
},
{
    nome: 'Legends of Runeterra',
    preco: 4.99
},
{
    nome: 'Fall Guys',
    preco: 37.99
},
]

//INSERT
/*database.insert(dados).into('games').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/


/*SELECT
database.select(['id', 'nome']).table('games').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

/* NESTED QUERIES (QUERY DENTRO DE QUERY)
database.insert({nome: 'GTA 5', preco: 80}).into('games').then(dados =>{
    database.select().table('games').then(res =>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}).catch(err =>{
    console.log(err)
})
*/


/* WHERE
database.select()
    .whereRaw('nome = "Dota" OR id = 2')
    .table('games').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

/* DELETE
database.where({id: 5}).delete().table('games').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

/* UPDATE
database.where({id: 4}).update({nome: 'League of Legends'}).table('games').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

/*
database.select().table('games').orderBy('id', 'desc').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/


// ASSICIATED INSERTS
/*
database.insert({
    nome: 'Riot',
    game_id: 2
}).table('estudios').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

// Relacionamento 1 pra 1                                                              /TABELA     COLUNA            =  COLUNA 

/*database.select(['games.nome', 'estudios.nome as est_nome']).table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then(dados =>{
    console.log(dados)
}).catch(err =>{
    console.log(err)
})
*/

// Relacionamento 1 pra muitos  SELECIONOU TODOS OS JOGOS DO ESTUDIO RIOT
database.select(['games.nome', 'estudios.nome as est_nome']).table('games').innerJoin('estudios', 'games.estu_id', 'estudios.id').then(dados =>{
    Estudio = {
        nome: '',
        games: []
    }
    Estudio.nome = dados[1].est_nome
    dados.forEach(dado =>{
        Estudio.games.push({nome: dado.nome})
    })

    console.log(Estudio)
}).catch(err =>{
    console.log(err)
})

