const express=require('express');
const app=express();

// Config
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const listTasks=[
    {
        id:1,
        task:'eeeee',
    },
];

app.get('/', (req, res) => {
    return res.render('home',{
        data:listTasks,
    });
});

app.post('/add', (req, res) => {
    const { task} = req.body;
    const id = Math.floor(Math.random() * 1000);
    
    listTasks.push({
        id,
        task,
    });
    return res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = listTasks.findIndex(post => post.id == id);
    listTasks.splice(index, 1);
    return res.redirect('/');
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log('server is runing ${PORT}.');
});