import express from 'express';
import PessoaController from '../controllers/Pessoa'

const pessoaRoute = express.Router();

pessoaRoute.get('/', PessoaController.getAll);
pessoaRoute.put('/:id', PessoaController.update);
pessoaRoute.get('/:id', PessoaController.getByID);
pessoaRoute.post('/', PessoaController.create);
pessoaRoute.delete('/:id', PessoaController.destroy);

export { pessoaRoute };