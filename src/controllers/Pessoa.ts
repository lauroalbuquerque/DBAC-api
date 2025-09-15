import { Router, Request, Response, NextFunction } from 'express';
import Pessoa from '../models/Pessoa';
import { PessoaDTO } from '../pessoa/pessoa.dto';
import { v4 as uuidv4 } from 'uuid';


class PessoaController {

    constructor() {
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
        this.getByID = this.getByID.bind(this);
        this.create = this.create.bind(this);
        this.destroy = this.destroy.bind(this);
    }
    async getAll(req: Request, res: Response, next: NextFunction) {
        const pessoas: Array<PessoaDTO> = await Pessoa.findAll() as any as Array<PessoaDTO>;
        res.json(pessoas);
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        await Pessoa.update(
            {
                nome: req.body.nome,
                cpf: req.body.cpf,
                dataNascimento: new Date(req.body.dataNascimento)
            },
            {
                where: {
                    id,
                },
            },
        );
        res.status(200).json({ message: `Usuario ${req.body.nome} atualizado com sucesso!` });
    }

    async getByID(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const pessoa = await Pessoa.findByPk(id);
        res.json(pessoa);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        await Pessoa.create({
            id: uuidv4(),
            nome: req.body.nome,
            cpf: req.body.cpf,
            dataNascimento: new Date(req.body.dataNascimento)
        });
        res.status(201).json({ message: `Usuario ${req.body.nome} criado com sucesso!` });
    }

    async destroy(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        await Pessoa.destroy({
            where: {
                id,
            }
        })
        res.status(201).json({ message: `Usuario foi deletado com sucesso!` });
    }
}

export default new PessoaController();