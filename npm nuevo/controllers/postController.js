const conexP = require('../config/dbPostgre');

exports.indexProd = async (req, res) => {
    try{
        const consulta = 'SELECT p."idProd", p.nombre, p.stock, p.precio, p.estado, p."valorTotal", c.idcategoria as idcat,c.nombre as categoria
FROM productos p
JOIN categorias c ON p.idcategoria = c.idcategoria'
    }catch(error){
        res.status(500).send(error);
    }
};