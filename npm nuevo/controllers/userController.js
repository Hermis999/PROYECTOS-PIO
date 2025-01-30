const User = require('../models/user');

// Mostrar todos los usuarios index
exports.index = async (req, res) => {
    try{
        const users = await User.find();
        res.render('index', {users});
        //res.json(users)

    }catch(error){
        res.status(500).send(error);
    }
};


// Mostrar formulario para crear un usuario
exports.create = async (req, res) => {
    const user = null;
    res.render('create', {user});
};

exports.store = async (req, res) => {
    const {name, email, age} = req.body;
    try{
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.redirect('/');
    }catch (error){
        res.status(500).send(error);
    }
};
// Cuando le da la opción de editar un usuario (carga los datos en el formulario
// para editarlos)
exports.edit = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.render('create', {user});
    }catch(error){
        res.status(500).send(error);
    }
};

// Cuando el usuario le da al boton de guardar para que modifique los datos en la BD
exports.update = async (req, res) =>{
    const  {name, email, age} = req.body;
    try{
        await User.findByIdAndUpdate(req.params.id,{name, email, age});
        res.redirect('/');
    }catch(error){
        res.status(500).send(error);
    }
};

// Eliminar un usuario
exports.delete = async (req, res) =>{
    console.log(req.params.id)
    try{
        await User.findByIdAndDelete(req.params.id);        
        res.redirect('/');
    }catch(error){
        res.status(500).send(error);
    }
};

